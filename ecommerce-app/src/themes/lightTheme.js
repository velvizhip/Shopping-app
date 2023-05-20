import { createTheme } from "@mui/material";
import themeConfig from "./themeConfig";

const lightTheme = createTheme({
    ...themeConfig,
    palette: {
        ...themeConfig.palette,
        primary: {
            main: "rgb(156, 39, 176)"
        },
    },
});
export default lightTheme;