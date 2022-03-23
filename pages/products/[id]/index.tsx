import { RefObject, useRef } from 'react';
import Image from 'next/image';
import { ReviewItem } from 'components/ReviewItem';
import dummyProduct from '../../../public/images/product-img-lg.png';
import * as Styled from './styled';
import { Buttons } from '../../../components';

export default function Details() {
  const detailSectionRef = useRef<HTMLElement>(null);
  const reviewSectionRef = useRef<HTMLElement>(null);
  const QASectionRef = useRef<HTMLElement>(null);
  const noticeSectionRef = useRef<HTMLElement>(null);

  const scrollToSection = ($targetRef: RefObject<HTMLElement>) => {
    $targetRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Styled.Container>
      <Styled.ProductHeader>
        <Styled.ProductImage>
          <Image src={dummyProduct} />
        </Styled.ProductImage>
        <Styled.ProductSummary>
          <div>
            <Styled.ProductTitle>딥러닝 개발자 무릎 담요</Styled.ProductTitle>
            <Styled.ProductPrice>
              <span>17,500</span> 원
            </Styled.ProductPrice>
          </div>
          <div>
            <Styled.Shipment>택배배송 / 무료배송</Styled.Shipment>
            <Styled.Count>3개</Styled.Count>
            <Styled.CountNPrice>
              <span>총 상품 금액</span>
              <div>
                <Styled.TotalCount>
                  총 수량 <span>1</span>개
                </Styled.TotalCount>
                <Styled.TotalPrice>
                  <span>{(17500).toLocaleString()}</span>원
                </Styled.TotalPrice>
              </div>
            </Styled.CountNPrice>
            <Styled.ButtonsWrapper>
              <Buttons.Custom
                width={41.6}
                height={6}
                fontSize={1.8}
                color="green"
                disabled
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
        <Styled.TabMenu>
          <Buttons.Tab
            isActive
            onClick={() => {
              scrollToSection(detailSectionRef);
            }}
          >
            제품 상세 정보
          </Buttons.Tab>
          <Buttons.Tab
            isActive={false}
            onClick={() => {
              scrollToSection(reviewSectionRef);
            }}
          >
            리뷰
          </Buttons.Tab>
          <Buttons.Tab
            isActive={false}
            onClick={() => {
              scrollToSection(QASectionRef);
            }}
          >
            QA
          </Buttons.Tab>
          <Buttons.Tab
            isActive={false}
            onClick={() => {
              scrollToSection(noticeSectionRef);
            }}
          >
            반품/교환정보
          </Buttons.Tab>
        </Styled.TabMenu>
        <Styled.TabSection ref={detailSectionRef}>
          제품 상세 정보
        </Styled.TabSection>
        <Styled.TabSection ref={reviewSectionRef}>
          <ul>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </ul>
        </Styled.TabSection>
        <Styled.TabSection ref={QASectionRef}>
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
        <Styled.TabSection ref={noticeSectionRef}>
          교환 반품 정보
        </Styled.TabSection>
      </Styled.ProductBody>
    </Styled.Container>
  );
}
