import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <button 
        onClick={() => logout()}
        className="text-l border rounded-md px-5 py-1 transition hover:scale-105">
          Logout
        </button>
    )
  )
}

export default LogoutButton