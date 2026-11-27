"use client";

import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/lang/LanguageProvider";

/** Detailed engineering write-ups, shown in the case study dialog. */

const code = "text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded";

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <Badge key={tag} variant="outline" className="text-[#334155] border-[#CBD5E1] hover:text-[#0F172A]">
          {tag}
        </Badge>
      ))}
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6 text-[#475569] px-4 py-4 reading-surface" style={{ lineHeight: "1.8" }}>
      {children}
    </div>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{children}</h3>;
}

export function HiveDetails() {
  const { t } = useLanguage();
  return (
    <Shell>
      <Tags tags={["React", "Ionic/Capacitor", "Nx", "Theming", "Feature flags", "i18n"]} />
      <section>
        <Heading>🧭 {t("caseStudies.modal.context")}</Heading>
        <p className="text-sm leading-relaxed max-w-3xl">{t("caseStudies.hive.detail.context")}</p>
      </section>
      <section>
        <Heading>⚙️ {t("caseStudies.hive.detail.builtTitle")}</Heading>
        <ul className="space-y-2 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
          <li>{t("caseStudies.hive.detail.built1")}</li>
          <li>{t("caseStudies.hive.detail.built2")}</li>
          <li>{t("caseStudies.hive.detail.built3")}</li>
          <li>{t("caseStudies.hive.detail.built4")}</li>
        </ul>
      </section>
      <section>
        <Heading>📈 {t("caseStudies.modal.impact")}</Heading>
        <ul className="space-y-2 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
          <li>{t("caseStudies.hive.detail.impact1")}</li>
          <li>{t("caseStudies.hive.detail.impact2")}</li>
          <li>{t("caseStudies.hive.detail.impact3")}</li>
        </ul>
      </section>
    </Shell>
  );
}

export function BilingueDetails() {
  const { t } = useLanguage();
  return (
    <Shell>
      <Tags tags={["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n (DE · FR · EN)", "Resend"]} />
      <section>
        <Heading>🧭 {t("caseStudies.bilingue.detail.briefTitle")}</Heading>
        <p className="text-sm leading-relaxed max-w-3xl">{t("caseStudies.bilingue.detail.brief")}</p>
      </section>
      <section>
        <Heading>⚙️ {t("caseStudies.bilingue.detail.builtTitle")}</Heading>
        <ul className="space-y-2 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
          <li>{t("caseStudies.bilingue.detail.built1")}</li>
          <li>{t("caseStudies.bilingue.detail.built2")}</li>
          <li>{t("caseStudies.bilingue.detail.built3")}</li>
          <li>{t("caseStudies.bilingue.detail.built4")}</li>
        </ul>
        <p className="mt-4 text-sm leading-relaxed max-w-3xl">{t("caseStudies.bilingue.detail.why")}</p>
      </section>
      <section>
        <Heading>📍 {t("caseStudies.bilingue.detail.statusTitle")}</Heading>
        <p className="text-sm leading-relaxed max-w-3xl">{t("caseStudies.bilingue.detail.status")}</p>
      </section>
    </Shell>
  );
}

export function ChartsDetails() {
  const { t } = useLanguage();
  const rows = [
    { label: "caseStudies.labels.problem", text: "caseStudies.charts.problem", icon: "🧭" },
    { label: "caseStudies.labels.actions", text: "caseStudies.charts.actions", icon: "⚙️" },
    { label: "caseStudies.labels.impact", text: "caseStudies.charts.impact", icon: "📈" },
  ];
  return (
    <Shell>
      <Tags tags={["React", "Performance", "Mobile", "UX", "Optimization"]} />
      <p className="text-sm leading-relaxed max-w-3xl">{t("caseStudies.charts.subtitle")}</p>
      {rows.map((row) => (
        <section key={row.label}>
          <Heading>
            {row.icon} {t(row.label)}
          </Heading>
          <p className="text-sm leading-relaxed max-w-3xl">{t(row.text)}</p>
        </section>
      ))}
    </Shell>
  );
}

