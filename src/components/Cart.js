import React, { useContext } from "react";
import { ProductContext } from "../contextApi/product-Context";
import Button from "./Ul/Button";

const Cart = () => {
  const { setOpenCart, cartProduct,setCartProduct,setProductCount } = useContext(ProductContext);

  const closeHandler = () => {
    setOpenCart(false);
  };
  const purchaseHandler=()=>{
    setCartProduct([]);
    setOpenCart(false)
    setProductCount(0)
  }
  const totalPrice=cartProduct.reduce((total,item)=> total+item.price * item.quantity,0)

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative bg-white w-full max-w-lg h-auto p-4 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-lg">Products</h1>
            <button
              onClick={closeHandler}
              className="text-white bg-red-500 px-2 py-1 rounded"
            >
              X
            </button>
          </div>
          <hr className="my-4" />

          <ul className="space-y-2">
            {cartProduct.map((item) => (
              <li
                key={item.id}
                className="list-none border p-2 flex justify-between bg-gray-100 rounded"
              >
                <h3>{item.chocolateName}</h3>
                <h3>{item.description}</h3>
                <h3>rs{item.price}</h3>
                <h3>{item.quantity}</h3>
              </li>
            ))}
          </ul>
          <hr className="my-4" />

          <div className="flex items-center justify-between mt-4">
            <Button title="Purchase" className="mb-2"  onClick={purchaseHandler}/>
            <h1>
              Total: <span>rs {totalPrice}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
