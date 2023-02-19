import styles from './styled';

const { Article, TopBorder, ArticleTitle, ArticleText, DateAndLink, ArticleDate, ArticleUrl } =
  styles;

const ArticleItem = ({ article }) => {
  const { _id, date, description, title, url } = article;
  const getFormattedData = date => {
    let formattedDay = new Date(date).getDate();
    let formattedMonth = new Date(date).getMonth() + 1;
    let formattedYear = new Date(date).getFullYear();
    if (formattedDay < 10) {
      formattedDay = `0${formattedDay}`;
    }
    if (formattedMonth < 10) {
      formattedMonth = `0${formattedMonth}`;
    }
    return `${formattedDay}/${formattedMonth}/${formattedYear}`;
  };

  return (
    <Article key={_id}>
      <div>
        <TopBorder />
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText>{description}</ArticleText>
        <DateAndLink>
          <ArticleDate>{getFormattedData(date)}</ArticleDate>
          <ArticleUrl href={url} target="_blank" rel="nofollow noopener noreferrer">
            Read more
          </ArticleUrl>
        </DateAndLink>
      </div>
    </Article>
  );
};

export default ArticleItem;
