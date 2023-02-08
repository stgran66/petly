import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './NewsPage.styled';
import Loader from 'components/Loader';
const {
  Icon,
  SearchForm,
  SearchInput,
  SearchTitle,
  ArticleUrl,
  InputIcon,
  ArticleDate,
  ArticleTitle,
  ArticleText,
} = styles;

function NewsPage() {
  const [data, setData] = useState();

  const getAllData = () => {
    axios
      .get('https://petly-backend-9tz8.onrender.com/api/news')
      .then(response => {
        const filterArticle = query => {
          if (!query) {
            return response.data;
          }
          return response.data.filter(({ title }) =>
            title.toLowerCase().includes(query.toLowerCase())
          );
        };
        const filteredNews = filterArticle(searchArticle, data);
        setData(filteredNews);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const [searchArticle, setSearchArticle] = useState('');
  useEffect(() => {
    getAllData();
  }, [searchArticle, data, getAllData]);
  return (
    <>
      <SearchTitle>News Page</SearchTitle>
      <SearchForm>
        <SearchInput
          placeholder="Search"
          value={searchArticle}
          onChange={e => setSearchArticle(e.target.value)}
          onSubmit={e => setSearchArticle(e.target.value)}
        />
        <InputIcon>
          <Icon />
        </InputIcon>
      </SearchForm>

      {data ? (
        data.map(data => {
          return (
            <div key={data._id}>
              <ArticleTitle>{data.title}</ArticleTitle>
              <ArticleText>{data.description}</ArticleText>
              <ArticleDate>{data.date}</ArticleDate>
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
