import styled, { css } from 'styled-components';

interface BarProps {
  flex: number;
}

interface CheckBoxProps {
  checked: boolean;
}

export const PageTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding: 30px 0px;
`;

export const SectionBar = styled.section`
  display: flex;
  padding: 22px 0px 22px;
  margin-bottom: 35px;
  border-radius: 10px;
  background-color: #e5e5e5;
  text-align: center;
`;

export const ContainerCheckBox = styled.div`
  flex-basis: 5%;
`;

export const ContainerCheck = styled.div<CheckBoxProps>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin: 0 auto;

  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 12px;
        height: 12px;
        background-color: #21bf48;
        border-radius: 50%;
      }
    `}
`;

export const TextBar = styled.p<BarProps>`
  font-size: 18px;
  flex-basis: ${(props) => props.flex}%;
`;

export const SectionPrice = styled.section`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 46px 0;
  margin-top: 80px;
  background-color: #e5e5e5;
`;

export const ContainerTextBox = styled.div`
  width: 320px;
  text-align: center;
`;

export const TextPriceTitle = styled.p`
  font-size: 16px;
  margin-bottom: 18px;
`;

export const TextPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  &::after {
    content: '원';
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    vertical-align: middle;
  }
`;

export const TextOperator = styled.span`
  display: inline-block;
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 50%;
  color: #e5e5e5;
  font-size: 35px;
  text-align: center;
`;

export const TextExpectTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const TextExpectPrice = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: red;
  &::after {
    content: '원';
    display: inline-block;
    font-size: 18px;
    font-weight: 400;
    vertical-align: middle;
  }
`;

export const ConTainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 40px;
`;
