import styled from 'styled-components';
import { COLOR } from '@shared/constants';

export const ProductContainer = styled.div`
  display: flex;
  padding-left: 3rem;
`;

export const ProductText = styled.div`
  display: flex;
  margin-left: 3rem;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: left;
  & h4 {
    font-size: 1.8rem;
  }
  & p {
    font-size: 1.6rem;
    color: ${COLOR.grey76};
  }
`;
