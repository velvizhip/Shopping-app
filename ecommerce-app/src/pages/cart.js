import React from 'react';
import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { updateQuantity } from '../services/actions/listAction';
import { connect } from 'react-redux';
import "./../styles/cart.scss";

class Cart extends React.Component {
    state = { cart: this.props.cart };
    updateQuantity(product, e) {
        const payload = { ...product, newQuantity: e.target.value };
        const { cart } = this.state;
        cart.forEach(element => {
            if (element.id === payload.id) {
                element.quantity = payload.newQuantity;
            }
        });
        this.setState({ cart });
        this.props.updateQuantity(payload);
    }
    render() {
        return (
            <div className="cart-container">
                <Paper style={{ height: "auto", width: '100%' }}>
                    {
                        this.props.cart.length === 0 ? <h2 style={{ margin: "10% 30%", padding: "2rem"}}>Add products to cart</h2> :
                    
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow className="table-th">
                                    <TableCell>No.</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Image</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.cart.map((product) => (
                                    <TableRow
                                        key={product.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>#{product.id}</TableCell>
                                        <TableCell align="right">{product.name}</TableCell>
                                        <TableCell align="right">{product.shortDescription}</TableCell>
                                        <TableCell align="right"><img className='image' src={product.image} alt={product.name}></img></TableCell>
                                        <TableCell align="right"><input type="number" className="quantity-field" value={product.quantity} min="0" onChange={(e) => this.updateQuantity(product, e)} /></TableCell>
                                        <TableCell align="right">${product.price * product.quantity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Divider />
                        <div className='total'>
                            <span> Total: ${this.props.total}</span>
                        </div>
                    </TableContainer>
                }   
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = state => {
    let total = 0
    if (state.cart.length > 0) {
        state.cart.forEach(product => {
            total += product.quantity * product.price;
        });
    }
    return ({ ...state, total })
};
const mapDispatchToProps = dispatch => ({
    updateQuantity: (payload) => dispatch(updateQuantity(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);