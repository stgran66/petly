import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import modelStepsPet from './ModelUserPetSteps';
import userOperations from 'redux/user/operations';

import styles from './ModalAddsPet.styled';

const { addUserPet } = userOperations;
const { ModalAddPetWrapp, ModalTitle, ModalCloseButton, ModalCloseIcon } = styles;

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

  const handleNextStep = async (newData, final = false) => {
    setFormData(prev => (prev = newData));
    setPage(prev => prev + 1);

    if (final) {
      try {
        const dataToSend = new FormData();
        for (const [key, value] of Object.entries(newData)) {
          dataToSend.append(key, value);
        }
        await fetchPets(dataToSend);
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
    />,
    <ModelPetStepTwo
      prev={handlePrevStep}
      onClose={onClose}
      next={handleNextStep}
      data={formData}
      setFormData={setFormData}
    />,
  ];
  return (
    <ModalAddPetWrapp>
      <ModalTitle>Add pet</ModalTitle>
      <ModalCloseButton type="button" onClick={e => onClose(e)}>
        <ModalCloseIcon />
      </ModalCloseButton>
      {steps[page]}
    </ModalAddPetWrapp>
  );
};

export default ModalAddsPet;
