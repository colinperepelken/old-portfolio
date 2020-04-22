import React, { Component } from 'react';
import {
    Grid,
    Typography
} from "@material-ui/core";

import profileImage from '../assets/bike_profile.jpg';

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    profileImage: {
        width: "90%",
        maxWidth: "500px"
    },
    root: {
        flexGrow: 1,
      },
}));

const About = () => {
        const classes = useStyles(theme);
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h2">About</Typography>
                    </Grid>
                    <Grid container justify="center" item xs={12} sm={6}>
                        <img className={classes.profileImage} src={profileImage} alt="Picture of Colin" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography align="center">
                            Some text here
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    
}

export default About;