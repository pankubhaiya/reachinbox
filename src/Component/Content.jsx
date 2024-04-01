// EmailContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const EmailContext = createContext();

export const useEmailContext = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emailDetails, setEmailDetails] = useState([]);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [threadid, setthreadid] = useState(null);
  const [token, setToken] = useState('');
  console.log(name, email);
  useEffect(() => {
    // Check if the token exists in local storage
    const tokenFromStorage = localStorage.getItem("token");

    // If the token exists in local storage, set it in the component's state
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
    }
  }, []);
  // console.log(tokenFromStorage)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setEmails(data.data);
        console.log(data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchEmailDetails = async (threadId) => {
    setDetailsLoading(true);
    try {
      const response = await fetch(
        `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setEmailDetails(data.data);
      setDetailsLoading(false);
      return data;
    } catch (error) {
      console.error("Error fetching email details:", error);
      setDetailsError(error);
      setDetailsLoading(false);
    }
  };

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "KeyR") {
        setIsMessageBoxOpen(!isMessageBoxOpen);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "KeyD") {
        setIsToggled(!isToggled); // Toggle the boolean value
      }
    };

    // Add event listener to the document
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <EmailContext.Provider
      value={{
        token,
        emails,
        loading,
        emailDetails,
        detailsLoading,
        detailsError,
        email,
        name,
        isMessageBoxOpen,
        isToggled,
        threadid,
        setthreadid,
        setIsToggled,
        setIsMessageBoxOpen,
        setEmail,
        setName,
        fetchEmailDetails,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
