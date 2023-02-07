import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

function NewsPage() {
  const [data, setData] = useState('');
  const getAllData = () => {
    axios
      .get('https://petly-backend-9tz8.onrender.com/api/news')
      .then(response => {
        console.log(response.data);
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
     <h1>News Page</h1>
     <input placeholder="Search" />
      {data ? (
        data.map(data => {
          return (
            <div>
             
              <div className="article" key={data._id}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>{data.date}</p>
                <a
                  href={data.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  >
                  Read more
                </a>
              </div>
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
