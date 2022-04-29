import { useContext, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { IMyReview } from '@shared/types';
import * as Styled from './styled';
import Result from '../Result';
import api from '@utils/api';
import Product from 'src/components/Table/Product';
import StarRating from 'src/components/StarRating';
import { Buttons, Inputs } from '@components';
import { ModalDispatchContext } from 'src/contexts/Modal/ModalContext';

interface InputValues {
  content: string;
}

function EditReview({
  data: {
    _id: reviewId,
    product: { productName, option },
    rating: defaultRating,
    content
  }
}: {
  data: IMyReview;
}) {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { isValid }
  } = useForm<InputValues | FieldValues>({
    mode: 'onChange'
  });

  const [rating, setRating] = useState<number>(defaultRating);
  const { open } = useContext(ModalDispatchContext);

  const submit = async () => {
    open(<Result>⌛️ 리뷰를 수정하는 중입니다...</Result>);
    const { content } = getValues();
    const { success } = await api.put(`/review/${reviewId}`, {
      rating,
      content
    });
    if (success) {
      open(<Result>✅ 리뷰가 정상적으로 수정되었습니다.</Result>);
    } else {
      open(<Result>❌ 리뷰 수정에 실패하였습니다!</Result>);
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
            defaultValue={content}
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
            리뷰 수정
          </Buttons.Custom>
        </Styled.Wrapper>
      </Styled.Form>
    </Styled.Container>
  );
}

export default EditReview;
