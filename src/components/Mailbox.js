import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from 'react-router-dom'


function Mailbox(props) {

    const [conversation, setConversation] = useState("");
    



    useEffect (() => {
        axios
            .post(`${API_URL}/get-all-chats`, {}, { withCredentials: true })
                .then((response) => {
                setConversation(response.data)
                console.log(response.data)
                })
                .catch((err) => {
                console.log("couldn't fetch the chats", err);
        });

    }, [])





    



  
        return (
            <div>
            {conversation && conversation.map((user) => {
                return (
                    <h5>
                    
                    <Link
                            to={{
                              pathname: `/messenger`,
                              state: { selectedMatch: user },
                            }}
                            className="btn-filled"
                            style={{ textDecoration: "none" }}
                          >
                            <a style={{textDecoration:"underline"}}>Conversation with {user.name}</a>
                            
                          </Link>
                          
                    </h5>
                )
            })}
              
            </div>
          )
        }

 export default Mailbox;
        