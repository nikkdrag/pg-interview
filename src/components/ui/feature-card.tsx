
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function FeatureCard({ title, icon, children, className }: FeatureCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow",
      className
    )}>
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4 text-purple-DEFAULT">
          {icon}
        </div>
      )}
      <h3 className="font-roboto font-bold text-xl mb-2">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
