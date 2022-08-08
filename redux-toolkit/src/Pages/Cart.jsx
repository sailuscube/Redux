import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/CartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.cart);
  const handleRemove=(productId)=>{
      dispatch(remove(productId));
  }

  return (
    <div>
     <div className="p-10">
      <div className="gap-10 grid grid-flow-row grid-cols-4">
        {products.map((product) => (
          <div className="card border border-blue-200 pt-6" key={product.id}>
            <div className="flex items-center justify-center w-full">
              <img src={product.image} className="h-20 w-20" alt="" />
            </div>
            <h4>{product.title}</h4>
            <h4>{product.price}</h4>
            <button onClick={()=>handleRemove(product.id)}
              className="bg-blue-400 my-4 py-3 px-8 text-white rounded-md"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Cart
