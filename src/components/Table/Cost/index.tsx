import formatPrice from '@utils/formatPrice';
import React from 'react';
import * as Styled from './styled';

interface CostProps {
  cost: number;
  count: number;
}

function Cost({ cost, count }: CostProps) {
  return (
    <div>
      <Styled.CostText>{formatPrice(cost)}원</Styled.CostText>
      <Styled.CountText>{count}개</Styled.CountText>
    </div>
  );
}

export default React.memo(Cost);
