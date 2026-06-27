import { useState } from "react";
import api from "../api";

export default function OrderForm(){

const [customer,setCustomer]=useState("");
const [productId,setProductId]=useState(1);
const [quantity,setQuantity]=useState(1);

const createOrder=()=>{

api.post("/orders",{

customerName:customer,

items:[

{
productId,
quantity
}

]

}).then(()=>{

alert("Order Created");

});

}

return(

<div>

<h2>Create Order</h2>

<input
placeholder="Customer Name"
onChange={(e)=>setCustomer(e.target.value)}
/>

<input
type="number"
placeholder="Product ID"
onChange={(e)=>setProductId(Number(e.target.value))}
/>

<input
type="number"
placeholder="Quantity"
onChange={(e)=>setQuantity(Number(e.target.value))}
/>

<button onClick={createOrder}>
Create Order
</button>

</div>

)

}