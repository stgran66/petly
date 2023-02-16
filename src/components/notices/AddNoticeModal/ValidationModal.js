import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';

const sellPetSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ]+[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'Title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: Yup.string()
    .min(2, 'Name should be from 2 to 16 symbols')
    .max(16, 'Name should be from 2 to 16 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/,
      'Name should contain only letters with optional dashes and spaces inside'
    )
    .required('The name is required'),
  birthday: Yup.date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());
      return parsedDate;
    })
    .min(new Date(1950, 1, 1), 'Birthday should be after 1950')
    .max(new Date(), 'Birthday could not be after today')
    .typeError('Date should be in dd.mm.yyyy format')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Breed should be from 2 to 16 symbols')
    .max(16, 'Breed should be from 2 to 16 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/,
      'Breed should be from 2 to 16 symbols'
    )
    .required('The breed is required'),
  sex: Yup.string().required('Sex is required field'),
  place: Yup.string()
    .min(4, 'Location should be from 4 to 60 symbols')
    .max(60, 'Location should be from 4 to 60 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/,
      'Location should be in format: CITY REGION'
    )
    .required('Location is required field'),
  price: Yup.string()
    .min(1, 'Too Short! Min 1 symbol')
    .matches(
      /^[1-9][0-9]* ?(\$|₴)?$/,
      'Price is number not starting from zero with $ or ₴ symbol after'
    )
    .required('The price is required'),
  comments: Yup.string()
    .min(8, 'Comments should be from 8 to 120 symbols')
    .max(120, 'Comments should be from 8 to 120 symbols'),
  imageUrl: Yup.mixed().required('Image is required (jpg, jpeg, png)'),
  category: Yup.string().required(),
});

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title should be from 2 to 48 symbols')
    .max(48, 'Title should be from 2 to 48 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ]+[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/,
      'Title should be from 2 to 48 symbols'
    )
    .required('The title is required'),
  name: Yup.string()
    .min(2, 'Name should be from 2 to 16 symbols')
    .max(16, 'Name should be from 2 to 16 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/,
      'Name should contain only letters with optional dashes and spaces inside'
    ),

  birthday: Yup.date()
    .transform((value, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());
      return parsedDate;
    })
    .min(new Date(1950, 1, 1), 'Birthday should be after 1950')
    .max(new Date(), 'Birthday could not be after today')
    .typeError('Date should be in dd.mm.yyyy format'),
  breed: Yup.string()
    .min(2, 'Breed should be from 2 to 16 symbols')
    .max(16, 'Breed should be from 2 to 16 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/,
      'Breed should be from 2 to 16 symbols'
    ),
  sex: Yup.string().required('Sex is required field'),
  place: Yup.string()
    .min(4, 'Location should be from 4 to 60 symbols')
    .max(60, 'Location should be from 4 to 60 symbols')
    .matches(
      /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+$/,
      'Location should be in format: CITY REGION'
    )
    .required('Location is required field'),
  comments: Yup.string()
    .min(8, 'Comments should be from 8 to 120 symbols')
    .max(120, 'Comments should be from 8 to 120 symbols'),
  imageUrl: Yup.mixed().required('Image is required (jpg, jpeg, png)'),
  category: Yup.string().required(),
});

const validationSchemas = { schema, sellPetSchema };

export default validationSchemas;
