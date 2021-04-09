import React from 'react';
import {
    Grid, Typography
} from "@material-ui/core";

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

import backgroundImage from '../assets/paul-gilmore-KT3WlrL_bsg-unsplash.jpg';

const useStyles = makeStyles(theme => ({
    mainImage: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "40vh"
    },
    subtitle: {
        marginTop: 0,
    }
  }));

const Home = () => {
    const classes = useStyles(theme);
    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.mainImage}>
            <Typography variant="h1">Colin Perepelken</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>Software Developer</Typography>
        </Grid>
    );
}

export default Home;
