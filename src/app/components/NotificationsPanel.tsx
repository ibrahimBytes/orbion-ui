import React, { useState, useEffect } from 'react';
import { Bell, Clock, Info, Shield, CheckCircle2, X, MoreHorizontal, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EmptyState } from './EmptyState';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Skeleton } from './ui/Skeleton';
import { cn } from '../../utils/cn';

interface Notification {
  id: number;
  type: 'info' | 'alert' | 'success';
  message: string;
  timestamp: string;
  read?: boolean;
}

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: Notification[];
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({ isOpen, onClose, notifications: initialNotifications }) => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-900/10 backdrop-blur-md z-[110]"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-28 right-8 w-[440px] max-h-[calc(100vh-140px)] bg-white/90 backdrop-blur-2xl rounded-[48px] shadow-2xl shadow-neutral-200/50 border border-white z-[120] overflow-hidden flex flex-col"
          >
            <div className="p-10 pb-6 flex items-center justify-between border-b border-neutral-100/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-900 text-white rounded-2xl shadow-lg shadow-neutral-200">
                  <Bell size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Activity</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      {notifications.filter(n => !n.read).length} New Updates
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-2xl bg-neutral-50 h-10 w-10">
                  <Settings size={18} className="text-neutral-400" />
                </Button>
                <Button 
                  onClick={onClose}
                  variant="ghost" size="icon" className="rounded-2xl bg-neutral-50 hover:bg-red-50 hover:text-red-500 h-10 w-10 transition-colors"
                >
                  <X size={20} />
                </Button>
              </div>
            </div>

            <div className="overflow-y-auto p-6 space-y-4 flex-grow custom-scrollbar">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex gap-4 p-4">
                    <Skeleton className="h-10 w-10 rounded-xl flex-shrink-0" />
                    <div className="flex-grow space-y-2">
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="h-4 w-[60%] rounded-md" />
                    </div>
                  </div>
                ))
              ) : notifications.length > 0 ? (
                notifications.map((notif) => (
                  <motion.div 
                    layout
                    key={notif.id}
                    className={cn(
                      "p-5 rounded-[32px] border transition-all flex items-start gap-4 cursor-pointer group relative",
                      notif.read ? 'bg-white border-neutral-50' : 'bg-white border-blue-100 shadow-sm'
                    )}
                  >
                    {!notif.read && (
                      <div className="absolute top-6 left-2 w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    )}
                    <div className={cn(
                      "p-3 rounded-2xl flex-shrink-0 shadow-sm",
                      notif.type === 'alert' ? 'bg-red-50 text-red-500 border border-red-100' : 
                      notif.type === 'success' ? 'bg-green-50 text-green-500 border border-green-100' : 
                      'bg-blue-50 text-blue-500 border border-blue-100'
                    )}>
                      {notif.type === 'alert' ? <Shield size={20} /> : 
                       notif.type === 'success' ? <CheckCircle2 size={20} /> : 
                       <Info size={20} />}
                    </div>
                    <div className="flex-grow space-y-2">
                      <p className={cn(
                        "text-sm leading-relaxed",
                        notif.read ? 'text-neutral-500 font-medium' : 'text-neutral-900 font-bold'
                      )}>{notif.message}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                          <Clock size={12} strokeWidth={3} />
                          <span>{notif.timestamp}</span>
                        </div>
                        <Badge variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity lowercase h-5 px-2">Mark as read</Badge>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <EmptyState 
                  icon={Bell}
                  title="All caught up"
                  description="No new alerts from Orbion. We'll notify you when something important happens."
                />
              )}
            </div>
            
            <div className="p-8 pt-0 mt-auto">
              {notifications.length > 0 && (
                <Button 
                  onClick={markAllRead}
                  variant="outline"
                  className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition-all"
                >
                  Clear All Notifications
                </Button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
