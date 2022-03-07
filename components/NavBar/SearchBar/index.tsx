import Search from 'public/images/icon-search.svg';
import { SearchForm, SearchInput, SearchButton } from './styled';

function SearchBar() {
  return (
    <SearchForm>
      <SearchInput placeholder="상품을 검색해보세요!" />
      <SearchButton type="button">
        <Search />
      </SearchButton>
    </SearchForm>
  );
}

export default SearchBar;
