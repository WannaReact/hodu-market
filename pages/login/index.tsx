/* eslint-disable react/jsx-key */
import { TextInput } from 'components/Inputs';
import React from 'react';
import Link from 'next/link';
import { Buttons } from '../../components';
import { Wrap, MbTextInput, Container, UL } from './styled';

function Login() {
  return (
    <Wrap>
      <Container>
        <h1>로그인</h1>
        <TextInput width="48rem" maxLength={8} placeholder="아이디" />
        <MbTextInput width="48rem" maxLength={10} placeholder="비밀번호" />
        <Buttons.Custom
          width={48}
          height={6}
          fontSize={1.8}
          color="green"
          disabled={false}
        >
          로그인
        </Buttons.Custom>
      </Container>
      <UL>
        <li>
          <Link href="/">회원가입</Link>
        </li>
        <li>아이디 찾기</li>
        <li>비밀번호 찾기</li>
      </UL>
    </Wrap>
  );
}

export default Login;
