import { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { IMyOrder } from '@shared/types';
import * as Styled from './styled';
import Result from '../Result';
import api from '@utils/api';
import Product from 'src/components/Table/Product';
import StarRating from 'src/components/StarRating';
import { Buttons, Inputs } from '@components';
import { useSession } from 'next-auth/react';
import { CustomSession } from '@pages/api/auth/[...nextauth]';
import { ModalDispatchContext } from 'src/contexts/Modal/ModalContext';

interface InputValues {
  content: string;
}

function PostReview({
  data: {
    _id: orderId,
    product: { _id: productId, productName, option }
  }
}: {
  data: IMyOrder;
}) {
  const { data: session } = useSession();
  const {
    user: { id }
  } = session as CustomSession;

  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid }
  } = useForm<InputValues | FieldValues>({
    mode: 'onChange'
  });

  const [rating, setRating] = useState<number>(5);
  const { open } = useContext(ModalDispatchContext);

  const submit = async () => {
    open(<Result>⌛️ 리뷰를 등록하는 중입니다...</Result>);
    const { content } = getValues();
    const { success: reviewSuccess } = await api.post('/review', {
      product: productId,
      user: id,
      rating,
      content
    });
    const { success: orderSuccess } = await api.put(`/order/${orderId}`, {
      status: '리뷰 작성 완료'
    });

    if (reviewSuccess && orderSuccess) {
      open(<Result>✅ 리뷰가 정상적으로 등록되었습니다.</Result>);
    } else {
      open(<Result>❌ 리뷰 등록에 실패했습니다!</Result>);
    }
  };

  return (
    <Styled.Container>
      <h2>리뷰 작성</h2>
      <Product title={productName} option={option} />
      <Styled.Form id="review-form" onSubmit={handleSubmit(submit)}>
        <Styled.Wrapper>
          <Styled.Label>평점</Styled.Label>
          <StarRating rating={rating} setRating={setRating} readOnly={false} />
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Styled.Label>리뷰 내용</Styled.Label>
          <Inputs.TextArea
            maxLength={1000}
            placeholder="리뷰를 작성해주세요"
            hook={register('content', {
              required: true,
              minLength: 10,
              maxLength: 1000
            })}
          />
          <Buttons.Custom
            type="submit"
            form="review-form"
            width={15.4}
            height={4}
            color="green"
            disabled={!isValid}
            fontSize={1.6}
          >
            리뷰 등록
          </Buttons.Custom>
        </Styled.Wrapper>
      </Styled.Form>
    </Styled.Container>
  );
}

export default PostReview;
