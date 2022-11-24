import React from "react";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";

const Header = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <NavBar />
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )

}

export default Header