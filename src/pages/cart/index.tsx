import React, { useEffect, useReducer } from 'react';
import useSWR from 'swr';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import styled from 'styled-components';
import api from '@utils/api';
import { Buttons } from '@components';
import CartItem from 'src/components/Cart/CartItem';

interface BarProps {
  flex: number;
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

const initialState = {
  price: [{}],
  finalprice: 0
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        finalprice: action.final,
        price: {
          id: action.id,
          price: action.price
        }
      };
    default:
      return state;
  }
}

function CartPage() {
  // const userId = '62615ab8a6d36a33631fc008';

  const { data } = useSWR(`/user/cart/6266d8ed14624164b487d447`, api.get);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { price, finalprice } = state;

  useEffect(() => {
    data?.data.map((item: CartData) =>
      dispatch({
        type: 'LOAD',
        id: item._id,
        price: item.product.price,
        final: Number(finalprice) + Number(item.product.price)
      })
    );
    console.log(state);
  }, []);
  console.log(state);

  // const { data } = useSWR(`/cart`, api.get);

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

      {data?.data.map((item: CartData) => {
        return <CartItem cartData={item} key={`cart-data-${item._id}`} />;
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
          <TextExpectPrice>{finalprice}</TextExpectPrice>
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
