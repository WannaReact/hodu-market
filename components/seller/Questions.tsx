import * as Styled from './styled';
import QuestionTr from './QuestionTr';

function Questions() {
  const data: number[] = [1, 2, 3, 4];

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <Styled.Tr className="test">
          <Styled.Headtd flex={30}>상품정보</Styled.Headtd>
          <Styled.Headtd flex={10}>작성자</Styled.Headtd>
          <Styled.Headtd flex={40}>문의 내용</Styled.Headtd>
          <Styled.Headtd flex={10}>처리 상태</Styled.Headtd>
          <Styled.Headtd flex={10}>쓰기/편집</Styled.Headtd>
        </Styled.Tr>
      </thead>
      <Styled.TbodyTest>
        {data.map((i) => {
          return <QuestionTr key={i} />;
        })}
      </Styled.TbodyTest>
    </table>
  );
}

export default Questions;

// interface ProfileCheck {
//   profile?: number;
//   flex: number;
//   isText?: boolean;
// }

// const CommentTr = styled.tr`
//   display: flex;
//   background-color: white;
// `;

// const CommentTd = styled.td<ProfileCheck>`
//   flex: 1 1 ${(props) => props.flex}%;
//   border-top: ${(props) => (props.isText ? '1px solid #ccc' : null)};
//   font-size: 1.8rem;
//   padding: 20px 0px;
// `;

// {arrr.map((index) => {
//   return (
//     <>
//       <Styled.Tr onClick={answer} className="test">
//         <Styled.Bodytd profile={1} flex={30}>
//           <Image src={profileImg} width={120} height={120} />
//           <Styled.ProductText>
//             <h4>
//               안녕 상품정보를 너무 많이 넣으면 코로나 걸려버려 그러고 열
//               40도 즉사 ㅂㅇ 그리고 여긴 상품 타이틀이야 길게 적을
//               필요없어
//             </h4>
//             <p>안녕</p>
//           </Styled.ProductText>
//         </Styled.Bodytd>
//         <Styled.Bodytd flex={10}>jma1020</Styled.Bodytd>
//         <Styled.Bodytd flex={40}>
//           대충문의 호로록 대충문의 대충문의 호로록 대충문의 대충문의
//           호로록 대충문의 대충문의 호로록 대충문의 대충문의 호로록
//           대충문의
//         </Styled.Bodytd>
//         <Styled.Bodytd flex={10}>답변완료</Styled.Bodytd>
//         <Styled.Bodytd flex={10}>버튼 </Styled.Bodytd>
//       </Styled.Tr>

//       <CommentTr style={{ display: ace ? 'none' : 'flex' }}>
//         <CommentTd flex={50}>c</CommentTd>
//         <CommentTd flex={40} isText>
//           저는 정민
//         </CommentTd>
//         <CommentTd flex={30} isText>
//           나는 지수
//         </CommentTd>
//       </CommentTr>
//     </>
//   );
// })}
