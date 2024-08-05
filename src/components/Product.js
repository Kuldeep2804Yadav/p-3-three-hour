import React, { useContext } from "react";
import { ProductContext } from "../contextApi/product-Context";
import Button from "./Ul/Button";

const Product = (props) => {
  const { chocolateName, description, price, id } = props.productdata;
  const { productCounter, addProductData } = useContext(ProductContext);

  const addOneHandler = () => {
    productCounter(1);
    addProductData(id, 1);
  };

  const addTwoHandler = () => {
    productCounter(2);
    addProductData(id, 2);
  };

  const addThreeHandler = () => {
    productCounter(3);
    addProductData(id, 3);
  };

  return (
    <div className="h-14 bg-slate-300 my-3 mx-5 flex items-center justify-evenly">
      <h2>Chocolate Name: {chocolateName}</h2>
      <p>Description: {description}</p>
      <span>Price: {price}</span>
      <Button onClick={addOneHandler} title="Buy 1"></Button>
      <Button onClick={addTwoHandler} title="Buy 2"></Button>
      <Button onClick={addThreeHandler} title="Buy 3"></Button>
    </div>
  );
};

export default Product;
