import React, { useContext } from "react";
import UserContext from "../utilis/UserContext";

function CompC() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <div className="border border-spacing-28 border-black px-24 py-10">
        <h1>CompC - User Profile</h1>

        <h5><strong>Name:</strong> {user.name}</h5>
        <h5><strong>Email:</strong> {user.email}</h5>
      </div>
    </div>
  );
}

export default CompC;
