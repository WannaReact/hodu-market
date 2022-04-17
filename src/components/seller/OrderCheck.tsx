import * as Styled from './styled';

function OrderCheck() {
  return (
    <table style={{ width: '100%' }}>
      <Styled.THead>
        <Styled.Tr>
          <Styled.HeadTd flex={10}>주문상태</Styled.HeadTd>
          <Styled.HeadTd flex={20}>주문번호</Styled.HeadTd>
          <Styled.HeadTd flex={20}>주분일시</Styled.HeadTd>
          <Styled.HeadTd flex={20}>입금시간</Styled.HeadTd>
          <Styled.HeadTd flex={20}>입금기한</Styled.HeadTd>
          <Styled.HeadTd flex={10}>주문확인</Styled.HeadTd>
        </Styled.Tr>
      </Styled.THead>
      <tbody>
        <Styled.Tr>
          <Styled.BodyTd flex={10}>결제대기</Styled.BodyTd>
          <Styled.BodyTd flex={20}>20220108226584</Styled.BodyTd>
          <Styled.BodyTd flex={20}>2022.01.08 21:08:45</Styled.BodyTd>
          <Styled.BodyTd flex={20}>2022.01.09 24:08:45</Styled.BodyTd>
          <Styled.BodyTd flex={20}>2022.01.09 </Styled.BodyTd>
          <Styled.BodyTd flex={10}>주문확인</Styled.BodyTd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default OrderCheck;
