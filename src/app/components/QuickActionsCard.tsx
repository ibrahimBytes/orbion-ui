import React from 'react';
import { CreditCard, PenTool, BookOpen, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const actions = [
  { label: 'Pay utilities', icon: <CreditCard size={18} />, color: 'bg-blue-50 text-blue-600', border: 'border-blue-100' },
  { label: 'Report issue', icon: <PenTool size={18} />, color: 'bg-orange-50 text-orange-600', border: 'border-orange-100' },
  { label: 'Book service', icon: <BookOpen size={18} />, color: 'bg-green-50 text-green-600', border: 'border-green-100' },
];

export const QuickActionsCard: React.FC = () => {
  return (
    <Card className="h-full group cursor-pointer border-neutral-100 shadow-sm hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <Badge variant="outline" className="text-neutral-400 border-neutral-100 font-medium">Services</Badge>
          <CardTitle className="text-xl mt-2">Quick Actions</CardTitle>
        </div>
        <div className="p-2.5 bg-neutral-50 text-neutral-500 rounded-xl">
          <ExternalLink size={20} />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col h-full pt-4">
        <div className="grid grid-cols-1 gap-3 flex-grow">
          {actions.map((action, idx) => (
            <button 
              key={idx} 
              className="flex items-center gap-5 p-5 rounded-3xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-xl hover:shadow-neutral-100/50 transition-all group/item text-left w-full"
            >
              <div className={`p-3.5 rounded-2xl ${action.color} border ${action.border} group-hover/item:scale-110 transition-transform duration-300 shadow-sm`}>
                {action.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-neutral-900 leading-none">{action.label}</span>
                <span className="text-xs text-neutral-400 mt-1.5 font-medium">Process in seconds</span>
              </div>
              <div className="ml-auto p-2 bg-neutral-100/50 rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">
                <ChevronRight size={14} className="text-neutral-500" />
              </div>
            </button>
          ))}
        </div>
        
        <Button variant="ghost" className="mt-8 w-full rounded-2xl h-14 font-bold text-neutral-400 hover:text-neutral-900 border border-dashed border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50">
          Customize shortcuts
        </Button>
      </CardContent>
    </Card>
  );
};
