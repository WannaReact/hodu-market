import { COLOR } from 'shared/constants';
import styled from 'styled-components';

interface IProps {
  isOpen: boolean;
}

export const ReviewContainer = styled.li`
  min-height: 12rem;
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;
`;

export const ReviewInfo = styled.div`
  width: 14.5rem;
  max-height: 8rem;
  display: flex;
  & > div:first-child {
    margin-right: 1rem;
  }
`;

export const RatingWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const Author = styled.span`
  display: block;
  font-size: 1.8rem;
  color: ${COLOR.black};
  margin-bottom: 0.6rem;
`;

export const Date = styled.span`
  display: block;
  font-size: 1.6rem;
  color: ${COLOR.grey76};
`;

export const ReviewContent = styled.div`
  width: 80rem;
`;

export const ReviewText = styled.p<IProps>`
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.3rem;
  margin-bottom: 2rem;
  ${({ isOpen }) =>
    !isOpen &&
    `overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;`}
`;

export const ExpansionButton = styled.button<IProps>`
  font-size: 1.4rem;
  &::after {
    display: inline-block;
    content: '';
    width: 1rem;
    height: 1rem;
    ${({ isOpen }) =>
      isOpen
        ? `background: url('/images/icon-triangle-upward.svg') no-repeat;`
        : `background: url('/images/icon-triangle-downward.svg') no-repeat;`}
    background-size: 1rem;
    margin-left: 0.3rem;
  }
`;
