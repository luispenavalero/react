import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const {cart, sumTotal} = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [orderId, setOrderId] = useState("");   
    
    console.log(orderId);

    const generarOrden = () => {
        const fecha = new Date();
        const orders = {
            buyer:{name:nombre, telephone:telefono, email:correo},
            items: cart.map(item =>({id:item.id, tittle:item.nombre, price:item.precio})),
            total:sumTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, orders).then((snapShot) => {
            setOrderId(snapShot.id);
        });
    }

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" onInput={(e) => {setNombre(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="number" className="form-control" id="telefono" placeholder="Ingresa tu número de contacto" onInput={(e) => {setTelefono(e.target.value)}}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo</label>
                            <input type="email" className="form-control" id="nombre" placeholder="Ingresa tu correo" onInput={(e) => {setCorreo(e.target.value)}}></input>
                        </div>

                        <button type="submit" className="btn btn-warning" onClick={generarOrden}>Enviar</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td>                              
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}></td>
                                <td className="align-middle">Total a Pagar</td>
                                <td className="align-middle">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId !== "" ? <div className="alert alert-warning" role="alert"> La orden es: {orderId}</div> : "" }
                </div>
            </div>
        </div>
    )
}

export default Checkout;