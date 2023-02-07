import React from 'react';

import styles from './styled';
import errorImg from '../../images/ErrorPage.jpg';

const { StyledFriend } = styles;

const Friend = ({ friend }) => {
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } = friend;

  return (
    <StyledFriend>
      <h3>
        <a href={url}>{title}</a>{' '}
      </h3>

      <div>
        <img src={imageUrl ? imageUrl : errorImg} alt="company logo" />
        <dl>
          <dt>Time:</dt>
          <dd>
            {!workDays || workDays.length === 0
              ? '--------------------'
              : `${workDays.find(day => day.isOpen === true).from} - ${
                  workDays.find(day => day.isOpen === true).to
                }`}
          </dd>
          <dt>Adress:</dt>
          <dd>
            {!addressUrl ? (
              !address ? (
                '--------------------'
              ) : (
                `${address}`
              )
            ) : (
              <a href={addressUrl}>{address}</a>
            )}
          </dd>
          <dt>Email:</dt>
          <dd>{!email ? '--------------------' : <a href={`mailto:${email}`}>{email}</a>}</dd>
          <dt>Phone:</dt>
          <dd>{!phone ? '--------------------' : <a href={`tel:${phone}`}>{phone}0</a>}</dd>
        </dl>
      </div>
    </StyledFriend>
  );
};

export default Friend;
