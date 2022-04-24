import { useState } from 'react';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import Modal from 'src/components/Modals';
import styled from 'styled-components';

function Home() {
  const [isModal, setIsModal] = useState(false);

  return (
    <DefaultContainerPage>
      <Container onClick={() => setIsModal((prev) => !prev)}>
        모달 띄우기
      </Container>
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        cancelText="아니오"
        checkText="예"
      >
        이미 장바구니에 있는 상품입니다.
        <br /> 장바구니로 이동하시겠습니까?
      </Modal>
    </DefaultContainerPage>
  );
}

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default Home;
