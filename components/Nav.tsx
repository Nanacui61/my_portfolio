import Link from "next/link";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "#f9f8f5",
        borderBottom: "1px solid #e8e6e1",
      }}
    >
      <div
        className="container"
        style={{
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            className="breathe"
            style={{
              fontFamily: "var(--font-newsreader)",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#1a1a1a",
            }}
          >
            Nana Cui
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link
            href="/#work"
            className="nav-link hidden sm:block"
            style={{ fontSize: "13px", color: "#1a1a1a", textDecoration: "none" }}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="nav-link hidden sm:block"
            style={{ fontSize: "13px", color: "#1a1a1a", textDecoration: "none" }}
          >
            About
          </Link>
          <a
            href="#contact"
            className="nav-link"
            style={{ fontSize: "13px", color: "#1a1a1a", textDecoration: "none" }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
