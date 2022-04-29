import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import * as Styled from './styled';
import { MediaQuery } from '../styled';

export interface MenuItemProps {
  title: [string, string];
  categoryList: [string, string][];
  mediaQuery?: MediaQuery;
}

function MenuItem({ title, categoryList }: MenuItemProps) {
  return (
    <>
      <Link href={title[1]} passHref>
        <Styled.MenuTitle>{title[0]}</Styled.MenuTitle>
      </Link>
      <Styled.CategoryList className="gnb-dropdown">
        {categoryList.map(([category, href]) => {
          return (
            <Styled.CategoryWrapper key={nanoid()}>
              <Link href={href} passHref>
                <Styled.Category>{category}</Styled.Category>
              </Link>
            </Styled.CategoryWrapper>
          );
        })}
      </Styled.CategoryList>
    </>
  );
}

export default React.memo(MenuItem);
