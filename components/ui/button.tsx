import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#009293] focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: 
          "bg-[#009293] text-white hover:bg-[#00787A] shadow-lg shadow-black/20",
        destructive:
          "bg-[#EF4444] text-white hover:bg-[#DC2626] shadow-lg shadow-black/20",
        outline:
          "border border-white/15 bg-transparent text-[#E6EDF2] hover:bg-[#009293]/10 hover:border-[#009293]/40 backdrop-blur-sm",
        secondary:
          "bg-[#112B3C]/60 text-[#E6EDF2] hover:bg-[#112B3C]/80 border border-white/15 backdrop-blur-sm",
        ghost:
          "hover:bg-[#009293]/10 hover:text-[#009293]",
        link: 
          "text-[#009293] underline-offset-4 hover:underline hover:text-[#F8A58E]",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
