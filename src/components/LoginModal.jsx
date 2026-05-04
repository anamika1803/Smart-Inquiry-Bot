import "./LoginModal.css";
import { FcGoogle } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";


const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        {/* Icon */}
        <div className="icon">🎓</div>

        {/* Title */}
        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to Smart College Bot</p>

        {/* Inputs */}
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        {/* Sign In Button */}
        <button className="signin-btn">Sign In</button>

        {/* Google Button */}
        <button className="google-btn">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="footer-text">
          Don’t have an account? <span>Sign up</span>
        </p>

      </div>
    </div>
  );
};
  export default LoginModal;



