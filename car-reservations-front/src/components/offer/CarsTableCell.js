import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import ViewCar from './ViewCar';

const CarsTableCell = (props) =>{
    const {carId,brand,model,category,price,imageSource} = props.carData;


    return(
        <Grid item xs={12} sm={6} md={4} className="carsTableCell">
            <Link to={`/offer/carViewCar/${carId}`} >
                <Paper className="carsTablePaper">
                    <div className="imageWrapper">
                        <img src={imageSource} alt={model}/>
                    </div>
                    <h3>{`${brand} ${model}`}</h3>
                    <p>{category}</p>
                    <h4>{`${price} 	€/Day`}</h4>
                </Paper>
            </Link>
        </Grid>
    )
}

export default CarsTableCell;