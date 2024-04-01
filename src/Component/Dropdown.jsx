import React from "react";
import "./drop.css";
import { MdMarkunreadMailbox, MdPersonRemoveAlt1 } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Dropdown = () => {
  return (
    <div className="drop m-auto ">
      <div className="detel flex gap-3 m-auto my-1 w-full p-1">
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
      <div className="detel flex gap-3 m-auto my-1 w-full p-1">
        <div>
          <MdPersonRemoveAlt1  />
        </div>{" "}
        <div>Remove lead</div>
      </div>
      <div className="detel flex gap-3 m-auto my-1 w-full p-1">
        <div>
          <MdWatchLater />
        </div>{" "}
        <div>Set reminder</div>
      </div>
      <div className="detel flex gap-3 m-auto my-1 w-full p-1">
        <div>
          <MdDelete />
        </div>{" "}
        <div>Delete</div>
      </div>
     
    </div>
  );
};

export default Dropdown;
