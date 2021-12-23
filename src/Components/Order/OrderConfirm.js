import React, { useContext } from 'react';
import styled from "styled-components";
import { projection } from '../../utils/projection';
import totalPriceItems from "../../utils/totalPriceItems";
import { OrderTitle, Total } from "./Order";
import { AddButton, Overlay, TotalPriceItem } from "../ModalItem/ModalItem";
import formatCurrency from "../../utils/formatCurrency";
import { Context } from "../../utils/context";

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: [
        'topping',
        (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
        (arr) => (arr.length ? arr : 'no topping'),
    ],
    choice: ['choice', (item) => (item ? item : 'no choices')],
};

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`

const sendOrder = (database, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    database.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder,
    });
};

const OrderConfirm = () => {

    const {
        orders: { orders, setOrders },
        auth: { authentication },
        orderConfirm: { setOpenOrderConfirm },
        database
    } = useContext(Context)

    const total = orders.reduce(
        (result, order) => result + totalPriceItems(order),
        0
    );

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenOrderConfirm(false)
        }
    };

    return (
        <div>
            <Overlay id='overlay' onClick={closeModal}>
                <Modal style={{ height: '35%' }}>
                    <OrderTitle>{authentication.displayName}</OrderTitle>
                    <Text>Осталось только подтвердить Ваш заказ</Text>
                    <Total style={{
                        position: 'absolute',
                        top: '47%',
                        right: '40%',
                        marginTop: '0',
                        display: 'flex',
                        alignItems: 'end',
                        width: '20%',
                        justifyContent: 'space-around'
                    }}>
                        <span>Итого</span>
                        <TotalPriceItem style={{ marginLeft: '50%' }}>{formatCurrency(total)}</TotalPriceItem>
                    </Total>
                    <AddButton style={{ position: 'absolute', top: '57%', right: '40%' }} onClick={() => {
                        sendOrder(database, orders, authentication)
                        setOrders([])
                        setOpenOrderConfirm(false)
                        alert('Заказ оформлен, иди нахуй')
                    }}>Подтвердить</AddButton>
                </Modal>
            </Overlay>
        </div>
    );
};

export default OrderConfirm;