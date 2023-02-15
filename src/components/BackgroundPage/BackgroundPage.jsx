import styles from './BackgroundPage.styled';

const BackgroundPage = ({ children }) => {
  const { Wrapper } = styles;

  return <Wrapper>{children}</Wrapper>;
};

export default BackgroundPage;
