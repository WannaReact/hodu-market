import React, { useState } from 'react';
import styled from 'styled-components';
import { Buttons } from '@components';

interface ItemProps {
  flex: number;
  center?: boolean;
  columnDirection?: boolean;
}

export interface CartData {
  _id: number;
  count: string;
  createdAt: string;
  user: string;
  product: CartProduct;
  delivery: string;
}

export interface CartProduct {
  _id: string;
  categories: string[];
  discount: string;
  imges: string[];
  price: number;
  productName: string;
  inquiries: string[];
  reviews: string[];
}

interface CartDataProps {
  cartData: CartData;
}

function CartItem({ cartData }: CartDataProps) {
  const { count, delivery, product } = cartData;
  const [productCount, setProductCount] = useState<number>(Number(count));
  const [price, setPrice] = useState(product.price);
  const oneprice = product.price / +count;
  console.log(oneprice);

  const orderSubmit = () => {
    console.log('주문하기 버튼');
  };

  const plusCount = () => {
    setProductCount((prev) => prev + 1);
    setPrice((prev) => prev + oneprice);
  };

  const minusCount = () => {
    if (productCount > 1) {
      setProductCount((prev) => prev - 1);
      setPrice((prev) => prev - oneprice);
    } else {
      alert('1개 이상부터 구매가능');
    }
  };

  return (
    <SectionItem>
      <ContainerCheckBox>
        <ContainerCheck />
      </ContainerCheckBox>
      <ContainerItem flex={55}>
        <ImgItem src="https://itec.snu.ac.kr/msc/default.png" />
        <ContainerText>
          <TextCategory>{product.categories}</TextCategory>
          <p>{product.productName}</p>
          <TextItemPrice>{product.price}</TextItemPrice>
          <TextDelivery>{delivery}</TextDelivery>
        </ContainerText>
      </ContainerItem>
      <ContainerItem flex={15} center>
        <BtnControl onClick={minusCount}>-</BtnControl>
        <BtnCount disabled>{productCount}</BtnCount>
        <BtnControl onClick={plusCount}>+</BtnControl>
      </ContainerItem>
      <ContainerItem flex={25} center columnDirection>
        <TextFinalItemPrice>{price}</TextFinalItemPrice>
        <Buttons.Custom
          width={18}
          height={4}
          fontSize={1.9}
          color="green"
          disabled={false}
          onClick={orderSubmit}
        >
          주문하기
        </Buttons.Custom>
      </ContainerItem>
      <AreaDelete />
    </SectionItem>
  );
}

const SectionItem = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  padding: 22px 0px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ContainerCheckBox = styled.div`
  flex-basis: 5%;
`;

const ContainerCheck = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin: 0 auto;
`;

const ContainerItem = styled.div<ItemProps>`
  font-size: 18px;
  flex-basis: ${(props) => props.flex}%;
  display: flex;
  ${(props) => props.center && 'justify-content : center'};
  ${(props) =>
    props.columnDirection && 'flex-direction:column; align-items: center'};
`;

const ImgItem = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 10px;
`;

const ContainerText = styled.div`
  margin-left: 36px;
`;

const TextCategory = styled.em`
  font-size: 14px;
  color: #767676;
  display: inline-block;
  margin: 10px 0;
`;

const TextItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 40px;
`;

const TextDelivery = styled.em`
  font-size: 14px;
  color: #767676;
`;

const BtnControl = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #c4c4c4;
  color: black;
  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const BtnCount = styled.button`
  width: 50px;
  height: 50px;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  color: black;
`;

const TextFinalItemPrice = styled.p`
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

const AreaDelete = styled.span`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 22px;
  background: url(images/icon-delete.png) no-repeat;
  background-size: 100%;
`;

export default CartItem;
