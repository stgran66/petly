import React from 'react';

import styles from './styled';

const { StyledModal } = styles;

const daysOfWeek = {
  0: 'MN',
  1: 'TU',
  2: 'WE',
  3: 'TH',
  4: 'FR',
  5: 'SA',
  6: 'SU',
};

const TimeModal = ({ timeTable }) => {
  if (!timeTable || timeTable.length === 0) {
    return;
  }

  return (
    <StyledModal>
      <ul>
        {timeTable.map((day, idx) => {
          return (
            <li key={idx}>
              <span>{daysOfWeek[idx]} </span>
              <span>
                {day.from}- {day.to}
              </span>
            </li>
          );
        })}
      </ul>
    </StyledModal>
  );
};

export default TimeModal;
