import React, { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Filter, ChevronRight, X, History, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Skeleton } from './ui/Skeleton';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { cn } from '../../utils/cn';

const categories = ['All', 'Transport', 'Events', 'Services', 'Utilities'];

const exploreItems = [
  {
    id: 1,
    title: 'Orbion Central Hub',
    description: 'The main transit and service center of the city.',
    category: 'Transport',
    info: '0.4 km away',
    time: '5 min walk',
    status: 'Operational'
  },
  {
    id: 2,
    title: 'Digital Art Expo',
    description: 'Showcasing local digital artists in the Plaza.',
    category: 'Events',
    info: 'Tomorrow, 10:00 AM',
    time: '1.2 km away',
    status: 'Upcoming'
  },
  {
    id: 3,
    title: 'Community Recycling',
    description: 'Sustainable waste management and education center.',
    category: 'Utilities',
    info: 'Open until 6 PM',
    time: '2.1 km away',
    status: 'Open'
  },
  {
    id: 4,
    title: 'Public Library West',
    description: 'Quiet study spaces and digital resource access.',
    category: 'Services',
    info: 'Open now',
    time: '0.8 km away',
    status: 'Open'
  }
];

const recentSearches = ['Metro Schedule', 'Recycling center', 'Art events'];
const popularCategories = [
  { name: 'Transport', icon: <TrendingUp size={14} /> },
  { name: 'Events', icon: <Sparkles size={14} /> }
];

interface ExploreScreenProps {
  onSelectService: (service: any) => void;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const mapImage = "https://images.unsplash.com/photo-1673158195534-3737053d143a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGVhbiUyMGNpdHklMjBtYXAlMjBhYnN0cmFjdHxlbn8MXx8fHwxNzcwNDUwMjM3fDA&ixlib=rb-4.1.0&q=80&w=1080";

  const filteredItems = exploreItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-8 py-10">
      <header className="mb-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-medium tracking-tight text-neutral-900">Explore Orbion</h2>
            <p className="text-neutral-500 mt-2 text-lg font-light">Discover services and navigate your city with ease.</p>
          </div>
          <div className="flex items-center gap-3">
            {popularCategories.map(cat => (
              <Badge key={cat.name} variant="secondary" className="px-3 py-1 bg-white border-neutral-100 shadow-sm flex items-center gap-2 cursor-pointer hover:bg-neutral-50 transition-colors">
                {cat.icon}
                {cat.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="relative group max-w-3xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-blue-600 transition-colors" size={20} />
            <Input 
              placeholder="Search for services, events, or locations..."
              className="pl-14 h-16 rounded-3xl text-lg shadow-xl shadow-neutral-100 border-neutral-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <AnimatePresence>
              {showSuggestions && !searchQuery && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-3xl border border-neutral-100 shadow-2xl z-50 p-6 overflow-hidden"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 px-2">
                      <History size={14} />
                      Recent Searches
                    </div>
                    <div className="space-y-1">
                      {recentSearches.map(term => (
                        <button 
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-neutral-50 text-neutral-600 text-sm font-medium transition-colors flex items-center justify-between group"
                        >
                          {term}
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 px-2">
                      <TrendingUp size={14} />
                      Suggested for you
                    </div>
                    <div className="flex flex-wrap gap-2 px-2">
                      {['Libraries', 'Public Parks', 'Art Galleries', 'EV Stations'].map(tag => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-neutral-100 transition-colors px-4 py-2 rounded-xl lowercase">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-neutral-200">
              <Filter size={14} />
              Filter
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap border",
                  activeCategory === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100' 
                  : 'bg-white text-neutral-500 hover:bg-neutral-50 border-neutral-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flex gap-12 items-start">
        <div className="flex-grow space-y-6">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              Array(4).fill(0).map((_, i) => (
                <Card key={i} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-5 w-16 rounded-full" />
                        <Skeleton className="h-6 w-48" />
                      </div>
                      <Skeleton className="h-4 w-[80%]" />
                      <div className="flex gap-4">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                    <Skeleton className="h-12 w-12 rounded-full" />
                  </div>
                </Card>
              ))
            ) : filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => onSelectService(item)}
                  className="group relative"
                >
                  <Card className="p-8 border-neutral-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-50/50 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="space-y-3 flex-grow pr-12">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-neutral-50 text-neutral-500 border-neutral-100">
                            {item.category}
                          </Badge>
                          <Badge variant="success" className="lowercase font-bold">
                            {item.status}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-neutral-500 text-base leading-relaxed max-w-xl">{item.description}</p>
                        <div className="flex items-center gap-6 pt-2">
                          <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                            <div className="p-1.5 bg-neutral-50 rounded-lg">
                              <MapPin size={14} className="text-neutral-500" />
                            </div>
                            <span>{item.info}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium text-neutral-400">
                            <div className="p-1.5 bg-neutral-50 rounded-lg">
                              <Clock size={14} className="text-neutral-500" />
                            </div>
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost" className="h-14 w-14 rounded-full bg-neutral-50 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <ChevronRight size={24} />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 flex flex-col items-center text-center"
              >
                <div className="p-6 bg-neutral-50 rounded-full mb-6">
                  <Search size={48} className="text-neutral-300" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-2">No results found for "{searchQuery}"</h3>
                <p className="text-neutral-500 max-w-sm mb-8">We couldn't find anything matching your search. Try different keywords or browse by category.</p>
                <Button variant="outline" onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="rounded-2xl px-8">
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden lg:block w-[400px] sticky top-32">
          <Card className="p-3 rounded-[40px] border-neutral-100 shadow-xl shadow-neutral-100">
            <div className="relative h-[600px] rounded-[32px] overflow-hidden group">
              <ImageWithFallback 
                src={mapImage} 
                alt="City Map Preview" 
                className="w-full h-full object-cover grayscale brightness-[1.02] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/40 pointer-events-none"></div>
              
              {/* Animated Map Markers */}
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="absolute p-1 bg-white rounded-full shadow-2xl border-2 border-blue-500 z-10 hover:scale-125 transition-transform cursor-pointer"
                  style={{ 
                    top: `${20 + (idx * 15)}%`, 
                    left: `${30 + (idx * 20) % 50}%` 
                  }}
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                </motion.div>
              ))}
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Live Grid Coverage</p>
                </div>
                <p className="text-lg font-medium text-neutral-900">Orbion Central District</p>
                <p className="text-xs text-neutral-500 mt-1 font-medium">Showing {filteredItems.length} active service points in your current vicinity.</p>
                <Button variant="secondary" size="sm" className="w-full mt-4 rounded-xl text-xs font-bold uppercase tracking-wider h-10">
                  Full map view
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
