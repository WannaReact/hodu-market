import styled from 'styled-components';
import { COLOR } from '@shared/constants';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StatusText = styled.p`
  font-size: 1.8rem;
  color: ${COLOR.black};
`;
