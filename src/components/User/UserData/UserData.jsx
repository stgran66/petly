// import { useState } from 'react';
import { useRef } from 'react';

import styles from './UserData.styled';
import ButtonChange from './ButtonChange';
import ButtonSubmit from './ButtonSubmit';

// import { IconButton, PhotoCamera } from '@mui/icons-material';

const {
  UserForm,
  ContainerWrappInfo,
  ContainerWrappFoto,
  FotoIcon,
  InputWrapp,
  InfoInputThumb,
} = styles;

const UserData = () => {
  const ref = useRef(null);
  // const [activeBtn, setActiveBtn] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(true);

  // const changeButton = () => {
  //   setActiveBtn(false);
  // };
  const handleClick = () => {
    ref.current.focus();
    // setIsDisabled(!isDisabled);
    // const ggg = ref.current.disabled;

    // console.log(ggg);
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
              ref={ref}
              type="text"
              name="text"
              id="user_name"
              // disabled={isDisabled}
              value="Anna"
            />
            <ButtonChange onClick={handleClick} />
            {/* {activeBtn ? (
              <ButtonChange onClick={(handleClick, changeButton)} />
            ) : (
              <ButtonSubmit />
            )} */}
          </InputWrapp>
        </InfoInputThumb>

        <InfoInputThumb>
          <label for="user_email">Email:</label>
          <InputWrapp>
            <input
              ref={ref}
              type="email"
              name="email"
              id="user_email"
              value="anna00@gmail.com"
              autofocus="false"
            />
            <ButtonChange onClick={handleClick} />
          </InputWrapp>
        </InfoInputThumb>

        <InfoInputThumb>
          <label for="user_birthday">Birthday:</label>
          <InputWrapp>
            <input
              type="date"
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

    //     <div>
    //         <title>My information:</title>
    //       <InfoFoto>
    //           <img src="" alt="" />
    //           <form>
    //               <label>
    //                   <input type="file" id="" name="" accept=".jpg, .jpeg, .png" />
    //               </label>
    //           </form>
    //           <InfoFoto />
    //         <InfoList>
    //     {data.map(item => (
    //       <li key={item.id}>
    //         <DataItem item={item} />
    //       </li>
    //     ))}
    //   </InfoList>
    //   <Logout />
    // </div>
  );
};

export default UserData;
