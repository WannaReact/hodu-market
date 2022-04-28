import { COLOR } from '@shared/constants';
import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: ${COLOR.modalBg};
`;

export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
  padding: 3rem;
  background-color: ${COLOR.white};
  border-radius: 1rem;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;
