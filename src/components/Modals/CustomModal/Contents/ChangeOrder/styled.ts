import { COLOR } from '@shared/constants';
import styled from 'styled-components';

export const Form = styled.form`
  overflow: hidden;
  font-size: 1.6rem;
  h2 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 500;
    padding-bottom: 1.5rem;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.6rem;
    border-bottom: 2px solid ${COLOR.greyC4};
    margin-top: 3.8rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 5.6rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid ${COLOR.greyC4};
  label {
    display: inline-block;
    width: 17rem;
    height: 100%;
  }
`;

export const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35rem;
`;

export const Shipment = styled.section`
  h2 {
    font-size: 2.4rem;
    line-height: 3.4rem;
    font-weight: 500;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid ${COLOR.greyC4};
  }
`;

export const Input = styled.input`
  height: 4rem;
  font-size: 1.6rem;
  padding-left: 1rem;
  border: 1px solid ${COLOR.greyC4};
`;
export const SInput = styled(Input)`
  width: 10rem;
`;
export const MInput = styled(Input)`
  width: 35rem;
`;
export const LInput = styled(Input)`
  width: 80rem;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  div:first-child {
    input {
      margin-right: 1rem;
    }
  }
  div:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export const Error = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2;
  color: ${COLOR.red};
  margin-left: 1rem;
  /* word-break: keep-all; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;
`;
