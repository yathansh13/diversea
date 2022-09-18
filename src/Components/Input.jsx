import React from "react";
import { CgAttachment } from "react-icons/cg";
import { BsImageFill } from "react-icons/bs";


const Input = () => {
  
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type here"
        
      />
      <div className="send">
      <CgAttachment style={{fontSize: '20px'}}/>
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          
        />
        <label htmlFor="file">
          <BsImageFill style={{fontSize: '20px',cursor: 'pointer'}}/>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;

