import { ButtonGroup, Divider, Fab, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, updateQuantity, wishlist } from '../services/actions/listAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./../styles/detail.scss";
 
export default function Detail() {
    const params = useParams();
    const id = params.id;
    const products = useSelector((state) => state.products);
    const selProduct = products.find(item => item.id == id);
    const [product, setProduct] = useState(selProduct);
    const [flashSaleExpired, setFlashSaleExpired] = useState(false);
    const [timer, setTimer] = useState('00:00');
    const Ref = useRef(null);
    const dispatch = useDispatch();
    const addCart = (product) => {
        if (!flashSaleExpired) {
            product.price = product.price - (product.price * 0.1);
        }
        product.addedToCart = true;
        setProduct(product);
        dispatch(addToCart(product));
    }
    const addToWishlist = (product) => {
        product.wishlisted = true;
        setProduct(product);
        dispatch(wishlist(product));
    }
    const changeQuantity = (product, action) => {
        let newQuantity = (action === 'increase') ? product.quantity + 1 : product.quantity - 1;
        if (newQuantity <= 0) {
            newQuantity = 1;
        }
        const payload = { ...product, newQuantity: newQuantity };
        dispatch(updateQuantity(payload));
        product.quantity = newQuantity;
        setProduct(product);
    }
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }
    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            setFlashSaleExpired(true);
        }
    }
    const clearTimer = (e) => {
        setTimer('03:00');
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 180);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
    return (
        <div className='detail-container'>
            <Paper style={{ height: "auto", width: '100%', padding: "1rem" }}>
                <h2>{product.name} 
                    {
                        product.wishlisted ?
                            <FavoriteIcon color="primary" className='fav-icon'></FavoriteIcon> :
                            <FavoriteBorderIcon color="primary" className='fav-icon' onClick={() => addToWishlist(product)}/>
                            
                    }
                </h2>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={2} sm={4} md={6}>
                        <img src={product.image} className='image' alt={product.name} />
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                        <Typography variant="h5">Description</Typography>
                        <Typography variant="content">{product.description}</Typography>
                        <Divider />
                        {product.flashSale && !flashSaleExpired ?
                            <div className='price'>
                                <Stack direction="row" spacing={2}>
                                    <Paper elevation={24} className='flashSale'>
                                        <div>Flash Sale! Order in <strong>{timer}</strong> minutes</div>
                                    </Paper>
                                </Stack>
                                <div>Price: <strong>${product.price - (product.price * 0.1)}</strong></div>
                                <div><s>${product.price}</s></div>
                            </div>
                            :
                            <div className='price'>
                                <strong>Price: ${product.price}</strong>
                            </div>
                        }
                        {
                            product.addedToCart ?
                            <div className='addToCart'>
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    <Fab color="primary" size="small" aria-label="remove" onClick={(e) => changeQuantity(product, 'decrease')}>
                                        -
                                    </Fab>
                                    <p className='quantity'>{product.quantity} </p>
                                    <Fab color="primary" size="small" aria-label="add" onClick={(e) => changeQuantity(product, 'increase')} variant="contained">
                                        +
                                    </Fab>
                                </ButtonGroup>
                            </div>
                            :
                            <div className='addToCart'>
                                <Fab disabled={product.addedToCart} size="medium" variant="extended" color="primary" aria-label="add" onClick={() => addCart(product)} >
                                    {product.addedToCart ? "Added to cart" : "Add to cart"}
                                </Fab>
                            </div>
                        }
                        <Divider />
                        <Paper style={{ height: "auto", width: '96%', padding: "1rem", margin: "1rem 0" }}>
                            <Typography variant="h5">Specifications</Typography>
                            <table cellSpacing={"15px"}>
                            <tbody>
                            {   
                                product.specifications.map((spec, index) => (
                                    <tr key={index}>
                                        <td>{spec.label}</td>
                                        <td>{spec.value}</td>
                                    </tr>

                                ))
                            }
                            </tbody>
                            </table>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}