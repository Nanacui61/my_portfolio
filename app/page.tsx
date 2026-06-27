import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="container" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      {/* Hero */}
      <section>
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
          }}
        >
          I build for the person on the{" "}
          <em>other side of the screen.</em>
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#888",
            maxWidth: "480px",
            marginTop: "24px",
            lineHeight: 1.7,
          }}
        >
          Web, mobile, and AI products — I care about how they feel to use, not
          just whether they work.
        </p>
      </section>

      {/* Work */}
      <WorkSection />
    </main>
  );
}
