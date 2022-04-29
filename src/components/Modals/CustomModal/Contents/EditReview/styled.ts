import { COLOR } from '@shared/constants';
import styled from 'styled-components';

export const Container = styled.div`
  min-width: 60rem;
  font-size: 1.6rem;

  & h2 {
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 0.3rem solid ${COLOR.accentColor};
    font-weight: 700;
    font-size: 2.8rem;
  }
`;

export const Form = styled.form`
  min-width: 15rem;
  margin-top: 3rem;
  border-top: 0.1rem solid ${COLOR.greyC4};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  & > button {
    align-self: flex-end;
    margin-top: 1rem;
  }
`;

export const Label = styled.p`
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 2.4rem;
`;
