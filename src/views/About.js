import React, { Component } from 'react';
import {
    Grid,
    Typography
} from "@material-ui/core";
class About extends Component {
    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h2">About</Typography>
            </Grid>
        );
    }
}

export default About;