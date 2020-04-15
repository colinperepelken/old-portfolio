import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {
    Grid,
    Typography
} from "@material-ui/core";

class Resume extends Component {
    render() {

        return (
            <div className="container-fluid">
                <Grid container direction="column" justify="center" alignItems="center">
                    <Typography variant="h2">Resume</Typography>
                </Grid>
            </div>
        );
    }
}

export default Resume;