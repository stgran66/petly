import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/operations';
import styles from './AddNoticeModal.styled';
import FemaleIcon from '../../../images/female-icon.svg';
import plusIcon from '../../../images/plus-icon.svg';
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
  ModalFile,
  AddImageWrap,
  AddImage,
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
  sex: 'male',
};

const AddNoticeModal = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedCategoryValue, setSelectedCategoryValue] = useState('sell');
  const [selectedSexValue, setSelectedSexValue] = useState('');
  const [firstPage, setFirstPage] = useState(true);
  const dispatch = useDispatch();
  const imageFormats = ['image/png', 'image/svg', 'image/jpeg'];

  const onRadioCategoryChange = event => {
    const { value } = event.target;
    setSelectedCategoryValue(value);
  };
  const onRadioSexChange = event => {
    const { value } = event.target;
    setSelectedSexValue(value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onHandleSubmit = async (values, actions) => {
    const notice = await {
      ...values,
    };
    console.log(notice);
    dispatch(addNotice(notice));
    setIsModalOpen(false);
    actions.setSubmitting(false);
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
          {({ handleSubmit, handleChange, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit}>
              {firstPage ? (
                <>
                  <ModalCategoryGroup onChange={handleChange} name="category">
                    <ModalCategoryLabel
                      value="lost/found"
                      control={<ModalCategoryField />}
                      checked={selectedCategoryValue === 'lost/found'}
                      onChange={onRadioCategoryChange}
                      label="lost/found"
                    />
                    <ModalCategoryLabel
                      value="in good hands"
                      control={<ModalCategoryField />}
                      label="in good hands"
                      checked={selectedCategoryValue === 'in good hands'}
                      onChange={onRadioCategoryChange}
                    />
                    <ModalCategoryLabel
                      value="sell"
                      checked={selectedCategoryValue === 'sell'}
                      onChange={onRadioCategoryChange}
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
                      checked={selectedSexValue === 'male'}
                      onChange={onRadioSexChange}
                    >
                      <img
                        width="100"
                        height="100"
                        src={FemaleIcon}
                        alt="female"
                      />
                      male
                    </ModalLabel>
                    <ModalLabel
                      checked={selectedSexValue === 'female'}
                      onChange={onRadioSexChange}
                      value="female"
                      control={<ModalSexField />}
                      label="female"
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
                  {selectedCategoryValue === 'sell' && (
                    <ModalFieldLabel sx={{ marginBottom: '12px' }}>
                      Price
                      <ModalField
                        type="text"
                        onChange={handleChange}
                        name="price"
                        placeholder="Type pet price"
                      />
                    </ModalFieldLabel>
                  )}
                  <ModalFieldLabel
                    component={ModalFile}
                    htmlFor="imageUrl"
                    sx={{ paddingTop: '4px' }}
                  >
                    Load the pet's image
                    <ModalFile
                      accept="image/*"
                      // onChange={handleChange}
                      name="imageUrl"
                      type="file"
                      id="imageUrl"
                      onChange={event => {
                        const imageUrl = event.target.files[0];
                        if (imageUrl) {
                          let fr = new FileReader();
                          fr.onload = function () {
                            document.getElementById('iconPlus').src = fr.result;
                          };
                          fr.readAsDataURL(imageUrl);
                          return setFieldValue('imageUrl', imageUrl);
                        }
                      }}
                    />
                    <AddImageWrap aria-label="upload image">
                      <AddImage id="iconPlus" src={plusIcon} alt="upload pet" />
                    </AddImageWrap>
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
