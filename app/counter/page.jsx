"use client"
import { useDispatch, useSelector } from "react-redux";
import { counterSelector, decrement, increment } from "./counterSlice";

export const metaData = ({
  title: "Counter",
  description: "Counter Page"
})

const counter = () => {
  const {count} = useSelector(counterSelector)
  const dispatch = useDispatch()
  return (
    <>
      <div className="w-4/5 min-h-screen m-auto flex justify-center items-center">
        <div className="w-96 bg-[#ffa2a2] shadow-md rounded-md p-5">
          <h1 className="text-6xl font-bold pb-2"> {count} </h1>
          <hr />
          <button onClick={() => dispatch(increment())} className="bg-[#ffff] mt-3 py-2 px-5 shadow rounded-md mr-2"> ++ </button>
          <button onClick={() => dispatch(decrement())} className="bg-[#ffff] mt-3 py-2 px-5 shadow rounded-md ml-2"> -- </button>
        </div>
      </div>
    </>
  );
};

export default counter;
