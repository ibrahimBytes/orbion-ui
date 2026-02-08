import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Shield, Info, ExternalLink, Users, Wifi, Check, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Card, CardContent } from './ui/Card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from './ui/Dialog';
import { toast } from 'sonner';

interface ServiceDetailProps {
  service: {
    id: number;
    title: string;
    description: string;
    category: string;
    info: string;
    time: string;
  };
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const serviceImage = "https://images.unsplash.com/photo-1688550590684-63e9030d7fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwaW50ZXJpb3IlMjBtaW5pbWFsJTIwdHJhbnNpdCUyMGh1YnxlbnwxfHx8fDE3NzA0NTA0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080";

  const handleBooking = () => {
    setBookingStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setBookingStatus('success');
      toast.success('Request submitted successfully', {
        description: `Your request for ${service.title} has been received.`,
      });
    }, 2000);
  };

  const resetBooking = () => {
    setIsBookingModalOpen(false);
    setTimeout(() => setBookingStatus('idle'), 300);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-10">
      <motion.button 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-400 hover:text-neutral-900 transition-colors mb-12 group"
      >
        <div className="p-2 bg-white rounded-xl shadow-sm border border-neutral-100 group-hover:bg-neutral-50 transition-colors">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        </div>
        <span className="font-semibold text-sm uppercase tracking-widest">Back to Explore</span>
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 space-y-12">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Badge variant="info" className="px-4 py-1.5 rounded-xl">{service.category}</Badge>
              <Badge variant="success" className="px-4 py-1.5 rounded-xl flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Active
              </Badge>
            </div>
            <h1 className="text-6xl font-medium tracking-tight text-neutral-900 leading-[1.05]">
              {service.title}
            </h1>
            <div className="flex items-center gap-8 text-neutral-500 pt-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-neutral-50 rounded-xl text-neutral-400">
                  <MapPin size={18} />
                </div>
                <span className="font-medium">Downtown District, Zone 1</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-neutral-50 rounded-xl text-neutral-400">
                  <Clock size={18} />
                </div>
                <span className="font-medium">Open 24/7</span>
              </div>
            </div>
          </motion.header>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.2em]">Overview</h2>
            <p className="text-xl text-neutral-600 leading-relaxed font-light">
              {service.description} The Orbion Central Hub serves as the neural center for our city's transit network. Designed with a focus on seamless connectivity and accessibility, it bridges multi-modal transport lines with essential city services.
            </p>
          </motion.section>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <Card className="p-8 border-neutral-100 shadow-xl shadow-neutral-100/50">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-neutral-50 rounded-[24px] text-neutral-600">
                  <Users size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Live Occupancy</p>
                  <p className="text-2xl font-medium text-neutral-900">42% • Stable</p>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-neutral-100 shadow-xl shadow-neutral-100/50">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-neutral-50 rounded-[24px] text-neutral-600">
                  <Wifi size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Network</p>
                  <p className="text-2xl font-medium text-neutral-900">Orbion-Fi+</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="text-sm font-bold text-neutral-400 uppercase tracking-[0.2em]">Key Information</h2>
            <div className="space-y-4">
              {[
                { icon: Shield, title: 'Security & Safety', desc: '24/7 autonomous monitoring and emergency response teams are on-site.' },
                { icon: Info, title: 'Accessibility', desc: 'Full tactile paving, smart-assist elevators, and hearing loop systems installed.' }
              ].map((info, idx) => (
                <div key={idx} className="flex items-start gap-5 p-6 rounded-3xl hover:bg-white transition-all group">
                  <div className="p-2.5 bg-neutral-50 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <info.icon size={20} className="text-neutral-400 group-hover:text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">{info.title}</h4>
                    <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column: Actions & Image */}
        <div className="lg:col-span-5 space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[48px] overflow-hidden aspect-[4/3] shadow-2xl shadow-neutral-200"
          >
            <ImageWithFallback 
              src={serviceImage} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </motion.div>

          <Card className="p-10 border-neutral-100 shadow-2xl shadow-neutral-100 space-y-8">
            <div className="space-y-3">
              <h3 className="text-2xl font-medium text-neutral-900 tracking-tight">Need Assistance?</h3>
              <p className="text-neutral-500 leading-relaxed">Book a guide or request specific support for your visit. Our smart-assistants are ready to help.</p>
            </div>
            
            <div className="space-y-4 pt-2">
              <Button size="lg" className="w-full h-16 text-lg font-bold rounded-[24px]" onClick={() => setIsBookingModalOpen(true)}>
                Request Service
              </Button>
              
              <Button variant="outline" size="lg" className="w-full h-16 text-lg font-bold rounded-[24px] flex items-center justify-center gap-2">
                View Schedules
                <ExternalLink size={20} />
              </Button>
            </div>

            <div className="p-5 bg-blue-50/50 rounded-3xl border border-blue-100/50 flex gap-4 items-start">
              <Info size={20} className="text-blue-500 mt-0.5 shrink-0" />
              <p className="text-sm text-blue-800 font-medium leading-relaxed">
                Platform 3 will undergo routine calibration between 2:00 AM – 4:00 AM tonight. No disruptions expected.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Dialog open={isBookingModalOpen} onOpenChange={setIsBookingModalOpen}>
        <DialogContent className="sm:max-w-md p-10">
          <AnimatePresence mode="wait">
            {bookingStatus === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <DialogHeader className="text-left space-y-3">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-2">
                    <Sparkles size={32} />
                  </div>
                  <DialogTitle className="text-3xl">Confirm Request</DialogTitle>
                  <DialogDescription className="text-base">
                    You're about to request assistance for <span className="font-bold text-neutral-900">{service.title}</span>. A city guide will be assigned to you shortly.
                  </DialogDescription>
                </DialogHeader>
                <div className="bg-neutral-50 p-6 rounded-3xl space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400 font-medium">Service Type</span>
                    <span className="text-neutral-900 font-bold">{service.category} Assist</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-400 font-medium">Wait Time</span>
                    <span className="text-green-600 font-bold">~2 mins</span>
                  </div>
                </div>
                <DialogFooter className="sm:justify-between gap-3">
                  <DialogClose asChild>
                    <Button variant="ghost" className="rounded-2xl h-14 font-bold flex-grow">Cancel</Button>
                  </DialogClose>
                  <Button className="rounded-2xl h-14 font-bold flex-grow" onClick={handleBooking}>Confirm Booking</Button>
                </DialogFooter>
              </motion.div>
            )}

            {bookingStatus === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center space-y-6"
              >
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-neutral-100 rounded-full"></div>
                  <div className="w-20 h-20 border-4 border-blue-600 rounded-full border-t-transparent animate-spin absolute top-0"></div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-medium">Processing...</h3>
                  <p className="text-neutral-400">Syncing with Orbion Network</p>
                </div>
              </motion.div>
            )}

            {bookingStatus === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 space-y-8"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-100">
                    <Check size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-medium">Request Sent!</h3>
                    <p className="text-neutral-500 text-lg">Your guide is on the way. Meet them at the Zone 1 entry point.</p>
                  </div>
                </div>
                <div className="p-6 bg-neutral-50 rounded-[32px] border border-neutral-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Meeting Point</p>
                    <p className="text-base font-bold text-neutral-900">Orbion Central • Level 1</p>
                  </div>
                </div>
                <Button className="w-full h-16 rounded-[24px] text-lg font-bold" onClick={resetBooking}>Done</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </div>
  );
};

import { Sparkles } from 'lucide-react';
