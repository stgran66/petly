import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/notices/filterSlice';
import selectors from 'redux/notices/selectors';
import styles from './NoticesSearch.styled';
const {
  IconClose,
  IconSearch,
  SearchForm,
  SearchInput,
  SearchTitle,
  InputButton,
  InputSearchIcon,
} = styles;
const { selectFilter } = selectors;

const NoticeSearch = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onInputChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const reset = () => {
    dispatch(setFilter(''));
  };

  const emptyInput = filterValue === '';
  return (
    <>
      <SearchTitle>Find your favorite pet</SearchTitle>
      <SearchForm>
        <SearchInput
          placeholder="Search"
          onChange={onInputChange}
          value={filterValue}
          type="text"
          inputProps={{ 'aria-label': 'search' }}
          endAdornment={
            emptyInput ? (
              <InputSearchIcon>
                <IconSearch />
              </InputSearchIcon>
            ) : (
              <InputButton type="button" onClick={reset} aria-label="search">
                <IconClose />
              </InputButton>
            )
          }
        />
      </SearchForm>
    </>
  );
};

export default NoticeSearch;
