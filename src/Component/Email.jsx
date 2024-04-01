import React, { useCallback, useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { useEmailContext } from './Content';

const Email = () => {
    const { emails, loading, fetchEmailDetails,setEmail,setName,setthreadid } = useEmailContext();
   
    const handleClick = async (threadId,email,name) => {
        try {
            const emailDetails = await fetchEmailDetails(threadId);
            setEmail(email)
            setName(name)
            setthreadid(threadId)
            console.log(email,name)
            console.log(threadId);
        } catch (error) {
            console.error('Error fetching email details:', error);
        }
        setEmail(emails[0].fromEmail)
        setName(emails[0].fromName)
        setthreadid(emails[0].threadId)
    };

    useEffect(() => {
        if(emails.length > 0) {
            
            handleClick(emails[0].threadId);
            // Pass threadId of the first element by default
            
        }
        
    }, [emails]);
    const [selectedMenuItem, setSelectedMenuItem] = useState(() => {
        return parseInt(sessionStorage.getItem("selectedtreadID")) || 0;
      });
    
      const handleMenuItemClick = useCallback((index) => {
        console.log(index);
        setSelectedMenuItem(index);
        sessionStorage.setItem("selectedtreadID", index);
      }, []);
    return (
        <div className="text-white p-4">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {emails.map((email,index) => (
                       

                        <li
                            key={email.id}
                            className="border-b border-t border-gray-700"
                            onClick={() => handleClick(email.threadId,email.fromEmail,email.fromName)} // Modified onClick handler
                            
                        >
                             <div
                        onClick={() => handleMenuItemClick(index)}
                        className={` hover:text-[#FFFFFF]  h-full hover:border-l-[4px] border-blue-500
                                          ${
                                            index === selectedMenuItem
                                              ? "h-full bg-[#171819] opacity-1  text-white  border-l-[4px] border-blue-500 "
                                              : "text-[#FFFFFF] "
                                          } py-5 pl-4`}>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <div className="flex gap-2">
                                        {email.isRead && (
                                            <span className="p-1 h-1 w-1 mt-2 bg-[#5C7CFA] rounded-full shadow-xl ring-2 ring-offset-gray-900 ring-opacity-10"></span>
                                        )}
                                        <div className="text-[#FFFFFF] font-inter text-base font-medium leading-5 text-left ">
                                            {email.fromEmail}
                                        </div>
                                    </div>

                                    <div>
                                        {new Date(email.sentAt)
                                            .toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                            .replace(
                                                /^\w{3}/,
                                                (match) =>
                                                    match.charAt(0).toUpperCase() + match.slice(1)
                                            )}
                                    </div>
                                </div>
                                <div className="ml-4 text-[#E1E0E0] font-inter text-xs font-normal leading-6 text-left">
                                    {email.subject.split(" ").slice(0, 6).join(" ")}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex bg-[#222426] w-autop-[2px] px-2 h-auto gap-2 border-2 border-gray-900 rounded-[16px] justify-center mt-4">
                                    {email.isRead && (
                                        <span className="p-1 h-1 w-1 mt-2 bg-[#57E0A6] rounded-full shadow-xl ring-2 ring-offset-gray-900 "></span>
                                    )}
                                    <div className="text-[#57E0A6] font-inter text-sm font-medium leading-5 text-left ">
                                        Interested
                                    </div>
                                </div>
                                <div className="flex bg-[#222426] w-auto p-[2px] px-4 m-auto h-auto gap-2 border-2 border-gray-900 rounded-[16px] justify-center mt-4 ">
                                    {email.isRead && (
                                        <span className=""><IoIosSend size={15} /></span>
                                        )}
                                    <div className="text-[#FFFFFF] font-inter font-medium leading-5 text-left text-sm">
                                        Campaign Name
                                    </div>
                                </div>
                            </div>
                    </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Email;
