
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
}

export function CTAButton({ 
  href, 
  children, 
  className,
  variant = "default",
  size = "lg" 
}: CTAButtonProps) {
  return (
    <Button 
      asChild
      variant={variant} 
      size={size}
      className={cn(
        "font-roboto font-bold bg-purple-DEFAULT hover:bg-purple-dark text-white",
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}
