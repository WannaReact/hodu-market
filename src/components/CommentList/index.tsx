import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import ImageWrapper from '@utils/ImageWrapper';
import { CommentItem } from '../CommentItem';
import * as Buttons from '../Buttons';
import { Pagination } from '../Pagination';
import dummyCommentData from './dummyCommentsData.json';
import * as Styled from './styled';

interface ICommentListProps {
  reviewId: number;
}

interface ICommentsData {
  reviewId: number;
  comments:
    | {
        commentId: number;
        author: string;
        authorImg: string;
        content: string;
        date: string;
      }[]
    | undefined;
}

export function CommentList({ reviewId }: ICommentListProps) {
  const itemsPerPage = 5;
  const [pageNum, setPageNum] = useState(1);
  const offset = (pageNum - 1) * itemsPerPage;
  const [isLoading, setIsLoading] = useState(true);
  const [commentsData, setCommentsData] = useState<
    ICommentsData['comments'] | undefined
  >();

  useEffect(() => {
    const data = dummyCommentData.find((elem: { reviewId: number }) => {
      return elem.reviewId === reviewId;
    });
    setCommentsData(data?.comments);
    setIsLoading(false);
  }, []);

  return (
    <Styled.CommentSection>
      {isLoading ? (
        'Loading'
      ) : (
        <>
          {commentsData && commentsData!.length > 0 && (
            <>
              <ul>
                {commentsData
                  ?.slice(offset, offset + itemsPerPage)
                  .map((comment) => (
                    <CommentItem key={nanoid()} {...comment} />
                  ))}
              </ul>
              {commentsData.length > itemsPerPage && (
                <Styled.PaginationWrapper>
                  <Pagination
                    totalItemCount={commentsData!.length}
                    itemsPerPage={itemsPerPage}
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                  />
                </Styled.PaginationWrapper>
              )}
            </>
          )}
          <Styled.CommentInputForm>
            <Styled.Author>
              <ImageWrapper
                width="4rem"
                height="4rem"
                imgStyle="border-radius: 50%;"
              >
                <Image src="/images/seller-profileIMG.png" layout="fill" />
              </ImageWrapper>
              <span className="ellipsis-single">접속자이름asdfasdfasdf</span>
            </Styled.Author>
            <Styled.CommentInput htmlFor="comment">
              <span className="sr-only">댓글 입력</span>
              <input
                type="text"
                id="comment"
                maxLength={100}
                placeholder="댓글을 입력하세요"
              />
            </Styled.CommentInput>
            <Buttons.Custom
              width={7}
              height={3}
              fontSize={1.4}
              color="green"
              disabled={false}
            >
              작성
            </Buttons.Custom>
          </Styled.CommentInputForm>
        </>
      )}
    </Styled.CommentSection>
  );
}
