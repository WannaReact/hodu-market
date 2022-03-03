import * as Styled from './styled';

function ClaimProduct() {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr>
          <Styled.Headtd flex={10}>요청</Styled.Headtd>
          <Styled.Headtd flex={20}>주문번호</Styled.Headtd>
          <Styled.Headtd flex={20}>취소사유</Styled.Headtd>
          <Styled.Headtd flex={30}>상세사유</Styled.Headtd>
          <Styled.Headtd flex={10}>신청날짜</Styled.Headtd>
          <Styled.Headtd flex={10}>정보</Styled.Headtd>
        </Styled.Tr>
      </thead>
      <tbody>
        <Styled.Tr>
          <Styled.Bodytd flex={10}>주문취소</Styled.Bodytd>
          <Styled.Bodytd flex={20}>주문번호</Styled.Bodytd>
          <Styled.Bodytd flex={20}>취소사유</Styled.Bodytd>
          <Styled.Bodytd flex={30}>상세사유</Styled.Bodytd>
          <Styled.Bodytd flex={10}>2022.01.09</Styled.Bodytd>
          <Styled.Bodytd flex={10}>버튼</Styled.Bodytd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default ClaimProduct;
