import React from 'react';

import {
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";

import Footer from './components/footer/Footer';
import SimpleTabs from './components/simpletabs/SimpleTabs';
import Home from './views/Home';

import { theme } from "./theme";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  mainContainer: {
    height: "100vh",
    overflow: "auto",
  }
}));

const App = () => {
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.mainContainer}>

            <Home />

            <SimpleTabs />

            <Footer />
            
          </div>

        </ThemeProvider>

    </div>
  );
}

export default App;
