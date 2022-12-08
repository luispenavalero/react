import React from "react";
import { useState } from "react";


const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1)

    const aumentar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const disminuir = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }    
    }

    const onAdd = () => {
        if (stock > 0) {
            console.log("Agregaste " + counter + " Productos Al Carrito")
        }
    }

    return (
        <div>
            <div className="contenedor mb-3">
                <div className="col-md-2 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={disminuir}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={aumentar}>+</button>
                    </div>
                </div>
            </div>
            <div className="contenedor">
                <div className="col-md-2 text-center">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;