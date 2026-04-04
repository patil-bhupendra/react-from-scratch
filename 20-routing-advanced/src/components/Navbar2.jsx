import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
let Navigate = useNavigate();
    
  return (
    <div className="py-2 px-5 bg-cyan-700">
      <button
        onClick={() => {
          Navigate("/");
        }}
        className="bg-amber-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 "
      >
        Return to home page
      </button>
      <button
        onClick={() => {
          Navigate(-1);
        }}
        className="bg-amber-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 "
      >
        Back
      </button>
       <button
        onClick={() => {
          Navigate(+1);
        }}
        className="bg-amber-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 "
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
