import React from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className=" image h-[100vh]">
      <div className=" bg-[rgb(0,0,0,.7)] h-[100vh]  text-center pt-40 sm:pt-52">
        <p>Hi, I'm</p>
        <h1 className=" myFont text-5xl py-3 text-white">Melvin Ugochukwu</h1>
        <p className="pb-5">SOFTWARE DEVELOPER</p>
        <button className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2]  active:scale-[0.9]">
          <Link to="/work">PROJECTS</Link>
        </button>
        <br />
        <br />
        <button className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9]">
          <Link to="/contact">CONTACT</Link>
        </button>
        <br />
        <br />
        <button className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9]">
          <Link to="/about">ABOUT</Link>
        </button>
        <br />
        <br />
        <button className="py-1 px-3 bg-transparent border-4 border-green-600 text-green-600 transition-all hover:scale-[1.2] active:scale-[0.9]">
          <a download href="/Resume.pdf">
            RESUME
            <button className="pl-2 ">
              <FaFileDownload />
            </button>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
