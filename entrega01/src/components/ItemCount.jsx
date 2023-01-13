import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const aumentar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1)
        }
    }

    const disminuir = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }    
    }

    const addToCart = (quantity) => {
        if (counter <= itemStock) {
            setCounter(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div>
            <div className="contenedor mb-3">
                <div className="col-md-6 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={disminuir}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={aumentar}>+</button>
                    </div>
                </div>
            </div>
            <div className="contenedor">
                <div className="col-md-6 text-center">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar mi compra</Link> : <button type="button" className="btn btn-outline-primary" onClick={() => addToCart(counter)}>Agregar</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;