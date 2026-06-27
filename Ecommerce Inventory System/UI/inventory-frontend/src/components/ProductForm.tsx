import { useState } from "react";
import api from "../api";

export default function ProductForm(){

const [name,setName]=useState("");
const [sku,setSku]=useState("");
const [price,setPrice]=useState(0);
const [stock,setStock]=useState(0);

const save=()=>{

api.post("/products",{

name,
sku,
price,
stock,
lowStockThreshold:5

}).then(()=>{

alert("Saved");

});

}

return(

<div>

<h2>Add Product</h2>

<input placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input placeholder="SKU"
onChange={(e)=>setSku(e.target.value)}
/>

<input type="number"
placeholder="Price"
onChange={(e)=>setPrice(Number(e.target.value))}
/>

<input type="number"
placeholder="Stock"
onChange={(e)=>setStock(Number(e.target.value))}
/>

<button onClick={save}>
Save Product
</button>

</div>

)

}