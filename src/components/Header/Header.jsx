import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, HelpOutline, Search } from "@material-ui/icons";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="{user?.displayName}" src="" />
        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input type="text" placeholder="search slack clone" />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </header>
  );
}

export default Header;
