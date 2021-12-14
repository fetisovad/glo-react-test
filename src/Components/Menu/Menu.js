import React from 'react';
import styled from "styled-components";
import dbMenu from "../../database/DBMenu";
import ListItem from "../ListItem/ListItem";

const MenuStyled = styled.main`
  background: #ccc;
  margin-top: 80px;
`

const SectionMenu = styled.section`
  padding: 30px;
`

const Banner = styled.div`
  height: 210px;
  width: 100%;
  background-image: url("/main/banner.png");
  background-position: center;
  background-size: cover;
`

const Menu = () => {
    return (
        <MenuStyled>
            <Banner />
            <SectionMenu>
                <h2>Бургеры</h2>
                <ListItem itemList={dbMenu.burger}/>
            </SectionMenu>
            <SectionMenu>
                <h2>Закуски / Напитки</h2>
                <ListItem itemList={dbMenu.other}/>
            </SectionMenu>
        </MenuStyled>
    );
};

export default Menu;