import React, { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [title, setTitle] = useState("");

  return (
    <div className="h-screen lg:flex bg-black text-white p-10">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        {/* FIRST INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full py-2 border-2 outline-none rounded"
          value={title}
          onChange={()=>{
            console.log("hello");
            
          }}
        />

        {/* DETAILED INPUT */}
        <textarea
          type="text"
          className="px-5 w-full  h-32 py-2 border-2 outline-none rounded"
          placeholder="Write Details"
        />
        <button className="bg-white w-full  text-black px-5 py-2 outline-none rounded">
          Add note
        </button>
      </form>
      <div className="flex flex-wrap p-10">
        <div className="h-32 w-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  );
};

export default App;
