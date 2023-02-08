import styles from './UserData.styled';
const { ButtonWrapp, InfoChangeIcon } = styles;

const ButtonChange = ({ onClick }) => {
  return (
    <ButtonWrapp type="button" onClick={onClick}>
      <InfoChangeIcon />
    </ButtonWrapp>
  );
};

export default ButtonChange;
