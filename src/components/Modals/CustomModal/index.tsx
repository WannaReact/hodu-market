import React, { useContext } from 'react';
import { ModalDispatchContext } from 'src/contexts/Modal/ModalContext';
import DeleteIcon from 'public/images/icon-delete.svg';
import * as Styled from './styled';

interface CustomModalProps {
  children: React.ReactNode;
}

function CustomModal({ children }: CustomModalProps) {
  const { close } = useContext(ModalDispatchContext);
  return (
    <div>
      <Styled.Background onClick={close} />
      <Styled.Content>
        <Styled.ExitButton onClick={close}>
          <DeleteIcon />
        </Styled.ExitButton>
        {children}
      </Styled.Content>
    </div>
  );
}

export default CustomModal;
