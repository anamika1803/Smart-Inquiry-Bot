import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

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
        <ChatWindow onClose={() => setIsChatOpen(false)} />
      )}
    </div>
  );
}