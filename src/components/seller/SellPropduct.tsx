import Image from 'next/image';
import profileImg from 'public/images/seller-profileIMG.png';
import * as Styled from './styled';

function SellProduct() {
  return (
    <table style={{ width: '100%' }}>
      <Styled.THead>
        <Styled.Tr>
          <Styled.HeadTd flex={60}>상품정보</Styled.HeadTd>
          <Styled.HeadTd flex={20}>판매가격</Styled.HeadTd>
          <Styled.HeadTd flex={10}>수정</Styled.HeadTd>
          <Styled.HeadTd flex={10}>삭제</Styled.HeadTd>
        </Styled.Tr>
      </Styled.THead>
      <tbody>
        <Styled.Tr>
          <Styled.BodyTd hasProfile flex={60}>
            <Image src={profileImg} width={70} height={70} />
            <Styled.ProductText>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                aut enim quidem illo recusandae rem odio. At, corrupti.
                Voluptatum at dolores cupiditate corporis eos laudantium,
                voluptatem tempore possimus reprehenderit qui?
              </h4>
              <p>안녕</p>
            </Styled.ProductText>
          </Styled.BodyTd>
          <Styled.BodyTd flex={20}>17,500원</Styled.BodyTd>
          <Styled.BodyTd flex={10}>안녕</Styled.BodyTd>
          <Styled.BodyTd flex={10}>안녕</Styled.BodyTd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default SellProduct;
