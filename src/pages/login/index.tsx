/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import Link from 'next/link';
import Logo from 'public/images/logo.svg';
import ImageWrapper from '@utils/ImageWrapper';
import { Buttons, Inputs } from '@components';
import * as Styled from './styled';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginInputs {
  loginId: string;
  loginPw: string;
}
const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<LoginInputs>();
  console.log(watch('loginId'));
  return (
    <Styled.Main>
      <ImageWrapper width="55rem" height="7.4rem">
        <Logo viewBox="0 0 156 38" />
      </ImageWrapper>
      <Styled.Container onSubmit={handleSubmit((d) => console.log(d))}>
        <div>
          <Inputs.TextInput
            width={48}
            hook={register('loginId', {
              required: true,
              min: 3,
              max: 15,
              maxLength: 15,
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: '특수문자를 제외한 문자,숫자를 입력해주세요'
              }
            })}
            placeholder="아이디"
          />
          {errors.loginId && (
            <Styled.ErrorMsg>아이디를 입력해주세요</Styled.ErrorMsg>
          )}
          {errors.loginId?.message && (
            <Styled.ErrorMsg>{errors.loginId?.message}</Styled.ErrorMsg>
          )}

          <Inputs.TextInput
            hook={register('loginPw', {
              required: true,
              min: 8,
              max: 16,
              maxLength: 16
            })}
            width={48}
            placeholder="비밀번호"
          />
          {errors.loginPw && (
            <Styled.ErrorMsg>비밀번호를 입력해주세요</Styled.ErrorMsg>
          )}
        </div>
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
