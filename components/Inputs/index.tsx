import { nanoid } from 'nanoid';
import React, { useCallback, useState } from 'react';
import Check from 'public/images/icon-check.svg';
import { COLOR } from 'shared/constants';
import * as Styled from './styled';

interface InputProps {
  width?: string;
  maxLength?: number;
}

interface TextInputProps extends InputProps {
  placeholder: string;
}

interface TextInputBoxProps extends InputProps {
  labelName: string;
  option?: string;
}

function TextInputComponent({ width, maxLength, placeholder }: TextInputProps) {
  const id = nanoid();
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <Styled.Input
        type="text"
        id={id}
        placeholder={placeholder}
        width={width}
        maxLength={maxLength}
      />
    </>
  );
}

export function TextInputBoxComponent({
  width,
  maxLength,
  labelName,
  option
}: TextInputBoxProps) {
  const [value, setValue] = useState<string>('');
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  // 추후에 react-hook-form 적용하면 변경 필요
  const isValid: boolean = false;
  const id = nanoid();
  return (
    <Styled.Box width={width}>
      <Styled.Label htmlFor={id}>{labelName}</Styled.Label>
      <Styled.InputBox
        type={option === 'password' ? 'password' : 'text'}
        id={id}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
      />
      {(() => {
        switch (option) {
          case 'limit':
            return (
              <Styled.Limit>{`${value.length}/${maxLength}`}</Styled.Limit>
            );
          case 'password':
            return (
              <Styled.CheckWrapper
                width="2.8rem"
                height="2.8rem"
                imgStyle={`
                  & circle {
                    fill: ${isValid ? COLOR.accentColor : COLOR.greyF2};
                  }
                `}
              >
                <Check viewBox="0 0 28 28" />
              </Styled.CheckWrapper>
            );
          default:
            return null;
        }
      })()}
    </Styled.Box>
  );
}

TextInputComponent.defaultProps = {
  width: '100%',
  maxLength: ''
};

TextInputBoxComponent.defaultProps = {
  width: '100%',
  maxLength: '',
  option: 'none'
};

export const TextInput = React.memo(TextInputComponent);
export const TextInputBox = React.memo(TextInputBoxComponent);
