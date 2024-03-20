// This component displays user profile information, including the user's profile picture, 
// when authenticated using Auth0. It utilizes the useAuth0 hook to access user data and 
// checks authentication status to conditionally render the profile details.

import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

function Profile() {
    const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
        <article>
            {user?.picture && <img src={user.picture} alt={user?.name} className="profile"/>}
        </article>
    )
  )
}

export default Profile