import { createContext, useState, useEffect, useRef } from "react";

import {io} from "socket.io-client"
export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [isCookie,setIsCookie]=useState(false)
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const [person,setPerson]=useState({})
  const [activeUsers,setActiveUsers]=useState([])


  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const getuserFromLocalStore=async()=>{
 
   let user= await JSON.parse(localStorage.getItem("user"))
   setAccount(user)
  }
   const socket=useRef();
   useEffect(() => {
    socket.current = io('ws://localhost:5000');
  }, [socket])

  return (
    <AccountContext.Provider
      value={{
        account,
        person,
        setPerson,
        setAccount,
        showloginButton,
        setShowloginButton,
        showlogoutButton,
        setShowlogoutButton,
        isCookie,
        socket,
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
