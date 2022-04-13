import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import ImgSlide from 'src/components/AddProduct/ImgSlide';
import EditorModal from 'src/components/AddProduct/EditorModal';
import {
  SelectContainer,
  SelectButton,
  SelectBox,
  SelectList
} from 'src/components/SelectBox';
import { CATEGORY_ENUM } from 'lib/mongoose/models/constants';
import SellerLayout from 'src/components/layouts/SellerLayout';
import { TextInputBox } from '../../components/Inputs';
import { Buttons } from '../../components';

function AddproductPage() {
  const [text, setText] = useState('');
  const [isModal, setIsModal] = useState(false);
  // const [modalImg, setModalImg] = useState<string[]>([]);
  const [isSelect, setIsSelect] = useState(false);
  const [contentSelect, setContentSelect] = useState('카테고리 등록');
  const router = useRouter();
  const menu = router.pathname;

  const addModalImg = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectImglength = event.target.files;
    if (selectImglength) {
      for (let i = 0; i < selectImglength?.length; i += 1) {
        if (event.target.files && event.target.files[0]) {
          const imgUrl = URL.createObjectURL(selectImglength[i]);
          setText(
            (prev) => `${prev}<img src="${imgUrl}"  style="width:100%"/>`
          );
          setIsModal(false);
        }
      }
    }
  };

  return (
    <SellerLayout menu={menu}>
      <p>상품 이미지</p>
      <main>
        <ViewBox>
          <ImgSlide />
          <InputBox>
            <TextInputBox labelName="상품명" maxLength={20} />
            <SelectButton
              labelName="카테고리"
              contentSelect={contentSelect}
              onClick={() => setIsSelect((prev) => !prev)}
            />
            <SelectContainer>
              <SelectBox isSelect={isSelect}>
                {CATEGORY_ENUM.map((item) => {
                  return (
                    <SelectList
                      key={item}
                      onClick={() => setContentSelect(item)}
                    >
                      {item}
                    </SelectList>
                  );
                })}
              </SelectBox>
            </SelectContainer>
            <InputFlexBox>
              <TextInputBox labelName="판매가" option="unit" unit="원" />
              <TextInputBox labelName="할인가" option="unit" unit="원" />
            </InputFlexBox>

            <Buttons.Custom
              width={22}
              height={5}
              fontSize={2.4}
              color="green"
              disabled={false}
            >
              배송,소포,등기
            </Buttons.Custom>
            <InputFlexBox>
              <TextInputBox labelName="기본 배송비" option="unit" unit="원" />
              <TextInputBox labelName="재고" option="unit" unit="원" />
            </InputFlexBox>
          </InputBox>
        </ViewBox>
        <Editor
          apiKey="velrv8dvpig61i0ewv03ljv8jsy1rwysgrwh814cutgpmd6k"
          value={text}
          onEditorChange={setText}
          init={{
            language: 'ko',
            height: 700,
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
    </SellerLayout>
  );
}

const ViewBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InputBox = styled.div`
  flex-basis: 70%;
  margin-left: 40px;
  & input,
  div {
    margin-bottom: 10px;
  }
  & > button {
    margin-bottom: 10px;
  }
`;

const InputFlexBox = styled.div`
  display: flex;
  & > div {
    margin-right: 20px;
    flex-basis: 25%;
  }
`;

const ImageLabel = styled.label`
  display: block;
  background-color: white;
  border: 1px solid #000;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  width: 100px;
  margin: 30px auto;
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
