/* eslint-disable react/jsx-key */
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './logo';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
`;

function Join() {
  return (
    <Wrap>
      <Logo />
      <Container>
        <h1>회원가입</h1>
        <input type="text" placeholder="아이디" />
        <button type="button">중복확인</button>
        <input type="text" placeholder="비밀번호" />
        <input type="text" placeholder="비밀번호 재확인" />
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="휴대폰번호" />
        <input type="text" placeholder="이메일" />
      </Container>
      <div>
        <p>
          <input type="checkbox" /> 호두샵의 <Link href="/">이용약관</Link> 및{' '}
          <Link href="/">개인정보처리방침</Link>에 대한 내용을 확인하였고
          동의합니다.
        </p>
        <button type="submit">가입하기</button>
      </div>
    </Wrap>
  );
}

export default Join;
