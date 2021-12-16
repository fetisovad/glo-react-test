import React from 'react';
import styled from "styled-components";

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
`

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 0 25px -0px;
`

const ItemInfo = styled.div`
  width: 100%;
  padding: 0 40px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({img}) => img});
  background-position: center;
  background-size: cover;
  margin-bottom: 20px;
`

const AddButton = styled.button`
  margin-top: auto;
  padding: 20px 75px;
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  color: #FFFFFF;
  background: #299B01;
  align-self: center;
`

const ModalItem = ({openItem, setOpenItem}) => {
    if (!openItem) return null

    const closeModal = (e) => {
        if (e.target.id === 'overlay') {
            setOpenItem(null)
        }
    }

    return (
        <Overlay id='overlay' onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <ItemInfo>
                    {openItem.name}
                </ItemInfo>
                <AddButton>Добавить</AddButton>
            </Modal>
        </Overlay>
    );
};

export default ModalItem;