import styled from 'styled-components';

export const S_L = styled.button`
  width: 22rem;
  height: 6.8rem;
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: 700;
  background-color: ${(props) => (props.disabled ? '#c4c4c4' : '#21bf48')};
  border-radius: 0.5rem;
`;

export const S_M = styled.button`
  width: 48rem;
  height: 6rem;
  color: ${(props) => (props.color === 'white' ? '#767676' : '#ffffff')};
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) => (props.disabled ? '#c4c4c4' : '#21bf48')};
  border-radius: 0.5rem;
`;

export const S_MS = styled.button`
  width: 16.8rem;
  height: 5.4rem;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  background-color: ${(props) => (props.disabled ? '#c4c4c4' : '#21bf48')};
  border-radius: 0.5rem;
`;

export const S_S = styled.button`
  width: 8rem;
  height: 4rem;
  background-color: #21bf48;
  border-radius: 0.5rem;
`;

export const S_TAB = styled.button`
  width: 32rem;
  height: 6rem;
  color: #767676;
  background-color: #ffffff;
  border: 6px soild #21bf48;
`;

export const S_MENU = styled.button`
  width: 25rem;
  height: 5rem;
  color: #000000;
  border-radius: 0.5rem;
`;
