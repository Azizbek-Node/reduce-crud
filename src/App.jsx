import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Wishlist from "./components/Wishlist";
import AddProduct from "./components/addProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-600">
      <BrowserRouter>
        <Header />
        <AddProduct />
        {/* <Hero />   */}
        <Product />
        <Wishlist />
      </BrowserRouter>
    </div>
  );
}

export default App;
