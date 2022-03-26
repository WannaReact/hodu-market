import { COLOR } from '@shared/constants';
import styled from 'styled-components';

export const ProductImage = styled.div``;

export const CurrentImage = styled.div`
  width: 60rem;
  height: 60rem;
`;

export const ImageSlider = styled.div`
  width: 60rem;
  height: 60rem;
  margin-bottom: 1.5rem;
`;
export const PrevButton = styled.button``;
export const NextButton = styled.button``;
export const Thumbnails = styled.div`
  width: 39rem;
  display: flex;
  gap: 1rem;
  & > div:hover {
    outline: 2px solid ${COLOR.accentColor};
  }
`;
