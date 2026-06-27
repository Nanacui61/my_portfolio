import Image from "next/image";

const experience = [
  {
    year: "2026",
    role: "Software Developer Intern — AI Product",
    company: "SportsLingo / Next Play Games",
  },
  {
    year: "2025",
    role: "Frontend Developer Intern",
    company: "Môme Choix",
  },
  {
    year: "2025",
    role: "Consultant Intern",
    company: "Deloitte · Operations Transformation",
  },
  {
    year: "2026",
    role: "B.A. Computer Science & Economics",
    company: "Boston University",
  },
];

const beyondScreen = [
  "I'm happiest outdoors — hiking, swimming, getting into nature",
  "I stay moving: running, badminton, the gym",
  "I dance — I love feeling the connection between music and my body, and noticing how small moments add up",
];

export default function About() {
  return (
    <main className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      {/* Eyebrow + headline */}
      <p
        style={{
          fontFamily: "var(--font-newsreader)",
          fontStyle: "italic",
          fontSize: "15px",
          color: "#b0aca5",
          marginBottom: "20px",
        }}
      >
        Hi · 你好
      </p>

      <h1
        style={{
          fontFamily: "var(--font-newsreader)",
          fontSize: "clamp(34px, 5vw, 46px)",
          fontWeight: 400,
          lineHeight: 1.18,
          maxWidth: "680px",
          color: "#1a1a1a",
          marginBottom: "64px",
        }}
      >
        I build for the person on the <em>other side of the screen.</em>
      </h1>

      {/* Main two-column: bio + photo */}
      <div className="about-main-grid">
        {/* Left: bio */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-newsreader)",
              fontSize: "19px",
              color: "#1a1a1a",
              lineHeight: 1.75,
            }}
          >
            I&apos;m Nana — a CS + Economics grad from Boston University. I
            build web, mobile, and AI products: the cart that scrolls smoothly,
            the AI that doesn&apos;t frustrate you, the feature that just works.
            I care about the experience on the other side of the screen.
          </p>
        </div>

        {/* Right: photo */}
        <div>
          <div className="photo-card">
            <Image
              src="/nana-grad.jpg"
              alt="Yuqian (Nana) Cui"
              width={600}
              height={800}
              priority
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ marginTop: "14px" }}>
            <p
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#b0aca5",
                lineHeight: 1.8,
              }}
            >
              Yuqian (Nana) Cui
              <br />
              Boston University · Class of 2026
              <br />
              Boston, MA
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e8e6e1",
          margin: "64px 0",
        }}
      />

      {/* Beyond the screen */}
      <div className="label-content-grid" style={{ marginBottom: "56px" }}>
        <p
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#a8a39b",
            paddingTop: "2px",
          }}
        >
          Beyond the screen
        </p>
        <div>
          {beyondScreen.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--font-newsreader)",
                fontSize: "17px",
                color: "#3a3a3a",
                lineHeight: 1.7,
                marginBottom: i < beyondScreen.length - 1 ? "8px" : 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="label-content-grid">
        <p
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#a8a39b",
            paddingTop: "14px",
          }}
        >
          Experience
        </p>
        <div>
          {experience.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "16px",
                padding: "12px 0",
                borderBottom:
                  i < experience.length - 1 ? "1px solid #e8e6e1" : "none",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  color: "#c4bfb9",
                  width: "64px",
                  flexShrink: 0,
                  paddingTop: "2px",
                }}
              >
                {item.year}
              </span>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 500, color: "#1a1a1a" }}>
                  {item.role}
                </div>
                <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>
                  {item.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
