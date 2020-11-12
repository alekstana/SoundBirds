import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { API_URL } from "../config";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { MDCTextField } from "@material/textfield";
import { Link } from 'react-router-dom'


let socket;
const CONNECTION_PORT = `http://localhost:5000/`;

function Messenger(props) {
  const [room, setRoom] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  // const [oldMessageList, setOldMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    console.log(props.location.state);
    console.log("User", props.loggedInUser);

    setReceiver(props.location.state);
    if (props.loggedInUser) {
      setSender(props.loggedInUser);
      let message = {
        room: uuidv4(),
        sender: props.loggedInUser,
        receiver: props.location.state,
      };
      setRoom(message.room);
      connectToRoom(message);
    }
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(messageList);
      setMessageList([...messageList, data]);
    });
    if (props.loggedInUser && !sender) {
      console.log("CDU", props.loggedInUser);
      setSender(props.loggedInUser);
      let message = {
        room: uuidv4(),
        sender: props.loggedInUser,
        receiver: props.location.state,
      };
      setRoom(message.room);
      connectToRoom(message);
    }
  });

  const connectToRoom = (message) => {
    console.log("Connect room", message);
    socket.emit("join_room", message);
    socket.on("updateRoomId", (roomId) => {
      setRoom(roomId);
    });
    socket.on("allMessages", (allMessages) => {
      console.log(allMessages);

      setMessageList(allMessages);
    });
  };

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        sender: sender._id,
        receiver: receiver.selectedMatch._id,
        message: message,
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([
      ...messageList,
      { sender, receiver: receiver.selectedMatch, body: [message] },
    ]);
    setMessage("");
  };

  return (
    <div className="chat">
     <Link to="/find-soundbird" className="btn-outline-bottom" style={{textDecoration:'none'}}>Find your soundbirds</Link>
     <h3> Chat with {props.location.state.selectedMatch.name} </h3>
      <div >
        <div className="chatContainer">
        
        
          {messageList &&
            messageList.map((message) => {
              
              return (
                <div
                  className="messageContainer"
                  
                >
                  <div className="messageIndividual">
                    
                    {message.sender._id !== sender._id ? (
                      <div style={{ color: "white", backgroundColor: "#bb86fc", padding: "20px 0 10px 10px", margin: "5px 10% 5px 0", borderRadius: " 6px"}}>
                        {receiver.selectedMatch.name} ➜ {message.body[0]}
                      </div>
                    ) : (
                      <div style={{ color: "white", backgroundColor: "#6200ee", padding: "20px 0 10px 10px", margin: "5px 10% 5px 0", borderRadius: " 6px"}}>
                        {sender.name} ➜ {message.body[0]}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
<div>
        <label
          class="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label"
          style={{ width: "500px", height: "100px" ,margin: " 20px 0  20px 0"}}
        >
          <span className="mdc-text-field__ripple"></span>
          <span className="mdc-text-field__resizer">
            <textarea
              style={{ weight: "200px" }}
              class="mdc-text-field__input"
              type="text"
              placeholder="Message..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </span>
          <span className="mdc-line-ripple"></span>
        </label>
</div>
        <button onClick={sendMessage} className="btn-outline">
          Send
        </button>
      </div>
    </div>
  );
}

export default Messenger;
