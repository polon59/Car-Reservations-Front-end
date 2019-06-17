import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CarsTable = (props) =>{
    const {cars} = props;

    const carsList = cars.map((element)=>{
        return (
            <Grid item xs={4}>
                <Paper >
                    {JSON.stringify(element)}
                </Paper>
            </Grid>
        )
    })


    return(
    <div>
      <Grid container spacing={3}>
        {carsList}
      </Grid>
    </div>
    )
}

export default CarsTable;