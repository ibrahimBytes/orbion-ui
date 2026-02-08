import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-neutral-900 text-white shadow hover:bg-neutral-900/80",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80",
        destructive: "border-transparent bg-red-500 text-white shadow hover:bg-red-500/80",
        outline: "text-neutral-900 border-neutral-200",
        success: "border-transparent bg-green-500/10 text-green-600 border border-green-200",
        warning: "border-transparent bg-orange-500/10 text-orange-600 border border-orange-200",
        info: "border-transparent bg-blue-500/10 text-blue-600 border border-blue-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
