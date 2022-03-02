import { MenuItemProps } from './MenuItem';

const menuItems: MenuItemProps[] = [
  {
    title: ['추천원두', '/foo'],
    categoryList: [
      ['판매 베스트 10', '/foo'],
      ['첫 구매 추천', '/foo']
    ]
  },
  {
    title: ['원두커피', '/foo'],
    categoryList: [
      ['블렌드 커피', '/foo'],
      ['나라별 커피', '/foo'],
      ['디카페인 커피', '/foo']
    ]
  },
  {
    title: ['콜드브루', '/foo'],
    categoryList: [
      ['페트형', '/foo'],
      ['스틱형', '/foo']
    ]
  },
  {
    title: ['커피용품', '/foo'],
    categoryList: [
      ['핸드드립용품', '/foo'],
      ['커피추출용품', '/foo'],
      ['카페용품', '/foo'],
      ['시럽/소스', '/foo']
    ]
  },
  {
    title: ['과일청', '/foo'],
    categoryList: [
      ['500g', '/foo'],
      ['1kg', '/foo'],
      ['2kg', '/foo'],
      ['4kg 이상', '/foo']
    ]
  }
];

export default menuItems;
