import * as _ from 'lodash';

const appReducer = (state, action) => {
    switch (action.type) {
        case "list":
            return {
                products: state.products
            };
        case "add": {
            const { payload } = action;
            _.forEach(state.products, (i) => {
                if (i.id == payload.id) {
                    i.addedToCart = true;
                }
            });
            if (state.cart.length > 0) {
                const { cart } = state;
                const item = cart.find(item => item.id === payload.id);
                if (item) {
                    _.forEach(state.cart, (element) => {
                        if (element.id === payload.id) {
                            element.quantity += 1;
                        }
                    });
                } else {
                    payload.quantity = 1;
                    state.cart.push(payload);
                }
            } else {
                payload.quantity = 1;
                state.cart.push(payload);
            }
            const cartItems = state.cart.length;
            return { ...state, cartItems };
        }
        case "remove": {
            const { payload } = action;
            const { cart } = state;
            state.splice(cart.indexOf(payload), 1);
            return state;
        }
        case "updateQuantity": {
            const { payload } = action;
            _.forEach(state.cart, (element) => {
                if (element.id === payload.id) {
                    element.quantity = payload.newQuantity;
                }
            });
            return { ...state };
        }
        case "wishlist": {
            const { payload } = action;
            if (state.wishlist.length > 0) {
                const { wishlist } = state;
                const item = _.find(wishlist, (item) => item.id === payload.id);
                if (!item) {
                    state.wishlist.push(payload);
                }
            } else {
                state.wishlist.push(payload);
            }
            return { ...state };
        }
        case "getProduct": {
            const { payload } = action;
            const products = state.products;
            const product = _.find(products, (item) => item.id === payload.id);
            return { ...state, product };
        }
        case "search": {
            const { searchText } = action;
            const products = state.products;
            const filterData = _.filter(products, (obj) =>
                JSON.stringify(obj).toLowerCase().includes(searchText.toLowerCase())
            )
            return { ...state, filterData };
        }
        default:
            return state;
    }
};
export default appReducer;