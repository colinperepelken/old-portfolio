import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {
    Grid
} from "@material-ui/core";

class Resume extends Component {
    render() {

        return (
            <div className="container-fluid">
            <Grid container direction="column" justify="center" alignItems="center">
                <h3>Resume</h3>
            </Grid>
            </div>
        );
    }
}

export default Resume;