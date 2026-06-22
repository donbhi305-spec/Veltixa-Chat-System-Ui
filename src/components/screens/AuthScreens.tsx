import React, { useState, useEffect } from 'react';
import { 
  Eye, EyeOff, ShieldCheck, Mail, Lock, User, Check, Key, Code, HelpCircle, 
  Laptop, Landmark, Smartphone, Cpu, ShieldAlert, KeyRound, Fingerprint, 
  RefreshCw, Activity, Terminal, Send, Copy, CheckCircle2, ChevronRight, AlertTriangle,
  Search, Grid, Layers, Play, Network
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge } from '../CyberPanel';
import { SYSTEM_CATEGORIES } from '../../data/activities';

interface ScreenProps {
  activityId: string;
  onNavigate?: (activityId: string) => void;
}

export const AuthScreens: React.FC<ScreenProps> = ({ activityId, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState('Weak');
  const [twoFactorCode, setTwoFactorCode] = useState('');

  // Interactive UI states for unique screens
  const [recoverySent, setRecoverySent] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetDone, setResetDone] = useState(false);
  
  const [verifyEmailCode, setVerifyEmailCode] = useState(['', '', '', '', '', '']);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const [verifyPhoneCode, setVerifyPhoneCode] = useState(['', '', '', '', '', '']);
  const [phoneSent, setPhoneSent] = useState(false);
  const [phoneSuccess, setPhoneSuccess] = useState(false);

  const [totpCode, setTotpCode] = useState(['', '', '', '', '', '']);
  const [totpCountdown, setTotpCountdown] = useState(30);
  const [totpSuccess, setTotpSuccess] = useState(false);

  const [passkeyScanning, setPasskeyScanning] = useState(false);
  const [passkeyModal, setPasskeyModal] = useState(false);
  const [passkeyVerified, setPasskeyVerified] = useState(false);

  const [copiedCodes, setCopiedCodes] = useState(false);
  const [recoveryStatus, setRecoveryStatus] = useState<'idle' | 'submitting' | 'processed'>('idle');
  const [recoveryIdText, setRecoveryIdText] = useState('');

  const [authorizedDevices, setAuthorizedDevices] = useState([
    { id: 1, name: 'QUANTUM-DECK TERMINAL 9X', ip: '142.94.13.12 (Aether Node Primary)', type: 'Primary', status: 'VERIFIED' },
    { id: 2, name: 'MACINTOSH NEURAL CHIP v2', ip: '89.24.111.45 (Secondary Deck)', type: 'Laptop', status: 'PENDING' }
  ]);

  // States & memos for MainActivity (moved here to comply with rules of hooks)
  const [navQuery, setNavQuery] = useState('');
  const [filterCat, setFilterCat] = useState('ALL');
  const [simulatedPID, setSimulatedPID] = useState<number>(3112);
  
  const allActivities = React.useMemo(() => {
    let list: any[] = [];
    SYSTEM_CATEGORIES.forEach(cat => {
      cat.activities.forEach(act => {
        list.push({ ...act, categoryName: cat.name });
      });
    });
    return list;
  }, []);

  const filteredActivities = React.useMemo(() => {
    return allActivities.filter(act => {
      const matchesQuery = act.name.toLowerCase().includes(navQuery.toLowerCase()) || 
                           act.description.toLowerCase().includes(navQuery.toLowerCase());
      const matchesCategory = filterCat === 'ALL' || act.category === filterCat;
      return matchesQuery && matchesCategory;
    });
  }, [navQuery, filterCat, allActivities]);

  // Handle countdown simulator for authenticator timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTotpCountdown((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    if (val.length === 0) setStrength('Empty');
    else if (val.length < 5) setStrength('Weak');
    else if (val.length < 8) setStrength('Moderate');
    else setStrength('Strong');
  };

  switch (activityId) {
    case 'MainActivity': {
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-1 animate-fade-in pb-12 text-slate-800 select-none">
          <CyberPanel variant="cyan" title="AETHER OS // MAIN CONFIGURATION & NAV ROOT" badge="SYSTEM_0x77_ACTIVE">
            <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-xl md:text-2xl font-display font-black tracking-tight text-slate-900 uppercase">
                    MainActivity (App Root & Nav Deck)
                  </span>
                  <CyberBadge variant="cyan">NAV CONTROLLER</CyberBadge>
                </div>
                <p className="text-xs text-slate-500 font-sans max-w-xl leading-relaxed">
                  Welcome to the primary Aether OS executive deck & master root compiler. Search 155+ high-performance activities inside the directories below, filter subcategories, and simulate immediate deep-links.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/50 border border-slate-200/80 p-3 rounded-2xl shadow-2xs backdrop-blur-md">
                <div className="w-10 h-10 rounded-full border-4 border-dashed border-cyan-500/45 flex items-center justify-center animate-spin duration-3000">
                  <Network className="w-4 h-4 text-cyan-600 animate-pulse" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-slate-400 block uppercase font-extrabold text-xs">KERNEL BUS</span>
                  <span className="text-xs font-mono font-bold text-slate-700">PID_X77_{simulatedPID}</span>
                </div>
              </div>
            </div>
          </CyberPanel>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/60 p-4 border border-slate-200 rounded-2xl space-y-1.5 hover:shadow-sm transition-all">
              <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider block">Total Activities</span>
              <p className="text-2xl font-display font-black text-slate-800">{allActivities.length}</p>
            </div>
            <div className="bg-white/60 p-4 border border-slate-200 rounded-2xl space-y-1.5 hover:shadow-sm transition-all">
              <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider block">Sub-Directories</span>
              <p className="text-2xl font-display font-black text-slate-800">{SYSTEM_CATEGORIES.length}</p>
            </div>
            <div className="bg-white/60 p-4 border border-slate-200 rounded-2xl space-y-1.5 hover:shadow-sm transition-all">
              <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider block">Virtual SLA</span>
              <p className="text-2xl font-display font-black text-slate-800">99.98% OK</p>
            </div>
            <div className="bg-white/60 p-4 border border-slate-200 rounded-2xl space-y-1.5 hover:shadow-sm transition-all">
              <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider block">Ingress Ingress</span>
              <p className="text-2xl font-display font-black text-cyan-600">PORT 3000</p>
            </div>
          </div>

          {/* Search and Filter Controller panel */}
          <div className="bg-white/60 border border-slate-200 rounded-3xl p-4 md:p-6 space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-widest">AETHER_OS MASTER COMPILER INDEX</h4>
                <p className="text-[11px] text-slate-450 font-sans">Locate, manage, and deploy local systems.</p>
              </div>

              {/* Instant Filter Categories */}
              <div className="flex flex-wrap gap-2.5">
                {['ALL', 'MAIN_ENTRY', 'CORE_NAVIGATION', 'AUTHENTICATION', 'SETTINGS', 'AI', 'CHAT'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilterCat(c)}
                    className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                      filterCat === c 
                        ? 'bg-cyan-500/10 border-cyan-400 text-cyan-750 font-extrabold shadow-sm' 
                        : 'bg-slate-50/50 border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Search Box */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
              <input
                type="text"
                placeholder="Type to filter... (e.g. HistoryActivity, HomeActivity, PasskeyActivity...)"
                value={navQuery}
                onChange={(e) => setNavQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-300 rounded-2xl py-3.5 pl-11 pr-4 text-xs font-mono text-slate-850 placeholder:text-slate-400 font-sans transition-all"
              />
            </div>

            {/* Displaying Activities Grid list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[25rem] overflow-y-auto pr-1">
              {filteredActivities.length === 0 ? (
                <div className="col-span-full py-12 text-center text-slate-400 font-mono text-xs">
                  No registered activities match this criteria.
                </div>
              ) : (
                filteredActivities.map((act) => (
                  <div 
                    key={act.id} 
                    className="p-3.5 bg-white border border-slate-150 hover:border-cyan-450 hover:shadow-xs rounded-2xl flex flex-col justify-between space-y-3 transition-all duration-200 group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[8px] font-mono px-2 py-0.5 rounded border border-slate-150 bg-slate-50/50 text-slate-500 truncate max-w-[120px]">
                          {act.categoryName}
                        </span>
                        <CyberBadge variant={act.category === 'MAIN_ENTRY' ? 'cyan' : act.category === 'CORE_NAVIGATION' ? 'magenta' : 'slate'} className="text-[8px] py-0 px-1 hover:scale-105 shrink-0">
                          ONLINE
                        </CyberBadge>
                      </div>
                      <h5 className="text-xs font-mono font-bold text-slate-900 group-hover:text-cyan-600 transition-colors uppercase leading-tight mt-1">{act.name}</h5>
                      <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed font-sans">{act.description}</p>
                    </div>

                    <div className="flex justify-between items-center border-t border-slate-100/50 pt-2 flex-wrap gap-1">
                      <span className="text-[8px] text-slate-400 font-mono uppercase">DECK LINKABLE</span>
                      <button
                        onClick={() => {
                          setSimulatedPID(Math.floor(Math.random() * 9000) + 1000);
                          onNavigate?.(act.id);
                        }}
                        className="py-1 px-3 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-650 hover:text-white border border-cyan-500/20 hover:border-cyan-500 text-[9px] font-mono rounded-xl font-bold cursor-pointer transition-all flex items-center gap-1 shrink-0"
                      >
                        <Play className="w-2.5 h-2.5 shrink-0" /> BOOT
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    }

    case 'WelcomeActivity':
      return (
        <div className="space-y-6 max-w-4xl mx-auto p-1 animate-fade-in">
          {/* Welcome Portal Hero */}
          <CyberPanel variant="cyan" title="AETHER OS // CHANNELS PORTAL" badge="LIVE NODE">
            <div className="text-center py-6 px-4 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50/50 border border-indigo-100/30 flex items-center justify-center relative mx-auto shadow-md">
                <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-md"></div>
                <Cpu className="w-8 h-8 text-indigo-600 shrink-0 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight uppercase">
                  WELCOME TO AETHER OS
                </h2>
                <p className="text-xs text-slate-500 font-sans max-w-lg mx-auto leading-relaxed">
                  A high-fidelity retro-futuristic virtual neural environment. Authenticate or establish a connection identity to unlock 155+ high-performance operational systems.
                </p>
              </div>
            </div>
          </CyberPanel>

          {/* Core Entry Hub Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-white/40 bg-white/40 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-400/40 hover:bg-white/50 transition-all shadow-md group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                  <Key className="w-5 h-5 text-indigo-600" />
                </div>
                <h4 className="text-sm font-sans font-bold text-slate-800 uppercase tracking-wide">SECURE AUTHENTICATOR</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Verify your secure cryptographic credentials, hardware signatures, and neural keys to retrieve session state.
                </p>
              </div>
              <CyberButton variant="cyan" className="mt-5 w-full py-2.5" onClick={() => onNavigate?.('LoginActivity')}>
                SIGN IN TERMINAL →
              </CyberButton>
            </div>

            <div className="border border-white/40 bg-white/40 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between hover:border-fuchsia-400/40 hover:bg-white/50 transition-all shadow-md group">
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-fuchsia-600" />
                </div>
                <h4 className="text-sm font-sans font-bold text-slate-800 uppercase tracking-wide">IDENTITY REGISTRY</h4>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Establish a brand new decentralized contract handle with built-in metadata logs and cryptographic encryption.
                </p>
              </div>
              <CyberButton variant="magenta" className="mt-5 w-full py-2.5" onClick={() => onNavigate?.('RegisterActivity')}>
                CREATE SYSTEM ALIAS →
              </CyberButton>
            </div>
          </div>

          {/* Bottom quick statistics info section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/40 border border-white/45 p-4 rounded-3xl backdrop-blur-md text-center">
            <div className="space-y-0.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">NODE STATUS</span>
              <span className="text-xs text-indigo-600 font-bold">ONLINE (OK)</span>
            </div>
            <div className="space-y-0.5 border-l border-indigo-100/30">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">TLS PROTOCOL</span>
              <span className="text-xs text-indigo-600 font-bold">SECURE 1.3</span>
            </div>
            <div className="space-y-0.5 border-l border-indigo-100/30">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">ACTIVE SCREENS</span>
              <span className="text-xs text-indigo-600 font-bold font-mono">155+ CODES</span>
            </div>
            <div className="space-y-0.5 border-l border-indigo-100/30">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">COGNITIVE RATIO</span>
              <span className="text-xs text-indigo-600 font-bold">0.82 MS</span>
            </div>
          </div>
        </div>
      );

    case 'LoginActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="cyan" title="Sign In Server" badge="TLS 1.3">
            <div className="flex flex-col items-center justify-center text-center mt-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100/30 flex items-center justify-center relative mb-3 shadow-sm">
                <div className="w-7 h-7 border-2 border-indigo-500 rounded rotate-45 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-indigo-500 rounded-2xs"></div>
                </div>
              </div>
              <h2 className="text-base font-sans text-slate-900 tracking-tight uppercase font-extrabold">WELCOME BACK</h2>
              <p className="text-xs text-slate-500 font-sans">Initialize access to continue your session</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Input Terminal / Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-550/60" />
                  <input
                    type="email"
                    placeholder="Enter node email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-indigo-400 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1 column">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Encryption Hash / Password</label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-550/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter security key password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-11 focus:outline-none focus:border-indigo-400 transition-all font-sans"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-indigo-550/60 hover:text-indigo-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="sr-only"
                  />
                  <span className={`w-4 h-4 rounded border text-slate-900 flex items-center justify-center transition-all ${rememberMe ? 'bg-indigo-600 border-indigo-600' : 'bg-white/40 border-white/60'}`}>
                    {rememberMe && <Check className="w-3 h-3 text-white stroke-[3]" />}
                  </span>
                  <span className="text-[11px] text-slate-500 font-sans">Remember node signature</span>
                </label>
                <button onClick={() => onNavigate?.('ForgotPasswordActivity')} className="text-[11px] text-indigo-650 font-sans font-bold hover:underline cursor-pointer">Forgot passcode?</button>
              </div>

              <div className="pt-2">
                <CyberButton variant="cyan" glow fullWidth>
                  AUTHENTICATE NODE →
                </CyberButton>
              </div>

              <div className="relative flex py-1.5 items-center">
                <div className="flex-grow border-t border-white/20"></div>
                <span className="flex-shrink mx-3 text-[10px] font-sans font-bold text-slate-400 uppercase">OR CHOOSE</span>
                <div className="flex-grow border-t border-white/20"></div>
              </div>

              <div className="grid grid-cols-1 gap-2 text-center text-xs">
                <button onClick={() => onNavigate?.('RegisterActivity')} className="text-slate-500 hover:text-indigo-600 font-sans font-bold hover:underline transition-all">
                  Don't have an alias? Create identity contract instead
                </button>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    case 'RegisterActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="magenta" title="Identity Registry" badge="Decentralized">
            <div className="flex flex-col items-center justify-center text-center mt-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-fuchsia-50 border border-fuchsia-100 flex items-center justify-center relative mb-3 shadow-sm">
                <div className="w-6 h-6 rounded-full border-2 border-fuchsia-500 relative flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-fuchsia-500 rounded-full"></div>
                </div>
              </div>
              <h2 className="text-base font-sans text-slate-900 tracking-tight uppercase font-extrabold">CREATE IDENTITY</h2>
              <p className="text-xs text-slate-500 font-sans">Establish your secure neural contract handle</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Unique Alias / Username</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fuchsia-550/60" />
                  <input
                    type="text"
                    placeholder="Enter cyber login handle"
                    className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-fuchsia-400 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Communication Registry / Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fuchsia-550/60" />
                  <input
                    type="email"
                    placeholder="Enter network email address"
                    className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-fuchsia-400 transition-all font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Passcode Hash</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fuchsia-550/60" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Synthesize security password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-11 focus:outline-none focus:border-fuchsia-400 transition-all font-sans"
                  />
                </div>
                {password && (
                  <div className="space-y-1 mt-1">
                    <div className="flex justify-between text-[10px] font-sans font-medium">
                      <span className="text-slate-450">Hash Robustness:</span>
                      <span className={strength === 'Strong' ? 'text-emerald-600' : strength === 'Moderate' ? 'text-amber-600' : 'text-rose-600'}>{strength}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1 h-1">
                      <div className={`rounded-full h-full ${password ? 'bg-rose-500' : 'bg-slate-200'}`} />
                      <div className={`rounded-full h-full ${strength === 'Moderate' || strength === 'Strong' ? 'bg-amber-500' : 'bg-slate-200'}`} />
                      <div className={`rounded-full h-full ${strength === 'Strong' ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                      <div className={`rounded-full h-full ${strength === 'Strong' ? 'bg-indigo-505' : 'bg-slate-200'}`} />
                    </div>
                  </div>
                )}
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer mt-3">
                <input type="checkbox" className="sr-only" defaultChecked />
                <span className="w-4 h-4 rounded border bg-fuchsia-600 border-fuchsia-600 text-slate-900 flex items-center justify-center transition-all shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white stroke-[3]" />
                </span>
                <span className="text-[10px] text-slate-550 leading-tight font-sans">
                  I consent to the binding <span className="text-fuchsia-600 underline hover:text-fuchsia-700">License Agreement</span> & <span className="text-fuchsia-600 underline hover:text-fuchsia-700">Privacy Charter</span>.
                </span>
              </label>

              <div className="pt-2">
                <CyberButton variant="magenta" glow fullWidth>
                  ESTABLISH IDENTITY CONTRACT →
                </CyberButton>
              </div>

              <div className="relative flex py-1.5 items-center">
                <div className="flex-grow border-t border-white/20"></div>
                <span className="flex-shrink mx-3 text-[10px] font-sans font-bold text-slate-400 uppercase">OR CHOOSE</span>
                <div className="flex-grow border-t border-white/20"></div>
              </div>

              <div className="grid grid-cols-1 gap-2 text-center text-xs">
                <button onClick={() => onNavigate?.('LoginActivity')} className="text-slate-500 hover:text-fuchsia-600 font-sans font-bold hover:underline transition-all">
                  Already registered? Sign in with security keys
                </button>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    case 'SplashActivity':
      return (
        <CyberPanel variant="cyan" title="System Boot Mode" badge="BIOS v4.81" className="max-w-xl mx-auto py-8">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-24 h-24 border-2 border-cyan-500/20 rounded-full flex items-center justify-center relative animate-pulse">
              <div className="absolute inset-2 border border-cyan-400/40 border-dashed rounded-full animate-spin"></div>
              <Cpu className="w-10 h-10 text-cyan-400" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-mono text-white tracking-widest">BOOTING AETHER NODE...</h3>
              <p className="text-xs text-slate-500 font-sans">Handshake sequences routing through cloud networks</p>
            </div>

            <div className="w-full max-w-sm bg-slate-950/70 border border-slate-900 rounded-lg p-4 font-mono text-[10px] text-left text-slate-400 space-y-1">
              <p className="text-cyan-400">● LOAD CORE SERVICES: SUCCESS</p>
              <p className="text-cyan-400">● ESTABLISH ENCRYPTED HANDSHAKE: SUCESS</p>
              <p className="text-fuchsia-400">● DEPLOY NEURAL WEIGHT COGNITIVES: DEPLOYED (15.4T parameters)</p>
              <p className="text-amber-400">● CACHE MEMORY RECTIFIERS: OPTIMIZED</p>
              <p className="animate-pulse">● SECURING WORKSPACE CONTAINER STATUS: READY...</p>
            </div>

            <div className="w-full max-w-sm h-1 bg-slate-950 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" style={{ width: '82%' }}></div>
            </div>
          </div>
        </CyberPanel>
      );

    case 'OnboardingActivity':
      return (
        <CyberPanel variant="cyan" title="Node Deployment Protocol" badge="Tutorial" className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="border-b border-slate-900 pb-4 text-center">
              <CyberBadge variant="cyan">AETHER CORE INITIALIZATION</CyberBadge>
              <h2 className="text-xl font-mono text-white tracking-wider mt-2">DEPLOYING YOUR COGNITIVE NODE</h2>
              <p className="text-xs text-slate-400 font-sans max-w-md mx-auto mt-1">
                Establish high quality parameters to tailor your retro cybernetic social space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-900 bg-slate-950/50 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="text-xs font-mono text-white">1. NODE ALIAS</h4>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Setup custom designations so other elements can query you seamlessly.
                  </p>
                </div>
                <CyberButton variant="slate" className="mt-4 py-1">Set Profile</CyberButton>
              </div>

              <div className="border border-slate-900 bg-slate-950/50 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-fuchsia-400" />
                  </div>
                  <h4 className="text-xs font-mono text-white">2. ENCRYPT CODES</h4>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Enable hardware authentications, secure keys, and biometric tokens.
                  </p>
                </div>
                <CyberButton variant="slate" className="mt-4 py-1">Secure Logs</CyberButton>
              </div>

              <div className="border border-slate-900 bg-slate-950/50 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/30 transition-all">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="text-xs font-mono text-white">3. COGNITIVE RATIO</h4>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Adjust assistant core memory sizes and generative prompt preferences.
                  </p>
                </div>
                <CyberButton variant="slate" className="mt-4 py-1">Model Config</CyberButton>
              </div>
            </div>

            <div className="flex justify-between items-center bg-slate-950/80 p-4 border border-slate-900 rounded-xl">
              <span className="text-xs text-slate-500 font-mono">STEP 1 OF 3 COMPLETE</span>
              <CyberButton variant="cyan" glow>CONTINUE PROTOCOL →</CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    case 'ForgotPasswordActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="cyan" title="Credential Recovery Deck" badge="Recovery Core">
            {recoverySent ? (
              <div className="space-y-5 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">DECRYPTERS TRANSMITTED</h3>
                  <p className="text-xs text-slate-500 font-sans px-4">
                    A secure decryption bypass link and single-use validation certificate have been dispatched to:
                  </p>
                  <code className="block text-xs text-indigo-700 bg-indigo-50/50 p-2.5 rounded-xl font-mono border border-indigo-100 max-w-xs mx-auto mt-2 select-all font-bold">
                    {recoveryEmail || 'user@aether-node.network'}
                  </code>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Be sure to inspect your transmission queue (inbox & spam folders). Token will expire in 15 minutes.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <CyberButton variant="cyan" fullWidth onClick={() => onNavigate?.('ResetPasswordActivity')}>
                    PROCEED TO RESET PASSCODE →
                  </CyberButton>
                  <button onClick={() => setRecoverySent(false)} className="text-xs text-slate-500 hover:text-indigo-600 font-sans hover:underline transition-all font-medium py-1">
                    Try another email address
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center space-y-2">
                  <Key className="w-10 h-10 text-indigo-600 mx-auto" />
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">FORGOT ENCRYPTION PASSCODE</h3>
                  <p className="text-xs text-slate-500 font-sans px-2">
                    Submit the secure registry email linked to your node to generate a cryptographic decryption token.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Input Registered Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-550" />
                    <input
                      type="email"
                      placeholder="e.g. user@aether-node.network"
                      value={recoveryEmail}
                      onChange={(e) => setRecoveryEmail(e.target.value)}
                      className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-indigo-400 transition-all font-sans"
                    />
                  </div>
                </div>

                <CyberButton variant="cyan" glow fullWidth onClick={() => setRecoverySent(true)}>
                  TRANSMIT DECRYPTERS →
                </CyberButton>

                <div className="text-center">
                  <button onClick={() => onNavigate?.('LoginActivity')} className="text-xs text-slate-500 hover:text-indigo-600 font-sans font-bold hover:underline">
                    ← Back to Sign In Terminal
                  </button>
                </div>
              </div>
            )}
          </CyberPanel>
        </div>
      );

    case 'ResetPasswordActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="magenta" title="Bypass Token Matrix" badge="Reset Deck">
            {resetDone ? (
              <div className="space-y-5 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">PASSCODE SYNTHESIZED</h3>
                  <p className="text-xs text-slate-500 font-sans px-2">
                    New cryptographic security credentials successfully written to local cache. Previous passcodes permanently invalidated.
                  </p>
                </div>
                <div className="pt-2">
                  <CyberButton variant="magenta" fullWidth onClick={() => onNavigate?.('LoginActivity')}>
                    SIGN IN WITH NEW CREDENTIALS →
                  </CyberButton>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center space-y-1.5">
                  <KeyRound className="w-10 h-10 text-fuchsia-600 mx-auto" />
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">RESET NODE PASSCODE</h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Construct a robust master passcode to seal your communication matrices.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Bypass Recovery Token</label>
                    <div className="relative">
                      <Code className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fuchsia-500/60" />
                      <input
                        type="text"
                        placeholder="Enter the 6-digit recovery token"
                        value={resetToken}
                        onChange={(e) => setResetToken(e.target.value)}
                        className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-fuchsia-400 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">New Security Passcode</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-fuchsia-500/60" />
                      <input
                        type="password"
                        placeholder="Establish robust passcode"
                        value={newPassword}
                        onChange={(e) => {
                          setNewPassword(e.target.value);
                          // custom password strength calc
                          const len = e.target.value.length;
                          if (len === 0) setStrength('Empty');
                          else if (len < 5) setStrength('Weak');
                          else if (len < 9) setStrength('Moderate');
                          else setStrength('Strong');
                        }}
                        className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:border-fuchsia-400 transition-all font-sans"
                      />
                    </div>
                    {newPassword && (
                      <div className="space-y-1 mt-1">
                        <div className="flex justify-between text-[10px]">
                          <span className="text-slate-400">Robustness Rating:</span>
                          <span className={strength === 'Strong' ? 'text-emerald-600 font-bold' : strength === 'Moderate' ? 'text-amber-600 font-bold' : 'text-rose-600 font-bold'}>{strength}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 h-1">
                          <div className={`rounded-full h-full ${newPassword ? 'bg-rose-500' : 'bg-slate-200'}`} />
                          <div className={`rounded-full h-full ${strength === 'Moderate' || strength === 'Strong' ? 'bg-amber-500' : 'bg-slate-200'}`} />
                          <div className={`rounded-full h-full ${strength === 'Strong' ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <CyberButton 
                  variant="magenta" 
                  glow 
                  fullWidth 
                  disabled={!resetToken || !newPassword}
                  onClick={() => setResetDone(true)}
                >
                  SYNTHESIZE NEW KEYS →
                </CyberButton>

                <div className="text-center">
                  <button onClick={() => onNavigate?.('LoginActivity')} className="text-xs text-slate-500 hover:text-indigo-600 font-sans hover:underline">
                    Cancel and Return
                  </button>
                </div>
              </div>
            )}
          </CyberPanel>
        </div>
      );

    case 'VerifyEmailActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="cyan" title="E-Mail Activator" badge="Signature Verification">
            {emailSuccess ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto shadow-sm">
                  <ShieldCheck className="w-8 h-8 text-indigo-600 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">REGISTRY AUTHENTICATED</h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Your dynamic email handle has been linked permanently with Aether Core logs.
                  </p>
                </div>
                <div className="pt-2">
                  <CyberButton variant="cyan" fullWidth onClick={() => onNavigate?.('WelcomeActivity')}>
                    GO TO PORTAL HUB →
                  </CyberButton>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">EMAIL VALIDATION CODE</h3>
                  <p className="text-xs text-slate-500 font-sans px-2">
                    We sent a cryptographic passcode to your system alias mailbox. Enter the parameters below.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center gap-2">
                    {verifyEmailCode.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`email-otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const val = e.target.value;
                          const nextCode = [...verifyEmailCode];
                          nextCode[idx] = val;
                          setVerifyEmailCode(nextCode);
                          // Auto focus next box
                          if (val && idx < 5) {
                            document.getElementById(`email-otp-${idx + 1}`)?.focus();
                          }
                        }}
                        className="w-11 h-12 bg-white/40 text-center text-lg font-mono text-indigo-600 border border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-400 transition-all font-bold"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-sans">EXPIRY: 04:59 SEC</span>
                    <button 
                      onClick={() => {
                        setEmailSent(true);
                        setTimeout(() => setEmailSent(false), 2000);
                      }} 
                      className="text-indigo-650 hover:underline font-sans font-bold"
                    >
                      {emailSent ? 'DISPATCHED OK' : 'RESEND DISPATCH'}
                    </button>
                  </div>

                  <CyberButton 
                    variant="cyan" 
                    glow 
                    fullWidth 
                    onClick={() => setEmailSuccess(true)}
                  >
                    VALIDATE SIGNATURE
                  </CyberButton>
                </div>
              </div>
            )}
          </CyberPanel>
        </div>
      );

    case 'VerifyPhoneActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="cyan" title="Cellular Transceiver Hub" badge="Carrier Check">
            {phoneSuccess ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto">
                  <Smartphone className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">CARRIER CHANNEL BIND</h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Handshake complete. Cellular registry successfully written to primary device matrix.
                  </p>
                </div>
                <CyberButton variant="cyan" fullWidth onClick={() => onNavigate?.('WelcomeActivity')}>
                  PROCEED TO ACCESS INTERFACE
                </CyberButton>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Smartphone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">CELLULAR HANDSHAKE CHALLENGE</h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Enter the 6-digit carrier token transmitted over global cellular SMS channels.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center gap-2">
                    {verifyPhoneCode.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`phone-otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const val = e.target.value;
                          const nextCode = [...verifyPhoneCode];
                          nextCode[idx] = val;
                          setVerifyPhoneCode(nextCode);
                          if (val && idx < 5) {
                            document.getElementById(`phone-otp-${idx + 1}`)?.focus();
                          }
                        }}
                        className="w-11 h-12 bg-white/40 text-center text-lg font-mono text-indigo-600 border border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-400 transition-all font-bold"
                      />
                    ))}
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-2 px-3 flex items-center justify-between text-[11px] font-sans text-slate-500">
                    <span className="flex items-center gap-1.5 font-sans font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                      CORE CELLULAR GATEWAY
                    </span>
                    <span className="font-mono text-[10px] text-indigo-600">RSSI // -84dBm</span>
                  </div>

                  <div className="flex justify-between text-xs items-center">
                    <span className="text-slate-400">DISPATCH TIMEOUT: 02:44</span>
                    <button 
                      onClick={() => {
                        setPhoneSent(true);
                        setTimeout(() => setPhoneSent(false), 2000);
                      }}
                      className="text-indigo-650 hover:underline font-bold"
                    >
                      {phoneSent ? 'SMS DISPATCHED' : 'RESEND SMS CODE'}
                    </button>
                  </div>

                  <CyberButton variant="cyan" glow fullWidth onClick={() => setPhoneSuccess(true)}>
                    VERIFY CARRIER CHANNEL
                  </CyberButton>
                </div>
              </div>
            )}
          </CyberPanel>
        </div>
      );

    case 'TwoFactorActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in">
          <CyberPanel variant="cyan" title="Neural Key Authenticator" badge="TOTP Core">
            {totpSuccess ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">ACCESS GRANTED</h3>
                <p className="text-xs text-slate-500 font-sans">
                  Dynamic TOTP ticket authenticated. Welcome user index node.
                </p>
                <CyberButton variant="cyan" fullWidth onClick={() => onNavigate?.('WelcomeActivity')}>
                  OPEN COMMUNICATIONS DASHBOARD
                </CyberButton>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-indigo-50 border border-indigo-150 rounded-2xl flex items-center justify-center mx-auto">
                    <Fingerprint className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">TWO-FACTOR DISPATCH CODE</h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Retrieve the 6-digit rotating key generated inside your Google Authenticator or registered key chain.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center gap-2">
                    {totpCode.map((digit, idx) => (
                      <input
                        key={idx}
                        id={`totp-otp-${idx}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => {
                          const val = e.target.value;
                          const nextCode = [...totpCode];
                          nextCode[idx] = val;
                          setTotpCode(nextCode);
                          if (val && idx < 5) {
                            document.getElementById(`totp-otp-${idx + 1}`)?.focus();
                          }
                        }}
                        className="w-11 h-12 bg-white/40 text-center text-lg font-mono text-indigo-600 border border-indigo-200 rounded-xl focus:outline-none focus:border-indigo-400 transition-all font-bold"
                      />
                    ))}
                  </div>

                  {/* Rotator visual indicator */}
                  <div className="flex items-center justify-between bg-indigo-50/40 p-2.5 rounded-xl border border-indigo-100/50 text-[11px] text-slate-500">
                    <div className="flex items-center gap-1.5 font-sans font-medium">
                      <RefreshCw className="w-3.5 h-3.5 text-indigo-500 animate-spin" />
                      Code rotates automatically in:
                    </div>
                    <span className="font-mono font-bold text-slate-700 bg-white border border-indigo-100 px-1.5 py-0.5 rounded">
                      {totpCountdown} SEC
                    </span>
                  </div>

                  <CyberButton variant="cyan" glow fullWidth onClick={() => setTotpSuccess(true)}>
                    VERIFY AUTH CODE →
                  </CyberButton>

                  <div className="grid grid-cols-1 text-center text-xs mt-1">
                    <button onClick={() => onNavigate?.('RecoveryCodesActivity')} className="text-indigo-650 hover:underline font-sans font-bold">
                      Lost temporary device? Click to use Offline Recovery Certificates
                    </button>
                  </div>
                </div>
              </div>
            )}
          </CyberPanel>
        </div>
      );

    case 'PasskeyActivity':
      return (
        <div className="max-w-md mx-auto p-1 animate-fade-in relative">
          <CyberPanel variant="amber" title="Hardware Keys Vault" badge="WebAuthn Device Core">
            {passkeyVerified ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto">
                  <Fingerprint className="w-8 h-8 text-amber-600 animate-pulse" />
                </div>
                <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">PASSKEY REGISTERED</h3>
                <p className="text-xs text-slate-500 font-sans px-3">
                  Your biometric fingerprint/face signature has been written as the root hardware key for this node location.
                </p>
                <div className="pt-2">
                  <CyberButton variant="amber" fullWidth onClick={() => onNavigate?.('WelcomeActivity')}>
                    VISIT CORE HUB →
                  </CyberButton>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-amber-100/40 border border-amber-100/60 rounded-2xl flex items-center justify-center mx-auto">
                    <Fingerprint className="w-6 h-6 text-amber-600 animate-pulse" />
                  </div>
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">PASSKEY COGNITION SECURE</h3>
                  <p className="text-xs text-slate-500 font-sans px-2">
                    Activate high-security biometric triggers on your system. No password required for matrix entries.
                  </p>
                </div>

                <div className="border border-amber-400/20 bg-amber-450/5 p-3 rounded-2xl text-[11px] text-slate-500 space-y-1">
                  <p className="font-sans font-bold text-amber-700">ADVANTAGES:</p>
                  <ul className="list-disc pl-4 space-y-1 font-sans">
                    <li>Cryptographic key pairs stored strictly inside hardware chips</li>
                    <li>Immune to phishing dispatches or keylogger relays</li>
                    <li>Secure fingerprint or facial scanning triggers authentication instantly</li>
                  </ul>
                </div>

                <CyberButton 
                  variant="amber" 
                  glow 
                  fullWidth 
                  onClick={() => {
                    setPasskeyScanning(true);
                    setTimeout(() => {
                      setPasskeyScanning(false);
                      setPasskeyModal(true);
                    }, 1200);
                  }}
                  disabled={passkeyScanning}
                >
                  {passkeyScanning ? 'COMMUNICATING WITH HARDWARE...' : 'AUTHENTICATE PASSKEY DECK'}
                </CyberButton>
              </div>
            )}
          </CyberPanel>

          {/* SIMULATED WEBAUTHN DIALOG OVERLAY */}
          {passkeyModal && (
            <div className="absolute inset-x-4 top-24 bg-white border-2 border-slate-900 rounded-3xl p-5 shadow-2xl z-40 animate-scale-up space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-extrabold uppercase shrink-0">
                  <Cpu className="w-5 h-5 text-indigo-650 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-slate-800 uppercase">Aether Virtual OS Setup</h4>
                  <p className="text-[10px] text-indigo-600 font-mono">https://ais-dev-vmsgygwkwz2ijiith6lj5s-93667...</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-xs text-slate-600">
                Aether Security Node wants to create a credential or scan your security key for:
                <div className="mt-1.5 font-bold font-mono text-slate-800 text-[10px] bg-slate-200/50 p-1.5 rounded-lg border border-slate-300">
                  user-id: 28da4-f91b-b72e18-cf83
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1 font-bold">
                <button 
                  onClick={() => setPasskeyModal(false)}
                  className="px-4 py-2 bg-slate-100 border border-slate-200 text-xs text-slate-600 rounded-xl hover:bg-slate-200 transition-all cursor-pointer font-sans"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    setPasskeyModal(false);
                    setPasskeyVerified(true);
                  }}
                  className="px-4 py-2 bg-indigo-600 border border-indigo-600 text-xs text-white rounded-xl hover:bg-indigo-700 transition-all cursor-pointer flex items-center gap-1.5 font-sans"
                >
                  <Fingerprint className="w-3.5 h-3.5 text-white" />
                  Authenticate
                </button>
              </div>
            </div>
          )}
        </div>
      );

    case 'RecoveryCodesActivity':
      return (
        <div className="max-w-xl mx-auto p-1 animate-fade-in">
          <CyberPanel variant="amber" title="Backup Core Registry" badge="Offline Seed Phrase">
            <div className="space-y-5">
              <div className="flex items-center gap-4 border-b border-indigo-100/50 pb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-bold text-slate-800 uppercase tracking-wide">EMERGENCY MATRIX RECOVERY</h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    Safeguard these single-use recovery hashes. They override secondary Google Authenticator tokens if lost.
                  </p>
                </div>
              </div>

              <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800">
                <AlertTriangle className="w-5 h-5 text-rose-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-sans font-extrabold uppercase">CRITICAL MATRIX SECURITY ADVISORY</p>
                  <p className="font-sans text-[11px] leading-relaxed text-rose-700">
                    Never cache these parameters in pure digital spreadsheets or plain-text dispatches. Print or transfix them manually onto physical, offline, air-gapped ledger media.
                  </p>
                </div>
              </div>

              {/* 12 recovery hashes in a beautiful 3-column grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-[11px] font-mono text-slate-800 font-bold bg-white/40 p-4 border border-white/60 rounded-3xl backdrop-blur-md">
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">BF8E-C0D2-94AE</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">83D9-20EF-BA49</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">FFE2-092C-3BC7</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">01D8-FFAE-191B</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">49DB-E10E-AA23</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">BCE9-C82D-FD49</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">339A-D002-C7C1</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">E1B1-92A5-EF83</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">C0AE-01FF-94ED</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">1F93-DA2C-AA45</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">EA99-38B1-02E3</div>
                <div className="bg-slate-100 p-2.5 rounded-xl border border-indigo-100/30">898D-CFFE-B102</div>
              </div>

              <div className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-2xl p-2 px-4">
                <span className="text-xs text-slate-400 font-sans font-medium">12/12 SEED PHRASES COMPATIBLE</span>
                <button 
                  onClick={() => {
                    setCopiedCodes(true);
                    setTimeout(() => setCopiedCodes(false), 2000);
                  }}
                  className="flex items-center gap-1.5 text-xs text-indigo-650 hover:text-indigo-700 font-sans font-bold"
                >
                  <Copy className="w-3.5 h-3.5 text-indigo-600" />
                  {copiedCodes ? 'COPIED TO SYSTEM' : 'COPY MEMORY SEED'}
                </button>
              </div>

              <div className="flex justify-end gap-2.5 text-right font-semibold">
                <CyberButton variant="slate" onClick={() => window.print()}>
                  PRINT PAPER WALLET
                </CyberButton>
                <CyberButton variant="amber" glow onClick={() => onNavigate?.('WelcomeActivity')}>
                  RETURN TO CONTROL PANELS
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    case 'AccountRecoveryActivity':
      return (
        <div className="max-w-lg mx-auto p-1 animate-fade-in">
          <CyberPanel variant="magenta" title="Identity Dispute Panel" badge="Admin Audit">
            {recoveryStatus === 'processed' ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-sans text-slate-800 font-extrabold uppercase">SALVAGE PETITION FILED</h3>
                  <p className="text-xs text-slate-500 font-sans px-3">
                    Your neural court ticket has been signed with transaction signature:
                  </p>
                  <code className="text-xs font-mono text-indigo-700 bg-indigo-50/50 p-2.5 rounded-xl inline-block max-w-sm border border-indigo-100 select-all font-bold">
                    TXID-{recoveryIdText || 'c73be89-092bfda1-18c'}
                  </code>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  The system arbiters will verify your blockchain anchor signature. Typical audit duration: 4.2 hours.
                </p>
                <CyberButton variant="magenta" fullWidth onClick={() => onNavigate?.('WelcomeActivity')}>
                  RETURN TO SIGN IN SCREEN
                </CyberButton>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-center space-y-1">
                  <Terminal className="w-10 h-10 text-fuchsia-600 mx-auto" />
                  <h3 className="text-base font-sans font-extrabold text-slate-900 uppercase">IDENTITY DISPUTE PETITION</h3>
                  <p className="text-xs text-slate-500 font-sans px-2">
                    Submit metadata hashes of original creations to proof node ownership and bypass credentials manually.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Original Creation Date Key</label>
                    <input
                      type="date"
                      className="w-full bg-white/40 border border-white/60 text-xs text-slate-800 rounded-xl py-2.5 px-4 focus:outline-none focus:border-fuchsia-400 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Known IP Subnet Segment Address</label>
                    <input
                      type="text"
                      placeholder="e.g. 192.168.1.1 or 142.94.xx.xx"
                      className="w-full bg-white/40 border border-white/60 text-xs text-slate-850 rounded-xl py-2.5 px-4 focus:outline-none focus:border-fuchsia-400 transition-all font-mono"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold tracking-wide text-slate-400 uppercase">Historical Transaction Ledger TXID (Optional)</label>
                    <input
                      type="text"
                      placeholder="Enter a known transaction code if premium ledger bought"
                      value={recoveryIdText}
                      onChange={(e) => setRecoveryIdText(e.target.value)}
                      className="w-full bg-white/40 border border-white/60 text-xs text-slate-850 rounded-xl py-2.5 px-4 focus:outline-none focus:border-fuchsia-400 transition-all font-mono"
                    />
                  </div>
                </div>

                <CyberButton 
                  variant="magenta" 
                  glow 
                  fullWidth 
                  onClick={() => {
                    setRecoveryStatus('submitting');
                    setTimeout(() => {
                      setRecoveryStatus('processed');
                    }, 1200);
                  }}
                  disabled={recoveryStatus === 'submitting'}
                >
                  {recoveryStatus === 'submitting' ? 'VERIFYING CRITERIAS...' : 'SUBMIT RECOVERY MEMORANDUM'}
                </CyberButton>
              </div>
            )}
          </CyberPanel>
        </div>
      );

    case 'DeviceVerificationActivity':
      return (
        <div className="max-w-xl mx-auto p-1 animate-fade-in text-slate-900">
          <CyberPanel variant="amber" title="Hardware Keys Vault" badge="Authorized Nodes">
            <div className="space-y-5">
              <div className="flex items-center gap-4 border-b border-indigo-150 pb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                  <Laptop className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-sm font-sans font-extrabold text-slate-800 uppercase tracking-wide">CRYPTONODE DEVICE REGISTRY</h3>
                  <p className="text-xs text-slate-500 font-sans">Active linkages and hardware signatures authenticated.</p>
                </div>
              </div>

              <div className="space-y-3">
                {authorizedDevices.map((dev) => (
                  <div key={dev.id} className="flex justify-between items-center p-3.5 bg-white/40 rounded-3xl border border-white/60 backdrop-blur-md shadow-sm">
                    <div className="flex items-center gap-3">
                      {dev.type === 'Primary' ? (
                        <Smartphone className="w-5 h-5 text-indigo-650" />
                      ) : (
                        <Laptop className="w-5 h-5 text-indigo-650" />
                      )}
                      <div>
                        <h5 className="text-xs font-sans font-extrabold text-slate-800 uppercase">{dev.name}</h5>
                        <p className="text-[10px] font-mono text-slate-450">{dev.ip}</p>
                      </div>
                    </div>
                    {dev.status === 'VERIFIED' ? (
                      <div className="flex items-center gap-2">
                        <CyberBadge variant="cyan">VERIFIED</CyberBadge>
                        <button 
                          onClick={() => {
                            setAuthorizedDevices(authorizedDevices.map(d => d.id === dev.id ? { ...d, status: 'REVOKED' } : d));
                          }}
                          className="text-[10px] font-sans font-extrabold text-rose-600 hover:text-rose-700 hover:underline border border-rose-100 px-2 py-1 rounded-xl bg-rose-50 cursor-pointer"
                        >
                          Revoke
                        </button>
                      </div>
                    ) : dev.status === 'PENDING' ? (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => {
                            setAuthorizedDevices(authorizedDevices.map(d => d.id === dev.id ? { ...d, status: 'VERIFIED' } : d));
                          }}
                          className="text-[10px] font-sans font-extrabold text-emerald-600 hover:text-emerald-700 hover:underline border border-emerald-100 px-2.5 py-1 rounded-xl bg-emerald-50 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button 
                          onClick={() => {
                            setAuthorizedDevices(authorizedDevices.filter(d => d.id !== dev.id));
                          }}
                          className="text-[10px] font-sans font-extrabold text-rose-600 hover:text-rose-700 hover:underline border border-rose-100 px-2.5 py-1 rounded-xl bg-rose-50 cursor-pointer"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-sans font-extrabold text-slate-400 uppercase">Revoked</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center bg-indigo-50/40 p-3 rounded-2xl border border-indigo-100/50">
                <span className="text-xs text-slate-500 font-sans font-medium">Add new terminal verification request:</span>
                <CyberButton 
                  variant="slate" 
                  onClick={() => {
                    const newId = authorizedDevices.length + 1;
                    setAuthorizedDevices([
                      ...authorizedDevices,
                      { id: newId, name: `YUBIKEY CORE DECK #${newId}`, ip: `185.12.92.${Math.floor(Math.random() * 254)}`, type: 'Primary', status: 'PENDING' }
                    ]);
                  }}
                >
                  SIMULATE REQUEST +
                </CyberButton>
              </div>

              <div className="flex justify-end gap-2 text-right">
                <CyberButton variant="cyan" onClick={() => onNavigate?.('WelcomeActivity')}>
                  DONE
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    default:
      return (
        <div className="text-slate-400 p-8 text-center font-mono">
          <HelpCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p>No high-fidelity mock configured for this activity details. Active template parameters loaded.</p>
        </div>
      );
  }
};
