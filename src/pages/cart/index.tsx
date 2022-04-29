import React, { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import styled, { css } from 'styled-components';
import { Buttons } from '@components';
import CartItem from 'src/components/Cart/CartItem';
import axios from 'axios';

interface BarProps {
  flex: number;
}

interface CheckBoxProps {
  checked: boolean;
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
  discountRate: string;
  imges: string[];
  price: number;
  productName: string;
  deliveryCharge: number;
  option: string;
}

const initialState = {
  cartData: [],
  totalprice: 0,
  deliveryprice: 0,
  finalprice: 0
};
export interface CartProps {
  cart_id: string;
  product_id: string;
  price: number;
  deliveryCharge: number;
  count: number;
  user: string;
  categories: string[];
  discountRaste: string;
  option: string;
  productName: string;
  originPrice: number;
  checked: boolean;
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'INITIAL':
      return {
        ...state,
        totalprice: 0,
        cartData: initialState.cartData
      };
    case 'LOAD':
      return {
        ...state,
        cartData: state.cartData.concat(action.itemPrice)
      };
    case 'TOTAL':
      return {
        ...state,
        totalprice: state.cartData
          .map((item: any) => (item.checked === false ? 0 : item.price))
          .reduce((prev: number, curr: number) => prev + curr, 0),
        deliveryprice: state.cartData
          .map((item: any) =>
            item.deliveryCharge === undefined || item.checked === false
              ? 0
              : item.deliveryCharge
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
        cartData: state.cartData.map((item: any) =>
          item.product_id === action.item_id
            ? {
                ...item,
                price: item.price + action.oneCharge,
                count: item.count + 1
              }
            : item
        )
      };
    case 'MINUSCOUNT':
      return {
        ...state,
        cartData: state.cartData.map((item: any) =>
          item.product_id === action.item_id
            ? {
                ...item,
                price: item.price - action.oneCharge,
                count: item.count - 1
              }
            : item
        )
      };
    case 'DELETE':
      return {
        ...state,
        cartData: state.cartData.filter(
          (item: any) => item.cart_id !== action.cart_id
        )
      };
    case 'CHANGECHECK':
      return {
        ...state,
        cartData: state.cartData.map((item: any) =>
          item.cart_id === action.cart_id
            ? { ...item, checked: !item.checked }
            : item
        )
      };
    case 'CHECKEDALL':
      return {
        ...state,
        cartData:
          state.cartData
            .map((item: any) => item.checked)
            .every((item: boolean) => item === true) ||
          state.cartData
            .map((item: any) => item.checked)
            .every((item: boolean) => item === false)
            ? state.cartData.map((item: any) => ({
                ...item,
                checked: !item.checked
              }))
            : state.cartData.map((item: any) =>
                item.checked === false ? { ...item, checked: true } : item
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
  const { totalprice, deliveryprice, finalprice, cartData } = state;
  console.log(state);

  useEffect(() => {
    dispatch({
      type: 'INITIAL'
    });
    data.data.map((item: CartData) =>
      dispatch({
        type: 'LOAD',
        itemPrice: {
          cart_id: item._id,
          product_id: item.product._id,
          price: item.product.price * Number(item.count),
          deliveryCharge: item.product?.deliveryCharge,
          count: item.count,
          user: item.user,
          categories: item.product.categories,
          discountRaste: item.product.discountRate,
          option: item.product.option,
          productName: item.product.productName,
          originPrice: item.product.price,
          checked: true
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

  const checkedAll = () => {
    dispatch({
      type: 'CHECKEDALL'
    });
    dispatch({
      type: 'TOTAL'
    });
    dispatch({
      type: 'FINAL'
    });
  };
  const orderSubmit = () => {};

  return (
    <DefaultContainerPage>
      <PageTitle>장바구니</PageTitle>
      <SectionBar>
        <ContainerCheckBox>
          <ContainerCheck
            checked={cartData
              .map((item: any) => item.checked)
              .every((item: boolean) => item === true)}
            onClick={checkedAll}
          />
        </ContainerCheckBox>
        <TextBar flex={55}>상품정보</TextBar>
        <TextBar flex={15}>수량</TextBar>
        <TextBar flex={25}>상품금액</TextBar>
      </SectionBar>

      {cartData?.map((item: CartProps) => {
        return (
          <CartItem
            cartData={item}
            key={`cart-data-${item.cart_id}`}
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
    `${process.env.NEXTAUTH_URL}/api/user/cart/626b2b3d42ded73bbbbf5d62`
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

const ContainerCheck = styled.div<CheckBoxProps>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin: 0 auto;

  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 12px;
        height: 12px;
        background-color: #21bf48;
        border-radius: 50%;
      }
    `}
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
