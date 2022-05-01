import { nanoid } from 'nanoid';
import React, { useCallback, useState } from 'react';
import Check from 'public/images/icon-check.svg';
import { COLOR } from '@shared/constants';
import { UseFormRegisterReturn } from 'react-hook-form';
import formatPrice from '@utils/formatPrice';
import * as Styled from './styled';

interface InputProps {
  width?: number;
  minLength?: number;
  maxLength?: number;
  hook?: UseFormRegisterReturn;
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
  isValid?: boolean;
}

interface TextAreaProps {
  maxLength: number;
  name?: string;
  hook?: UseFormRegisterReturn;
  minHeight?: number;
  placeholder?: string;
  defaultValue?: string;
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
  name,
  isValid
}: TextInputBoxProps) {
  const [value, setValue] = useState<string>('');
  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
      hook?.onChange(e);
    },
    [hook]
  );
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
        value={option === 'unit' ? formatPrice(value) : value}
        placeholder={placeholder}
        hasOption={option !== 'none'}
        {...hook}
        onChange={handleChange}
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
              <Styled.Limit
                bottom="50%"
                right="2.6rem"
              >{`${value.length}/${maxLength}`}</Styled.Limit>
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

export function TextAreaComponent({
  maxLength,
  name,
  hook,
  minHeight,
  placeholder,
  defaultValue = ''
}: TextAreaProps) {
  const [value, setValue] = useState<string>(defaultValue);
  const autoResize = useCallback(() => {
    const textarea = document.getElementById('textarea');
    if (!textarea) {
      return;
    }
    textarea.style.height = 'auto';
    const height = textarea.scrollHeight;
    textarea.style.height = `${height / 10}rem`;
  }, []);

  const handleChange = useCallback(
    (e) => {
      setValue(e.target.value);
      hook?.onChange(e);
    },
    [hook]
  );

  return (
    <Styled.Box>
      <Styled.TextArea
        id="textarea"
        name={name}
        maxLength={maxLength}
        minHeight={minHeight}
        placeholder={placeholder}
        value={value}
        {...hook}
        onChange={handleChange}
        onKeyDown={autoResize}
        onKeyUp={autoResize}
      />
      <Styled.Limit
        bottom="3rem"
        right="1rem"
      >{`${value.length}/${maxLength}`}</Styled.Limit>
    </Styled.Box>
  );
}

TextInputComponent.defaultProps = {
  width: '100%',
  maxLength: '',
  minLength: '',
  className: '',
  hook: null,
  name: ''
};

TextInputBoxComponent.defaultProps = {
  width: '100%',
  maxLength: '',
  minLength: '',
  labelName: null,
  placeholder: '',
  option: 'none',
  validationMsg: '',
  unit: '',
  type: 'text',
  hook: null,
  name: '',
  isValid: false
};

TextAreaComponent.defaultProps = {
  name: '',
  hook: null,
  minHeight: 10,
  placeholder: ''
};

export const TextInput = React.memo(TextInputComponent);
export const TextInputBox = React.memo(TextInputBoxComponent);
export const TextArea = React.memo(TextAreaComponent);
