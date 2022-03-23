import Search from 'public/images/icon-search.svg';
import * as Styled from './styled';

function SearchBar() {
  return (
    <Styled.SearchForm>
      <Styled.SearchInput placeholder="상품을 검색해보세요!" />
      <Styled.SearchButton type="button">
        <Search />
      </Styled.SearchButton>
    </Styled.SearchForm>
  );
}

export default SearchBar;
