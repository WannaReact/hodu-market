import * as Styled from './styled';
import ReviewTr from './ReviewTr';

function Reviews() {
  const data: number[] = [1, 2, 3, 4];

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr className="test">
          <Styled.Headtd flex={30}>상품정보</Styled.Headtd>
          <Styled.Headtd flex={10}>작성자</Styled.Headtd>
          <Styled.Headtd flex={40}>리뷰 내용</Styled.Headtd>
          <Styled.Headtd flex={10}>처리 상태</Styled.Headtd>
          <Styled.Headtd flex={10}>쓰기/편집</Styled.Headtd>
        </Styled.Tr>
      </thead>
      <Styled.TbodyTest>
        {data.map((i) => {
          return <ReviewTr key={i} />;
        })}
      </Styled.TbodyTest>
    </table>
  );
}

export default Reviews;
