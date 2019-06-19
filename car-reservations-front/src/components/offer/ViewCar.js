import React, { Component } from 'react';

class ViewCar extends Component{

    constructor(props){
        super();
        this.DBAccess = props.DBAccess;
        this.state = {
            selectedCarID : props.id,
            selectedCarDetails : null
        }
    }

    componentWillMount() {
        const {selectedCarID} = this.state;
        this.DBAccess.getCarDetailsById(selectedCarID)
        .then((result)=>{
            this.setState({selectedCarDetails:result});
        })
    }
    
    render(){
        const {selectedCarDetails} = this.state;

        if (!selectedCarDetails){
            return(
                <div>
                    <h4>Loading...</h4>
                </div>
            )
        }
        const{carId,brand,model,category,price,imageSource,year,seats,doors,automaticGearbox,automaticAC} = selectedCarDetails;
        return(
            <div>
                <div>
                    <img src={imageSource} alt={model}/>
                </div>
                <h3>{`${brand} ${model}`}</h3>
                <p>{category}</p>
                <h4>{`year: ${year}`}</h4>
                <h4>{`seats: ${seats}`}</h4>
                <h4>{`doors: ${doors}`}</h4>
                <h4>{`automaticGearbox: ${automaticGearbox}`}</h4>
                <h4>{`automaticAC: ${automaticAC}`}</h4>
            </div>
        )
    }
}

export default ViewCar;