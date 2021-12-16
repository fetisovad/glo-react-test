import React from 'react';
import styled from "styled-components";
import dbMenu from "../../database/DBMenu";
import ListItem from "../ListItem/ListItem";
import Banner from "./Banner";

const MenuStyled = styled.main`
  background: #ccc;
  margin-top: 80px;
`

const SectionMenu = styled.section`
  padding: 30px;
`

const Menu = ({setOpenItem}) => {
    return (
        <MenuStyled>
            <Banner />
            <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem itemList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu>
                    <h2>Закуски / Напитки</h2>
                    <ListItem itemList={dbMenu.other}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
        </MenuStyled>
    );
};

export default Menu;