export const listAction = {
    type: "list",
    payload: false
};
export const addToCart = (payload) => {
    return {
      type: "add",
      payload
    }
}
export const updateQuantity = (payload) => {
    return {
      type: "updateQuantity",
      payload
    }
}
export const wishlist = (payload) => {
    return {
        type: "wishlist",
        payload
    }
}
export const getProduct = (payload) => {
    return {
        type: "getProduct",
        payload
    }
}
export const search = (searchText) => {
    return {
        type: "search",
        searchText
    }
}