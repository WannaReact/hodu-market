import { ChangeEvent, useState } from 'react';
import PlusIcon from 'public/images/icon-plus-line.svg';
import MinusIcon from 'public/images/icon-minus-line.svg';
import * as Styled from './styled';

interface IPriceCalculatorProps {
  price: number;
}

export function PriceCalculator({ price }: IPriceCalculatorProps) {
  const [totalCount, setTotalCount] = useState(1);
  const totalPrice = price * totalCount;

  const increaseCount = () => {
    if (totalCount === 100) {
      return;
    }
    setTotalCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (totalCount === 1) {
      return;
    }
    setTotalCount((prevCount) => prevCount - 1);
  };

  const changeCount = (e: ChangeEvent<HTMLInputElement>) => {
    const count = +e.currentTarget.value;
    if (count > 100 || count < 1) {
      return;
    }
    setTotalCount(count);
  };

  return (
    <>
      <Styled.Count>
        <Styled.Counter>
          <Styled.CounterButton onClick={decreaseCount}>
            <MinusIcon />
          </Styled.CounterButton>
          <Styled.CounterInput
            type="number"
            name="totalCount"
            id="totalCount"
            value={totalCount.toString()}
            onChange={changeCount}
          />
          <Styled.CounterButton onClick={increaseCount}>
            <PlusIcon />
          </Styled.CounterButton>
        </Styled.Counter>
      </Styled.Count>
      <Styled.CountNPrice>
        <span>총 상품 금액</span>
        <div>
          <Styled.TotalCount>
            총 수량 <span>{totalCount}</span>개
          </Styled.TotalCount>
          <Styled.TotalPrice>
            <span>{totalPrice.toLocaleString()}</span>원
          </Styled.TotalPrice>
        </div>
      </Styled.CountNPrice>
    </>
  );
}
