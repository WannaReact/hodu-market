import Image from 'next/image';
import { useState } from 'react';
import profileImg from 'public/images/seller-productIMG.png';
import * as Styled from './styled';

function QuestionTr() {
  const [showComment, setShowComment] = useState(false);

  const answer = () => {
    setShowComment(!showComment);
  };

  return (
    <>
      <Styled.Tr onClick={answer} className="test">
        <Styled.BodyTd hasProfile flex={30}>
          <Image src={profileImg} width={120} height={120} />
          <Styled.ProductText>
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, amet!
              Aperiam, laborum praesentium neque quas et debitis molestias
              repudiandae est inventore, fugit eligendi delectus nobis error?
              Consequatur provident repudiandae distinctio?
            </h4>
            <p>안녕</p>
          </Styled.ProductText>
        </Styled.BodyTd>
        <Styled.BodyTd flex={10}>jma1020</Styled.BodyTd>
        <Styled.BodyTd flex={40}>
          대충문의 호로록 대충문의 대충문의 호로록 대충문의 대충문의 호로록
          대충문의 대충문의 호로록 대충문의 대충문의 호로록 대충문의
        </Styled.BodyTd>
        <Styled.BodyTd flex={10}>답변완료</Styled.BodyTd>
        <Styled.BodyTd flex={10}>버튼 </Styled.BodyTd>
      </Styled.Tr>

      {showComment ? (
        <Styled.CommentTr>
          <Styled.CommentTd flex={30}> </Styled.CommentTd>
          <Styled.CommentTd flex={60} isText>
            <strong>관리자</strong>
            <em>2022.02.15</em>
            <p>
              저는 정민입니다 대충 문의 답변 드릴게요?? 그냥 써주세요. 저는
              정민입니다 대충 문의 답변 드릴게요?? 그냥 써주세요. 저는
              정민입니다 대충 문의 답변 드릴게요?? 그냥 써주세요. 저는
              정민입니다 대충 문의 답변 드릴게요?? 그냥 써주세요
            </p>
          </Styled.CommentTd>
          <Styled.CommentTd flex={10} isAlign>
            삭제
          </Styled.CommentTd>
        </Styled.CommentTr>
      ) : null}
    </>
  );
}

export default QuestionTr;
