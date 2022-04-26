import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  ReviewList,
  TabMenu,
  PriceCalculator,
  ProductImage,
  InquiryList
} from '@components';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import api from '@utils/api';
import { IProduct } from '@shared/types';
import * as Styled from './styled';

export default function Details() {
  const router = useRouter();
  const { productId } = router.query as { productId: string };
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<IProduct>({} as IProduct);
  const { productName, price, discount, stock, reviews, inquiries } =
    productData;
  const finalPrice =
    +discount === 0
      ? price
      : Math.round((price * (100 - +discount)) / 1000) * 10;
  const sectionRefs = useRef<HTMLElement[]>([]);
  const images = [
    '/images/product-img-small-1.png',
    '/images/product-img-small-2.png',
    '/images/product-img-small-3.png',
    '/images/product-img-small-4.png',
    '/images/product-img-small-5.png'
  ];

  const storeRef = useCallback((elem: HTMLElement, index: number) => {
    sectionRefs.current[index] = elem;
  }, []);

  const getData = useCallback(async () => {
    try {
      const { data } = await api.get(`/product/${productId}`);
      setProductData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <DefaultContainerPage>
      <Styled.Container>
        {isLoading ? (
          'Loading'
        ) : (
          <>
            <Styled.ProductHeader>
              <ProductImage productImages={images} />
              <Styled.ProductSummary>
                <div>
                  <Styled.ProductTitle>{productName}</Styled.ProductTitle>
                  <Styled.ProductPrice>
                    {+discount !== 0 ? (
                      <>
                        <Styled.FinalPrice>
                          {finalPrice.toLocaleString()}
                        </Styled.FinalPrice>{' '}
                        원
                        <Styled.OriginalPrice>
                          {price.toLocaleString()}원
                        </Styled.OriginalPrice>
                        <Styled.DiscountRate>{discount}%</Styled.DiscountRate>
                      </>
                    ) : (
                      <>
                        <Styled.FinalPrice>
                          {price.toLocaleString()}
                        </Styled.FinalPrice>{' '}
                        원
                      </>
                    )}
                  </Styled.ProductPrice>
                </div>
                <div>
                  <Styled.Shipment>택배배송 / 무료배송</Styled.Shipment>
                  <PriceCalculator
                    productId={productId}
                    price={finalPrice}
                    stock={stock}
                  />
                </div>
              </Styled.ProductSummary>
            </Styled.ProductHeader>
            <Styled.ProductBody>
              <TabMenu sectionRefs={sectionRefs} />
              <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 0)}>
                제품 상세 정보
              </Styled.TabSection>
              <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 1)}>
                {reviews.length === 0 ? (
                  '아직 리뷰가 없습니다.'
                ) : (
                  <ReviewList reviews={reviews} />
                )}
              </Styled.TabSection>
              <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 2)}>
                {inquiries.length === 0 ? (
                  '아직 문의가 없습니다.'
                ) : (
                  <InquiryList inquiries={inquiries} />
                )}
              </Styled.TabSection>
              <Styled.TabSection ref={(elem: HTMLElement) => storeRef(elem, 3)}>
                교환 반품 정보
              </Styled.TabSection>
            </Styled.ProductBody>
          </>
        )}
      </Styled.Container>
    </DefaultContainerPage>
  );
}
