import { COLOR } from 'shared/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border: 2px solid ${COLOR.accentColor};
  font-size: 3rem;
  text-align: left;

  &:hover {
    background-color: ${COLOR.accentColor};
    color: ${COLOR.white};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 70rem;
  padding: 1rem;
  border-top: 2px solid ${COLOR.black};
  border-bottom: 2px solid ${COLOR.black};
`;

export const InputWrapper = styled.div`
  width: 100%;
  font-size: 3rem;
  text-align: right;
`;

export const Input = styled.input.attrs({ type: 'text' })`
  width: 45rem;
  padding: 0.5rem 1rem;
  border: 2px solid ${COLOR.black};
  border-radius: 0.5rem;
  font-size: 2.5rem;

  &:focus {
    background-color: ${COLOR.greyF2};
  }
`;
