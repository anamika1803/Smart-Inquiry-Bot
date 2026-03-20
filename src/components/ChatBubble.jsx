// ChatBubble.jsx
// Renders individual chat messages — bot (left) and user (right)

export default function ChatBubble({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={`bubble-row ${isUser ? "user" : ""}`}>
      {/* Show bot avatar only for bot messages */}
      {!isUser && (
        <div className="bubble-avatar">🤖</div>
      )}

      <div className={`bubble ${isUser ? "user" : "bot"}`}>
        {message.content}
      </div>
    </div>
  );
}