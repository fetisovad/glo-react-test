import React, { useContext } from 'react';
import styled from 'styled-components';
import formatCurrency from '../../utils/formatCurrency';
import CountItem from './CountItem';
import { useCount } from '../hooks/useCount';
import totalPriceItems from '../../utils/totalPriceItems';
import Toppings from './Toppings';
import { useToppings } from '../hooks/useToppings';
import { useChoices } from '../hooks/useChoices';
import Choices from './Choices';
import { Context } from "../../utils/context";

export const Overlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    padding: 0 0 25px -0px;
`;

const ItemInfo = styled.div`
    width: 100%;
    padding: 0 40px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const ItemInfoHeader = styled.div`
    padding: 0 40px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Pacifico', cursive;
    font-size: 24px;

    &-span {
        font-family: 'Pacifico', cursive;
    }
`;

const ItemInfoTitle = styled.h4`
    font-size: 24px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
`;

export const AddButton = styled.button`
    margin-top: auto;
    padding: 20px 75px;
    font-family: 'Roboto', sans-serif;
    font-size: 21px;
    color: #ffffff;
    background: #299b01;
    align-self: center;
    border: none;
    &:disabled {
        background-color: grey;
    }
    &:hover {
        transform: scale(1.07);
    }
`;

export const TotalPriceItem = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ModalItem = () => {
    const {openItem: {openItem, setOpenItem}, orders: {orders, setOrders}} = useContext(Context)

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings,
        choice: choices.choice,
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img} />
                <ItemInfoHeader>
                    <ItemInfoTitle>{openItem.name}</ItemInfoTitle>
                    <span>{formatCurrency(openItem.price)}</span>
                </ItemInfoHeader>
                <ItemInfo>
                    <CountItem {...counter} />
                    {openItem.toppings && <Toppings {...toppings} />}
                    {openItem.choices && (
                        <Choices {...choices} openItem={openItem} />
                    )}
                    <TotalPriceItem>
                        <span>Цена</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>
                </ItemInfo>
                <AddButton
                    onClick={isEdit ? editOrder : addToOrder}
                    disabled={order.choices && !order.choice}
                >
                    {isEdit ? 'Редактировать' : 'Добавить'}
                </AddButton>
            </Modal>
        </Overlay>
    );
};

export default ModalItem;
