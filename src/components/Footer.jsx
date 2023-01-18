import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" absolute bottom-0 md:grid grid-cols-2 py-3 border-t-2 w-full px-5">
      <div className="p-2">
        <h1 className="myFont w-full text-[1.8rem] text-green-600">
          Melvin Ugochukwu
        </h1>
        <p className="text-[0.7rem] w-[85%] md:w-full md:text-[1rem]">
          Desined by Ugochukwu Melvin © 2023
        </p>
      </div>
      <div className=" md:text-center p-2">
        <Link to="/" className="text-white p-2">
          HOME
        </Link>
        <Link to="/work" className="text-white p-2">
          PROJECTS
        </Link>

        <Link to="/contact" className="text-white p-2">
          CONTACT
        </Link>

        <Link to="/about" className="text-white p-2">
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Footer;
