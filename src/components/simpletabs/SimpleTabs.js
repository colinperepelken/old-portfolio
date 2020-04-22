import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Contact from '../../views/Contact';
import Resume from '../../views/Resume';
import ProjectList from '../../views/ProjectList';
import About from '../../views/About';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="simple tabs example"
          variant="scrollable"
          scrollButtons="off"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Resume" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
          <Tab label="Contact" {...a11yProps(3)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Resume />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <ProjectList />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Contact />
      </TabPanel>
    </div>
  );
}
