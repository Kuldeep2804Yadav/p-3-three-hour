import React, { useContext } from "react";
import { ProductContext } from "../contextApi/product-Context";

const Header = () => {
  const {productCount,setOpenCart}=useContext(ProductContext);
  const cartOpenHandler=()=>{
    setOpenCart(true)
  }

  return (
    <header className="h-16 bg-slate-900 border border-black text-white flex items-center justify-between px-4">
      <h1 className="border border-white h-9 w-48 text-center flex items-center justify-center">
        Chocolate Store
      </h1>
      <button className="flex items-center" onClick={cartOpenHandler}>
        <span className="bg-blue-800 text-white py-2 px-4 rounded">
          Cart <span>({productCount})</span>
        </span>
        
      </button>
      
    </header>
  );
};

export default Header;
