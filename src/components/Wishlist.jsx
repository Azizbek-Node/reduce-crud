import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlist-slice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto mt-10">
      <div className="w-full lg:w-3/4 mx-auto flex flex-col justify-center items-center p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 p-4 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition-all duration-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  Price: ${item.price}
                </p>
                <p className="text-sm text-gray-600 mb-1">Date: {item.date}</p>
                <button
                  onClick={() => dispatch(removeFromWishlist(item))}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 mt-4 w-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
