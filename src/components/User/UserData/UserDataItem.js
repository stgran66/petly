import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import styles from './UserData.styled';

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

const UserDataItem = ({ name, label, type, defaultValue, active, setActive }) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(defaultValue);
  const [isError, setIsError] = useState('');

  const RegExpName =
    /^[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']*$/;
  //name can contain only Latin and Cyrillic characters, 2 - 16 symbols and can't start from spaces
  const RegExpEmail = /^((?!-)[a-zA-Z0-9_.-]+){2}@[a-zA-Z0-9.-]+$/;
  // mail can contain only latin letters, numbers and symbols . -  _ (dot, hyphen, underscore) and can't start from hyphen
  const RegExpCity = /^[^ -,][a-zA-zа-яіїєА-ЯІЇЄ, -]+[^ -]$/;
  // city can contain only Latin and Cyrillic characters, 2 - 19 symbols and can't start or end with spaces and hyphen
  const RegExpBirthday = /^([0-2][0-9]|(3)[0-1])\.(((0)[0-9])|((1)[0-2]))\.\d{4}$/;
  const today = new Date();
  const minDate = new Date(1910, 0, 1);
  // date should be in dd.mm.yyyy format and not before 1910 and after today
  const RegExpPhone = /^[+]380\d{3}\d{2}\d{2}\d{2}$/;
  // phone number should contain 13 characters and start with +38 later only numbers

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

  const activeHandleClick = name => {
    setActive(name);
    // handleFocus();
  };

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

      const arrInputValue = inputValue.split('');
      const symbolDot = arrInputValue.includes('.');
      const symboAt = arrInputValue.includes('@');
      if (!symbolDot || !symboAt) {
        setIsError('type valid email with "." and "@"');
        return;
      }
      if (!inputValue.match(RegExpEmail)) {
        setIsError('type valid email, min 10 symbols');
        return;
      }
      if (inputValue.length < 10) {
        setIsError('type valid email, min 10 symbols');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(updateUserData({ email: inputValue }));
    } else if (name === 'birthday') {
      setActive('birthday');
      if (!inputValue.match(RegExpBirthday)) {
        setIsError('date should be in dd.mm.yyyy format');
        return;
      }
      const arr = inputValue.split('.');
      const inputDate = new Date(arr[2], arr[1] - 1, arr[0]);
      if (inputDate - today > 0) {
        setIsError('birthday can not be set after today');
        return;
      }
      if (minDate - inputDate > 0) {
        setIsError('birthday can not be set before 1910');
        return;
      }
      setIsError('');
      setActive('');
      dispatch(updateUserData({ birthday: inputValue }));
    } else if (name === 'phone') {
      setActive('phone');
      if (!inputValue.match(RegExpPhone)) {
        setIsError('phone format +38xxxxxxxxxx');
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
            <Tooltip
              title={inputValue}
              TransitionComponent={Zoom}
              enterDelay={700}
              leaveDelay={100}
              placement="top-start"
              arrow
            >
              <UserDataItemInput
                onChangeCapture={handleChange}
                defaultValue={inputValue}
                active={active === name}
                disabled={active !== name}
                type={type}
                name={name}
                id={name}
              />
            </Tooltip>

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
                style={active ? { color: 'rgba(17, 17, 17, 0.6)' } : { color: '#F59256' }}
              />
            </ButtonWrapp>
          )}
        </InputWrapp>
      </UserDataItemForm>
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
