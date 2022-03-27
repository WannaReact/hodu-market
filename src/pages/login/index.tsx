/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import Link from 'next/link';
import Logo from 'public/images/logo.svg';
import ImageWrapper from '@utils/ImageWrapper';
import { Buttons, Inputs } from '@components';
import * as Styled from './styled';

function Login() {
  return (
    <Styled.Main>
      <ImageWrapper width="55rem" height="7.4rem">
        <Logo viewBox="0 0 156 38" />
      </ImageWrapper>
      <Styled.Container>
        <Inputs.TextInput width={48} maxLength={8} placeholder="아이디" />
        <Styled.MbTextInput width={48} maxLength={10} placeholder="비밀번호" />
        <Buttons.Custom
          width={48}
          height={6}
          fontSize={1.8}
          color="green"
          disabled={false}
        >
          로그인
        </Buttons.Custom>
      </Styled.Container>
      <Styled.UL>
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
      </Styled.UL>
    </Styled.Main>
  );
}

export default Login;
