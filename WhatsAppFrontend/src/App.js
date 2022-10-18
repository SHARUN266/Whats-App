import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import Pusher from "pusher-js";
import axios from "./Components/axios";
import SimpleCard from "./Components/SignIn/SignIn";
import {Routes,Route} from "react-router-dom"
function App() {
  const [msg,setMsg]=useState([])
  useEffect(()=>{
      axios.get('messages/sync').then(response=>{
        setMsg(response.data);
      })
  },[])




  useEffect(() => {
    // Enable pusher logging - don't include this in production

    var pusher = new Pusher("1971187072fdeafcb1e6", {
      cluster: "ap2",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      // alert(JSON.stringify(data));
      setMsg([...msg,data])
    });
   return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [msg]);
  console.log(msg);
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/signin" element={<SimpleCard/>}/>
        <Route path="/" element={<div className="app__body"> */}
               {/* <Sidebar/> */}
             
              {/* <Sidebar />
             
              <Chat msg={msg} /> */}
              {/* </div>}/>
      </Routes> */}
      <div className="app__body"  >
         <Sidebar/>

      </div>
    </div>
  );
}

export default App;
