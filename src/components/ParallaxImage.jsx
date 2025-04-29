import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/imgs/break-image.jpg';

//Break Image
const ParallaxSection = styled.section`
  width: 100%;
  height: 70vh;
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

@media (max-width: 480px){
    width: 101%;
    height: 50vh;
}
`;

const ParallaxImage = () => {
  return (
    <ParallaxSection alt="Break Image"></ParallaxSection>
  );
};

export default ParallaxImage;