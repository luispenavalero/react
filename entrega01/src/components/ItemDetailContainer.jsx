import React, { useState, useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";



const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "items", id);
        getDoc(item).then((snapShot) => {
            if (snapShot.exists()) {
                    setItem({id:snapShot.id, ...snapShot.data()})
            } 
        })

    }, [id]);

    return (

       <div className="container">
           <ItemDetail item={item} /> 
        </div>
    )
}

export default ItemDetailContainer;