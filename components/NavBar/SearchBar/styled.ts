import styled from 'styled-components';

export const SearchForm = styled.form`
  flex: 1;
  position: relative;
  max-width: 45rem;
  padding-left: 5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 4.6rem;
  padding: 1.3rem 5rem 1.3rem 2.2rem;
  border: 2px solid #21bf48;
  border-radius: 5rem;
  font-size: 1.6rem;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 2.2rem;
  width: 2.8rem;
  height: 2.8rem;
  transform: translateY(-50%);
`;
