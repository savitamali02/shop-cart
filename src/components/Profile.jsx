import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const getUserInitial = () => {
    if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
    if (user?.email) return user.email.charAt(0).toUpperCase();
    return "?";
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div
            className="mx-auto d-flex align-items-center justify-content-center mb-3"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#FFD700",
              color: "#000",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {getUserInitial()}
          </div>
          <h3>{user?.displayName || "Anonymous User"}</h3>
          <p className="text-muted">{user?.email}</p>

          <div className="mt-4 d-flex justify-content-center gap-3">
            <button className="btn btn-outline-primary">Edit Profile</button>
            <button className="btn btn-outline-secondary">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
