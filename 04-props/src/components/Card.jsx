import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1665685153413-13a1e704450e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8"
        alt=""
      />
      <h1>Bhupendra Patil</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
