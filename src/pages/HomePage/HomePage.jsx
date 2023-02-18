import styles from './HomePage.styled';
const HomePage = () => {
  const { Title, Wrapper } = styles;
  return (
    <Wrapper>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Title>Take good care of your small pets</Title>
      </div>
    </Wrapper>
  );
};

export default HomePage;
