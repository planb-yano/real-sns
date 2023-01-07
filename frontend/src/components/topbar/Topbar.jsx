import { Search, Chat, Notifications } from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";
import "./Topbar.css";

const Topbar = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Real SNS</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="seachInput"
            placeholder="探し物は何ですか？"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItems">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PUBLIC_FOLDER + user.profilePicture
                  : PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
