import * as Styled from './styled';

function TrackingInfo() {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr>
          <Styled.HeadTd flex={10}>배송상태</Styled.HeadTd>
          <Styled.HeadTd flex={20}>주문번호</Styled.HeadTd>
          <Styled.HeadTd flex={20}>택배사</Styled.HeadTd>
          <Styled.HeadTd flex={20}>발송일</Styled.HeadTd>
          <Styled.HeadTd flex={20}>도착일</Styled.HeadTd>
          <Styled.HeadTd flex={10}>송장번호</Styled.HeadTd>
          <Styled.HeadTd flex={10}>구매자명</Styled.HeadTd>
          <Styled.HeadTd flex={10}>수취인명</Styled.HeadTd>
          <Styled.HeadTd flex={10}>정보확인</Styled.HeadTd>
        </Styled.Tr>
      </thead>
      <tbody>
        <Styled.Tr>
          <Styled.BodyTd flex={10}>배송준비</Styled.BodyTd>
          <Styled.BodyTd flex={20}>20220108226584</Styled.BodyTd>
          <Styled.BodyTd flex={20}>셀렉트박스</Styled.BodyTd>
          <Styled.BodyTd flex={20}>2022.01.09</Styled.BodyTd>
          <Styled.BodyTd flex={20}>2022.01.09</Styled.BodyTd>
          <Styled.BodyTd flex={10}>264548912324</Styled.BodyTd>
          <Styled.BodyTd flex={10}>황나구</Styled.BodyTd>
          <Styled.BodyTd flex={10}>이춘희</Styled.BodyTd>
          <Styled.BodyTd flex={10}>버튼</Styled.BodyTd>
        </Styled.Tr>
      </tbody>
    </table>
  );
}

export default TrackingInfo;
