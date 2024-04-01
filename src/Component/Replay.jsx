import React, { useState } from "react";
import "./replay.css";
import { RxCross2 } from "react-icons/rx";
import { useEmailContext } from "./Content";
import { HiChevronDown } from "react-icons/hi";
import { ImPower } from "react-icons/im";
import { LuEye } from "react-icons/lu";
import { MdAttachment } from "react-icons/md";
import { MdImage } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Replay = () => {
  const { isMessageBoxOpen, setIsMessageBoxOpen,fromEmail,toEmail,subject, email, name,threadid ,token,} =
    useEmailContext();
  const handleClick = () => {
    setIsMessageBoxOpen(false);
  };
  console.log(fromEmail,toEmail,subject, email, name,threadid)
  const [rtoEmail, setToEmail] = useState(fromEmail);
  const [rfromEmail, setFromEmail] = useState(email);
  const [rsubject, setSubject] = useState(subject);
  const [message, setMessage] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(toEmail,fromEmail,subject,message)
      const response = await fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadid}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          to: toEmail,
          from: fromEmail,
          subject: subject,
          message: message,
        }),
      });

      if (!response.ok) {
        // alert("Internal server error")
        throw new Error('Network response was not ok');
      }

      // Handle success
      console.log('Email sent successfully');
    } catch (error) {
      toast.error(error.message);
      console.error('There was an error sending the email:', error.message);
    }
  };
  return (
    <div className="replay-box">
      <div className="f-div flex justify-between">
        <div className="text-[#BAB9BD] ">Reply</div>
        <div
          className="text-[#FFFFFF] hover:text-[#BAB9BD]"
          onClick={handleClick}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="to">
        <span className="text-[#BAB9BD]">To : </span>{" "}
        <input type="email" className="bg-[#141517]"    value={toEmail}
          onChange={(e) => setToEmail(e.target.value)}/>
      </div>
      <div className="to">
        <span className="text-[#BAB9BD]">From : </span>{" "}
        <input type="email" className="bg-[#141517]"  value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)} />
      </div>
      <div className="to">
        <span className="text-[#BAB9BD]">Subject : </span>{" "}
        <input type="text" className="bg-[#141517]" value={subject}
          onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div className="mes">
        <textarea id="message" name="message" rows="4" required value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>

      <div className="l-div flex  ">
        <div className="send-btn cursor-pointer flex text-[#FFFFFF] justify-around" onClick={handleSubmit}>
          <div className="cursor-pointer">Send </div>
          <HiChevronDown className="text-[#FFFFFF]" size={25} />
        </div>
        <div>
          <ImPower size={25} className="text-[#ADADAD] m-auto mt-5 ml-3" />
        </div>
        <div className="text-[#ADADAD]  mt-5 ml-3">Variables</div>
        <div>
          <LuEye size={25} className="text-[#ADADAD] ml-3 mt-5 " />
        </div>
        <div className="text-[#ADADAD]  mt-5 ml-3">Preview Email</div>
        <div className="text-[#ADADAD]  mt-5 ml-3">A</div>
        <div><MdAttachment size={25} className="text-[#ADADAD] ml-3 mt-5 " /></div>
        <div><MdImage  size={25} className="text-[#ADADAD] ml-3 mt-5 "/></div>
        <div><FaRegSmile size={25} className="text-[#ADADAD] ml-3 mt-5 " /></div>
        <div><FaUserMinus size={25} className="text-[#ADADAD] ml-3 mt-5 " /></div>
        <div className="flex"> <SlArrowLeft size={10} className="text-[#ADADAD] ml-3 mt-7 " /><SlArrowRight size={10} className="text-[#ADADAD] ml-3 mt-7 " /></div>
      </div>
    </div>
  );
};

export default Replay;
