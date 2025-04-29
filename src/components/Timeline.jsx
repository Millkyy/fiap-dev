import React, { useEffect, useState } from "react";
import styled from "styled-components";

//Barra de progresso 
const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  margin-top: 9vh;
  background: #ED145B;
  width: ${(props) => props.$scroll}%;
  z-index: 9999;
`;

function Timeline() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = Math.round((winScroll / height) * 100);
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <ProgressBar $scroll={scroll} />;
}

export default Timeline;
