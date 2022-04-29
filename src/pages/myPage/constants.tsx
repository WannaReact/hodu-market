import React from 'react';
import { nanoid } from 'nanoid';
import Product from 'src/components/Table/Product';
import { dateConverter } from '@utils/dateConverter';
import Cost from 'src/components/Table/Cost';
import Status, { ButtonInfo } from 'src/components/Table/Status';
import ChangeOrder from 'src/components/Modals/CustomModal/Contents/ChangeOrder';
import { IMyOrder } from '@shared/types';
import ConfirmOrder from 'src/components/Modals/CustomModal/Contents/ConfirmOrder';

export const menuText = {
  order: '주문 내역',
  review: '리뷰 내역',
  inquiry: '문의 내역',
  information: '회원 정보 변경'
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
  ]
};

export const buttons: {
  [key: string]: {
    [key: string]: ButtonInfo;
  };
} = {
  order: {
    결제완료: {
      text: '변경/취소',
      content: (data: IMyOrder) => <ChangeOrder data={data} />
    },
    배송중: {
      text: '구매확정',
      content: (data: IMyOrder) => <ConfirmOrder data={data} />
    },
    배송완료: {
      text: '구매확정',
      content: (data: IMyOrder) => <ConfirmOrder data={data} />
    },
    구매확정: {
      text: '리뷰 작성',
      color: 'green'
    }
  }
};

export const getRows = {
  order: (data: { [key: string]: any }) =>
    data?.data?.orders.map((rowData: IMyOrder) => {
      const {
        orderGroup: { orderNumber },
        product: { productName, option },
        createdAt,
        cost,
        count,
        status
      } = rowData;
      return {
        tableData: [
          <Product key={nanoid()} title={productName} option={option} />,
          dateConverter(createdAt),
          orderNumber,
          <Cost key={nanoid()} cost={cost} count={count} />,
          <Status
            key={nanoid()}
            data={rowData}
            status={status}
            button={buttons.order[status]}
          />
        ]
      };
    }),
  review: (data: { [key: string]: any }) =>
    data?.data?.reviews.map(
      ({
        product: { productName, option },
        content
      }: {
        [key: string]: any;
      }) => {
        return {
          tableData: [
            <Product key={nanoid()} title={productName} option={option} />,
            content
          ]
        };
      }
    ),
  inquiry: (data: { [key: string]: any }) =>
    data?.data?.inquiries.map(
      ({
        product: { productName, option },
        content,
        answer
      }: {
        [key: string]: any;
      }) => {
        return {
          tableData: [
            <Product key={nanoid()} title={productName} option={option} />,
            content,
            answer ? '답변 완료' : '답변 대기'
          ],
          comments: [['', answer, '']]
        };
      }
    )
};
