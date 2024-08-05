import React, { useContext, useState } from "react";
import Button from "./Ul/Button";
import { ProductContext } from "../contextApi/product-Context";
import { v4 as uuidv4 } from "uuid";

const AddProducts = () => {
  const productCtx=useContext(ProductContext);
  const [productForm,setProductForm]=useState({"chocolateName":"","description":"","price":""});
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setProductForm({...productForm,[name]:value})

  }
  const uniqueId = uuidv4();
  const newProduct={
    id:uniqueId,
    ...productForm
  }
  const productFormSubmitHandler=(event)=>{
    event.preventDefault();
    productCtx.addProduct(newProduct);
    setProductForm({"chocolateName":"","description":"","price":""});
  }
  return (
    <div className=' h-auto  bg-slate-300 my-3 mx-5 text-center   shadow-lg'>
      <form className="flex items-center justify-evenly h-auto  border border-black" onSubmit={productFormSubmitHandler}>
        <div className="my-2">
          <label htmlFor="chocolate">Chocolate Name</label>
          <input type="text" id="chocolate" className="mx-2" name="chocolateName" value={productForm.chocolateName} onChange={changeHandler}/>
        </div>
        <div className="my-2">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" className="mx-2" name="description" value={productForm.description} onChange={changeHandler}/>
        </div>
        <div className="my-2">
          <label htmlFor="price"> Price</label>
          <input type="number" id="price" className="mx-2" name="price" value={productForm.price} onChange={changeHandler}/>
        </div>

        <Button  type="submit" title="Add Product"></Button>
      </form>
    </div>
  );
};

export default AddProducts;
