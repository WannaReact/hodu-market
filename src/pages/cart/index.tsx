import React from 'react';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import styled from 'styled-components';
import { Buttons } from '@components';

interface BarProps {
  flex: number;
}

interface ItemProps {
  flex: number;
  center?: boolean;
  columnDirection?: boolean;
}

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

      <SectionItem>
        <ContainerCheckBox>
          <ContainerCheck />
        </ContainerCheckBox>
        <ContainerItem flex={55}>
          <ImgItem />
          <ContainerText>
            <TextCategory>백엔드글로벌</TextCategory>
            <p>딥러닝 개발자 무릎 담요</p>
            <TextItemPrice>27500원</TextItemPrice>
            <TextDelivery>택배배송 / 무료배송</TextDelivery>
          </ContainerText>
        </ContainerItem>
        <ContainerItem flex={15} center>
          <BtnControl>-</BtnControl>
          <BtnCount disabled>1</BtnCount>
          <BtnControl>+</BtnControl>
        </ContainerItem>
        <ContainerItem flex={25} center columnDirection>
          <TextFinalItemPrice>17,500원</TextFinalItemPrice>
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

const SectionItem = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  padding: 22px 0px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
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
  background-color: pink;
  border-radius: 10px;
`;

const ContainerText = styled.div`
  margin-left: 36px;
`;

const TextCategory = styled.em`
  font-size: 14px;
  color: #767676;
`;

const TextItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
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
