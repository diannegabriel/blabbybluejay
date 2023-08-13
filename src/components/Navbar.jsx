import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar bg-primary text-primary-content">
      <div className="container-wrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Blabby Blue Jay</a>
        <button onClick={handleLogOut}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
