import React from 'react';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import styled from 'styled-components';
import { Buttons } from '@components';
import CartItem from 'src/components/Cart/CartItem';

interface BarProps {
  flex: number;
}

export interface CartData {
  img: string;
  category: string;
  title: string;
  price: number;
  delivery: string;
}

const data = {
  tableData: [
    {
      img: 'https://itec.snu.ac.kr/msc/default.png',
      category: '백엔드글로벌',
      title: '딥러닝 개발자 무릎 담요',
      price: 27500,
      delivery: '무료배송'
    }
  ]
};

function CartPage() {
  const orderSubmit = () => {
    console.log('주문하기 버튼');
  };

  return (
    <DefaultContainerPage>
      <PageTitle>장바구니</PageTitle>
      <SectionBar>
        <ContainerCheckBox>
          <ContainerCheck />
        </ContainerCheckBox>
        <TextBar flex={55}>상품정보</TextBar>
        <TextBar flex={15}>수량</TextBar>
        <TextBar flex={25}>상품금액</TextBar>
      </SectionBar>
      {data.tableData.map((item: CartData) => {
        return <CartItem cartData={item} key={`cart-data-${item.title}`} />;
      })}

      <SectionPrice>
        <ContainerTextBox>
          <TextPriceTitle>총 상품금액</TextPriceTitle>
          <TextPrice>46,500</TextPrice>
        </ContainerTextBox>
        <TextOperator>-</TextOperator>
        <ContainerTextBox>
          <TextPriceTitle>상품 할인</TextPriceTitle>
          <TextPrice>0</TextPrice>
        </ContainerTextBox>
        <TextOperator>+</TextOperator>
        <ContainerTextBox>
          <TextPriceTitle>배송비</TextPriceTitle>
          <TextPrice>0</TextPrice>
        </ContainerTextBox>
        <ContainerTextBox>
          <TextExpectTitle>결제 예정 금액</TextExpectTitle>
          <TextExpectPrice>46,500</TextExpectPrice>
        </ContainerTextBox>
      </SectionPrice>
      <ConTainerBtn>
        <Buttons.Custom
          width={22}
          height={6.8}
          fontSize={2.4}
          color="green"
          disabled={false}
          onClick={orderSubmit}
        >
          주문하기
        </Buttons.Custom>
      </ConTainerBtn>
    </DefaultContainerPage>
  );
}

const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 30px 0px;
`;

const SectionBar = styled.section`
  display: flex;
  padding: 22px 0px 22px;
  margin-bottom: 35px;
  border-radius: 10px;
  background-color: #e5e5e5;
  text-align: center;
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

const TextBar = styled.p<BarProps>`
  font-size: 18px;
  flex-basis: ${(props) => props.flex}%;
`;

const SectionPrice = styled.section`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 46px 0;
  margin-top: 80px;
  background-color: #e5e5e5;
`;

const ContainerTextBox = styled.div`
  width: 320px;
  text-align: center;
`;

const TextPriceTitle = styled.p`
  font-size: 16px;
  margin-bottom: 18px;
`;

const TextPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  &::after {
    content: '원';
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    vertical-align: middle;
  }
`;

const TextOperator = styled.span`
  display: inline-block;
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 50%;
  color: #e5e5e5;
  font-size: 35px;
  text-align: center;
`;

const TextExpectTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const TextExpectPrice = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: red;
  &::after {
    content: '원';
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    vertical-align: middle;
  }
`;

const ConTainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
`;
export default CartPage;
