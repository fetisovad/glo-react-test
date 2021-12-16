import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
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
  aling-items: center;
  justify-content: space-between;
  font-family: 'Pacifico', cursive;
  font-size: 24px;

  &-span {
    font-family: Pacifico;
  }
`;

const ItemInfoTitle = styled.h4`
  font-size: 24px;
`;

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({img}) => img});
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
  &:hover {
    transform: scale(1.07);
  }
`;

const ModalItem = ({openItem, setOpenItem}) => {
    if (!openItem) return null;

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <ItemInfoHeader>
                    <ItemInfoTitle>{openItem.name}</ItemInfoTitle>
                    <span>{openItem.price.toLocaleString('ru-RU', {
                        style: 'currency', currency: 'RUB'
                    })}</span>
                </ItemInfoHeader>
                <ItemInfo></ItemInfo>
                <AddButton>Добавить</AddButton>
            </Modal>
        </Overlay>
    );
};

export default ModalItem;
