import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../image/trash.svg';
import formatCurrency from '../../utils/formatCurrency';
import totalPriceItems from '../../utils/totalPriceItems';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background-image: url(${trashImg});
    background-color: transparent;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const ToppingsList = styled.ul`
    flex-basis: 100%;
    padding: 2px 2px 2px 20px;
`;

const ToppingListItem = styled.li`
    font-size: 16px;
`;

const OrderListItem = ({ order, setOpenItem, deleteOrder, index }) => {
    const deleteBntRef = useRef(null);
    
    return (
        <OrderItemStyled
            onClick={(e) => e.target !== deleteBntRef.current && setOpenItem({ ...order, index })}
        >
            <ItemName>
                {order.name} {order.choice}
            </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton
                ref={deleteBntRef}
                onClick={() => deleteOrder(index)}
            />
            <ToppingsList>
                {order.topping &&
                    order.topping.map(
                        (topping, index) =>
                            topping.checked && (
                                <ToppingListItem key={index}>
                                    {topping.name}
                                </ToppingListItem>
                            )
                    )}
            </ToppingsList>
        </OrderItemStyled>
    );
};

export default OrderListItem;
