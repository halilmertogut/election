import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    gsap.fromTo(footerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <footer ref={footerRef} className="my-auto bg-black text-white py-6 relative z-10 font-montserrat">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold mb-2">Connect with Me</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
          <p className="text-sm md:text-base">Designed & Built by Your Name © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
