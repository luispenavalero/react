import React from "react";

const ItemListContainer = ({greeting}) => {

    return (
        <div className="contenedor">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert text-warning bg-dark py-3 text-center" role="alert">
                        {greeting}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ItemListContainer