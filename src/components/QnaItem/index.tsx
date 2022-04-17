import { useState } from 'react';
import * as Buttons from '../Buttons';
import * as Styled from './styled';

function QnaItem() {
  const isSeller = false;
  const isAnswered = false;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <Styled.Question>
      <span>답변대기</span>
      <Styled.QuestionContent onClick={toggleOpen} isOpen={isOpen}>
        감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한
        감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한
        감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한
        감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한
        감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한
      </Styled.QuestionContent>
      <span className="ellipsis-single">ChunGu</span>
      <span>2022.02.17</span>
      {isOpen && isAnswered && (
        <Styled.Answer>
          <Styled.AnswerContent>
            <Styled.Badge>답변</Styled.Badge>
            감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타
            필요한 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위
            기타 필요한 감사원의
          </Styled.AnswerContent>
          <span>판매자</span>
          <span>2022.02.19</span>
        </Styled.Answer>
      )}
      {isOpen && isSeller && !isAnswered && (
        <Styled.Answer>
          <Styled.AnswerForm>
            <Styled.AnswerInput type="text" placeholder="답변 작성" />
            <Buttons.Custom
              width={7}
              height={3}
              fontSize={1.4}
              color="green"
              disabled={false}
            >
              작성
            </Buttons.Custom>
          </Styled.AnswerForm>
        </Styled.Answer>
      )}
    </Styled.Question>
  );
}

export default QnaItem;
