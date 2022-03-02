import Image from 'next/image';
import { Buttons } from '../components';
import plusIcon from '../public/images/icon-plus.png';

function Home() {
  const onClick = () => {};
  return (
    <>
      <Buttons.L disabled={false}>버튼</Buttons.L>
      <Buttons.L disabled>버튼</Buttons.L>
      <br />
      <Buttons.M color="green" disabled={false}>
        버튼
      </Buttons.M>
      <Buttons.M color="green" disabled>
        버튼
      </Buttons.M>
      <br />
      <Buttons.M color="dark" disabled={false} onClick={onClick}>
        버튼
      </Buttons.M>
      <Buttons.M color="white" disabled={false}>
        버튼
      </Buttons.M>
      <br />
      <Buttons.MS color="green">
        <Image src={plusIcon} width={32} height={32} />
        상품 업로드
      </Buttons.MS>
      <Buttons.MS color="green">버튼</Buttons.MS>
      <Buttons.MS color="white">버튼</Buttons.MS>
      <Buttons.MS color="white">버튼</Buttons.MS>
      <br />
      <Buttons.S color="green">버튼</Buttons.S>
      <Buttons.S color="white">버튼</Buttons.S>
      <Buttons.S color="white">버튼</Buttons.S>
      <br />
      <Buttons.Tab isActive>버튼</Buttons.Tab>
      <Buttons.Tab isActive={false}>버튼</Buttons.Tab>
      <br />
      <Buttons.Menu isActive={false} badgeCount={0}>
        판매중인 상품
      </Buttons.Menu>
      <Buttons.Menu isActive={false} badgeCount={3}>
        판매중인 상품
      </Buttons.Menu>
      <Buttons.Menu isActive badgeCount={100}>
        판매중인 상품
      </Buttons.Menu>
    </>
  );
}

export default Home;
