import Image from 'next/image';
import React from 'react';
import profileImg from 'public/images/seller-profileIMG.png';
import * as Styled from './styled';

interface ProductProps {
  title: string;
  option: string;
}

function Product({ title, option }: ProductProps) {
  return (
    <Styled.ProductContainer>
      <Image src={profileImg} width={70} height={70} alt="상품 이미지" />
      <Styled.ProductText>
        <h4>{title}</h4>
        <p>{option}</p>
      </Styled.ProductText>
    </Styled.ProductContainer>
  );
}

export default React.memo(Product);
