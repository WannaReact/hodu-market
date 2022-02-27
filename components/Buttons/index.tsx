import { ReactNode } from 'react';
import { S_L, S_M } from './styled';

interface IButtonProps {
  children: ReactNode;
  disabled: boolean;
}

export function L({ disabled, children }: IButtonProps) {
  return <S_L disabled={disabled}>{children}</S_L>;
}

export function M({ disabled, children }: IButtonProps) {
  return <S_M disabled={disabled}>{children}</S_M>;
}
