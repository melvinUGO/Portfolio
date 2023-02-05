import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="text-gray-300 h-[100vh]">
      <Header />
      <div className="px-5 pb-10">
        <h1 className="text-white text-lg tracking-wider">
          <b>ABOUT ME</b>
        </h1>
        <p className="py-3 text-gray-300">
          Hello, my name is Melvin, im a software developer from West Africa{" "}
          <br /> with a degree in Business Administration.
        </p>
        <p className="py-3">I am a good problem solver.</p>
        <p className="py-3">
          i have one year of experience using various front end and backend
          technologies{" "}
        </p>
        <h3 className="py-3 text-white tracking-wider">My Languages:</h3>
        <ul>
          <li>JavaScript</li>
          <li>Java</li>
        </ul>

        <div className="mt-5">
          <h3 className=" text-white tracking-wider">Technologies:</h3>
          <div className="md:flex flex-wrap justify-evenly">
            <section className="px-3">
              <h3 className="pt-3 text-white tracking-wider">Frontend:</h3>
              <ul>
                <li>Html</li>
                <li>CSS</li>
                <li>React</li>
                <li>Tailwind CSS</li>
              </ul>
            </section>
            <section className="px-3">
              <h3 className="pt-3 text-white tracking-wider">Backend:</h3>
              <ul>
                <li>NodeJs/Express</li>
                <li>MongoDb</li>
                <li>Spring Boot</li>
                <li>FireBase</li>
              </ul>
            </section>
            <section className="px-3">
              <h3 className="pt-3 text-white tracking-wider">
                Version Control:
              </h3>
              <ul>
                <li>Git</li>
                <li>Git Hub</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
