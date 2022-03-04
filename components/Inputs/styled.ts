import styled from 'styled-components';
import { COLOR } from 'shared/constants';
import ImageWrapper from 'components/utils/ImageWrapper';

interface inputProps {
  width?: string;
}

interface checkProps {
  isValid: boolean;
}

export const Input = styled.input<inputProps>`
  width: ${({ width }) => width};
  height: 6rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${COLOR.greyC4};
  font-size: 1.6rem;
  &:focus {
    border-bottom: 1px solid ${COLOR.accentColor};
  }
`;

export const Box = styled.div<inputProps>`
  position: relative;
  width: ${({ width }) => width};
`;

export const InputBox = styled.input<inputProps>`
  width: 100%;
  height: 5.4rem;
  padding: 2rem 7rem 2rem 1.6rem;
  margin-top: 0.8rem;
  border: 1px solid ${COLOR.greyC4};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  &:focus {
    border: 1px solid ${COLOR.accentColor};
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  color: ${COLOR.grey76};
`;

export const Limit = styled.p`
  position: absolute;
  bottom: 1.8rem;
  right: 1.6rem;
  font-weight: 300;
  font-size: 1.6rem;
  color: ${COLOR.greyC4};
`;

export const CheckWrapper = styled(ImageWrapper)<checkProps>`
  position: absolute;
  bottom: 1.3rem;
  right: 1.6rem;
  & circle {
    fill: ${({ isValid }) => (isValid ? COLOR.accentColor : COLOR.greyF2)};
  }
`;
