import React, { useEffect, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Buttons } from '@components';

interface ModalType {
  isModal: boolean;
  setIsModal: Function;
  cancelText: string;
  checkText: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

interface ModalCss {
  isModal: boolean;
}

function Modal({
  isModal,
  setIsModal,
  cancelText,
  checkText,
  onClick,
  children
}: ModalType) {
  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModal]);
  return (
    <ModalContainer>
      <ModalBack isModal={isModal} onClick={() => setIsModal(false)} />
      <ModalBox isModal={isModal}>
        <TextModalTitle>{children}</TextModalTitle>
        <ContainerBtnBox>
          <Buttons.Custom
            width={10}
            height={4}
            fontSize={1.6}
            color="white"
            disabled={false}
            onClick={() => setIsModal(false)}
          >
            {cancelText}
          </Buttons.Custom>

          <Buttons.Custom
            width={10}
            height={4}
            fontSize={1.6}
            color="green"
            disabled={false}
            onClick={onClick}
          >
            {checkText}
          </Buttons.Custom>
        </ContainerBtnBox>
        <AreaDelete onClick={() => setIsModal(false)} />
      </ModalBox>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const ModalBack = styled.div<ModalCss>`
  display: ${(props) => (props.isModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0.4;
  background-color: #eee;
`;

const ModalBox = styled.div<ModalCss>`
  display: ${(props) => (props.isModal ? 'flex' : 'none')};
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 45%;
  opacity: 1;
  background-color: white;
  border: 1px solid #c4c4c4;
  transform: translate(-50%);
  padding: 4.7rem 6.8rem 4rem;
  width: 36rem;
  height: 20rem;
`;

const TextModalTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
`;

const ContainerBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AreaDelete = styled.span`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 22px;
  background: url(images/icon-delete.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

Modal.defaultProps = {
  onClick: () => {}
};

export default Modal;
