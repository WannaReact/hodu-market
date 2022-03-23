import Image from 'next/image';
import * as Styled from './styled';

interface IProductCardProps {
  title: string;
  img: string;
  price: number;
}
function index({ title, img, price }: IProductCardProps) {
  return (
    <Styled.CardWrapper>
      <Image src={img} width={380} height={380} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Price>
        {price}
        <span>원</span>
      </Styled.Price>
    </Styled.CardWrapper>
  );
}

export default index;
