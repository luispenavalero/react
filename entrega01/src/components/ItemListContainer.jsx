import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {id} = useParams();

 /*   useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos)
            }, 2000);
        })

        promesa.then((data) => {
            setItems(data)
        })

    }, [id]) */

/* Carga de productos en FireBase

useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    arrayProductos.forEach((item) => {
        addDoc(itemCollection, {categoria:item.categoria, nombre:item.nombre, descripcion:item.descripcion, imagen:item.imagen, precio:item.precio, stock:item.stock, tallas:item.tallas});
    })
}, [])

*/

useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    const q = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection;
    getDocs(q).then((snapShot) => {
        setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})))
    });
}, [id]);

    return (
        <div className="contenedor">
            <ItemList items={items}/>
        </div>
    )

}

export default ItemListContainer