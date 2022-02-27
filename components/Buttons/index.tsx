import { MouseEventHandler, ReactNode } from 'react';
import { S_L, S_M, S_MS, S_S, S_TAB, S_MENU, S_BADGE } from './styled';

interface IButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

interface ILButtonProps extends IButtonProps {
  disabled: boolean;
}

interface IMButtonProps extends IButtonProps {
  disabled: boolean;
  color: 'green' | 'dark' | 'white';
}

interface IMSButtonProps extends IButtonProps {
  color: 'green' | 'white';
}

interface ISButtonProps extends IButtonProps {
  color: 'green' | 'white';
}

interface ITabButtonProps extends IButtonProps {
  isActive: boolean;
}

interface IMenuButtonProps extends IButtonProps {
  isActive: boolean;
  badgeCount: number | undefined;
}

export function L({ onClick, disabled, children }: ILButtonProps) {
  return (
    <S_L onClick={onClick} disabled={disabled}>
      {children}
    </S_L>
  );
}

export function M({ onClick, disabled, color, children }: IMButtonProps) {
  return (
    <S_M onClick={onClick} disabled={disabled} color={color}>
      {children}
    </S_M>
  );
}

export function MS({ onClick, color, children }: IMSButtonProps) {
  return (
    <S_MS onClick={onClick} color={color}>
      {children}
    </S_MS>
  );
}

export function S({ onClick, color, children }: ISButtonProps) {
  return (
    <S_S onClick={onClick} color={color}>
      {children}
    </S_S>
  );
}

export function Tab({ onClick, isActive, children }: ITabButtonProps) {
  return (
    <S_TAB onClick={onClick} isActive={isActive}>
      {children}
    </S_TAB>
  );
}

export function Menu({
  onClick,
  isActive,
  badgeCount,
  children
}: IMenuButtonProps) {
  return (
    <S_MENU onClick={onClick} isActive={isActive}>
      {children}
      {!!badgeCount && <S_BADGE>{badgeCount}</S_BADGE>}
    </S_MENU>
  );
}

L.defaultProps = {
  onClick: () => {}
};
M.defaultProps = {
  onClick: () => {}
};
MS.defaultProps = {
  onClick: () => {}
};
S.defaultProps = {
  onClick: () => {}
};
Tab.defaultProps = {
  onClick: () => {}
};
Menu.defaultProps = {
  onClick: () => {}
};
