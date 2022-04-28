import { Buttons } from '@components';
import { IMyOrder } from '@shared/types';
import { nanoid } from 'nanoid';
import React from 'react';
import { ICustomButtonProps } from 'src/components/Buttons';
import * as Styled from './styled';

export type ButtonInfo = {
  text: string;
  color?: 'green' | 'dark' | 'white' | 'red';
  content?: (data: IMyOrder) => React.ReactNode;
  onClick?: (data: IMyOrder) => () => void;
};

interface StatusProps {
  data: IMyOrder;
  status: string;
  button: ButtonInfo | ButtonInfo[];
}

interface ButtonProps extends ICustomButtonProps {
  content: React.ReactNode;
}

function Button({
  width,
  height,
  fontSize,
  color,
  disabled,
  content,
  onClick,
  children
}: ButtonProps) {
  if (content) {
    return (
      <Buttons.Modal
        width={width}
        height={height}
        fontSize={fontSize}
        color={color}
        disabled={disabled}
        content={content}
      >
        {children}
      </Buttons.Modal>
    );
  }
  return (
    <Buttons.Custom
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Buttons.Custom>
  );
}

function Status({ data, status, button }: StatusProps) {
  return (
    <Styled.Container>
      <Styled.StatusText>{status}</Styled.StatusText>
      {Array.isArray(button) ? (
        button.map(({ text, color, content, onClick }) => {
          return (
            <Button
              key={nanoid()}
              width={10}
              height={4}
              fontSize={1.6}
              color={color ?? 'white'}
              disabled={false}
              content={content?.(data)}
              onClick={onClick?.(data)}
            >
              {text}
            </Button>
          );
        })
      ) : (
        <Button
          width={10}
          height={4}
          fontSize={1.6}
          color={button.color ?? 'white'}
          disabled={false}
          content={button.content?.(data)}
          onClick={button.onClick?.(data)}
        >
          {button.text}
        </Button>
      )}
    </Styled.Container>
  );
}

export default React.memo(Status);
