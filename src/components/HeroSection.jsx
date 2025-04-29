import React from 'react';
import styled from 'styled-components';
import backgroundHero from "../assets/imgs/header.jpg";

//background image
const HeroContainer = styled.section`
  width: 100%; 
  height: 95vh;
  background: 
    linear-gradient(to right, rgba(0, 0, 0, 1) 35%, rgba(0, 0, 0, 0.5) 65%),
    url(${backgroundHero}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: left;

@media (max-width: 480px){
    padding-top: 15vh;
    align-items: start;
    height: 70vh;
}
`;

//Conteúdo
const Content = styled.div`
  padding-left: 7%;
  font-weight: 500;
  font-size: 80px;

@media (max-width: 480px){
    font-size: 40px;
}
`;

//Título
const Title = styled.h1`
  -webkit-text-stroke: 2px #ED145B;
  color: transparent;

@media (max-width: 480px){
    font-size: 40px;
}
`;

//Subtitulo
const Subtitle = styled.h2`
  color: #ACC1CC;
  text-transform: uppercase;
  padding: 1.5rem 0;

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

@media (max-width: 480px){
    font-size: 18px;
    max-width: 415px;
    position: absolute;
    bottom: 40vh;
}
`;


const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>A MAIOR FACULDADE</Title>
        <Subtitle>DE TECNOLOGIA</Subtitle>
        <Paragraph>
          Referência em tecnologia e inovação no Brasil, a FIAP é uma faculdade que
          prepara profissionais para o futuro, com um ensino prático, professores
          atuantes no mercado e desafios reais que conectam os alunos às grandes empresas.
        </Paragraph>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;
