import React, { useState } from "react";
import arrayProductos from "./json/productos.json"
import ItemCount from "./ItemCount";
import { useEffect } from "react";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 3000);
        })

        promesa.then((data) => {
            setItems(data)
        })

    })

    return (
        <div className="contenedor">
            <ItemList items={items}/>
            <ItemDetailContainer />
            <ItemCount stock={20}/>
        </div>
    )

}

export default ItemListContainer