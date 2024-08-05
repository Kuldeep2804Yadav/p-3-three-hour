import React, { useState } from "react";

export const ProductContext = React.createContext({});

export const ProductContextProvider = (props) => {
  const [productData, setProductData] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const addProduct = (product) => {
    setProductData((prevProduct) => [...prevProduct, product]);
  };

  const productCounter = (count) => {
    setProductCount((prevCount) => prevCount + count);
  };
  const addProductData = (id, quantity) => {
    const product = productData.find((product) => product.id === id);
    const cartdata = { ...product, quantity };
    if (cartdata) {
      setCartProduct((prevCartProduct) => [...prevCartProduct, cartdata]);
    }
  };

  const contextValue = {
    productCount,
    productData,
    addProduct,
    productCounter,
    openCart,
    setOpenCart,
    setCartProduct,
    addProductData,
    setProductCount,
    cartProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
