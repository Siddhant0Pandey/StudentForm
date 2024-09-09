/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import users from "../UserInfo";

const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(users[0]);
  const [searchUser, setSearchUser] = useState("");
  const [usersList, setUsersList] = useState(users);

  return (
    <StudentContext.Provider
      value={{
        userInfo,
        setUserInfo,
        searchUser,
        setSearchUser,
        usersList,
        setUsersList,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
