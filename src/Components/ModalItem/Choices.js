import React from 'react';
import styled from "styled-components";

const ChoicesWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
`

const ChoicesLabel = styled.label`
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

const ChoicesCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
`

const ChoicesTitle = styled.h4`
  font-size: 24px;
  color: #000000;
`

const ChoicesLabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Choices = ({ choice, changeChoices, openItem: { choices } }) => {
    return (
        <ChoicesWrapper>
            <ChoicesTitle>Добавки</ChoicesTitle>
            <ChoicesLabelsWrapper>
                {choices.map((item, i) =>
                    <ChoicesLabel key={i}>
                        <ChoicesCheckbox
                            type='radio'
                            name='choices'
                            checked={choice === item}
                            onChange={changeChoices}
                            value={item}
                        />
                        {item}
                    </ChoicesLabel>
                )}
            </ChoicesLabelsWrapper>
        </ChoicesWrapper>
    );
};

export default Choices;