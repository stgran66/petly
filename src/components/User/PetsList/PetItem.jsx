import { useState } from 'react';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

import styles from './PetsList.styled';

import ModalUser from '../ModalUser';
import ModalPetDelete from './ModalPetDelete';

const {
  PetItemPhotoWrapp,
  PetInfo,
  PetInfoName,
  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
} = styles;

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const MIN_FILE_SIZE = 10240; //10KB

let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(16)
    .matches(RegExp, 'Name may contain only letters, apostrophe, dash and spaces')
    .required(),
  birthday: yup
    .date()
    .test('format', 'Type in format 01.01.1910', (_, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform((_, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());
      return parsedDate;
    })
    .min(new Date(1950, 1, 1), 'Birthday should be after 1950')
    .max(new Date(), 'Birthday could not be after today')
    .typeError('Date should be in dd.mm.yyyy format'),
  breed: yup
    .string()
    .trim()
    .matches(RegExp, 'Breed may contain only letters, apostrophe, dash and spaces.')
    .min(2)
    .max(16)

    .required(),
  photo: yup
    .mixed()
    .required('Image is Required!')
    .test(
      'fileType',
      'Unsupported file type',
      value => value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
    )
    .test(
      'is-valid-size',
      'Max allowed size is 10KB',
      value => value === null || (value && value.size >= MIN_FILE_SIZE)
    ),
  comments: yup
    .string()
    .trim()
    .min(8)
    .max(120)
    .required('Comment should be 8 to 120 characters long'),
});

const PetItem = ({ pet }) => {
  const { _id, name, birthday, breed, photo, comments } = pet;
  const [showModal, setShowModal] = useState(false);
  const [fileInput, setFileInput] = useState(photo);

  const onClose = () => {
    setShowModal(true);
  };

  // ----------------------------------------------------

  return (
    <>
      <PetItemPhotoWrapp enctype="multipart/form-data">
        <PetInfoFoto src={fileInput} alt="pet foto" />
        <input
          type="file"
          name="photo"
          accept=".png, .jpeg, .jpg, .webp"
          // onChange={e => selectFile(e, setFieldValue)}
        />
      </PetItemPhotoWrapp>

      <PetInfoWrapp>
        <PetInfo>
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} required id="name" />
          </li>

          <li>
            <label htmlFor="birthday">Date of birth:</label>
            <input name="birthday" defaultValue={birthday} required id="birthday" />
          </li>

          <li>
            <label htmlFor="breed">Date of birth:</label>
            <input type="text" name="breed" defaultValue={breed} required id="breed" />
          </li>

          <li>
            <label htmlFor="comments">Comments:</label>
            <textarea
              // component="textarea"
              name="comments"
              defaultValue={comments}
              required
              id="comments"
              // onChange={e => handleInputChange(e, setFieldValue)}
            />
          </li>
        </PetInfo>
        <PetDeleteButton type="button" onClick={onClose}>
          <PetDeleteIcon />
        </PetDeleteButton>

        {showModal && (
          <ModalUser setShowModal={setShowModal}>
            <ModalPetDelete setShowModal={setShowModal} petId={_id} />
          </ModalUser>
        )}
      </PetInfoWrapp>
    </>

    // <>
    //   <PetInfoFoto src={photo} alt="pet foto" />
    //   <PetInfoWrapp>
    //     <PetInfo>
    //       <li>
    //         <PetInfoName>Name: </PetInfoName> {name}
    //       </li>
    //       <li>
    //         <PetInfoName>Date of birth: </PetInfoName> {birthday}
    //       </li>
    //       <li>
    //         <PetInfoName>Breed: </PetInfoName> {breed}
    //       </li>
    //       <li>
    //         <PetInfoName>Comments:</PetInfoName> {comments}
    //       </li>
    //     </PetInfo>
    //     <PetDeleteButton type="button" onClick={onClose}>
    //       <PetDeleteIcon />
    //     </PetDeleteButton>

    //     {showModal && (
    //       <ModalUser setShowModal={setShowModal}>
    //         <ModalPetDelete setShowModal={setShowModal} petId={_id} />
    //       </ModalUser>
    //     )}
    //   </PetInfoWrapp>
    // </>
  );
};

export default PetItem;
