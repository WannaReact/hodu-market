import { COLOR, NAV_HEIGHT, NAV_WIDTH } from '@shared/constants';
import styled, { keyframes } from 'styled-components';

const dropdownAnimation = keyframes`
  0% {
    clip: rect(0, 100vw, 0, 0)
  }
  100% {
    clip: rect(0, 100vw, 20rem, 0);
  }
`;

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  background-color: ${COLOR.white};
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${NAV_WIDTH + 12}rem;
  height: ${NAV_HEIGHT}rem;
  padding: 2.5rem 6rem;
  margin: 0 auto;

  & > * {
    flex-shrink: 0;
  }
`;

export const NavBarTitle = styled.span`
  margin-left: 2rem;
  font-weight: 500;
  font-size: 3rem;
  white-space: nowrap;
`;

export const LogoWrapper = styled.a`
  display: inline-flex;
  align-items: center;
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.4rem;
`;

export const DropdownMenu = styled.div`
  .gnb-dropdown {
    display: none;
  }

  .is-active {
    display: block;
    animation: ${dropdownAnimation} 0.4s alternate;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.9rem;
`;

export const MenuListItem = styled.li`
  position: relative;
  width: 12rem;
  height: 100%;
`;

export const DropdownBackground = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(50% - 50vw);
  z-index: 10;
  width: 100vw;
  height: 20rem;
  background-color: ${COLOR.greyF8};
  border-top: 1px solid ${COLOR.greyE0};
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
`;
