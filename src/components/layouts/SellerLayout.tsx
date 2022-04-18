import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { Buttons } from '@components';
import * as Styled from './styled';
import { DefaultContainer } from '../common/DefaultContainer/styled';
import Table from '../seller/Table';

interface ChildProps {
  menu: string | string[] | undefined;
  menuText?: { [key: string]: string };
  header: React.ReactNode;
  thead: [string, number][];
  rows:
    | {
        tableData: Array<Array<string | number | React.ReactNode>>;
        comments?: Array<Array<string | number | React.ReactNode>>;
      }[]
    | null;
}

function SellerLayout({ menu, menuText, header, thead, rows }: ChildProps) {
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
        <Styled.Content>
          {rows && <Table thead={thead} rows={rows} />}
        </Styled.Content>
      </Styled.Container>
    </DefaultContainer>
  );
}

SellerLayout.defaultProps = {
  menuText: null
};

export default SellerLayout;
