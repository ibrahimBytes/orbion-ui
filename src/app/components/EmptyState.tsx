import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center bg-neutral-50/50 rounded-[40px] border border-neutral-100 border-dashed transition-all hover:bg-neutral-50 hover:border-neutral-200 group">
      <div className="p-6 bg-white rounded-[24px] text-neutral-200 mb-6 shadow-sm border border-neutral-100 group-hover:scale-110 group-hover:text-blue-200 transition-all duration-500">
        <Icon size={40} strokeWidth={1} />
      </div>
      <h4 className="text-xl font-medium text-neutral-900 mb-2 tracking-tight">{title}</h4>
      <p className="text-sm text-neutral-400 max-w-[280px] leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
};
