"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

const ALL_TAGS = ["All", "AI", "Mobile", "E-commerce", "Web"];

type Project = (typeof projects)[0];

export default function WorkSection() {
  const [activeTag, setActiveTag] = useState("All");
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sectionVisible = useRef(false);

  const filtered =
    activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));
  const internships = filtered.filter((p) => p.type === "internship");
  const personal = filtered.filter((p) => p.type === "project");

  // Observe section entrance once
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionVisible.current = true;
          setEntered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Re-stagger when filter changes if section already visible
  useEffect(() => {
    if (!sectionVisible.current) return;
    setEntered(false);
    const t = setTimeout(() => setEntered(true), 30);
    return () => clearTimeout(t);
  }, [activeTag]);

  const spring = "cubic-bezier(0.34, 1.56, 0.64, 1)";

  function rowStyle(globalIdx: number): React.CSSProperties {
    const delay = `${globalIdx * 90}ms`;
    const t = `opacity 0.5s ${spring} ${delay}, transform 0.5s ${spring} ${delay}`;
    if (entered) {
      // No inline transform — lets the CSS .spring-row:hover take over
      return { opacity: 1, transition: t };
    }
    return { opacity: 0, transform: "translateY(14px)", transition: t };
  }

  function renderRow(project: Project, localIdx: number, startIdx: number, isLastInGroup: boolean) {
    const globalIdx = startIdx + localIdx;
    return (
      <Link
        key={project.slug}
        href={`/work/${project.slug}`}
        className="spring-row"
        style={{
          borderTop: "1px solid #e8e6e1",
          ...(isLastInGroup ? { borderBottom: "1px solid #e8e6e1" } : {}),
          padding: "20px 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "24px",
          ...rowStyle(globalIdx),
        }}
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            flex: 1,
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-newsreader)",
              color: "#c4bfb9",
              fontSize: "14px",
              lineHeight: "28px",
              flexShrink: 0,
              width: "24px",
            }}
          >
            {project.num}
          </span>
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              <span
                className="project-title"
                style={{
                  fontFamily: "var(--font-newsreader)",
                  fontSize: "21px",
                  fontWeight: 400,
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </span>
              {project.featured && (
                <span
                  style={{
                    fontSize: "9px",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    border: "1px solid #e8e6e1",
                    borderRadius: "9999px",
                    padding: "2px 8px",
                    color: "#999",
                  }}
                >
                  Featured
                </span>
              )}
            </div>
            <div
              style={{
                fontSize: "14px",
                color: "#888",
                fontStyle: "italic",
                marginTop: "3px",
                lineHeight: 1.4,
              }}
            >
              {project.subtitle}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
                marginTop: "10px",
              }}
            >
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "10px",
                    border: "1px solid #e8e6e1",
                    color: "#999",
                    borderRadius: "9999px",
                    padding: "2px 8px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4px",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "13px", color: "#999" }}>{project.year}</span>
          <span style={{ fontSize: "12px", color: "#bbb" }}>
            {project.private
              ? "🔒 Private"
              : project.live
              ? "Live ↗"
              : project.github
              ? "GitHub ↗"
              : null}
          </span>
          <span
            className="arrow-nudge"
            style={{ fontSize: "16px", color: "#c4bfb9", marginTop: "4px" }}
          >
            ↗
          </span>
        </div>
      </Link>
    );
  }

  return (
    <section ref={sectionRef} id="work" style={{ marginTop: "80px" }}>
      {/* Filter tabs */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "28px",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "#a8a39b",
          }}
        >
          Work
        </span>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                fontSize: "11px",
                padding: "4px 12px",
                borderRadius: "9999px",
                border: activeTag === tag ? "none" : "1px solid #e8e6e1",
                background: activeTag === tag ? "#1a1a1a" : "transparent",
                color: activeTag === tag ? "#fff" : "#999",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: `background 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)`,
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Experience group */}
      {internships.length > 0 && (
        <div style={{ marginBottom: personal.length > 0 ? "40px" : 0 }}>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#a8a39b",
              marginBottom: "4px",
            }}
          >
            Experience
          </p>
          {internships.map((p, i) =>
            renderRow(p, i, 0, i === internships.length - 1)
          )}
        </div>
      )}

      {/* Projects group */}
      {personal.length > 0 && (
        <div>
          <p
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#a8a39b",
              marginBottom: "4px",
            }}
          >
            Projects
          </p>
          {personal.map((p, i) =>
            renderRow(p, i, internships.length, i === personal.length - 1)
          )}
        </div>
      )}
    </section>
  );
}
