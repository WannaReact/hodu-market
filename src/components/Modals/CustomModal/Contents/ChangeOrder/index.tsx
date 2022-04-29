import { Buttons } from '@components';
import { IMyOrder } from '@shared/types';
import api from '@utils/api';
import { KOREAN_NAME_MATCH } from 'lib/mongoose/constants';
import { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Postcode } from 'src/components/Postcode';
import { ModalDispatchContext } from 'src/contexts/Modal/ModalContext';
import Result from '../Result';
import * as Styled from './styled';

interface IFormValues {
  orderer: string;
  ordererMobile1: string;
  ordererMobile2: string;
  ordererMobile3: string;
  email: string;
  recipient: string;
  recipientMobile1: string;
  recipientMobile2: string;
  recipientMobile3: string;
  zipcode: string;
  address: string;
  detailedAddress: string;
  message: string;
  payMethod: string;
  agreement: boolean;
}

function ChageOrder({
  data: {
    _id: orderId,
    orderGroup: {
      orderer,
      addressee,
      address: { postalCode, address1, address2 }
    }
  }
}: {
  data: IMyOrder;
}) {
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);
  const { open } = useContext(ModalDispatchContext);

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<IFormValues | FieldValues>({
    mode: 'onChange',
    defaultValues: {
      orderer,
      recipient: addressee,
      zipcode: postalCode,
      address: address1,
      detailedAddress: address2
    }
  });

  const openPostcode = () => {
    setIsPostcodeOpen(true);
  };

  const onSubmit = async () => {
    const {
      orderer: newOrderer,
      recipient,
      zipcode,
      address,
      detailedAddress
    } = getValues();
    const { success } = await api.put(`/order/${orderId}`, {
      orderer: newOrderer,
      addressee: recipient,
      address: {
        postalCode: zipcode,
        address1: address,
        address2: detailedAddress
      }
    });
    if (success) {
      open(<Result>✅ 배송정보가 정상적으로 변경되었습니다.</Result>);
    } else {
      open(<Result>❌ 배송정보 변경에 실패했습니다!</Result>);
    }
  };

  const cancelOrder = async () => {
    const { success } = await api.delete(`/order/${orderId}`);
    if (success) {
      open(<Result>✅ 주문이 정상적으로 취소되었습니다.</Result>);
    } else {
      open(<Result>❌ 주문 취소에 실패했습니다!</Result>);
    }
  };

  return (
    <Styled.Form id="change-order-form" onSubmit={handleSubmit(onSubmit)}>
      <Styled.Shipment>
        <h2>배송정보</h2>
        <h3>주문자 정보</h3>
        <Styled.InputWrapper>
          <label htmlFor="orderer">이름</label>
          <Styled.MInput
            id="orderer"
            maxLength={10}
            {...register('orderer', {
              required: true,
              minLength: 2,
              pattern: KOREAN_NAME_MATCH
            })}
          />
          {errors.orderer?.type === 'required' && (
            <Styled.Error>주문자 이름을 입력해 주시기 바랍니다.</Styled.Error>
          )}
          {errors.orderer?.type === 'minLength' && (
            <Styled.Error>이름은 2자 이상이어야 합니다.</Styled.Error>
          )}
          {errors.orderer?.type === 'pattern' && (
            <Styled.Error>한글 이름만 입력할 수 있습니다.</Styled.Error>
          )}
        </Styled.InputWrapper>
        <h3>배송지 정보</h3>
        <Styled.InputWrapper>
          <label htmlFor="recipient">수령인</label>
          <Styled.MInput
            type="text"
            id="recipient"
            maxLength={10}
            {...register('recipient', {
              required: true,
              minLength: 2,
              pattern: KOREAN_NAME_MATCH
            })}
          />
          {errors.recipient?.type === 'required' && (
            <Styled.Error>수령인 이름을 입력해 주시기 바랍니다.</Styled.Error>
          )}
          {errors.recipient?.type === 'minLength' && (
            <Styled.Error>이름은 2자 이상이어야 합니다.</Styled.Error>
          )}
          {errors.recipient?.type === 'pattern' && (
            <Styled.Error>한글 이름만 입력할 수 있습니다.</Styled.Error>
          )}
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <label htmlFor="address">배송주소</label>
          <Styled.Address>
            <div>
              <Styled.SInput
                type="text"
                id="address"
                {...register('zipcode', { required: true })}
              />
              <Buttons.Custom
                type="button"
                width={15.4}
                height={4}
                color="green"
                fontSize={1.6}
                disabled={false}
                onClick={openPostcode}
              >
                우편번호 조회
              </Buttons.Custom>
              {errors.zipcode && (
                <Styled.Error>우편번호를 입력해 주시기 바랍니다.</Styled.Error>
              )}
              {isPostcodeOpen && (
                <Postcode
                  setIsPostcodeOpen={setIsPostcodeOpen}
                  setValue={setValue}
                />
              )}
            </div>
            <div>
              <Styled.LInput
                type="text"
                id="address"
                {...register('address', { required: true })}
              />
              {errors.address && (
                <Styled.Error>주소를 입력해 주시기 바랍니다.</Styled.Error>
              )}
            </div>
            <div>
              <Styled.LInput
                type="text"
                id="address"
                {...register('detailedAddress', { required: true })}
              />
              {errors.detailedAddress && (
                <Styled.Error>상세 주소를 입력해 주시기 바랍니다.</Styled.Error>
              )}
            </div>
          </Styled.Address>
        </Styled.InputWrapper>
      </Styled.Shipment>
      <Styled.ButtonContainer>
        <Buttons.Custom
          type="submit"
          form="change-order-form"
          width={15.4}
          height={4}
          color="green"
          disabled={!isValid}
          fontSize={1.6}
        >
          배송정보 변경
        </Buttons.Custom>
        <Buttons.Custom
          type="button"
          width={15.4}
          height={4}
          color="red"
          disabled={!isValid}
          fontSize={1.6}
          onClick={cancelOrder}
        >
          주문 취소
        </Buttons.Custom>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
}

export default ChageOrder;
