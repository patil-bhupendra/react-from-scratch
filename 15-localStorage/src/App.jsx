import React from "react";

const App = () => {
  const user = {
    username: "Bhupendra",
    age:18,
    city: "Shirpur"
  }
  localStorage.setItem("user", JSON.stringify(user))
  

  return <div>App</div>;
};

export default App;
