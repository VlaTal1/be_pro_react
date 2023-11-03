import React from "react";
import './Avatar.css'

export const Avatar = ({ img }) => {
  return (
    <div>
      <img src={img} alt="avatar" className="avatar"></img>
    </div>
  );
};
