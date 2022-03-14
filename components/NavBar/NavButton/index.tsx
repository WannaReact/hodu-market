import Link from 'next/link';
import React from 'react';
import * as Styled from './styled';

export interface NavButtonProps {
  href?: string;
  SVG: React.ReactNode;
  children?: string;
}

function NavButton({ href, SVG, children }: NavButtonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <Styled.NavButtonConatainer as="a">
          {SVG}
          <Styled.NavButtonText>{children}</Styled.NavButtonText>
        </Styled.NavButtonConatainer>
      </Link>
    );
  }

  return (
    <Styled.NavButtonConatainer type="button">
      {SVG}
      <Styled.NavButtonText>{children}</Styled.NavButtonText>
    </Styled.NavButtonConatainer>
  );
}

export default NavButton;
