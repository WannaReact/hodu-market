import React, { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import { Buttons } from '@components';
import CartItem from 'src/components/Cart/CartItem';
import axios from 'axios';
import * as Styled from './styled';

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
  const router = useRouter();

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
  const orderSubmit = () => {
    router.push({
      pathname: '/order',
      query: {
        products: JSON.stringify(
          cartData.filter((item: any) => item.checked === true)
        )
      }
    });
  };

  return (
    <DefaultContainerPage>
      <Styled.PageTitle>장바구니</Styled.PageTitle>
      <Styled.SectionBar>
        <Styled.ContainerCheckBox>
          <Styled.ContainerCheck
            checked={cartData
              .map((item: any) => item.checked)
              .every((item: boolean) => item === true)}
            onClick={checkedAll}
          />
        </Styled.ContainerCheckBox>
        <Styled.TextBar flex={55}>상품정보</Styled.TextBar>
        <Styled.TextBar flex={15}>수량</Styled.TextBar>
        <Styled.TextBar flex={25}>상품금액</Styled.TextBar>
      </Styled.SectionBar>

      {cartData?.map((item: CartProps) => {
        return (
          <CartItem
            cartData={item}
            key={`cart-data-${item.cart_id}`}
            dispatch={dispatch}
          />
        );
      })}

      <Styled.SectionPrice>
        <Styled.ContainerTextBox>
          <Styled.TextPriceTitle>총 상품금액</Styled.TextPriceTitle>
          <Styled.TextPrice>{totalprice}</Styled.TextPrice>
        </Styled.ContainerTextBox>
        <Styled.TextOperator>-</Styled.TextOperator>
        <Styled.ContainerTextBox>
          <Styled.TextPriceTitle>상품 할인</Styled.TextPriceTitle>
          <Styled.TextPrice>0</Styled.TextPrice>
        </Styled.ContainerTextBox>
        <Styled.TextOperator>+</Styled.TextOperator>
        <Styled.ContainerTextBox>
          <Styled.TextPriceTitle>배송비</Styled.TextPriceTitle>
          <Styled.TextPrice>{deliveryprice}</Styled.TextPrice>
        </Styled.ContainerTextBox>
        <Styled.ContainerTextBox>
          <Styled.TextExpectTitle>결제 예정 금액</Styled.TextExpectTitle>
          <Styled.TextExpectPrice>{finalprice}</Styled.TextExpectPrice>
        </Styled.ContainerTextBox>
      </Styled.SectionPrice>
      <Styled.ConTainerBtn>
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
      </Styled.ConTainerBtn>
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

export default CartPage;
