import styled from 'styled-components';
import { COLOR } from '@shared/constants';

export const CommentSection = styled.div`
  border-top: 0.1rem solid ${COLOR.greyC4};
  border-bottom: 0.1rem solid ${COLOR.greyC4};
  margin: 2rem 0 4rem 0;
`;

export const CommentInput = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
`;
