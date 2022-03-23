import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 10rem);
  margin-top: 10rem;
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e5e5;
  padding: 3rem;
  border-radius: 8px;
  width: 55rem;
  margin-bottom: 1.3rem;
`;
