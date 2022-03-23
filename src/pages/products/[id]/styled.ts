import styled from 'styled-components';
import { COLOR } from '../../../shared/constants';

export const Container = styled.main`
  width: 128rem;
`;

export const ProductHeader = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14rem;
`;

export const ProductImage = styled.div`
  width: 60rem;
  height: 60rem;
`;

export const ProductSummary = styled.div`
  width: 63rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 400;
  margin-bottom: 1.7rem;
`;

export const ProductPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  span {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;

export const Shipment = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${COLOR.grey76};
  margin-bottom: 1.8rem;
`;

export const Count = styled.div`
  height: 11rem;
  border-top: 0.2rem solid ${COLOR.greyC4};
  border-bottom: 0.2rem solid ${COLOR.greyC4};
  margin-bottom: 3.2rem;
`;
export const CountNPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2.2rem;
  div {
    display: flex;
    align-items: center;
  }
`;

export const TotalCount = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 400;
  color: ${COLOR.grey76};
  padding-right: 1.2rem;
  border-right: 0.1rem solid ${COLOR.greyC4};
  margin-right: 1.2rem;
  span {
    font-weight: 700;
    color: ${COLOR.accentColor};
  }
`;

export const TotalPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${COLOR.accentColor};
  span {
    font-size: 3.6rem;
    font-weight: 700;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabSection = styled.section`
  position: relative;
  margin-bottom: 8rem;
`;
export const TabMenu = styled.section`
  position: sticky;
  top: 0;
`;
