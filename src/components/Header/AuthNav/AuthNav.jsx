import styles from './AuthNav.styled';

const authNav = [
  { href: 'login', text: 'Login' },
  { href: 'register', text: 'Registration' },
];

function AuthNav({ closeBurgerMenu }) {
  const { AuthBtns, ButtonEl, Link } = styles;

  return (
    <AuthBtns>
      {authNav.map(({ href, text }) => (
        <li key={href} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          <Link to={href} onClick={closeBurgerMenu}>
            <ButtonEl
              variant="outlined"
              onClick={() => {
                closeBurgerMenu && closeBurgerMenu();
              }}
            >
              {text}
            </ButtonEl>
          </Link>
        </li>
      ))}
    </AuthBtns>
  );
}

export default AuthNav;
