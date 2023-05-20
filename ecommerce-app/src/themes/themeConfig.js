import { createTheme } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const themeConfig = createTheme({
    palette: {
        secondary: {
            main: "#f50057"
        },
        outline: {
            main: "#000"
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        h3: {
            fontSize: '1.2rem',
            '@media (min-width:600px)': {
              fontSize: '1.5rem',
            },
        },
        content: {
            fontSize: '14px',
            margin: "1rem 0",
            display: "block"
        },
    }
});
export default themeConfig;