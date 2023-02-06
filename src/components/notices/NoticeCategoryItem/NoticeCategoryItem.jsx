import { Link } from 'react-router-dom';

const NoticeCategoryItem = ({ title }) => {
  return <Link to={`notices`}>{title}</Link>;
};

export default NoticeCategoryItem;
