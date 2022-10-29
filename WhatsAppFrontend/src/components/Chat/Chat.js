import React, { useEffect, useState } from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import "./Chat.css";

import EmptyChat from "./EmptyChat";
import Footer from "./Footer";
import { useContext } from "react";
import { AccountContext } from "../Contextapi/account";
import { getConversation, getMessages, newMessage } from "../service/api";

const Chat = () => {
  const { person } = useContext(AccountContext);
  const account = JSON.parse(localStorage.getItem("user"));
  const [conversation, setConversation] = useState({});
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(conversation);
  useEffect(() => {
    const getConversationDeatils = async () => {
      let data = await getConversation({
        senderId: account.uid,
        receiveId: person.uid,
      });
      setConversation(data);
    };
    getConversationDeatils();
  }, [person.uid]);
  const sendText = async (e) => {
    let code = e.which || e.keyCode;

    if (code == 13) {
      let message = {
        senderId: account.uid,
        receiverId: person.uid,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      // Function come
      await newMessage(message);
      setValue("");
    }
  };
  useEffect(() => {
    const getMsg = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMsg();
  }, [person._id, conversation._id]);

  return (
    <div className="chat">
      {Object.keys(person).length ? (
        <>
          <div className="chat__header">
            <Avatar src={person.photoURL} />
            <div className="chat__headerInfo">
              <h3>{person.displayName}</h3>
              <Typography>Offline</Typography>
              {/* <p>last seen {new Date(Date.now()).toString().slice(0, 25)}</p> */}
            </div>
            <div className="chat__headerRight">
              <IconButton>
                <SearchOutlined />
              </IconButton>
              <IconButton>
                <AttachFile />
              </IconButton>
              <IconButton>
                <MoreVert />
              </IconButton>
            </div>
          </div>
          <div className="chat__body">
            {messages &&
              messages.map((messages, index) => (
                <>
                  <p className={`chat__message `}>
                    <span className="chat__name">Hello!</span>
                    {messages.message}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    voluptatibus non cumque qui dicta, illo ipsam quos adipisci
                    laudantium sequi, dolores tempora obcaecati harum quis
                    voluptatum quisquam, tenetur reprehenderit quia earum!
                    Molestiae accusamus dicta voluptatibus. Deleniti temporibus
                    at eius neque perferendis voluptatum harum corporis amet,
                    quo blanditiis minus nobis fugiat saepe libero nisi
                    similique dolor. Quis numquam tenetur laboriosam consequatur
                    minima, placeat at maxime neque officia perspiciatis rem
                    laborum impedit consectetur quidem dolore iste vel, hic
                    laudantium eligendi provident modi voluptas. Itaque
                    excepturi, laboriosam, nulla illum ipsam aspernatur
                    voluptates fugit delectus porro, iure ratione aperiam
                    consequuntur ipsa rem suscipit quod. Quo, rem recusandae
                    explicabo fugiat sit sapiente tempore accusamus maxime,
                    amet, eveniet blanditiis alias incidunt eligendi id est
                    earum modi natus sint placeat laboriosam delectus dolorum?
                    Sunt magnam dolore non numquam quidem perspiciatis nihil
                    quam odit praesentium, maiores optio aliquid fuga animi at
                    consequatur ducimus minima, illo dicta, dignissimos corporis
                    unde? Nostrum architecto, quod quibusdam sit ab reiciendis
                    eligendi harum magni inventore hic sapiente excepturi autem
                    rem perspiciatis? Voluptate non dolores accusamus architecto
                    facere corporis veniam est sed placeat id, fugit et odio
                    ullam odit dicta numquam cumque eveniet aliquid hic nam
                    libero alias atque beatae quasi? Necessitatibus consequuntur
                    sapiente eum doloremque, suscipit facilis, expedita unde
                    magni quas ab reiciendis minima quos eius iure aspernatur
                    labore quasi! Labore tenetur temporibus deserunt eligendi et
                    accusantium suscipit corrupti voluptate ipsum, quaerat iste
                    molestiae assumenda repudiandae aspernatur dolores sunt
                    adipisci doloremque nulla! Sapiente, distinctio quidem?
                    Similique odio facilis, adipisci, tenetur consequatur ea
                    exercitationem voluptate rem ratione fugiat nulla distinctio
                    sequi! Magnam, consequuntur animi soluta ullam delectus in
                    aut odio error sed natus eaque similique asperiores quae
                    quam possimus? Magni optio eum harum nihil voluptatibus,
                    similique sed sequi! Ratione eaque fuga maiores! Impedit
                    esse distinctio, dolore quasi consectetur aut animi, vitae
                    earum sint odio culpa vero quia dolorum quisquam
                    praesentium. Deleniti eaque atque facere pariatur, error
                    repellat veritatis iusto. Laboriosam cumque quidem
                    doloremque ut reiciendis doloribus tempore velit odio ea
                    vero nesciunt at eius ducimus hic dolore voluptatum pariatur
                    corrupti minima officia harum est beatae, minus nulla
                    eligendi. Harum tempora officia dolores illo laudantium
                    tenetur veritatis iste natus eius non. Sit sapiente
                    consequatur cum, veritatis nostrum tempore et accusamus
                    nesciunt ea, ad iste, quo iusto? Dignissimos delectus
                    repudiandae quo ipsam perferendis minus iure, laborum cum
                    assumenda rem tempore similique voluptatum vitae deserunt
                    sunt atque dolore libero fuga enim maiores. Officiis dolore
                    ut ducimus possimus deleniti aperiam sed, ullam provident
                    iure quidem ipsa earum similique! Adipisci vitae rem fuga
                    mollitia saepe quo ipsam error, eius sequi provident cumque
                    modi atque dolorem aspernatur eveniet nisi totam inventore
                    sint nobis et quasi possimus? Perspiciatis, perferendis
                    fuga. Sed soluta dolorum a corporis pariatur consectetur,
                    consequatur at sunt rem blanditiis iusto mollitia earum
                    repudiandae nisi, cumque similique quam modi necessitatibus!
                    Veritatis neque, impedit id deserunt, accusantium quia nobis
                    voluptas perspiciatis accusamus minima porro vero? Libero
                    quam adipisci quae reprehenderit, labore rem pariatur enim,
                    tenetur, repellendus ab aliquid aperiam cum accusantium
                    aliquam! Ipsum fugit non rem corporis porro vero et iste
                    asperiores, officia eveniet veniam perspiciatis ex
                    obcaecati, provident, vitae possimus? Nulla dolorem culpa
                    voluptas nesciunt ex recusandae, non, harum odit molestiae
                    unde ipsum autem! Consequatur quae, omnis doloremque
                    similique nisi eaque. Dignissimos aut ipsum impedit, fugiat
                    tempora architecto nobis culpa hic repellendus. Porro,
                    delectus optio. Asperiores ratione ad corrupti!
                    <span className="chat__timestamp">
                      {new Date(messages.timestamp).toString().slice(0, 25)}
                    </span>
                  </p>
                  <p className={"chat_receiver"}>
                    <span className="chat__name">Hello!</span>
                    {/* {messages.message} */}
                    <span className="chat__timestamp">
                      {/* {new Date(messages.timestamp).toString().slice(0, 25)} */}
                    </span>
                  </p>
                </>
              ))}
          </div>
          <Footer sendText={sendText} value={value} setValue={setValue} />
        </>
      ) : (
        <EmptyChat />
      )}
    </div>
  );
};

export default Chat;
