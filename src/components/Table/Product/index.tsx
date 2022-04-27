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
    <>
      <Image src={profileImg} width={70} height={70} />
      <Styled.ProductText>
        <h4>{title}</h4>
        <p>{option}</p>
      </Styled.ProductText>
    </>
  );
}

export default React.memo(Product);
