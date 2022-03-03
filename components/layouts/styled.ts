import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 100px 70px;
  padding: 1px solid red;
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
  margin-top: 30px;
`;

export const NavBar = styled.ul`
  & li {
    margin-bottom: 10px;
  }
`;

export const Content = styled.section`
  flex: 1;
  margin-left: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 1100px;
`;
