import { useEffect, useState } from 'react';
import { IMyOrder } from '@shared/types';
import Result from '../Result';
import api from '@utils/api';

function ConfirmOrder({ data: { _id: orderId, status } }: { data: IMyOrder }) {
  const [apiStatus, setApiStatus] = useState<string>('loading');

  useEffect(() => {
    (async () => {
      const { success: isSuccess } = await api.put(`/order/${orderId}`, {
        status: '구매확정'
      });
      setApiStatus(isSuccess ? 'success' : 'fail');
    })();
  }, [orderId, status]);

  switch (apiStatus) {
    case 'loading':
      return <Result>⌛️ 처리중입니다...</Result>;
    case 'success':
      return <Result>✅ 구매확정 되었습니다.</Result>;
    case 'fail':
    default:
      return <Result>❌ 오류가 발생하였습니다. 다시 시도해주세요!</Result>;
  }
}

export default ConfirmOrder;
