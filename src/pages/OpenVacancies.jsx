import React from "react";
import aheadLogo from "../assets/image2.png";

const OpenVacancies = () => {
  return (
    <>
      <section id="openVacancies">
        <div className="bg-white py-12 mb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold pb-20">Open vacancies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-yellow-50 p-6 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">
                  Senior Full-Stack Engineer
                </h3>
                <ul className="list-disc pl-4">
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>€65-85k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Senior Designer</h3>
                <ul className="list-disc pl-4">
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>€40-55k, 0.25-0.50% equity share options</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-3xl">
                <h3 className="text-xl font-bold mb-4">Superstar Intern</h3>
                <ul className="list-disc pl-4">
                  <li>Full-time position</li>
                  <li>Berlin or remote</li>
                  <li>€20-24k, 0.5-1.50% equity share options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-auto w-full border-gray-300 m-20" />

        <div className="bg-white">
          <div className="mt-12 flex flex-col items-center">
            <img src={aheadLogo} alt="Ahead Logo" className="w-20 h-24 mb-5" />
            <div className="flex items-center gap-4 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-600">Auguststraße 26, 10117 Berlin</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p className="text-gray-600">hi@ahead-app.com</p>
            </div>
            <a
              href="https://www.apple.com/app-store/"
              className="bg-black text-white py-2 px-4 rounded-lg inline-flex items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store Icon"
                className="w-40"
              />
            </a>
            <p className="text-gray-400 mt-8">
              &copy; 2022 Ahead app. All right reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenVacancies;
