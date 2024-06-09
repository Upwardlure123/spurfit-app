import React from 'react';
import phoneGym from '../assets/phone-gym5.png'; // Make sure to place the image in the correct path

const Header = () => {
  return (
    <header className="header-container p-10 max-w-7xl mx-auto mt-5 flex items-center justify-center py-5 rounded-3xl">
      <div className="max-w-xl mb-25">
        <p className="header-subtitle text-lg mb-2">Ahead app</p>
        <h1 className="header-title text-5xl font-bold leading-tight">
          Master your life by mastering your emotions
        </h1>
        <div className="mt-6 flex items-center space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store"
            className="w-40"
          />
          <div className="text-lg">
            <span className="font-bold m-2">★★★★★</span> 100+ AppStore reviews
          </div>
        </div>
      </div>
      <div className="relative">
        <img 
          src={phoneGym} 
          alt="Phone with Gym App" 
          className="header-image rounded-lg header-image-border"
        />
      </div>
    </header>
  );
};

export default Header;
