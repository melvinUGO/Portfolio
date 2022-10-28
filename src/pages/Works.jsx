import React from "react";
import Contact from "./Contact";

const Works = () => {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-2">
      <section>
        <Contact />
      </section>
      <section className="bg-black h-[100vh]">
        <p className="text-center pt-10">PORTFOLIO SAMPLES</p>
      </section>
    </div>
  );
};

export default Works;
