import styles from './UserData.styled';

// import { IconButton, PhotoCamera } from '@mui/icons-material';

const { ContainerWrappInfo, ContainerWrappFoto, FotoIcon } = styles;

const UserData = () => {
  return (
    <>
      <form ectype="multipart/form-data">
        <ContainerWrappFoto>
          <img src="" alt="" />

          <label>
            <FotoIcon /> Edit photo
            <input type="file" accept="image/*" name="file" hidden />
          </label>
        </ContainerWrappFoto>
        <ContainerWrappInfo>
          <div>
            <label for="user_name">Name:</label>
            <input
              type="text"
              name="text"
              id="user_name"
              disabled="true"
              value="Anna"
            />
            <button type="submit">Remove</button>
          </div>

          <div>
            <label for="user_email">Email:</label>
            <input
              type="email"
              name="email"
              id="user_email"
              value="anna00@gmail.com"
              autofocus="false"
            />
            <button type="submit">Remove</button>
          </div>

          <div>
            <label for="user_birthday">Birthday:</label>
            <input
              type="date"
              name="date"
              id="user_birthday"
              value="00.00.0000"
            />
            <button type="submit">Remove</button>
          </div>

          <div>
            <label for="user_phone">Phone:</label>
            <input
              type="tel"
              name="number"
              id="user_phone"
              value="+38000000000"
            />
            <button type="submit">Remove</button>
          </div>

          <div>
            <label for="user_city">City:</label>
            <input type="text" name="number" id="user_city" value="Kiev" />
            <button type="submit">Remove</button>
          </div>
        </ContainerWrappInfo>
      </form>
    </>

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
