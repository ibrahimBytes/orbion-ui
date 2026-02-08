import React from 'react';
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Skeleton } from './ui/Skeleton';

interface AlertsCardProps {
  isLoading?: boolean;
}

const alerts: any[] = [
  {
    type: 'critical',
    title: 'Water Maintenance',
    desc: 'Expected interruption in District 4 from 2 PM to 4 PM.',
    icon: <AlertCircle size={18} />
  },
];

export const AlertsCard: React.FC<AlertsCardProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="h-10 w-10 rounded-xl" />
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <Skeleton className="h-28 w-full rounded-2xl" />
          <Skeleton className="h-28 w-full rounded-2xl" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full group cursor-pointer border-neutral-100 shadow-sm hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <Badge variant="outline" className="text-neutral-400 border-neutral-100 font-medium">Alerts</Badge>
          <CardTitle className="text-xl mt-2">City Updates</CardTitle>
        </div>
        <div className="p-2.5 bg-orange-50 text-orange-500 rounded-xl">
          <AlertTriangle size={20} />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col h-full pt-4">
        <div className="space-y-4 flex-grow">
          {alerts.length > 0 ? (
            alerts.map((alert, idx) => (
              <div key={idx} className={cn(
                "p-5 rounded-3xl border transition-all hover:shadow-sm",
                alert.type === 'critical' 
                  ? 'bg-red-50/30 border-red-100 hover:bg-red-50/50' 
                  : 'bg-blue-50/30 border-blue-100 hover:bg-blue-50/50'
              )}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={cn(
                    "p-1.5 rounded-lg",
                    alert.type === 'critical' ? 'bg-red-100 text-red-500' : 'bg-blue-100 text-blue-500'
                  )}>
                    {alert.icon}
                  </div>
                  <span className={cn(
                    "text-sm font-bold",
                    alert.type === 'critical' ? 'text-red-900' : 'text-blue-900'
                  )}>{alert.title}</span>
                  {alert.type === 'critical' && (
                    <Badge variant="destructive" className="ml-auto">Priority</Badge>
                  )}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed font-medium pl-1">{alert.desc}</p>
              </div>
            ))
          ) : (
            <div className="py-4">
              <EmptyState 
                icon={CheckCircle2}
                title="No active alerts"
                description="Orbion is currently stable. We'll post any system updates or maintenance notices here."
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Helper inside file since we need cn
import { cn } from '../../utils/cn';
