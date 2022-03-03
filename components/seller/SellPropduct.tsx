import Image from 'next/image';
import profileImg from '../../public/images/seller-profileIMG.png';
import * as Styled from './styled';

function SellProduct() {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr>
          <Styled.Headtd flex={60}>상품정보</Styled.Headtd>
          <Styled.Headtd flex={20}>판매가격</Styled.Headtd>
          <Styled.Headtd flex={10}>수정</Styled.Headtd>
          <Styled.Headtd flex={10}>삭제</Styled.Headtd>
        </Styled.Tr>
      </thead>
      <tbody>
        <Styled.Tr>
          <Styled.Bodytd hasProfile flex={60}>
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
          </Styled.Bodytd>
          <Styled.Bodytd flex={20}>17,500원</Styled.Bodytd>
          <Styled.Bodytd flex={10}>안녕</Styled.Bodytd>
          <Styled.Bodytd flex={10}>안녕</Styled.Bodytd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default SellProduct;
