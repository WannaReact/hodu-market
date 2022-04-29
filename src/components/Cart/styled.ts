import styled, { css } from 'styled-components';

interface ItemProps {
  flex: number;
  center?: boolean;
  columnDirection?: boolean;
}

interface CheckBoxProps {
  checked: boolean;
}

export const SectionItem = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  padding: 22px 0px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ContainerCheckBox = styled.div`
  flex-basis: 5%;
`;

export const ContainerCheck = styled.div<CheckBoxProps>`
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #21bf48;
  border-radius: 50%;
  margin: 0 auto;

  ${(props) =>
    props.checked &&
    css`
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 12px;
        height: 12px;
        background-color: #21bf48;
        border-radius: 50%;
      }
    `}
`;

export const ContainerItem = styled.div<ItemProps>`
  font-size: 18px;
  flex-basis: ${(props) => props.flex}%;
  display: flex;
  ${(props) => props.center && 'justify-content : center'};
  ${(props) =>
    props.columnDirection && 'flex-direction:column; align-items: center'};
`;

export const ImgItem = styled.img`
  display: block;
  width: 160px;
  height: 160px;
  border-radius: 10px;
`;

export const ContainerText = styled.div`
  margin-left: 36px;
`;

export const TextCategory = styled.em`
  font-size: 14px;
  color: #767676;
  display: inline-block;
  margin: 10px 0;
`;

export const TextItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 40px;
`;

export const TextDelivery = styled.em`
  font-size: 14px;
  color: #767676;
`;

export const BtnControl = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid #c4c4c4;
  color: black;
  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const BtnCount = styled.button`
  width: 50px;
  height: 50px;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  color: black;
`;

export const TextFinalItemPrice = styled.p`
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
  color: red;
`;

export const AreaDelete = styled.span`
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 22px;
  background: url(images/icon-delete.png) no-repeat;
  background-size: 100%;
  cursor: pointer;
`;
