import React from 'react';
import { CloudSun, Sun, CloudRain, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Skeleton } from './ui/Skeleton';

interface WeatherCardProps {
  isLoading?: boolean;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-6 w-24" />
          </div>
          <Skeleton className="h-10 w-10 rounded-xl" />
        </CardHeader>
        <CardContent className="space-y-8 pt-4">
          <Skeleton className="h-16 w-32 rounded-2xl" />
          <div className="grid grid-cols-3 gap-3">
            <Skeleton className="h-20 rounded-2xl" />
            <Skeleton className="h-20 rounded-2xl" />
            <Skeleton className="h-20 rounded-2xl" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full group cursor-pointer border-neutral-100 shadow-sm hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <Badge variant="outline" className="text-neutral-400 border-neutral-100 font-medium">Weather</Badge>
          <CardTitle className="text-xl mt-2">Mostly Clear</CardTitle>
        </div>
        <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
          <CloudSun size={20} />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col h-full pt-4">
        <div className="flex items-end gap-2 mb-8 group-hover:scale-105 transition-transform origin-left duration-500">
          <span className="text-6xl font-medium text-neutral-900 leading-none tracking-tighter">24°</span>
          <span className="text-xl text-neutral-400 font-medium mb-1">C</span>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-auto">
          <div className="bg-neutral-50 p-3 rounded-2xl flex flex-col items-center gap-1.5 transition-colors hover:bg-neutral-100">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">18:00</span>
            <Sun size={18} className="text-amber-500" />
            <span className="text-sm font-bold text-neutral-900">22°</span>
          </div>
          <div className="bg-white p-3 rounded-2xl flex flex-col items-center gap-1.5 border border-neutral-200 shadow-sm scale-110 z-10">
            <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Now</span>
            <CloudSun size={18} className="text-neutral-500" />
            <span className="text-sm font-bold text-neutral-900">19°</span>
          </div>
          <div className="bg-neutral-50 p-3 rounded-2xl flex flex-col items-center gap-1.5 transition-colors hover:bg-neutral-100">
            <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">22:00</span>
            <CloudSun size={18} className="text-neutral-500" />
            <span className="text-sm font-bold text-neutral-900">17°</span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-xs font-medium text-neutral-500">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 rounded-full">
            <Wind size={14} className="text-neutral-400" />
            <span>12 km/h</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-50 rounded-full">
            <CloudRain size={14} className="text-neutral-400" />
            <span>2%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
