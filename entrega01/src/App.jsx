import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Ofertas from "./components/Ofertas";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"*"} element={<Error404 />} />                
        </Routes>
        <Ofertas />
        <Footer /> 
    </BrowserRouter>
    )
}

export default App;