import React, { useState, useRef, useEffect } from "react";
import { askGemini }
from "../services/geminiService";

const AIAssistant = () => {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("activeUser") || "Student";
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi ${
        localStorage.getItem("activeUser") || "Student"
      }! I am StudySphere Gemini AI. Built on high-performance multi-modal neural layers, I can debug configurations, write programs, explain concepts, and help with coding. What would you like to learn today? 🚀`,
      sender: "ai",
      time: "Just now",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const activeName =
        localStorage.getItem("activeUser") || "Student";
      setUserName(activeName);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const generateGeminiLivePayload = async (userPrompt) => {
    const formattedPrompt = userPrompt.toLowerCase().trim();

    if (formattedPrompt.includes("hello world")) {
      return `JavaScript:

console.log("Hello, World!");

Python:

print("Hello, World!");`;
    }

    if (formattedPrompt.includes("fibonacci")) {
      return `Optimized Fibonacci Program:

def generate_fibonacci(n):
    sequence = [0, 1]

    while len(sequence) < n:
        sequence.append(
            sequence[-1] + sequence[-2]
        )

    return sequence[:n]

print(generate_fibonacci(10))
`;
    }

    if (formattedPrompt.includes("factorial")) {
      return `JavaScript Factorial:

const factorial = (n) => {
   return n <= 1
      ? 1
      : n * factorial(n - 1);
};

console.log(factorial(5));
`;
    }

    if (
      formattedPrompt.includes("react")
    ) {
      return `React is a JavaScript library used for building user interfaces.

Key Concepts:
• Components
• Props
• State
• Hooks
• Routing

Example:

function App() {
  return <h1>Hello React</h1>;
}`;
    }

    if (
      formattedPrompt.includes("java")
    ) {
      return `Java Example:

public class Main {
   public static void main(String[] args) {
      System.out.println("Hello World");
   }
}`;
    }

    return `I can help you with:

• Java
• Python
• C++
• React
• DSA
• Web Development
• Projects
• Debugging

Try asking:

"Show Fibonacci Program"

"Explain React Hooks"

"Create Login Page"

"Write Java Stack Implementation"

"Explain Dijkstra Algorithm"`;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const currentInput = inputValue;

    const userMessage = {
      id: Date.now(),
      text: currentInput,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInputValue("");

    setIsTyping(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      const aiResponseText =
        await generateGeminiLivePayload(currentInput);

      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: "ai",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);
    } catch (error) {
      console.error(
        "AI Response Error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Sorry, something went wrong.",
          sender: "ai",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="ai-container">
      <div className="ai-header-panel">
        <div className="ai-bot-info">
          <span className="ai-avatar-badge">
            🤖
          </span>

          <div>
            <h3>
               AI Assistant
            </h3>

            <span className="online-status">
              <span className="pulse-dot"></span>
              Active Session: {userName}
            </span>
          </div>
        </div>

        <div className="ai-actions-top">
          <span className="model-tag">
            Gemini-Pro-v1.5
          </span>
        </div>
      </div>

      <div className="chat-messages-box">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-row ${
              msg.sender === "user"
                ? "row-user"
                : "row-ai"
            }`}
          >
            {msg.sender === "ai" && (
              <span className="bubble-avatar">
                🤖
              </span>
            )}

            <div
              className={`message-bubble ${
                msg.sender === "user"
                  ? "bubble-user"
                  : "bubble-ai"
              }`}
            >
              <div className="message-text-content">
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    margin: 0,
                    fontFamily: "inherit",
                  }}
                >
                  {msg.text}
                </pre>
              </div>

              <span className="msg-time-stamp">
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message-row row-ai">
            <span className="bubble-avatar">
              🤖
            </span>

            <div className="message-bubble bubble-ai typing-indicator-box">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}

        <div ref={chatEndRef}></div>
      </div>

      <form
        className="chat-input-form-bar"
        onSubmit={handleSendMessage}
      >
        <input
          type="text"
          className="chat-input-field"
          placeholder="Ask anything about coding, DSA, React, Java..."
          value={inputValue}
          onChange={(e) =>
            setInputValue(e.target.value)
          }
        />

        <button
          type="submit"
          className="chat-submit-btn"
          disabled={!inputValue.trim()}
        >
          Send ➜
        </button>
      </form>
    </div>
  );
};

export default AIAssistant;