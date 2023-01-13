import React, { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [itemStock, setItemStock] = useState(0);

    const onAdd = (quantity) => {
        setItemStock(itemStock - quantity);
        addItem(item, quantity);
    }

    useEffect(() => {
        setItemStock(item.stock);
    }, [item])

    return (
    <div className="row">
        <div className="col-md-4 offset-md-2">
            <img src={item.imagen} alt={item.nombre} className="img-fluid" />
        </div>
        <div className="col-md-4 offset-md-2">
            <h1>{item.nombre}</h1>
            <h5>{item.categoria}</h5>
            <p>{item.descripcion}</p>     
            <p>Tallas: {item.tallas}</p>   
            <p>Precio: ${item.precio}</p>  
            <ItemCount stock={item.stock} onAdd={onAdd} />    
        </div>
    </div>
    )
}

export default ItemDetail;