export default function Footer() {
  return (
    <footer id="contact" style={{ borderTop: "1px solid #e8e6e1", marginTop: "80px" }}>
      <div
        className="container"
        style={{
          paddingTop: "48px",
          paddingBottom: "48px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontStyle: "italic",
            fontSize: "18px",
            color: "#999",
            marginBottom: "24px",
          }}
        >
          Let&apos;s chat?
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "24px",
            fontSize: "13px",
          }}
        >
          <a href="mailto:yqcui@bu.edu" className="footer-link">
            yqcui@bu.edu
          </a>
          <a
            href="https://www.linkedin.com/in/yuqian-cui-nana"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Nanacui61"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
        </div>

        <p style={{ fontSize: "12px", color: "#c4bfb9" }}>© 2026 Nana Cui</p>
      </div>
    </footer>
  );
}
