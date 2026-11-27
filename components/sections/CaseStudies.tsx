"use client"

import { useCallback, useState, type ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Modal } from "@/components/ui/modal"
import { useLanguage } from "@/components/lang/LanguageProvider"
import WhitelabelMockup from "@/components/case-studies/WhitelabelMockup"
import ResponsiveChart from "@/components/case-studies/ResponsiveChart"
import DependencyGraph from "@/components/case-studies/DependencyGraph"
import BilingueVisual from "@/components/case-studies/BilingueVisual"
import { BilingueDetails, ChartsDetails, HiveDetails, NxDetails } from "@/components/case-studies/CaseStudyDetails"

type StudyId = "hive" | "charts" | "nx" | "bilingue"

const DETAILS: Record<StudyId, { titleKey: string; Body: () => ReactNode }> = {
  hive: { titleKey: "caseStudies.hive.title", Body: HiveDetails },
  charts: { titleKey: "caseStudies.charts.title", Body: ChartsDetails },
  nx: { titleKey: "caseStudies.nx.title", Body: NxDetails },
  bilingue: { titleKey: "caseStudies.bilingue.title", Body: BilingueDetails },
}

// Order of the shared row below the featured Hivepower story.
const ROW: {
  id: Exclude<StudyId, "hive">
  Visual: () => ReactNode
  eyebrowKey: string
  titleKey: string
  summaryKey: string
  linkKey: string
}[] = [
  {
    id: "charts",
    Visual: ResponsiveChart,
    eyebrowKey: "caseStudies.charts.title",
    titleKey: "caseStudies.charts.headline",
    summaryKey: "caseStudies.charts.summary",
    linkKey: "caseStudies.readMore",
  },
  {
    id: "nx",
    Visual: DependencyGraph,
    eyebrowKey: "caseStudies.nx.title",
    titleKey: "caseStudies.nx.headline",
    summaryKey: "caseStudies.nx.summary",
    linkKey: "caseStudies.readFullAudit",
  },
  {
    id: "bilingue",
    Visual: BilingueVisual,
    eyebrowKey: "caseStudies.bilingue.kicker",
    titleKey: "caseStudies.bilingue.title",
    summaryKey: "caseStudies.bilingue.summary",
    linkKey: "caseStudies.readMore",
  },
]

function ReadMore({ label, context, onClick }: { label: string; context: string; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} aria-haspopup="dialog" className="uw-link text-base sm:text-lg">
      {label}
      <span className="sr-only">: {context}</span>
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </button>
  )
}

export default function CaseStudies() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState<StudyId | null>(null)
  const close = useCallback(() => setOpenId(null), [])
  const open = openId ? DETAILS[openId] : null

  return (
    <>
      <section
        id="case-studies"
        aria-labelledby="case-studies-title"
        className="relative py-20 sm:py-28"
      >
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <h2
              id="case-studies-title"
              className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-[var(--uw-ink)] sm:text-7xl lg:text-[5.5rem]"
            >
              {t("caseStudies.title")}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--uw-body)]">
              {t("caseStudies.description")}
            </p>
          </header>

          {/* Featured: Hivepower whitelabel platform */}
          <article
            id="cs-hive"
            aria-labelledby="cs-hive-title"
            className="scroll-mt-24 mt-14 grid gap-8 sm:mt-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-x-14 [grid-template-areas:'head'_'visual'_'body'] lg:[grid-template-areas:'head_visual'_'body_visual']"
          >
            <div className="[grid-area:head] self-end">
              <p className="uw-label">{t("caseStudies.hive.kicker")}</p>
              <h3
                id="cs-hive-title"
                className="mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-[-0.015em] text-[var(--uw-ink)] sm:text-5xl"
              >
                {t("caseStudies.hive.title")}
              </h3>
            </div>
            <div className="[grid-area:visual]">
              <WhitelabelMockup />
            </div>
            <div className="[grid-area:body] self-start">
              <p className="max-w-md text-lg leading-relaxed text-[var(--uw-body)]">
                {t("caseStudies.hive.summary")}
              </p>
              <dl className="mt-6 flex gap-10 border-t border-[var(--uw-line)] pt-5">
                <div>
                  <dt className="uw-label">{t("caseStudies.hive.stat1.label")}</dt>
                  <dd className="mt-1 font-serif text-3xl text-[var(--uw-ink)]">{t("caseStudies.hive.stat1.value")}</dd>
                </div>
                <div>
                  <dt className="uw-label">{t("caseStudies.hive.stat2.label")}</dt>
                  <dd className="mt-1 font-serif text-3xl text-[var(--uw-ink)]">{t("caseStudies.hive.stat2.value")}</dd>
                </div>
              </dl>
              <div className="mt-7">
                <ReadMore label={t("caseStudies.readMore")} context={t("caseStudies.hive.title")} onClick={() => setOpenId("hive")} />
              </div>
            </div>
          </article>

          <hr className="my-16 border-0 border-t border-[var(--uw-line)] sm:my-20" />

          {/* Three stories in one row: visual, eyebrow, title, summary, link.
              Each card spans five shared (subgrid) rows, so frames, titles and
              links line up across columns. 3 columns wide, 2 mid, 1 on phones. */}
          <div className="grid gap-x-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {ROW.map(({ id, Visual, eyebrowKey, titleKey, summaryKey, linkKey }) => (
              <article
                key={id}
                aria-labelledby={`cs-${id}-title`}
                className="row-span-5 grid grid-rows-subgrid pb-16 last:pb-0 lg:pb-0"
              >
                <Visual />
                <p className="uw-label mt-7">{t(eyebrowKey)}</p>
                <h3
                  id={`cs-${id}-title`}
                  className="mt-3 font-serif text-3xl font-normal leading-tight tracking-[-0.01em] text-[var(--uw-ink)] lg:text-[1.875rem]"
                >
                  {t(titleKey)}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-[var(--uw-body)]">{t(summaryKey)}</p>
                <div className="mt-6 self-end">
                  <ReadMore label={t(linkKey)} context={t(titleKey)} onClick={() => setOpenId(id)} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={open !== null} onClose={close} title={open ? t(open.titleKey) : ""}>
        {open && <open.Body />}
      </Modal>
    </>
  )
}
