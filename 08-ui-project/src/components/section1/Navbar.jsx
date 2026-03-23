import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-14">
      <h4 className="bg-black text-white  uppercase px-6 py-2 rounded-full text-xs ">
        Target Audience
      </h4>
      <button className="bg-gray-300 uppercase px-6 py-2 rounded-full tracking-widest text-xs">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
