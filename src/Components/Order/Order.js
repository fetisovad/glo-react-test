import React from 'react';
import styled from "styled-components";
import {AddButton} from "../ModalItem/ModalItem";
import OrderListItem from "../ListItem/OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 80px;
  left: 0;
  background-color: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`

const OrderTitle = styled.h2`
  text-align: center;
  font-size: 39px;
  text-transform: uppercase;
`

const OrderContent = styled.div`
  flex-grow: 1;
  width: 100%;
`

const OrderList = styled.ul`

`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`

const Order = () => {
    return (
        <>
            <OrderStyled>
                <OrderTitle>Ваш заказ</OrderTitle>
                <OrderContent>
                    <OrderList>
                        <OrderListItem/>
                        <OrderListItem/>
                        <OrderListItem/>
                    </OrderList>
                    <Total>
                        <span>Итого</span>
                        <span style={{marginLeft: '80px'}}>5</span>
                        <span>850Р</span>
                    </Total>
                    <AddButton style={{marginLeft: '50%', transform: 'translateX(-50%)'}}>Оформить</AddButton>
                </OrderContent>
            </OrderStyled>
        </>
    );
};

export default Order;