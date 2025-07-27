import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  iconClassName?: string;
  variant?: "glass" | "solid" | "outlined";
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  iconClassName,
  variant = "glass"
}: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center p-4 rounded-lg slide-in h-full min-h-[160px] justify-between w-full",
        variant === "glass" && "glass-card",
        variant === "solid" && "bg-navy-light border border-gold/20 shadow-md",
        variant === "outlined" && "border border-gold/30 bg-transparent",
        className
      )}
    >
      <div 
        className={cn(
          "w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-3",
          iconClassName
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col items-center flex-grow w-full">
        <h4 className="font-bold text-gold mb-2 text-base">{title}</h4>
        <p className="text-center text-cream/80 text-sm w-full">{description}</p>
      </div>
    </div>
  );
} 