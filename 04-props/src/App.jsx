import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Bhupendra"
        age={18}
        img="https://avatars.githubusercontent.com/u/158457928?v=4"
      />
      <Card
        user="Dhiraj"
        age={24}
        img="https://avatars.githubusercontent.com/u/139003559?v=4"
      />
      <Card
        user="Abhishek"
        age={19}
        img="https://images.unsplash.com/photo-1504139969750-3244f9258fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
};

export default App;
