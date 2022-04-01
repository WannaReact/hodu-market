import ImageWrapper from '@utils/ImageWrapper';
import Image from 'next/image';
import * as Styled from './styled';

interface ICommentItemProps {
  author: string;
  authorImg: string;
  content: string;
  date: string;
}

export function CommentItem({
  author,
  authorImg,
  content,
  date
}: ICommentItemProps) {
  return (
    <Styled.CommentItem>
      <Styled.Author>
        <ImageWrapper width="4rem" height="4rem" imgStyle="border-radius: 50%;">
          <Image src={authorImg} layout="fill" />
        </ImageWrapper>
        <span>{author}</span>
      </Styled.Author>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Date>{date}</Styled.Date>
    </Styled.CommentItem>
  );
}
