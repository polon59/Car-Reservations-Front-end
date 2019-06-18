import React from 'react';

const ViewCar = (props) =>{
    console.log(props.match.params.id)
    // const {carData} = props;
    // console.log(props.route.carData)
    return(
        <div>
            <h4>VievCar</h4>
        </div>
    )
}

export default ViewCar;