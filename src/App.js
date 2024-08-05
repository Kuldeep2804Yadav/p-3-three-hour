import { useContext } from "react";
import AddProducts from "./components/AddProducts";
import Header from "./components/Header";
import Product from "./components/Product";
import { ProductContext } from "./contextApi/product-Context";
import Cart from "./components/Cart";

function App() {
  const { productData,openCart } = useContext(ProductContext);

  return (
    <div className="App">
      <Header />
      <AddProducts />
      {productData.map((item) => {
        return <Product key={item.id} productdata={item} />;
      })}
      {openCart && <Cart />}
    </div>
  );
}

export default App;
