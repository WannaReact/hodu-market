import { Buttons } from '@components';
import { dateConverter } from '@utils/dateConverter';
import React, { useContext } from 'react';
import StarRating from 'src/components/StarRating';
import * as Styled from './styled';
import { IMyReview } from '@shared/types';
import EditReview from 'src/components/Modals/CustomModal/Contents/EditReview';
import api from '@utils/api';
import Result from 'src/components/Modals/CustomModal/Contents/Result';
import { ModalDispatchContext } from 'src/contexts/Modal/ModalContext';

function Review({ data }: { data: IMyReview }) {
  const { _id: reviewId, createdAt, rating, content } = data;
  const { open } = useContext(ModalDispatchContext);

  const deleteReview = async () => {
    const { success } = await api.delete(`/review/${reviewId}`);
    if (success) {
      open(<Result>✅ 리뷰가 정상적으로 삭제되었습니다.</Result>);
    } else {
      open(<Result>❌ 리뷰 삭제에 실패했습니다!</Result>);
    }
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Date>{dateConverter(createdAt)}</Styled.Date>
        <StarRating rating={rating} readOnly />
        <p>{content}</p>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Buttons.Modal
          width={10}
          height={4}
          fontSize={1.6}
          color="white"
          disabled={false}
          content={<EditReview data={data} />}
        >
          수정
        </Buttons.Modal>
        <Buttons.Custom
          width={10}
          height={4}
          fontSize={1.6}
          color="red"
          disabled={false}
          onClick={deleteReview}
        >
          삭제
        </Buttons.Custom>
      </Styled.Wrapper>
    </Styled.Container>
  );
}

export default React.memo(Review);
