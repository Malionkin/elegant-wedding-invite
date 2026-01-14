import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  title,
  subtitle,
  dark = false,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-24 px-6 md:px-12",
        dark ? "bg-secondary" : "bg-background",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-16 animate-slide-up">
            {subtitle && (
              <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm block mb-4">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-serif text-balance">
                {title}
              </h2>
            )}
            <div className="w-24 h-px bg-primary/30 mx-auto mt-8" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
