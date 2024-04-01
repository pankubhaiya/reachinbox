import React, { useEffect, useState } from "react";
import "./main.css";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineRefresh } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiSolidShare } from "react-icons/bi";
import Email from "./Email";
import TreadData from "./ThredId";
import { useEmailContext } from "./Content";
import Replay from "./Replay";
import Delete from "./Delete";
import Dropdown from "./Dropdown";
const Main = () => {
  const { emails, email, name, isMessageBoxOpen, isToggled, token } =
    useEmailContext();
  const [isDrop, SetDrop] = useState(false);
  const fetchRefreshApi = () => {
    // Make the GET request
    console.log("refresh");
    fetch("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // Check if response is ok
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse response JSON
        return response.json();
      })
      .then((data) => {
        // Set response data in state
        alert("Reset the data");
         window.location.reload()
      })
      .catch((error) => {
        // Handle any errors
        setError(error.message);
      });
  };
  const hadledrop = ()=>{
    SetDrop(!isDrop)
  }
  // Define your click handler function
  const handleClick = () => {
    // Place the logic you want to execute when the button is clicked here
    console.log("Button clicked!");
    // Call your fetch function here if needed
    fetchRefreshApi();
  };
  return (
    <>
      <div>{isDrop && <Dropdown/>}</div>
      <div>{isToggled && <Delete />}</div>
      <div
        className={`main-div relative flex ${
          isToggled
            ? "bg-blur-25 opacity-10 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="inbox ">
          <div className="flex">
            <div>
              <div className="flex">
                <h1>All Inbox(s)</h1>
                <button type="button">
                  <FiChevronDown size={24} className="text-white" />
                </button>
              </div>
              <p className="select">
                {" "}
                <span className="text-[#FFFFFF]">25/25</span> Inboxes selected
              </p>
            </div>
            <div onClick={handleClick}>
              <div className="refresh-div hover:bg-[#FFFFF]">
                <MdOutlineRefresh size={20}   />
              </div>
            </div>
          </div>
          <div class="relative mt-4">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="search-div block w-full p-2 ps-10 text-sm text-gray-900 border border-[#FFFFFF] rounded-[5px] bg-[#23272c]"
              placeholder="Search"
              required
            />
          </div>

          <div className="flex justify-between w-full mt-4 ml-0 ">
            <div className="flex gap-2 ">
              <div
                className={` ease-in-out duration-500 cursor-default tracking-wide 
           flex items-center justify-center p-1   bg-[#222426] rounded-full text-[#5C7CFA] w-10 font-inter text-base font-semibold leading-5 text-left`}
              >
                {emails.length}
              </div>
              <div class="font-inter text-base font-semibold leading-5 text-left text-[#E6E6E6]">
                New Replies
              </div>
            </div>

            <div className="flex justify-between w-28">
              <div class="font-inter text-base font-semibold leading-5 text-left text-[#E6E6E6]">
                Newest
              </div>
              <button type="button">
                <FiChevronDown size={24} className="text-[#FFFFFF]" />
              </button>
            </div>
          </div>
          <div>
            <Email />
          </div>
        </div>
        <div className="orlando-div">
          <div className="orlando-f-div justify-between flex">
            <div class="w-422px h-46px py-3 px-0 gap-8 rounded-tl-8 mx-6">
              <div class="font-inter text-base font-semibold leading-5 text-left text-[#FFFFFF]">
                {name}
              </div>
              <div class="font-inter text-xs  font-normal leading-6 text-left text-[#7f7f7f]">
                {email}
              </div>
            </div>
            <div className="flex w-1/2">
              <div className="meeting flex">
                <div className="flex m-auto">
                  <div class="p-2 h-2 w-2  bg-[#E6D162] rounded-full m-auto mr-2 shadow-xl ring-2 ring-offset-gray-900 ring-opacity-10"></div>

                  <div class="font-open-sans text-xs py-2 font-semibold leading-5 tracking-tight text-left text-[#D3D7DB] ">
                    Meeting Completed
                  </div>
                  <button type="button">
                    <FiChevronDown size={24} className="text-[#A9AEB4]" />
                  </button>
                </div>
              </div>
              <div className="move flex cursor-pointer" onClick={hadledrop}>
                <div className="flex m-auto" >
                  <div class="font-open-sans text-xs py-2 font-semibold leading-5 tracking-tight text-left text-[#D3D7DB] ">
                    Move
                  </div>
                  <button type="button">
                    <FiChevronDown size={24} className="text-[#A9AEB4]" />
                  </button>
                </div>
              </div>
              <div className="option flex">
                <button type="button" className="m-auto py-2">
                  <HiOutlineDotsHorizontal
                    size={20}
                    className="text-[#A9AEB4]"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <TreadData />
          </div>
          <div>
            <div
              className="reply-btn flex text-[#FFFFFF]"
              style={{ position: "absolute", bottom: "-40px" }}
            >
              {" "}
              <BiSolidShare className="mt-1" />
              <div>Reply</div>
            </div>
          </div>
          <div>{isMessageBoxOpen && <Replay />}</div>
        </div>
        <div className="lead-div m-2 mb-0">
          <div className="text-[#FFFFFF] w-full h-8 pl-4 pt-1 rounded-[6px]  text-left bg-[#23272C]">
            Lead Details
          </div>
          <div className="text-white mb-10">
            <table className="table-auto  m-4">
              <tbody>
                <tr>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-left text-[#FFFFFF]">
                    Name
                  </td>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-right text-[#B9B9B9]">
                    Orlando
                  </td>
                </tr>
                <tr>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-left text-[#FFFFFF]">
                    Contact No
                  </td>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-right text-[#B9B9B9]">
                    +54-9062827869
                  </td>
                </tr>
                <tr>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-left text-[#FFFFFF]">
                    Email ID
                  </td>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-right text-[#B9B9B9]">
                    orlando@gmail.com
                  </td>
                </tr>
                <tr>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-left text-[#FFFFFF]">
                    Linkedin
                  </td>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-right text-[#B9B9B9]">
                    linkedin.com/in/timvadde/
                  </td>
                </tr>
                <tr>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-left text-[#FFFFFF]">
                    Company Name
                  </td>
                  <td className="font-inter text-xs py-4 font-normal leading-4 text-right text-[#B9B9B9]">
                    Reachinbox
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-[#FFFFFF] w-full h-8 pl-4 pt-1 rounded-[6px]  text-left bg-[#23272C]">
            Activities
          </div>

          <div class="w-[154.87px] h-[20px] top-[13px] left-[20.33px] gap-[10px]  font-open-sans text-sm font-semibold leading-[20.43px] text-left text-[#FFFFFF] m-6">
            Campaign Name
          </div>
          <div className="text-[#FFFFFF] mx-6">
            3 Steps <span>|</span> 5 Days in Sequence
          </div>
          <div className="m-8">
            <ol className="relative border-s border-[#41464B] mb-0 ">
              <li className="mb-8  ms-6">
                <span className="absolute flex items-center justify-center w-4 h-4 bg-[#BFBFBF] rounded-full -start-2 ring-8 ring-[#BFBFBF]  ">
                  <MdOutlineMailOutline size={20} className="text-[#FFFFFF]" />
                </span>
                <span className="text-[#ffff]">Step 1: Email</span>
              </li>
              <li className="mb-8 ms-6">
                <span className="absolute flex items-center justify-center w-4 h-4 bg-[#BFBFBF] rounded-full -start-2 ring-8 ring-[#BFBFBF]  ">
                  <MdOutlineMailOutline size={20} className="text-[#FFFFFF]" />
                </span>
                <span className="text-[#ffff]">Step 2: Email</span>
              </li>
              <li className="m-8 ms-6">
                <span className="absolute flex items-center justify-center w-4 h-4 bg-[#BFBFBF] rounded-full -start-2 ring-8 ring-[#BFBFBF]  ">
                  <MdOutlineMailOutline size={20} className="text-[#FFFFFF]" />
                </span>
                <span className="text-[#ffff]">Step 3: Email</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
