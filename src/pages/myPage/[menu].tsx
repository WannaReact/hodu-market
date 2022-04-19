import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Header from 'src/components/myPage/Header';
import MenuPageLayout from 'src/layouts/MenuPageLayout';
import api from '@utils/api';
import { menuText, thead, getRows } from './constants';

function MyPage() {
  const userId = '623cb7513d8044dc0d396048';
  const { data } = useSWR(`/user/${userId}`, api.get);
  const router = useRouter();
  const { menu: query } = router.query;
  const [menu, setMenu] = useState('order');
  const [rows, setRows] = useState(null);

  useEffect(() => {
    setMenu(query as string);
    setRows((getRows as { [key: string]: any })[query as string](data));
  }, [data, query]);

  return (
    <MenuPageLayout
      menu={menu}
      menuText={menuText}
      header={<Header />}
      thead={(thead as { [key: string]: any })[menu as string]}
    >
      {rows}
    </MenuPageLayout>
  );
}

export default MyPage;
