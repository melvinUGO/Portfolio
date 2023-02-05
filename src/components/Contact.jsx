import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = () => {};
  return (
    <form
      className="flex justify-center items-center "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col gap-3 border-green-600 border w-fit p-5 rounded-lg mt-3">
        <input
          type="text"
          placeholder="Name"
          className=" rounded-sm p-2 md:py-0 outline-none focus:border-green-600 border-b-4"
        />
        <input
          type="email"
          placeholder="Email"
          className=" rounded-sm p-2 md:py-0 outline-none focus:border-green-600 border-b-4"
        />
        <input
          type="text"
          placeholder="Subject"
          className=" rounded-sm p-2 md:py-0 outline-none focus:border-green-600 border-b-4"
        />
        <textarea
          placeholder="Nice website Melvin"
          cols="30"
          rows="3"
          className=" rounded-sm p-2  outline-none focus:border-green-600 border-b-4"
        ></textarea>
        <button
          type="submit"
          className="text-green-600 border-2 border-green-600"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default Contact;
