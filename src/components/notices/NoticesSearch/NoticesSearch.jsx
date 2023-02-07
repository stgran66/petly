import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/notices/filterSlice';
import selectors from 'redux/notices/selectors';
import styles from './NoticesSearch.styled';
const { Icon, SearchForm, SearchInput, SearchTitle, InputIcon } = styles;
const { selectFilter } = selectors;

const NoticeSearch = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onInputChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };
  return (
    <>
      <SearchTitle>Find your favorite pet</SearchTitle>
      <SearchForm>
        <SearchInput
          onChange={onInputChange}
          value={filterValue}
          type="text"
          autocomplete="off"
          placeholder="Search"
        ></SearchInput>
        <InputIcon>
          <Icon />
        </InputIcon>
      </SearchForm>
    </>
  );
};

export default NoticeSearch;
