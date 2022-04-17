import styled from 'styled-components';
import { COLOR, NAV_WIDTH } from '@shared/constants';

export const Container = styled.div`
  display: flex;
  margin-top: 3rem;
`;

export const NavBar = styled.ul`
  & li {
    margin-bottom: 1rem;
  }
`;

export const Content = styled.section`
  flex: 1 0 ${NAV_WIDTH - 23}rem;
  margin-left: 3rem;
  border: 0.1rem solid ${COLOR.greyC4};
  border-radius: 0.5rem;
`;
