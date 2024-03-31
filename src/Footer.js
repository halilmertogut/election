import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";
const Footer = () => {
  const footerRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="my-auto bg-black text-white py-6 relative z-10 font-montserrat"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold mb-5">
          <a onClick={toggleModal} className="hover:text-cyan-800 transition-colors duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://instagram.com/hmertogut"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://github.com/halilmertogut"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://linkedin.com/in/halilmertogut"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
          <p className="text-sm md:text-base">
            @hmertogut © {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <p className="text-black font-montserrat text-2xl mb-5 mt-5">Discord Name: <span className='text-cyan-800'>halilmertogut</span> </p>
      </Modal>
    </footer>
  );
};

export default Footer;
