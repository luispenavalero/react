import React, { useState } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "./json/productos.json"
import { useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
            }, 2000);
        })

        promesa.then((data) => {
            setItems(data)
        })

    })

    return (
        <div className="contenedor">
            <ItemList items={items}/>
        </div>
    )

}

export default ItemListContainer