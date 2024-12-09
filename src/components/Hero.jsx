import React from "react";
import { useDispatch } from "react-redux";
import { inc, dec, reset } from "../redux/slices/counter-slice";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hero</h2>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
        onClick={() => dispatch(inc())}
      >
        increment
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded-md"
        onClick={() => dispatch(dec())}
      >
        decrement
      </button>
      <button
        className="bg-green-500 text-white px-2 py-1 rounded-md"
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
};

export default Hero;
