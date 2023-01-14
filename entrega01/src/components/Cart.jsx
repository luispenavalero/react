import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, cartTotal, removeItem, clear, sumTotal} = useContext(CartContext)

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-warning" role="alert">
                            ¡No se encontraron productos!
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn btn-warning" title={"Vaciar Carrito"}>Vaciar</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td>
                                    <td className="align-middle"><Link onClick={() => {removeItem(item.id)}} title={"Eliminar Producto"}><img src={"/images/trash3.svg"} alt={"delete product"} width={20}/></Link></td>                                
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}></td>
                                <td className="align-middle">Total a Pagar</td>
                                <td className="align-middle">${sumTotal()}</td>
                                <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Comprar</Link></td>                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;