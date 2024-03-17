// This component provides a login button functionality using Auth0 authentication. 
// It utilizes the useAuth0 hook to handle login actions and authentication status.

import { useAuth0 } from "@auth0/auth0-react";
import { IoLogIn } from "react-icons/io5";
import React from 'react'

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
    <button 
        onClick={() => loginWithRedirect()}
        id="log-button">
          <IoLogIn className="logIcon" />
          Login
        </button>
    )
  )
}

export default LoginButton