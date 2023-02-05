import { useNavigate } from 'react-router-dom';
import styles from './AuthNav.styled';

function AuthNav({ closeBurgerMenu }) {
  const navigate = useNavigate();
  const { AuthBtns, ButtonEl } = styles;
  return (
    <AuthBtns>
      <li>
        <ButtonEl
          variant="outlined"
          onClick={() => {
            navigate('/login');
            closeBurgerMenu && closeBurgerMenu();
          }}
        >
          Login
        </ButtonEl>
      </li>
      <li>
        <ButtonEl
          variant="outlined"
          onClick={() => {
            navigate('/register');
            closeBurgerMenu && closeBurgerMenu();
          }}
        >
          Registration
        </ButtonEl>
      </li>
    </AuthBtns>
  );
}

export default AuthNav;
