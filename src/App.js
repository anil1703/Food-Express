import React from "react";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LocalContext from "./context/LocalContext";
import './App.css';

class App extends Component {
  state = {cartList:[]}
  managingCartElements = (data) => {
    console.log("hii")
    this.setState(prevState => {
      return {cartList:[...prevState.cartList,data]}
    })
  }
  render(){
    const {cartList} = this.state
    console.log(cartList)
    
    return (
      <LocalContext.Provider value={{
          cartList,
          managingCartElements:this.managingCartElements
      }}>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </LocalContext.Provider>
      
    );
  }
  
}

export default App;
