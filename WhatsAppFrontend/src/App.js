import "./App.css";

import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/SideBar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./components/Contextapi/account";


function App() {
 
   const { isCookie,setIsCookie } = useContext(AccountContext);

  return (
    <div className="app">
    
     
      {!isCookie ? (
        <Login />
      ) : (
        <div className="app__body">
         <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/rooms/:roomId" element={<Chat />} />
            </Routes>
          </BrowserRouter> 
         </div>
      )}
    </div>
  );
}

export default App;
