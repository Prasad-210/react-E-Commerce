import Product from "./Product";
import { productList } from "../utilis/constant";

const ProductCards = () => {
  return (
    <div className="product-container">
      {productList.map((product, index) => {
        return (
          <div>
            <Product key={product.id} productList={product} />
          </div>
        );
      })}
      {/* 
        <Product productList={productList[0]} />
        <Product productList={productList[1]} /> 
        */}
    </div>
  );
};

export default ProductCards;
