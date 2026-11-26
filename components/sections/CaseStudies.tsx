"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { FileText, TrendingUp } from "lucide-react"
import SectionHeader from "@/components/SectionHeader"
import { useLanguage } from "@/components/lang/LanguageProvider"

export default function CaseStudies() {
  const { t } = useLanguage();
  const [isNxModalOpen, setIsNxModalOpen] = useState(false)

  const caseStudies = [
    {
      id: "nx-audit",
      icon: FileText,
      titleKey: "caseStudies.nx.title",
      subtitleKey: "caseStudies.nx.subtitle",
      bullets: [
        { labelKey: "caseStudies.labels.problem", textKey: "caseStudies.nx.problem" },
        { labelKey: "caseStudies.labels.actions", textKey: "caseStudies.nx.actions" },
        { labelKey: "caseStudies.labels.impact", textKey: "caseStudies.nx.impact" }
      ],
      tags: ["Nx", "TypeScript", "Architecture", "DX", "Monorepo", "Governance"],
      hasModal: true,
      onViewDetails: () => setIsNxModalOpen(true)
    },
    {
      id: "charts-haptics",
      icon: TrendingUp,
      titleKey: "caseStudies.charts.title",
      subtitleKey: "caseStudies.charts.subtitle",
      bullets: [
        { labelKey: "caseStudies.labels.problem", textKey: "caseStudies.charts.problem" },
        { labelKey: "caseStudies.labels.actions", textKey: "caseStudies.charts.actions" },
        { labelKey: "caseStudies.labels.impact", textKey: "caseStudies.charts.impact" }
      ],
      tags: ["React", "Performance", "Mobile", "UX", "Optimization"],
      hasModal: false
    }
  ]

  return (
    <>
      <section
        id="case-studies"
        className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 border-y border-[rgba(20,184,166,0.12)] bg-[linear-gradient(to_bottom,rgba(0,146,147,0.05),rgba(11,22,32,0.35))]"
      >
        {/* Bubbles */}
        <div className="bubbles opacity-15" aria-hidden="true">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>

        <div className="container-standard relative z-10">
          {/* Header */}
          <SectionHeader
            title={t("caseStudies.title")}
            description={t("caseStudies.description")}
            className="mb-10"
          />

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className="card-feature relative gap-0 py-0 p-5 sm:p-6 overflow-hidden"
              >
                {/* Accent strip */}
                <div
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#009293] via-[#4DCCCC] to-transparent"
                  aria-hidden="true"
                />

                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 bg-[#009293]/15 rounded-lg ring-1 ring-[#009293]/30 shrink-0">
                    <study.icon className="h-5 w-5 text-[#4DCCCC]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#4DCCCC]/80 tabular-nums mb-1" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl sm:text-[1.375rem] font-semibold leading-snug text-[#F1F5F9] mb-1.5">
                      {t(study.titleKey)}
                    </h3>
                    <p className="text-sm text-[#B6C2CF] leading-relaxed">
                      {t(study.subtitleKey)}
                    </p>
                  </div>
                </div>

                {/* Problem / Actions / Impact */}
                <dl className="mb-4 divide-y divide-[rgba(148,163,184,0.14)] rounded-xl border border-[rgba(148,163,184,0.16)] bg-[rgba(11,22,32,0.45)]">
                  {study.bullets.map((bullet, idx) => {
                    const isImpact = idx === study.bullets.length - 1
                    return (
                      <div
                        key={idx}
                        className={`grid grid-cols-[5.5rem_1fr] gap-3 px-3.5 py-2.5 ${
                          isImpact ? "bg-[rgba(0,146,147,0.12)] rounded-b-xl" : ""
                        }`}
                      >
                        <dt
                          className={`text-[11px] font-semibold uppercase tracking-wider leading-6 ${
                            isImpact ? "text-[#5EEAD4]" : "text-[#4DCCCC]"
                          }`}
                        >
                          {t(bullet.labelKey)}
                        </dt>
                        <dd
                          className={`text-sm leading-6 ${
                            isImpact ? "text-[#F1F5F9] font-medium" : "text-[#D5DEE7]"
                          }`}
                        >
                          {t(bullet.textKey)}
                        </dd>
                      </div>
                    )
                  })}
                </dl>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {study.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Button */}
                {study.hasModal && (
                  <Button
                    onClick={study.onViewDetails}
                    variant="outline"
                    size="sm"
                    className="w-full mt-4"
                  >
                    {t("caseStudies.viewFullAudit")}
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nx Audit Modal */}
      <Modal
        isOpen={isNxModalOpen}
        onClose={() => setIsNxModalOpen(false)}
        title={t("caseStudies.nx.title")}
      >
        {/* <div className="prose prose-slate max-w-none"> */}
          <div className="space-y-6 text-[#475569] px-4 py-4 reading-surface" style={{ lineHeight: '1.8' }}>
            {/* Context */}
            <section>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">🧭 {t("caseStudies.modal.context")}</h3>
              <p className="text-sm leading-relaxed max-w-3xl">
                {t("caseStudies.modal.contextText")}
              </p>
            </section>

            {/* Key Findings */}
            <section>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">🔍 {t("caseStudies.modal.keyFindings")}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-[#009293] mb-2">Architecture & Structure</h4>
                  <ul className="space-y-1.5 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
                    <li>Atomic Design principles existed but weren't consistently applied</li>
                    <li>Components were duplicated instead of reused through flexible props or composition</li>
                    <li>Obsolete React Context providers coexisted with Redux, creating confusion</li>
                    <li>Global variables were used inside React components, causing unpredictable behavior</li>
                    <li>The factory component was misplaced under templates and lacked type safety, using string literals and <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">JSON.stringify()</code> for prop passing</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-[#009293] mb-2">Code Quality & React Practices</h4>
                  <ul className="space-y-1.5 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
                    <li>Misuse of React hooks (<code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">useEffect</code> without deps, unnecessary <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">useMemo</code>/<code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">useCallback</code>)</li>
                    <li>Overuse of <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">React.memo</code> with deep comparisons</li>
                    <li>Unsafe prop spreading (<code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">{'{...(props.data as any)}'}</code>) and missing TypeScript types</li>
                    <li>Full reloads triggered via <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">window.location.href</code> instead of React Router navigation</li>
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
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">⚙️ {t("caseStudies.modal.actionsRecommended")}</h3>
              <ul className="space-y-2 text-sm list-disc pl-5 leading-relaxed max-w-3xl">
                <li><strong>Refactor & Consolidate:</strong> Merge duplicate components and enforce Atomic Design consistency</li>
                <li><strong>Improve Typing:</strong> Replace <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">any</code> types with clear interfaces; enable strict TS rules</li>
                <li><strong>Clean Up Architecture:</strong> Move factory to a neutral utils folder; use a typed registry pattern with discriminated unions</li>
                <li><strong>Split Core Logic:</strong> Break <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">App.tsx</code> into smaller hooks (auth, SSL setup, theming, etc.)</li>
                <li><strong>Standardize Routing:</strong> Use <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">useNavigate()</code> for internal navigation; reserve <code className="text-[#009293] bg-[#009293]/5 px-1 py-0.5 rounded">window.location</code> for external redirects</li>
                <li><strong>Remove Dead Code:</strong> Delete obsolete modals, contexts, and duplicated page folders</li>
                <li><strong>Introduce Governance:</strong> Add a PR checklist, define ownership for structural decisions, and require team syncs before large-scale refactors</li>
              </ul>
            </section>

            {/* Impact */}
            <section>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">📈 {t("caseStudies.modal.impact")}</h3>
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
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">💬 {t("caseStudies.modal.takeaway")}</h3>
              <p className="text-sm leading-relaxed max-w-3xl">
                {t("caseStudies.modal.takeawayText")}
              </p>
            </section>
          </div>
        {/* </div> */}
      </Modal>
    </>
  )
}
