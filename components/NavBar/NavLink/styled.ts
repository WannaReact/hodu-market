import styled from 'styled-components';

export const NavLinkConatainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
  & path {
    stroke: #000000;
    stroke-width: 2px;
  }
  &:hover path {
    stroke: #21bf48;
  }
  &:hover p {
    color: #000000;
  }
`;

export const NavLinkText = styled.p`
  margin-top: 0.5rem;
  font-size: 1.2rem;
  text-align: center;
  color: #767676;
`;
