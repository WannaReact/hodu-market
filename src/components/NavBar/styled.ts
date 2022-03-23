import { COLOR } from 'src/shared/constants';
import styled, { keyframes } from 'styled-components';

export interface MediaQuery {
  isDesktopBig: boolean;
  isDesktopMedium: boolean;
  isDesktopSmall: boolean;
  isMobile: boolean;
}

interface MediaQueryProps {
  mediaQuery: MediaQuery;
}

const dropdownAnimation = keyframes`
  0% {
    clip: rect(0, 100vw, 0, 0)
  }
  100% {
    clip: rect(0, 100vw, 20rem, 0);
  }
`;

export const NavBarContainer = styled.nav<MediaQueryProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  z-index: 10;
  width: 100vw;
  height: ${({ mediaQuery: { isMobile } }) => (isMobile ? '5rem' : '10rem')};
  padding: ${({ mediaQuery: { isMobile } }) => (isMobile ? 0 : '2.5rem')}
    ${({ mediaQuery: { isDesktopSmall, isMobile } }) =>
      isDesktopSmall || isMobile ? '2rem' : '6rem'};
  background-color: ${COLOR.white};
  transform: translateX(-50%);

  & > * {
    flex-shrink: 0;
  }

  @media screen and (min-width: 1296px) {
    max-width: 184rem;
    margin: 0 auto;
  }
`;

export const NavBarTitle = styled.span`
  margin-left: 2rem;
  font-weight: 500;
  font-size: 3rem;
  white-space: nowrap;
`;

export const LogoWrapper = styled.a<MediaQueryProps>`
  display: inline-flex;
  align-items: center;
  ${({ mediaQuery: { isDesktopSmall, isMobile } }) =>
    (isDesktopSmall || isMobile) &&
    `
    & svg {
      width: 9rem;
      height: 100%;
    }`}
`;

export const LinkList = styled.ul<MediaQueryProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ mediaQuery: { isDesktopBig } }) =>
    isDesktopBig ? '3.4rem' : '2rem'};
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

export const MenuList = styled.ul<MediaQueryProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.9rem;
  ${({ mediaQuery }) =>
    mediaQuery?.isMobile &&
    `
    width: 100vw;
    padding: 0 1rem;
  `}
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
