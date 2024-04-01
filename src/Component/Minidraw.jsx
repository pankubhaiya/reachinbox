import React from 'react'
import "./mini.css"
import { MdMarkunreadMailbox } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const Minidraw = () => {
  return (
    <div className="mdrop m-auto ">
      <div className="mdetel flex gap-3 m-auto my-1 w-full p-1">
        <div>
          <MdMarkunreadMailbox />
        </div>{" "}
        <div>Mark as unread</div>
      </div>
      <div className="detel flex gap-3 m-auto my-1 w-full p-1">
        <div>
          <MdEdit />
        </div>{" "}
        <div>Edit lead</div>
      </div>
     
    </div>
  )
}

export default Minidraw
