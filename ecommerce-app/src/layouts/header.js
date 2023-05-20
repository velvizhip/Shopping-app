import { AppBar, Button, Switch, Toolbar } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { search } from '../services/actions/listAction';
import * as _ from 'lodash';
import { Search } from '../components/search';
import { SearchIconWrapper } from '../components/searchIconWrapper';
import { StyledInputBase } from '../components/styleInputBase';

const label = { inputProps: { 'aria-label': 'Switch' } };

class Header extends React.Component {
    constructor(props)
    {
        super(props);
    }
    searchProducts(e) {
        this.props.search(e.target.value);
    }
    changeTheme() {
        this.props.handleTheme();
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>

                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Link to="/" style={{color: "#fff"}}>Home</Link>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Link to="/wish-list" style={{color: "#fff"}}>Favourites</Link>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Link to="/cart" style={{color: "#fff"}}>Cart({this.props.cartItems})</Link>
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <Link to="/order-history" style={{color: "#fff"}}>Order History</Link>
                        </Button>
                        <Button id="switch-theme"
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Switch theme: <Switch {...label}  color="default" onClick={()=>this.changeTheme()} />
                        </Button>
                        
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => this.searchProducts(e)}
                            />
                        </Search>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    cartItems: state.cartItems
});
const mapDispatchToProps = dispatch => ({
    search: (payload) => dispatch(search(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);