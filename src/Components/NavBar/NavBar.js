import React from 'react';
import styled from "styled-components";
import logoImg from '../../image/navbar/logo.svg'
import signImg from '../../image/navbar/sign.svg'

const NavBarStyled = styled.header`
  background: #299B01;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #FFFFFF;
`

const NavLogo = styled.img`
  margin-right: 17px;
  width: 50px;
`

const NavTitle = styled.h1`
  font-size: 24px;
`

const Login = styled.button`
  margin-left: auto;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 32px;
  font-size: 16px;
  color: #FFFFFF;
`


const NavBar = () => {
    return (
        <NavBarStyled>
            <Logo>
                <NavLogo src={logoImg} alt='logo'/>
                <NavTitle>MRDonald’s</NavTitle>
            </Logo>
            <Login>
                <img src={signImg} alt=""/>
                <span>Войти</span>
            </Login>
        </NavBarStyled>
    );
};

export default NavBar;