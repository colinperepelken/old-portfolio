import React from 'react';
import {
    Grid,
    Typography,
    Box,
    TextField,
    Button,
    Paper,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions
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
    let state = {};


    const [open, setOpen] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.console.log(state);

        fetch('http://localhost:3002/mail/send', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.status === 'success') {
                state = {};
            } else if (response.status === 'fail') {
                alert('Failed to send message. You can email Colin directly at colin@perepelken.ca.');
            }

            handleOpen();
        })
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item container direction="column" justify="center" alignItems="center" xs={12}>
                <Paper elevation={2} className={classes.paper}>
                    <Box mb={4}>
                        <Typography color="textSecondary">If you have any questions about my work, or just want to chat, send me a message using the form below and I'll respond as soon as possible.</Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <TextField onChange={e => state.name = e.target.value} fullWidth name="name" color="secondary" className={classes.textField} label="Your name" variant="filled" value={state.name} required />
                        <TextField onChange={e => state.email = e.target.value} fullWidth name="email" color="secondary" className={classes.textField} label="Your email address" variant="filled" value={state.email} required />
                        <TextField onChange={e => state.message = e.target.value} fullWidth name="message" color="secondary" className={classes.textField} label="Message" variant="filled" multiline rows={6} value={state.message} required />
                        <Button type="submit" variant="contained" color="secondary">Submit</Button>
                    </form>
                </Paper>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Message sent successfully!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default Contact;