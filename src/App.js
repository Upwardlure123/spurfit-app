import './App.css';
import React from 'react';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import EmotionalIntelligenceComponent from './pages/Emotion';
import Ahead from './pages/Ahead';
import OpenVacancies from './pages/OpenVacancies';

function App() {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <Header />
      <EmotionalIntelligenceComponent />
      <Ahead />
      <OpenVacancies />
    </div>
  );
}

export default App;
