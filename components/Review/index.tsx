import ImageWrapper from 'components/utils/ImageWrapper';
import Image from 'next/image';
import * as Styled from './styled';
import ReviewImage from '../../public/images/product-img-lg.png';

function index() {
  return (
    <Styled.ReviewContainer>
      <Styled.ReviewInfo>
        <Styled.Author>chungu</Styled.Author>
        <Styled.Date>2022. 02. 22</Styled.Date>
      </Styled.ReviewInfo>
      <ImageWrapper width="8rem" height="8rem">
        <Image src={ReviewImage} layout="fill" />
      </ImageWrapper>
    </Styled.ReviewContainer>
  );
}

export default index;
