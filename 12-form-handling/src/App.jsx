import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input type="text" placeholder="Enter your name" name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
