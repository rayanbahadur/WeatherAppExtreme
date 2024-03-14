import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <button 
        onClick={() => loginWithRedirect()}
        className="text-l border rounded-md px-5 py-1 transition hover:scale-105">
          Login
        </button>
    )
  )
}

export default LoginButton