import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setQueryValue } from 'redux/notices/filterSlice';
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
    return dispatch(setFilter(value));
  };

  const reset = () => {
    dispatch(setFilter(''));
    dispatch(setQueryValue(''));
  };

  const onHandleClick = () => {
    return dispatch(setQueryValue(filterValue));
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
              <>
                <InputButton active="true" type="button" onClick={onHandleClick}>
                  <IconSearch />
                </InputButton>
                <InputButton type="button" onClick={reset} aria-label="search">
                  <IconClose />
                </InputButton>
              </>
            )
          }
        />
      </SearchForm>
    </>
  );
};

export default NoticeSearch;
