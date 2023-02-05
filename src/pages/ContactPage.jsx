import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className="p-3  md:text-[1.4rem] transition-all text-gray-300">
        <p className=" hover:text-white text-gray-300">Hey there,</p>
        <p className=" transition-all hover:text-white text-gray-300">
          I'm a software developer in Lagos.
        </p>
        <p className="text-[0.8rem] tracking-normal transition-all hover:text-white text-gray-400">
          LET'S CONNECT HERE :
        </p>
        <div className="pt-5 pl-10 flex gap-10 text-[1.5rem] ">
          <a
            target="_blank"
            href="https://github.com/melvinUGO"
            className="animate-bounce transition-all hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/c0deakBlack"
            target="_blank"
            className="animate-bounce transition-all hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            target="_blank"
            className="animate-bounce transition-all hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="hover:text-white text-gray-300 text-[0.8rem] mt-2">
          SEND AN EMAIL:
        </p>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
