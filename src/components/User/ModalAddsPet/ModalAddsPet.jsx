import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import modelStepsPet from './ModelUserPetSteps';
import userOperations from 'redux/user/operations';

import styles from './ModalAddsPet.styled';

const { addUserPet } = userOperations;
const { ModalAddPetWrapp, ModalTitle, ModalCloseButton, ModalCloseIcon } =
  styles;

const { ModelPetStepOne, ModelPetStepTwo } = modelStepsPet;

const ModalAddsPet = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    breed: '',
    photo: '',
    comments: '',
  });

  const [page, setPage] = useState(0);

  const onClose = () => {
    setShowModal(false);
  };

  const fetchPets = form => {
    dispatch(addUserPet(form));
  };

  // const fetchPets = form => {
  //   const dataForm = {
  //     ...form,
  //     birthday: parseDateToISO(form.birthday),
  //   };
  //   dispatch(addUserPet(dataForm));
  // };

  // function parseDateToISO(str) {
  //   const dateParts = str.split('.');
  //   const formattedDate = new Date(
  //     +dateParts[2],
  //     dateParts[1] - 1,
  //     +dateParts[0]
  //   );

  //   return formattedDate.toISOString();
  // }

  const handleNextStep = async (newData, final = false) => {
    setFormData(prev => (prev = newData));
    setPage(prev => prev + 1);

    if (final) {
      try {
        await fetchPets(newData);
        onClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handlePrevStep = newData => {
    setFormData(prev => ({ ...prev, ...newData }));
    setPage(prev => prev - 1);
  };

  const steps = [
    <ModelPetStepOne
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      // title={FormTitles[page]}
    />,
    <ModelPetStepTwo
      prev={handlePrevStep}
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
      // title={FormTitles[page]}
    />,
  ];
  return (
    <ModalAddPetWrapp>
      <ModalTitle>Add pet</ModalTitle>
      <ModalCloseButton tupe="button" onClick={e => onClose(e)}>
        <ModalCloseIcon />
      </ModalCloseButton>
      {steps[page]}
    </ModalAddPetWrapp>
  );
};

export default ModalAddsPet;
