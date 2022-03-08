import { COLOR } from 'shared/constants';
import styled from 'styled-components';

export const ReviewContainer = styled.div`
  height: 12rem;
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
`;

export const ReviewInfo = styled.div`
  width: 14.5rem;
  max-height: 8rem;
`;

export const Author = styled.span`
  font-size: 1.8rem;
  color: ${COLOR.black};
`;

export const Date = styled.span`
  font-size: 1.6rem;
  color: ${COLOR.grey76};
`;

export const ReviewContent = styled.div`
  width: 80rem;
`;
