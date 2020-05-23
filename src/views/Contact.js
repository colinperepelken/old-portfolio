import React from 'react';
import {
    Grid,
    Typography,
    Box,
    TextField,
    Button,
    Paper
} from "@material-ui/core"; 

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    textField: {
        marginBottom: theme.spacing(1),
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

const Contact = () => {
    const classes = useStyles(theme);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.console.log('Submitted!!!');
    };


    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item container direction="column" justify="center" alignItems="center" xs={12}>
                <Paper elevation={2} className={classes.paper}>
                    <Box mb={4}>
                        <Typography color="textSecondary">If you have any questions about my work, or just want to chat, send me a message using the form below and I'll respond as soon as possible.</Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth name="name" color="secondary" className={classes.textField} label="Your name" variant="filled" required />
                        <TextField fullWidth name="email" color="secondary" className={classes.textField} label="Your email address" variant="filled" required />
                        <TextField fullWidth name="message" color="secondary" className={classes.textField} label="Message" variant="filled" multiline rows={6} required />
                        <Button variant="contained" color="secondary">Submit</Button>
                    </form>
                </Paper>

            </Grid>
        </Grid>
    );
}

export default Contact;