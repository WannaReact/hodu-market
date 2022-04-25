import styled from 'styled-components';

export const ProductContainer = styled.section`
  display: grid;
  align-content: space-around;
  grid-template-columns: repeat(3, minmax(380px, auto));
  gap: 0.8rem 0;
`;
