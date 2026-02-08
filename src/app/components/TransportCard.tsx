import React from 'react';
import { Bus, Train, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Skeleton } from './ui/Skeleton';

interface TransportCardProps {
  isLoading?: boolean;
}

export const TransportCard: React.FC<TransportCardProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="h-10 w-10 rounded-xl" />
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-10 w-0.5" />
              <Skeleton className="h-3 w-3 rounded-full" />
            </div>
            <div className="flex-grow space-y-4">
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            </div>
          </div>
          <Skeleton className="h-12 w-full rounded-2xl" />
          <Skeleton className="h-14 w-full rounded-[20px] mt-4" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full group cursor-pointer border-neutral-100 shadow-sm hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <Badge variant="outline" className="text-neutral-400 border-neutral-100 font-medium">Transport</Badge>
          <CardTitle className="text-xl mt-2">Next Commute</CardTitle>
        </div>
        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
          <Train size={20} />
        </div>
      </CardHeader>

      <CardContent className="space-y-6 flex flex-col h-full justify-between pt-4">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="relative flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              <div className="w-0.5 h-10 bg-neutral-100 my-1"></div>
              <div className="w-3 h-3 rounded-full border-2 border-neutral-200 bg-white"></div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-medium text-neutral-900 leading-none">Central Station</p>
                <p className="text-xs text-neutral-400 mt-1">Line M2 • Platform 4</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 leading-none">Orbion Heights</p>
                <p className="text-xs text-neutral-400 mt-1">Expected 18:24</p>
              </div>
            </div>
            <div className="ml-auto flex flex-col items-end">
              <span className="text-sm font-bold text-blue-600">4 min</span>
              <span className="text-xs text-neutral-400 mt-5">In 12 min</span>
            </div>
          </div>

          <div className="w-full bg-neutral-50 rounded-2xl p-4 flex items-center gap-3 border border-neutral-100/50">
            <Bus size={16} className="text-neutral-400" />
            <p className="text-sm text-neutral-600 font-medium">Bus 42 is also available in 7 min</p>
          </div>
        </div>

        <Button size="lg" className="w-full mt-4 font-semibold">
          View routes
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
