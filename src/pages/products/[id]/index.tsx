import { useState, useCallback, useRef, useEffect } from 'react';
import {
  Buttons,
  ReviewList,
  TabMenu,
  PriceCalculator,
  ProductImage,
  QnaList
} from '@components';
import dummyData from './dummyProductData.json';
import * as Styled from './styled';

interface IProductData {
  productId: number;
  name: string;
  price: number;
  discountRate: number;
  stock: number;
  images: string[];
  reviews: {
    reviewId: number;
    author: string;
    authorImg: string;
    rating: number;
    date: string;
    content: string;
    reviewImg: string;
  }[];
}

export default function Details() {
  const [productData, setProductData] = useState<IProductData>(
    {} as IProductData
  );
  const [isLoading, setIsLoading] = useState(true);
  const { name, price, stock, images, reviews } = productData;

  useEffect(() => {
    setProductData(dummyData);
    setIsLoading(false);
  }, []);

  const sectionRefs = useRef<HTMLElement[]>([]);

  const storeRef = useCallback((elem: HTMLElement, index: number) => {
    sectionRefs.current[index] = elem;
  }, []);

  return (
    <Styled.Container>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          <Styled.ProductHeader>
            <ProductImage productImages={images} />
            <Styled.ProductSummary>
              <div>
                <Styled.ProductTitle>{name}</Styled.ProductTitle>
                <Styled.ProductPrice>
                  <span>{price}</span> 원
                </Styled.ProductPrice>
              </div>
              <div>
                <Styled.Shipment>택배배송 / 무료배송</Styled.Shipment>
                <PriceCalculator price={price} stock={stock} />
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
              <h3>리뷰</h3>
              <ReviewList reviews={reviews} />
            </Styled.TabSection>
            <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 2)}>
              <h3>Q &amp; A</h3>
              <QnaList />
            </Styled.TabSection>
            <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 3)}>
              교환 반품 정보
            </Styled.TabSection>
          </Styled.ProductBody>
        </>
      )}
    </Styled.Container>
  );
}
