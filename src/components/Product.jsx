import React from "react";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/slices/wishlist-slice";
import { useSelector } from "react-redux";
import { removeProduct, updateProduct } from "../redux/slices/product-slice";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Our Products</h2>
        {products.length === 0 ? (
          <p className="text-gray-500 text-lg">No products available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {products.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">Date: {item.date}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity || "N/A"}
                </p>
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    onClick={() => dispatch(addToWishlist(item))}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Like
                  </button>
                  <button
                    onClick={() => dispatch(removeProduct(item))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => dispatch(updateProduct(item))}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
