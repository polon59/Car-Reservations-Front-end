import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CarsTableCell = (props) =>{
    const {brand,model,category,price} = props.carData;


    return(
        <Grid item xs={12} sm={6} md={4}>
            <Paper className="carsTablePaper">
                <h3>{`${brand} ${model}`}</h3>
                <p>{category}</p>
                <h4>{`${price} 	€/Day`}</h4>
            </Paper>
        </Grid>
    )
}

export default CarsTableCell;