import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/imgs/break-image.jpg';

//Break Image
const ParallaxSection = styled.section`
  width: 100%;
  height:500px;
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParallaxImage = () => {
  return (
    <ParallaxSection alt="Break Image"></ParallaxSection>
  );
};

export default ParallaxImage;