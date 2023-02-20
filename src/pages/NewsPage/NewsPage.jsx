import newsSelectors from 'redux/news/selectors';
import NotFound from 'components/notices/NotFound';
import Loader from 'components/Loader';
import Article from '../../components/News/Article';
import fetchNews from 'redux/news/operations';
import styles from './NewsPage.styled';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NewsPage = () => {
  const [searchArticle, setSearchArticle] = useState('');
  const { selectNews, selectError, selectLoadingStatus } = newsSelectors;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const data = useSelector(selectNews);

  const [filteredData, setFilteredData] = useState(data);

  const {
    SearchInput,
    SearchTitle,
    InputSearchIcon,
    SearchForm,
    InputButton,
    IconClose,
    IconSearch,
    NewsListStyle,
    NotFoundArticle,
  } = styles;

  useEffect(() => {
    function filterData() {
      const resultData = data
        .map(item => {
          return { ...item, date: new Date(item.date).valueOf() };
        })
        .sort((a, b) => b.date - a.date);

      if (searchArticle.length === 0 && data !== undefined && data.length > 0) {
        setFilteredData(resultData);
      } else if (searchArticle.length > 0 && data !== undefined) {
        const newData = resultData.filter(({ title }) =>
          title.toLowerCase().includes(searchArticle.toLowerCase())
        );
        setFilteredData(newData);
      }
    }
    filterData();
  }, [searchArticle, data]);

  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);
  const emptyInput = searchArticle === '';

  const reset = () => {
    setSearchArticle('');
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <SearchTitle>News Page</SearchTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Search"
          value={searchArticle}
          onChange={e => setSearchArticle(e.target.value)}
          onSubmit={e => setSearchArticle(e.target.value)}
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
      {error && <NotFound />}
      {isLoading && <Loader />}
      <NewsListStyle>
        {filteredData !== undefined && filteredData.length > 0 ? (
          filteredData.map(article => (
            <Article key={article._id} article={article} data-aos="zoom-in" />
          ))
        ) : (
          <NotFoundArticle>Sorry, we didn't find any news on that topic</NotFoundArticle>
        )}
      </NewsListStyle>
    </>
  );
};

export default NewsPage;
