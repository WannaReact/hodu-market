import React, { useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import api from '@utils/api';
import { Buttons } from '@components';
import Modal from '../Modals';

interface ItemProps {
  flex: number;
  center?: boolean;
  columnDirection?: boolean;
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
    <SectionItem>
      <ContainerCheckBox>
        <ContainerCheck checked={checked} onClick={checkToggle} />
      </ContainerCheckBox>
      <ContainerItem flex={55}>
        <ImgItem src="https://itec.snu.ac.kr/msc/default.png" />
        <ContainerText>
          <TextCategory>{categories}</TextCategory>
          <p>{productName}</p>
          <TextItemPrice>{originPrice}</TextItemPrice>
          <TextDelivery>{deliveryCharge}</TextDelivery>
        </ContainerText>
      </ContainerItem>
      <ContainerItem flex={15} center>
        <BtnControl onClick={minusCount}>-</BtnControl>
        <BtnCount disabled>{count}</BtnCount>
        <BtnControl onClick={plusCount}>+</BtnControl>
      </ContainerItem>
      <ContainerItem flex={25} center columnDirection>
        <TextFinalItemPrice>{price}</TextFinalItemPrice>
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
      </ContainerItem>
      <AreaDelete onClick={() => setIsModal((prev) => !prev)} />
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        checkText="예"
        cancelText="아니오"
        onClick={deleteData}
      >
        정말 삭제하시겠습니까?
      </Modal>
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
  cursor: pointer;
`;

export default CartItem;
