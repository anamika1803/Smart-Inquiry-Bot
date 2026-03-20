// ChatWindow.jsx
// Full chat UI with Claude Sonnet API integration
// Shows Aria persona, quick-reply chips, message history

import { useState, useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";

const QUICK_REPLIES = [
  "BCA ki fees kya hai?",
  "B.Tech admission process?",
  "MBA placement stats?",
  "Hostel available hai?",
  "Eligibility criteria kya hai?",
];

const SYSTEM_PROMPT = `
You are Basu, a Smart College Assistant for an Indian college.
Answer only questions related to: fees, admissions, placements, hostel, eligibility, courses.
Reply naturally in Hindi, English, or Hinglish — match the user's language.
Keep answers concise and helpful. Use emojis occasionally.
If asked something outside college topics, politely redirect.
`;

const WELCOME_MESSAGE = {
  role: "assistant",
  content:
    "Namaste! 🎓 Main Basu hoon, aapka Smart College Assistant!\n\nMujhse fees, admission, placement, ya kisi bhi course ke baare mein poochh sakte ho. Main Hindi, English, ya Hinglish mein answer dunga! 😊",
};

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMessage = { role: "user", content: trimmed };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: updatedMessages,
        }),
      });

      const data = await response.json();
      const reply =
        data?.content?.[0]?.text || "Kuch problem aayi, dobara try karein.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Network error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <div className="chat-overlay">
      <div className="chat-container">

        {/* ── Header ── */}
        <div className="chat-header">
          <div className="header-avatar">
            🤖
            <span className="online-dot" />
          </div>

          <div className="header-info">
            <div className="header-name">Basu — College Assistant</div>
            <div className="header-status">● Online • Ready to help</div>
          </div>

          <div className="header-badge">AI</div>

          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* ── Messages ── */}
        <div className="messages-area">
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}

          {/* Typing indicator while loading */}
          {isLoading && (
            <div className="bubble-row">
              <div className="bubble-avatar">🤖</div>
              <div className="bubble bot">
                <div className="typing-dots">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* ── Quick Replies ── */}
        <div className="quick-replies">
          {QUICK_REPLIES.map((q) => (
            <button
              key={q}
              className="quick-chip"
              onClick={() => sendMessage(q)}
            >
              {q}
            </button>
          ))}
        </div>

        {/* ── Input Area ── */}
        <div className="input-area">
          <input
            className="message-input"
            placeholder="Koi bhi sawaal poochho..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="send-btn" onClick={() => sendMessage(input)}>
            ➤
          </button>
        </div>

      </div>
    </div>
  );
}