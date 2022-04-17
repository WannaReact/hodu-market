import * as Styled from './styled';

function ClaimProduct() {
  return (
    <table style={{ width: '100%' }}>
      <Styled.THead>
        <Styled.Tr>
          <Styled.HeadTd flex={10}>요청</Styled.HeadTd>
          <Styled.HeadTd flex={20}>주문번호</Styled.HeadTd>
          <Styled.HeadTd flex={20}>취소사유</Styled.HeadTd>
          <Styled.HeadTd flex={30}>상세사유</Styled.HeadTd>
          <Styled.HeadTd flex={10}>신청날짜</Styled.HeadTd>
          <Styled.HeadTd flex={10}>정보</Styled.HeadTd>
        </Styled.Tr>
      </Styled.THead>
      <tbody>
        <Styled.Tr>
          <Styled.BodyTd flex={10}>주문취소</Styled.BodyTd>
          <Styled.BodyTd flex={20}>주문번호</Styled.BodyTd>
          <Styled.BodyTd flex={20}>취소사유</Styled.BodyTd>
          <Styled.BodyTd flex={30}>상세사유</Styled.BodyTd>
          <Styled.BodyTd flex={10}>2022.01.09</Styled.BodyTd>
          <Styled.BodyTd flex={10}>버튼</Styled.BodyTd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default ClaimProduct;
