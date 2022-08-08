import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/CartSlice";
import {fetchProducts} from "../Store/productSlice";
import {STATUSES} from "../Store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const {data:products, status} = useSelector((state)=>state.product)
//   const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts())
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if(status === STATUSES.LOADING){
    return <h2>Loading...</h2>
  }

  return (
    <div className="p-10">
      <div className="gap-10 grid grid-flow-row grid-cols-4">
        {products.map((product) => (
          <div className="card border border-blue-200 pt-6" key={product.id}>
            <div className="flex items-center justify-center w-full">
              <img src={product.image} className="h-20 w-20" alt="" />
            </div>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button
              onClick={() => handleAdd(product)}
              className="bg-blue-400 my-4 py-3 px-8 text-white rounded-md"
            >
              Add Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
