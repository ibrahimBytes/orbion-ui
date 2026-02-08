import React, { useState } from 'react';
import { User, Bell, Moon, Globe, LogOut, Shield, ChevronRight, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';
import { toast } from 'sonner';
import { cn } from '../../utils/cn';

export const SettingsScreen: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('Profile');

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success('Settings updated', {
        description: 'Your preferences have been successfully synchronized.'
      });
    }, 1500);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-10">
      <header className="mb-12">
        <h2 className="text-4xl font-medium tracking-tight text-neutral-900 mb-2">Settings</h2>
        <p className="text-neutral-500 text-lg font-light">Customize your Orbion experience and manage your data.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-3 space-y-2">
          {['Profile', 'Appearance', 'Notifications', 'Security', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={cn(
                "w-full text-left px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest transition-all",
                activeTab === item 
                ? 'bg-neutral-900 text-white shadow-xl shadow-neutral-200' 
                : 'text-neutral-400 hover:bg-white hover:text-neutral-900'
              )}
            >
              {item}
            </button>
          ))}
          <div className="pt-6 mt-6 border-t border-neutral-100">
            <Button variant="ghost" className="w-full justify-start px-6 py-6 h-auto text-red-500 hover:bg-red-50 hover:text-red-600 font-bold uppercase tracking-widest rounded-2xl">
              <LogOut size={18} className="mr-3" />
              Sign Out
            </Button>
          </div>
        </aside>

        {/* Settings Content */}
        <div className="lg:col-span-9 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Profile Section */}
              <Card className="p-10 border-neutral-100 shadow-xl shadow-neutral-100/50">
                <div className="flex items-center gap-8 mb-10">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-[32px] bg-neutral-100 flex items-center justify-center text-neutral-300 overflow-hidden ring-4 ring-white shadow-lg">
                      <User size={48} />
                      <button className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-widest">
                        Change
                      </button>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-neutral-900">Marcus Sterling</h3>
                    <p className="text-neutral-400 font-medium mt-1">marcus.s@orbion.city • Downtown District</p>
                    <Badge variant="secondary" className="mt-3">Verified Citizen</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] px-1">Full Name</label>
                    <input type="text" defaultValue="Marcus Sterling" className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-inner" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] px-1">Location</label>
                    <input type="text" defaultValue="Downtown District, Zone 1" className="w-full px-5 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-inner" />
                  </div>
                </div>
              </Card>

              {/* Preferences Section */}
              <Card className="p-10 border-neutral-100 shadow-xl shadow-neutral-100/50">
                <CardHeader className="px-0 pt-0 mb-6">
                  <CardTitle className="text-xl">Platform Preferences</CardTitle>
                </CardHeader>
                
                <div className="space-y-2">
                  {[
                    { 
                      icon: Moon, 
                      title: 'Dark Mode', 
                      desc: 'Reduce glare and save battery life.',
                      active: darkMode,
                      onToggle: () => setDarkMode(!darkMode)
                    },
                    { 
                      icon: Bell, 
                      title: 'Push Notifications', 
                      desc: 'Receive critical city alerts and updates.',
                      active: notificationsEnabled,
                      onToggle: () => setNotificationsEnabled(!notificationsEnabled),
                      color: 'bg-blue-600'
                    },
                    {
                      icon: Globe,
                      title: 'Language',
                      desc: 'English (United Kingdom)',
                      chevron: true
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 rounded-[32px] hover:bg-neutral-50 transition-colors group cursor-pointer">
                      <div className="flex items-center gap-5">
                        <div className="p-3.5 bg-neutral-50 group-hover:bg-white rounded-[20px] text-neutral-500 shadow-sm border border-transparent group-hover:border-neutral-100 transition-all">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="text-base font-bold text-neutral-900">{item.title}</p>
                          <p className="text-sm text-neutral-400 font-medium">{item.desc}</p>
                        </div>
                      </div>
                      {item.onToggle ? (
                        <button 
                          onClick={item.onToggle}
                          className={cn(
                            "w-14 h-8 rounded-full transition-all relative shadow-inner",
                            item.active ? (item.color || 'bg-neutral-900') : 'bg-neutral-200'
                          )}
                        >
                          <motion.div 
                            animate={{ x: item.active ? 28 : 4 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                          />
                        </button>
                      ) : item.chevron && (
                        <ChevronRight size={20} className="text-neutral-300 group-hover:text-neutral-500 transition-colors" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-neutral-100 flex justify-end">
                  <Button 
                    size="lg" 
                    className="rounded-2xl px-10 h-16 font-bold text-base min-w-[200px]" 
                    onClick={handleSave}
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : 'Save Changes'}
                  </Button>
                </div>
              </Card>

              {/* System Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Version', value: 'Orbion OS 2.4.0' },
                  { label: 'Efficiency', value: 'Optimal (98%)' },
                  { label: 'Security', value: 'Level 4 Encrypted' }
                ].map((stat, idx) => (
                  <Card key={idx} className="p-6 border-neutral-100 bg-white/50 backdrop-blur-sm">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-base font-bold text-neutral-900">{stat.value}</p>
                  </Card>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
