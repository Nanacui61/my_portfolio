import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="container" style={{ paddingTop: "48px", paddingBottom: "80px" }}>
      {/* Back link */}
      <Link
        href="/"
        style={{
          fontSize: "13px",
          color: "#999",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "36px",
        }}
      >
        ← All work
      </Link>

      {/* Header */}
      <div style={{ marginBottom: "36px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#c4bfb9",
              fontSize: "16px",
            }}
          >
            {project.num}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-newsreader)",
              fontSize: "36px",
              fontWeight: 400,
              color: "#1a1a1a",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h1>
          <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: "1px solid #e8e6e1",
                  borderRadius: "9999px",
                  padding: "3px 10px",
                  color: "#999",
                }}
              >
                {tag}
              </span>
            ))}
            <span style={{ fontSize: "12px", color: "#c4bfb9" }}>{project.year}</span>
          </div>
        </div>
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontStyle: "italic",
            fontSize: "16px",
            color: "#888",
            lineHeight: 1.5,
          }}
        >
          {project.subtitle}
        </p>
      </div>

      {/* Perspective pull-quote */}
      <blockquote
        style={{
          borderLeft: "2px solid #0047ff",
          paddingLeft: "22px",
          marginBottom: "52px",
          maxWidth: "640px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-newsreader)",
            fontStyle: "italic",
            fontSize: "20px",
            color: "#3a3a3a",
            lineHeight: 1.55,
          }}
        >
          {project.perspective}
        </p>
      </blockquote>

      {/* Two-column body */}
      <div className="work-detail-grid">
        {/* Left: content */}
        <div>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#a8a39b",
              marginBottom: "12px",
            }}
          >
            Overview
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#444",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            {project.overview}
          </p>

          {project.sections.map((section) => (
            <div key={section.title} style={{ marginBottom: "24px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  marginBottom: "10px",
                }}
              >
                {section.title}
              </p>
              <ul style={{ paddingLeft: "18px" }}>
                {section.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "14px",
                      color: "#444",
                      lineHeight: 1.8,
                      marginBottom: "4px",
                    }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* What I learned */}
          {project.learned && (
            <div
              style={{
                marginTop: "40px",
                paddingTop: "24px",
                borderTop: "1px solid #e8e6e1",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#a8a39b",
                  marginBottom: "12px",
                }}
              >
                What I learned
              </p>
              <p
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontStyle: "italic",
                  fontSize: "17px",
                  color: "#3a3a3a",
                  lineHeight: 1.65,
                }}
              >
                {project.learned}
              </p>
            </div>
          )}
        </div>

        {/* Right: sticky sidebar */}
        <div style={{ position: "sticky", top: "24px", alignSelf: "start" }}>
          {/* Links */}
          <div
            style={{
              borderBottom: "1px solid #e8e6e1",
              paddingBottom: "18px",
              marginBottom: "18px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#a8a39b",
                marginBottom: "10px",
              }}
            >
              Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "13px", color: "#0047ff", textDecoration: "none" }}
                >
                  GitHub ↗
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "13px", color: "#0047ff", textDecoration: "none" }}
                >
                  {project.company ? "Live site ↗" : "Live demo ↗"}
                </a>
              )}
              {project.private && (
                <span style={{ fontSize: "13px", color: "#999" }}>
                  🔒 Private codebase
                </span>
              )}
            </div>
          </div>

          {/* Stack */}
          <div
            style={{
              borderBottom: "1px solid #e8e6e1",
              paddingBottom: "18px",
              marginBottom: "18px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#a8a39b",
                marginBottom: "10px",
              }}
            >
              Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    border: "1px solid #e8e6e1",
                    color: "#666",
                    borderRadius: "9999px",
                    padding: "3px 10px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Role */}
          <div>
            <p
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#a8a39b",
                marginBottom: "10px",
              }}
            >
              Role
            </p>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "#1a1a1a",
                marginBottom: "2px",
              }}
            >
              {project.role}
            </p>
            {project.company && (
              <p style={{ fontSize: "12px", color: "#888", marginBottom: "2px" }}>
                {project.company}
              </p>
            )}
            <p style={{ fontSize: "12px", color: "#c4bfb9" }}>{project.year}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
