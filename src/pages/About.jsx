import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="">
      <Header />
      <div className="px-5 pb-10">
        <h1 className="text-white text-lg ">
          <b>ABOUT ME</b>
        </h1>
        <p className="py-3">
          Hello, my name is Melvin, im a software developer from West Africa{" "}
          <br /> with a degree in Business Administration.
        </p>
        <p className="py-3">I am a good problem solver.</p>
        <p className="py-3">
          i have one year of experience using various front end and backend
          technologies{" "}
        </p>
        <h3 className="py-3 text-white">My Skills:</h3>
        <section className="flex flex-wrap md:w-[50%]">
          <div className="m-2">
            <img src="images/html.svg" alt="css" className="w-[50px]" />
            {/* <p>HTML</p> */}
          </div>
          <div className="m-2">
            <img src="images/css.svg" alt="css" className="w-[50px]" />
            {/* <p>CSS</p> */}
          </div>
          <div className="m-2 text-center">
            <img src="images/javascript.svg" alt="css" className="w-[50px]" />
            {/* <p className="">JavaScript</p> */}
          </div>
          <div className="m-2">
            <img src="images/react.svg" alt="css" className="w-[50px]" />
            {/* <p>React</p> */}
          </div>
          <div className="m-2">
            <img src="images/tailwind.svg" alt="css" className="w-[50px]" />
            {/* <p>Tailwind</p> */}
          </div>
          <div className="m-2">
            <img src="images/redux.svg" alt="css" className="w-[50px]" />
            {/* <p>Redux</p> */}
          </div>
          <div className="m-2">
            <img src="images/firebase.svg" alt="css" className="w-[50px]" />
            {/* <p>Firebase</p> */}
          </div>
          <div className="m-2">
            <img src="images/git.svg" alt="css" className="w-[50px]" />
            {/* <p>Git</p> */}
          </div>
          <div className="m-2">
            <img src="images/github.svg" alt="css" className="w-[50px]" />
            {/* <p>Git Hub</p> */}
          </div>
          <div className="m-2">
            <img src="images\java.svg" alt="css" className="w-[50px]" />
            {/* <p>Java</p> */}
          </div>
          <div className="m-2">
            <img src="images\springboot.svg" alt="css" className="w-[50px]" />
            {/* <p>Springboot</p> */}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
