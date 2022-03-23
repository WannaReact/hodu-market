import Image from 'next/image';
import { useState } from 'react';
import * as Styled from './styled';
import profileImg from '../../public/images/seller-productIMG.png';

function ReviewTr() {
  const [showComment, setShowComment] = useState(false);

  const answer = () => {
    setShowComment(!showComment);
  };

  const commentCount: number[] = [1, 2, 3, 4];

  return (
    <>
      <Styled.Tr onClick={answer} className="test">
        <Styled.BodyTd hasProfile flex={30}>
          <Image src={profileImg} width={120} height={120} />
          <Styled.ProductText>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eum
              dolore earum commodi consectetur odit. Delectus, ea pariatur, rem
              beatae totam a architecto laborum cupiditate perspiciatis
              reprehenderit sapiente quo. Dolor?
            </h4>
            <p>안녕</p>
          </Styled.ProductText>
        </Styled.BodyTd>
        <Styled.BodyTd flex={10}>jma1020</Styled.BodyTd>
        <Styled.BodyTd flex={40}>
          <p>2022.02.15</p>
          <p>별점</p>
          <p>리뷰내용리뷰내용</p>
          <Image src={profileImg} width={120} height={120} />
        </Styled.BodyTd>
        <Styled.BodyTd flex={10}>답변완료</Styled.BodyTd>
        <Styled.BodyTd flex={10}>버튼 </Styled.BodyTd>
      </Styled.Tr>

      {showComment
        ? commentCount.map((i) => {
            return (
              <Styled.CommentTr key={i}>
                <Styled.CommentTd flex={30}> </Styled.CommentTd>
                <Styled.CommentTd flex={60} isText>
                  <strong>박아무개</strong>
                  <em>2022.02.15</em>
                  <p>
                    저는 정민입니다 대충 문의 답변 드릴게요?? 그냥 써주세요.
                    저는 정민입니다 대충 문의 답변 드 써주세요. 저는 정민입니다
                    대충 문의 답변 드릴게요?? 그냥 써주릴게요?? 그냥 써주세요.
                    저는 정민입니다 대충 문의 답변 드릴게요?? 그냥세요
                  </p>
                </Styled.CommentTd>
                <Styled.CommentTd flex={10} isAlign>
                  삭제
                </Styled.CommentTd>
              </Styled.CommentTr>
            );
          })
        : null}
    </>
  );
}

export default ReviewTr;
