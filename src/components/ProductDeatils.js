import { useParams } from "react-router-dom";
import useGetProductDetails from "../hooks/usegetProductDetails";

const ProductDeatils = () => {
  const { productId } = useParams();
  const singlProduct = useGetProductDetails(productId);

  if (singlProduct === null) return <h1 className="text-center text-xl">Loading....</h1>;

  const { image, description, title, price, rating } = singlProduct;

  return (
    <>
      <h1 className="text-4xl font-semibold text-center text-gray-800 my-6">Product Details Page</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center p-6 bg-gray-50 rounded-lg shadow-md mb-14">
        {/* Product Image */}
        <div className="mb-6 lg:mb-0 lg:w-1/3">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            src={image}
            alt={title}
          />
        </div>
        {/* Product Details */}
        <div className="lg:w-2/3 lg:pl-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            {title.slice(0, 60)} {title.length > 60 ? "..." : ""}
          </h2>
          <h4 className="text-gray-700 mb-4">
            {description.slice(0, 100)} {description.length > 100 ? "..." : ""}
          </h4>
          <p className="text-lg text-gray-600 mb-2">
            Rating: {rating?.rate} <span>⭐</span>
          </p>
          <h4 className="text-xl font-bold text-gray-900">Price: ${price}</h4>
        </div>
      </div>
    </>
  );
};

export default ProductDeatils;
