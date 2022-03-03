import * as Styled from './styled';

function OrderCheck() {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr>
          <Styled.Headtd flex={10}>주문상태</Styled.Headtd>
          <Styled.Headtd flex={20}>주문번호</Styled.Headtd>
          <Styled.Headtd flex={20}>주분일시</Styled.Headtd>
          <Styled.Headtd flex={20}>입금시간</Styled.Headtd>
          <Styled.Headtd flex={20}>입금기한</Styled.Headtd>
          <Styled.Headtd flex={10}>주문확인</Styled.Headtd>
        </Styled.Tr>
      </thead>
      <tbody>
        <Styled.Tr>
          <Styled.Bodytd flex={10}>결제대기</Styled.Bodytd>
          <Styled.Bodytd flex={20}>20220108226584</Styled.Bodytd>
          <Styled.Bodytd flex={20}>2022.01.08 21:08:45</Styled.Bodytd>
          <Styled.Bodytd flex={20}>2022.01.09 24:08:45</Styled.Bodytd>
          <Styled.Bodytd flex={20}>2022.01.09 </Styled.Bodytd>
          <Styled.Bodytd flex={10}>주문확인</Styled.Bodytd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default OrderCheck;
