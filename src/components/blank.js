import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { API_URL } from "../config";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';


let socket;
const CONNECTION_PORT = `http://localhost:5000/`;

function Blank(props) {
  const [room, setRoom] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  useEffect(() => {
    console.log(props.location.state)
    const { selectedMatch } = props.location.state;
    setSender(props.loggedInUser);
    setReceiver(selectedMatch);
    setRoom(props.loggedInUser._id.concat(selectedMatch._id));
    connectToRoom();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });

  const connectToRoom = () => {
    socket.emit("join_room", room);
  };

  const sendMessage = async () => {
    let messageContent = {
      room: room,
      content: {
        sender: sender._id,
        receiver: receiver._id,
        message: message,
      },
    };

    await socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    setMessage("");
  };

  return (
    
    <div className="App">
      <div className="chatContainer">
        <div className="messages">
          {messageList.map((val, key) => {
            return (
              <div
                className="messageContainer"
                id={val.sender == sender.name ? "You" : "Other"}
              >
                <div className="messageIndividual">
                  {val.sender}: {val.message}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--no-label"
          style={{ width: "480px", height: "480", desplay: "flex", flexDirection: "column" }}
        >
 
            <input
              className="mdc-text-field__input"
              type="text"
              placeholder="Message..."
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
        </div>
        <button onClick={sendMessage} className="btn-outline">
          Send
        </button>
      </div>
    </div>
  );
}

export default Blank;
