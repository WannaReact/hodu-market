import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Buttons } from '..';
import plusIcon from '../../public/images/icon-plus.png';

interface ChildProps {
  children: React.ReactNode;
  menu: string | string[] | undefined;
}

const Container = styled.div`
  padding: 30px 100px 70px;
  padding: 1px solid red;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 3.6rem;
    font-weight: bold;
  }
`;

const MainContainer = styled.main`
  display: flex;
  margin-top: 30px;
`;

const NavBar = styled.ul`
  & li {
    margin-bottom: 10px;
  }
`;

const Content = styled.section`
  flex: 1;
  margin-left: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 1100px;
`;

function SellerLayout({ menu, children }: ChildProps) {
  return (
    <Container>
      <Header>
        <h1>대시보드</h1>
        <Link href="/addproduct" passHref>
          <a>
            <Buttons.MS color="green">
              <Image src={plusIcon} width={32} height={32} />
              상품 업로드
            </Buttons.MS>
          </a>
        </Link>
      </Header>
      <MainContainer>
        <NavBar>
          <Link href="/seller/sale" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'sale'} badgeCount={100}>
                판매중인 상품
              </Buttons.Menu>
            </li>
          </Link>
          <Link href="/seller/order" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'order'} badgeCount={0}>
                주문
              </Buttons.Menu>
            </li>
          </Link>
          <Link href="/seller/tracking" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'tracking'} badgeCount={0}>
                배송
              </Buttons.Menu>
            </li>
          </Link>
          <Link href="/seller/claim" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'claim'} badgeCount={0}>
                취소/교환/환불
              </Buttons.Menu>
            </li>
          </Link>
          <Link href="/seller/question" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'question'} badgeCount={0}>
                문의
              </Buttons.Menu>
            </li>
          </Link>
          <Link href="/seller/review" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'review'} badgeCount={0}>
                리뷰
              </Buttons.Menu>
            </li>
          </Link>
          <Link href="/seller/total" passHref>
            <li>
              <Buttons.Menu isActive={menu === 'total'} badgeCount={0}>
                통계
              </Buttons.Menu>
            </li>
          </Link>
        </NavBar>
        <Content>{children}</Content>
      </MainContainer>
    </Container>
  );
}

export default SellerLayout;
