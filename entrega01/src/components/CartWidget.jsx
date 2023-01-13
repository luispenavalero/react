import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {

    const {cartTotal} = useContext(CartContext)

    return (
        <Link to={"/Cart"} className="btn btn-warning position-relative ">
            <img src="/images/cart-plus-fill.svg" alt="carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()}
                <span className="visually-hidden">unread messages</span>
            </span>
        </Link>
    )
}

export default CartWidget