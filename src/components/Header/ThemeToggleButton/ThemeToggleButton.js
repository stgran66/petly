import { useSelector, useDispatch } from 'react-redux';
import selectTheme from 'redux/theme/selectors';
import styles from './ThemeToggleButton.styled';
import { changeTheme } from 'redux/theme/themeSlice';
import { useState } from 'react';

const { ToggleButton } = styles;

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isChecked, setIsChecked] = useState(theme === 'light' ? true : false);

  return (
    <ToggleButton>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          dispatch(changeTheme());
        }}
      />
      <div />
    </ToggleButton>
  );
};

export default ThemeToggleButton;
