import React from 'react';
import Grid from '@material-ui/core/Grid';

const Footer = (props) =>{
    return(
        <footer>
            <Grid container justify="center">
                <Grid item xs={12} md={4}>
                    <p>Contact</p> 
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>Designed and built by Seweryn91 & polon59</p>
                </Grid>
                <Grid item xs={12} md={4}>
                    <p>About</p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer;