import React from 'react';
import styled from "styled-components";
import trashImg from '../../image/trash.svg'
import formatCurrency from "../../utils/formatCurrency";
import totalPriceItems from "../../utils/totalPriceItems";

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
`

const OrderItemStyled = styled.li`
  display: flex;
  margin: 10px 0;
`

const ItemName = styled.span`
  flex-grow: 1;
`

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`

const OrderListItem = ({order}) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;