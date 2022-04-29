import React, { MouseEventHandler } from 'react';
import * as Styled from './styled';

interface ContainerProps {
  children: React.ReactNode;
}

interface ButtonSelectProps {
  labelName: string;
  contentSelect: string;
  isSelect: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface ListBoxProps {
  children: React.ReactNode;
  isSelect: boolean;
}

interface ListProps {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLElement>;
}

export function SelectContainer({ children }: ContainerProps) {
  return <Styled.SelectContainer>{children}</Styled.SelectContainer>;
}

export function SelectButton({
  labelName,
  contentSelect,
  isSelect,
  onClick
}: ButtonSelectProps) {
  return (
    <Styled.Box>
      <Styled.Label>{labelName}</Styled.Label>
      <Styled.SelectButton isSelect={isSelect} onClick={onClick}>
        {contentSelect}
      </Styled.SelectButton>
    </Styled.Box>
  );
}

export function SelectBox({ children, isSelect }: ListBoxProps) {
  return <Styled.ListBox isSelect={isSelect}>{children}</Styled.ListBox>;
}

export function SelectList({ children, onClick }: ListProps) {
  return <Styled.List onClick={onClick}>{children}</Styled.List>;
}
