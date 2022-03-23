import Link from 'next/link';
import React, { useCallback } from 'react';
import { nanoid } from 'nanoid';
import Logo from 'public/images/logo.svg';
import Cart from 'public/images/icon-shopping-cart.svg';
import User from 'public/images/icon-user.svg';
import List from 'public/images/icon-list.svg';
import Search from 'public/images/icon-search.svg';
import useBreakpoint from 'src/hooks/useBreakpoint';
import SearchBar from './SearchBar';
import * as Styled from './styled';
import MenuItem from './MenuItem';
import menuItems from './menuItems';
import NavButton from './NavButton';

interface NavBarProps {
  options?: {
    active?: boolean;
    title?: string;
  };
  pathname: string;
}

interface MenuProps {
  mediaQuery: Styled.MediaQuery;
}

interface ListProps {
  children: React.ReactNode[];
}

interface NavButtonListProps extends ListProps {
  mediaQuery: Styled.MediaQuery;
}

function Menu({ mediaQuery }: MenuProps) {
  const handleMouseOver = useCallback(({ currentTarget }) => {
    currentTarget
      ?.querySelectorAll('.gnb-dropdown')
      .forEach((elem: HTMLElement) => elem.classList.add('is-active'));
  }, []);
  const handleMouseOut = useCallback(({ currentTarget }) => {
    currentTarget
      ?.querySelectorAll('.gnb-dropdown')
      .forEach((elem: HTMLElement) => elem.classList.remove('is-active'));
  }, []);

  return (
    <Styled.DropdownMenu
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Styled.DropdownBackground className="gnb-dropdown" />
      <Styled.MenuList mediaQuery={mediaQuery}>
        {menuItems.map((props): React.ReactNode => {
          return (
            <Styled.MenuListItem key={nanoid()}>
              <MenuItem {...props} />
            </Styled.MenuListItem>
          );
        })}
      </Styled.MenuList>
    </Styled.DropdownMenu>
  );
}

function NavButtonList({ mediaQuery, children }: NavButtonListProps) {
  return (
    <Styled.LinkList mediaQuery={mediaQuery}>
      {children
        .filter((child: React.ReactNode | null) => child)
        .map((link: React.ReactNode): React.ReactNode => {
          return <li key={nanoid()}>{link}</li>;
        })}
    </Styled.LinkList>
  );
}

function NavBar({ options, pathname }: NavBarProps) {
  const mediaQuery: Styled.MediaQuery = {
    isDesktopBig: useBreakpoint({
      query: '(min-width: 1296px)'
    }),
    isDesktopMedium: useBreakpoint({
      query: '(min-width: 1024px) and (max-width: 1295px)'
    }),
    isDesktopSmall: useBreakpoint({
      query: '(min-width: 768px) and (max-width: 1023px)'
    }),
    isMobile: useBreakpoint({
      query: '(max-width: 767px)'
    })
  };

  if (!options?.active) {
    return null;
  }

  return (
    <Styled.NavBarContainer mediaQuery={mediaQuery}>
      <Link href="/" passHref>
        <Styled.LogoWrapper mediaQuery={mediaQuery}>
          <Logo viewBox="0 0 124 38" />
          <Styled.NavBarTitle>{options?.title}</Styled.NavBarTitle>
        </Styled.LogoWrapper>
      </Link>
      {!options?.title &&
        !mediaQuery.isMobile &&
        pathname === '/' &&
        mediaQuery.isDesktopBig && <SearchBar />}
      {!mediaQuery.isMobile && <Menu key={nanoid()} mediaQuery={mediaQuery} />}
      {mediaQuery.isDesktopSmall && (
        <NavButton SVG={<List viewBox="0 0 16 16" />} />
      )}
      {(mediaQuery.isDesktopMedium ||
        mediaQuery.isDesktopBig ||
        mediaQuery.isMobile) && (
        <NavButtonList mediaQuery={mediaQuery}>
          {!mediaQuery.isDesktopBig && !options?.title && (
            <NavButton SVG={<Search viewBox="0 0 28 28" />}>
              {mediaQuery.isMobile ? '' : '상품검색'}
            </NavButton>
          )}
          <NavButton href="/cart" SVG={<Cart viewBox="0 0 32 32" />}>
            {mediaQuery.isMobile ? '' : '장바구니'}
          </NavButton>
          <NavButton href="/login" SVG={<User viewBox="0 0 32 32" />}>
            {mediaQuery.isMobile ? '' : '로그인'}
          </NavButton>
        </NavButtonList>
      )}
    </Styled.NavBarContainer>
  );
}

NavBar.defaultProps = {
  options: {
    active: true,
    title: ''
  }
};

export default NavBar;
