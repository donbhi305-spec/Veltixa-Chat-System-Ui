import React, { useState, useMemo } from 'react';
import { 
  Lock, User, Users, MessageSquare, Cpu, Shield, Globe, Image, Phone, Radio, Bell, 
  Settings, Award, ShoppingCart, Sparkles, FileText, Calendar, Gamepad2, Code, Database, 
  HelpCircle, ChevronDown, ChevronRight, Search, Terminal, Tablet, Eye, RefreshCw, Cpu as CpuIcon
} from 'lucide-react';
import { SYSTEM_CATEGORIES } from '../data/activities';
import { Activity, Category } from '../types';
import { CyberBadge, CyberButton } from './CyberPanel';

// Importing high-fidelity screens
import { AuthScreens } from './screens/AuthScreens';
import { UserSocialScreens } from './screens/UserSocialScreens';
import { ChatAiScreens } from './screens/ChatAiScreens';
import { GroupsMediaScreens } from './screens/GroupsMediaScreens';
import { CallStreamScreens } from './screens/CallStreamScreens';
import { SettingsPremiumScreens } from './screens/SettingsPremiumScreens';
import { SystemsScreens } from './screens/SystemsScreens';

// Category to Icon Map
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  MAIN_ENTRY: <Terminal className="w-4 h-4 shrink-0 text-cyan-400" />,
  CORE_NAVIGATION: <Globe className="w-4 h-4 shrink-0 text-indigo-400" />,
  AUTHENTICATION: <Lock className="w-4 h-4 shrink-0" />,
  USER: <User className="w-4 h-4 shrink-0" />,
  SOCIAL: <Users className="w-4 h-4 shrink-0" />,
  CHAT: <MessageSquare className="w-4 h-4 shrink-0" />,
  AI: <Cpu className="w-4 h-4 shrink-0" />,
  GROUPS: <Shield className="w-4 h-4 shrink-0" />,
  COMMUNITIES: <Globe className="w-4 h-4 shrink-0" />,
  MEDIA: <Image className="w-4 h-4 shrink-0" />,
  CALLS: <Phone className="w-4 h-4 shrink-0" />,
  STREAMING: <Radio className="w-4 h-4 shrink-0" />,
  NOTIFICATIONS: <Bell className="w-4 h-4 shrink-0" />,
  SETTINGS: <Settings className="w-4 h-4 shrink-0" />,
  PREMIUM: <Award className="w-4 h-4 shrink-0" />,
  MARKETPLACE: <ShoppingCart className="w-4 h-4 shrink-0" />,
  CREATOR: <Sparkles className="w-4 h-4 shrink-0" />,
  KNOWLEDGE: <FileText className="w-4 h-4 shrink-0" />,
  PRODUCTIVITY: <Calendar className="w-4 h-4 shrink-0" />,
  GAMING: <Gamepad2 className="w-4 h-4 shrink-0" />,
  DEVELOPER: <Code className="w-4 h-4 shrink-0" />,
  ADMIN: <Database className="w-4 h-4 shrink-0" />,
  SUPPORT: <HelpCircle className="w-4 h-4 shrink-0" />,
  LEGAL: <FileText className="w-4 h-4 shrink-0" />,
};

