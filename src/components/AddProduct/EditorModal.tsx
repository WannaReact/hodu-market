import React, { useEffect } from 'react';
import styled from 'styled-components';

interface ModalType {
  isModal: boolean;
  setIsModal: Function;
  children: React.ReactNode;
}

interface ModalCss {
  isModal: boolean;
}

function EditorModal({ isModal, setIsModal, children }: ModalType) {
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
      <ModalBox isModal={isModal}> {children} </ModalBox>
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
  display: ${(props) => (props.isModal ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  top: 50%;
  opacity: 1;
  background-color: white;
  border: 0.3rem solid black;
  border-radius: 2rem;
  transform: translate(-50%);
  width: 30rem;
  height: 20rem;
`;

export default EditorModal;
