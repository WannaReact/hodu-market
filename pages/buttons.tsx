import Image from 'next/image';
import { Buttons } from '../components';
import plusIcon from '../public/images/icon-plus.png';

function Home() {
  return (
    <>
      <Buttons.Custom
        width={22}
        height={6.8}
        fontSize={2.4}
        color="green"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={22}
        height={6.8}
        fontSize={2.4}
        color="green"
        disabled
      >
        버튼
      </Buttons.Custom>
      <br />
      <Buttons.Custom
        width={48}
        height={6}
        fontSize={1.8}
        color="green"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={48}
        height={6}
        fontSize={1.8}
        color="green"
        disabled
      >
        버튼
      </Buttons.Custom>
      <br />
      <Buttons.Custom
        width={48}
        height={6}
        fontSize={1.8}
        color="dark"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={48}
        height={6}
        fontSize={1.8}
        color="white"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <br />
      <Buttons.Custom
        width={16.8}
        height={5.4}
        fontSize={1.8}
        color="green"
        disabled={false}
      >
        <Image src={plusIcon} width={32} height={32} />
        상품 업로드
      </Buttons.Custom>
      <Buttons.Custom
        width={16.8}
        height={5.4}
        fontSize={1.8}
        color="green"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={16.8}
        height={5.4}
        fontSize={1.8}
        color="white"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={16.8}
        height={5.4}
        fontSize={1.8}
        color="white"
        disabled
      >
        버튼
      </Buttons.Custom>
      <br />
      <Buttons.Custom
        width={8}
        height={4}
        fontSize={1.6}
        color="green"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={8}
        height={4}
        fontSize={1.6}
        color="white"
        disabled={false}
      >
        버튼
      </Buttons.Custom>
      <Buttons.Custom
        width={8}
        height={4}
        fontSize={1.6}
        color="white"
        disabled
      >
        버튼
      </Buttons.Custom>
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
