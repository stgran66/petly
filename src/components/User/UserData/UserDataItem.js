import { useState } from 'react';
// import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import styles from './UserData.styled';
import Loader from 'components/Loader';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import ButtonChange from './ButtonChange';
// import ButtonSubmit from './ButtonSubmit';
const {
  InputWrapp,
  UserDataItemWrapp,
  UserDataItemLabel,
  UserDataItemInput,
  ButtonWrapp,
  InfoSubmitIcon,
  InfoChangeIcon,
  UserDataItemForm,
} = styles;

const { updateUserData } = userOperations;
const { selectLoadingUser, selectErrorUser, selectUserInfo} = userSelectors;





 



const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);
  const [inputValue, setInputValue] = useState(defaultValue);
   const user = useSelector(selectUserInfo);
  //   const inputRef = useRef(null);
  // const { name, email, birthday, phone, city } = inputValue;
  
  const userIntialValues = {email: user.email};
const userValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(10)
    .max(63)
    .matches(
      /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
      'Incorrect email address'
    )
    .required(),
  password: Yup.string().min(7).max(32).required(),
  name: Yup.string().required(),
  city: Yup.string().min(3).max(32),
  phone: Yup.string()
    .min(13)
    .max(13)
    .matches('\\+?(?:\\s*\\d){12}\\s*', 'just numbers +380123456789')
    .required(),
});

console.log('22',user.name)






  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setInputValue(value);
    }
    if (name === 'email') {
      setInputValue(value);
    } else if (name === 'birthday') {
      setInputValue(value);
    } else if (name === 'phone') {
      setInputValue(value);
    } else if (name === 'city') {
      setInputValue(value);
    }
  };

  //   function handleFocus() {
  //     inputRef.current.focus();
  //   }

  const activeHandleClick = name => {
    setActive(name);
    console.log('1')
    // handleFocus();
  };

  const handleSubmit = name => {
    setActive('');
    // handleFocus();

    dispatch(updateUserData({ [name]: inputValue }));
  };


 



  return (
    <UserDataItemWrapp>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <Formik
          initialValues={userIntialValues}
          validationSchema={userValidationSchema}
        >
          <UserDataItemForm>
            <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
            <InputWrapp>
                <UserDataItemInput
                onChangeCapture={handleChange}
                defaultValue={inputValue}
                active={active === name}
                disabled={active !== name}
                type={type}
                name={name}
                id={name}
                //   ref={inputRef}
              />
              {active === name ? (
                <ButtonWrapp type="button" onClick={() => handleSubmit(name)}>
                  <InfoSubmitIcon />
                </ButtonWrapp>
              ) : (
                <ButtonWrapp
                  disabled={active ? name : !name}
                  type="button"
                  onClick={() => activeHandleClick(name)}
                >
                  <InfoChangeIcon
                    style={active ? { color: 'black' } : { color: '#F59256' }}
                  />
                </ButtonWrapp>
              )}
            </InputWrapp>
          </UserDataItemForm>
        </Formik>
      )}
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
