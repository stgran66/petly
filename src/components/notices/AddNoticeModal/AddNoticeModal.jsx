import styles from './AddNoticeModal.styled';

const {
  ModalBackdrop,
  Modal,
  ModalTitle,
  ModalInfo,
  ModalForm,
  InputLabel,
  Input,
  ModalBtn,
} = styles;

const AddNoticeModal = () => {
  return (
    <ModalBackdrop>
      <Modal>
        <ModalTitle>Add pet</ModalTitle>
        <ModalInfo>Add pet</ModalInfo>
        <ModalForm>
          <InputLabel>
            <Input></Input>
          </InputLabel>
          <ModalBtn></ModalBtn>
          <ModalBtn></ModalBtn>
        </ModalForm>
      </Modal>
    </ModalBackdrop>
  );
};
export default AddNoticeModal;
