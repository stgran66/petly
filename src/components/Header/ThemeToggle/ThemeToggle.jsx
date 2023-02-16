import { useSelector, useDispatch } from 'react-redux';
import selectTheme from 'redux/theme/selectors';
import styles from './ThemeToggle.styled';
import { changeTheme } from 'redux/theme/themeSlice';

const { ToggleButton, StyledDarkIcon, StyledLightIcon } = styles;

const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <ToggleButton onClick={() => dispatch(changeTheme())}>
      {theme === 'light' ? <StyledLightIcon /> : <StyledDarkIcon />}
    </ToggleButton>
  );
};

export default ToggleThemeButton;
