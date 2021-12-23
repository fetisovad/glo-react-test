import React, { useContext } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Banner from './Banner';
import './Menu.css'
import { Context } from "../../utils/context";

const MenuStyled = styled.main`
  background: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Menu = () => {

    const {openItem: {setOpenItem}, dbMenu} = useContext(Context)


    return (
        <MenuStyled>
            <Banner/>
            {dbMenu
                ?
                <>
                    <SectionMenu>
                        <h2>Бургеры</h2>
                        <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem}/>
                    </SectionMenu>
                    <SectionMenu>
                        <h2>Закуски / Напитки</h2>
                        <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem}/>
                    </SectionMenu>
                </>
                    :
                    <div className='example'>
                        <div className='block'>
                            <div className='item'/>
                            <div className='item'/>
                            <div className='item'/>
                            <div className='item'/>
                            <div className='item'/>
                            <div className='item'/>
                            <div className='item'/>
                            <div className='item'/>
                        </div>
                    </div>
            }
        </MenuStyled>
    );
};

export default Menu;
