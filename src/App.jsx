import React from 'react';

import Header from './components/Header.jsx';
import Timeline from './components/Timeline.jsx';
import HeroSection from './components/HeroSection.jsx';
import ScrollDownButton from './components/ScrollDownButton.jsx';
import EducacaoTech from './components/EducationSection.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'
import ParallaxImage from './components/ParallaxImage.jsx'
import Estrutura from './components/Estrutura.jsx'
import SaberMais from './components/SaberMais.jsx'
import { GlobalStyle } from "./styles/GlobalStyle.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Timeline />
      <HeroSection />
      <ScrollDownButton />
      <EducacaoTech />
      <ScrollToTop />
      <ParallaxImage />
      <Estrutura />
      <SaberMais />
    </>
  );
}

export default App;