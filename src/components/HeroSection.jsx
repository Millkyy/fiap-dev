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
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 50px;

@media (max-width: 480px){
    width: 101%; 
    align-items: start;
    min-height: 600px;
    padding: 50px;
    background: 
      linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.5) 65%),
      linear-gradient(to top, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.1) 80%),
      url(${backgroundHero}) no-repeat center/cover;
}
`;

//Conteúdo
const Content = styled.div`
  font-weight: 500;
  font-size: 80px;
  padding: 50px 100px 50px 50px;

@media (max-width: 480px){
    font-size: 40px;
    padding: 5px;
    
}
`;

//Título
const Title = styled.h1`
  -webkit-text-stroke: 2px #ED145B;
  color: transparent;
  text-transform: uppercase;
  padding-top: 150px;

  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;

@media (max-width: 480px){
    font-size: 40px;
    padding-top: 50px;
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

//Botão de Scroll Down
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-top: 100px;

@media (max-width: 480px){
    display: none;
}
`;

//Título do botão
const ScrollDown = styled.div`
  font-size: 12px;
  color: #AFAFAF;
  font-weight: 500;
  text-transform: uppercase;
`;

//Cículo do botão
const Button = styled.div`
  padding: 1.1rem 0.75rem;
  border: solid 1px white;
  border-radius: 9999px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;


const HeroSection = () => {

  const scrollToNextSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

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
      <Container>
        <ScrollDown>
          Scroll down
        </ScrollDown>
        <Button onClick={scrollToNextSection}>
          <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
            <path d="M1.00001 1L10.8039 9.33515L20.6078 1" stroke="#ACC1CC" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;