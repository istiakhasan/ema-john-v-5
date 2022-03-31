import { useEffect, useState } from "react"

const useProducts=()=>{
    const [product,setProducts]=useState([])
    useEffect(()=>{
      fetch('products.json')
      .then(res=>res.json())
      .then(data=>setProducts(data))
    },[])


    return [product,setProducts];

}

export default useProducts;