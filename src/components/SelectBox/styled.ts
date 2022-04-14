import styled from 'styled-components';
import { COLOR } from '@shared/constants';

interface inputProps {
  width?: number;
}

interface ListBoxProps {
  isSelect: boolean;
}

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 5.4rem;
  padding: 2rem 7rem 2rem 1.6rem;
  margin: 0.8rem 0 1rem;
  font-size: 1.6rem;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 0.5rem;
  cursor: pointer;
  text-align: left;
  background: url('images/icon-Triangle-up.png') center right 14px no-repeat;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${COLOR.grey76};
`;

export const Box = styled.div<inputProps>`
  position: relative;
  width: ${({ width }) => width}rem;
`;

// export const InputBox = styled.input<inputProps>`
//   width: 100%;
//   height: 5.4rem;
//   padding: 2rem 7rem 2rem 1.6rem;
//   margin-top: 0.8rem;
//   border: 1px solid ${COLOR.greyC4};
//   border-radius: 0.5rem;
//   font-size: 1.6rem;
//   &:focus {
//     border: 1px solid ${COLOR.accentColor};
//   }
//   &:focus + div {
//     border: 1px solid ${COLOR.accentColor};
//     background-color: ${COLOR.accentColor};
//   }
// `;

export const ListBox = styled.ul<ListBoxProps>`
  display: ${(props) => (props.isSelect ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  border: 1px solid #c4c4c4;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  z-index: 10;
`;

export const List = styled.li`
  width: 100%;
  background-color: inherit;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  vertical-align: middle;
  line-height: 30px;

  &:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &:not(:first-of-type) {
    border-top: 1px solid #eee;
  }
`;
