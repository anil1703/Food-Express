import React from "react";
import LocalContext from "../../context/LocalContext";

const Cart = () => (
    <LocalContext.Consumer>
        {value => {
            const { cartList } = value;
            console.log(cartList);
            return (
                <h1>hi</h1>
            );
        }}
    </LocalContext.Consumer>
);

export default Cart;
