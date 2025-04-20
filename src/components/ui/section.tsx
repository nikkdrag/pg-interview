
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  className?: string;
  children: ReactNode;
  id?: string;
  fullWidth?: boolean;
}

export function Section({ 
  className, 
  children, 
  id, 
  fullWidth = false 
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-12 md:py-16 lg:py-20",
        className
      )}
    >
      <div className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        fullWidth ? "w-full" : "max-w-7xl"
      )}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ 
  className, 
  children,
  subtitle
}: { 
  className?: string; 
  children: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className={cn("mb-10 md:mb-12 text-center", className)}>
      <h2 className="font-roboto font-bold text-3xl md:text-4xl mb-4">{children}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}
