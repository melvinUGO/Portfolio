import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-3 pt-40 md:text-[1.5rem]">
      <p>Hey there,</p>
      <p>I'm a software developer in Lagos.</p>
      <p className="text-[0.8rem] pl-3 tracking-normal">LET'S CONNECT HERE :</p>
      <div className="pt-5 pl-10 flex gap-10 text-[1.5rem]">
        <a href="" className="animate-bounce">
          <FaGithub />
        </a>
        <a href="" className="animate-bounce">
          <FaTwitter />
        </a>
        <a href="" className="animate-bounce">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;
