import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Header from 'src/components/myPage/Header';
import MenuPageLayout from 'src/layouts/MenuPageLayout';
import api from '@utils/api';
import { getSession } from 'next-auth/react';
import { CustomSession } from '@pages/api/auth/[...nextauth].page';
import { Session } from 'next-auth';
import ModalProvider from 'src/contexts/Modal/ModalProvider';
import { menuText, thead, getRows } from './constants';

function MyPage() {
  const router = useRouter();
  const { menu: query } = router.query;
  const [session, setSession] = useState<Session | null>(null);
  const [badgeDataUrl, setBadgeDataUrl] = useState<string | null>(null);
  const [tableDataUrl, setTableDataUrl] = useState<string | null>(null);
  const [menu, setMenu] = useState('order');
  const [badge, setBadge] = useState(null);
  const [curTableData, setCurTableData] = useState(null);
  const { data: badgeData } = useSWR(badgeDataUrl, api.get);
  const { data: tableData } = useSWR(tableDataUrl, api.get);

  useEffect(() => {
    (async () => {
      const curSession = await getSession();
      setSession(curSession);
    })();
  }, []);

  useEffect(() => {
    if (session) {
      setBadgeDataUrl(`/myPage/${(session as CustomSession).user.id}`);
      setTableDataUrl(`/user/${query}/${(session as CustomSession).user.id}`);
    }
    setCurTableData(null);
    setMenu(query as string);
  }, [session, query]);

  useEffect(() => {
    if (badgeData) {
      setBadge(badgeData.data);
    }
  }, [badgeData]);

  useEffect(() => {
    setCurTableData(tableData);
  }, [tableData]);

  return (
    <ModalProvider>
      <MenuPageLayout
        menu={menu}
        menuText={menuText}
        badge={badge}
        header={<Header />}
        thead={(thead as { [key: string]: any })[menu as string]}
      >
        {(getRows as { [key: string]: any })[menu as string](curTableData)}
      </MenuPageLayout>
    </ModalProvider>
  );
}

export default MyPage;
