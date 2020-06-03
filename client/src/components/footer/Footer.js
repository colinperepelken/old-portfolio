import React from 'react';

import { Copyright } from "@material-ui/icons";

import {
    Grid
} from "@material-ui/core";

import { theme } from "../../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    toBottom: {
        // position: "absolute",
        // bottom: 0
    }
  }));

const Footer = () => {
    const classes = useStyles(theme);
    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.toBottom}>
            <p><i>Copyright <Copyright fontSize="inherit" /> {new Date().getFullYear()} Colin Perepelken</i></p>
        </Grid>
    );
}

export default Footer;