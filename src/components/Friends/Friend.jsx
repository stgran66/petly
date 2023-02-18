import React, { useState } from 'react';

import styles from './styled';
import TimeModal from './TimeModal';

const { StyledFriend } = styles;

const Friend = ({ friend }) => {
  const [showModal, setShowModal] = useState(false);
  const { address, addressUrl, email, phone, title, url, workDays, imageUrl } = friend;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledFriend>
      <h3>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>{' '}
      </h3>

      <div>
        {imageUrl ? <img src={imageUrl} alt="company logo" /> : <div className="empty-image" />}
        <dl>
          <div>
            <dt>Time:</dt>
            <dd>
              {!workDays || workDays.length === 0 ? (
                '--------------------'
              ) : (
                <button type="button" onMouseEnter={toggleModal} onMouseLeave={toggleModal}>
                  {workDays.find(day => day.isOpen === true).from} -{' '}
                  {workDays.find(day => day.isOpen === true).to}
                </button>
              )}
              {showModal && <TimeModal timeTable={workDays} />}
            </dd>
          </div>
          <div>
            {' '}
            <dt>Adress:</dt>
            <dd>
              {!addressUrl ? (
                !address ? (
                  '--------------------'
                ) : (
                  `${address}`
                )
              ) : (
                <a href={addressUrl} target="_blank" rel="noreferrer">
                  {address}
                </a>
              )}
            </dd>
          </div>
          <div>
            <dt>Email:</dt>
            <dd>{!email ? '--------------------' : <a href={`mailto:${email}`}>{email}</a>}</dd>
          </div>
          <div>
            <dt>Phone:</dt>
            <dd>{!phone ? '--------------------' : <a href={`tel:${phone}`}>{phone}</a>}</dd>
          </div>
        </dl>
      </div>
    </StyledFriend>
  );
};

export default Friend;
