import Link from 'next/link';
import { Buttons } from 'components';
import { TextInputBox } from 'components/Inputs';
import ImageWrapper from 'components/utils/ImageWrapper';
import styled from 'styled-components';
import Logo from 'public/images/logo.svg';
import { ChangeEvent, useState } from 'react';
import { COLOR } from 'shared/constants';
import { Main, Container } from './styled';

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 48rem;
`;
const P = styled.p`
  font-size: 2rem;
  line-height: 5rem;
`;
interface ISelectProps {
  isOpen: boolean;
}
const Select = styled.select<ISelectProps>`
  width: ${(props) => (props.isOpen ? '7rem' : '13rem')};
  height: 5.4rem;
  border: 1px solid ${COLOR.greyC4};
  border-radius: 0.5rem;
`;
const ExP = styled.p`
  line-height: 1.6rem;
  vertical-align: -2px;
`;

const A = styled.a`
  color: blue;
`;

function Join() {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'direct') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Main>
      <ImageWrapper width="23.8rem" height="7.4rem">
        <Logo viewBox="0 0 156 38" />
      </ImageWrapper>
      <Container>
        <h1 className="sr-only">회원가입</h1>
        <Wrap>
          <TextInputBox
            width={32}
            maxLength={10}
            // labelName="아이디"
            placeholder="아이디"
          />
          <Buttons.Custom
            width={12.2}
            height={5.4}
            fontSize={1.8}
            color="green"
            disabled={false}
          >
            중복확인
          </Buttons.Custom>
        </Wrap>

        <TextInputBox width={48} placeholder="비밀번호" />
        <TextInputBox width={48} placeholder="비밀번호 재확인" />
        <TextInputBox width={48} placeholder="이름" />
        <Wrap>
          <TextInputBox width={12} placeholder="번호" />
          <P>-</P>
          <TextInputBox width={15} />
          <P>-</P>
          <TextInputBox width={15} />
        </Wrap>
        <Wrap>
          <TextInputBox width={22} placeholder="이메일" />
          <P>@</P>
          {/* 상단 select box에서 직접입력 선택 시 나타날 인풋박스 */}
          {isOpen && <TextInputBox width={14} />}
          <Select
            id="emailBox"
            name="emailBox"
            onChange={handleChange}
            isOpen={isOpen}
          >
            <option value="">선택해주세요</option>
            <option value="@gamil.com">gmail.com</option>
            <option value="@hanmail.net">hanmail.net</option>
            <option value="@hotmail.com">hotmail.com</option>
            <option value="nate.com">nate.com</option>
            <option value="@naver.com">naver.com</option>
            <option value="@yahoo.co.kr">yahoo.co.kr</option>
            <option value="direct">직접입력</option>
          </Select>
        </Wrap>
      </Container>
      <div>
        <ExP>
          <input type="checkbox" /> 원두마켓의{' '}
          <Link href="/" passHref>
            <A>이용약관</A>
          </Link>{' '}
          및{' '}
          <Link href="/" passHref>
            <A>개인정보처리방침</A>
          </Link>
          에 대한 내용을 확인하였고 동의합니다.
        </ExP>
        <Buttons.Custom
          width={48}
          height={6}
          fontSize={1.8}
          color="green"
          disabled={false}
        >
          가입하기
        </Buttons.Custom>
      </div>
    </Main>
  );
}

export default Join;
