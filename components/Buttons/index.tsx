import { ReactNode } from 'react';
import { S_L, S_M, S_MS, S_S, S_TAB, S_MENU } from './styled';

type IButtonProps = {
  children: ReactNode;
};

type ILButtonProps = IButtonProps & {
  disabled: boolean;
};

type IMButtonProps = IButtonProps & {
  disabled: boolean;
  color: 'green' | 'dark' | 'white';
};
type ITabButtonProps = IButtonProps & {
  isActive: boolean;
};
type IMenuButtonProps = IButtonProps & {
  isActive: boolean;
};

export function L({ disabled, children }: ILButtonProps) {
  return <S_L disabled={disabled}>{children}</S_L>;
}

export function M({ disabled, color, children }: IMButtonProps) {
  return (
    <S_M disabled={disabled} color={color}>
      {children}
    </S_M>
  );
}

export function MS({ children }: IButtonProps) {
  return <S_MS>{children}</S_MS>;
}

export function S({ children }: IButtonProps) {
  return <S_S>{children}</S_S>;
}

export function Tab({ isActive, children }: ITabButtonProps) {
  return <S_TAB {...isActive}>{children}</S_TAB>;
}

export function Menu({ isActive, children }: IMenuButtonProps) {
  return <S_MENU {...isActive}>{children}</S_MENU>;
}
