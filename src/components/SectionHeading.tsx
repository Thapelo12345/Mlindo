
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}) => {
  return (
    <div className={cn(
      "mb-12", 
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
      <div 
        className={cn(
          "h-1 w-32 bg-purple-600 mt-4", 
          centered ? "mx-auto" : ""
        )}
      />
    </div>
  );
};

export default SectionHeading;
