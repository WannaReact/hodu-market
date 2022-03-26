import { useCallback, useRef } from 'react';
// import Image from 'next/image';
import {
  Buttons,
  ReviewItem,
  TabMenu,
  PriceCalculator,
  ProductImage
} from '@components';
// import dummyProduct from 'public/images/product-img-lg.png';
import * as Styled from './styled';

// productImage 컴포넌트에 넘겨줄 이미지 배열
const productImages = [
  '/images/product-img-small-1.png',
  '/images/product-img-small-2.png',
  '/images/product-img-small-3.png',
  '/images/product-img-small-4.png',
  '/images/product-img-small-5.png'
];

export default function Details() {
  const sectionRefs = useRef<HTMLElement[]>([]);
  // console.log('[Details]', sectionRefs);

  const storeRef = useCallback((elem: HTMLElement, index: number) => {
    sectionRefs.current[index] = elem;
    // console.log('[Details] Ref 저장', sectionRefs, index);
  }, []);

  return (
    <Styled.Container>
      <Styled.ProductHeader>
        <ProductImage productImages={productImages} />
        <Styled.ProductSummary>
          <div>
            <Styled.ProductTitle>딥러닝 개발자 무릎 담요</Styled.ProductTitle>
            <Styled.ProductPrice>
              <span>17,500</span> 원
            </Styled.ProductPrice>
          </div>
          <div>
            <Styled.Shipment>택배배송 / 무료배송</Styled.Shipment>
            <PriceCalculator price={17500} />
            <Styled.ButtonsWrapper>
              <Buttons.Custom
                width={41.6}
                height={6}
                fontSize={1.8}
                color="green"
                disabled={false}
              >
                바로 구매
              </Buttons.Custom>
              <Buttons.Custom
                width={20}
                height={6}
                fontSize={1.8}
                color="dark"
                disabled={false}
              >
                장바구니
              </Buttons.Custom>
            </Styled.ButtonsWrapper>
          </div>
        </Styled.ProductSummary>
      </Styled.ProductHeader>
      <Styled.ProductBody>
        <TabMenu sectionRefs={sectionRefs} />
        <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 0)}>
          제품 상세 정보
        </Styled.TabSection>
        <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 1)}>
          리뷰
          <ul>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </ul>
        </Styled.TabSection>
        <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 2)}>
          <table>
            <thead>
              <tr>
                <td>답변상태</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
              </tr>
            </thead>
            {/* <tbody></tbody> */}
          </table>
        </Styled.TabSection>
        <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 3)}>
          교환 반품 정보
        </Styled.TabSection>
      </Styled.ProductBody>
    </Styled.Container>
  );
}
