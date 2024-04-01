import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./heder.css";
import { LuSunMoon } from "react-icons/lu";
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
                <div className="mr-6">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-400"></div>
                    <LuSunMoon
                      size={15}
                      className="relative peer-checked:higd opacity-100 right-100"
                    />
                  </label>
                </div>
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
