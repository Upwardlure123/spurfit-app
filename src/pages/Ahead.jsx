import React from "react";
import image from "../assets/image1.png";

const Ahead = () => {
  return (
    <section id="ahead">
      <div className="ahead-container rounded-lg max-w-7xl p-10 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-8 md:mb-0 flex-1">
            <div className="mt-8">
              <h2 className="ahead-subtitle text-lg mb-4">
                Built out of frustration
              </h2>
            </div>
            <h1 className="ahead-title text-5xl font-bold mb-10">
              Meet the ahead app
            </h1>
            <div className="relative">
              <img
                src={image}
                alt="Ghost character"
                className="ahead-image w-full"
              />
            </div>
          </div>
          <div className="text-right flex-1">
            <p className="ahead-text text-xl mb-4">
              A personalized pocket coach that provides bite-sized,
              science-driven tools to boost emotional intelligence.
            </p>
            <p className="ahead-text text-xl">
              Think of it as a pocket cheerleader towards a better, more
              fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ahead;
