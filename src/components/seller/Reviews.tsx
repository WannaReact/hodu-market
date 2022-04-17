import * as Styled from './styled';
import ReviewTr from './ReviewTr';

function Reviews() {
  const data: number[] = [1, 2, 3, 4];

  return (
    <table style={{ width: '100%' }}>
      <Styled.THead>
        <Styled.Tr className="test">
          <Styled.HeadTd flex={30}>상품정보</Styled.HeadTd>
          <Styled.HeadTd flex={10}>작성자</Styled.HeadTd>
          <Styled.HeadTd flex={40}>리뷰 내용</Styled.HeadTd>
          <Styled.HeadTd flex={10}>처리 상태</Styled.HeadTd>
          <Styled.HeadTd flex={10}>쓰기/편집</Styled.HeadTd>
        </Styled.Tr>
      </Styled.THead>
      <Styled.TbodyTest>
        {data.map((i) => {
          return <ReviewTr key={i} />;
        })}
      </Styled.TbodyTest>
    </table>
  );
}

export default Reviews;
