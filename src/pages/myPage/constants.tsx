import { nanoid } from 'nanoid';
import Product from 'src/components/Table/Product';

export const menuText = {
  order: '주문 내역',
  review: '리뷰 내역',
  inquiry: '문의 내역',
  wishList: '위시리스트'
};

export const thead = {
  order: [
    ['상품정보', 12],
    ['주문일자', 6],
    ['주문번호', 8],
    ['주문금액', 5],
    ['주문상태', 9]
  ],
  review: [
    ['상품정보', 1],
    ['리뷰 내용', 2]
  ],
  inquiry: [
    ['상품정보', 3],
    ['문의 내용', 4],
    ['처리 상태', 2]
  ],
  wishList: [
    ['상품정보', 8],
    ['가격', 3],
    ['삭제', 3]
  ]
};

export const getRows = {
  order: (data: { [key: string]: any }) =>
    data?.data?.orders
      ?.reverse()
      .map(
        ({
          productId: { productName },
          createdAt,
          orderNumber,
          cost,
          count,
          status
        }: {
          [key: string]: any;
        }) => {
          return {
            tableData: [
              <Product key={nanoid()} title={productName} text="" />,
              createdAt,
              orderNumber,
              `${cost}원 ${count}개`,
              status
            ]
          };
        }
      ),
  review: (data: { [key: string]: any }) =>
    data?.data?.reviews
      ?.reverse()
      .map(
        ({ productId: { productName }, content }: { [key: string]: any }) => {
          return {
            tableData: [
              <Product key={nanoid()} title={productName} text="" />,
              content
            ]
          };
        }
      ),
  inquiry: (data: { [key: string]: any }) =>
    data?.data?.inquiries
      ?.reverse()
      .map(
        ({
          productId: { productName },
          content,
          answer
        }: {
          [key: string]: any;
        }) => {
          return {
            tableData: [
              <Product key={nanoid()} title={productName} text="" />,
              content,
              answer ? '답변 완료' : '답변 대기'
            ],
            comments: [['', answer, '']]
          };
        }
      ),
  wishList: (data: { [key: string]: any }) =>
    data?.data?.wishList
      ?.reverse()
      .map(({ productName, price }: { [key: string]: any }) => {
        return {
          tableData: [
            <Product key={nanoid()} title={productName} text="" />,
            price
          ]
        };
      })
};
