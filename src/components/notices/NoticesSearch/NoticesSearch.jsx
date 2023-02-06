import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/notices/filterSlice';
import { selectFilter } from 'redux/notices/selectors';
import {
  Icon,
  SearchForm,
  SearchInput,
  SearchTitle,
  InputIcon,
} from './NoticesSearch.styled';

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
