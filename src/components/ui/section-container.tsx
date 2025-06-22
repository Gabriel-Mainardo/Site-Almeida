import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  withPattern?: boolean;
}

export function SectionContainer({
  id,
  className,
  children,
  fullWidth = false,
  withPattern = false,
}: SectionContainerProps) {
  return (
    <section 
      id={id}
      className={cn(
        "py-10 md:py-16 relative",
        className
      )}
    >
      {withPattern && (
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      )}
      
      <div className={cn(
        fullWidth ? "w-full" : "container mx-auto px-4 sm:px-6"
      )}>
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: ReactNode;
  center?: boolean;
  className?: string;
  subtitleClassName?: string;
}

export function SectionTitle({
  title,
  subtitle,
  center = true,
  className,
  subtitleClassName
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-8",
      center && "text-center",
      className
    )}>
      <h2 className="section-title opacity-100">{title}</h2>
      {subtitle && (
        <div className={cn(
          "section-subtitle opacity-100",
          subtitleClassName
        )}>
          {subtitle}
        </div>
      )}
    </div>
  );
} 