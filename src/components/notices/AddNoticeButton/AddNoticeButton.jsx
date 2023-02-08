import styles from './AddNoticeButton.styled';

const { AddIcon, BtnInfo, AddButton } = styles;

const AddNoticeButton = () => {
  return (
    <AddButton>
      <AddIcon />
      <BtnInfo>Add pet</BtnInfo>
    </AddButton>
  );
};

export default AddNoticeButton;
//
