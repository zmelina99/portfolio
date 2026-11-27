import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const closeRef = React.useRef<HTMLButtonElement>(null)
  const titleId = React.useId()
  const onCloseRef = React.useRef(onClose)
  onCloseRef.current = onClose

  React.useEffect(() => {
    if (!isOpen) {
      setIsVisible(false)
      return
    }

    // Remember what opened the dialog so focus can go back there on close
    const opener = document.activeElement as HTMLElement | null

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current()
        return
      }
      // Keep Tab inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (items.length === 0) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 10)
    closeRef.current?.focus()

    return () => {
      clearTimeout(timer)
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
      opener?.focus?.()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A1720]/90 backdrop-blur-md z-50 transition-opacity duration-300"
        style={{ opacity: isVisible ? 1 : 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={cn(
            "relative bg-white border border-[#E2E8F0] rounded-2xl shadow-2xl shadow-black/20 max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto transition-all duration-300",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between z-10">
            <h2 id={titleId} className="text-xl font-medium text-[#1E293B]">{title}</h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#E5E7EB] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009293]"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-[#475569]" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-6 py-6 bg-[#F9FAFB]">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
