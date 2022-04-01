import api from '@utils/api';

interface API {
  method: string;
  button: string;
  body?: [string, string, boolean | undefined][];
  query?: [string, string][];
  param?: [string, string];
}

export const apiList = [
  {
    url: '/user',
    api: [
      {
        method: 'get',
        button: '모든 회원 정보 조회하기'
      },
      {
        method: 'post',
        button: '회원 등록하기',
        body: [
          ['userId', '아이디(4~16자)'],
          ['userName', '이름(2~8자)'],
          ['nickname', '닉네임(2~8자)'],
          ['phone', '전화번호'],
          ['email', '이메일']
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 회원 정보 조회하기',
        param: ['회원ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 회원 정보 수정하기',
        param: ['회원ID', 'id'],
        body: [
          ['userName', '이름(2~8자)'],
          ['nickname', '닉네임(2~8자)'],
          ['phone', '전화번호'],
          ['email', '이메일']
        ]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 회원 정보 삭제하기',
        param: ['회원ID', 'id']
      }
    ],
    nested: [
      {
        url: '/id',
        api: [
          {
            method: 'get',
            button: '이메일로 아이디 찾기',
            query: [['email', '이메일']]
          }
        ]
      }
    ]
  },
  {
    url: '/review',
    api: [
      {
        method: 'get',
        button: '모든 리뷰 정보 조회하기'
      },
      {
        method: 'post',
        button: '리뷰 등록하기',
        body: [
          ['productId', '상품ID'],
          ['userId', '회원ID'],
          ['rating', '평점(1~5)'],
          ['content', '내용(10~1000자)']
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 리뷰 정보 조회하기',
        param: ['리뷰ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 리뷰 정보 수정하기',
        param: ['리뷰ID', 'id'],
        body: [
          ['rating', '평점(1~5)'],
          ['content', '내용(10~1000자)']
        ]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 리뷰 정보 삭제하기',
        param: ['리뷰ID', 'id']
      }
    ]
  },
  {
    url: '/product',
    api: [
      {
        method: 'get',
        button: '모든 상품 정보 조회하기'
      },
      {
        method: 'post',
        button: '상품 등록하기',
        body: [
          ['productName', '상품 이름'],
          ['price', '정가'],
          ['discount', '할인'],
          ['stock', '재고'],
          ['categories', '카테고리(쉼표로 구분)', true]
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 상품 정보 조회하기',
        param: ['상품ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 상품 정보 수정하기',
        param: ['상품ID', 'id'],
        body: [
          ['productName', '상품 이름'],
          ['price', '정가'],
          ['discount', '할인'],
          ['stock', '재고'],
          ['categories', '카테고리(쉼표로 구분)', true]
        ]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 상품 정보 삭제하기',
        param: ['상품ID', 'id']
      }
    ]
  },
  {
    url: '/comment',
    api: [
      {
        method: 'get',
        button: '모든 댓글 정보 조회하기'
      },
      {
        method: 'post',
        button: '댓글 등록하기',
        body: [
          ['reviewId', '리뷰ID'],
          ['userId', '유저ID'],
          ['content', '내용(10~150자)']
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 댓글 정보 조회하기',
        param: ['댓글ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 댓글 정보 수정하기',
        param: ['댓글ID', 'id'],
        body: [['content', '내용(10~150자)']]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 댓글 정보 삭제하기',
        param: ['댓글ID', 'id']
      }
    ]
  },
  {
    url: '/inquiry',
    api: [
      {
        method: 'get',
        button: '모든 문의 정보 조회하기'
      },
      {
        method: 'post',
        button: '문의 등록하기',
        body: [
          ['productId', '상품ID'],
          ['userId', '유저ID'],
          ['content', '내용(10~500자)']
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 문의 정보 조회하기',
        param: ['문의ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 문의 정보 수정하기',
        param: ['문의ID', 'id'],
        body: [['content', '내용(10~150자)']]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 문의 정보 삭제하기',
        param: ['문의ID', 'id']
      }
    ],
    nested: [
      {
        url: '/answer',
        api: [
          {
            method: 'put',
            button: '문의에 답변 등록/수정하기',
            param: ['문의ID', 'id'],
            body: [['answer', '답변(~500자)']]
          },
          {
            method: 'delete',
            button: '문의에 등록된 답변 삭제하기',
            param: ['문의ID', 'id']
          }
        ]
      }
    ]
  },
  {
    url: '/category',
    api: [
      {
        method: 'get',
        button: '모든 카테고리 정보 조회하기'
      },
      {
        method: 'post',
        button: '카테고리 등록하기',
        body: [['categoryName', '카테고리 이름']]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 카테고리 정보 조회하기',
        param: ['카테고리ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 카테고리 정보 수정하기',
        param: ['카테고리ID', 'id'],
        body: [['categoryName', '카테고리 이름']]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 카테고리 정보 삭제하기',
        param: ['카테고리ID', 'id']
      }
    ]
  },
  {
    url: '/order',
    api: [
      {
        method: 'get',
        button: '모든 주문 정보 조회하기'
      },
      {
        method: 'post',
        button: '주문 정보 등록하기',
        body: [
          ['productId', '상품ID'],
          ['userId', '회원ID'],
          ['couponId', '쿠폰ID'],
          ['count', '수량'],
          ['cost', '가격'],
          ['courierId', '택배사ID'],
          ['invoice', '송장번호'],
          ['addressee', '수취인명']
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 주문 정보 조회하기',
        param: ['주문ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 주문 정보 수정하기',
        param: ['주문ID', 'id'],
        body: [
          ['courierId', '택배사ID'],
          ['invoice', '송장번호']
        ]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 주문 정보 삭제하기',
        param: ['주문ID', 'id']
      }
    ]
  },
  {
    url: '/courier',
    api: [
      {
        method: 'get',
        button: '모든 택배사 정보 조회하기'
      },
      {
        method: 'post',
        button: '택배사 정보 등록하기',
        body: [['courierName', '택배사명']]
      },
      {
        method: 'get',
        button: '택배사명으로 특정 택배사 정보 조회하기',
        param: ['택배사명', 'name']
      },
      {
        method: 'put',
        button: '택배사명으로 특정 택배사 정보 수정하기',
        param: ['택배사명', 'name'],
        body: [['courierName', '변경할 택배사명']]
      },
      {
        method: 'delete',
        button: '택배사명으로 특정 택배사 정보 삭제하기',
        param: ['택배사명', 'name']
      }
    ]
  },
  {
    url: '/coupon',
    api: [
      {
        method: 'get',
        button: '모든 쿠폰 정보 조회하기'
      },
      {
        method: 'post',
        button: '쿠폰 정보 등록하기',
        body: [
          ['couponTypeId', '쿠폰종류ID'],
          ['userId', '유저ID'],
          ['isUsed', '사용여부'],
          ['expiryDate', '유효기간']
        ]
      },
      {
        method: 'get',
        button: 'ObjectId로 특정 쿠폰 정보 조회하기',
        param: ['쿠폰ID', 'id']
      },
      {
        method: 'put',
        button: 'ObjectId로 특정 쿠폰 정보 수정하기',
        param: ['쿠폰ID', 'id'],
        body: [
          ['isUsed', '사용여부'],
          ['expiryDate', '유효기간']
        ]
      },
      {
        method: 'delete',
        button: 'ObjectId로 특정 쿠폰 정보 삭제하기',
        param: ['쿠폰ID', 'id']
      }
    ],
    nested: [
      {
        url: '/type',
        api: [
          {
            method: 'get',
            button: '모든 쿠폰 종류 정보 조회하기'
          },
          {
            method: 'post',
            button: '쿠폰 종류 정보 등록하기',
            body: [
              ['couponName', '쿠폰 이름'],
              ['categories', '적용 상품 카테고리', true],
              ['maxPrice', '적용 상품 최대 가격'],
              ['discount', '할인']
            ]
          },
          {
            method: 'get',
            button: 'ObjectId로 특정 쿠폰 종류 정보 조회하기',
            param: ['쿠폰종류ID', 'id']
          },
          {
            method: 'put',
            button: 'ObjectId로 특정 쿠폰 종류 정보 수정하기',
            param: ['쿠폰종류ID', 'id'],
            body: [
              ['couponName', '쿠폰 이름'],
              ['categories', '적용 상품 카테고리', true],
              ['maxPrice', '적용 상품 최대 가격'],
              ['discount', '할인']
            ]
          },
          {
            method: 'delete',
            button: 'ObjectId로 특정 쿠폰 종류 정보 삭제하기',
            param: ['쿠폰종류ID', 'id']
          }
        ]
      }
    ]
  }
];

export const handler =
  (url: string, { method, button, body, query, param }: API) =>
  async () => {
    const inputs = [...document.querySelectorAll('input')];
    if (!inputs) return;
    const apiUrl =
      (query
        ? `${url}?${query
            .map(([key], i) => `${key}=${inputs[i].value}`)
            .join('&')}`
        : url) + (param ? `/${inputs[0].value}` : '');
    const apiBody = body?.reduce(
      (acc, [key, _, isArray], i) =>
        inputs[i + (param ? 1 : 0)].value
          ? {
              ...acc,
              [key]: isArray
                ? inputs[i + (param ? 1 : 0)].value.split(',')
                : inputs[i + (param ? 1 : 0)].value
            }
          : acc,
      {}
    );
    const data = await api[method](apiUrl, apiBody);
    console.log(button, data);
  };