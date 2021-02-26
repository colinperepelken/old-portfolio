import React from 'react';
import {
    Grid,
    Typography,
    Box,
    Paper,
    Link
} from "@material-ui/core"; 

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
    },
}));

const Contact = () => {
    const classes = useStyles(theme);

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item container direction="column" justify="center" alignItems="center" xs={12}>
                <Paper elevation={2} className={classes.paper}>
                    <Box>
                        <Typography color="textSecondary">If you have any questions about my work, or just want to chat, send me an email at <Link color="secondary" href="mailto:colin@perepelken.ca">colin@perepelken.ca</Link> and I'll respond as soon as possible.</Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Contact;
