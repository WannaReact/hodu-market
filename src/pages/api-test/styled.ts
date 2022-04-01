import { COLOR } from '@shared/constants';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Aside = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 35rem;
`;

export const AsideButton = styled.button.attrs({ type: 'button' })`
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 2px solid ${COLOR.black};
  border-right: 2px solid ${COLOR.black};
  font-size: 3rem;
  text-align: left;

  &:hover {
    background-color: ${COLOR.lightGreen};
  }
`;

export const MethodName = styled.span`
  width: 14rem;
  padding-right: 1rem;
  text-align: right;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
`;

export const Button = styled.button.attrs({ type: 'button' })`
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
  gap: 2rem;
  padding: 1rem;
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
