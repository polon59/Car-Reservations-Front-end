import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CarsTableCell = (props) =>{
    const {brand,model,category,price,imageSource} = props.carData;


    return(
        <Grid item xs={12} sm={6} md={4} className="carsTableCell">
            <Paper className="carsTablePaper">
                <div className="imageWrapper">
                    <img src={imageSource} alt={model}/>
                </div>
                <h3>{`${brand} ${model}`}</h3>
                <p>{category}</p>
                <h4>{`${price} 	€/Day`}</h4>
            </Paper>
        </Grid>
    )
}

export default CarsTableCell;