import React from 'react';
import {
    Grid,
    Typography,
    Paper,
    Box,
    Button,
    Icon,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Link
} from "@material-ui/core";

import phpImage from '../assets/php.png';
import moodleImage from '../assets/moodle.png';
import dockerImage from '../assets/docker.png';
import laravelImage from '../assets/laravel.png';
import javaScriptImage from '../assets/javascript.png';
import gitImage from '../assets/git.png';
import mysqlImage from '../assets/mysql.png';
import reactImage from '../assets/react.png';
import pythonImage from '../assets/python.png';

import { theme } from "../theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    sectionHeading: {
        borderBottomWidth: "4px",
        borderBottomStyle: "solid",
        borderBottomColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('sm')]: {
        resumeBox: {
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    resumeDate: {
        fontStyle: "italic",
        position: "absolute",
        right: "10px",
        fontSize: ".7rem",
        color: theme.palette.secondary.main,
    },
    resumeList: {
        marginRight: "7rem"
    },
    resumeContent: {
        position: "relative"
    },
    skillsImage: {
        borderRadius: "5%",
        height: "100px",
        width: "auto",
        objectFit: "cover"
    }
}));

const Resume = () => {

    const classes = useStyles(theme);

    const skillsData = [
        {src: phpImage, alt: "PHP logo"},
        {src: moodleImage, alt: "Moodle logo"},
        {src: dockerImage, alt: "Docker logo"},
        {src: laravelImage, alt: "Laravel logo"},
        {src: javaScriptImage, alt: "JavaScript logo"},
        {src: gitImage, alt: "Git logo"},
        {src: mysqlImage, alt: "MySQL logo"},
        {src: reactImage, alt: "React logo"},
        {src: pythonImage, alt: "Python logo"},
    ];

    return (
        <div className="container-fluid">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center">Resume</Typography>
                </Grid>
            </Grid>
            <Box mt={3}>
                <Grid container spacing={3}>
                    <Grid item lg={3} component={Box} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
                        <Paper>
                            <Box p={3} pt={1}>
                                <List
                                    aria-labelledby="nested-list-subheader"
                                    subheader={
                                        <ListSubheader disableSticky component="div" id="nested-list-subheader">
                                            Quick access
                                        </ListSubheader>
                                    }
                                >
                                    <Link href="#reference" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Most recent reference" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#education" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Education" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#experience" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Work experience" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#skills" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Technical skills" />
                                        </ListItem>
                                    </Link>


                                    <Link href="#leadership" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Leadership &amp; teamwork" />
                                        </ListItem>
                                    </Link>
    
                                </List>
                                
                                <Button variant="contained" color="secondary">
                                    <Icon className="fas fa-download" fontSize="small" style={{marginRight: "1rem"}}></Icon>
                                    Download resume
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={12} lg={9}>
                        <Box className={classes.resumeBox}>
                            <Box mb={3} id="reference">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                            Most recent reference
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper elevation={3} className={classes.resumeContent}>
                                            <Box p={2}>
                                                <Typography component="p" color="textSecondary">
                                                    “Colin has been doing a fantastic job for WCLearningNetwork. His work has mainly
                                                    focused on building educational games (HTML5) and developing Moodle plugins
                                                    (php/mysql). Colin has jumped into his work with great attention to detail as well as
                                                    excellent creativity when needed. I would definitely recommend Colin as a solid employee
                                                    who is self-motivated, smart, and dependable. I realize that with his graduation coming, I'll
                                                    likely lose him this year. Given that, WCLN has definitely benefited from his work.”
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box mb={3} id="education">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                            <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                                Education
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                <Typography variant="h6" component="h4">
                                                    BSc, Major in Computer Science, Minor in Mathematics
                                                </Typography>
                                                <Typography variant="subtitle2" component="h5">
                                                    The University of British Columbia <span className={classes.resumeDate}>2014 - 2018</span>
                                                </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul className={classes.resumeList}>
                                                            <li>Vice-President of the Quantitative Sciences Course Union <span className={classes.resumeDate}>2017 - 2018</span></li>
                                                            <li>Internal Coordinator of the Quantitative Sciences Course Union <span className={classes.resumeDate}>2016 - 2017</span></li>
                                                            <li>Dean's List <span className={classes.resumeDate}>2015</span></li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                </Grid>
                            </Box>

                            <Box mb={3} id="experience">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                            <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                                Work experience
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Senior Software Developer
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Lingel Learning <span className={classes.resumeDate}>2019 - present</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Moodle development (blocks, modules, themes, web services, etc...)</li>
                                                            <li>Full-stack application development using the Laravel framework</li>
                                                            <li>Integrating Moodle with other web applications using various authentication methods and APIs</li>
                                                            <li>Managing software development projects end-to-end</li>
                                                            <li>Using AWS, git version control, and Docker</li>
                                                            <li>Providing support services for customer issues</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Software Developer
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Western Canadian Learning Network <span className={classes.resumeDate}>2016 - present</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Develop an LTI provider plugin to distribute course content to school districts across Western Canada. The provider handles millions of student requests for resources every year and has been integrated into Moodle, Canvas, and D2L</li>
                                                            <li>Develop a Learning Object Repository (LOR) plugin to store and manage 3500+ games, projects, video tutorials, lessons and learning guides which can be embedded in courses</li>
                                                            <li>Develop a Game Creator local plugin used by teachers to create 180+ games which are included in courses to help teach various concepts</li>
                                                            <li>Develop 30+ educational HTML5/JavaScript games and media which are used by 51 BC school districts, the Yukon, and an Alberta division</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Software Developer
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Latitude Geographics <span className={classes.resumeDate}>2018</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Design and evelop customized web-GIS applications to client specifications using C#, .NET, and Typescript</li>
                                                            <li>Write technical documentation and strict test cases to support software deployment</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Undergraduate Academic Assistant
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Department of Creative Studies, UBC Okanagan <span className={classes.resumeDate}>2018</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Create a GIS mapping project template and database to record significant project activities and knowledge that has been produced as a result of the Border Free Bees initiative</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Undergraduate Research Assistant
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        School of Engineering, UBC Okanagan <span className={classes.resumeDate}>2017</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Extract features for the gas sensing project to better uniquely identify VOCs</li>
                                                            <li>Perform statistical analysis on breath-analyzer data using MATLAB</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                </Grid>
                            </Box>

                            <Box mb={3} id="skills">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                            <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                                Technical skills 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                    <Grid container spacing={3} justify="center">

                                                        {skillsData.map((skill) => {
                                                            return (
                                                                <Grid item>
                                                                    <img className={classes.skillsImage} src={skill.src} alt={skill.alt}/>
                                                                </Grid>
                                                            );
                                                        })}

                                                    </Grid>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                </Grid>
                            </Box>

                            <Box mb={3} id="leadership">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                            <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                                Leadership &amp; teamwork 
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul className={classes.resumeList}>
                                                            <li>Presented Git workshops <span className={classes.resumeDate}>2018, 2019, 2020</span></li>
                                                            <li>Planned and organized $10,000 in funding to enable more than 20 UBC-O students to attend the Canadian Undergraduate Computer Science Conference and the Canadian Undergraduate Mathematics Conference <span className={classes.resumeDate}>2016, 2017</span></li>
                                                            <li>Volunteered to promote computer science and math to high-school students through day-camps and visitations<span className={classes.resumeDate}>2017, 2018</span></li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                </Grid>
                            </Box>

                    </Box>

                    <Box mt={2} align="center" display={{ md: 'block', lg: 'none' }}>
                        <Button variant="contained" color="secondary">
                            <Icon className="fas fa-download" fontSize="small" style={{marginRight: "1rem"}}></Icon>
                            Download resume
                        </Button>
                    </Box>
                    </Grid>
                </Grid>

            </Box>
        </div>
    );
}

export default Resume;