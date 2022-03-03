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
          <Styled.Bodytd profile={1} flex={60}>
            <Image src={profileImg} width={70} height={70} />
            <Styled.ProductText>
              <h4>
                안녕 상품정보를 너무 많이 넣으면 코로나 걸려버려 그러고 열 40도
                즉사 ㅂㅇ 그리고 여긴 상품 타이틀이야 길게 적을 필요없어
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
