import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
const Logo = styled.div`
    
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
            <Logo alt="Logo FIAP">
                <svg width="90" height="88" viewBox="0 0 303 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M92.1582 0H86.1274V87.3892H92.1582V0Z" fill="#ED145B"/>
                    <path d="M51.78 41.8367H22.427V47.8424H51.78V41.8367Z" fill="#ED145B"/>
                    <path d="M0 0V87.3892H6.03079V6.00578H68.3175V0H0Z" fill="#ED145B"/>
                    <path d="M272.893 0.356445H225.024V87.7457H231.054V55.1719H231.102V49.1662H231.054V6.36223H272.469C287.028 6.36223 296.969 13.5895 296.969 27.4334V27.6879C296.969 40.6665 286.792 49.1662 271.762 49.1662H252.822V55.1719H271.432C288.3 55.1719 303 45.7052 303 27.3316V27.0771C302.906 10.1795 290.656 0.356445 272.893 0.356445Z" fill="#ED145B"/>
                    <path d="M190.017 49.166L161.983 0H156.188L106.245 88H112.465L158.968 7.12551L183.232 49.166H190.017Z" fill="#ED145B"/>
                    <path d="M199.252 65.3H192.561L205.612 87.9999H212.208L199.252 65.3Z" fill="#ED145B"/>
                </svg>
            </Logo>
            <ProgressBar $scroll={scroll} />
        </HeaderContainer>
    );
}

export default Header;
