import styles from './NotFoundPages.styled';
const { StyledLink, BackToMainBtn, BtnIcon, Container } = styles;

const NotFoundPages = () => {
  return (
    <Container>
      <BackToMainBtn variant="contained" endIcon={<BtnIcon />}>
        <StyledLink to="/">Back to Home Page</StyledLink>
      </BackToMainBtn>
    </Container>
  );
};

export default NotFoundPages;
