import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" text-center pt-40 sm:pt-52">
      <p>Hi, I'm</p>
      <h1 className=" myFont text-5xl py-3">Melvin Ugochukwu</h1>
      <p className="pb-5">SOFTWARE DEVELOPER</p>
      <Link
        to="/work"
        className="py-1 px-3 bg-transparent border-2 border-green-600 text-green-600"
      >
        WORK
      </Link>
      <br />
      <br />
      <Link
        to="/contact"
        className="py-1 px-3 bg-transparent border-2 border-green-600 text-green-600"
      >
        CONNECT
      </Link>
    </div>
  );
};

export default Home;
