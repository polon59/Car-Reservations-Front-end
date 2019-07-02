import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class FilterBar extends Component{
    constructor(props){
        super();
        this.state = {}
    }


    render(){
        return(
            <Grid className="filterBar" container justify="center">
                <Grid item xs={12} md={4}>
                    <p>option 1</p> 
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>option 2</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>option 3</p>
                </Grid>
            </Grid>
        )
    }
}

export default FilterBar;