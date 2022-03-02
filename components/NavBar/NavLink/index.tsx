import Link from 'next/link';
import React from 'react';
import { NavLinkConatainer, NavLinkText } from './styled';

interface NavLinkProps {
  href: string;
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  children: string;
}

function NavLink({ href, SVG, children }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <NavLinkConatainer>
        <SVG />
        <NavLinkText>{children}</NavLinkText>
      </NavLinkConatainer>
    </Link>
  );
}

export default NavLink;
