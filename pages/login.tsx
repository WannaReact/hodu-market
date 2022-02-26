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

function Login() {
  return (
    <Wrap>
      <Logo />
      <Container>
        <h1>eee</h1>
        <input type="text" placeholder="아이디" />
        <input type="text" placeholder="비밀번호" />
        <button type="button">로그인</button>
      </Container>
      <div>
        <Link href="/">회원가입</Link>
        <span> | </span>
        <Link href="/">비밀번호 찾기</Link>
      </div>
    </Wrap>
  );
}

export default Login;
