import { useState } from 'react';
// import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import styles from './UserData.styled';
import Loader from 'components/Loader';
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
const { selectLoadingUser, selectErrorUser } = userSelectors;

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
  //   const inputRef = useRef(null);

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
                type="button"
                onClick={() => activeHandleClick(name)}
              >
                <InfoChangeIcon />
              </ButtonWrapp>
            )}
          </InputWrapp>
        </UserDataItemForm>
      )}
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
