import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-primary-content">
      <div className="container-wrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Blabby Blue Jay</a>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
