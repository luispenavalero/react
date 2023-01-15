import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    return (
        <div className="col-md-4 my-1">
            <Link to={`/item/${item.id}`} className="text-dark text-decoration-none">
                <div className="card container-sm border border-0 shadow p-3 mb-5 bg-body rounded" >
                    <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                    <div className="card-body">
                        <p className="card-text text-center">{item.nombre}</p>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default Item