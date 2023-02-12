import { Formik, Form, ErrorMessage } from 'formik';

const ModelPetStepOne = ({ data }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    //   const { name, number } = values;
    //   if (contacts.some(contact => contact.name === name)) {
    //     return alert(`${name} is already in contacts.`);
    //   }
    //   dispatch(addContact({ name, number }));
    //   resetForm();
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <FormWrap>
        <div>
          <label htmlFor={nameInputId}>Name</label>
          <FieldWrap
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Rosie Simpson"
            id={nameInputId}
          />
          <ErrorMessage component="span" name="name" />
          <label htmlFor={numberInputId}>Number</label>
          <FieldWrap
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="459-12-56"
            id={numberInputId}
          />
          <ErrorMessage component="span" name="number" />
        </div>
        <button type="submit" disabled={false}>
          Add contact
        </button>
      </FormWrap>
    </Formik>
    // <>
    //   <h2>Hello One!</h2>
    // </>
  );
};

export default ModelPetStepOne;
