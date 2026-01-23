import React , {useContext} from "react";
import { CartContext } from "../Context/CartContex";

const FoodCard = ({item})=>{

const { setCartCount } = useContext(CartContext)


function addToCart(){
     
}

return(
    <div style={{border:"2px solid #ccc", margin:10, padding:10}}>
        <h4>{item.name}</h4>
        <h5>{item.price}</h5>
        <button onClick={addToCart}>Add to Cart</button>

    </div>
)



}