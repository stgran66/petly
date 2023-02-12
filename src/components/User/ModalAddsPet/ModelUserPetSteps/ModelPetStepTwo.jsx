import { Formik, Form, ErrorMessage } from 'formik';

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
//     .label('Comment')
//     .required('Comment is required'),
//   petImage: Yup.mixed().label('Pet image').required('Pet photo is required'),
// });
