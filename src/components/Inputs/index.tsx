import { nanoid } from 'nanoid';
import React, { useCallback, useState } from 'react';
import Check from 'public/images/icon-check.svg';
import { COLOR } from '@shared/constants';
import * as Styled from './styled';

interface InputProps {
  width?: number;
  minLength?: number;
  maxLength?: number;
  hook?: object;
  name?: string;
}

interface TextInputProps extends InputProps {
  placeholder: string;
  className?: string;
}

interface TextInputBoxProps extends InputProps {
  labelName?: string | null;
  placeholder?: string;
  option?: string;
  validationMsg?: string;
  unit?: string;
  type?: string;
}

function TextInputComponent({
  width,
  placeholder,
  className,
  hook
}: TextInputProps) {
  const id = nanoid();
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <Styled.Input
        className={className}
        type="text"
        id={id}
        placeholder={placeholder}
        width={width}
        // maxLength={maxLength}
        {...hook}
      />
    </>
  );
}

export function TextInputBoxComponent({
  width,
  minLength,
  maxLength,
  labelName,
  placeholder,
  option,
  validationMsg,
  unit,
  type,
  hook,
  name
}: TextInputBoxProps) {
  const [value, setValue] = useState<string>('');
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const isValid: boolean = false;
  const id = nanoid();

  return (
    <Styled.Box width={width}>
      {labelName && <Styled.Label htmlFor={id}>{labelName}</Styled.Label>}
      <Styled.InputBox
        type={option === 'password' ? 'password' : type}
        id={id}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        hasOption={option !== 'none'}
        onChange={handleChange}
        {...hook}
      />
      {validationMsg && (
        <Styled.ValidationMsg option={option}>
          {validationMsg}
        </Styled.ValidationMsg>
      )}
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
          case 'unit': {
            return <Styled.Unit>{unit}</Styled.Unit>;
          }
          default:
            return null;
        }
      })()}
    </Styled.Box>
  );
}

TextInputComponent.defaultProps = {
  width: '100%',
  maxLength: '',
  className: ''
};

TextInputBoxComponent.defaultProps = {
  width: '100%',
  maxLength: '',
  labelName: null,
  placeholder: '',
  option: 'none',
  validationMsg: '',
  unit: '',
  type: 'text'
};

export const TextInput = React.memo(TextInputComponent);
export const TextInputBox = React.memo(TextInputBoxComponent);
