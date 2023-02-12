import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './NewsPage.styled';
import Loader from 'components/Loader';
const {
  IconSearch,
  SearchForm,
  SearchInput,
  SearchTitle,
  ArticleUrl,
  InputSearchIcon,
  ArticleDate,
  ArticleTitle,
  ArticleText,
  IconClose,
  InputButton,
} = styles;

function NewsPage() {
  const [data, setData] = useState();
  const [searchArticle, setSearchArticle] = useState('');

  useEffect(() => {
    const getAllData = () => {
      axios
        .get('https://petly-backend-9tz8.onrender.com/api/news')
        .then(response => {
          let news = response.data;
          for (let article of news) {
            article.date = new Date(article.date).valueOf();
          }
          news.sort((a, b) => b.date - a.date);
          const filterArticle = query => {
            if (!query) {
              return news;
            }
            return news.filter(({ title }) =>
              title.toLowerCase().includes(query.toLowerCase())
            );
          };
          const filteredNews = filterArticle(searchArticle);
          console.log(filteredNews);
          setData(filteredNews);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getAllData();
  }, [searchArticle]);

  function handleSubmit(e) {
    e.preventDefault();
  }
  const reset = () => {
    setSearchArticle('');
  };
  const getFormattedData = date => {
    let formattedDay = new Date(date).getDate();
    let formattedMonth = new Date(date).getMonth();
    let formattedYear = new Date(date).getFullYear();
    if (formattedDay < 10) {
      formattedDay = `0${formattedDay}`;
    }
    if (formattedMonth < 10) {
      formattedMonth = `0${formattedMonth}`;
    }
    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
  };

  const emptyInput = searchArticle === '';
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

      {data ? (
        data.map(data => {
          return (
            <div key={data._id}>
              <ArticleTitle>{data.title}</ArticleTitle>
              <ArticleText>{data.description}</ArticleText>
              <ArticleDate>{getFormattedData(data.date)}</ArticleDate>
              <ArticleUrl
                href={data.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Read more
              </ArticleUrl>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </>
  );
}

export default NewsPage;
