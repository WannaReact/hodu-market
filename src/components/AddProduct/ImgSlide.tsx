import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

interface Custom {
  img: any;
}

interface ImgLink {
  link: string;
}

function ImgSlide() {
  const [createObjectURL, setCreateObjectURL] = useState<string[]>([]);
  const [mainImg, setMainImg] = useState<string | undefined>('');

  const uploadToClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      if (createObjectURL.length < 8) {
        setCreateObjectURL([...createObjectURL, URL.createObjectURL(i)]);
      } else {
        alert('사진은 최대 8개만 가능');
      }
    }
  };
  useEffect(() => {
    setMainImg(createObjectURL[0]);
  }, [createObjectURL]);

  const changeImg = (event: React.MouseEvent<HTMLLIElement>) => {
    const { dataset } = event.target as HTMLLIElement;

    setMainImg(dataset.img);
  };

  return (
    <ImageBox>
      <Image htmlFor="img" img={mainImg} />
      <ImageInput type="file" id="img" onChange={uploadToClient} />
      <ImgListBox>
        {createObjectURL.map((item) => {
          return (
            <Item
              link={item}
              key={`img+${item}`}
              onClick={changeImg}
              data-img={item}
            />
          );
        })}
      </ImgListBox>
    </ImageBox>
  );
}

const ImgListBox = styled.ul`
  display: flex;
`;

const Item = styled.li<ImgLink>`
  padding: 25px 25px;
  background-image: url(${(props) => props.link});
  background-size: 100% 100%;
`;

const Image = styled.label<Custom>`
  display: inline-block;
  padding: 200px 200px;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  position: relative;
  background-color: #eee;
  &::after {
    display: block;
    content: '';
    background: ${(props) =>
      props.img ? null : 'url(images/img-button.png) no-repeat'};
    background-size: 50px, 50px;
    width: 50px;
    height: 50px;
    /* border-radius: 40px; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const ImageBox = styled.div``;

export default ImgSlide;
