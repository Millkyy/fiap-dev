import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundHero from "../assets/imgs/header.jpg";

//Animação de FadeIn
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FadeInSection = styled.section`
  animation: ${fadeIn} 1s ease-in-out;
`;

//background image
const HeroContainer = styled.section`
  width: 100%; 
  min-height: 850px;
  background: 
    linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.5) 65%),
    url(${backgroundHero}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: left;

@media (max-width: 480px){
    width: 101%; 
    padding-top: 120px;
    align-items: start;
    min-height: 600px;
    background: 
      linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.5) 65%),
      linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.1) 80%),
      url(${backgroundHero}) no-repeat center/cover;
}
`;

//Conteúdo
const Content = styled.div`
  padding-left: 100px;
  font-weight: 500;
  font-size: 80px;

@media (max-width: 480px){
    font-size: 40px;
    padding-left: 50px;
}
`;

//Título
const Title = styled.h1`
  -webkit-text-stroke: 2px #ED145B;
  color: transparent;
  text-transform: uppercase;

  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;

@media (max-width: 480px){
    font-size: 40px;
}
`;

//Subtitulo
const Subtitle = styled.h2`
  color: #ACC1CC;
  text-transform: uppercase;
  padding: 20px 0;

  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.2s;

@media (max-width: 480px){
    font-size: 36px;
}
`;

//Descrição
const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 200;
  max-width: 750px;
  color: #AFAFAF;

  animation: ${fadeIn} 1.2s ease forwards;
  animation-delay: 0.2s;

@media (max-width: 480px){
    font-size: 18px;
    max-width: 415px;
    padding-top: 100px;

    animation: ${fadeIn} 1.5s ease forwards;
    animation-delay: 0.2s;
}
`;


const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
      <FadeInSection>
        <Title>A maior faculdade</Title>
        <Subtitle>de tecnologia</Subtitle>
        <Paragraph>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que
          prepara profissionais para o futuro, com um ensino prático, professores
          atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
        </Paragraph>
      </FadeInSection>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;