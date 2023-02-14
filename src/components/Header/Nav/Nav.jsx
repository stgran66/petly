import { useLocation } from 'react-router-dom';
import styles from './Nav.styled';

const navItems = [
  { href: 'news', text: 'News' },
  { href: 'notices', text: 'Find pet' },
  { href: 'friends', text: 'Our friends' },
];

const Nav = ({ closeBurgerMenu }) => {
  const { NavList, Link } = styles;
  const location = useLocation();
  return (
    <NavList>
      {navItems.map(({ href, text, end }) => (
        <li key={href}>
          <Link
            to={href}
            title={text}
            end={end}
            onClick={closeBurgerMenu}
            state={{ from: location }}
          >
            {text}
          </Link>
        </li>
      ))}
    </NavList>
  );
};

export default Nav;
