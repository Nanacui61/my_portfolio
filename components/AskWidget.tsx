"use client";

import { useState, useRef, useEffect } from "react";

type Message = { role: "user" | "assistant"; text: string };

const SUGGESTED = [
    "What is Nana building lately?",
    "Why product + frontend?",
    "Tell me about her Deloitte internship",
    "What makes her fun to work with?",
];

export default function AskWidget() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, loading]);

    async function sendQuestion(question: string) {
        if (!question.trim() || loading) return;

        setMessages((prev) => [...prev, { role: "user", text: question }]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question }),
            });
            const data = await res.json();
            const answer = data.answer || "Oops, Nana needs coffee. Try again?";
            setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
        } catch {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", text: "Oops, Nana needs coffee. Try again?" },
            ]);
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        sendQuestion(input);
    }

    return (
        <>
            {/* Floating button */}
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    padding: "12px 20px",
                    borderRadius: 9999,
                    background: "#1a1a1a",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    fontFamily: "system-ui, sans-serif",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                    zIndex: 50,
                    transition: "transform .35s cubic-bezier(.34,1.56,.64,1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                {open ? "Close ✕" : "Ask Nana :)"}
            </button>

            {/* Popup */}
            {open && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 88,
                        right: 24,
                        width: 340,
                        height: 460,
                        background: "#f9f8f5",
                        border: "1px solid #e8e6e1",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                        zIndex: 49,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        animation: "askSlideUp .35s cubic-bezier(.34,1.56,.64,1)",
                    }}
                >
                    <style>{`
            @keyframes askSlideUp {
              from { opacity: 0; transform: translateY(16px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>

                    {/* Header */}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #e8e6e1" }}>
                        <div style={{ fontFamily: "Newsreader, serif", fontStyle: "italic", fontSize: 16, color: "#1a1a1a" }}>
                            Nana&apos;s portfolio assistant
                        </div>
                        <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>
                            Ask about her work, projects, or what she&apos;s building.
                        </div>
                    </div>

                    {/* Body: scroll area */}
                    <div
                        ref={scrollRef}
                        style={{ flex: 1, overflowY: "auto", padding: "14px 18px", display: "flex", flexDirection: "column", gap: 10 }}
                    >
                        {messages.length === 0 && (
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {SUGGESTED.map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => sendQuestion(q)}
                                        style={{
                                            textAlign: "left",
                                            padding: "8px 12px",
                                            fontSize: 12.5,
                                            background: "#fff",
                                            border: "1px solid #e0ddd8",
                                            cursor: "pointer",
                                            color: "#444",
                                            transition: "transform .35s cubic-bezier(.34,1.56,.64,1), background .2s",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = "#f0f3ff";
                                            e.currentTarget.style.transform = "translateX(4px)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = "#fff";
                                            e.currentTarget.style.transform = "translateX(0)";
                                        }}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {messages.map((m, i) => (
                            <div
                                key={i}
                                style={{
                                    alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                                    maxWidth: "85%",
                                    padding: "8px 12px",
                                    fontSize: 13,
                                    lineHeight: 1.6,
                                    background: m.role === "user" ? "#1a1a1a" : "#fff",
                                    color: m.role === "user" ? "#fff" : "#444",
                                    border: m.role === "user" ? "none" : "1px solid #e8e6e1",
                                    whiteSpace: "pre-wrap",
                                }}
                            >
                                {m.text}
                            </div>
                        ))}

                        {loading && (
                            <div style={{ alignSelf: "flex-start", fontSize: 12.5, color: "#999", fontStyle: "italic" }}>
                                Nana is thinking...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSubmit} style={{ display: "flex", borderTop: "1px solid #e8e6e1" }}>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            style={{
                                flex: 1,
                                padding: "12px 14px",
                                border: "none",
                                fontSize: 13,
                                background: "#fff",
                                outline: "none",
                            }}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                padding: "0 18px",
                                background: "#1a1a1a",
                                color: "#fff",
                                border: "none",
                                cursor: "pointer",
                                fontSize: 14,
                            }}
                        >
                            ↵
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}