import { COLOR } from 'src/shared/constants';
import styled from 'styled-components';

export const ReviewContainer = styled.li`
  height: 12rem;
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
`;

export const ReviewInfo = styled.div`
  width: 14.5rem;
  max-height: 8rem;
  display: flex;
  & > div:first-child {
    margin-right: 1rem;
  }
`;

export const RateWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const Author = styled.span`
  display: block;
  font-size: 1.8rem;
  color: ${COLOR.black};
  margin-bottom: 0.4rem;
`;

export const Date = styled.span`
  display: block;
  font-size: 1.6rem;
  color: ${COLOR.grey76};
`;

export const ReviewContent = styled.div`
  width: 80rem;
`;

export const ReviewText = styled.p`
  font-size: 1.6rem;
`;

export const ExpansionButton = styled.button`
  font-size: 1.4rem;
`;
