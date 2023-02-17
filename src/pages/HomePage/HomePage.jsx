import styles from './HomePage.styled';
const HomePage = () => {
  const { Title, Wrapper } = styles;
  return (
    <Wrapper>
      <Title
        data-aos="zoom-in"
        data-aos-duration="3000"
      >
        Take good care of your small pets
      </Title>
    </Wrapper>
  );
};

export default HomePage;
