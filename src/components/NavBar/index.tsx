import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { getSession } from 'next-auth/react';
import Logo from 'public/images/logo.svg';
import Cart from 'public/images/icon-shopping-cart.svg';
import User from 'public/images/icon-user.svg';
import Bag from 'public/images/icon-shopping-bag.svg';
import { CustomSession } from '@pages/api/auth/[...nextauth].page';
import { useRouter } from 'next/router';
import { Buttons } from '@components';
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

interface ListProps {
  children: React.ReactNode[];
}

interface UserInfo {
  id: string;
  nickname: string;
  isAdmin: boolean;
}

function Menu() {
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
      <Styled.MenuList>
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

function NavButtonList({ children }: ListProps) {
  return (
    <Styled.LinkList>
      {children
        .filter((child: React.ReactNode | null) => child)
        .map((link: React.ReactNode): React.ReactNode => {
          return <li key={nanoid()}>{link}</li>;
        })}
    </Styled.LinkList>
  );
}

function NavBar({ options, pathname }: NavBarProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      if (session) {
        setUser((session as CustomSession).user);
      }
      setMounted(true);
    })();
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (nav?.current) {
        if (window.scrollY > 0) {
          nav.current.classList.add('scrolled');
        } else {
          nav.current.classList.remove('scrolled');
        }
      }
    });
  }, []);

  if (!options?.active) {
    return null;
  }

  return mounted ? (
    <Styled.Nav ref={nav}>
      <Styled.NavBarContainer>
        <Link href="/" passHref>
          <Styled.LogoWrapper>
            <Logo viewBox="0 0 156 38" />
            <Styled.NavBarTitle>{options?.title}</Styled.NavBarTitle>
          </Styled.LogoWrapper>
        </Link>
        {!options?.title && pathname === '/' && <SearchBar />}
        {!options?.title && <Menu key={nanoid()} />}
        <NavButtonList>
          {user && !user.isAdmin && (
            <NavButton href="/cart" SVG={<Cart viewBox="0 0 32 32" />}>
              장바구니
            </NavButton>
          )}
          {(!user || !user.isAdmin) && (
            <NavButton
              href={user ? '/myPage' : '/login'}
              SVG={<User viewBox="0 0 32 32" />}
            >
              {user ? '마이페이지' : '로그인'}
            </NavButton>
          )}
          {user?.isAdmin && (
            <Link href="/seller/order" passHref>
              <Buttons.Custom
                width={16.8}
                height={5.4}
                fontSize={1.8}
                color="green"
                disabled={false}
              >
                <Bag />
                관리자페이지
              </Buttons.Custom>
            </Link>
          )}
        </NavButtonList>
      </Styled.NavBarContainer>
    </Styled.Nav>
  ) : null;
}

NavBar.defaultProps = {
  options: {
    active: true,
    title: ''
  }
};

export default NavBar;
