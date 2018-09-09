import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';


class LandingPage extends Component {
    render(){
        return(
            <div>
                <Grid container style={{width: '100%', margin: 'auto'}}>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <p>Hello world</p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;