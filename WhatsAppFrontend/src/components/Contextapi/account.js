import { createContext, useState, useEffect, useRef } from "react";


export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [isCookie,setIsCookie]=useState(false)
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);

  const [activeUsers, setActiveUsers] = useState([]);

  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const getuserFromLocalStore=async()=>{
    console.log("dcdccvwre")
   let user= await JSON.parse(localStorage.getItem("user"))
   setAccount(user)
  }

  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
        isCookie,
        setIsCookie,
        activeUsers,
        setActiveUsers,
        getuserFromLocalStore,
        newMessageFlag,
        setNewMessageFlag,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
