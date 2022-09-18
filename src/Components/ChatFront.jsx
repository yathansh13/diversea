import React, { useContext } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import MessageBack from "./MessageBack";
import Input from "./Input";
import { ChatContext } from "../context/CC";
const ChatFront = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <BsFillCameraVideoFill/>
          <BsThreeDotsVertical/>
        </div>
      </div>
      <MessageBack/>
      <Input/>
    </div>
  );
};
export default ChatFront;
