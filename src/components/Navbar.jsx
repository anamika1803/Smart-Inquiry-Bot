import React, { useState } from "react";
import AuthModal from "./AuthModal";
import "./navbar.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          🎓 Smart College Bot
        </div>

        <div className="nav-buttons">
          <button className="signin" onClick={(onLoginClick) => setOpen(true)}>
            Sign In
          </button>
          <button className="signup" onClick={() => setOpen(true)}>
            Sign Up
          </button>
        </div>
      </nav>

      {open && <AuthModal close={() => setOpen(false)} />}
    </>
  );
};

export default Navigation;
