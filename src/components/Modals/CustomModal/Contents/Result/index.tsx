import * as Styled from './styled';

function Result({ children }: { children: string }) {
  return <Styled.ResultModalContainer>{children}</Styled.ResultModalContainer>;
}

export default Result;
