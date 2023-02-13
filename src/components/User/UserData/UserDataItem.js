import { useState } from 'react';
// import { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import styles from './UserData.styled';
import Loader from 'components/Loader';
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

  const handleSubmit1 = name => {
    setActive('');
    // handleFocus();
console.log('value', name)
    dispatch(updateUserData({ [name]: inputValue }));
  };

  return (
    <UserDataItemWrapp>
      {isLoading && !error ? (
        <Loader />
      ) : (
  
          <UserDataItemForm onSubmit={handleSubmit1}>
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
                // {...register(name, { required: true })}
            
                //   ref={inputRef}
              />
              {/* {errors.name && 'is required'} */}

              {active === name ? (
                <ButtonWrapp type="submit">
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
    
      )}
    </UserDataItemWrapp>
  );
};

export default UserDataItem;
