import "./App.css";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/SideBar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./components/Contextapi/account";

function App() {
  const { isCookie, setIsCookie } = useContext(AccountContext);
  
  // check for the existence of the cookie
  const cookie = document.cookie.split(";").find(c => c.trim().startsWith("GoogleSharunAuth="));
  
  if (cookie) {
    // if cookie exists, set isCookie to true
    setIsCookie(true);
  } else {
    // if cookie does not exist, show an alert message
    alert("You are not logged in!");
  }
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
