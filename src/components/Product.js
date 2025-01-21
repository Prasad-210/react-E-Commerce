const Product = ({ productList }) => {
  const { title, rating: { rate }, price, image, description } = productList;

  return (
    <>
   
    <div className="border relative p-4 m-2 h-96 text-center bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all duration-300">
    {rate >= 4.3 ? <span className="bg-black text-white px-2 py-1 -left-1 -top-1 rounded-md flex  justify-center  w-24 h-8 absolute">Best Seller</span> : ""}
      {/* Product Image */} 
      <img 
        className="w-24 h-36 object-cover mx-auto mb-4 mt-4 rounded-md" 
        src={image} 
        alt={title} 
      />

      {/* Product Title */}
      <h3 className="text-lg font-semibold text-black mb-2">
        {title.slice(0, 30)}
        {title.length > 30 ? "..." : ""}
      </h3>

      {/* Rating */}
      <p className="text-sm text-gray-700 mb-2">
        Rating: {rate} <span>⭐</span>
      </p>

      {/* Price */}
      <h4 className="text-xl font-bold text-black mt-2">
        Price: ${price}
      </h4>

      {/* Optional Product Description */}
      {description && (
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {description.slice(0, 50)}{description.length > 50 ? "..." : ""}
        </p>
      )}
    </div>
    </>
  );
};

export default Product;
