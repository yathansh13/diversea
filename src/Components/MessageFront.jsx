import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AC";
import { ChatContext } from "../context/CC";

// import Time from "./Time";
const MessageFront = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
 
  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* <Time/> */}
      </div>
      <div className="messageContent">
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default MessageFront;
