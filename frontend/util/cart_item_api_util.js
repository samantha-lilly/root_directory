export const fetchCartItems = () => (
    $.ajax({
        method: "GET",
        url: `/api/cart_items`
    })
)

export const createCartItem = (cartItem) => (
    $.ajax({
        method: "POST",
        url: `/api/cart_items`,
        data: {cartItem}
    })
)

export const updateCartItem = (cartItem) => (
    $.ajax({
        method: "PATCH",
        url: `/api/cart_items/${cartItem.id}`,
        data: {cartItem}
    })
)

export const deleteCartItem = (cartItemId) => (
    $.ajax({
        method: "PATCH",
        url: `/api/cart_items/${cartItemId}`
    })
)