import React from 'react';
import CarsTableCell from './CarsTableCell';
import Grid from '@material-ui/core/Grid';

const CarsTable = (props) =>{
    const {cars} = props;

    const carsList = cars.map((element)=>{
        return (
            <CarsTableCell key={element.carId} carData = {element}/>
        )
    })


    return(
    <div>
      <Grid container spacing={1}>
        {carsList}
      </Grid>
    </div>
    )
}

export default CarsTable;