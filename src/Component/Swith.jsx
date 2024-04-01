// Switcher component
import React, { useEffect } from "react";

export default function Switcher() {
  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");

    if (preferredTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function changeMode(mode, event) {
    const isDarkMode = document.documentElement.classList.contains("dark");

    switch (mode) {
      case "mode":
        if (isDarkMode) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="fixed top-[30%] -end-3 z-50">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
            onClick={(event) => changeMode("mode", event)}
          />
          <label
            className="label bg-slate-900 dark:bg-darkBackground shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            htmlFor="chk"
          >
            <span className="ball bg-white dark:bg-darkText rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
          </label>
        </span>
      </div>
    </>
  );
}
