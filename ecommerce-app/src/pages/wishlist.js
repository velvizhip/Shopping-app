import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Fab, Grid, Paper, Typography } from "@mui/material";
import { connect } from 'react-redux';
import { addToCart } from '../services/actions/listAction';
const styles = {
    name: {
        fontWeight: "bold"
    },
    container: {
        margin: "15px"
    },
    btnSection: {
        float: "right"
    }
}
class Wishlist extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {this.props.wishlist.map((product, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={product.image}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <div style={styles.name}>{product.name}</div>
                                    <div className="description">{product.shortDescription}</div>
                                    <div className='price'>${product.price}</div>
                                </CardContent>
                                <CardActions style={styles.btnSection}>
                                    <Fab disabled={product.addedToCart} size="medium" variant="extended" color="primary" aria-label="add" onClick={() => this.addToCart(product)} >
                                        {product.addedToCart ? "Added to cart" : "Add to cart"}
                                    </Fab>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {this.props.wishlist.length === 0 ? 
                    <Paper><h3 style={{ margin: "10% 30%", padding: "2rem"}}>Add products to wishlist</h3></Paper> : ''
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
});
const mapDispatchToProps = dispatch => ({
    addToCart: (payload) => dispatch(addToCart(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);