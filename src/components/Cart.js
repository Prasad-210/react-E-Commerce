import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItems,removeItems} from "../store/cartSlice";
// import useGetProductDetails from "../hooks/usegetProductDetails";
// import { useParams } from "react-router-dom";


function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch= useDispatch()

//   const { productId } = useParams();
//   const singlProduct = useGetProductDetails(productId);

  // Calculate total price
 
  const handleRemoveItems = () =>{
  dispatch(removeItems())
  }

//   const handleAddItems = ()=>{
//     dispatch(addItems())
//   }

const handleClearItems = () =>{
    dispatch(clearItems())
}
// if (singlProduct === null)
//     return <h1 className="text-center text-xl">Loading....</h1>;
const totalPrice = cartItems.reduce((total, item) => total + item?.price, 0);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 mb-14">
      <h1 className="font-bold text-3xl mb-6 text-center">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="col-span-2">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white rounded-lg shadow-md mb-6"
              >
                {/* Product Image */}
                <div className="mb-6 lg:mb-0 lg:w-1/3">
                  <img
                    className="w-32 h-48 object-cover rounded-lg shadow-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                {/* Product Details */}
                <div className="lg:w-2/3 lg:pl-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {item.title.slice(0, 60)} {item.title.length > 60 ? "..." : ""}
                  </h2>
                  <h4 className="text-gray-700 mb-4">
                    {item.description.slice(0, 100)}{" "}
                    {item.description.length > 100 ? "..." : ""}
                  </h4>
                  <p className="text-lg text-gray-600 mb-2">
                    Rating: {item.rating?.rate} <span>⭐</span>
                  </p>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Price: ${item.price}
                  </h4>

                  {/* Cart Item Actions */}
                  <div className="flex justify-between items-center">
                    <button  onClick = {handleRemoveItems} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                      Remove
                    </button>
                    <div className="flex items-center space-x-2">
                      <button onClick={handleRemoveItems} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                        -
                      </button>
                      <span>1</span>
                      <button  className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary Section */}
        <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Cart Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Items: </span>
              <span className="text-lg font-semibold">{cartItems.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg text-gray-600">Total Price: </span>
              <span className="text-lg font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-blue-500 text-white py-3 rounded-md text-xl hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
          <div className="mt-6 flex justify-center">
          <button onClick={handleClearItems} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"  >Clear Cart</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
