import React, { Component } from 'react';
import {
    Grid
} from "@material-ui/core";

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

import backgroundImage from '../assets/chris-barbalis-9zIF7YWPmUM-unsplash.jpg';

const useStyles = makeStyles(theme => ({
    mainImage: {
      backgroundImage: `url(${backgroundImage})`,
      minHeight: "400px",
    }
  }));

function Home() {
    const classes = useStyles(theme);
    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.mainImage}>
            <h1>Colin Perepelken</h1>
            <h2>Software Developer</h2>
        </Grid>
    );
}

export default Home;