import { useState } from 'react';
import Image from 'next/image';
import ImageWrapper from '@utils/ImageWrapper';
import StarRating from '../StarRating';
import { CommentList } from '../CommentList';
import * as Styled from './styled';

interface IReviewItemProps {
  reviewId: number;
  author: string;
  authorImg: string;
  rating: number;
  date: string;
  content: string;
  reviewImg: string;
}

export function ReviewItem({
  reviewId,
  author,
  authorImg,
  rating,
  date,
  content,
  reviewImg
}: IReviewItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Styled.ReviewContainer>
      <Styled.ReviewInfo>
        <ImageWrapper width="4rem" height="4rem" imgStyle="border-radius: 50%;">
          <Image src={authorImg} layout="fill" />
        </ImageWrapper>
        <div>
          <Styled.RatingWrapper>
            <StarRating rating={rating} readOnly />
          </Styled.RatingWrapper>
          <Styled.Author>{author}</Styled.Author>
          <Styled.Date>{date}</Styled.Date>
        </div>
      </Styled.ReviewInfo>
      <Styled.ReviewContent isOpen={isOpen}>
        <Styled.ReviewText isOpen={isOpen}>{content}</Styled.ReviewText>
        {isOpen && (
          <>
            <ImageWrapper width="40rem" height="40rem">
              <Image src={reviewImg} layout="fill" />
            </ImageWrapper>
            <CommentList reviewId={reviewId} />
          </>
        )}
        <Styled.ExpansionButton onClick={handleClick} isOpen={isOpen}>
          {isOpen ? '접 기' : '더보기'}
        </Styled.ExpansionButton>
      </Styled.ReviewContent>
      {!isOpen && (
        <ImageWrapper width="8rem" height="8rem">
          <Image src={reviewImg} layout="fill" />
        </ImageWrapper>
      )}
    </Styled.ReviewContainer>
  );
}
