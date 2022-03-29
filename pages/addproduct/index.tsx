import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import ImgSlide from 'components/AddProduct/ImgSlide';
import EditorModal from 'components/AddProduct/EditorModal';
import { TextInputBox } from '../../components/Inputs';
import { Buttons } from '../../components';

function AddproductPage() {
  const [text, setText] = useState('');
  const [isModal, setIsModal] = useState(false);
  // const [modalImg, setModalImg] = useState<string[]>([]);

  console.log(text);

  const addModalImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const imgUrl = URL.createObjectURL(i);
      console.log(imgUrl);
      setText((prev) => `${prev}<img src="${imgUrl}" />`);
      setIsModal(false);
    }
  };

  return (
    <>
      <header>상품 등록</header>
      <main>
        <ViewBox>
          <ImgSlide />
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
          value={text}
          onEditorChange={setText}
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
                  setIsModal(true);
                }
              });
            }
          }}
        />
        <EditorModal isModal={isModal} setIsModal={setIsModal}>
          <ImageLabel htmlFor="modalImg">상품추가</ImageLabel>
          <ImageInput
            type="file"
            id="modalImg"
            multiple
            accept="image/*"
            onChange={addModalImg}
          />
        </EditorModal>
      </main>
    </>
  );
}

const ViewBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  flex-basis: 70%;
  margin-left: 40px;
  & input {
    margin-bottom: 10px;
  }
`;

const ImageLabel = styled.label`
  display: block;
  background-color: white;
  margin: 5px 5px 0px;
`;

const ImageInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export default AddproductPage;
