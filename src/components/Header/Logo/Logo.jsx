import styles from './Logo.styled';

const Logo = () => {
  const { LogoEl, Link } = styles;
  return (
    <LogoEl data-aos="zoom-in-down" data-aos-duration="500">
      <Link to="/">
        pe
        <span>t</span>
        ly
      </Link>
    </LogoEl>
  );
};

export default Logo;
