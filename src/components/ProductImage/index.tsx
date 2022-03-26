import ImageWrapper from '@utils/ImageWrapper';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import * as Styled from './styled';

interface IProductImageProps {
  productImages: string[];
}

export function ProductImage({ productImages }: IProductImageProps) {
  return (
    <Styled.ProductImage>
      <Styled.ImageSlider>
        <ImageWrapper width="60rem" height="60rem">
          <Image src={productImages[0]} layout="fill" />
        </ImageWrapper>
        <Styled.PrevButton />
        <Styled.NextButton />
      </Styled.ImageSlider>
      <Styled.Thumbnails>
        {productImages.map((img) => (
          <ImageWrapper key={nanoid()} width="7rem" height="7rem">
            <Image src={img} layout="fill" />
          </ImageWrapper>
        ))}
      </Styled.Thumbnails>
    </Styled.ProductImage>
  );
}
