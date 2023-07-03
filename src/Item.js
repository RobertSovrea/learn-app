import React from "react";

const Item = ({ icon, name }) => {
  return (
    <div className="item">
      <span className="icon">{icon}</span>
      <span className="name">{name}</span>
    </div>
  );
};

export default Item;
