import "./App.scss";
import List from "./pages/list";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Header from "./layouts/header";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import { Box, ThemeProvider } from "@mui/material";
import Orderhistory from "./pages/orderhistory";
import { connect } from "react-redux";
import Detail from "./pages/detail";
import lightTheme from "./themes/lightTheme";
import { useState } from "react";
import darkTheme from "./themes/darkTheme";

function App() {
    const [selectedTheme, setSelectedTheme] = useState(lightTheme);
    const [themeClass, setThemeClass] = useState('light-theme');
    function handleTheme() {
        setSelectedTheme((prevTheme) =>  (prevTheme === lightTheme ? darkTheme : lightTheme));
        const themeClass = selectedTheme === lightTheme ? 'dark-theme' : 'light-theme';
        setThemeClass(themeClass);
    }
    return (
        <Router>
            <ThemeProvider theme={selectedTheme}>
            <Box sx={{ flexGrow: 1 }}>
            <div data-testid="root-div" className={themeClass + " App"}>
                <header className="App-header">
                    <Header handleTheme={handleTheme}/>
                </header>
            </div>
            <Routes>
                <Route exact path='/' element={< List />}></Route>
                <Route exact path='/wish-list' element={< Wishlist />}></Route>
                <Route exact path='/order-history' element={< Orderhistory />}></Route>
                <Route exact path='/cart' element={< Cart />}></Route>
                <Route exact path='/detail/:id' element={< Detail />}></Route>
            </Routes>
            </Box>
            </ThemeProvider>
        </Router>
    );
}

export default connect()(App);
