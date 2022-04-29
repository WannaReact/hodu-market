import React, { useState } from 'react';
import Link from 'next/link';
import api from '@utils/api';
import { Buttons } from '@components';
import Modal from '../Modals';
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

interface CartDataProps {
  cartData: CartProps;
  dispatch: any;
}

function CartItem({ cartData, dispatch }: CartDataProps) {
  const {
    count,
    deliveryCharge,
    price,
    categories,
    productName,
    originPrice,
    checked
  } = cartData;

  const [isModal, setIsModal] = useState(false);

  const orderSubmit = () => {
    console.log('주문하기 버튼');
  };

  const deleteData = async () => {
    const data = await api.delete(`/cart/${cartData.cart_id}`);
    console.log(data);
    setIsModal(false);
    dispatch({
      type: 'DELETE',
      cart_id: cartData.cart_id
    });
    dispatch({
      type: 'TOTAL'
    });
    dispatch({
      type: 'FINAL'
    });
  };

  const plusCount = () => {
    dispatch({
      type: 'PLUSCOUNT',
      item_id: cartData.product_id,
      oneCharge: originPrice
    });
    dispatch({
      type: 'TOTAL'
    });
    dispatch({
      type: 'FINAL'
    });
  };

  const minusCount = () => {
    if (count > 1) {
      dispatch({
        type: 'MINUSCOUNT',
        item_id: cartData.product_id,
        oneCharge: originPrice
      });
      dispatch({
        type: 'TOTAL'
      });
      dispatch({
        type: 'FINAL'
      });
    } else {
      alert('1개 이상부터 구매가능');
    }
  };

  const checkToggle = () => {
    dispatch({
      type: 'CHANGECHECK',
      cart_id: cartData.cart_id
    });
    dispatch({
      type: 'TOTAL'
    });
    dispatch({
      type: 'FINAL'
    });
  };

  return (
    <Styled.SectionItem>
      <Styled.ContainerCheckBox>
        <Styled.ContainerCheck checked={checked} onClick={checkToggle} />
      </Styled.ContainerCheckBox>
      <Styled.ContainerItem flex={55}>
        <Styled.ImgItem src="https://itec.snu.ac.kr/msc/default.png" />
        <Styled.ContainerText>
          <Styled.TextCategory>{categories}</Styled.TextCategory>
          <p>{productName}</p>
          <Styled.TextItemPrice>{originPrice}</Styled.TextItemPrice>
          <Styled.TextDelivery>{deliveryCharge}</Styled.TextDelivery>
        </Styled.ContainerText>
      </Styled.ContainerItem>
      <Styled.ContainerItem flex={15} center>
        <Styled.BtnControl onClick={minusCount}>-</Styled.BtnControl>
        <Styled.BtnCount disabled>{count}</Styled.BtnCount>
        <Styled.BtnControl onClick={plusCount}>+</Styled.BtnControl>
      </Styled.ContainerItem>
      <Styled.ContainerItem flex={25} center columnDirection>
        <Styled.TextFinalItemPrice>{price}</Styled.TextFinalItemPrice>
        <Link
          href={{
            pathname: 'order',
            query: { cart: JSON.stringify(cartData) }
          }}
          as="order"
          passHref
        >
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
        </Link>
      </Styled.ContainerItem>
      <Styled.AreaDelete onClick={() => setIsModal((prev) => !prev)} />
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        checkText="예"
        cancelText="아니오"
        onClick={deleteData}
      >
        정말 삭제하시겠습니까?
      </Modal>
    </Styled.SectionItem>
  );
}

export default CartItem;
