import { MouseEventHandler, ReactNode } from 'react';
import * as Styled from './styled';

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
    <Styled.L onClick={onClick} disabled={disabled}>
      {children}
    </Styled.L>
  );
}

export function M({ onClick, disabled, color, children }: IMButtonProps) {
  return (
    <Styled.M onClick={onClick} disabled={disabled} color={color}>
      {children}
    </Styled.M>
  );
}

export function MS({ onClick, color, children }: IMSButtonProps) {
  return (
    <Styled.MS onClick={onClick} color={color}>
      {children}
    </Styled.MS>
  );
}

export function S({ onClick, color, children }: ISButtonProps) {
  return (
    <Styled.S onClick={onClick} color={color}>
      {children}
    </Styled.S>
  );
}

export function Tab({ onClick, isActive, children }: ITabButtonProps) {
  return (
    <Styled.TAB onClick={onClick} isActive={isActive}>
      {children}
    </Styled.TAB>
  );
}

export function Menu({
  onClick,
  isActive,
  badgeCount,
  children
}: IMenuButtonProps) {
  return (
    <Styled.MENU onClick={onClick} isActive={isActive}>
      {children}
      {!!badgeCount && <Styled.BADGE>{badgeCount}</Styled.BADGE>}
    </Styled.MENU>
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
