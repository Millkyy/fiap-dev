import React from 'react';
import { GlobalStyle } from "./styles/GlobalStyle.jsx";

import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import EducacaoTech from './components/EducationSection.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'
import ParallaxImage from './components/ParallaxImage.jsx'
import AccordionSection from './components/AccordionSection.jsx'
import HoverSection from './components/HoverSection.jsx'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroSection />
      <EducacaoTech />
      <ParallaxImage />
      <AccordionSection />
      <HoverSection />
      <ScrollToTop />
    </>
  );
}

export default App;