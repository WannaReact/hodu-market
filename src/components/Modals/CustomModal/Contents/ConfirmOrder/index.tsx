import { useEffect, useState } from 'react';
import { IMyOrder } from '@shared/types';
import * as Styled from './styled';
import Result from '../Result';
import api from '@utils/api';

function ConfirmOrder({ data: { _id: orderId, status } }: { data: IMyOrder }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { success: isSuccess } = await api.put(`/order/${orderId}`, {
        status: '구매확정'
      });
      setLoading(false);
      setSuccess(isSuccess);
    })();
  }, [orderId, status]);

  if (loading) {
    return <Styled.Container>⌛️ 처리중입니다...</Styled.Container>;
  }

  if (success) {
    return <Result>✅ 구매확정 되었습니다.</Result>;
  }

  return <Result>❌ 오류가 발생하였습니다. 다시 시도해주세요!</Result>;
}

export default ConfirmOrder;
