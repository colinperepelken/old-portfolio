import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const baseTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#424242",
        },
        secondary : {
            main: "#42a5f5",
        },
        text: {
            primary: "#fafafa",
            secondary: "#fafafa",
        },
    },
    typography: {
        fontFamily: "Lato",

        h1: {
            fontSize: 50,
        },

        h2: {
            fontSize: 30
        },

        subtitle1: {
            fontSize: 25
        }
    },
    spacing: 8
});

const theme = responsiveFontSizes(baseTheme);

export { theme };