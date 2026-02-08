import React from 'react';
import { Calendar, ChevronRight, Inbox } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { Skeleton } from './ui/Skeleton';
import { Button } from './ui/Button';

interface EventsCardProps {
  isLoading?: boolean;
}

const events: any[] = [
  // {
  //   title: "Urban Tech Summit",
  //   time: "Tomorrow, 10:00 AM",
  //   location: "Innovation Hub",
  //   category: "Tech"
  // },
];

export const EventsCard: React.FC<EventsCardProps> = ({ isLoading }) => {
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
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-12 w-full rounded-2xl mt-4" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full group cursor-pointer border-neutral-100 shadow-sm hover:shadow-lg transition-all">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <Badge variant="outline" className="text-neutral-400 border-neutral-100 font-medium">Events</Badge>
          <CardTitle className="text-xl mt-2">Happening Nearby</CardTitle>
        </div>
        <div className="p-2.5 bg-purple-50 text-purple-500 rounded-xl">
          <Calendar size={20} />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col h-full pt-4">
        <div className="space-y-3 flex-grow">
          {events.length > 0 ? (
            events.map((event, idx) => (
              <div key={idx} className="group/item flex items-center justify-between p-4 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-sm transition-all">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-neutral-900 group-hover/item:text-blue-600 transition-colors">{event.title}</span>
                  <span className="text-xs font-medium text-neutral-400 mt-1">{event.time} • {event.location}</span>
                </div>
                <ChevronRight size={16} className="text-neutral-300 group-hover/item:text-neutral-500 transition-colors" />
              </div>
            ))
          ) : (
            <div className="py-2">
              <EmptyState 
                icon={Inbox}
                title="No upcoming events"
                description="Check back later for community gatherings and summits."
              />
            </div>
          )}
        </div>

        <Button variant="ghost" className="mt-6 w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50/50 flex items-center justify-center gap-2 group/btn">
          Explore events
          <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};
