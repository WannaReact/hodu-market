import { COLOR } from '@shared/constants';
import styled from 'styled-components';

interface ISelectProps {
  isOpen: boolean;
}

export const JoinHeader = styled.div`
  margin: 1.5rem 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 10rem);
  margin-top: 10rem;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 48rem;
`;

export const P = styled.p`
  font-size: 2rem;
  line-height: 5rem;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLOR.greyC4};
  padding: 3rem;
  border-radius: 8px;
  width: 55rem;
  margin-bottom: 1.3rem;
`;
export const ExplainMsg = styled.span`
  position: relative;
  font-size: 1.3rem;
  top: -1.6px;
`;

export const A = styled.a`
  color: blue;
`;
export const ErrorMsg = styled.p`
  width: 48rem;
  color: ${COLOR.red};
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;

export const SuccessMsg = styled.p`
  width: 48rem;
  color: ${COLOR.greyC4};
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;
export const Select = styled.select<ISelectProps>`
  width: ${(props) => (props.isOpen ? '7rem' : '22rem')};
  height: 5.4rem;
  border: 1px solid ${COLOR.greyC4};
  border-radius: 0.5rem;
`;
