import { Buttons } from '../components';

function Home() {
  const onSale = 3;
  return (
    <>
      <Buttons.L disabled={false}>버튼</Buttons.L>
      <Buttons.L disabled>버튼</Buttons.L>

      <Buttons.M color="green" disabled={false}>
        버튼
      </Buttons.M>
      <Buttons.M color="green" disabled>
        버튼
      </Buttons.M>
      <Buttons.M color="dark" disabled>
        버튼
      </Buttons.M>
      <Buttons.M color="white" disabled>
        버튼
      </Buttons.M>

      <Buttons.MS>버튼</Buttons.MS>
      <Buttons.MS>버튼</Buttons.MS>
      <Buttons.MS>버튼</Buttons.MS>
      <Buttons.MS>버튼</Buttons.MS>

      <Buttons.S>버튼</Buttons.S>
      <Buttons.S>버튼</Buttons.S>
      <Buttons.S>버튼</Buttons.S>

      <Buttons.Tab isActive>버튼</Buttons.Tab>
      <Buttons.Tab isActive>버튼</Buttons.Tab>

      <Buttons.Menu isActive>판매중인 상품({onSale})</Buttons.Menu>
      <Buttons.Menu isActive>판매중인 상품</Buttons.Menu>
      <Buttons.Menu isActive>판매중인 상품</Buttons.Menu>
    </>
  );
}

export default Home;
