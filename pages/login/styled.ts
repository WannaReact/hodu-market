import { TextInput } from 'components/Inputs';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
  width: 55rem;
  height: 35.2rem;
`;
export const UL = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 70rem;
  margin-top: 2.9rem;
  & li {
    cursor: pointer;
  }
  & li + li::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 0.9rem;
    vertical-align: -0.1rem;
    border-radius: 0.05rem;
    background-color: #000;
    margin-right: 0.5rem;
  }
`;
export const MbTextInput = styled(TextInput)`
  margin-bottom: 3rem;
  color: red;
`;
