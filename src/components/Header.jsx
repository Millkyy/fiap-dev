import React from 'react';
import styled from 'styled-components';
import logo from "../assets/svg/logo.svg";

//Header
const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 9%;
    background: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

//Logo fiap
const Logo = styled.img`
    height: 30%;
`;

function Header(){
    return(
        <HeaderContainer>
            <Logo src={logo} alt="Logo FIAP" />
        </HeaderContainer>
    );
}

export default Header;
