import Link from 'next/link';
import React from 'react';
import { NavButtonConatainer, NavButtonText } from './styled';

export interface NavButtonProps {
  href?: string;
  SVG: React.ReactNode;
  children?: string;
}

function NavButton({ href, SVG, children }: NavButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <NavButtonConatainer as="a">
          {SVG}
          <NavButtonText>{children}</NavButtonText>
        </NavButtonConatainer>
      </Link>
    );
  }

  return (
    <NavButtonConatainer type="button">
      {SVG}
      <NavButtonText>{children}</NavButtonText>
    </NavButtonConatainer>
  );
}

export default NavButton;
