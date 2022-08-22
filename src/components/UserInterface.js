import { useState, useEffect } from "react";
import { fetchUsers } from "../api";

const UserInterface = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetchUsers().then(({ data }) => {
      console.log(data);

      data.forEach((user) => {
        if (user.username === "weegembump") setCurrentUser(user);
      });
    });
  }, []);

  return (
    <div className="user-interface">
      <img
        src={currentUser.avatar_url}
        alt="user-avatar"
        className="avatar"
      />
      <p className="username">Signed in as: {currentUser.username}</p>
    </div>
  );
};

export default UserInterface;
