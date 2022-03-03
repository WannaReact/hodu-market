import * as Styled from './styled';

function TrackingInfo() {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr>
          <Styled.Headtd flex={10}>배송상태</Styled.Headtd>
          <Styled.Headtd flex={20}>주문번호</Styled.Headtd>
          <Styled.Headtd flex={20}>택배사</Styled.Headtd>
          <Styled.Headtd flex={20}>발송일</Styled.Headtd>
          <Styled.Headtd flex={20}>도착일</Styled.Headtd>
          <Styled.Headtd flex={10}>송장번호</Styled.Headtd>
          <Styled.Headtd flex={10}>구매자명</Styled.Headtd>
          <Styled.Headtd flex={10}>수취인명</Styled.Headtd>
          <Styled.Headtd flex={10}>정보확인</Styled.Headtd>
        </Styled.Tr>
      </thead>
      <tbody>
        <Styled.Tr>
          <Styled.Bodytd flex={10}>배송준비</Styled.Bodytd>
          <Styled.Bodytd flex={20}>20220108226584</Styled.Bodytd>
          <Styled.Bodytd flex={20}>셀렉트박스</Styled.Bodytd>
          <Styled.Bodytd flex={20}>2022.01.09</Styled.Bodytd>
          <Styled.Bodytd flex={20}>2022.01.09</Styled.Bodytd>
          <Styled.Bodytd flex={10}>264548912324</Styled.Bodytd>
          <Styled.Bodytd flex={10}>황나구</Styled.Bodytd>
          <Styled.Bodytd flex={10}>이춘희</Styled.Bodytd>
          <Styled.Bodytd flex={10}>버튼</Styled.Bodytd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default TrackingInfo;
