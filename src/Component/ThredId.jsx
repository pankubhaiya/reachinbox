import React from "react";
import { useEmailContext } from "./Content";
import EmailContent from "./Emailcontent";

const ThreadData = () => {
  const { emailDetails, detailsLoading, detailsError } = useEmailContext();

  if (detailsLoading) {
    return <p>Loading email details...</p>;
  }

  if (detailsError) {
    return <p>Error fetching email details: {detailsError.message}</p>;
  }

  function formatDate(dateString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
  function formatmonth(dateString) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const date = new Date(dateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    
    return `${day} ${month}`;
  }
  
  // Example usage:
  formatmonth("2022-02-02T13:41:38.000Z");

  const formattedDate = formatDate("2022-02-01T13:41:38.000Z");
  console.log(formattedDate);
  return (
    <div className="">
      <ul>
        {emailDetails &&
        Array.isArray(emailDetails) &&
        emailDetails.length > 0 ? (
          emailDetails.map((email, index) => (
            <div>
              <div class="relative top-1">
                <div class="absolute inset-0 flex items-center justify-center z-20">
                  <div class="text-white bg-opacity-150 bg-[#171819] px-4 py-2 rounded">
                   {formatmonth(email.sentAt)}
                  </div>
                </div>
                <div class="h-px bg-[#F8FAFC] w-[90%] m-auto mt-6 z-0"></div>
              </div>

              <li
                key={index}
                className="w-[90%] h-[230px]  m-auto my-5 mt-8  border border-[#343A40] rounded-[4px] p-2 bg-[rgb(20,21,23)] pl-4"
              >
                <div className="flex justify-between">
                  <div className="text-[#F8FAFC] font-2xl leading-6 text-left">
                    {email.subject.split(" ").slice(0, 6).join(" ")}
                  </div>
                  <div className="text-[#7F7F7F] mr-5">
                    {formatDate(email.sentAt)}
                  </div>
                </div>

                <p className="w-442.2 h-17 mt-2 text-left text-[#AEAEAE]">
                  from : {email.fromEmail}
                </p>
                <p className="w-442.2 h-17 mt-2 mb-4 text-left text-[#AEAEAE]">
                  to : {email.toEmail}
                </p>
                <div className="email-body">
                  <EmailContent content={email.body} />
                </div>
              </li>
            </div>
          ))
        ) : (
          <p>No email details available.</p>
        )}
      </ul>
    </div>
  );
};

export default ThreadData;
