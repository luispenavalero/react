import React from "react";

const Products = () => {

    return (
        <div className="contenedor">
            <div className="row d-grid gap-4 d-flex align-items-center justify-content-center" >
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center shadow p-3 mb-5 bg-body rounded">
                    <div className="imagen">
                        <img src="images/tshirt2.jpg" alt="imgen01" width="250px"></img>
                    </div>
                    <div className="descripcion text-center mt-3">
                        <p className="fw-bolder fs-4">KARAKAS</p>
                        <p>U$D1,25</p>
                    </div>
                    <div className="btn btn-warning">
                        Comprar
                    </div>
                </div>
                <div className="col-md-5 d-flex flex-column align-items-center justify-content-center shadow p-3 mb-5 bg-body rounded">
                    <div className="imagen">
                        <img src="images/tshirt3.jpg" alt="imgen02" width="250px"></img>
                    </div>
                    <div className="descripcion text-center mt-3">
                        <p className="fw-bolder fs-4">Tearing venek</p>
                        <p>U$D1,25</p>
                    </div>
                    <button className="btn btn-warning" >
                       Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products