import React, { Component } from 'react';
import CarsTable from './CarsTable';


class Offer extends Component{

    constructor(props){
        super();
        this.DBAccess = props.DBAccess;
        this.state = {
            cars : null
        }
    }

    updateCarsList = () =>{
        this.DBAccess.getAllCars().then((result)=>{
            this.setState({cars:result});
        })
    }

    componentWillMount(){
        setTimeout(() => {
            this.updateCarsList();
        }, 1100); 
    }

    render(){
        const {cars} = this.state;
        if (!cars){
            return(
                <h3>Loading...</h3>
            )
        }

        return(
            <div>
                <h3>page with offer</h3>
                <CarsTable cars = {cars}/>
                {/* {JSON.stringify(cars)} */}
            </div>
        )
    }
}

export default Offer;