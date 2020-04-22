import React from 'react';
import {
    Grid,
    Typography,
    Link,
    Box
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
    aboutSection: {
        marginBottom: "1em",
    },
}));

const About = () => {
        const classes = useStyles(theme);
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box mb={2}>
                            <Typography align="center" variant="h2" mb={4}>About</Typography>
                        </Box>
                    </Grid>
                    <Grid container justify="center" item xs={12} sm={6}>
                        <img className={classes.profileImage} src={profileImage} alt="Picture of Colin" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography className={classes.aboutSection} align="center">
                            I am very lucky to live in beautiful Kelowna, BC. I graduated from the University of British Columbia (Okanagan) in 2018 and have
                            been enjoying my work as a software developer since.
                        </Typography>
                        <Typography className={classes.aboutSection} align="center">
                            I love to take a break from computer work by biking in the mountains around Kelowna, and canoeing on the many surrounding lakes.
                        </Typography>
                        <Typography className={classes.aboutSection} align="center">
                            I specialize in e-learning and Moodle development. I am currently working with <Link color="secondary" href="https://wcln.ca">Western Canadian Learning Network</Link> to provide
                            courses to students in BC, and <Link color="secondary" href="https://lingellearning.com">Lingel Learning</Link> to develop custom online learning solutions for clients in Canada and Australia.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    
}

export default About;