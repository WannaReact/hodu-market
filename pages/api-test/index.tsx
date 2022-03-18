import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import api from 'utils/api';
import * as Styled from './styled';

function ApiTest() {
  const [inputs, setInputs] = useState<HTMLInputElement[] | null>(null);
  useEffect(() => {
    setInputs([...Array.from(document.querySelectorAll('input'))]);
  }, []);
  const getAllUsers = async () => {
    const data = await api.get('/user');
    console.log('모든 회원 검색 완료', data);
  };

  const postUser = async () => {
    if (!inputs) return;
    const data = await api.post('/user', {
      userId: inputs[0].value,
      userName: inputs[1].value,
      phone: inputs[2].value,
      email: inputs[3].value
    });
    console.log('회원 등록 완료', data);
  };

  const getUser = async () => {
    if (!inputs) return;
    const data = await api.get(`/user/${inputs[4].value}`);
    console.log('특정 회원 검색 완료', data);
  };

  const getAllReviews = async () => {
    const data = await api.get('/review');
    console.log('모든 리뷰 검색 완료', data);
  };

  const postReview = async () => {
    if (!inputs) return;
    const data = await api.post('/review', {
      productId: inputs[5].value,
      userId: inputs[6].value,
      rating: +inputs[7].value,
      content: inputs[8].value
    });
    console.log('리뷰 등록 완료', data);
  };

  const getReview = async () => {
    if (!inputs) return;
    const data = await api.get(`/review/${inputs[9].value}`);
    console.log('특정 리뷰 검색 완료', data);
  };

  const getAllProducts = async () => {
    const data = await api.get('/product');
    console.log('모든 상품 검색 완료', data);
  };

  const postProduct = async () => {
    if (!inputs) return;
    const data = await api.post('/product', {
      productName: inputs[10].value,
      price: +inputs[11].value,
      discount: +inputs[12].value,
      stock: +inputs[13].value
    });
    console.log('상품 등록 완료', data);
  };

  const getProduct = async () => {
    if (!inputs) return;
    const data = await api.get(`/product/${inputs[14].value}`);
    console.log('특정 상품 검색 완료', data);
  };

  const getAllComments = async () => {
    const data = await api.get('/comment');
    console.log('모든 댓글 검색 완료', data);
  };

  const postComment = async () => {
    if (!inputs) return;
    const data = await api.post('/comment', {
      reviewId: inputs[15].value,
      userId: inputs[16].value,
      content: inputs[17].value
    });
    console.log('댓글 등록 완료', data);
  };

  const getComment = async () => {
    if (!inputs) return;
    const data = await api.get(`/comment/${inputs[18].value}`);
    console.log('특정 댓글 검색 완료', data);
  };

  return (
    <Styled.Container>
      <Styled.Button type="button" onClick={getAllUsers}>
        모든 회원 정보 불러오기
      </Styled.Button>
      <Styled.Form>
        <Styled.InputWrapper>
          아이디: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          이름: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          전화번호: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          이메일: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={postUser}>
          회원 등록
        </Styled.Button>
      </Styled.Form>
      <Styled.Form>
        <Styled.InputWrapper>
          사용자ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={getUser}>
          ObjectId로 특정 회원 정보 불러오기
        </Styled.Button>
      </Styled.Form>
      <Styled.Button type="button" onClick={getAllReviews}>
        모든 리뷰 정보 불러오기
      </Styled.Button>
      <Styled.Form>
        <Styled.InputWrapper>
          상품ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          유저ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          평점(5점만점): <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          리뷰내용: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={postReview}>
          리뷰 등록
        </Styled.Button>
      </Styled.Form>
      <Styled.Form>
        <Styled.InputWrapper>
          리뷰ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={getReview}>
          ObjectId로 특정 리뷰 정보 불러오기
        </Styled.Button>
      </Styled.Form>
      <Styled.Button type="button" onClick={getAllProducts}>
        모든 상품 정보 불러오기
      </Styled.Button>
      <Styled.Form>
        <Styled.InputWrapper>
          상품이름: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          가격: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          할인액수: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          재고: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={postProduct}>
          상품 등록
        </Styled.Button>
      </Styled.Form>
      <Styled.Form>
        <Styled.InputWrapper>
          상품ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={getProduct}>
          ObjectId로 특정 상품 정보 불러오기
        </Styled.Button>
      </Styled.Form>
      <Styled.Button type="button" onClick={getAllComments}>
        모든 댓글 정보 불러오기
      </Styled.Button>
      <Styled.Form>
        <Styled.InputWrapper>
          리뷰ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          유저ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          댓글내용: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={postComment}>
          댓글 등록
        </Styled.Button>
      </Styled.Form>
      <Styled.Form>
        <Styled.InputWrapper>
          댓글ID: <Styled.Input />
        </Styled.InputWrapper>
        <Styled.Button type="button" onClick={getComment}>
          ObjectId로 특정 댓글 정보 불러오기
        </Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      gnb: {
        active: false
      }
    }
  };
};

export default ApiTest;
