import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import UserDataItem from './UserDataItem';

import styles from './UserData.styled';

const { selectUserInfo } = userSelectors;
// const { updateUserData } = userOperations;

const {
  UserContainer,
  ContainerWrappInfo,
  ContainerWrappFoto,
  WrappFoto,
  UserFoto,
  FotoForm,
  FotoLabel,
  FotoIcon,
} = styles;

const UserData = () => {
  // const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const [active, setActive] = useState('');

  const changeFoto = e => {
    const result = new FormData();
    result.append('avatar', e.target.files[0]);
    // dispatch(updateUserData(result));
  };

  const patternEmail = /^(?!-)[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+$/;
  // const patternDate=/\d{4}-\d{2}-\d{2}/
  const patternPhone = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  const patternCity = /^\s*([A-ZА-Я][a-zа-я]+,\s?)?[A-ZА-Я][a-zа-я]+\s*$/;

  return (
    <UserContainer>
      <ContainerWrappFoto>
        <WrappFoto>
          <UserFoto src={user.avatarURL} alt="user foto" />

          <FotoForm enctype="multipart/form-data">
            <FotoLabel>
              <FotoIcon /> Edit photo
              <input
                type="file"
                accept="image/*"
                name="avatar"
                onChange={changeFoto}
                hidden
              />
            </FotoLabel>
          </FotoForm>
        </WrappFoto>
      </ContainerWrappFoto>
      <ContainerWrappInfo>
        <UserDataItem
          label={'Name:'}
          defaultValue={user.name}
          type="text"
          name="name"
          setActive={setActive}
          active={active}
          id="name"
        />

        <UserDataItem
          label={'Email:'}
          defaultValue={user.email}
          type="email"
          name="email"
          setActive={setActive}
          active={active}
          pattern={patternEmail}
          title="Email no valid"
          id="email"
        />

        <UserDataItem
          label={'Birthday:'}
          defaultValue={user.birthday}
          type="text"
          name="birthday"
          setActive={setActive}
          active={active}
          // title="Date may contain only format 00.00.0000"
          id="birthday"
        />

        <UserDataItem
          label={'Phone:'}
          defaultValue={user.phone}
          type="tel"
          name="phone"
          setActive={setActive}
          active={active}
          pattern={patternPhone}
          title="Phone may be formated +3800000000"
          id="phone"
        />

        <UserDataItem
          label={'City:'}
          defaultValue={user.city}
          type="text"
          name="city"
          setActive={setActive}
          active={active}
          pattern={patternCity}
          title="City"
          id="city"
        />
      </ContainerWrappInfo>
    </UserContainer>
  );
};

export default UserData;
