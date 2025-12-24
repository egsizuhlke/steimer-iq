import { ReactNode } from "react";

type CardVariant =
  | "default"
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "orange"
  | "purple"
  | "mint";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variantStyles: Record<CardVariant, string> = {
  default: "bg-neo-white dark:bg-[#2a2a2a]",
  yellow: "bg-neo-yellow text-[#1a1a1a]",
  pink: "bg-neo-pink text-[#1a1a1a]",
  blue: "bg-neo-blue text-[#1a1a1a]",
  green: "bg-neo-green text-[#1a1a1a]",
  orange: "bg-neo-orange text-[#1a1a1a]",
  purple: "bg-neo-purple text-[#1a1a1a]",
  mint: "bg-neo-mint text-[#1a1a1a]",
};

const paddingStyles: Record<string, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`
        neo-border neo-shadow
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${hover ? "neo-interactive" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function CardTitle({
  children,
  className = "",
  as: Tag = "h3",
}: CardTitleProps) {
  return (
    <Tag
      className={`text-xl font-bold text-neo-black dark:text-inherit ${className}`}
    >
      {children}
    </Tag>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t-2 border-neo-black ${className}`}>
      {children}
    </div>
  );
}
