import styled from 'styled-components';
import { COLOR } from '@shared/constants';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
  font-size: 1.8rem;
  color: ${COLOR.black};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Date = styled.span`
  font-size: 1.6rem;
  color: ${COLOR.grey76};
`;
