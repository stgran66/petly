import React, { useState, useEffect } from 'react';
import modelStepsPet from './ModelUserPetSteps';

import styles from './ModalAddsPet.styled';
const { ModalAddPetWrapp, ModalTitle, ModalCloseButton, ModalCloseIcon } =
  styles;

const { ModelPetStepOne, ModelPetStepTwo } = modelStepsPet;

const ModalAddsPet = ({ setShowModal }) => {
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

  const steps = [
    <ModelPetStepOne
      // onClose={onClose}
      // next={handleNextStep}
      data={formData}
      // setFormData={setFormData}
      // title={FormTitles[page]}
    />,
    <ModelPetStepTwo
    // prev={handlePrevStep}
    // onClose={onClose}
    // next={handleNextStep}
    // data={formData}
    // setFormData={setFormData}
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
