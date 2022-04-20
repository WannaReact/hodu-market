import Image from 'next/image';
import { useEffect, useState } from 'react';
import api from '@utils/api';
import ImageWrapper from '@utils/ImageWrapper';
import { IComment, IUser } from '@shared/types';
import { dateConverter } from '@utils/dateConverter';
import authorImg from 'public/images/product-img-small-1.png';
import * as Styled from './styled';

export function CommentItem({
  userId,
  // authorImg,
  content,
  createdAt
}: IComment) {
  const [userData, setUserData] = useState<IUser>();
  const getData = async () => {
    const { data } = await api.get(`/user/${userId}`);
    setUserData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled.CommentItem>
      <Styled.Author>
        <ImageWrapper width="4rem" height="4rem" imgStyle="border-radius: 50%;">
          <Image src={authorImg} layout="fill" />
        </ImageWrapper>
        <span>{userData?.userName}</span>
      </Styled.Author>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Date>{dateConverter(createdAt)}</Styled.Date>
    </Styled.CommentItem>
  );
}
