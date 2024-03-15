import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <button 
        onClick={() => logout()}
        id="log-button">
          Logout
        </button>
    )
  )
}

export default LogoutButton