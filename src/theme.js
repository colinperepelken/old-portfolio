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
    },
});

const theme = responsiveFontSizes(baseTheme);

export { theme };