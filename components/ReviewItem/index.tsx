import { useState } from 'react';
import ImageWrapper from 'components/utils/ImageWrapper';
import Image from 'next/image';
import StarRating from 'components/StarRating';
import * as Styled from './styled';
import ReviewImage from '../../public/images/product-img-lg.png';

export function ReviewItem() {
  const [rating, setRating] = useState(0);

  return (
    <Styled.ReviewContainer>
      <Styled.ReviewInfo>
        <ImageWrapper width="4rem" height="4rem" imgStyle="border-radius: 50%;">
          <Image src={ReviewImage} layout="fill" />
        </ImageWrapper>
        <div>
          <Styled.RateWrapper>
            <StarRating rating={3} readOnly />
          </Styled.RateWrapper>
          <Styled.RateWrapper>
            <StarRating
              rating={rating}
              readOnly={false}
              setRating={setRating}
            />
          </Styled.RateWrapper>
          <Styled.Author>chungu</Styled.Author>
          <Styled.Date>2022. 02. 22</Styled.Date>
        </div>
      </Styled.ReviewInfo>
      <Styled.ReviewContent>
        <Styled.ReviewText>대충 리뷰 내용</Styled.ReviewText>
        <Styled.ExpansionButton>더보기</Styled.ExpansionButton>
      </Styled.ReviewContent>
      <ImageWrapper width="8rem" height="8rem">
        <Image src={ReviewImage} layout="fill" />
      </ImageWrapper>
    </Styled.ReviewContainer>
  );
}
