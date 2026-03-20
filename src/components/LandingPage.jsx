// LandingPage.jsx
// Shows the main screen with title, topic chips, and chat button hint

export default function LandingPage() {
  const topics = [
    { emoji: "💰", label: "Fees" },
    { emoji: "📝", label: "Admission" },
    { emoji: "🚀", label: "Placement" },
    { emoji: "🏠", label: "Hostel" },
    { emoji: "🎓", label: "Eligibility" },
  ];

  return (
    <div className="landing-container">
      {/* Graduation Cap Icon */}
      <div className="landing-icon">🎓</div>

      {/* Title */}
      <h1 className="landing-title">Smart College Bot</h1>

      {/* Subtitle */}
      <p className="landing-subtitle">
        Apne college ke baare mein kuch bhi poochho — fees, admission,
        placement, sab kuch!
      </p>

      {/* Topic Chips */}
      <div className="topic-chips">
        {topics.map((t) => (
          <button key={t.label} className="chip">
            {t.emoji} {t.label}
          </button>
        ))}
      </div>

      {/* Hint */}
      <p className="landing-hint">👇 Neeche chat button click karein</p>
    </div>
  );
}