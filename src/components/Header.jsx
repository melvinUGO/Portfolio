import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pt-5 px-10 pb-6">
      <Link to="/" className="myFont w-full text-[2rem] text-green-600">
        Melvin Ugochukwu
      </Link>
      <div className=" rounded-sm bg-green-600 w-[300px] h-1"></div>
    </div>
  );
};

export default Header;
