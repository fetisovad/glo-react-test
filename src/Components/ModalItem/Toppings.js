import React from 'react';
import styled from "styled-components";

const ToppingsWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
`

const ToppingsLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 33%;
  justify-content: center;
  margin: 5px 0;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #000000;
`

const ToppingsCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`

const ToppingsTitle = styled.h4`
  font-size: 24px;
  color: #000000;
`

const ToppingsLabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Toppings = ({toppings, checkToppings}) => {
    console.log(toppings)
    return (
        <ToppingsWrapper>
            <ToppingsTitle>Добавки</ToppingsTitle>
            <ToppingsLabelsWrapper>
                {toppings.map((topping, i) => {
                    return (
                        <ToppingsLabel key={i}>
                            <ToppingsCheckbox
                                type='checkbox'
                                checked={topping.checked}
                                onChange={() => checkToppings(i)}
                            />
                            {topping.name}
                        </ToppingsLabel>
                    )
                })}
            </ToppingsLabelsWrapper>
        </ToppingsWrapper>
    );
};

export default Toppings;