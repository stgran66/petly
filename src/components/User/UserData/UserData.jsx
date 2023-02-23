import { useState, useRef } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { useDispatch, useSelector } from 'react-redux';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import UserDataItem from './UserDataItem';
import Loader from 'components/Loader';

import styles from './UserData.styled';
const { selectUserInfo, selectLoadingUser, selectErrorUser, selectLoadingAvatar } = userSelectors;
const { updateUserFoto } = userOperations;

const {
  UserContainer,
  ContainerWrappInfo,
  ContainerWrappFoto,
  WrappFoto,
  UserFoto,
  FotoForm,
  FotoLabel,
  FotoIcon,
  Error,
} = styles;

const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'jfif', 'pjpeg', 'pjp', 'webp'];

const UserData = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);
  const isLoading = useSelector(selectLoadingUser);
  const error = useSelector(selectErrorUser);
  const [active, setActive] = useState('');
  const selectForm = useRef(null);
  const avatarIsLoading = useSelector(selectLoadingAvatar);
  const [avatarError, setAvatarError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    const result = new FormData(selectForm.current);

    dispatch(updateUserFoto(result));
  };

  const patternCity = /^\s*([A-ZА-Я][a-zа-я]+,\s?)?[A-ZА-Я][a-zа-я]+\s*$/;

  return (
    <>
      {isLoading && !error && <Loader />}
      {user && !isLoading && (
        <UserContainer>
          <ContainerWrappFoto>
            <WrappFoto>
              {avatarIsLoading ? (
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
              ) : (
                <UserFoto src={user.avatarURL} alt="user foto" />
              )}

              <FotoForm
                ref={selectForm}
                onChange={e => {
                  const fileExtension = e.target.value.split('.')[1];
                  if (!imageExtensions.includes(fileExtension)) {
                    setAvatarError('Avatar should be an image');
                    return;
                  }
                  setAvatarError(null);
                  handleSubmit(e);
                }}
              >
                <FotoLabel>
                  <FotoIcon /> Edit photo
                  <input type="file" accept="image/*" name="avatar" hidden />
                </FotoLabel>
              </FotoForm>
            </WrappFoto>
            <div>{avatarError ? <Error>{avatarError}</Error> : null}</div>
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
              title="Email no valid"
              id="email"
              required
              aria-required="true"
            />

            <UserDataItem
              label={'Birthday:'}
              defaultValue={user.birthday}
              type="text"
              name="birthday"
              setActive={setActive}
              active={active}
              id="birthday"
            />

            <UserDataItem
              label={'Phone:'}
              defaultValue={user.phone}
              type="tel"
              name="phone"
              setActive={setActive}
              active={active}
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
      )}
    </>
  );
};

export default UserData;
