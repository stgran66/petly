export const UserData = () => {
    return (
        <div>
            <title>My information:</title>
          <InfoFoto>
              <img src="" alt="" />
              <form>
                  <label>
                      <input type="file" id="" name="" accept=".jpg, .jpeg, .png" />
                  </label>
              </form>
              <InfoFoto />
            <InfoList>
        {data.map(item => (
          <li key={item.id}>
            <DataItem item={item} />
          </li>
        ))}
      </InfoList>
      <Logout />
    </div>
  )
      
};
