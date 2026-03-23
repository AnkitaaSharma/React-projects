import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 w-60 bg-blue-200 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
      ></img>
      <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
    </div>
  );
};

export default RightCard;
