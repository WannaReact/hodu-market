import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import { TextInputBox } from '../../src/components/Inputs';
import { Buttons } from '../../components';

interface Custom {
  img: any;
}

interface ImgLink {
  link: string;
}

function AddproductPage() {
  const [createObjectURL, setCreateObjectURL] = useState<string[]>([]);

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setCreateObjectURL([...createObjectURL, URL.createObjectURL(i)]);
    }
  };

  const selectIMG = ($dom: any) => {
    const $imgBox = document.createElement('div');
    $imgBox.style.width = '60px';
    $imgBox.style.height = '60px';
    $imgBox.style.backgroundImage = 'images/img-button.png';
    $imgBox.style.backgroundRepeat = 'no-repeat';

    $dom.appendChild($imgBox);
  };

  return (
    <>
      <header>상품 등록</header>
      <main>
        <ViewBox>
          <ImageBox>
            <Image htmlFor="img" img={createObjectURL[0]} />
            <ImageInput type="file" id="img" onChange={uploadToClient} />
            <ImgListBox>
              {createObjectURL.map((item) => {
                return <Item link={item} key={`img+${item}`} />;
              })}
            </ImgListBox>
          </ImageBox>
          <InputBox>
            <TextInputBox labelName="카테고리" maxLength={20} />
            <TextInputBox labelName="상품명" maxLength={20} option="limit" />
            <TextInputBox labelName="판매가" />
            <TextInputBox labelName="할인가" />
            <Buttons.Custom
              width={22}
              height={5}
              fontSize={2.4}
              color="green"
              disabled={false}
            >
              배송,소포,등기
            </Buttons.Custom>
          </InputBox>
        </ViewBox>

        <Editor
          apiKey="velrv8dvpig61i0ewv03ljv8jsy1rwysgrwh814cutgpmd6k"
          init={{
            language: 'ko',
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'add_image | bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent |',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            setup: (editor) => {
              editor.ui.registry.addButton('add_image', {
                text: '이미지추가',
                onAction: () => {
                  const $iframe = document.querySelector(
                    '.tox-edit-area__iframe'
                  ) as HTMLIFrameElement;
                  if (!$iframe) {
                    return;
                  }
                  const $iframeDOM =
                    $iframe.contentWindow?.document.getElementById('tinymce');

                  selectIMG($iframeDOM);
                }
              });
            }
          }}
        />
      </main>
    </>
  );
}

const ImgListBox = styled.ul`
  display: flex;
`;

const Item = styled.li<ImgLink>`
  padding: 20px 20px;
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

const ViewBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const ImageBox = styled.div``;

const InputBox = styled.div`
  flex-basis: 70%;
  margin-left: 40px;
  & input {
    margin-bottom: 10px;
  }
`;

export default AddproductPage;
