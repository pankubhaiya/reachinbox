import React, { useEffect, useState } from 'react';
import DpMenu from "./Menu"
import Heder from './Heder';
// import Header from './Heder';
const Home = () => {
    
    const [token, setToken] = useState('');

    useEffect(() => {
      // Parse the URL to extract the token
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");
  
      // Set the token in the component's state
      if (tokenFromUrl) {
        setToken(tokenFromUrl);
        // Save the token in local storage
        localStorage.setItem('token', tokenFromUrl);
      }
    }, []);
  
    // Log the token from local storage
    console.log("token from local storage: ", localStorage.getItem('token'));

    return (
        <div className="h-screen flex w-screen bg-[#000000]">
            {/* Sidebar */}
            <DpMenu />
            <Heder />
           
        </div>
    );
};

export default Home;
