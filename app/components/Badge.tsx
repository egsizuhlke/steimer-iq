import { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "red"
  | "mint";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neo-white text-neo-black dark:bg-[#2a2a2a] dark:text-[#fffef9]",
  yellow: "bg-neo-yellow text-[#1a1a1a]",
  pink: "bg-neo-pink text-[#1a1a1a]",
  blue: "bg-neo-blue text-[#1a1a1a]",
  green: "bg-neo-green text-[#1a1a1a]",
  orange: "bg-neo-orange text-[#1a1a1a]",
  purple: "bg-neo-purple text-[#1a1a1a]",
  red: "bg-neo-red text-[#fffef9]",
  mint: "bg-neo-mint text-[#1a1a1a]",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        neo-badge
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
