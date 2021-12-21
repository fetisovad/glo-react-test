import React from 'react';
import styled from 'styled-components';
import { AddButton } from '../ModalItem/ModalItem';
import OrderListItem from './OrderListItem';
import formatCurrency from '../../utils/formatCurrency';
import totalPriceItems from '../../utils/totalPriceItems';
import { useAuth } from "../hooks/useAuth";

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
`;

const OrderTitle = styled.h2`
    text-align: center;
    font-size: 39px;
    text-transform: uppercase;
`;

const OrderContent = styled.div`
    flex-grow: 1;
    width: 100%;
`;

const OrderList = styled.ul``;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100%;
    margin-bottom: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
    margin: 20px 0;
`;

const Order = ({ orders, setOpenItem, setOrders, authentication, login}) => {
    const total = orders.reduce(
        (result, order) => result + totalPriceItems(order),
        0
    );

    const totalCounter = orders.reduce((res, order) => res + order.count, 0);

    const deleteOrder = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders)
        setOpenItem(null)
    };

    const checkoutOrder = () => {
        if(!authentication) login()
        else {
            console.log(orders)
        }
    }

    return (
        <>
            <OrderStyled>
                <OrderTitle>Ваш заказ</OrderTitle>
                <OrderContent>
                    {orders.length ? (
                        <OrderList>
                            {orders.map((order, index) => {
                                return (
                                    <OrderListItem
                                        key={index}
                                        order={order}
                                        index={index}
                                        setOpenItem={setOpenItem}
                                        deleteOrder={deleteOrder}
                                    />
                                );
                            })}
                        </OrderList>
                    ) : (
                        <EmptyList>Список заказов пуст</EmptyList>
                    )}
                    <Total>
                        <span>Итого</span>
                        <span style={{ marginLeft: '80px' }}>
                            {totalCounter}
                        </span>
                        <span>{formatCurrency(total)}</span>
                    </Total>
                    <AddButton
                        style={{marginLeft: '50%',transform: 'translateX(-50%)'}}
                        onClick={checkoutOrder}
                    >
                        Оформить
                    </AddButton>
                </OrderContent>
            </OrderStyled>
        </>
    );
};

export default Order;
