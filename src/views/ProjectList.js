import React, { Component } from 'react';
import {
    Grid,
    Typography
} from "@material-ui/core";

class ProjectList extends Component {
    render() {
        return (
            <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h2">Projects</Typography>
            </Grid>
        );
    }
}

export default ProjectList;