import { NavList, Link } from './Nav.styled';

const navItems = [
  { href: 'news', text: 'News' },
  { href: 'notices', text: 'Find pet' },
  { href: 'friends', text: 'Our friends' },
];

const Nav = ({ closeBurgerMenu }) => {
  return (
    <nav>
      <NavList>
        {navItems.map(({ href, text, end }) => (
          <li key={href}>
            <Link to={href} end={end} onClick={closeBurgerMenu}>
              {text}
            </Link>
          </li>
        ))}
      </NavList>
    </nav>
  );
};

export default Nav;
