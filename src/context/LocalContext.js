import React from "react"

const LocalContext = React.createContext({
    cartList:[],
    managingCartElements :() => {},
})

export default LocalContext