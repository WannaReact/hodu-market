import styled, { css } from 'styled-components';
import { COLOR } from '@shared/constants';
import ImageWrapper from '@utils/ImageWrapper';

interface validationProps {
  option?: string;
}

interface inputProps {
  width?: number;
  hasOption?: boolean;
}

interface TextAreaProps {
  minHeight?: number;
}

interface LimitProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const Input = styled.input<inputProps>`
  width: ${({ width }) => width}rem;
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
  width: ${({ width }) => width}rem;
`;

export const InputBox = styled.input<inputProps>`
  width: 100%;
  height: 5.4rem;
  padding: 2rem 4rem 2rem 1.6rem;
  margin-top: 0.8rem;
  border: 1px solid ${COLOR.greyC4};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  &:focus {
    border: 1px solid ${COLOR.accentColor};
  }
  &:focus + .unit {
    border: 1px solid ${COLOR.accentColor};
    background-color: ${COLOR.accentColor};
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${COLOR.grey76};
`;

export const Limit = styled.p<LimitProps>`
  position: absolute;
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
    ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
  transform: translateY(100%);
  font-weight: 300;
  font-size: 1.6rem;
  color: ${COLOR.greyC4};
  user-select: none;
`;

export const ValidationMsg = styled.p<validationProps>`
  ${(props) =>
    props.option === 'password' ? 'right: 5.5rem;' : 'right: 1.5rem;'}
  position: absolute;
  top: 50%;
  /* transform: translateY(100%); */

  font-weight: 300;
  font-size: 1rem;
  vertical-align: top;
  color: ${COLOR.greyC4};
`;

export const CheckWrapper = styled(ImageWrapper)`
  position: absolute;
  bottom: 1.3rem;
  right: 1.6rem;
`;

export const Unit = styled.div.attrs({ className: 'unit' })`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 5.4rem;
  height: 5.4rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: ${COLOR.greyC4};
  font-size: 1.6rem;
  color: ${COLOR.white};
`;

export const TextArea = styled.textarea<TextAreaProps>`
  display: inline-block;
  overflow: hidden;
  width: 100%;
  padding: 0.5rem 0.5rem 3rem 0.5rem;
  border: 0.1rem solid ${COLOR.greyC4};
  border-radius: 0.75rem;
  font-size: 1.6rem;
  resize: none;

  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: ${minHeight}rem;
    `}

  &:focus {
    outline: 0;
    border: 0.2rem solid ${COLOR.accentColor};
  }
`;
