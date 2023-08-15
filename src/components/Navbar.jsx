import React from "react";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logOut } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar fixed z-10 bg-[#134a8e] text-primary-content">
      <div className="container-wrap flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-xl pr-0 hover:bg-transparent" href="/">
            Blabby Blue Jay
          </a>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-circle btn-ghost btn-xs text-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </label>
            <div
              tabIndex={0}
              className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64"
            >
              <div className="card-body">
                <h2 className="card-title">About</h2>
                <p>
                  Made with JavaScript, React.js, TailwindCSS, DaisyUI,
                  Firebase, and Vite.
                </p>
                <p>
                  Created by {" "}
                  <a href="https://github.com/diannegabriel/blabbybluejay" target="_blank">
                    Dianne
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {currentUser ? <button onClick={handleLogOut}>Logout</button> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
