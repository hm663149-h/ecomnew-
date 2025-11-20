import { useEffect, useState } from "react";
import Cardlist from "./Cardlist";
import useApi from "../Hooks/useApi";


function App(){
    // const[products,setProducts]=useState([]);
    const[url,seturl]=useState('http://localhost:3000/product');
    const{product:products,loading:load} = useApi(url);
   // const[cnt,setCnt]=useState(0);


    //  useEffect(()=>{
    //     fetch(url)
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));

    // },[url])


    // useEffect(()=>{
    //     fetch('http://localhost:3000/product')
    // .then((data)=>data.json())
    // .then((res)=>setProducts(res));

    // },[cnt])

    // fetch('http://localhost:3000/product')
    // .then((data)=>data.json())
    // .then((res)=>console.log(res));
    console.log(products);
    console.log("redner");
    return(
        <>
        <p>Ecommerce App</p>
        {/* <button onClick={()=>setCnt(cnt+1)}>callApi</button> */}
        <div className="btn1">
        <button className="btn btn-success">all</button>
        <button className="btn btn-danger"
        onClick={()=>seturl('http://localhost:3000/product?category=Watch')}
        >watch</button>
        <button className="btn btn-primary"
        onClick={()=>seturl('http://localhost:3000/product?category=SmartPhone')}
        >SmartPhone</button>
        <button className="btn btn-info"
        onClick={()=>seturl('http://localhost:3000/product?category=Laptop')}
        >Laptop</button>
        <button className="btn btn-warning"
        onClick={()=>seturl('http://localhost:3000/product?category=Iphone')}
        >Iphone</button>
        <br/>
        {
            load && <div class="spinner-border text-danger"></div>
        }
        </div>
        
        
        <Cardlist products1={products}/>
        </>
    )
}
export default App;