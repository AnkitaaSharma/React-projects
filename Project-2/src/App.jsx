import React from "react";
import card from "./components/card";
import nav from "./components/navbar";
const App = () => {
  return (
    <div>
      {nav()}
      {card()}
    </div>
  );
};

export default App;
