import styled from 'styled-components';

interface LinkListProps {
  isDesktopBig?: boolean;
}

interface LogoWrapperProps {
  isDesktopSmall: boolean;
}

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 6rem;
  & * {
    flex-shrink: 0;
  }

  @media screen and (min-width: 1296px) {
    max-width: 184rem;
    margin: 0 auto;
  }
`;

export const LogoWrapper = styled.a<LogoWrapperProps>`
  ${({ isDesktopSmall }) =>
    isDesktopSmall &&
    `width: 9rem;
    & svg {
      width: 100%;
      height: 100%;
    }`}
`;

export const LinkList = styled.ul<LinkListProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ isDesktopBig }) => (isDesktopBig ? '3.4rem' : '2rem')};
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
  & ul {
    display: none;
  }
  &:hover ul {
    display: block;
  }
`;
