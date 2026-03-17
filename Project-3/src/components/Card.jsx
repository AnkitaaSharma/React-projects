import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src="https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
      </img>
      <h1>
        {props.user},{props.age}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, amet!
      </p>
      <button>Click here</button>
    </div>
  );
};

export default Card;
