import { AuthBtns, ButtonEl } from './AuthNav.styled';
import { useNavigate } from 'react-router-dom';
function AuthNav({ closeBurgerMenu }) {
  const navigate = useNavigate();

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
