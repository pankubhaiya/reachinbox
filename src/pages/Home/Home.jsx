import React, { useState } from 'react';
import DpMenu from "./Menu"
import Heder from './Heder';
// import Header from './Heder';
const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="h-screen flex w-screen bg-[#000000]">
            {/* Sidebar */}
            <DpMenu />
            <Heder />
           
        </div>
    );
};

export default Home;
