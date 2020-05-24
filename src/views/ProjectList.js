import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Button,
} from "@material-ui/core";

import wclnImage from '../assets/bike_profile.jpg';

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    cardImage: {
        height: 140
    },
}));

const ProjectList = () => {

    const classes = useStyles(theme);

    const projectData = [
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
        {
            title: "WCLN LTI provider solution",
            content: "I built a custom LTI provider solution for Western Canadian Learning Network to distribute course content to school districts throughout Western Canada. It handles millions of resource requests every year.",
            image: wclnImage,
            github: 'https://github.com/wcln/moodle-local_lti'
        },
    ];

    return (
        <Grid container justify="center" alignItems="center" spacing={3}>
            {projectData.map((project) => {
                return (
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardMedia 
                                className={classes.cardImage}
                                image={project.image}
                                title={project.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary" href={project.github}>
                                    View on GitHub
                                </Button>
                            </CardActions>
                        </Card> 
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default ProjectList;