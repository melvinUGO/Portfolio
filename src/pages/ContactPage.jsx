import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = () => {};

  return (
    <div>
      <Header />
      <div className="p-3  md:text-[1.5rem] transition-all text-gray-400">
        <p className=" hover:text-white text-gray-400">Hey there,</p>
        <p className=" transition-all hover:text-white text-gray-400">
          I'm a software developer in Lagos.
        </p>
        <p className="text-[0.8rem] pl-3 tracking-normal transition-all hover:text-white text-gray-400">
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
            href=""
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
        <p className="hover:text-white text-gray-400 text-[0.8rem] mt-2">
          SEND AN EMAIL:
        </p>
        <form
          className="flex justify-center items-center "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-3 border-green-600 border w-fit p-5 rounded-lg mt-3">
            <input
              type="text"
              placeholder="Name"
              className=" rounded-md p-2 md:py-0 outline-none focus:border-green-600 border-2"
            />
            <input
              type="email"
              placeholder="Email"
              className=" rounded-md p-2 md:py-0 outline-none focus:border-green-600 border-2"
            />
            <input
              type="text"
              placeholder="Subject"
              className=" rounded-md p-2 md:py-0 outline-none focus:border-green-600 border-2"
            />
            <textarea
              placeholder="Nice website Melvin"
              cols="30"
              rows="6"
              className=" rounded-md p-2  outline-none focus:border-green-600 border-2"
            ></textarea>
            <button
              type="submit"
              className="text-green-600 border-2 border-green-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
