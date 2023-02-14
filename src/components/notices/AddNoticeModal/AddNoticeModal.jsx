import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/operations';
import styles from './AddNoticeModal.styled';
import FemaleIcon from '../../../images/female-icon.svg';
import plusIcon from '../../../images/plus-icon.svg';
import MaleIcon from '../../../images/male-icon.svg';
// import * as Yup from 'yup';

const {
  ModalBackdrop,
  ModalTextarea,
  ModalBox,
  AddImageWrap,
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
  AddImage,
  RadioWrap,
  RadiImg,
  PetImg,
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
  sex: 'male',
  imageUrl: '',
  price: '',
};

// const addModalSchema = Yup.object().shape({
//   title: Yup.string()
//     .min(2, 'Too Short!')
//     .max(48, 'Too Long!')
//     .required('The title is required'),
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(16, 'Too Long!')
//     .required('Name is required'),
//   birthday: Yup.date()
//     .required('Date of birth is required')
//     .max(new Date(), 'Future date not allowed'),
//   breed: Yup.string()
//     .min(2, 'Too Short!')
//     .max(24, 'Too Long!')
//     .required('The breed is required'),
//   sex: Yup.string(),
//   location: Yup.string(),
//   price: Yup.string().required('The price is required'),
//   comments: Yup.string()
//     .min(8, 'Too Short!')
//     .max(120, 'Too Long!')
//     .required('The comments are required'),
// });

const AddNoticeModal = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedCategoryValue, setSelectedCategoryValue] = useState('sell');
  const [selectedSexValue, setSelectedSexValue] = useState('');
  const [firstPage, setFirstPage] = useState(true);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialValues);
  const [isAddImg, setIsAddImg] = useState(initialValues.imageUrl);

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

  const handleInputChange = (e, setFieldValue) => {
    const inputName = e.target.name;
    let value = e.target.value;
    setFieldValue(inputName, value);
    setFormData(values => ({ ...values, [inputName]: value }));
  };

  const onAddImage = (e, setFieldValue) => {
    const imageUrl = e.target.files[0];
    if (imageUrl) {
      setIsAddImg(imageUrl);
      setFieldValue('imageUrl', imageUrl);
      setFormData(values => ({
        ...values,
        imageUrl: imageUrl,
      }));
    }
  };

  const onChangeData = async data => {
    try {
      const dataToSend = new FormData();
      for (const [key, value] of Object.entries(data)) {
        dataToSend.append(key, value);
      }
      await dispatch(addNotice(dataToSend));
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleSubmit = async (values, actions) => {
    onChangeData(formData);
    setIsModalOpen(false);
  };

  return (
    <ModalBackdrop
      sx={{
        '& .MuiModal-backdrop': {
          opacity: '0 !important',
        },
      }}
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClick={event =>
        event.target === event.currentTarget && setIsModalOpen(false)
      }
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
        <Formik
          initialValues={initialValues}
          // validationSchema={addModalSchema}
          onSubmit={onHandleSubmit}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              {firstPage ? (
                <>
                  <ModalCategoryGroup
                    onChange={e => {
                      handleInputChange(e, setFieldValue);
                    }}
                    name="category"
                  >
                    <ModalCategoryLabel
                      sx={{
                        '& .MuiFormControlLabel': {
                          fontSize: '30px !important',
                        },
                      }}
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
                  <ModalFieldLabel htmlFor="title">
                    Title of ad
                    <ModalField
                      required
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="title"
                      placeholder="Type pet info"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Name pet
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="name"
                      placeholder="Type name pet"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Date of birth
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="birthday"
                      placeholder="Type date of birth (DD.MM.YY)"
                    />
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Type breed
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
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
                  <ModalFieldLabel htmlFor="radiogroup">
                    The sex
                  </ModalFieldLabel>
                  <ModalRadioGroup
                    id="radiogroup"
                    onChange={e => {
                      handleInputChange(e, setFieldValue);
                    }}
                    name="sex"
                  >
                    <RadioWrap>
                      <RadiImg src={FemaleIcon} alt="female" />
                      <ModalLabel
                        value="male"
                        control={<ModalSexField />}
                        label="Male"
                        checked={selectedSexValue === 'male'}
                        onChange={onRadioSexChange}
                        component={<RadiImg />}
                      />
                    </RadioWrap>
                    <RadioWrap>
                      <RadiImg src={MaleIcon} alt="male" />
                      <ModalLabel
                        checked={selectedSexValue === 'female'}
                        onChange={onRadioSexChange}
                        value="female"
                        control={<ModalSexField />}
                        label="Female"
                      />
                    </RadioWrap>
                  </ModalRadioGroup>
                  <ModalFieldLabel>
                    Location
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="place"
                      placeholder="Type pet location"
                    />
                  </ModalFieldLabel>
                  {selectedCategoryValue === 'sell' && (
                    <ModalFieldLabel sx={{ marginBottom: '12px' }}>
                      Price
                      <ModalField
                        type="text"
                        onChange={e => handleInputChange(e, setFieldValue)}
                        name="price"
                        placeholder="Type pet price"
                        required={selectedCategoryValue === 'sell' && true}
                      />
                    </ModalFieldLabel>
                  )}
                  {isAddImg ? (
                    <PetImg
                      src={URL.createObjectURL(isAddImg)}
                      alt={isAddImg.name}
                    />
                  ) : (
                    <ModalFieldLabel
                      component={ModalFile}
                      htmlFor="imageUrl"
                      sx={{ paddingTop: '4px' }}
                    >
                      Load the pet's image
                      <ModalFile
                        accept="image/*"
                        name="imageUrl"
                        type="file"
                        id="imageUrl"
                        onChange={e => onAddImage(e, setFieldValue)}
                      />
                      <AddImageWrap>
                        <AddImage
                          id="iconPlus"
                          src={plusIcon}
                          alt="upload pet"
                        />
                      </AddImageWrap>
                    </ModalFieldLabel>
                  )}

                  <ModalFieldLabel>
                    Comments
                    <ModalTextarea
                      aria-label="empty textarea"
                      required
                      maxRows="5"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="comments"
                      draggable="false"
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
