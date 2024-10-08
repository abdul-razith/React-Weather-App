import React, { useEffect } from "react";
import "./error.css";

export const Error = ({ errorSts }) => {

  useEffect(() => {

    const timer = setTimeout(() => {
      window.location.reload(); // Page reloading.
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorSts]);


  if (typeof errorSts == "string") {
    return (
      <div className="error">
        <div className="msg">
          <p>{errorSts}</p>
        </div>
        <img src="/no-internet.png" alt="" />
      </div>
    );
  } else {
    return (
      <div className="error">
        <div className="msg">
          <p>{errorSts.cod}</p>
          <p>{errorSts.msg.toUpperCase()}</p>
        </div>
        <img src="/not-found.png" alt="" />
      </div>
    );
  }
};