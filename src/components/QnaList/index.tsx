import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import QnaItem from '../QnaItem';
import questionData from './dummyQuestionData.json';
import * as Styled from './styled';
import { Pagination } from '../Pagination';

interface IQuestionData {
  questionId: number;
  productId: number;
  content: string;
  author: string;
  date: string;
  answer: {
    questionId: number;
    content: string;
    date: string;
  };
}

export function QnaList() {
  const itemsPerPage = 5;
  const [pageNum, setPageNum] = useState(1);
  const offset = (pageNum - 1) * itemsPerPage;
  const [questions, setQuestions] = useState<IQuestionData[]>([]);
  const getData = async () => {
    setTimeout(() => {
      setQuestions(questionData);
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Styled.List>
        <li>
          <span aria-hidden="true">답변상태</span>
          <span aria-hidden="true">질문</span>
          <span aria-hidden="true">작성자</span>
          <span aria-hidden="true">작성일</span>
        </li>
        {questions.slice(offset, offset + itemsPerPage).map((question) => (
          <QnaItem key={nanoid()} {...question} />
        ))}
      </Styled.List>
      <Pagination
        totalItemCount={questions.length}
        itemsPerPage={itemsPerPage}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </>
  );
}
