import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandidateList from './CandidateList';
import Footer from './Footer';
import { useSpring, animated } from 'react-spring';
import 'tailwindcss/tailwind.css'; // Assuming Tailwind CSS is setup

function App() {
  const [ankaraData, setAnkaraData] = useState(null);
  const [istanbulData, setIstanbulData] = useState(null);

  useEffect(() => {
    const fetchElectionResults = async () => {
      try {
        const response = await axios.get('https://secim.cnnturk.com/api/mayor/31-mart-2024');
        const cities = response.data.partyMapMetropolitanCities;
  
        setAnkaraData(cities.find(city => city.name === 'Ankara'));
        setIstanbulData(cities.find(city => city.name === 'İstanbul' || city.name === 'Istanbul'));
      } catch (error) {
        console.error('Failed to fetch election results:', error);
      }
    };
  
    // Fetch results immediately on component mount
    fetchElectionResults();
  
    // Set up polling every 60 seconds
    const interval = setInterval(fetchElectionResults, 30000);
  
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  

  // Animation for main content appearance
  const fadeIn = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 200 });

  return (
    <animated.div style={fadeIn} className="min-h-screen flex flex-col relative">
      <header className="text-center p-5 bg-opacity-90 bg-slate-700 backdrop-filter backdrop-blur-md">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat">Oy <span className='text-white'>'Takip'</span> Etme Platformu </h1>
      </header>
      <main className="flex-grow p-5">
        {ankaraData && (
          <div className="mb-6 mt-10">
            <h2 className="text-4xl font-semibold mb-4 font-montserrat text-center mt-20">{ankaraData.name}</h2>
            <div className="flex justify-center">
              <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-red-800"></span>
            </div>
            <CandidateList candidates={ankaraData.details} />
          </div>
        )}
        {istanbulData && (
          <div className="mb-6">
            <h2 className="text-4xl font-semibold mb-4 font-montserrat text-center mt-20">{istanbulData.name}</h2>
            <div className="flex justify-center">
              <span className="inline-block w-40 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-red-800"></span>
            </div>
            <CandidateList candidates={istanbulData.details} />
          </div>
        )}
      </main>
      <Footer />
    </animated.div>
  );
}

export default App;
