import React from "react";

const Online = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarFriendContainer">
        <img src={PUBLIC_FOLDER + user.profilePicture} alt="" className="rightbarFriendImg" />
        <span className="rightbarFriendOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
