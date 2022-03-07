import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 10rem 7rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    font-size: 3.6rem;
    font-weight: bold;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  margin-top: 3rem;
`;

export const NavBar = styled.ul`
  & li {
    margin-bottom: 1rem;
  }
`;

export const Content = styled.section`
  flex: 1;
  margin-left: 3rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.5rem;
  height: 110rem;
`;
