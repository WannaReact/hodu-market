import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ReviewItem } from '../ReviewItem';
import { Pagination } from '../Pagination';
import * as Styled from './styled';

interface IReviewListProps {
  reviews: {
    author: string;
    authorImg: string;
    rating: number;
    date: string;
    content: string;
    reviewImg: string;
  }[];
}

export function ReviewList({ reviews }: IReviewListProps) {
  console.log(reviews.length);
  const limit = 5;
  const [pageNum, setPageNum] = useState(1);
  const offset = (pageNum - 1) * limit;
  useEffect(() => {}, []);

  return (
    <>
      <Styled.ReviewList>
        <ul>
          {reviews.slice(offset, offset + limit).map((review) => (
            <ReviewItem key={nanoid()} {...review} />
          ))}
        </ul>
      </Styled.ReviewList>
      <Pagination
        total={reviews.length}
        limit={limit}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
}
