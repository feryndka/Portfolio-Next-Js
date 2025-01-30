"use client";
import { useState } from "react";
import MessageCard from "./MessageCard";
import { getOllamaResponse } from "./ollama";

export default function Deepseek() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);

  const [input, setInput] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { role: "user", content: input };

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // function AI
      let response = await getOllamaResponse([newMessage]);

      const cleanedResponse = response.replace(/<\/?[^>]+(>|$)/g, "").trim();

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: cleanedResponse },
      ]);

      setInput("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-5 right-5 bg-teal-500 text-white rounded-full ${
          isOpen ? "py-4 px-5" : "p-4"
        }`}
      >
        {isOpen ? "✖" : "💬"}
      </button>

      {/* Chat Card */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-xl flex flex-col">
          <div className="bg-teal-700 text-white p-4 text-center rounded-t-xl font-semibold">
            AI Chat
          </div>
          <main className="flex-grow overflow-hidden">
            <div className="max-h-96 flex flex-col">
              <div className="flex-grow overflow-y-auto p-4 my-4 flex flex-col">
                {messages.map((message, index) => (
                  <MessageCard
                    key={index}
                    role={message.role}
                    message={message.content}
                  />
                ))}
              </div>
              <form onSubmit={handleSubmit} className="flex p-2 border-t">
                <input
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow p-2 border rounded-lg border-gray-300 text-black"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="ml-2 py-2 px-4 bg-teal-500 text-white rounded-lg"
                >
                  ➤
                </button>
              </form>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
