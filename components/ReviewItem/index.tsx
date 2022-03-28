import { useState } from 'react';
import ImageWrapper from '@utils/ImageWrapper';
import Image from 'next/image';
import StarRating from 'components/StarRating';
import * as Styled from './styled';
import ReviewImage from '../../public/images/product-img-lg.png';

export function ReviewItem() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.ReviewContainer>
      <Styled.ReviewInfo>
        <ImageWrapper width="4rem" height="4rem" imgStyle="border-radius: 50%;">
          <Image src={ReviewImage} layout="fill" />
        </ImageWrapper>
        <div>
          <Styled.RatingWrapper>
            <StarRating rating={4} readOnly />
          </Styled.RatingWrapper>
          <Styled.Author>chungu</Styled.Author>
          <Styled.Date>2022. 02. 22</Styled.Date>
        </div>
      </Styled.ReviewInfo>
      <Styled.ReviewContent>
        <Styled.ReviewText isOpen={isOpen}>
          감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타
          필요한 사항은 법률로 정한다. 법관은 헌법과 법률에 의하여 그 양심에
          따라 독립하여 심판한다. 위원은 정당에 가입하거나 정치에 관여할 수
          없다. 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터
          나온다. 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위
          기타 필요한 사항은 법률로 정한다. 법관은 헌법과 법률에 의하여 그
          양심에 따라 독립하여 심판한다. 위원은 정당에 가입하거나 정치에 관여할
          수 없다. 대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터
          나온다.
        </Styled.ReviewText>
        {isOpen && (
          <ImageWrapper width="40rem" height="40rem">
            <Image src={ReviewImage} layout="fill" />
          </ImageWrapper>
        )}
        <Styled.ExpansionButton onClick={handleClick} isOpen={isOpen}>
          {isOpen ? '접 기' : '더보기'}
        </Styled.ExpansionButton>
      </Styled.ReviewContent>
      <ImageWrapper width="8rem" height="8rem">
        {!isOpen && <Image src={ReviewImage} layout="fill" />}
      </ImageWrapper>
    </Styled.ReviewContainer>
  );
}
