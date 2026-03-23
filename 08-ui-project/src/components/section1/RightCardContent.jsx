import React from "react";

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between ">
        <h2 className="bg-white text-xl font-semibold rounded-full h-9 w-9 flex justify-center items-center">
          {props.id+1}
        </h2>
        <div>
          <p className="text- leading-relaxed text-white mb-6">
            Lorem, ipsum dolor sit et consectetur adipisicing elit. Amet is
            voluptatum reiciendis{" "}
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-6 py-1 rounded-full">
             {props.tag}
            </button>
            <button className="bg-blue-600 text-white font-medium px-2 py-1 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
