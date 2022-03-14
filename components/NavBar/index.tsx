import Link from 'next/link';
import React from 'react';
import { nanoid } from 'nanoid';
import Logo from 'public/images/logo.svg';
import Cart from 'public/images/icon-shopping-cart.svg';
import User from 'public/images/icon-user.svg';
import List from 'public/images/icon-list.svg';
import Search from 'public/images/icon-search.svg';
import useBreakpoint from 'hooks/useBreakpoint';
import SearchBar from './SearchBar';
import * as Styled from './styled';
import MenuItem from './MenuItem';
import menuItems from './menuItems';
import NavButton from './NavButton';

interface NavBarProps {
  title?: string;
  isHome?: boolean;
}

interface ListProps {
  children: React.ReactNode[];
}

interface NavButtonListProps extends ListProps {
  isDesktopBig: boolean;
}

function Menu() {
  return (
    <Styled.MenuList>
      {menuItems.map((props): React.ReactNode => {
        return (
          <Styled.MenuListItem key={nanoid()}>
            <MenuItem {...props} />
          </Styled.MenuListItem>
        );
      })}
    </Styled.MenuList>
  );
}

function NavButtonList({ isDesktopBig, children }: NavButtonListProps) {
  return (
    <Styled.LinkList isDesktopBig={isDesktopBig}>
      {children
        .filter((child: React.ReactNode | null) => child)
        .map((link: React.ReactNode): React.ReactNode => {
          return <li key={nanoid()}>{link}</li>;
        })}
    </Styled.LinkList>
  );
}

function NavBar({ title, isHome }: NavBarProps) {
  const isDesktopBig = useBreakpoint({
    query: '(min-width: 1296px)'
  });
  const isDesktopMedium = useBreakpoint({
    query: '(min-width: 1024px) and (max-width: 1295px)'
  });
  const isDesktopSmall = useBreakpoint({
    query: '(min-width: 768px) and (max-width: 1023px)'
  });

  return (
    <Styled.NavBarContainer>
      <Link href="/" passHref>
        <Styled.LogoWrapper isDesktopSmall={isDesktopSmall}>
          <Logo viewBox="0 0 124 38" />
          {title}
        </Styled.LogoWrapper>
      </Link>
      {isHome && isDesktopBig && <SearchBar />}
      <Menu />
      {isDesktopSmall && <NavButton SVG={<List viewBox="0 0 16 16" />} />}
      {(isDesktopMedium || isDesktopBig) && (
        <NavButtonList isDesktopBig={isDesktopBig}>
          {!isDesktopBig && (
            <NavButton SVG={<Search viewBox="0 0 28 28" />}>상품검색</NavButton>
          )}
          <NavButton href="/cart" SVG={<Cart viewBox="0 0 32 32" />}>
            장바구니
          </NavButton>
          <NavButton href="/login" SVG={<User viewBox="0 0 32 32" />}>
            로그인
          </NavButton>
        </NavButtonList>
      )}
    </Styled.NavBarContainer>
  );
}

NavBar.defaultProps = {
  title: '',
  isHome: false
};

export default NavBar;
