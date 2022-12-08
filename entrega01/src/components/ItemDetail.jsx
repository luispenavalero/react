import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {


    return (
    <div className="row">
        <div className="col-md-4 offset-md-2">
            <img src={item.imagen} alt={item.nombre} className="img-fluid" />
        </div>
        <div className="col-md-4 offset-md-2">
            <h1>{item.nombre}</h1>
            <h5>{item.categoria}</h5>
            <p>{item.descripcion}</p>     
            <p>{item.tallas}</p>   
            <p>{item.precio}</p>  
            <ItemCount stock={20}/>    
        </div>
    </div>
    )
}

export default ItemDetail;