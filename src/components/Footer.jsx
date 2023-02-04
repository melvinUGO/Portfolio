import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" md:grid grid-cols-2 py-2 border-t-2 w-full px-5 items-center">
      <div className=" md:text-center p-2">
        <Link to="/" className="text-white p-2">
          HOME
        </Link>
        <Link to="/projects" className="text-white p-2">
          PROJECTS
        </Link>

        <Link to="/contact" className="text-white p-2">
          CONTACT
        </Link>

        <Link to="/about" className="text-white p-2">
          ABOUT
        </Link>
      </div>
      <div className="p-1">
        <h1 className="myFont w-full text-[1.6rem] text-green-600">
          Melvin Ugochukwu
        </h1>
        <p className="text-[0.7rem] w-[85%] md:w-full md:text-[0.8rem]">
          Desined by Ugochukwu Melvin © 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
