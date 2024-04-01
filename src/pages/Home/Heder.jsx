import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./heder.css";

// import Content from "../../Component/Content";
import Main from "../../Component/Main";
const Heder = () => {
  return (
    <div className="head w-full h-auto ">
      <div className="w-full  rounded-tl-md ">
        <div className="h-[66px] shadow-sm  flex items-center justify-between bg-[#1F1F1F]  ">
          <div className="m-2">
            <p className="onebox  text-left">Onebox</p>
          </div>
          <div className="flex gap-5 ">
            <div className="">
              <div
                className={`flex px-4 py-2 rounded-[10px] cursor-pointer  items-center w-auto`}
              >
                <div className="flex gap-2 ">
                  <p className="text-white">Tim’s Workspace</p>
                  <button type="button">
                    <FiChevronDown size={24} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Content />
      </div> */}
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Heder;
