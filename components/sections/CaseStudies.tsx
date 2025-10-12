"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Modal } from "@/components/ui/modal"
import { FileText, TrendingUp } from "lucide-react"
import SectionHeader from "@/components/SectionHeader"

export default function CaseStudies() {
  const [isNxModalOpen, setIsNxModalOpen] = useState(false)

  const caseStudies = [
    {
      id: "nx-audit",
      icon: FileText,
      title: "Nx Monorepo: Architecture & Codebase Audit",
      subtitle: "Led comprehensive analysis and modernization of enterprise-scale monorepo infrastructure.",
      bullets: [
        { label: "Problem", text: "Legacy structure with 200+ projects, inconsistent patterns, circular dependencies" },
        { label: "Actions", text: "Conducted full architectural audit, defined migration strategy, established governance" },
        { label: "Impact", text: "50% faster builds, improved DX, scalable foundation for 20+ developers" }
      ],
      tags: ["Nx", "TypeScript", "Architecture", "DX", "Monorepo", "Governance"],
      hasModal: true,
      onViewDetails: () => setIsNxModalOpen(true)
    },
    {
      id: "charts-haptics",
      icon: TrendingUp,
      title: "Charts & Haptics Stabilization",
      subtitle: "Resolved critical performance bottlenecks in real-time data visualization components.",
      bullets: [
        { label: "Problem", text: "Chart library causing crashes, memory leaks, and poor mobile UX" },
        { label: "Actions", text: "Profiled performance, optimized rendering, implemented haptic feedback system" },
        { label: "Impact", text: "Zero crashes, 60fps on mobile, improved user satisfaction scores" }
      ],
      tags: ["React", "Performance", "Mobile", "UX", "Optimization"],
      hasModal: false
    }
  ]

  return (
    <>
      <section id="case-studies" className="section-major relative overflow-hidden">
        {/* Bubbles */}
        <div className="bubbles opacity-20">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
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
            title="Leadership Case Studies"
            description="Deep dives into architectural decisions, technical leadership, and impact-driven solutions"
          />

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <Card
                key={study.id}
                className="p-6 flex flex-col hover:scale-[1.02] transition-transform duration-300"
              >
                {/* Icon & Title */}
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 bg-[#009293]/10 rounded-lg">
                      <study.icon className="h-5 w-5 text-[#009293]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#E6EDF2] mb-2">
                        {study.title}
                      </h3>
                      <p className="text-sm text-[#A7B3C2] leading-relaxed">
                        {study.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-5 flex-grow">
                  {study.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-2.5">
                      <span className="text-xs font-medium text-[#009293] mt-0.5 shrink-0 min-w-[60px]">
                        {bullet.label}
                      </span>
                      <span className="text-xs text-[#A7B3C2] leading-relaxed">
                        {bullet.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
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
                    className="w-full"
                  >
                    View Full Audit
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
        title="Nx Monorepo: Architecture & Codebase Audit"
      >
        {/* <div className="prose prose-slate max-w-none"> */}
          <div className="space-y-6 text-[#475569 px-4 py-4 reading-surface" style={{ lineHeight: '1.8' }}>
            {/* Context */}
            <section>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">🧭 Context</h3>
              <p className="text-sm leading-relaxed max-w-3xl">
                I conducted a full audit of a shared Nx monorepo containing multiple React web and mobile apps. 
                The goal was to identify architectural inconsistencies, reduce duplication, and define scalable 
                standards for reusability and type safety across teams.
              </p>
            </section>

            {/* Key Findings */}
            <section>
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">🔍 Key Findings</h3>
              
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
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">⚙️ Actions Recommended</h3>
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
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">📈 Impact</h3>
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
              <h3 className="text-xl font-semibold text-[#1E293B] mb-3">💬 Takeaway</h3>
              <p className="text-sm leading-relaxed max-w-3xl">
                This audit reinforced the value of architectural clarity and team alignment in multi-platform 
                environments. Good code structure isn't just about components — it's about communication, 
                consistency, and enabling every developer to work with confidence and speed.
              </p>
            </section>
          </div>
        {/* </div> */}
      </Modal>
    </>
  )
}
