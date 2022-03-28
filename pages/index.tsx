// import { GetStaticProps } from 'next';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import dummyData from '../src/pages/api/dummyData.json';

const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 380rem);
`;

function Home() {
  return (
    <main>
      <article>슬라이드</article>
      <CardsContainer>
        {dummyData.map((data) => (
          <ProductCard {...data} key={nanoid()} />
        ))}
      </CardsContainer>
    </main>
  );
}

// export const getStaticProps: GetStaticProps = () => {
//   return {
//     props: {
//       gnb: {
//         active: true,
//         title: '관리자 페이지'
//       }
//     }
//   };
// };

export default Home;
