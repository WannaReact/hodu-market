import { MouseEventHandler, ReactNode, useContext } from 'react';
import {
  ModalDispatchContext,
  ModalStateContext
} from 'src/contexts/Modal/ModalContext';
import * as Styled from './styled';

interface IButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button' | 'reset';
}

export interface ICustomButtonProps extends IButtonProps {
  width: number;
  height: 3 | 4 | 5 | 5.4 | 6 | 6.8;
  fontSize: number;
  color: 'green' | 'dark' | 'white' | 'red';
  form?: string;
  disabled: boolean;
}

interface ITabButtonProps extends Partial<IButtonProps> {
  isActive: boolean;
}

interface IMenuButtonProps extends Partial<IButtonProps> {
  isActive: boolean;
  badgeCount: number | undefined;
}

interface IModalButtonProps extends Omit<ICustomButtonProps, 'onClick'> {
  content: ReactNode;
}

export function Custom({
  form,
  disabled,
  width,
  height,
  color,
  onClick,
  fontSize,
  children,
  type
}: ICustomButtonProps) {
  return (
    <Styled.Custom
      form={form}
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      type={type}
    >
      {children}
    </Styled.Custom>
  );
}

export function Tab({ onClick, isActive, children }: ITabButtonProps) {
  return (
    <Styled.Tab onClick={onClick} isActive={isActive}>
      {children}
    </Styled.Tab>
  );
}

export function Menu({
  onClick,
  isActive,
  badgeCount,
  children
}: IMenuButtonProps) {
  return (
    <Styled.Menu onClick={onClick} isActive={isActive}>
      {children}
      {!!badgeCount && <Styled.Badge>{badgeCount}</Styled.Badge>}
    </Styled.Menu>
  );
}

export function Modal({
  form,
  disabled,
  width,
  height,
  color,
  fontSize,
  children,
  type,
  content
}: IModalButtonProps) {
  const { active } = useContext(ModalStateContext);
  const { open, close } = useContext(ModalDispatchContext);
  const handleClick = () => {
    if (active) {
      close();
    } else {
      open(content);
    }
  };
  return (
    <Styled.Custom
      form={form}
      onClick={handleClick}
      disabled={disabled}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      type={type}
    >
      {children}
    </Styled.Custom>
  );
}

Custom.defaultProps = {
  type: 'button',
  form: '',
  onClick: () => {}
};
