import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from "../assets/svg/logo.svg";

//Header
const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    background: #101010;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

// Barra de progresso
const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  height: 2px;
  width: ${(props) => props.$scroll}%;
  background: #ED145B;
  transition: width 0.1s ease-in-out;
  z-index: 999;
`;

//Logo fiap
const Logo = styled.img`
    height: 25px;
`;

function Header(){
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = Math.round((winScroll / height) * 100);
        setScroll(scrolled);
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return(
        <HeaderContainer>
            <Logo src={logo} alt="Logo FIAP" />
            <ProgressBar $scroll={scroll} />
        </HeaderContainer>
    );
}

export default Header;
