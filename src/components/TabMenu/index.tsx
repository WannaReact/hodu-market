import { useState, useEffect, useRef, useMemo } from 'react';
import { nanoid } from 'nanoid';
import * as Buttons from '../Buttons';
import * as Styled from './styled';

interface ITabMenuProps {
  sectionRefs: {
    current: HTMLElement[];
  };
}

const TabMenuDatas = ['제품 상세 정보', '리뷰', 'Q&A', '반품/교환 정보'];

export function TabMenu({ sectionRefs: { current } }: ITabMenuProps) {
  const [activeTab, setActiveTab] = useState<HTMLElement>();
  console.log('[TabMenu]', current);

  useEffect(() => {
    setActiveTab(current[0]);
    console.log('[TabMenu] Mounted', current);
  }, [current]);

  const handleClick = (index: number) => {
    current[index].scrollIntoView({ behavior: 'smooth' });
    setActiveTab(current[index]);
  };

  return (
    <Styled.TabMenu>
      {TabMenuDatas.map((data, index) => (
        <Buttons.Tab
          key={nanoid()}
          isActive={activeTab === current[index]}
          onClick={() => handleClick(index)}
        >
          {data}
        </Buttons.Tab>
      ))}
    </Styled.TabMenu>
  );
}
