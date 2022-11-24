import React from "react";

const CartWidget = () => {

    return (
        <button type="button" className="btn btn-warning position-relative ">
            <img src="images/cart-plus-fill.svg" alt="carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}

export default CartWidget