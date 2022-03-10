import ImageWrapper from 'components/utils/ImageWrapper';
import Image from 'next/image';
import * as Styled from './styled';
import ReviewImage from '../../public/images/product-img-lg.png';

export function ReviewItem() {
  return (
    <Styled.ReviewContainer>
      <Styled.ReviewInfo>
        <ImageWrapper width="4rem" height="4rem" imgStyle="border-radius: 50%">
          <Image src={ReviewImage} layout="fill" />
        </ImageWrapper>
        <Styled.Author>chungu</Styled.Author>
        <Styled.Date>2022. 02. 22</Styled.Date>
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
