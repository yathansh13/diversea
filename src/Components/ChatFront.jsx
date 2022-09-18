import React, { useContext } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
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
      <Input/>
    </div>
  );
};
export default ChatFront;
