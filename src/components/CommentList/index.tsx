import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
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
                <Pagination
                  totalItemCount={commentsData!.length}
                  itemsPerPage={itemsPerPage}
                  pageNum={pageNum}
                  setPageNum={setPageNum}
                />
              )}
            </>
          )}
          <Styled.CommentInput>
            <div>접속한 아이디</div>
            <label htmlFor="comment">
              <span className="sr-only">댓글 입력</span>
              <input
                type="text"
                id="comment"
                maxLength={50}
                placeholder="댓글을 입력하세요"
              />
            </label>
            <Buttons.Custom
              width={7}
              height={3}
              fontSize={1.4}
              color="green"
              disabled={false}
            >
              작성
            </Buttons.Custom>
          </Styled.CommentInput>
        </>
      )}
    </Styled.CommentSection>
  );
}
