import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ChatWindow from "./components/ChatWindow";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import "./App.css";
import "./components/navbar.css";
import "./components/LoginModal.css";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen]=useState(false);

  return (
    <div className="app-wrapper">
      <LandingPage />

      {/* Floating Chat Toggle Button */}
      {!isChatOpen && (
        <button className="fab-btn" onClick={() => setIsChatOpen(true)}>
   💬
        </button>
      )}

      {/* Chat Window Overlay */}
      {isChatOpen && (
        <ChatWindow onClose={() => setIsChatOpen(false)}/>
      )}
      
      <Navbar onLoginClick={()=>setIsLoginOpen(true)}/>
        {/*Login Modal*/}
        <LoginModal
        isOpen={isLoginOpen}
        onClose={()=>setIsLoginOpen(false)}/>
      
    </div>
  );
}
