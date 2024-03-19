import React from 'react';
import { toast } from "react-toastify";

const Alerts = ({ alerts }) => {
  // Display alerts using toast notifications
  alerts.forEach(alert => {
    toast.warn(alert.headline, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  });

  return null;
};

export default Alerts;
