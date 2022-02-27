import styled from 'styled-components';
import { COLOR } from '../../shared/constants';

export const S_L = styled.button`
  width: 22rem;
  height: 6.8rem;
  color: ${COLOR.white};
  font-size: 2.4rem;
  font-weight: 700;
  background-color: ${(props) =>
    props.disabled ? COLOR.greyC4 : COLOR.accentColor};
  border-radius: 0.5rem;
`;

export const S_M = styled.button`
  width: 48rem;
  height: 6rem;
  color: ${(props) => (props.color === 'white' ? COLOR.grey76 : COLOR.white)};
  font-size: 1.8rem;
  font-weight: 700;
  background-color: ${(props) => (props.disabled ? COLOR.greyC4 : '')};
  ${(props) => {
    switch (props.color) {
      case 'green':
        return `background-color: ${COLOR.accentColor}`;
      case 'dark':
        return `background-color: ${COLOR.grey76}`;
      case 'white':
        return `
        background-color: ${COLOR.white};
        border: 0.1rem solid ${COLOR.greyC4}`;
      default:
        return ``;
    }
  }};
  ${(props) => (props.disabled ? `background-color: ${COLOR.greyC4}` : '')};
  border-radius: 0.5rem;
`;

export const S_MS = styled.button`
  width: 16.8rem;
  height: 5.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  ${(props) => {
    switch (props.color) {
      case 'green':
        return `
        color: ${COLOR.white}; 
        background-color: ${COLOR.accentColor}`;
      case 'white':
        return `
        color: ${COLOR.grey76}; 
        background-color: ${COLOR.white}; 
        border: 0.1rem solid ${COLOR.greyC4}; 
        &:hover {
          color:${COLOR.black}; 
          border-color: ${COLOR.grey76};
        }`;
      default:
        return '';
    }
  }};
  padding: 0 2rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const S_S = styled.button`
  width: 8rem;
  height: 4rem;
  ${(props) => {
    switch (props.color) {
      case 'green':
        return `
        color: ${COLOR.white}; 
        background-color: ${COLOR.accentColor}`;
      case 'white':
        return `
        color: ${COLOR.grey76}; 
        background-color: ${COLOR.white}; 
        border: 0.1rem solid ${COLOR.greyC4}; 
        &:hover {
          color:${COLOR.black}; 
          border-color: ${COLOR.grey76};
        }`;
      default:
        return '';
    }
  }};
  border-radius: 0.5rem;
`;

export const S_TAB = styled.button<{ isActive: boolean }>`
  width: 32rem;
  height: 6rem;
  color: ${(props) => (props.isActive ? COLOR.accentColor : COLOR.grey76)};
  font-size: 1.8rem;
  font-weight: ${(props) => (props.isActive ? 700 : 500)};
  background-color: ${COLOR.white};
  border-bottom: 0.6rem solid;
  border-color: ${(props) =>
    props.isActive ? COLOR.accentColor : COLOR.greyE0};
`;

export const S_MENU = styled.button<{ isActive: boolean }>`
  width: 25rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => (props.isActive ? COLOR.white : COLOR.black)};
  background-color: ${(props) =>
    props.isActive ? COLOR.accentColor : COLOR.white};
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  &:hover {
    background-color: ${(props) =>
      props.isActive ? COLOR.accentColor : COLOR.greyE0};
  }
`;

export const S_BADGE = styled.span`
  height: 2rem;
  color: ${COLOR.white};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2rem;
  background-color: ${COLOR.red};
  border-radius: 1rem;
  padding: 0 0.7rem;
`;
