import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: {name: nombre, phone: telefono, email: correo},
            items: cart.map(item => ({id: item.id, tittle: item.nombre, price: item.precio})),
            total: sumTotal(),
            order_date: `${fecha.getFullYear()}/${fecha.getMonth() + 1}/${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingrese su Teléfono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Correo" className="form-label">Correo:</label>
                            <input type="text" className="form-control" id="Correo" placeholder="Ingrese su Correo" onInput={(e) => {setCorreo(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-warning" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">                                
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-end">{item.quantity}</td>
                                    <td className="align-middle text-end">${item.quantity * item.precio}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="alert alert-warning" role="alert">La Orden generada es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;