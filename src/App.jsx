import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import { EmailProvider } from "./Component/Content";
import { Route, Routes } from "react-router-dom";
import Switcher from "./Component/Swith";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <EmailProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    
      </EmailProvider>
      <ToastContainer />
      {/* <Switcher /> */}
    </>
  );
}

export default App;
