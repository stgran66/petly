import { useState } from 'react';

import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';
import styles from './UserData.styled';
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
} = styles;

const { updateUserData } = userOperations;

const UserDataItem = ({
  name,
  label,
  type,
  defaultValue,
  active,
  setActive,
}) => {
  //   const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(defaultValue);

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
  };

  //   const handleSubmit = name => {
  //     setActive('');
  //     dispatch(updateUserData({ [name]: inputValue }));
  //   };

  return (
    <UserDataItemWrapp>
      <UserDataItemLabel htmlFor={name}>{label}</UserDataItemLabel>
      <InputWrapp>
        <UserDataItemInput
          onChangeCapture={handleChange}
          value={inputValue}
          active={active === name}
          disabled={active !== name}
          type={type}
          name={name}
          id={name}
        />

        {active === name ? (
          <ButtonWrapp type="button">
            <InfoSubmitIcon />
          </ButtonWrapp>
        ) : (
          //           <ButtonWrapp type="button" onClick={handleSubmit(name)}>
          //     <InfoSubmitIcon />
          //   </ButtonWrapp>
          <ButtonWrapp type="button" onClick={activeHandleClick(name)}>
            <InfoChangeIcon />
          </ButtonWrapp>
        )}
      </InputWrapp>
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
