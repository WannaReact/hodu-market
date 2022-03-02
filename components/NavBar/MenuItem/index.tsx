import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { Category, CategoryList, CategoryWrapper, MenuTitle } from './styled';

export interface MenuItemProps {
  title: [string, string];
  categoryList: [string, string][];
}

function MenuItem({ title, categoryList }: MenuItemProps) {
  return (
    <>
      <Link href={title[1]} passHref>
        <MenuTitle>{title[0]}</MenuTitle>
      </Link>
      <CategoryList>
        {categoryList.map(([category, href]) => {
          return (
            <CategoryWrapper key={nanoid()}>
              <Link href={href} passHref>
                <Category>{category}</Category>
              </Link>
            </CategoryWrapper>
          );
        })}
      </CategoryList>
    </>
  );
}

export default React.memo(MenuItem);
