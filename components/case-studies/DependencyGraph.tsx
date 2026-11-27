"use client";

import { useLanguage } from "@/components/lang/LanguageProvider";

/**
 * Simplified, illustrative dependency graph: apps depend on feature libs,
 * features on a shared UI kit, which depends on data and utility libs.
 * Not the real project graph. Drawn top-to-bottom in a 4:3 frame so the
 * labels stay legible in a narrow column.
 */

const W = 400;
const H = 300;
const NODE_H = 38;

const NODES = [
  { id: "app", label: "apps/*", x: 140, y: 10, w: 120 },
  { id: "f1", label: "feature-a", x: 10, y: 90, w: 116 },
  { id: "f2", label: "feature-b", x: 142, y: 90, w: 116 },
  { id: "f3", label: "feature-c", x: 274, y: 90, w: 116 },
  { id: "ui", label: "ui-kit", x: 140, y: 170, w: 120 },
  { id: "data", label: "data-access", x: 52, y: 250, w: 136 },
  { id: "util", label: "utils", x: 212, y: 250, w: 136 },
] as const;

type Id = (typeof NODES)[number]["id"];
const EDGES: [Id, Id][] = [
  ["app", "f1"],
  ["app", "f2"],
  ["app", "f3"],
  ["f1", "ui"],
  ["f2", "ui"],
  ["f3", "ui"],
  ["ui", "data"],
  ["ui", "util"],
];

const byId = Object.fromEntries(NODES.map((n) => [n.id, n])) as Record<Id, (typeof NODES)[number]>;

function edgePath(a: Id, b: Id) {
  const from = byId[a];
  const to = byId[b];
  const x1 = from.x + from.w / 2;
  const y1 = from.y + NODE_H;
  const x2 = to.x + to.w / 2;
  const y2 = to.y - 5;
  const mid = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`;
}

export default function DependencyGraph() {
  const { t } = useLanguage();
  return (
    <figure className="uw-panel h-full">
      <figcaption className="uw-label px-5 pt-4">{t("caseStudies.nx.visualLabel")}</figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 block h-auto w-full" aria-hidden="true">
        <defs>
          <marker id="nx-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0E5D63" />
          </marker>
        </defs>
        {EDGES.map(([a, b]) => (
          <path
            key={`${a}-${b}`}
            d={edgePath(a, b)}
            fill="none"
            stroke="#0E5D63"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            markerEnd="url(#nx-arrow)"
          />
        ))}
        {NODES.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={NODE_H}
              rx="7"
              fill={n.id === "app" ? "#A7D8C9" : "#BFE3D4"}
              stroke="#0E5D63"
              strokeOpacity="0.55"
              strokeWidth="1.25"
            />
            <text
              x={n.x + n.w / 2}
              y={n.y + NODE_H / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="16"
              fill="#0A3A40"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <p className="px-5 pb-3 pt-2 text-xs text-[var(--uw-muted)]">{t("caseStudies.nx.visualHint")}</p>
    </figure>
  );
}
