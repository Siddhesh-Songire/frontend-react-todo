import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);

  return loading ? (
    <Loader />
  ) : (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        borderRadius: "4px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
      >
        {user?.name}
      </h1>
      <p style={{ fontSize: "16px", marginBottom: "5px" }}>{user?.email}</p>
    </div>
  );
};

export default Profile;
