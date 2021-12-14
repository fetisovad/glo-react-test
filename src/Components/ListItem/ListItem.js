import React from 'react';
import styled from "styled-components";

const ListItemStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Item = styled.li`
  position: relative;
  z-index: 1;
  width: 400px;
  height: 155px;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin: 30px 30px 0 0;
  padding: 15px;
  color: white;
  font-size: 30px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px black;
    &:after {
      opacity: 0;
    }
  }
`

const ListItem = ({itemList}) => {
    return (
        <ListItemStyled>
            {itemList.map((item) => (
                <Item key={item.id}
                    img={item.img}
                >
                    <p>{item.name}</p>
                    <p>{item.price.toLocaleString('ru-RU',
                        {style: 'currency', currency: 'RUB'})}</p>
                </Item>
            ))}
        </ListItemStyled>
    );
};

export default ListItem;