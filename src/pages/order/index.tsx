/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import ImageWrapper from '@utils/ImageWrapper';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import { Buttons } from '@components';
import productImg from 'public/images/product-img-small-4.png';
import * as Styled from './styled';

export default function Order() {
  const { register, handleSubmit } = useForm();
  const getAddress = () => {};
  const onSubmit = () => {};

  return (
    <DefaultContainerPage>
      <Styled.Container>
        <header>
          <h1>주문/결제하기</h1>
        </header>
        <section>
          <h2 className="sr-only">주문 제품 목록</h2>
          <Styled.OrderList>
            <Styled.Field aria-hidden="true">
              <span>상품정보</span>
              <span>할인</span>
              <span>배송비</span>
              <span>주문금액</span>
            </Styled.Field>
            <Styled.Product>
              <span className="sr-only">상품정보</span>
              <Styled.Info>
                <ImageWrapper
                  width="10.4rem"
                  height="10.4rem"
                  imgStyle="border-radius: 1rem;"
                >
                  <Image src={productImg} layout="fill" />
                </ImageWrapper>
                <div>
                  <span>딥러닝 개발자 무릎 담요</span>
                  <span>수량: 1개</span>
                </div>
              </Styled.Info>
              <span className="sr-only">할인</span>
              <span>15%</span>
              <span className="sr-only">배송비</span>
              <span>무료배송</span>
              <span className="sr-only">주문금액</span>
              <span>17,500원</span>
            </Styled.Product>
          </Styled.OrderList>
          <Styled.TotalPrice>
            총 주문금액 <span>46,500원</span>
          </Styled.TotalPrice>
        </section>
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
          <Styled.Shipment>
            <h2>배송정보</h2>
            <h3>주문자 정보</h3>
            <Styled.InputWrapper>
              <label htmlFor="orderer">이름</label>
              <Styled.MInput
                id="orderer"
                {...register('orderer', { required: true })}
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <label htmlFor="mobile">휴대폰</label>
              <Styled.MobileWrapper>
                <Styled.SInput type="tel" id="mobile" />
                &#45;
                <Styled.SInput type="tel" id="mobile" />
                &#45;
                <Styled.SInput type="tel" id="mobile" />
              </Styled.MobileWrapper>
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <label htmlFor="email">이메일</label>
              <Styled.MInput type="email" id="email" />
            </Styled.InputWrapper>
            <h3>배송지 정보</h3>
            <Styled.InputWrapper>
              <label htmlFor="recipient">수령인</label>
              <Styled.MInput type="text" id="recipient" />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <label htmlFor="recepient-mobile">휴대폰</label>
              <Styled.MobileWrapper>
                <Styled.SInput type="tel" id="recipient-mobile" />
                &#45;
                <Styled.SInput type="tel" id="recipient-mobile" />
                &#45;
                <Styled.SInput type="tel" id="recipient-mobile" />
              </Styled.MobileWrapper>
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <label htmlFor="address">배송주소</label>
              <Styled.Address>
                <div>
                  <Styled.SInput type="text" id="address" />
                  <Buttons.Custom
                    type="button"
                    width={15.4}
                    height={4}
                    color="green"
                    fontSize={1.6}
                    disabled={false}
                    onClick={getAddress}
                  >
                    우편번호 조회
                  </Buttons.Custom>
                </div>
                <Styled.LInput type="text" id="address" />
                <Styled.LInput type="text" id="address" />
              </Styled.Address>
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <label htmlFor="message">배송 메시지</label>
              <Styled.LInput type="text" id="message" />
            </Styled.InputWrapper>
          </Styled.Shipment>
          <Styled.Payment>
            <h2>결제 수단</h2>
            <div>
              <label htmlFor="creditCard">
                <input type="radio" name="payMethod" id="creditCard" />
                신용/체크카드
              </label>
              <label htmlFor="deposit">
                <input type="radio" name="payMethod" id="deposit" />
                무통장 입금
              </label>
              <label htmlFor="mobilePay">
                <input type="radio" name="payMethod" id="mobilePay" />
                휴대폰 결제
              </label>
              <label htmlFor="naverPay">
                <input type="radio" name="payMethod" id="naverPay" />
                네이버페이
              </label>
              <label htmlFor="kakaoPay">
                <input type="radio" name="payMethod" id="kakaoPay" />
                카카오페이
              </label>
            </div>
          </Styled.Payment>
          <Styled.PayInfo>
            <h2>최종결제 정보</h2>
            <Styled.InfoWrapper>
              <dl>
                <div>
                  <dt>&#45; 상품금액</dt>
                  <dd>
                    <span>46,500</span>원
                  </dd>
                </div>
                <div>
                  <dt>&#45; 할인금액</dt>
                  <dd>
                    <span>0</span>원
                  </dd>
                </div>
                <div>
                  <dt>&#45; 배송비</dt>
                  <dd>
                    <span>0</span>원
                  </dd>
                </div>
                <div>
                  <dt>&#45; 결제금액</dt>
                  <dd>
                    <span>46,500</span>원
                  </dd>
                </div>
              </dl>
              <div>
                <input type="checkbox" name="agreement" id="agreement" />
                <label htmlFor="agreement">
                  주문 내용을 확인하셨으며, 정보 제공 등에 동의합니다.
                </label>
                <Buttons.Custom
                  type="submit"
                  width={22}
                  height={6.8}
                  color="green"
                  disabled
                  fontSize={2.4}
                >
                  결제하기
                </Buttons.Custom>
              </div>
            </Styled.InfoWrapper>
          </Styled.PayInfo>
        </Styled.Form>
      </Styled.Container>
    </DefaultContainerPage>
  );
}
