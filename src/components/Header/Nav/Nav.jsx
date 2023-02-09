import styles from './Nav.styled';

const navItems = [
  { href: 'news', text: 'News' },
  { href: 'notices', text: 'Find pet' },
  { href: 'friends', text: 'Our friends' },
];

const Nav = ({ closeBurgerMenu }) => {
  const { NavList, Link } = styles;
  return (
    <NavList>
      {navItems.map(({ href, text, end }) => (
        <li key={href}>
          <Link to={href} end={end} onClick={closeBurgerMenu}>
            {text}
          </Link>
        </li>
      ))}
    </NavList>
  );
};

export default Nav;
