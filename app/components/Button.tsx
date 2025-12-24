import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "red"
  | "mint";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-neo-black text-neo-white hover:bg-gray-800 dark:bg-neo-white dark:text-[#1a1a1a] dark:hover:bg-gray-200",
  secondary:
    "bg-neo-white text-neo-black dark:bg-[#2a2a2a] dark:text-[#fffef9]",
  yellow: "bg-neo-yellow text-[#1a1a1a]",
  pink: "bg-neo-pink text-[#1a1a1a]",
  blue: "bg-neo-blue text-[#1a1a1a]",
  green: "bg-neo-green text-[#1a1a1a]",
  orange: "bg-neo-orange text-[#1a1a1a]",
  purple: "bg-neo-purple text-[#1a1a1a]",
  red: "bg-neo-red text-[#fffef9]",
  mint: "bg-neo-mint text-[#1a1a1a]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        neo-btn
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
