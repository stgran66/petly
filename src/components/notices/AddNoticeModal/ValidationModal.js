import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';

const sellPetSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'Title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: Yup.string()
    .min(2, 'Name should be from 2 to 16 symbols')
    .max(16, 'Name should be from 2 to 16 symbols')
    .required('The name is required'),
  birthday: Yup.date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());
      return parsedDate;
    })
    .min(new Date(1950, 1, 1), 'birthday should be after 1950')
    .max(new Date(), 'birthday could not be after today')
    .typeError('date should be in dd.mm.yyyy format')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Breed should be from 2 to 16 symbols')
    .max(16, 'Breed should be from 2 to 16 symbols')
    .required('The breed is required'),
  sex: Yup.string(),
  place: Yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
  price: Yup.string().required('The price is required'),
  comments: Yup.string()
    .min(8, 'Too Short!')
    .max(120, 'Too Long!')
    .required('The comments are required'),
  imageUrl: Yup.mixed().required('Image is required (jpg, jpeg, png)'),
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
    .max(16, 'Name should be from 2 to 16 symbols'),
  birthday: Yup.date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());
      return parsedDate;
    })
    .min(new Date(1950, 1, 1), 'birthday should be after 1950')
    .max(new Date(), 'birthday could not be after today')
    .typeError('date should be in dd.mm.yyyy format'),
  breed: Yup.string()
    .min(2, 'Breed should be from 2 to 16 symbols')
    .max(16, 'Breed should be from 2 to 16 symbols'),
  sex: Yup.string().required(),
  place: Yup.string().min(4, 'Too Short!').max(60, 'Too Long!').required(),
  price: Yup.string()
    .min(1, 'Too Short!')
    .matches(/^[1-9][0-9]*$/, 'price cannot starts from zero'),
  comments: Yup.string()
    .min(8, 'Comments should be from 8 to 120 symbols')
    .max(120, 'Comments should be from 8 to 120 symbols')
    .required('The comments are required'),
  imageUrl: Yup.mixed().required('Image is required (jpg, jpeg, png)'),
  category: Yup.string().required(),
});

const validationSchemas = { schema, sellPetSchema };

export default validationSchemas;
