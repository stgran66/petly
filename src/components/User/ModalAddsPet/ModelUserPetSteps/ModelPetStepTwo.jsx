import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ModelPetStepTwo = () => {
  return (
    <>
      <h2>Hello Two!</h2>
    </>
  );
};

export default ModelPetStepTwo;

// export const formTwoValidationSchema = Yup.object({
//   comments: Yup.string()
//     .min(8, 'Comments Too Short!')
//     .max(120, 'Comments Too Long!')
//     .required('Comment is required'),
//   petImage: Yup.mixed().label('Pet image').required('Pet photo is required'),
// });

// comments: Joi.string()
//     .min(8)
//     .max(120)
//     .message('comment should be 8 to 120 characters long'),
