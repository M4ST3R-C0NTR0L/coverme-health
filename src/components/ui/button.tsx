"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#f97316] text-white hover:bg-[#ea580c] shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.98]",
        primary:
          "bg-[#0ea5e9] text-white hover:bg-[#0284c7] shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.98]",
        outline:
          "border-2 border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-white",
        ghost:
          "text-[#78716c] hover:text-[#1c1917] hover:bg-[#f5f0eb]",
      },
      size: {
        default: "h-12 px-6 py-3 min-w-[44px]",
        sm: "h-10 px-4 py-2 min-w-[44px]",
        lg: "h-14 px-8 py-4 text-base min-w-[44px]",
        icon: "h-12 w-12 min-w-[44px] min-h-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
