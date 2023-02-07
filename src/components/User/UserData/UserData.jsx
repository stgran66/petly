import styles from './UserData.styled';

const { ContainerWrappInfo, ContainerWrappFoto } = styles;

const UserData = () => {
  return (
    <>
      <form>
        <ContainerWrappFoto>
          <label for="user_foto">
            <img src="" alt="" />
          </label>
          <input type="file" name="file" id="user_foto" />
        </ContainerWrappFoto>
        <ContainerWrappInfo>
          <div>
            <label for="user_name">Name:</label>
            <input type="text" name="text" id="user_name" />
          </div>

          <div>
            <label for="user_email">Email:</label>
            <input type="email" name="email" id="user_email" />
          </div>

          <div>
            <label for="user_birthday">Birthday:</label>
            <input type="date" name="date" id="user_birthday" />
          </div>

          <div>
            <label for="user_phone">Phone:</label>
            <input type="tel" name="number" id="user_phone" />
          </div>

          <div>
            <label for="user_city">City:</label>
            <input type="text" name="number" id="user_city" />
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
