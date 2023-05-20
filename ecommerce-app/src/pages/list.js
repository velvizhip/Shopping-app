import { Card, CardActions, CardContent, CardMedia, Fab, Grid } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { connect } from "react-redux";
import { addToCart, wishlist } from "../services/actions/listAction";
import { Link, Route, Router } from "react-router-dom";
import "./../styles/list.scss";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: this.props.products };
        this.theme = this.props.theme;
    }
    componentDidMount() {
        // axios.get(`json/products.json`)
        // .then(response => {
        //     const products = response.data.products;
        //     this.setState ({products});
        // })
        // this.setState({products: this.props.products});
        // console.log("state", this.state);
    }
    addToCart(product) {
        const { products } = this.state;
        products.forEach(i => {
            if (i.id == product.id) {
                i.addedToCart = true;
            }
        });
        this.setState({ products });
        this.props.addToCart(product);
    }
    addToWishlist(product) {
        const { products } = this.state;
        products.forEach(i => {
            if (i.id == product.id) {
                i.wishlisted = true;
            }
        });
        this.setState({ products });
        this.props.wishlist(product);
    }
    render() {
        return (
            <div className="list-container">
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {this.props.products.map((product, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index} className="grid">
                            <Card>
                                <Link to={"/detail/" + product.id}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={product.image}
                                        alt="Image"
                                    />
                                </Link>
                                <CardContent>
                                    <Link to={"/detail/" + product.id}>
                                        <div className="name">{product.name}</div>
                                    </Link>
                                    <div className="description">{product.shortDescription}</div>
                                    <div className="price">${product.price}</div>
                                </CardContent>
                                <CardActions className="btn-section">
                                    {
                                        product.wishlisted ?
                                            <FavoriteIcon color="primary" className="fav-icon"></FavoriteIcon> :
                                            <FavoriteBorderIcon className="fav-icon" onClick={() => this.addToWishlist(product)} />
                                    }

                                    <Fab disabled={product.addedToCart} size="medium" variant="extended" color="primary" aria-label="add" onClick={() => this.addToCart(product)} >
                                        {product.addedToCart ? "Added to cart" : "Add to cart"}
                                    </Fab>
                                </CardActions>
                            </Card>

                        </Grid>

                    ))}
                </Grid>
            </div>
        );
    }
}
const mapStateToProps = state => (
    {
        products: state.filterData
    });
const mapDispatchToProps = dispatch => ({
    addToCart: (payload) => dispatch(addToCart(payload)),
    wishlist: (payload) => dispatch(wishlist(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(List);