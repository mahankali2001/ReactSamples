import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment, decrement } from "./counterSlice";

const CounterButton: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterButton;