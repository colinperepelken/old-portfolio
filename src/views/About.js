import React from 'react';
import {
    Grid,
    Typography,
    Link,
    Box,
    Paper,
    Icon,
    GridList,
    GridListTile
} from "@material-ui/core";

import profileImage from '../assets/profile_tree.jpg';
import bearCreekImage from '../assets/bear_creek.jpg';
import peaceSignImage from '../assets/peace_sign.jpg';

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import { githubLink, linkedinLink } from '../constants';

const useStyles = makeStyles(theme => ({
    aboutBox: {
        flexGrow: 1,
        maxWidth: "1400px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    aboutSection: {
        marginBottom: "1em",
    },
    aboutPaper: {
        height: "100%"
    },
    aboutLink: {
        fontSize: "50px"
    }
}));

const About = () => {
        const classes = useStyles(theme);

        const tileData = [
            {
                img: profileImage,
                title: "Colin's face",
            },
            {
                img: bearCreekImage,
                title: "Colin on a hike!",
            },
            {
                img: peaceSignImage,
                title: "Sitting on log near ocean",
                cols: 2
            },
        ];

        return (
            <Box className={classes.aboutBox}>
                <Grid container spacing={3} alignItems="stretch">
                    <Grid container justify="center" alignItems="center" item xs={12} sm={7}>
                        <GridList cellHeight={245} className={classes.gridList} cols={2}>
                            {tileData.map((tile) => (
                                <GridListTile key={tile.img} cols={tile.cols || 1}>
                                    <img src={tile.img} alt={tile.title} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Paper elevation={3} className={classes.aboutPaper}>
                            <Box p={4}>
                                <Typography className={classes.aboutSection} align="center">
                                    I am very lucky to live in beautiful Kelowna, BC with my wonderful wife. I graduated from the University of British Columbia (Okanagan) in 2018 and have
                                    been enjoying my work as a software developer since.
                                </Typography>
                                <Typography className={classes.aboutSection} align="center">
                                    I am an avid cyclist and love to spend my time outside of work mountain biking in the hills, to the grocery store, and to campgrounds around BC. I am passionate about travelling by bicycle as a means to reduce my environmental impact.
                                </Typography>
                                <Typography className={classes.aboutSection} align="center">
                                    I specialize in e-learning and Moodle development. I am currently working with <Link color="secondary" href="https://wcln.ca">Western Canadian Learning Network</Link> to provide
                                    courses to Canadian students, and <Link color="secondary" href="https://lingellearning.com">Lingel Learning</Link> to develop custom online learning solutions for clients in Canada and Australia.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography align="center">
                                    <i>Follow me on:</i>
                                </Typography>
                                <Box mt={3}>
                                    <Grid container justify="center" spacing={3}>
                                        <Grid item>
                                            <Link href={linkedinLink} className={classes.aboutLink} color="secondary">
                                                <Icon className="fab fa-linkedin" fontSize="inherit"/>
                                            </Link>

                                        </Grid>
                                        <Grid item>
                                        <Link href={githubLink} className={classes.aboutLink} color="secondary">
                                                <Icon className="fab fa-github" fontSize="inherit"/>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        );

}

export default About;
