import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-3 pt-40 md:text-[1.5rem] transition-all text-gray-400">
      <p className=" hover:text-white">Hey there,</p>
      <p className=" transition-all hover:text-white">
        I'm a software developer in Lagos.
      </p>
      <p className="text-[0.8rem] pl-3 tracking-normal transition-all hover:text-white">
        LET'S CONNECT HERE :
      </p>
      <div className="pt-5 pl-10 flex gap-10 text-[1.5rem] ">
        <a href="" className="animate-bounce transition-all hover:text-white">
          <FaGithub />
        </a>
        <a href="" className="animate-bounce transition-all hover:text-white">
          <FaTwitter />
        </a>
        <a href="" className="animate-bounce transition-all hover:text-white">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
