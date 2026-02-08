import React from 'react';
import { Bell, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/Badge';
import { cn } from '../../utils/cn';

interface NavbarProps {
  city: string;
  location: string;
  currentTime: string;
  profileImage: string;
  activeView: 'dashboard' | 'explore' | 'settings';
  onViewChange: (view: 'dashboard' | 'explore' | 'settings') => void;
  onToggleNotifications: () => void;
  notificationCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  city, 
  location, 
  currentTime, 
  profileImage, 
  activeView, 
  onViewChange,
  onToggleNotifications,
  notificationCount
}) => {
  return (
    <nav className="w-full h-24 px-12 flex items-center justify-between bg-white/70 backdrop-blur-2xl border-b border-neutral-100 sticky top-0 z-[100] transition-all">
      <div className="flex items-center gap-16">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onViewChange('dashboard')}>
          <div className="w-12 h-12 bg-neutral-900 rounded-[18px] flex items-center justify-center text-white shadow-xl shadow-neutral-200 transition-transform group-hover:scale-105 active:scale-95 duration-300">
            <div className="w-6 h-6 border-[3px] border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-neutral-900 tracking-tight leading-none uppercase">{city}</h1>
              <Badge variant="secondary" className="px-1.5 py-0 rounded-md text-[8px] bg-neutral-100 text-neutral-400">Beta</Badge>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 mt-1 uppercase tracking-widest">
              <MapPin size={12} strokeWidth={3} />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'explore', label: 'Explore' },
            { id: 'settings', label: 'Settings' }
          ].map((nav) => (
            <button 
              key={nav.id}
              onClick={() => onViewChange(nav.id as any)}
              className={cn(
                "text-sm font-bold uppercase tracking-[0.2em] transition-all relative py-2",
                activeView === nav.id 
                ? 'text-neutral-900' 
                : 'text-neutral-400 hover:text-neutral-600'
              )}
            >
              {nav.label}
              {activeView === nav.id && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-neutral-900 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="hidden xl:flex items-center gap-4 pl-8 border-l border-neutral-100">
          <div className="flex flex-col items-end">
            <span className="text-xs font-black text-neutral-900 uppercase tracking-[0.3em]">{currentTime}</span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Feb 08, 2026</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleNotifications}
            className="relative p-3.5 bg-neutral-50 border border-neutral-100 rounded-[22px] hover:bg-white hover:shadow-xl hover:shadow-neutral-100 transition-all active:scale-95 group"
          >
            <Bell size={22} className="text-neutral-500 group-hover:text-neutral-900 transition-colors" />
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 w-6 h-6 bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-[3px] border-white shadow-lg translate-x-1/4 -translate-y-1/4 animate-in zoom-in">
                {notificationCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => onViewChange('settings')}
            className="flex items-center gap-3 pl-2 pr-4 py-2 bg-neutral-50 hover:bg-white border border-neutral-100 rounded-[24px] hover:shadow-xl hover:shadow-neutral-100 transition-all active:scale-95 group"
          >
            <div className="w-10 h-10 rounded-[18px] overflow-hidden border-2 border-white shadow-md">
              <ImageWithFallback 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-widest">Marcus</span>
              <ChevronDown size={14} className="text-neutral-400 group-hover:text-neutral-900 transition-colors" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
