import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

function Profile() {
    const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
        <article>
            {user?.picture && <img src={user.picture} alt={user?.name} className="profile"/>}
            {/* <p className="text-sm">{user?.name}</p> */}
        </article>
    )
  )
}

export default Profile