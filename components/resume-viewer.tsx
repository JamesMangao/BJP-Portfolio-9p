'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, FileText, Printer } from 'lucide-react'

export function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false)

  const handlePrint = () => {
    const printWindow = window.open('/Publico_Bienvinido_James_Resume.pdf', '_blank')
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print()
      }
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card sm:w-auto"
      >
        <FileText className="size-4" />
        View Resume
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-[#070b19] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/60 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-destructive/80" />
                  <span className="size-3 rounded-full bg-chart-5" />
                  <span className="size-3 rounded-full bg-brand-blue/80" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    resume.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                  >
                    <Printer className="size-3.5" />
                    Print
                  </button>
                  <a
                    href="/Publico_Bienvinido_James_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Download className="size-3.5" />
                    Download
                  </a>
                  <button
                    type="button"
                    aria-label="Close resume viewer"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg p-1 text-muted-foreground hover:bg-white/5 hover:text-white transition-all"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="relative aspect-[8.5/11] w-full overflow-hidden bg-slate-950">
                <iframe
                  src="/Publico_Bienvinido_James_Resume.pdf"
                  className="h-full w-full"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
