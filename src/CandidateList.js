import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useSpring, animated } from 'react-spring';

const CandidateCard = ({ candidate, progressBarRef }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const hoverAnimation = useSpring({
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      boxShadow: isHovered ? '0 15px 35px rgba(0, 0, 0, 0.2)' : '0 8px 15px rgba(0, 0, 0, 0.1)',
    });

    const getImageSrc = (name) => {
      const formattedName = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '_');
      return `/candidates/${formattedName}.jpg`;
    };
  
    return (
      <animated.div
        style={hoverAnimation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white rounded-xl shadow-lg transition-all duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center space-y-4 mt-10 mx-4 p-10"
      >
        <img src={getImageSrc(candidate.candidate.name)} alt={candidate.candidate.name + " Profile"} className="w-32 h-32 rounded-full object-cover mb-4"/>
        <h3 className="text-xl font-semibold">{candidate.candidate.name}</h3>
        <p className="text-md">Party Name: {candidate.name}</p>
        <p className="text-md text-red-500">Total Votes: {candidate.totalVote.toLocaleString()} ({candidate.totalVotePercent.toFixed(2)}%)</p>
        <div className="w-full bg-gray-200 rounded-full overflow-hidden h-2.5">
          <div
            ref={progressBarRef}
            className="bg-gradient-to-r from-green-500 to-blue-600 h-2.5 rounded-full"
            style={{ width: '0%' }}
          ></div>
        </div>
      </animated.div>
    );
};

const CandidateList = ({ candidates }) => {
  const progressBarRefs = useRef([]);

  useEffect(() => {
    progressBarRefs.current = progressBarRefs.current.slice(0, candidates.length);

    candidates.forEach((candidate, index) => {
      if (progressBarRefs.current[index]) {
        const percentage = candidate.totalVotePercent;
        gsap.to(progressBarRefs.current[index], { width: `${percentage}%`, duration: 1.5, ease: 'power3.out' });
      }
    });
  }, [candidates]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {candidates.map((candidate, index) => (
        <CandidateCard
          key={candidate.no}
          candidate={candidate}
          progressBarRef={(el) => (progressBarRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default CandidateList;
