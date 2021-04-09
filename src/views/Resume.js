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
import vueImage from '../assets/vue.png';

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
        {src: vueImage, alt: "Vue.js logo"},
    ];

    return (
        <div className="container-fluid">
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
                                    <Link href="#overview" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Overview" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#skills" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Skills" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#experience" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Experience" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#education" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Education" />
                                        </ListItem>
                                    </Link>


                                    <Link href="#technologies" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Technologies" />
                                        </ListItem>
                                    </Link>

                                    <Link href="#reference" color="secondary">
                                        <ListItem button>
                                            <ListItemText primary="Most recent reference" />
                                        </ListItem>
                                    </Link>

                                </List>

                                <Button variant="contained" color="secondary" href="http://colin.perepelken.ca/files/Colin%20Perepelken%20-%20Resume.pdf" target="_blank">
                                    <Icon className="fas fa-download" fontSize="small" style={{marginRight: "1rem"}}></Icon>
                                    Download resume
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item md={12} lg={9}>
                        <Box className={classes.resumeBox}>
                            <Box mb={3} id="overview">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                            Overview
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper elevation={3} className={classes.resumeContent}>
                                            <Box p={2}>
                                                <Typography component="p" color="textSecondary">
                                                    An enthusiastic software developer with experience building applications to support Canadian school districts, and clients worldwide. Strives to create clean, concise code for real-world applications that make a difference.
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
                                                Skills
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                <Typography variant="h6" component="h4">
                                                    Frontend web development
                                                </Typography>
                                                <Typography component="div" color="textSecondary">
                                                    Experience designing and developing dynamic user interfaces using Vue.js, ReactJS, JavaScript, Bulma, MaterialUI, and Bootstrap.
                                                </Typography>
                                                    <Typography variant="h6" component="h4">
                                                        Backend development
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        Developed an ecommerce site that integrates with Moodle, enrolmart.com, using the Laravel MVC framework while working with Lingel Learning.
                                                    </Typography>
                                                    <Typography variant="h6" component="h4">
                                                        Database design & implementation
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        Strong knowledge of MySQL database design, and experience writing complex and efficient queries.
                                                    </Typography>
                                                    <Typography variant="h6" component="h4">
                                                        Scalable infrastructure
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        Created a load-balanced infrastructure in AWS using services such as RDS, S3, EC2, ELB, and Elasticache.
                                                    </Typography>
                                                    <Typography variant="h6" component="h4">
                                                        Other skills include:
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        Java, PHP, Postman, REST, JWT, Git, Python, Linux, Docker.
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
                                                Experience
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Senior Software Developer
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Lingel Learning <span className={classes.resumeDate}>Apr 2019 - present</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Moodle development (PHP, Vue.js, JavaScript) for client specific projects including APIs, themes, authentication, and custom reports.</li>
                                                            <li>Built a SAAS Moodle solution using a load-balanced AWS infrastructure to manage client sites in Canada and Australia.</li>
                                                            <li>Presented video training sessions, provided support services, and managed technical documentation for clients.</li>
                                                            <li>Full stack application development using Laravel.</li>
                                                            <li><b>Leadership skills:</b> Managed and mentored a Junior Developer. Involved in the hiring and interview process for multiple positions.</li>
                                                            <li><b>Teamwork skills:</b> Facilitated work social gatherings, and “Teach something Thursday” to connect employees in Australia and Canada.</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Software Developer
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Western Canadian Learning Network <span className={classes.resumeDate}>May 2016 - Sep 2020</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Developed an LTI provider to distribute courses to school districts across Western Canada. The provider handles millions of student requests every year and has been integrated into Moodle, Canvas, and D2L.</li>
                                                            <li>Created a Learning Object Repository using Vue.js to store and manage 5000+ games, projects, video tutorials, and learning guides.</li>
                                                            <li>Developed a Game Creator used by teachers to create 200+ educational resources.</li>
                                                            <li><b>Collaboration skills:</b> Worked with teachers to build a Computer Science 11 course in line with the updated BC education curriculum.</li>
                                                        </ul>
                                                    </Typography>
                                                </Box>
                                                <Box p={2}>
                                                    <Typography variant="h6" component="h4">
                                                        Software Developer
                                                    </Typography>
                                                    <Typography variant="subtitle2" component="h5">
                                                        Latitude Geographics <span className={classes.resumeDate}>May 2018 - Aug 2018</span>
                                                    </Typography>
                                                    <Typography component="div" color="textSecondary">
                                                        <ul>
                                                            <li>Designed and developed customized web-GIS applications to client specifications using C#, .NET, and Typescript</li>
                                                        </ul>
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
                                                        <li>Vice-President of the Quantitative Sciences Course Union</li>
                                                        <li>Dean's List</li>
                                                        <li>Undergraduate Research Assistant - School of Engineering</li>
                                                        <li>Undergraduate Academic Assistant - Department of Creative Studies</li>
                                                        <li><b>Communication skills:</b> Presented multiple Git workshops and Java review sessions.</li>
                                                    </ul>
                                                </Typography>
                                            </Box>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box mb={3} id="technologies">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                            <Typography className={classes.sectionHeading} variant="h5" component="h3">
                                                Technologies
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper elevation={3} className={classes.resumeContent}>
                                                <Box p={2}>
                                                    <Grid container spacing={3} justify="center">

                                                        {skillsData.map((skill, index) => {
                                                            return (
                                                                <Grid item key={index}>
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
                                                    <Typography component="div" color="textSecondary">
                                                        <p>Colin has been doing a fantastic job for BCLearningNetwork. His work has mainly focused on building educational games (HTML5) and developing Moodle plugins (php/mysql). Colin has jumped into his work with great attention to detail as well as excellent creativity when needed. I would definitely recommend Colin as a solid employee who is self-motivated, smart, and dependable. I realize that with his graduation coming, I'll likely lose him this year. Given that, BCLN has definitely benefited from his work.</p>
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
