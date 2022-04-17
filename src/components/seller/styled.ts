import styled from 'styled-components';
import { COLOR } from '@shared/constants';

interface FlexTh {
  flex: number;
}

interface ProfileCheck {
  hasProfile?: boolean;
  flex: number;
  isText?: boolean;
  isAlign?: boolean;
}
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
`;

export const HeadTd = styled.th<FlexTh>`
  flex: 0 0 ${(props) => props.flex}%;
  font-size: 1.8rem;
  padding: 1.8rem 0;
`;

export const BodyTd = styled.td<ProfileCheck>`
  flex: 0 0 ${(props) => props.flex}%;
  display: ${(props) => props.hasProfile && 'flex'};
  font-size: 1.8rem;
  padding: 1.6rem 0;
  text-align: center;
  padding-left: ${(props) => props.hasProfile && '3rem'};
  & span {
    flex-shrink: 0;
  }
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
    color: #767676;
  }
`;

export const CommentTr = styled.tr`
  display: flex;
  align-items: center;
`;

export const CommentTd = styled.td<ProfileCheck>`
  flex: 1 1 ${(props) => props.flex}%;
  border-top: ${(props) => props.isText && '1px solid #ccc'};
  font-size: 1.8rem;
  padding: 2rem 0;
  text-align: ${(props) => props.isAlign && 'center'};
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
