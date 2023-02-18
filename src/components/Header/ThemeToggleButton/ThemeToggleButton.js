import { useSelector, useDispatch } from 'react-redux';
import selectTheme from 'redux/theme/selectors';
import styles from './ThemeToggleButton.styled';
import { changeTheme } from 'redux/theme/themeSlice';

const { ToggleButton } = styles;

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <ToggleButton>
      <input
        type="checkbox"
        defaultChecked={theme === 'ligth' ? true : false}
        onChange={() => {
          console.log('clicked');
          dispatch(changeTheme());
        }}
      />
      <div />
    </ToggleButton>
  );
};

export default ThemeToggleButton;
