import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Emotion = () => {
  const boxRefs = useRef([]);

  useEffect(() => {
    const boxes = boxRefs.current;

    gsap.fromTo(
      boxes,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 1,
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  return (
    <section className="bg-white py-20" id="emotions">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <h2 className="text-3xl font-bold whitespace-nowrap mr-20 px-20">
              EQ beats IQ
            </h2>
            <div className="flex flex-col md:flex-row text-gray-600 space-y-4 md:space-y-0 md:space-x-4 max-w-3xl">
              <p className="max-w-xs px-8">
                People with high emotional intelligence (EQ) live more fulfilled
                lives. They tend to be happier and have healthier relationships.
              </p>
              <p className="max-w-xs px-8">
                They are more successful in their pursuits and make for
                inspiring leaders. According to science, they earn $29k a year.
              </p>
            </div>
          </div>
        </div>

        <div className="flex text-center pt-20 pb-10 font-semibold text-4xl">
          Does this sound familiar...
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div
            className="bg-blue-100 p-4 rounded-2xl flex flex-col items-center"
            ref={addToRefs}
          >
            <span className="text-4xl mb-2">😖</span>
            <p className="text-center">
              You quarrel with your partner because you keep on doing that thing
              you always do, instead of staying open and working towards common
              ground.
            </p>
          </div>

          <div
            className="bg-gray-100 p-4 rounded-2xl flex flex-col items-center"
            ref={addToRefs}
          >
            <span className="text-4xl mb-2">😡</span>
            <p className="text-center">
              You argue with a colleague. You get angry and defensive, instead
              of staying open and working towards common ground.
            </p>
          </div>

          <div
            className="bg-purple-200 p-4 rounded-2xl flex flex-col items-center transform -rotate-6"
            ref={addToRefs}
          >
            <span className="text-4xl mb-2">🙄</span>
            <p className="text-center">
              You get a promotion at work. You question yourself and wonder when
              they'll realize you're an unqualified imposter, instead of
              trusting yourself and your abilities.
            </p>
          </div>

          <div
            className="bg-yellow-100 p-4 rounded-2xl flex flex-col items-center"
            ref={addToRefs}
          >
            <span className="text-4xl mb-2">😐</span>
            <p className="text-center">
              You attend a class reunion. You compare yourself with your peers'
              achievements, instead of making self-judgement more independent of
              others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emotion;