import { TextInputBox } from 'components/Inputs';
import { GetStaticProps } from 'next';

function ComponentTest() {
  return (
    <>
      <TextInputBox labelName="판매가" option="unit" unit="원" />
      <TextInputBox />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      gnb: {
        active: false
      }
    }
  };
};

export default ComponentTest;
