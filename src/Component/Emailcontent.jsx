import React from "react";

const EmailContent = ({ content }) => {
  const emailContent =
    "<p>How are you Shaw?</p><p>Thanks for reaching out over our web chat.</p><p>How can I help you with your project?</p><p>Please let me know if you need anything else.</p><p>Regards,<br/>Mitrajit Chandra</p><p>7ZG2ZTV 6KG634E</p>";
  //   console.log(content )
  return (
    <div className="email-body">
      <style jsx>{`
        .email-body br {
          display: none;
        }
        .email-body {
          margin-bottom: 8px;
          with:100%;
          
        }
        .email-body p {
         
          margin-bottom: 0px;
          color: white;
          font-family: Open Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 19.07px;
          letter-spacing: -0.02em;
          text-align: left;
        }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default EmailContent;
