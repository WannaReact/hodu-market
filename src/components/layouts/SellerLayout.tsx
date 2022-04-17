import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { Buttons } from '@components';
import * as Styled from './styled';
import { DefaultContainer } from '../common/DefaultContainer/styled';

interface ChildProps {
  menu: string | string[] | undefined;
  menuText?: { [key: string]: string };
  header: React.ReactNode;
  children: React.ReactNode;
}

function SellerLayout({ menu, menuText, header, children }: ChildProps) {
  return (
    <DefaultContainer>
      {header}
      <Styled.Container>
        <nav>
          <Styled.NavBar>
            {menuText &&
              Object.keys(menuText).map((key) => (
                <Link key={nanoid()} href={`/seller/${key}`} passHref>
                  <li>
                    <Buttons.Menu isActive={menu === key} badgeCount={0}>
                      {menuText[key]}
                    </Buttons.Menu>
                  </li>
                </Link>
              ))}
          </Styled.NavBar>
        </nav>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Container>
    </DefaultContainer>
  );
}

SellerLayout.defaultProps = {
  menuText: null
};

export default SellerLayout;
