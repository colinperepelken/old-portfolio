import React, { Component } from 'react';

import { Copyright } from "@material-ui/icons";

import {
    Grid
} from "@material-ui/core";

import { theme } from "../../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    copyrightLogo: {
        fontSizeInherit: "1rem"
    },
  }));

function Footer() {
    const classes = useStyles(theme);
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <p><i>Copyright <Copyright fontSize="inherit" /> {new Date().getFullYear()} Colin Perepelken</i></p>
        </Grid>
    );
}

export default Footer;