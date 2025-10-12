import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-1 text-xs font-normal w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-2 [&>svg]:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009293] focus-visible:ring-offset-2 transition-all duration-200 ease-out",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#009293] text-white hover:bg-[#00787A]",
        secondary:
          "border-white/15 bg-[#112B3C]/40 text-[#A7B3C2] backdrop-blur-sm hover:bg-[#009293]/10 hover:border-[#009293]/30 hover:text-[#E6EDF2]",
        destructive:
          "border-transparent bg-[#EF4444] text-white hover:bg-[#DC2626]",
        outline:
          "chip-outline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
