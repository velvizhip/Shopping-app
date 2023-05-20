import { createTheme } from "@mui/material";
import themeConfig from "./themeConfig";

const darkTheme = createTheme({
    ...themeConfig,
    palette: {
        ...themeConfig.palette,
        primary: {
            main: "rgb(25, 118, 210)"
        },
    },
});
export default darkTheme;