import React from 'react';
import styled from 'styled-components';

// Container principal
const ContactSection = styled.section`
  min-height: 80vh;
  background: #101010;
  color: #ACC1CC;
  text-align: center;
  align-content: flex-end;
  padding: 30vh 0;
  font-weight: 500;

@media (max-width: 480px){
    min-height: 65vh;
    padding: 15vh 0;
}
`;

// Título
const Title = styled.h2`
  font-size: 80px;
  margin-bottom: 5rem;

@media (max-width: 480px){
    padding: 0 100px;
    font-size: 40px;
}
`;

// Botão com borda e hover
const ContactButton = styled.button`
  font-family: 'Gotham', 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 30px;
  text-transform: uppercase;
  color: #ED145B;
  background: transparent;
  padding: 1rem 3.5rem;
  border: 2px solid #ED145B;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #ED145B;
    color: #101010;
    font-weight: 500;
  }

@media (max-width: 480px){
    font-size: 20px;
}
`;

const SaberMais = () => {
  return (
    <ContactSection>
      <Title>QUER SABER MAIS?</Title>
      <ContactButton>Entre em contato</ContactButton>
    </ContactSection>
  );
};

export default SaberMais;