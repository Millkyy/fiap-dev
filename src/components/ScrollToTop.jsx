import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Estilo do botão
const BackToTopButton = styled.button`
  position: fixed;
  bottom: 5vh;
  right: 3vw;
  width: 50px;
  height: 50px;
  border: solid 1px #ED145B;
  border-radius: 99999px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;


  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'all' : 'none')};
  transition: opacity 0.4s ease;
`;

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 480;
      const threshold = isMobile ? window.innerHeight * 2 : window.innerHeight; 
  
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <BackToTopButton onClick={scrollToTop} visible={isVisible}>
        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6078 11.9512L10.8039 0.999822L1 11.9512" stroke="#ED145B" stroke-linecap="round"   stroke-linejoin="round"/>
        </svg>
    </BackToTopButton>
  );
};

export default ScrollToTop;