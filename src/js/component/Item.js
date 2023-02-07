import React, { useState } from "react";

const Item = ({ id, text, onClickRemoteItem }) => {

 const [hover, setHover] = useState(false);

  return (
    <li className="list-group-item" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      {text}
      <span id={id}  onClick={onClickRemoteItem} style={{ float: "right", cursor: "pointer", display: hover? 'inline': 'none' }}>X</span>
    </li>
  );
};

export default Item;