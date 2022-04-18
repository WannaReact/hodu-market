import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Product from 'src/components/Table/Product';
import MenuPageLayout from 'src/layouts/MenuPageLayout';

const menuText = {
  sale: '판매중인 상품',
  order: '주문',
  tracking: '배송',
  claim: '취소/교환/환불',
  question: '문의',
  review: '리뷰'
};

const thead = {
  sale: [
    ['상품정보', 60],
    ['판매가격', 20],
    ['수정', 10],
    ['삭제', 10]
  ],
  order: [
    ['주문상태', 10],
    ['주문번호', 20],
    ['주문일시', 20],
    ['입금시간', 20],
    ['입금기한', 20],
    ['주문확인', 10]
  ],
  tracking: [
    ['배송상태', 10],
    ['주문번호', 15],
    ['택배사', 10],
    ['발송일', 10],
    ['도착일', 10],
    ['송장번호', 15],
    ['구매자명', 10],
    ['수취인명', 10],
    ['정보확인', 10]
  ],
  claim: [
    ['요청', 10],
    ['주문번호', 20],
    ['취소사유', 20],
    ['상세사유', 30],
    ['신청날짜', 10],
    ['정보', 10]
  ],
  question: [
    ['상품정보', 30],
    ['작성자', 10],
    ['문의 내용', 40],
    ['처리 상태', 10],
    ['쓰기/편집', 10]
  ],
  review: [
    ['상품정보', 30],
    ['작성자', 10],
    ['문의 내용', 40],
    ['처리 상태', 10],
    ['쓰기/편집', 10]
  ]
};

// API에서 받아와야 하는 내용
const data = {
  sale: [
    {
      tableData: [
        <Product key={nanoid()} title="상품명" text="재고 32개" />,
        '17,500원',
        '안녕',
        '안녕'
      ]
    }
  ],
  order: [
    {
      tableData: [
        '결제대기',
        20220108226584,
        '2022.01.08 21:08:45',
        '2022.01.09 21:08:45',
        '2022.01.09',
        '주문확인'
      ]
    }
  ],
  tracking: [
    {
      tableData: [
        '배송준비',
        20220108226584,
        '셀렉트박스',
        '2022.01.08',
        '2022.01.09',
        264548912324,
        '황나구',
        '이춘희',
        '버튼'
      ]
    }
  ],
  claim: [
    {
      tableData: [
        '주문취소',
        20220108226584,
        '파손',
        '상품이 파손됨',
        '2022.01.09',
        '버튼'
      ]
    }
  ],
  question: [
    {
      tableData: [
        <Product key={nanoid()} title="상품명" text="옵션 이름" />,
        'jma1020',
        '문의 내용입니다.',
        '답변완료',
        '버튼'
      ],
      comments: [
        [
          '',
          '관리자',
          <>
            <em>2022.02.15</em>
            <p>문의 답변입니다.</p>
          </>,
          '',
          '삭제'
        ]
      ]
    }
  ],
  review: [
    {
      tableData: [
        <Product key={nanoid()} title="상품명" text="옵션 이름" />,
        'jma1020',
        '리뷰 내용입니다.',
        '답변완료',
        '버튼'
      ],
      comments: [
        [
          '',
          '박아무개',
          <>
            <em>2022.02.15</em>
            <p>리뷰에 대한 댓글입니다.</p>
          </>,
          '',
          '삭제'
        ]
      ]
    }
  ]
};

function SellerPage() {
  const router = useRouter();
  const { menu: query } = router.query;
  const [menu, setMenu] = useState('sale');
  const [rows, setRows] = useState(null);

  useEffect(() => {
    setMenu(query as string);
    // 아래에 data[query] 대신 실제 데이터를 API에서 불러와서 넣어주면 됩니다.
    setRows((data as { [key: string]: any })[query as string]);
  }, [query]);

  return (
    <MenuPageLayout
      menu={menu}
      menuText={menuText}
      header={<h1>대시보드</h1>}
      thead={(thead as { [key: string]: any })[menu as string]}
    >
      {rows}
    </MenuPageLayout>
  );
}

export default SellerPage;
