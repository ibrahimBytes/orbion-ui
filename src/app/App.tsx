import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TransportCard } from './components/TransportCard';
import { WeatherCard } from './components/WeatherCard';
import { EventsCard } from './components/EventsCard';
import { AlertsCard } from './components/AlertsCard';
import { QuickActionsCard } from './components/QuickActionsCard';
import { ExploreScreen } from './components/ExploreScreen';
import { ServiceDetail } from './components/ServiceDetail';
import { SettingsScreen } from './components/SettingsScreen';
import { NotificationsPanel } from './components/NotificationsPanel';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Toaster } from 'sonner';

type ViewType = 'dashboard' | 'explore' | 'detail' | 'settings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDashboardLoading, setIsDashboardLoading] = useState(true);

  const [notifications] = useState([
    { id: 1, type: 'info' as const, message: 'Maintenance scheduled for Downtown Zone A tomorrow at 2 AM.', timestamp: '2h ago' },
    { id: 2, type: 'alert' as const, message: 'High wind advisory for coastal districts. Please secure loose items.', timestamp: '5h ago' },
    { id: 3, type: 'success' as const, message: 'Your service request for "Sidewalk Repair" has been completed.', timestamp: '1d ago' },
  ]);

  useEffect(() => {
    // Simulate initial dashboard loading
    const timer = setTimeout(() => {
      setIsDashboardLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const profileImage = "https://ibrahim-ach.pages.dev/assets/profile-DenhGdE9.jpg";
  const cityImage = "https://t4.ftcdn.net/jpg/13/77/26/63/360_F_1377266312_jRydmbVRledy8RPzhOpRtPCNwIl46lEI.jpg";
    const handleSelectService = (service: any) => {
    setSelectedService(service);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden pb-20">
      <Toaster position="top-right" richColors toastOptions={{
        style: { borderRadius: '24px', padding: '16px 20px', border: '1px solid #F1F1F1', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' },
      }} />
      
      <Navbar 
        city="Orbion" 
        location="Downtown District" 
        currentTime="18:12" 
        profileImage={profileImage}
        activeView={currentView === 'detail' ? 'explore' : currentView}
        onViewChange={(view: ViewType) => {
          setCurrentView(view);
          if (view !== 'detail') setSelectedService(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onToggleNotifications={() => setIsNotificationsOpen(!isNotificationsOpen)}
        notificationCount={notifications.length}
      />

      <NotificationsPanel 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
        notifications={notifications}
      />

      <AnimatePresence mode="wait">
        {currentView === 'dashboard' ? (
          <motion.main 
            key="dashboard"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-[1440px] mx-auto px-8 py-10"
          >
            <header className="mb-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">System Live</span>
                </div>
                <h2 className="text-4xl font-medium tracking-tight text-neutral-900">Good evening, Ibrahim</h2>
                <p className="text-neutral-500 mt-2 text-xl font-light">The city is breathing normally today. Your commute is on schedule.</p>
              </motion.div>
            </header>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-[320px] rounded-[56px] overflow-hidden mb-12 group shadow-2xl shadow-neutral-200/50"
            >
              <ImageWithFallback 
                src={cityImage} 
                alt="Orbion City Skyline" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent flex flex-col justify-end p-16">
                <div className="space-y-2">
                  <h3 className="text-white text-5xl font-medium tracking-tight">Hyderabad Central</h3>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 bg-green-500/20 backdrop-blur-xl border border-green-400/30 text-green-300 text-xs font-bold uppercase tracking-widest rounded-full">Grid Efficiency: 98%</span>
                    <span className="text-white/70 text-sm font-medium">All systems stable across 12 zones</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <TransportCard isLoading={isDashboardLoading} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <WeatherCard isLoading={isDashboardLoading} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <EventsCard isLoading={isDashboardLoading} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="lg:col-span-2">
                <AlertsCard isLoading={isDashboardLoading} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <QuickActionsCard />
              </motion.div>
            </div>
          </motion.main>
        ) : currentView === 'explore' ? (
          <motion.main
            key="explore"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <ExploreScreen onSelectService={handleSelectService} />
          </motion.main>
        ) : currentView === 'settings' ? (
          <motion.main
            key="settings"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <SettingsScreen />
          </motion.main>
        ) : (
          <motion.main
            key="detail"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <ServiceDetail service={selectedService} onBack={() => setCurrentView('explore')} />
          </motion.main>
        )}
      </AnimatePresence>

      <footer className="max-w-[1440px] mx-auto px-8 mt-32 py-12 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between text-neutral-400 text-sm gap-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white text-[10px] font-bold uppercase tracking-tighter">OR</div>
            <p className="font-bold text-neutral-900 uppercase tracking-widest">Orbion</p>
          </div>
          <div className="flex items-center gap-8 font-medium">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Accessibility</a>
          </div>
        </div>
        <div className="flex items-center gap-4 px-5 py-2.5 bg-white rounded-full border border-neutral-100 shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="font-medium text-neutral-600">All systems operational</span>
          <span className="text-neutral-300">|</span>
          <span className="font-bold text-neutral-900">v2.4.0</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
