import React , {useContext} from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = ()=>{

    const {cartCount , setCartCount} = useContext(CartContext)

    
    return(
          <div style={{padding:10 , color:"#fff" , background:"#ff6f00",width:"100px", height:"auto"}}>

          <h3>Food Order</h3>
           <p>Cart Items : {cartCount}</p>


          </div>
    )

}

export default Navbar