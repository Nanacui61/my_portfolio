"use client";

import { useState, useEffect } from "react";

function getGreeting(hour: number): string {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  return "evening";
}

export default function StatusHero() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    setGreeting(getGreeting(new Date().getHours()));
  }, []);

  if (!greeting) {
    return <div style={{ height: "21px", marginTop: "20px" }} />;
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "13px",
        color: "#0047ff",
      }}
    >
      <span
        className="breathe-dot"
        style={{
          width: "6px",
          height: "6px",
          background: "#0047ff",
        }}
      />
      <span>
        It&apos;s {greeting} in Boston — probably building something right now.
      </span>
    </div>
  );
}
