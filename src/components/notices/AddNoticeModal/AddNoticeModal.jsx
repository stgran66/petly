import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from 'redux/notices/operations';
import styles from './AddNoticeModal.styled';
import FemaleIcon from '../../../images/female-icon.svg';
import plusIcon from '../../../images/plus-icon.svg';
import MaleIcon from '../../../images/male-icon.svg';
import * as Yup from 'yup';

const {
  ModalBackdrop,
  ModalTextarea,
  ModalBox,
  LabelText,
  AddImageWrap,
  ModalTitle,
  ModalInfo,
  ErrorMessage,
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

const sellPetSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: Yup.string()
    .min(2, 'Name should be from 2 to 16 symbols')
    .max(16, 'Name should be from 2 to 16 symbols')
    .required('The name is required'),
  // birthday: Yup.date()
  //   .default('00.00.0000')
  //   .format(['DD.MM.YYYY'])
  //   .min('01.01.1900')
  //   .max(new Date(), 'Future date not allowed')
  //   .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Breed should be from 2 to 24 symbols')
    .max(24, 'Breed should be from 2 to 24 symbols')
    .required('The breed is required'),
  // sex: Yup.string(),
  // place: Yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
  // price: Yup.string().required('The price is required'),
  // comments: Yup.string()
  //   .min(8, 'Too Short!')
  //   .max(120, 'Too Long!')
  //   .required('The comments are required'),
  // imageUrl: Yup.mixed().required('Image is required (jpg, jpeg, png)'),
});

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: Yup.string()
    .min(2, 'Name should be from 2 to 16 symbols')
    .max(16, 'Name should be from 2 to 16 symbols')
    .required('The name is required'),
  // birthday: Yup.date()
  //   .default('00.00.0000')
  //   .format(['DD.MM.YYYY'])
  //   .utc()
  //   .min('01.01.1900')
  //   .max(new Date(), 'Future date not allowed')
  //   .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Breed should be from 2 to 24 symbols')
    .max(24, 'Breed should be from 2 to 24 symbols'),
  // sex: Yup.string().required(),
  // place: Yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
  // price: Yup.string()
  //   .min(1, 'Too Short!')
  //   .matches(/^[1-9][0-9]*$/, 'price cannot starts from zero')
  //   .required('The price is required'),
  // comments: Yup.string()
  //   .min(8, 'Too Short!')
  //   .max(120, 'Too Long!')
  // .message('breed should be from 8 to 120 symbols'),
  //   .required('The comments are required'),
  // imageUrl: Yup.mixed().required('Image is required (jpg, jpeg, png)'),
  category: Yup.string().required(),
});

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

  const addModalSchema = category => {
    if (category === 'sell') {
      return sellPetSchema;
    }
    return schema;
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
          validationSchema={() => addModalSchema(selectedCategoryValue)}
          onSubmit={onHandleSubmit}
        >
          {({ handleSubmit, setFieldValue, errors, touched }) => (
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
                      value="lost-found"
                      control={<ModalCategoryField />}
                      checked={selectedCategoryValue === 'lost-found'}
                      onChange={onRadioCategoryChange}
                      label="lost/found"
                    />
                    <ModalCategoryLabel
                      value="for-free"
                      control={<ModalCategoryField />}
                      label="in good hands"
                      checked={selectedCategoryValue === 'for-free'}
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
                    {errors.title && touched.title ? (
                      <ErrorMessage>{errors.title}</ErrorMessage>
                    ) : null}
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Name pet
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="name"
                      placeholder="Type name pet"
                    />
                    {errors.name && touched.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Date of birth
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="birthday"
                      placeholder="Type date of birth (DD.MM.YY)"
                    />
                    {/* {errors.birthday && touched.birthday ? (
                      <ErrorMessage>{errors.birthday}</ErrorMessage>
                    ) : null} */}
                  </ModalFieldLabel>

                  <ModalFieldLabel>
                    Type breed
                    <ModalField
                      type="text"
                      onChange={e => handleInputChange(e, setFieldValue)}
                      name="breed"
                      placeholder="Type breed"
                    />
                    {errors.breed && touched.breed ? (
                      <ErrorMessage>{errors.breed}</ErrorMessage>
                    ) : null}
                  </ModalFieldLabel>
                  <ModalBtnWrap>
                    <ModalBtn
                      type="button"
                      active
                      // disabled={
                      //   errors.breed ||
                      //   errors.name ||
                      //   errors.title ||
                      //   touched.breed ||
                      //   touched.name ||
                      //   touched.title
                      //     ? true
                      //     : false
                      // }
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
                      <ModalLabel
                        value="male"
                        control={<ModalSexField />}
                        label={
                          <>
                            <span>
                              <RadiImg src={FemaleIcon} alt="female" />{' '}
                            </span>
                            <LabelText variant="headline">Male</LabelText>
                          </>
                        }
                        checked={selectedSexValue === 'male'}
                        onChange={onRadioSexChange}
                      />
                    </RadioWrap>
                    <RadioWrap>
                      <ModalLabel
                        checked={selectedSexValue === 'female'}
                        onChange={onRadioSexChange}
                        value="female"
                        control={<ModalSexField />}
                        label={
                          <>
                            <span>
                              <RadiImg src={MaleIcon} alt="male" />
                            </span>
                            <LabelText variant="headline">Female</LabelText>
                          </>
                        }
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
