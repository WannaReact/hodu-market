import styled from 'styled-components';
import { COLOR } from '@shared/constants';

interface FlexTh {
  flex: number;
}

interface ProfileCheck {
  flex: number;
  isText?: boolean;
}

export const Table = styled.table`
  width: 100%;
`;

export const TbodyTest = styled.tbody`
  & .test:not(:first-of-type) {
    margin-top: 0.1rem;
  }
`;

export const THead = styled.thead`
  border-bottom: 0.1rem solid ${COLOR.greyC4};
`;

export const Tr = styled.tr`
  display: flex;
  align-items: center;

  tbody & {
    border-bottom: 0.1rem solid ${COLOR.greyC4};
  }
`;

export const HeadTd = styled.th<FlexTh>`
  flex: 0 0 ${(props) => props.flex * 100}%;
  font-size: 1.8rem;
  padding: 1.8rem 0;
`;

export const BodyTd = styled.td<ProfileCheck>`
  flex: 0 0 ${(props) => props.flex * 100}%;
  font-size: 1.8rem;
  padding: 1.6rem 0;
  text-align: center;
  & span {
    flex-shrink: 0;
  }
`;

export const CommentTd = styled.td<ProfileCheck>`
  flex: 1 1 ${(props) => props.flex * 100}%;
  font-size: 1.8rem;
  padding: 2rem 0;
  text-align: center;
  & strong {
    font-size: 1.4rem;
    margin-right: 1rem;
    color: #666;
  }
  & em {
    font-size: 1.2rem;
    color: #666;
  }
  & p {
    margin-top: 1rem;
  }
`;
