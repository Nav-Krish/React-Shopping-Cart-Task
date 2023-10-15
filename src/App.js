import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ProductCards from './Components/ProductCards'
import { useState } from "react";

function App() {
  const [addToCart, setAddToCart]= useState(0);

  const add=()=>{
    setAddToCart(addToCart+1)
  }

  const remove=()=>{
    setAddToCart(addToCart-1)
  }


  return (
    <div className="App">
      <Navbar addToCart={addToCart}/>
      <Header />
      <ProductCards add={add} remove={remove} />
    </div>
  );
}

export default App;
