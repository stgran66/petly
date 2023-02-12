import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/operations';
import styles from './AddNoticeModal.styled';
// import FemaleIcon from '../../../images/female-icon.svg';
// import MaleIcon from '../../../images/male-icon.svg';
const {
  ModalBackdrop,
  ModalBox,
  ModalTitle,
  ModalInfo,
  ModalCategoryGroup,
  ModalCategoryLabel,
  IconClose,
  InputButton,
  ModalCategoryField,
  ModalFieldLabel,
  ModalField,
  ModalBtnWrap,
  ModalBtn,
  ModalRadioGroup,
  ModalSexField,
  ModalLabel,
} = styles;
const { addNotice } = operations;
const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  place: '',
  comments: '',
  imageUrl: '',
  sex: '',
};

const AddNoticeModal = ({ isModalOpen, setIsModalOpen }) => {
  // const [value, setValue] = useState('');
  const [firstPage, setFirstPage] = useState(true);
  const dispatch = useDispatch();
  // const handleChangeRadio = event => {
  //   const { value } = event.target;
  //   setValue(value);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onHandleSubmit = async (values, actions) => {
    const notice = await {
      ...values,
    };
    dispatch(addNotice(notice));
    setIsModalOpen(false);
    // actions.setSubmitting(false);
  };

  return (
    <ModalBackdrop
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <ModalTitle id="modal-modal-title">Add pet</ModalTitle>
        {firstPage && (
          <ModalInfo id="modal-modal-description">
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </ModalInfo>
        )}
        <InputButton onClick={() => setIsModalOpen(false)}>
          <IconClose />
        </InputButton>
        <Formik initialValues={initialValues} onSubmit={onHandleSubmit}>
          {({ handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              {firstPage ? (
                <>
                  <ModalCategoryGroup onChange={handleChange} name="category">
                    <ModalCategoryLabel
                      value="lost/found"
                      control={<ModalCategoryField />}
                      label="lost/found"
                    />
                    <ModalCategoryLabel
                      value="in good hands"
                      control={<ModalCategoryField />}
                      label="in good hands"
                      // checked={value === 'in good hands' && true}
                    />
                    <ModalCategoryLabel
                      value="sell"
                      // checked={value === 'sell' && true}
                      control={<ModalCategoryField />}
                      label="sell"
                    />
                  </ModalCategoryGroup>
                  <ModalFieldLabel>
                    Title of ad
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="title"
                      placeholder="Type pet info"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Name pet
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="name"
                      placeholder="Type name pet"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Date of birth
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="birthday"
                      placeholder="Type date of birth"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Type breed
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="breed"
                      placeholder="Type breed"
                    />
                  </ModalFieldLabel>
                  <ModalBtnWrap>
                    <ModalBtn
                      type="button"
                      active
                      onClick={() => setFirstPage(false)}
                    >
                      Next
                    </ModalBtn>
                    <ModalBtn type="button" onClick={() => handleCancel()}>
                      Cancel
                    </ModalBtn>
                  </ModalBtnWrap>
                </>
              ) : (
                <>
                  <ModalRadioGroup onChange={handleChange} name="sex">
                    <ModalLabel
                      value="male"
                      control={<ModalSexField />}
                      label="male"
                      // checked={value === 'male' && true}
                    />
                    <ModalLabel
                      value="female"
                      control={<ModalSexField />}
                      label="female"
                      // checked={value === 'female' && true}
                    />
                  </ModalRadioGroup>
                  <ModalFieldLabel>
                    Location
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="place"
                      placeholder="Type pet location"
                    />
                  </ModalFieldLabel>
                  <ModalFieldLabel>
                    Price
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="price"
                      placeholder="Type pet price"
                    />
                  </ModalFieldLabel>
                  <ModalFieldLabel>
                    Load the pet's image
                    <ModalField
                      // onChange={handleChange}
                      name="imageUrl"
                      type="file"
                    />
                  </ModalFieldLabel>
                  <ModalFieldLabel>
                    Comments
                    <ModalField
                      type="text"
                      onChange={handleChange}
                      name="comments"
                      placeholder="Type your comments"
                    />
                  </ModalFieldLabel>
                  <ModalBtnWrap>
                    <ModalBtn type="button" onClick={() => setFirstPage(true)}>
                      Back
                    </ModalBtn>
                    <ModalBtn type="submit" active>
                      Done
                    </ModalBtn>
                  </ModalBtnWrap>
                </>
              )}
            </Form>
          )}
        </Formik>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default AddNoticeModal;
