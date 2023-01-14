import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Ofertas from "./components/Ofertas";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path={"/"} element={<ItemListContainer />} />
                    <Route path={"/category/:id"} element={<ItemListContainer />} />
                    <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                    <Route path={"/cart"} element={<Cart />} />
                    <Route path={"/checkout"} element={<Checkout />} />
                    <Route path={"*"} element={<Error404 />} />                
                </Routes>
                <Ofertas />
                <Footer /> 
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;