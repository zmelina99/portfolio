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

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A1720]/80 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className={cn(
            "relative bg-[#112B3C]/95 backdrop-blur-md border border-white/15 rounded-2xl shadow-2xl shadow-black/40 max-w-4xl w-full max-h-[85vh] overflow-hidden pointer-events-auto animate-fade-in",
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#0F2330]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
            <h2 className="text-xl font-medium text-[#E6EDF2]">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#009293]/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009293]"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-[#009293]" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-6 py-6">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

