import React from 'react';
import { GlobalStyle } from "./styles/GlobalStyle.jsx";

import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ScrollDownButton from './components/ScrollDownButton.jsx';
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
      <ScrollDownButton />
      <EducacaoTech />
      <ScrollToTop />
      <ParallaxImage />
      <AccordionSection />
      <HoverSection />
    </>
  );
}

export default App;