export const AetherAppFrame: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeActivity, setActiveActivity] = useState<Activity>({
    id: 'MainActivity',
    name: 'MainActivity',
    category: 'MAIN_ENTRY',
    description: 'Central App Root & Navigation Controller with shortcut configurations.'
  });
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    MAIN_ENTRY: true,
    CORE_NAVIGATION: true,
    AUTHENTICATION: false,
    AI: false,
  });
  const [bezelScale, setBezelScale] = useState<'fit' | 'full' | 'android'>('android');
  const [systemUptime, setSystemUptime] = useState('02:14:45');

  // Multi-Screen dispatcher component
  const renderSimulatedActivity = (id: string, cat: string) => {
    switch (cat) {
      case 'MAIN_ENTRY':
      case 'AUTHENTICATION':
        return (
          <AuthScreens 
            activityId={id} 
            onNavigate={(actId) => {
              for (const c of SYSTEM_CATEGORIES) {
                const found = c.activities.find(a => a.id === actId);
                if (found) {
                  handleSelectActivity(found);
                  break;
                }
              }
            }} 
          />
        );
      case 'USER':
      case 'SOCIAL':
        return (
          <UserSocialScreens 
            activityId={id} 
            onNavigate={(actId) => {
              for (const c of SYSTEM_CATEGORIES) {
                const found = c.activities.find(a => a.id === actId);
                if (found) {
                  handleSelectActivity(found);
                  break;
                }
              }
            }}
          />
        );
      case 'CHAT':
      case 'AI':
        return (
          <ChatAiScreens 
            activityId={id} 
            onNavigate={(actId) => {
              for (const c of SYSTEM_CATEGORIES) {
                const found = c.activities.find(a => a.id === actId);
                if (found) {
                  handleSelectActivity(found);
                  break;
                }
              }
            }} 
          />
        );
      case 'GROUPS':
      case 'COMMUNITIES':
      case 'MEDIA':
        return (
          <GroupsMediaScreens 
            activityId={id} 
            onNavigate={(actId) => {
              for (const c of SYSTEM_CATEGORIES) {
                const found = c.activities.find(a => a.id === actId);
                if (found) {
                  handleSelectActivity(found);
                  break;
                }
              }
            }} 
          />
        );
      case 'CALLS':
      case 'STREAMING':
        return <CallStreamScreens activityId={id} />;
      case 'NOTIFICATIONS':
      case 'SETTINGS':
      case 'PREMIUM':
        return (
          <SettingsPremiumScreens 
            activityId={id} 
            onNavigate={(actId) => {
              for (const c of SYSTEM_CATEGORIES) {
                const found = c.activities.find(a => a.id === actId);
                if (found) {
                  handleSelectActivity(found);
                  break;
                }
              }
            }} 
          />
        );
      default:
        return (
          <SystemsScreens 
            activityId={id} 
            onNavigate={(actId) => {
              for (const c of SYSTEM_CATEGORIES) {
                const found = c.activities.find(a => a.id === actId);
                if (found) {
                  handleSelectActivity(found);
                  break;
                }
              }
            }} 
          />
        );
    }
  };

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSelectActivity = (act: Activity) => {
    setActiveActivity(act);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter activities based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return SYSTEM_CATEGORIES;
    const query = searchQuery.toLowerCase();
    return SYSTEM_CATEGORIES.map(cat => ({
      ...cat,
      activities: cat.activities.filter(act => 
        act.name.toLowerCase().includes(query) || 
        act.category.toLowerCase().includes(query) ||
        act.description.toLowerCase().includes(query)
      )
    })).filter(cat => cat.activities.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen frosted-glass-bg text-slate-800 flex flex-col relative overflow-x-hidden p-3 md:p-6 lg:p-8">
      {/* Soft Elegant Background Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-fuchsia-500/3 blur-[150px] pointer-events-none"></div>

      {/* Modern Minimal Glass Panel Speck Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Main Command Header */}
      <header className="relative z-10 border-b border-white/20 pb-5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[linear-gradient(135deg,#6366f1,#d946ef)] p-0.5 relative flex items-center justify-center shadow-md shadow-indigo-100/50">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-indigo-600" />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-display tracking-tight font-extrabold text-slate-900 flex items-center gap-2">
              AETHER OS // MULTI-ACTIVITY DASHBOARD
            </h1>
            <p className="text-xs text-slate-500 font-sans mt-0.5">Comprehensive retro-futuristic UI index simulating 155+ operational screens.</p>
          </div>
        </div>

        {/* Realtime diagnostic clocks */}
        <div className="flex gap-4 md:gap-6 font-sans text-[11px] text-slate-500">
          <div className="bg-white/45 border border-white/50 p-2 rounded-xl px-4 flex items-center gap-2 backdrop-blur-md shadow-xs">
            <span className="font-semibold text-slate-400">UPTIME:</span>
            <span className="text-indigo-600 font-bold">{systemUptime}</span>
          </div>
          <div className="bg-white/45 border border-white/50 p-2 rounded-xl px-4 flex items-center gap-2 backdrop-blur-md shadow-xs">
            <span className="font-semibold text-slate-400">COAST RANGE:</span>
            <span className="text-fuchsia-600 font-bold">STABLE</span>
          </div>
        </div>
      </header>

      {/* Double Sideboards Layout */}
      <main className="relative z-10 flex flex-col lg:flex-row gap-8 flex-grow">
        
        {/* LEFT ASPECT: Screen index sidebar directory */}
        <aside className="w-full lg:w-80 shrink-0 space-y-4">
          <div className="bg-white/45 border border-white/50 rounded-3xl p-4 backdrop-blur-xl space-y-4 relative overflow-hidden shadow-lg shadow-slate-200/40">
            <div className="flex justify-between items-center border-b border-white/25 pb-3">
              <span className="text-xs font-sans font-bold text-slate-500 uppercase tracking-widest">ACTIVITIES EXPLORER</span>
              <CyberBadge variant="cyan">{searchQuery ? 'SEARCHING' : 'ACTIVE'}</CyberBadge>
            </div>

            {/* Quick search input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
              <input
                type="text"
                placeholder="Search 150+ activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 placeholder-slate-400 rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all font-sans"
              />
            </div>

            {/* Directory Lists */}
            <div className="space-y-1.5 max-h-[35rem] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
              {filteredCategories.map((cat) => {
                const isExpanded = !!expandedCategories[cat.id] || !!searchQuery;
                const activeInThisCat = activeActivity.category === cat.id;

                return (
                  <div key={cat.id} className="space-y-1">
                    <button
                      onClick={() => toggleCategory(cat.id)}
                      className={`w-full text-left p-2.5 rounded-xl hover:bg-white/40 flex items-center justify-between text-xs font-sans transition-all cursor-pointer ${
                        activeInThisCat ? 'text-indigo-600 bg-white/50 border border-white/30 font-semibold' : 'text-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {CATEGORY_ICONS[cat.id] || <Code className="w-4 h-4 text-indigo-550" />}
                        <span className="font-bold tracking-tight">{cat.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-400 font-normal">({cat.activities.length})</span>
                        {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-slate-450" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-450" />}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="pl-4 border-l border-white/30 ml-4 space-y-1 py-1">
                        {cat.activities.map((act) => {
                          const isSelected = activeActivity.id === act.id;

                          return (
                            <button
                              key={act.id}
                              onClick={() => handleSelectActivity(act)}
                              className={`w-full text-left p-1.5 px-3 rounded-lg text-[11px] font-sans transition-all block truncate cursor-pointer ${
                                isSelected 
                                  ? 'bg-indigo-50 text-indigo-650 border-l-2 border-indigo-600 font-bold' 
                                  : 'text-slate-500 hover:text-slate-800 hover:bg-white/20'
                              }`}
                            >
                              ● {act.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* RIGHT CENTRAL ASPECT: Simulated Handheld Cockpit Device View */}
        <section className="flex-grow space-y-6">
          
          {/* Active Preview metadata Header */}
          <div className="bg-white/45 border border-white/50 p-5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 backdrop-blur-xl relative overflow-hidden shadow-lg shadow-slate-200/40">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CyberBadge variant="magenta">{activeActivity.category}</CyberBadge>
                <h2 className="text-base font-sans text-slate-900 tracking-tight uppercase font-extrabold">{activeActivity.name}</h2>
              </div>
              <p className="text-xs text-slate-500 font-sans max-w-2xl">{activeActivity.description}</p>
            </div>

            {/* Simulation controls */}
            <div className="flex gap-2 shrink-0">
              <CyberButton 
                variant={bezelScale === 'fit' ? 'cyan' : 'slate'} 
                className="py-1 px-3 text-[10px]"
                onClick={() => setBezelScale('fit')}
              >
                FIT DEVICE GRID
              </CyberButton>
              <CyberButton 
                variant={bezelScale === 'android' ? 'cyan' : 'slate'} 
                className="py-1 px-3 text-[10px]"
                onClick={() => setBezelScale('android')}
              >
                ANDROID APP VIEW
              </CyberButton>
              <CyberButton 
                variant={bezelScale === 'full' ? 'cyan' : 'slate'} 
                className="py-1 px-3 text-[10px]"
                onClick={() => setBezelScale('full')}
              >
                FULL SCREEN FRAME
              </CyberButton>
            </div>
          </div>

          {/* Handheld glass/android border bezel simulator */}
          <div className="flex justify-center w-full">
            <div className={`transition-all duration-300 ${
              bezelScale === 'fit' 
                ? 'w-full max-w-[32rem] h-[45rem] overflow-hidden flex flex-col bg-white/30 border-4 border-white/50 backdrop-blur-2xl rounded-[35px] p-5 relative shadow-xl shadow-slate-300/40' 
                : bezelScale === 'android'
                  ? 'w-full max-w-[360px] h-[740px] bg-[#0c0f17] border-[12px] border-[#1e2230] rounded-[48px] relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden ring-4 ring-neutral-900/40'
                  : 'w-full min-h-[35rem] bg-transparent'
            }`}>
              
              {/* If in mobile bezel, draw physical trim and notch highlights */}
              {bezelScale === 'fit' && (
                <>
                  {/* Speaker Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-32 bg-white/50 rounded-b-xl border-x border-b border-white/35 flex items-center justify-center pointer-events-none z-30">
                    <div className="h-1 w-12 bg-slate-300/60 rounded-full"></div>
                  </div>
                  {/* Left glowing light glass border trim */}
                  <div className="absolute top-8 bottom-8 left-0 w-[1.5px] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-full"></div>
                  {/* Right glowing light glass border trim */}
                  <div className="absolute top-8 bottom-8 right-0 w-[1.5px] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-full"></div>
                </>
              )}

              {/* If in Android device mode, draw high-fidelity material status bar */}
              {bezelScale === 'android' && (
                <div className="h-8 w-full bg-[#111422] flex justify-between items-center px-4 select-none text-[10px] font-mono text-slate-400 border-b border-[#181d30] font-medium z-30 pointer-events-none shrink-0">
                  {/* Left Side: Clock */}
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-slate-200">10:18</span>
                  </div>
                  {/* Center Hole Punch Camera */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-black rounded-full border border-slate-800 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#1a233a] rounded-full"></div>
                  </div>
                  {/* Right Side: Quick Specs & Status Icons */}
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-[9px] font-extrabold text-[#22d3ee] scale-90">5G</span>
                    <svg className="w-3 h-3 text-slate-400 fill-current" viewBox="0 0 24 24">
                      <path d="M2 22h20V2z" />
                    </svg>
                    <svg className="w-3 h-3 text-slate-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21l-12-18h24z" />
                    </svg>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] font-bold">100%</span>
                      <svg className="w-3 h-3 text-[#22d3ee] fill-current" viewBox="0 0 24 24">
                        <path d="M17 5H16V3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Main inner canvas staging */}
              <div className={`w-full relative z-10 flex-grow ${
                bezelScale === 'fit' 
                  ? 'pt-4 pb-2 px-1 overflow-y-auto h-full pr-1 scrollbar-thin scrollbar-thumb-indigo-100/60' 
                  : bezelScale === 'android'
                    ? 'overflow-y-auto h-full flex-grow p-4 bg-[#0a0c14] text-slate-200 scrollbar-thin scrollbar-thumb-slate-800/40'
                    : ''
              }`}>
                {renderSimulatedActivity(activeActivity.id, activeActivity.category)}
              </div>

              {/* If in Android mode, render native-styled System Navigation Bar */}
              {bezelScale === 'android' && (
                <div className="h-10 w-full bg-[#111422] flex justify-around items-center border-t border-[#181d30] z-30 pointer-events-none shrink-0">
                  {/* Back Triangle */}
                  <div className="flex justify-center items-center w-10 h-10">
                    <svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </div>
                  {/* Home Circle */}
                  <div className="flex justify-center items-center w-10 h-10">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-400" />
                  </div>
                  {/* Recents Rounded Square */}
                  <div className="flex justify-center items-center w-10 h-10">
                    <div className="w-3 h-3 border-2 border-slate-400 rounded-sm" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Cyberdeck command line footer */}
      <footer className="relative z-10 border-t border-white/20 mt-12 pt-5 text-center flex flex-col items-center justify-center gap-2">
        <span className="text-[10px] font-sans text-slate-500 flex items-center gap-1">
          <CpuIcon className="w-3.5 h-3.5 text-indigo-550 animate-spin" /> AETHER_DECENTRALIZED_COGNITIVE_NODE_LOADED_OK // 2026_LEGAL_CHARTER
        </span>
      </footer>
    </div>
  );
};
