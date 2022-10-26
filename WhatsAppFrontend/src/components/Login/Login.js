import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/account";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";

const Login = () => {

  const {setAccount,getuserFromLocalStore,showloginButon,setShowloginButton}=useContext(AccountContext)
  const signup = async (e) => {
    e.preventDefault();

    try {
      let value = await signInWithPopup(auth, provider);
     
      console.log(value.user)
      document.cookie=`GoogleSharunAuth=${value.user.accessToken}`
      await addUser(value.user)
      localStorage.setItem("user",JSON.stringify(value.user))
      getuserFromLocalStore()
      
      setShowloginButton(false)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <h1>
          Sign in to <span> whatsApp </span>
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png"
          alt="whatsapp"
        />
        <div className="login__text"></div>
        <div className="login__button">
          <GoogleButton className="g-btn" type="dark" onClick={signup} />
        </div>
      </div>
    </div>
  );
};

export default Login;
