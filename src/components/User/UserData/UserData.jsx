import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';

import styles from './UserData.styled';
import userSelectors from 'redux/user/selectors';

import ButtonChange from './ButtonChange';
import ButtonSubmit from './ButtonSubmit';

const { selectUserInfo } = userSelectors;
const { fetchUserData } = userOperations;

const {
  UserForm,
  ContainerWrappInfo,
  ContainerWrappFoto,
  FotoIcon,
  InputWrapp,
  InfoInputThumb,
} = styles;

const UserData = () => {
  const user = useSelector(selectUserInfo);

  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  console.log(user);

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  // activeState ? btn1 : btn2;

  return (
    <UserForm ectype="multipart/form-data">
      <ContainerWrappFoto>
        <div>
          <img src="" alt="" />

          <label>
            <FotoIcon /> Edit photo
            <input type="file" accept="image/*" name="file" hidden />
          </label>
        </div>
      </ContainerWrappFoto>
      <ContainerWrappInfo>
        <InfoInputThumb>
          <label for="user_name">Name:</label>
          <InputWrapp>
            <input
              type="text"
              name="name"
              id="user_name"
              disabled={isDisabled}
              value="Anna"
            />
            <ButtonChange onClick={handleClick} />
          </InputWrapp>
        </InfoInputThumb>

        <InfoInputThumb>
          <label for="user_email">Email:</label>
          <InputWrapp>
            <input
              type="email"
              name="email"
              id="user_email"
              value="anna00@gmail.com"
            />

            <ButtonChange onClick={handleClick} />
          </InputWrapp>
        </InfoInputThumb>

        <InfoInputThumb>
          <label for="user_birthday">Birthday:</label>
          <InputWrapp>
            <input
              type="text"
              name="date"
              id="user_birthday"
              value="00.00.0000"
            />
            <ButtonChange />
          </InputWrapp>
        </InfoInputThumb>

        <InfoInputThumb>
          <label for="user_phone">Phone:</label>
          <InputWrapp>
            <input
              type="tel"
              name="number"
              id="user_phone"
              value="+38000000000"
            />
            <ButtonSubmit />
          </InputWrapp>
        </InfoInputThumb>

        <InfoInputThumb>
          <label for="user_city">City:</label>
          <InputWrapp>
            <input type="text" name="number" id="user_city" value="Kiev" />
            <ButtonChange />
          </InputWrapp>
        </InfoInputThumb>
      </ContainerWrappInfo>
    </UserForm>
  );
};

export default UserData;
