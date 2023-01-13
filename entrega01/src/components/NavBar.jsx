import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}><img src="/images/logo.png" alt="logo" width="60px" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="page" to={"/category/hoodies"}>Hoddies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="page" to={"/category/joggers"}>Joggers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeclassname="page" to={"/category/shorts"}>Shorts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar