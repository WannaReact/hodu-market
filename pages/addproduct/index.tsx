import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';
import ImgSlide from 'components/AddProduct/ImgSlide';
import { TextInputBox } from '../../components/Inputs';
import { Buttons } from '../../components';

function AddproductPage() {
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

export default AddproductPage;
