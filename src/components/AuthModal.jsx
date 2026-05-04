import React, { useState } from "react";
import "./modal.css";


const AuthModal = ({ close }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="overlay">
      <div className="modal">
        <span className="close" onClick={close}>×</span>

        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>

        {!isLogin && (
          <input type="text" placeholder="Name" />
        )}

        <input type="email" placeholder="Email" />

        <button className="main-btn">
          {isLogin ? "Login" : "Register"}
        </button>

        <div className="divider">OR</div>

        <button className="google-btn">
          Continue with Google
        </button>

        <p>
          {isLogin ? "Don't have account?" : "Already have account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;

