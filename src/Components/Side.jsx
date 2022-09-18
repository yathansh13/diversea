import React from "react";
import Navbar from "./Nav"
import Search from "./Search"
import Chats from "./ChatBack"

const Sidebar = () => {
  return (
    <div className="sideMenu">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
};

export default Sidebar;
