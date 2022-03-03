import styled from 'styled-components';

export const MenuTitle = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
`;

export const CategoryList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: #ebeef0;
  & li:not(:last-child) {
    padding-bottom: 1.5rem;
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
`;
