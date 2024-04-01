import React from "react";
import { useEffect, useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { GrInbox } from "react-icons/gr";
import { BsInboxFill } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { MdBarChart } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { RxCalendar } from "react-icons/rx";

const Menu = () => {
  const menu = [
    {
      title: "Dashboard",
      icons: <MdOutlineHome size={20} />,
    },
    {
      title: "ChatBot",
      icons: <RiUserSearchFill size={20} />,
    },

    {
      title: "My Content",
      icons: <IoMail size={20} />,
    },

    {
      title: "Schedules",
      icons: <IoIosSend size={20} />,
    },
    {
      title: "Schedules",
      icons: <CiBoxList size={20} />,
    },
    {
      title: "Schedules",
      icons: <BsInboxFill size={20} />,
    },
    {
      title: "Report",
      icons: <MdBarChart size={20} />,
    },
  ];
  const [selectedMenuItem, setSelectedMenuItem] = useState(() => {
    return parseInt(sessionStorage.getItem("selectedMenuItem")) || 0;
  });

  const handleMenuItemClick = useCallback((index) => {
    console.log(index);
    setSelectedMenuItem(index);
    sessionStorage.setItem("selectedMenuItem", index);
  }, []);

  return (
    <div className="h-full w-16">
      <div
        className={` "w-24" p-4 pt-3 bg-[#101113] ease-in-out duration-500 flex-col gap-5 items-start relative h-screen shadow-lg  shadow-opacity-[30%] `}
      >
        <div
          className={` ease-in-out duration-500 cursor-default tracking-wide 
           "w-[90%]"
           flex items-center justify-center   mb-8`}
        >
          <BiLogoGmail className="bg-white rounded-[2px] mt-2" size={40} />
        </div>

        <div
          className={`origin-left text-xl mt-24 text-black  items-center gap-1  ease-in-out duration-300`}
        >
          <ul
            className={`
               "flex flex-col items-center justify-center"
            `}
          >
            {menu.map((item, index) => (
              <li
                key={index}
                className={` ${
                  item.gap ? "mt-4" : "mt-4"
                } flex items-center gap-x-4 rounded-[4px] cursor-pointer transition-all duration-500`}
              >
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(index)}
                  className={` hover:bg-[#2F3030] hover:text-[#FFFFFF] hover:rounded-[6px] h-full 
                                    ${
                                      index === selectedMenuItem
                                        ? "bg-[#2F3030] font-semibold text-white rounded-[6px]"
                                        : "text-[#FFFFFF]"
                                    } p-2`}
                >
                  {item.icons}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={` ease-in-out duration-500 cursor-default tracking-wide 
           "w-[90%]"
           flex items-center justify-center mt-56 p-1 bg-[#054F31] rounded-full`}
        >
          PJ
        </div>
      </div>
    </div>
  );
};

export default Menu;
