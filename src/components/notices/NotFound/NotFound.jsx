import ErrorImg from './NotFound.styled';
import errorImg from '../../../images/ErrorPage.jpg';

const NotFound = () => {
  return <ErrorImg src={errorImg} alt="page_not_found" />;
};

export default NotFound;
