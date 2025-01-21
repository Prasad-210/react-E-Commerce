import Product from "./Product";
import Skeleton from "./Skelton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCards = () => {
  const [listofProducts, setListofProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handletopRatedProduct = () => {
    const filteredProduct = listofProducts.filter(
      (product) => product.rating.rate >= 4.7
    );
    setFilterProduct(filteredProduct);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setListofProducts(resData);
    setFilterProduct(resData);
  };

  return listofProducts.length === 0 ? (
    <Skeleton />
  ) : (
    <>
      <div className="flex flex-col items-center space-y-4 p-4">
        {/* Search Input */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search here..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            className="bg-purple-300 text-white py-2 px-4 rounded-md"
            onClick={() => {
              const filteredData = listofProducts.filter(
                (product) =>
                  product.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  product.price.toString().includes(searchText.toLowerCase())
              );
              setFilterProduct(filteredData);
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <div className="flex justify-center">
          <button
            className="bg-purple-300 text-white py-2 px-4 rounded-md mt-2"
            onClick={handletopRatedProduct}
          >
            Top rated product
          </button>
        </div>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-8 mb-14">
        {filterProduct.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Product productList={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCards;
