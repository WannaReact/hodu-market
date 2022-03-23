import { COLOR } from 'src/shared/constants';
import styled from 'styled-components';

export const MenuTitle = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2.5rem;
  width: 100%;
  height: 9.9rem;
  font-size: 1.8rem;
`;

export const CategoryList = styled.ul`
  position: absolute;
  top: 9rem;
  left: 0;
  z-index: 20;
  width: 100%;
  padding: 1rem;
  & li:not(:last-child) {
    padding-bottom: 2rem;
  }
`;

export const CategoryWrapper = styled.li`
  width: 100%;
`;

export const Category = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;

  &:hover {
    color: ${COLOR.accentColor};
  }
`;
