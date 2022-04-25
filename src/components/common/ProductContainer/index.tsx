import React from 'react';
import * as Styled from './styled';

interface ProductContainerProps {
  children: React.ReactNode;
}

export function ProductContainer({ children }: ProductContainerProps) {
  return <Styled.ProductContainer>{children}</Styled.ProductContainer>;
}
