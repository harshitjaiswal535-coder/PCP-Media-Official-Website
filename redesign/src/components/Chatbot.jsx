import React, { useState, useRef, useEffect } from "react";

const INITIAL_BOT_MESSAGE = {
  sender: "bot",
  text: "Hello! I am PCP Scout, your creative assistant. Looking for content creation, monthly marketing, or a custom shoot?",
  suggestions: [
    "What services do you offer?",
    "How does pricing work?",
    "Show me your work",
    "Connect with team on WhatsApp",
  ],
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([INITIAL_BOT_MESSAGE]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: textToSend }];
    setMessages(newMessages);
    if (!userText) setInput("");

    // Simulate smart bot response based on agency capabilities
    setTimeout(() => {
      let botResponse = "";
      let newSuggestions = [];
      const query = textToSend.toLowerCase();

      if (query.includes("pricing") || query.includes("budget") || query.includes("cost")) {
        botResponse = "Our packages are customized around your volume and channels (photoshoots, reels, ads, or full management). We tailor proposals after a quick brief!";
        newSuggestions = ["Tell us about your project", "Connect with team on WhatsApp"];
      } else if (query.includes("service") || query.includes("offer")) {
        botResponse = "We specialize in Digital Marketing, Social Media Management, Content Creation (Reels & Photography), and Performance Ad Campaigns.";
        newSuggestions = ["Digital Marketing", "Content Creation", "Performance Marketing"];
      } else if (query.includes("work") || query.includes("portfolio") || query.includes("client")) {
        botResponse = "We’ve worked with Maharana Pratap Education Centre, Dularey Jewellers, SG Industries, and more. Check our 'Selected Concepts' section or open Google Drive folders!";
        newSuggestions = ["Connect with team on WhatsApp", "How does pricing work?"];
      } else if (query.includes("whatsapp") || query.includes("connect") || query.includes("team")) {
        botResponse = "Opening WhatsApp now with our agency line (+91 78394 92298)...";
        window.open("https://wa.me/917839492298?text=" + encodeURIComponent("Hi PCP Media, I was chatting with PCP Scout on your website and would like to discuss a project."), "_blank");
      } else {
        botResponse = "I can help connect you directly with Harshit and the team on WhatsApp, or help you fill out a project brief!";
        newSuggestions = ["Connect with team on WhatsApp", "What services do you offer?"];
      }

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse, suggestions: newSuggestions },
      ]);
    }, 450);
  };

  return (
    <>
      {/* Floating Chat Trigger */}
      <button
        className="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Agency Chat"
      >
        <span className="chatbot-pulse-dot" />
        <span>{isOpen ? "Close Scout" : "Ask PCP Scout"}</span>
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chatbot-pulse-dot" />
              <div>
                <h4>PCP Scout</h4>
                <span>Online • Creative Assistant</span>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, idx) => (
              <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                <div className={`chat-bubble ${m.sender}`}>
                  {m.text}
                </div>
                {m.suggestions && (
                  <div className="chat-suggestions">
                    {m.suggestions.map((s, sIdx) => (
                      <button
                        key={sIdx}
                        className="suggestion-chip"
                        onClick={() => handleSend(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            className="chat-input-area"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Ask a question or request a quote..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="chat-send-btn" type="submit">→</button>
          </form>
        </div>
      )}
    </>
  );
}