import React from 'react';
import {
    Grid,
    Typography
} from "@material-ui/core";

const Resume = () => {
    return (
        <div className="container-fluid">
            <Grid container direction="column" justify="center" alignItems="center">
                <Typography variant="h2">Resume</Typography>
            </Grid>
        </div>
    );
}

export default Resume;