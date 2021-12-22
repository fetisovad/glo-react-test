import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import Banner from './Banner';
// import { useFetch } from "../hooks/useFetch";
import './Menu.css'

const MenuStyled = styled.main`
  background: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Menu = ({ setOpenItem, dbMenu }) => {
    // const res = useFetch()
    // const dbMenu = res.response
    console.log(dbMenu)

    return (
        <MenuStyled>
            <Banner/>
            {/*{res.response*/}
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
                // : res.error ? <div>Sorry, we will fix it soon...</div>
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
