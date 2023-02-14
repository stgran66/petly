import { useState } from 'react';
// import { useRef } from 'react';

import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';
// import userSelectors from 'redux/user/selectors';
import styles from './UserData.styled';
// import Loader from 'components/Loader';
// import { useForm } from 'react-hook-form';

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
  Error,
} = styles;

const { updateUserData } = userOperations;
// const { selectLoadingUser, selectErrorUser } = userSelectors;

const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoadingUser);
  // const error = useSelector(selectErrorUser);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [isError, setIsError] = useState('');

  const RegExpName = /^[^ ][a-zA-zа-яіїєА-ЯІЇЄ ]+$/;
  //name can contain only Latin and Cyrillic characters, 2 - 16 symbols and can't start from spaces
  const RegExpEmail = /^((?!-)[a-zA-Z0-9_.-]+){2}@[a-zA-Z0-9.-]+$/;
  // mail can contain only latin letters, numbers and symbols . -  _ (dot, hyphen, underscore) and can't start from hyphen
  const RegExpCity = /^[^ -,][a-zA-zа-яіїєА-ЯІЇЄ, -]+[^ -]$/;
  // city can contain only Latin and Cyrillic characters, 2 - 19 symbols and can't start or end with spaces and hyphen
  // const nowDay = new Date().toLocaleDateString();
  // const minDate = new Date('01.01.1910').toLocaleDateString();
  //   const inputRef = useRef(null);

  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     birthday: '',
  //     phone: '',
  //     city:''
  //   }
  // });

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
    // handleFocus();
  };

  // const handleSubmit = name => {
  //   setActive('');
  //   // handleFocus();
  //   console.log('value', name);
  //   dispatch(updateUserData({ [name]: inputValue }));
  // };

  const handleSubmit = name => {
    if (name === 'name') {
      setActive('name');
      if (!inputValue.match(RegExpName)) {
        setIsError('type only 2 - 16 letters');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(updateUserData({ name: inputValue }));
    } else if (name === 'email') {
      setActive('email');
      if (!inputValue.match(RegExpEmail)) {
        setIsError('type valid email, min 6 symbols');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(updateUserData({ email: inputValue }));
    } else if (name === 'birthday') {
      setActive('birthday');
      // ===========
      setIsError('');
      setActive('');
      dispatch(updateUserData({ birthday: inputValue }));
    } else if (name === 'phone') {
      setActive('phone');
      if (inputValue.slice(0, 4) !== '+380') {
        setIsError('phone should start +380');
        return;
      }
      if (inputValue.length < 13) {
        setIsError('please type 13 signs');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(updateUserData({ phone: inputValue }));
    } else if (name === 'city') {
      setActive('city');
      if (!inputValue.match(RegExpCity)) {
        setIsError('type only 2 - 19 symbols');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(updateUserData({ city: inputValue }));
    }
  };

  return (
    <UserDataItemWrapp>
      <UserDataItemForm>
        <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
        <InputWrapp>
          <div>
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

            {isError && active === name ? <Error>{isError}</Error> : null}
          </div>

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
                style={
                  active
                    ? { color: 'rgba(17, 17, 17, 0.6)' }
                    : { color: '#F59256' }
                }
              />
            </ButtonWrapp>
          )}
        </InputWrapp>
      </UserDataItemForm>
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
