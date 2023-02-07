import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from './NewsPage.styled';
const { Icon, SearchForm, SearchInput, SearchTitle, ArticleUrl, InputIcon, ArticleDate,  ArticleTitle, ArticleText } = styles;

function NewsPage() {
  const [data, setData] = useState('');
  const getAllData = () => {
    axios
      .get('https://petly-backend-9tz8.onrender.com/api/news')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllData();
  }, []);
  return (
    <>
     <SearchTitle>News Page</SearchTitle>
     <SearchForm>
      <SearchInput placeholder="Search" />
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
        <h3>No data yet</h3>
      )}
    </>
  );
}

export default NewsPage;
