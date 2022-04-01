/* eslint-disable react/jsx-key */
import { TextInput } from 'src/components/Inputs';
import React from 'react';
import Link from 'next/link';
import Logo from 'public/images/logo.svg';
import ImageWrapper from '@utils/ImageWrapper';
import { Buttons } from '../../components';
import { Main, MbTextInput, Container, UL } from './styled';

function Login() {
  return (
    <Main>
      <ImageWrapper width="55rem" height="7.4rem">
        <Logo viewBox="0 0 156 38" />
      </ImageWrapper>
      <Container>
        <TextInput width={48} maxLength={8} placeholder="아이디" />
        <MbTextInput width={48} maxLength={10} placeholder="비밀번호" />
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
          <Link href="/join" passHref>
            <a>회원가입</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>아이디 찾기</a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a>비밀번호 찾기</a>
          </Link>
        </li>
      </UL>
    </Main>
  );
}

export default Login;
