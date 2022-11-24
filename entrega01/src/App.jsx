import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return <div>
        <Header />
        <ItemListContainer greeting={"Gracias por visitarnos"} />
        <Products />
        <Footer /> 
    </div>
}

export default App;