import React, { Component } from 'react';
import CarsTable from './CarsTable';
import './styles/Offer.css';
import StillLoading from '../common/StillLoading';
import FilterBar from './FilterBar';

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
                <React.Fragment>
                    <h3>page with offer</h3>
                    <FilterBar/>
                    <StillLoading/>
                </React.Fragment>
            )
        }

        return(
            <div>
                <h3>page with offer</h3>
                <FilterBar/>
                <CarsTable cars = {cars}/>
                {/* {JSON.stringify(cars)} */}
            </div>
        )
    }
}

export default Offer;