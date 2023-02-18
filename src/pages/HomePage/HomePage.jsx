import styles from './HomePage.styled';
const HomePage = () => {
  const { Title, Wrapper, TitleBlock } = styles;
  return (
    <Wrapper>
      <TitleBlock data-aos="zoom-in" data-aos-duration="3000">
        <Title>Take good care of your small pets</Title>
      </TitleBlock>
    </Wrapper>
  );
};

export default HomePage;