export function NxDetails() {
  const { t } = useLanguage();
  return (
    <Shell>
      <Tags tags={["Nx", "TypeScript", "Architecture", "DX", "Monorepo", "Governance"]} />

      {/* At a glance (the summary that used to sit on the overview card) */}
      <dl className="grid gap-3 sm:grid-cols-3 text-sm">
        {(["problem", "actions", "impact"] as const).map((k) => (
          <div key={k} className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#00787A]">
              {t(`caseStudies.labels.${k}`)}
            </dt>
            <dd className="mt-1 leading-relaxed text-[#334155]">{t(`caseStudies.nx.${k}`)}</dd>
          </div>
        ))}
      </dl>

      {/* Context */}
      <section>
        <Heading>🧭 {t("caseStudies.modal.context")}</Heading>
        <p className="text-sm leading-relaxed max-w-3xl">{t("caseStudies.modal.contextText")}</p>
      </section>

      {/* Key Findings */}
      <section>
        <Heading>🔍 {t("caseStudies.modal.keyFindings")}</Heading>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[#009293] mb-2">Architecture & Structure</h4>
            <ul className="space-y-1.5 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
              <li>Atomic Design principles existed but weren&apos;t consistently applied</li>
              <li>Components were duplicated instead of reused through flexible props or composition</li>
              <li>Obsolete React Context providers coexisted with Redux, creating confusion</li>
              <li>Global variables were used inside React components, causing unpredictable behavior</li>
              <li>
                The factory component was misplaced under templates and lacked type safety, using string literals and{" "}
                <code className={code}>JSON.stringify()</code> for prop passing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#009293] mb-2">Code Quality & React Practices</h4>
            <ul className="space-y-1.5 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
              <li>
                Misuse of React hooks (<code className={code}>useEffect</code> without deps, unnecessary{" "}
                <code className={code}>useMemo</code>/<code className={code}>useCallback</code>)
              </li>
              <li>
                Overuse of <code className={code}>React.memo</code> with deep comparisons
              </li>
              <li>
                Unsafe prop spreading (<code className={code}>{"{...(props.data as any)}"}</code>) and missing TypeScript types
              </li>
              <li>
                Full reloads triggered via <code className={code}>window.location.href</code> instead of React Router navigation
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#009293] mb-2">Hygiene & Maintenance</h4>
            <ul className="space-y-1.5 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
              <li>Obsolete components and unused folders remained in the repo</li>
              <li>Poor file organization: pages inside organisms, inconsistent naming (forgot-password, ForgottenPassword)</li>
              <li>Residual legacy code (white-labeling features, modal duplicates)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#009293] mb-2">Collaboration Issues</h4>
            <ul className="space-y-1.5 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
              <li>No code review system or architectural oversight</li>
              <li>Team reworks occurred without alignment, causing merge conflicts and duplicated work</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Actions Recommended */}
      <section>
        <Heading>⚙️ {t("caseStudies.modal.actionsRecommended")}</Heading>
        <ul className="space-y-2 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
          <li>
            <strong>Refactor & Consolidate:</strong> Merge duplicate components and enforce Atomic Design consistency
          </li>
          <li>
            <strong>Improve Typing:</strong> Replace <code className={code}>any</code> types with clear interfaces; enable strict TS rules
          </li>
          <li>
            <strong>Clean Up Architecture:</strong> Move factory to a neutral utils folder; use a typed registry pattern with discriminated unions
          </li>
          <li>
            <strong>Split Core Logic:</strong> Break <code className={code}>App.tsx</code> into smaller hooks (auth, SSL setup, theming, etc.)
          </li>
          <li>
            <strong>Standardize Routing:</strong> Use <code className={code}>useNavigate()</code> for internal navigation; reserve{" "}
            <code className={code}>window.location</code> for external redirects
          </li>
          <li>
            <strong>Remove Dead Code:</strong> Delete obsolete modals, contexts, and duplicated page folders
          </li>
          <li>
            <strong>Introduce Governance:</strong> Add a PR checklist, define ownership for structural decisions, and require team syncs before large-scale refactors
          </li>
        </ul>
      </section>

      {/* Impact */}
      <section>
        <Heading>📈 {t("caseStudies.modal.impact")}</Heading>
        <ul className="space-y-2 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
          <li>Reduced component duplication by ≈40% through shared libraries</li>
          <li>Improved type safety and stability across web and mobile builds</li>
          <li>Established a clear component hierarchy (atoms → molecules → organisms → templates)</li>
          <li>Reduced merge conflicts and increased code review participation</li>
          <li>Provided a technical foundation for future scalability and performance improvements</li>
        </ul>
      </section>

      {/* Takeaway */}
      <section>
        <Heading>💬 {t("caseStudies.modal.takeaway")}</Heading>
        <p className="text-sm leading-relaxed max-w-3xl">{t("caseStudies.modal.takeawayText")}</p>
      </section>
    </Shell>
  );
}
