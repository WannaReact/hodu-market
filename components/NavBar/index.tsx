import Link from 'next/link';
import React from 'react';
import { nanoid } from 'nanoid';
import Logo from 'public/images/logo.svg';
import Cart from 'public/images/icon-shopping-cart.svg';
import User from 'public/images/icon-user.svg';
import Search from 'public/images/icon-search.svg';
import useBreakpoint from 'hooks/useBreakpoint';
import NavLink from './NavLink';
import SearchBar from './SearchBar';
import {
  LinkList,
  LogoWrapper,
  MenuList,
  MenuListItem,
  NavBarContainer
} from './styled';
import MenuItem from './MenuItem';
import menuItems from './menuItems';

interface NavBarProps {
  title?: string;
  isHome?: boolean;
}

interface ListProps {
  children: React.ReactNode[];
}

interface NavLinkListProps extends ListProps {
  isDesktopBig: boolean;
}

function Menu({ children }: ListProps) {
  return (
    <MenuList>
      {children.map((item: React.ReactNode): React.ReactNode => {
        return <MenuListItem key={nanoid()}>{item}</MenuListItem>;
      })}
    </MenuList>
  );
}

function NavLinkList({ isDesktopBig, children }: NavLinkListProps) {
  return (
    <LinkList isDesktopBig={isDesktopBig}>
      {children.map((link: React.ReactNode): React.ReactNode => {
        return <li key={nanoid()}>{link}</li>;
      })}
    </LinkList>
  );
}

function NavBar({ title, isHome }: NavBarProps) {
  const isDesktopBig = useBreakpoint({
    query: '(min-width: 1296px)'
  });
  const isDesktopSmall = useBreakpoint({
    query: '(min-width: 768px) and (max-width: 1023px)'
  });

  return (
    <NavBarContainer>
      <Link href="/" passHref>
        <LogoWrapper isDesktopSmall={isDesktopSmall}>
          <Logo viewBox="0 0 124 38" />
          {title}
        </LogoWrapper>
      </Link>
      {isHome && isDesktopBig && <SearchBar />}
      <Menu>
        {menuItems.map((props) => (
          <MenuItem key={nanoid()} {...props} />
        ))}
      </Menu>
      <NavLinkList isDesktopBig={isDesktopBig}>
        {isDesktopBig || (
          <NavLink href="/login" SVG={Search}>
            상품검색
          </NavLink>
        )}
        <NavLink href="/cart" SVG={Cart}>
          장바구니
        </NavLink>
        <NavLink href="/login" SVG={User}>
          로그인
        </NavLink>
      </NavLinkList>
    </NavBarContainer>
  );
}

NavBar.defaultProps = {
  title: '',
  isHome: false
};

export default NavBar;
