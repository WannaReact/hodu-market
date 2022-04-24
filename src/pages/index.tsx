import { nanoid } from 'nanoid';
import DefaultContainerPage from 'src/components/common/DefaultContainer';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import dummyData from './api/dummyData.json';

function Home() {
  return (
    <>
      <article>슬라이드</article>
      <DefaultContainerPage>
        <CardsContainer>
          {dummyData.map((data) => (
            <ProductCard {...data} key={nanoid()} />
          ))}
        </CardsContainer>
      </DefaultContainerPage>
    </>
  );
}

export default Home;

const CardsContainer = styled.section`
  display: grid;
  align-content: space-around;
  grid-template-columns: repeat(3, minmax(380px, auto));
  gap: 0.8rem 0;
`;
