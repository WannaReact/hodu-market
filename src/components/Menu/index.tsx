import { nanoid } from 'nanoid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Buttons } from '@components';
import * as Styled from './styled';

interface MenuProps {
  menu: string | string[] | undefined;
  menuText: { [key: string]: string };
  badge: { [key: string]: number } | null;
}

function Menu({ menu, menuText, badge }: MenuProps) {
  const { pathname } = useRouter();
  return (
    <Styled.NavBar>
      {Object.keys(menuText).map((key) => (
        <Link key={nanoid()} href={pathname.replace('[menu]', key)} passHref>
          <li>
            <Buttons.Menu
              isActive={menu === key}
              badgeCount={badge?.[key] ?? 0}
            >
              {menuText[key]}
            </Buttons.Menu>
          </li>
        </Link>
      ))}
    </Styled.NavBar>
  );
}

export default React.memo(Menu);
