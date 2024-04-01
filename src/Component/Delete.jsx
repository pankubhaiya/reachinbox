import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./delete.css";
import { useEmailContext } from "./Content";
import { useNavigate } from "react-router-dom/dist";
// import Toas from "./Toas.Jsx";
const Delete = () => {
  const Navigate = useNavigate();
  const { isToggled, setIsToggled, threadid, token } = useEmailContext();
  const deletebox = () => {
    setIsToggled(!isToggled);
  };
  const handleDelete = async () => {
    console.log(threadid, token);
    fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadid}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setTimeout(() => {
          toast.success("Email deleted successfully.");
        }, 100);

        // Perform other actions after a longer delay
        setTimeout(() => {
          window.location.reload();
          Navigate("/home");
        }, 5000);
      })
      .catch((error) => {
        // toast.error("Email thread not found");
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  return (
    <div
      className={`delete-div absolute ${
        isToggled ? "opacity-950" : "opacity-100"
      }`}
    >
      <div className="heading-div">Are you sure ?</div>
      <p className="pera ">Your selected email will be deleted</p>
      <div className="flex mt-16 m-auto gap-8 w-full justify-center">
        <div className="cancel " onClick={deletebox}>
          Cancel
        </div>
        <div className="delete" onClick={handleDelete}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default Delete;
