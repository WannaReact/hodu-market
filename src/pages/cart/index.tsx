import React, { useEffect, useReducer, useState } from 'react';
import { GetServerSideProps } from 'next';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import styled from 'styled-components';
import { Buttons } from '@components';
import CartItem from 'src/components/Cart/CartItem';
import axios from 'axios';

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
  deliveryCharge: number;
}

const initialState = {
  price: [],
  totalprice: 0,
  deliveryprice: 0,
  finalprice: 0
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INITIAL':
      return {
        ...state,
        totalprice: 0,
        price: initialState.price
      };
    case 'LOAD':
      return {
        ...state,
        price: state.price.concat(action.itemPrice)
      };
    case 'TOTAL':
      return {
        ...state,
        totalprice: state.price
          .map((item: any) => item.price)
          .reduce((prev: number, curr: number) => prev + curr, 0),
        deliveryprice: state.price
          .map((item: any) =>
            item.deliveryCharge === undefined ? 0 : item.deliveryCharge
          )
          .reduce((prev: number, curr: number) => prev + curr, 0)
      };
    case 'FINAL':
      return {
        ...state,
        finalprice: state.totalprice + state.deliveryprice
      };
    case 'PLUSCOUNT':
      return {
        ...state,
        price: state.price.map((item: any) =>
          item.id === action.item_id
            ? { ...item, price: item.price + action.oneCharge }
            : item
        )
      };
    case 'MINUSCOUNT':
      return {
        ...state,
        price: state.price.map((item: any) =>
          item.id === action.item_id
            ? { ...item, price: item.price - action.oneCharge }
            : item
        )
      };
    default:
      return state;
  }
}

interface CartDataProps {
  data: { data: CartData[] };
}

function CartPage({ data }: CartDataProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalprice, deliveryprice, finalprice } = state;
  const [count, setCount] = useState(0);
  console.log(data);

  useEffect(() => {
    dispatch({
      type: 'INITIAL'
    });
    data.data.map((item: CartData) =>
      dispatch({
        type: 'LOAD',
        itemPrice: {
          id: item.product._id,
          price: item.product.price,
          deliveryCharge: item.product?.deliveryCharge
        },
        final: Number(item.product.price),
        delivery: item.product.deliveryCharge
      })
    );
    dispatch({
      type: 'TOTAL'
    });
    dispatch({
      type: 'FINAL'
    });
  }, []);

  console.log(state);

  const orderSubmit = () => {
    console.log('주문하기 버튼');
  };

  return (
    <DefaultContainerPage>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        클릭미
      </button>
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
        return (
          <CartItem
            cartData={item}
            key={`cart-data-${item._id}`}
            dispatch={dispatch}
          />
        );
      })}

      <SectionPrice>
        <ContainerTextBox>
          <TextPriceTitle>총 상품금액</TextPriceTitle>
          <TextPrice>{totalprice}</TextPrice>
        </ContainerTextBox>
        <TextOperator>-</TextOperator>
        <ContainerTextBox>
          <TextPriceTitle>상품 할인</TextPriceTitle>
          <TextPrice>0</TextPrice>
        </ContainerTextBox>
        <TextOperator>+</TextOperator>
        <ContainerTextBox>
          <TextPriceTitle>배송비</TextPriceTitle>
          <TextPrice>{deliveryprice}</TextPrice>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(
    `${process.env.NEXTAUTH_URL}/api/user/cart/6266d8ed14624164b487d447`
  );

  return {
    props: {
      data
    }
  };
};

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
