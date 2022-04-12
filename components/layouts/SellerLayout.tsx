import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Buttons } from '..';
import plusIcon from '../../public/images/icon-plus.png';
import * as Styled from './styled';

interface ChildProps {
  children: React.ReactNode;
  menu: string | string[] | undefined;
}

function SellerLayout({ menu, children }: ChildProps) {
  return (
    <Styled.Container>
      <Styled.Header>
        <h1>대시보드</h1>
        {menu === '/addproduct' ? null : (
          <Link href="/addproduct" passHref>
            <a>
              <Buttons.Custom
                width={22}
                height={6.8}
                fontSize={2.4}
                color="green"
                disabled={false}
              >
                <Image src={plusIcon} width={32} height={32} />
                상품 업로드
              </Buttons.Custom>
            </a>
          </Link>
        )}
      </Styled.Header>
      <Styled.MainContainer>
        <Styled.NavBar>
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
        </Styled.NavBar>
        <Styled.Content>{children}</Styled.Content>
      </Styled.MainContainer>
    </Styled.Container>
  );
}

export default SellerLayout;
