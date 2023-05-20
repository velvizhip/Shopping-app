
import React from 'react';
import { Divider, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { connect } from 'react-redux';
import { updateQuantity } from '../services/actions/listAction';
import { Link } from 'react-router-dom';
import { Item } from '../components/item';

const styles = {
    container: {
        margin: "50px 200px"
    },
    image: {
        width: "100px",
        height: "100px"
    },
    td: {
        fontWeight: "bold"
    },
    products: {
        display: "flex"
    }
}
class Orderhistory extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <Paper style={{ height: "auto", width: '100%' }}>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={styles.td}>No.</TableCell>
                                    <TableCell style={styles.td} align="left">Order Date</TableCell>
                                    <TableCell style={styles.td} align="left">Products</TableCell>
                                    <TableCell style={styles.td} align="right">Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.history.map((order) => (
                                    <TableRow
                                        key={order.orderId}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>#{order.orderId}</TableCell>
                                        <TableCell align="left">{order.orderDate}</TableCell>
                                        <TableCell align="left" style={styles.products}>
                                            {
                                                order.products.map((product) => (
                                                    <Stack
                                                        direction={{ xs: 'column', sm: 'row' }}
                                                        spacing={{ xs: 1, sm: 2, md: 2 }}
                                                    >
                                                        <Item>
                                                            <img style={styles.image} src={product.image} alt={product.name}></img>
                                                            <div>
                                                                <p>{product.name}</p>
                                                                <Link to={"/detail/" + product.id}>
                                                                    Buy it again
                                                                </Link>
                                                            </div>
                                                        </Item>
                                                    </Stack>
                                                ))
                                            }
                                            {/* </Grid> */}
                                        </TableCell>
                                        <TableCell align="right">
                                            ${order.total}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <Divider />
                    </TableContainer>
                </Paper>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return ({ history: state.history })
};
const mapDispatchToProps = dispatch => ({
    updateQuantity: (payload) => dispatch(updateQuantity(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(Orderhistory);