import { useAuth0 } from "@auth0/auth0-react";
import { IoLogOut } from "react-icons/io5";
import React from 'react'

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <button 
        onClick={() => logout()}
        id="log-button">
          <IoLogOut className="logIcon" />
          Logout
        </button>
    )
  )
}

export default LogoutButton