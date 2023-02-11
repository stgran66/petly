import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/operations';
import styles from './AddNoticeModal.styled';
// import FemaleIcon from '../../../images/female-icon.svg';
// import MaleIcon from '../../../images/male-icon.svg';
const {
  ModalBackdrop,
  Modal,
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
  category: '',
  title: '',
  name: '',
  birthday: '',
  breed: '',
  place: '',
  comments: '',
  imageUrl: '',
  sex: '',
};

const AddNoticeModal = ({ setIsModalOpen }) => {
  const [categoryValue, setCategoryValue] = useState('sell');
  const [sexValue, setSexValue] = useState('sell');
  const [firstPage, setFirstPage] = useState(true);
  const dispatch = useDispatch();

  const handleChangeRadio = event => {
    const { value } = event.target;
    if (value === 'male' || value === 'female') {
      setSexValue(value);
      return;
    }
    return setCategoryValue(value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onHandleSubmit = async (values, actions) => {
    const notice = await {
      ...values,
      category: categoryValue,
      sex: sexValue,
    };
    console.log(notice);
    actions.setSubmitting(false);
    setIsModalOpen(false);
    // dispatch(addNotice(notice));
  };

  return (
    <ModalBackdrop>
      <Modal>
        <ModalTitle>Add pet</ModalTitle>
        {firstPage && (
          <ModalInfo>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </ModalInfo>
        )}
        <InputButton onClick={() => setIsModalOpen(false)}>
          <IconClose />
        </InputButton>
        <Formik initialValues={initialValues} onSubmit={onHandleSubmit}>
          {props => (
            <Form>
              {firstPage ? (
                <>
                  <ModalCategoryGroup
                    onChange={handleChangeRadio}
                    name="category"
                  >
                    <ModalCategoryLabel
                      value="lost/found"
                      control={<ModalCategoryField />}
                      label="lost/found"
                      checked={categoryValue === 'lost/found' && true}
                    />
                    <ModalCategoryLabel
                      value="in good hands"
                      control={<ModalCategoryField />}
                      label="in good hands"
                      checked={categoryValue === 'in good hands' && true}
                    />
                    <ModalCategoryLabel
                      value="sell"
                      checked={categoryValue === 'sell' && true}
                      control={<ModalCategoryField />}
                      label="sell"
                    />
                  </ModalCategoryGroup>
                  <ModalFieldLabel>
                    Title of ad
                    <ModalField name="title" placeholder="Type pet info" />
                  </ModalFieldLabel>

                  <ModalFieldLabel htmlFor="name">
                    Name pet
                    <ModalField
                      id="name"
                      name="name"
                      placeholder="Type name pet"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel htmlFor="birthday">
                    Date of birth
                    <ModalField
                      id="birthday"
                      name="birthday"
                      placeholder="Type date of birth"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel htmlFor="breed">
                    Type breed
                    <ModalField
                      id="breed"
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
                  <ModalRadioGroup
                    value="{sexValue}"
                    onChange={handleChangeRadio}
                    name="sex"
                  >
                    <ModalLabel
                      value="male"
                      control={<ModalSexField />}
                      label="male"
                      checked={sexValue === 'male' && true}
                    />

                    <ModalLabel
                      value="female"
                      control={<ModalSexField />}
                      label="female"
                      checked={sexValue === 'female' && true}
                    />
                  </ModalRadioGroup>
                  <ModalFieldLabel htmlFor="place">
                    Location
                    <ModalField
                      id="place"
                      name="place"
                      placeholder="Type pet location"
                    />
                  </ModalFieldLabel>
                  <ModalFieldLabel htmlFor="price">
                    Price
                    <ModalField
                      id="price"
                      name="price"
                      placeholder="Type pet price"
                    />
                  </ModalFieldLabel>
                  <ModalFieldLabel htmlFor="imageUrl">
                    Load the pet's image
                    <ModalField id="imageUrl" name="imageUrl" type="file" />
                  </ModalFieldLabel>
                  <ModalFieldLabel htmlFor="comments">
                    Comments
                    <ModalField
                      id="comments"
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
      </Modal>
    </ModalBackdrop>
  );
};
export default AddNoticeModal;
