import React from 'react';
import { DefaultContainer } from 'src/components/common/DefaultContainer/styled';
import Table from 'src/components/Table/Table';
import Menu from 'src/components/Menu';
import * as Styled from './styled';

interface ChildProps {
  menu: string | string[] | undefined;
  menuText: { [key: string]: string };
  badge: { [key: string]: number } | null;
  header: React.ReactNode;
  thead?: [string, number][];
  children:
    | {
        tableData: Array<Array<string | number | React.ReactNode>>;
        comments?: Array<Array<string | number | React.ReactNode>>;
      }[]
    | React.ReactNode
    | null;
}

function MenuPageLayout({
  menu,
  menuText,
  badge,
  header,
  thead = [],
  children
}: ChildProps) {
  return (
    <DefaultContainer>
      {header}
      <Styled.Container>
        <nav>
          <Menu menu={menu} menuText={menuText} badge={badge} />
        </nav>
        <Styled.Content>
          {Array.isArray(children) ? (
            <Table thead={thead} rows={children} />
          ) : (
            children
          )}
        </Styled.Content>
      </Styled.Container>
    </DefaultContainer>
  );
}

MenuPageLayout.defaultProps = {
  thead: []
};

export default MenuPageLayout;
