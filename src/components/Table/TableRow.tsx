import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import * as Styled from './styled';

interface TableRowProps {
  comments: Array<Array<string | number | React.ReactNode>>;
  thead: [string, number][];
  sumFlex: number;
  children: React.ReactNode;
}

function TableRow({ comments, thead, sumFlex, children }: TableRowProps) {
  const [showComment, setShowComment] = useState<boolean>(false);

  if (comments) {
    const handleClick = () => {
      setShowComment((state) => !state);
    };

    return (
      <>
        <Styled.Tr onClick={handleClick}>{children}</Styled.Tr>
        {showComment && (
          <Styled.Tr>
            {comments.map((comment) =>
              comment.map((data, i) => (
                <Styled.CommentTd key={nanoid()} flex={thead[i][1] / sumFlex}>
                  {data}
                </Styled.CommentTd>
              ))
            )}
          </Styled.Tr>
        )}
      </>
    );
  }

  return <Styled.Tr>{children}</Styled.Tr>;
}

export default TableRow;
