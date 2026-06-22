import React, { useState } from 'react';
import { 
  Settings, Shield, Bell, Eye, Volume2, Globe, Heart, Lock, Key, CreditCard, 
  ChevronRight, Check, Trash2, HelpCircle, MessageSquare, Star, Megaphone, AlertTriangle, Play,
  User, Sliders, Palette, Languages, Glasses, HardDrive, Cpu, RefreshCw, Radio, HardDriveDownload, Laptop, ToggleLeft, Terminal, Activity, Plus, ShieldCheck, Copy
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge } from '../CyberPanel';

interface ScreenProps {
  activityId: string;
  onNavigate?: (id: string) => void;
}

export const SettingsPremiumScreens: React.FC<ScreenProps> = ({ activityId, onNavigate }) => {
  // Settings switches states
  const [notifications, setNotifications] = useState(true);
  const [msgPreviews, setMsgPreviews] = useState(true);
  const [vibrate, setVibrate] = useState(false);
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>('dark');
  const [accentColor, setAccentColor] = useState<'cyan' | 'magenta' | 'amber'>('cyan');
  const [fontSize, setFontSize] = useState(14);
  const [enterToSend, setEnterToSend] = useState(true);
  const [smartSuggestions, setSmartSuggestions] = useState(true);

  // New settings states for robust custom panels
  const [language, setLanguage] = useState('en-stellar');
  const [speechRate, setSpeechRate] = useState(1.0);
  const [highContrast, setHighContrast] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Storage states
  const [cacheSize, setCacheSize] = useState('10.7 GB');
  const [isPurgingCache, setIsPurgingCache] = useState(false);
  const [purgeStep, setPurgeStep] = useState('');

  // Backup states
  const [backups, setBackups] = useState([
    { id: 'b1', name: 'AETHER_STABLE_V4_0', date: 'Jun 19, 2026, 02:40 UTC', size: '1.2 GB' },
    { id: 'b2', name: 'AETHER_BACKUP_SYS_PRE_PATCH', date: 'Jun 15, 2026, 12:10 UTC', size: '1.1 GB' }
  ]);
  const [newBackupName, setNewBackupName] = useState('');

  // Restore State
  const [isRestoring, setIsRestoring] = useState(false);
  const [restoreMessage, setRestoreMessage] = useState('');

  // Privacy states
  const [subnetDiscoverable, setSubnetDiscoverable] = useState(true);
  const [rawPayloadsEnabled, setRawPayloadsEnabled] = useState(false);
  const [permPipelines, setPermPipelines] = useState('mutual');

  // Security states
  const [mfaEnabled, setMfaEnabled] = useState(true);
  const [sshKeys, setSshKeys] = useState([
    { id: 'k1', label: 'MACINTOSH NEURAL PORT CHIP', fingerprint: 'SHA256:4oP/m89K...Y8T', active: true },
    { id: 'k2', label: 'SENTINEL COMPANION GATEWAY', fingerprint: 'SHA256:7mG/91Kx...U2V', active: false }
  ]);
  const [newSshLabel, setNewSshLabel] = useState('');
  const [newSshKey, setNewSshKey] = useState('');

  // Permissions states
  const [gpsPerm, setGpsPerm] = useState(true);
  const [micPerm, setMicPerm] = useState(true);
  const [camPerm, setCamPerm] = useState(false);
  const [storagePerm, setStoragePerm] = useState(true);

  // Terminal & logs for Dev options
  const [logs, setLogs] = useState([
    { time: '01:41:20', type: 'INFO', msg: 'System core connection handshake verified on port 3000.' },
    { time: '01:42:01', type: 'SUCCESS', msg: 'Secure SSH handshake completed successfully.' },
    { time: '01:42:44', type: 'WARN', msg: 'HMR refresh channel warning skipped.' },
    { time: '01:43:02', type: 'INFO', msg: 'Subnet routing diagnostics mapping online: Live telemetry ok.' }
  ]);

  // Mentions state
  const [mentions, setMentions] = useState([
    { id: 'm1', author: 'Cyber_Architect', avatar: '🪐', message: 'Need @Sentinel_Operator to verify the SSH key handshake on sector 7.', time: '10 min ago', read: false },
    { id: 'm2', author: 'Quantum_Coder', avatar: '💻', message: 'The compiler error was solved by the latest changes of @Sentinel_Operator!', time: '1 hr ago', read: true },
    { id: 'm3', author: 'Alice_Nexus', avatar: '📡', message: 'Join us on #decentral-plaza, @Sentinel_Operator. We are testing the live video grids.', time: '4 hr ago', read: false },
    { id: 'm4', author: 'Aether_Oracle', avatar: '🔮', message: 'Could @Sentinel_Operator explain the latency improvement of the Aether OS v4?', time: '2 days ago', read: true }
  ]);

  // Reactions state
  const [reactions, setReactions] = useState([
    { id: 'r1', user: 'Nova_Explorer', emoji: '⭐', target: 'Security key handshake approved', time: '12 min ago' },
    { id: 'r2', user: 'Byte_Pioneer', emoji: '🔥', target: 'Bento Grid system optimization', time: '20 min ago' },
    { id: 'r3', user: 'Neural_Mind', emoji: '❤️', target: 'Cyberpunk OLED theme release', time: '2 hr ago' },
    { id: 'r4', user: 'Void_Surfer', emoji: '🚀', target: 'Secure passkey authorization', time: '1 day ago' },
  ]);

  // Announcements state
  const [announcements, setAnnouncements] = useState([
    { id: 'a1', title: 'UPCOMING SYSTEM MAINTENANCE CYCLE', body: 'The core brain grids will undergo database synchronization and sector garbage collection on June 25th at 04:00 UTC. Expect transient pings latency and routing reconnections.', date: 'Jun 19, 2026', type: 'WARNING', priority: 'HIGH' },
    { id: 'a2', title: 'AETHER OS V4.2 STABLE DEPLOYED', body: 'We have optimized the bundle loaders, reduced standard RAM overhead by 24%, and completely resolved the hooks render mismatch errors in dynamic switchers.', date: 'Jun 18, 2026', type: 'UPDATE', priority: 'NORMAL' },
    { id: 'a3', title: 'NEW SECURITY REQUIREMENT PROTOCOLS', body: 'All operators are advised to register at least one hardware passkey (MACINTOSH NEURAL CHIP) or active TOTP authenticator to keep authorization level.', date: 'Jun 15, 2026', type: 'SECURITY', priority: 'CRITICAL' }
  ]);

  // Filters and dynamic toggles states
  const [mentionsFilter, setMentionsFilter] = useState<'all' | 'unread'>('all');
  const [reactionsFilter, setReactionsFilter] = useState('all');
  const [announcementsFilter, setAnnouncementsFilter] = useState('all');
  const [activeAnnounceId, setActiveAnnounceId] = useState<string | null>(null);

  // Premium extra states
  const [couponCode, setCouponCode] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'checking' | 'success' | 'invalid'>('idle');
  const [activeCoupons, setActiveCoupons] = useState([
    { code: 'COGNITIVE_20', discount: '20% off', status: 'ACTIVE' },
    { code: 'BLACKHAT_WINTER', discount: '15% off', status: 'ACTIVE' }
  ]);
  const [cardNo, setCardNo] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  
  // Upgrade sliders state
  const [upgradeCpu, setUpgradeCpu] = useState(2); // 1 = eco, 2 = standard, 3 = maximum turbo
  const [upgradeRam, setUpgradeRam] = useState(32); // 16, 32, 64 GB
  const [upgradeContext, setUpgradeContext] = useState(200); // 100, 200, 500k tokens

  // Trial state
  const [trialLocked, setTrialLocked] = useState(false);



  switch (activityId) {
    case 'SettingsActivity':
    case 'AccountSettingsActivity':
    case 'PrivacyActivity':
    case 'SecurityActivity':
    case 'AppearanceActivity':
    case 'ThemesActivity':
    case 'LanguageActivity':
    case 'AccessibilityActivity':
    case 'StorageActivity':
    case 'DataUsageActivity':
    case 'BackupActivity':
    case 'RestoreActivity':
    case 'ActiveSessionsActivity':
    case 'DevicesActivity':
    case 'PermissionsActivity':
    case 'DeveloperOptionsActivity': {
      const settingsOptions = [
        {
          group: 'SYSTEM CORE',
          items: [
            { id: 'SettingsActivity', name: 'Overview Console', icon: Settings, desc: 'Aether status, telemetry dashboard, shortcuts.' },
            { id: 'AccountSettingsActivity', name: 'Identity Registry', icon: User, desc: 'Decentralized credentials, signatures, keys.' },
            { id: 'SecurityActivity', name: 'Security Keys', icon: ShieldCheck, desc: 'Biometric authorization & secure terminals.' },
            { id: 'PrivacyActivity', name: 'Privacy Scopes', icon: Eye, desc: 'Configure discovery and network visibility.' },
          ]
        },
        {
          group: 'VISUAL & LOCALE',
          items: [
            { id: 'AppearanceActivity', name: 'User Interface', icon: Sliders, desc: 'Brightness ranges, visual presets.' },
            { id: 'ThemesActivity', name: 'Thematic Skins', icon: Palette, desc: 'Holographic hues, glowing accent indexes.' },
            { id: 'LanguageActivity', name: 'Localization', icon: Languages, desc: 'Toggle regional system transcription files.' },
            { id: 'AccessibilityActivity', name: 'Access Aids', icon: Glasses, desc: 'Sensory enhancers and text to speech controllers.' },
          ]
        },
        {
          group: 'DATA & STORAGE',
          items: [
            { id: 'StorageActivity', name: 'Cache Cleanse', icon: HardDrive, desc: 'Disk utility, system sandbox log flush.' },
            { id: 'DataUsageActivity', name: 'Usage Feed', icon: Activity, desc: 'Network bandwidth & transaction charts.' },
            { id: 'BackupActivity', name: 'State Snapshots', icon: HardDriveDownload, desc: 'Initiate manual/auto system states backups.' },
            { id: 'RestoreActivity', name: 'Restore Points', icon: RefreshCw, desc: 'Load, test, verify prior backup indexes.' },
          ]
        },
        {
          group: 'HARDWARE & DEVS',
          items: [
            { id: 'ActiveSessionsActivity', name: 'Active Sessions', icon: Radio, desc: 'List logged-in terminal points.' },
            { id: 'DevicesActivity', name: 'Pair Hardware', icon: Laptop, desc: 'Pair connected cyber-link wearables.' },
            { id: 'PermissionsActivity', name: 'Access Rights', icon: ToggleLeft, desc: 'Manage camera, microphone, and file access.' },
            { id: 'DeveloperOptionsActivity', name: 'Sandbox Shell', icon: Terminal, desc: 'Unlock backend port mapping & live terminal.' },
          ]
        }
      ];

      // Custom simulation functions
      const handlePurgeCache = () => {
        setIsPurgingCache(true);
        setPurgeStep('Scanning stale index blocks...');
        setTimeout(() => {
          setPurgeStep('Defragmenting temporal cache registers...');
          setTimeout(() => {
            setPurgeStep('Quotas garbage collection completed.');
            setTimeout(() => {
              setCacheSize('0 Bytes');
              setIsPurgingCache(false);
              setPurgeStep('');
            }, 1000);
          }, 1000);
        }, 1000);
      };

      const handleAddBackup = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newBackupName.trim()) return;
        const newB = {
          id: `b_${Date.now()}`,
          name: newBackupName.toUpperCase().replace(/\s+/g, '_'),
          date: new Date().toUTCString().replace('GMT', 'UTC'),
          size: '12 KB'
        };
        setBackups([newB, ...backups]);
        setNewBackupName('');
      };

      const handleRestoreBackup = (backupName: string) => {
        setIsRestoring(true);
        setRestoreMessage(`Synchronizing parameters to ${backupName}...`);
        setTimeout(() => {
          setRestoreMessage('Injecting registry segments...');
          setTimeout(() => {
            setRestoreMessage('Handshake reboot successful!');
            setTimeout(() => {
              setIsRestoring(false);
              setRestoreMessage('');
              alert(`System parameters successfully restored to state: ${backupName}`);
            }, 1000);
          }, 1000);
        }, 1200);
      };

      const handleAddSshKey = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newSshLabel.trim() || !newSshKey.trim()) return;
        const newKey = {
          id: `k_${Date.now()}`,
          label: newSshLabel.toUpperCase(),
          fingerprint: 'SHA256:' + Array.from({length: 12}, () => Math.random().toString(36).charAt(2)).join('') + '...',
          active: false
        };
        setSshKeys([...sshKeys, newKey]);
        setNewSshLabel('');
        setNewSshKey('');
      };

      const handleRemoveSshKey = (id: string) => {
        setSshKeys(sshKeys.filter(k => k.id !== id));
      };

      const triggerDiagnosticRun = () => {
        const events = [
          'PING: Sector 4 handshake reply in 11ms.',
          'SUCCESS: Flashed temporary buffer allocations.',
          'WARN: Incoming query bypassed regional firewall proxy.',
          'DEBUG: Render switcher hooks timing - 0.24ms.'
        ];
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        const timeStr = new Date().toTimeString().split(' ')[0];
        setLogs(prev => [...prev, { time: timeStr, type: randomEvent.startsWith('SUCCESS') ? 'SUCCESS' : randomEvent.startsWith('WARN') ? 'WARN' : 'INFO', msg: randomEvent }]);
      };

      // Determine current active section info
      let activeItemName = 'Overview';
      let activeItemDesc = 'Cockpit parameters and settings index.';
      settingsOptions.forEach(grp => {
        const matching = grp.items.find(i => i.id === activityId);
        if (matching) {
          activeItemName = matching.name;
          activeItemDesc = matching.desc;
        }
      });

      return (
        <div className="w-full max-w-6xl mx-auto p-1 lg:p-3 animate-fade-in font-sans text-left space-y-6 select-none">
          {/* Main layout container */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Left Column: Extensive Settings Navigation Directory (Hidden on mobile if viewing sub-setting to prevent cluttered view, always shown on desktop) */}
            <div className={`col-span-12 lg:col-span-4 space-y-4 ${activityId !== 'SettingsActivity' ? 'hidden lg:block' : 'block'}`}>
              <CyberPanel variant="cyan" title="Aether Settings Node" badge="INDEX_v4.2">
                <div className="space-y-4 max-h-[44rem] overflow-y-auto pr-1 col-span-12 lg:col-span-8 space-y-4">
                  <div className="border-b border-slate-900 pb-2 mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 block uppercase tracking-wider font-extrabold">Active Operator Signature</span>
                    <span className="text-xs font-mono text-white block mt-0.5">@Sentinel_Operator</span>
                  </div>

                  {settingsOptions.map((group) => (
                    <div key={group.group} className="space-y-1">
                      <h4 className="text-[9px] font-mono text-slate-500 font-extrabold uppercase tracking-widest px-2 mb-1 pt-2">{group.group}</h4>
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const IconComp = item.icon;
                          const isActive = activityId === item.id;
                          return (
                            <div
                              key={item.id}
                              onClick={() => onNavigate && onNavigate(item.id)}
                              className={`p-2.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all duration-150 ${
                                isActive 
                                  ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.1)] font-bold' 
                                  : 'bg-slate-950/60 border-slate-900/40 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <IconComp className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'scale-110 text-cyan-400 animate-pulse' : 'text-slate-500'}`} />
                                <div className="text-left leading-none">
                                  <span className="text-[11px] font-mono tracking-wide uppercase block">{item.name}</span>
                                  <span className="text-[9px] text-slate-600 block font-sans truncate max-w-[140px] mt-0.5">{item.desc}</span>
                                </div>
                              </div>
                              <ChevronRight className={`w-3.5 h-3.5 text-slate-600 transition-transform ${isActive ? 'translate-x-0.5 text-cyan-400' : ''}`} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-slate-900">
                    <CyberButton variant="slate" fullWidth className="text-[10px] py-1.5" onClick={() => onNavigate && onNavigate('PremiumActivity')}>
                      <Star className="w-3.5 h-3.5 text-amber-400 mr-1 shrink-0" /> MANAGE COGNITIVE PRO
                    </CyberButton>
                  </div>
                </div>
              </CyberPanel>
            </div>

            {/* Right Column: Dynamic active Settings panel view */}
            <div className={`col-span-12 lg:col-span-8 space-y-4 ${activityId === 'SettingsActivity' ? 'hidden lg:block' : 'block'}`}>
              
              {/* Responsive back to list button for mobile view */}
              <div className="lg:hidden mb-1 flex items-center justify-between pr-2">
                <CyberButton variant="slate" onClick={() => onNavigate && onNavigate('SettingsActivity')} className="px-3 py-1 text-[10px] font-mono flex items-center gap-1">
                  ← BACK TO DIRECTORY
                </CyberButton>
                <span className="text-[10px] font-mono text-slate-500 uppercase">Sector: {activeItemName}</span>
              </div>

              {/* Dynamic Sub-activity Switch Render */}
              {(() => {
                switch (activityId) {
                  case 'SettingsActivity':
                    return (
                      <div className="space-y-5">
                        <CyberPanel variant="cyan" title="System settings dashboard" badge="STATUS: ONLINE">
                          <div className="space-y-4">
                            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/15 rounded-2xl flex items-center justify-between flex-wrap gap-3">
                              <div className="space-y-0.5">
                                <h4 className="text-sm font-mono text-white uppercase font-bold">Node Handshake Confirmed</h4>
                                <p className="text-xs text-slate-400 leading-relaxed font-sans mt-0.5">Your decentralized network routing identity is completely active. Telemetry diagnostics status: Green.</p>
                              </div>
                              <CyberBadge variant="cyan">@Sentinel_Operator</CyberBadge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl space-y-1.5">
                                <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Aura Glow Color Accent</span>
                                <div className="flex items-center gap-2">
                                  <span className={`w-3 h-3 rounded-full ${accentColor === 'cyan' ? 'bg-cyan-400' : accentColor === 'magenta' ? 'bg-fuchsia-400' : 'bg-amber-400'}`} />
                                  <span className="text-xs font-mono text-white uppercase">{accentColor} theme loaded</span>
                                </div>
                              </div>
                              <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl space-y-1.5">
                                <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Sensorial Notifications</span>
                                <div className="flex items-center gap-2">
                                  <span className={`w-2.5 h-2.5 rounded-full ${notifications ? 'bg-cyan-400' : 'bg-rose-500'}`} />
                                  <span className="text-xs font-mono text-white uppercase">{notifications ? 'Enabled' : 'Muted'}</span>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-2.5 pt-2">
                              <span className="text-[10px] font-mono text-slate-550 block uppercase tracking-wider font-bold">Fast Navigation Quick shortcuts:</span>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {[
                                  { id: 'AccountSettingsActivity', name: 'CREDENTIALS' },
                                  { id: 'ThemesActivity', name: 'THEMATIC SKINS' },
                                  { id: 'StorageActivity', name: 'CACHE UTILITY' },
                                  { id: 'DataUsageActivity', name: 'BANDWIDTH GRAPH' },
                                  { id: 'DeveloperOptionsActivity', name: 'SANDBOX SHELL' }
                                ].map((sc) => (
                                  <button
                                    key={sc.id}
                                    onClick={() => onNavigate && onNavigate(sc.id)}
                                    className="py-2.5 rounded-lg border border-slate-900 bg-slate-950/60 text-[10px] font-mono text-slate-400 hover:text-white hover:border-cyan-500/20 active:bg-slate-900 cursor-pointer text-center"
                                  >
                                    {sc.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CyberPanel>

                        <div className="bg-slate-950/60 p-4 border border-slate-900 rounded-3xl space-y-2">
                          <span className="text-[10px] font-mono text-slate-550 block uppercase text-center font-bold">SECURE ON-DEVICE WORKSPACE DIAGNOSTICS</span>
                          <p className="text-[9px] text-slate-550 font-sans text-center">Aether OS client is optimized for port 3000 mapping. Encryption: SHA256 RSA handshake. No telemetry sent.</p>
                        </div>
                      </div>
                    );

                  case 'AccountSettingsActivity':
                    return (
                      <CyberPanel variant="cyan" title="Operational Identity Registry" badge="Secure Edit">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 border-b border-slate-900 pb-4 animate-fade-in">
                            <span className="text-3xl p-3 bg-slate-950 rounded-2xl border border-slate-850">🪐</span>
                            <div className="space-y-0.5">
                              <h4 className="text-xs font-mono text-white text-bold">BIOMETRIC OPERATOR CHIP</h4>
                              <p className="text-[10px] text-slate-500 font-mono mt-0.5">NODE FINGERPRINT: 0x82F991CCD...228B</p>
                            </div>
                          </div>

                          <div className="space-y-3.5">
                            <div className="space-y-2">
                              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-1 font-bold">Signature Label</label>
                              <input
                                type="text"
                                defaultValue="Sentinel_Operator"
                                className="w-full bg-slate-950 border border-slate-900 text-xs text-white rounded-xl py-2.5 px-4 focus:outline-none focus:border-cyan-400 font-mono"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest pl-1 font-bold">Lobby Bio Tag</label>
                              <input
                                type="text"
                                defaultValue="Monitoring SSH handshake sector 7. Coding terminal is active."
                                className="w-full bg-slate-950 border border-slate-900 text-xs text-white rounded-xl py-2.5 px-4 focus:outline-none focus:border-cyan-400 font-sans"
                              />
                            </div>
                          </div>

                          <div className="pt-3">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 mb-2">Cryptographic signature credentials keys:</span>
                            <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl flex items-center justify-between gap-4">
                              <div className="truncate">
                                <code className="text-[10px] font-mono text-cyan-400">AE-ID-SIGN-992FFK-8812A-PRO7</code>
                              </div>
                              <button 
                                onClick={() => alert('Token key copied directly to your workspace clipboard.')} 
                                className="p-1 px-2 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 rounded-lg text-[9px] font-mono cursor-pointer transition-colors shrink-0"
                              >
                                COPY
                              </button>
                            </div>
                          </div>

                          <div className="border border-rose-500/15 bg-rose-500/5 p-4 rounded-2xl flex items-center justify-between pt-4 mt-6">
                            <div className="space-y-0.5">
                              <h5 className="text-xs font-mono text-rose-400 uppercase font-bold">Destructive Identity Wipe</h5>
                              <p className="text-[10px] text-slate-550 font-sans leading-snug">Wipe your decentralized signature ledger contract forever. Irreversible.</p>
                            </div>
                            <CyberButton variant="danger" className="py-2 px-3.5 font-mono text-[10px]" onClick={() => {
                              const conf = confirm('SYSTEM WARNING: Execute immediate identity wipe? All metadata structures will be permanently discarded.');
                              if (conf) alert('Decentralized contract queued for garbage collection sector sweep.');
                            }}>
                              WIPE IDENTITY
                            </CyberButton>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'PrivacyActivity':
                    return (
                      <CyberPanel variant="cyan" title="Operational Privacy Scopes" badge="Toggles Panel">
                        <div className="space-y-4 animate-fade-in">
                          <div className="space-y-3.5">
                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Aether Subnet Discovery</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Let your signature address appear in global planetary explorer node list searches.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={subnetDiscoverable}
                                  onChange={() => setSubnetDiscoverable(!subnetDiscoverable)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Raw Telemetry Relay</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Forward diagnostic performance metrics and compiler logs to parent directory clusters.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer select-none">
                                <input
                                  type="checkbox"
                                  checked={rawPayloadsEnabled}
                                  onChange={() => setRawPayloadsEnabled(!rawPayloadsEnabled)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl space-y-3">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">P2P Connection Permission</h5>
                                <p className="text-[10px] text-slate-550 font-sans mt-0.5">Who is allowed to ping or build live streaming session connection handshakes to your node.</p>
                              </div>
                              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10px]">
                                {[
                                  { key: 'all', name: 'ALL INBOUND NODES' },
                                  { key: 'mutual', name: 'MUTUAL FORUM CHATS' },
                                  { key: 'none', name: 'STRICT QUARANTINE' }
                                ].map((opt) => (
                                  <button
                                    key={opt.key}
                                    onClick={() => setPermPipelines(opt.key)}
                                    className={`py-2 px-1 border rounded-lg text-center cursor-pointer transition-all ${
                                      permPipelines === opt.key
                                        ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 font-bold'
                                        : 'bg-slate-900 border-slate-850 text-slate-500'
                                    }`}
                                  >
                                    {opt.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'SecurityActivity':
                    return (
                      <div className="space-y-5 animate-fade-in">
                        <CyberPanel variant="cyan" title="Operational Security Credentials" badge="Shield Verified">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-slate-900">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Hardware Secure Passkey MFA</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Requires active neural hardware authenticator code for level-2 directory operations.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={mfaEnabled}
                                  onChange={() => setMfaEnabled(!mfaEnabled)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="space-y-3">
                              <h5 className="text-[10px] font-mono text-slate-500 uppercase font-extrabold block">Authorized SSH Keys Registry</h5>
                              <div className="space-y-2">
                                {sshKeys.map((k) => (
                                  <div key={k.id} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center gap-4">
                                    <div className="text-left leading-tight">
                                      <span className="text-[10px] font-mono text-white block">{k.label}</span>
                                      <code className="text-[9px] font-mono text-slate-500 block mt-0.5">{k.fingerprint}</code>
                                    </div>
                                    <button 
                                      onClick={() => handleRemoveSshKey(k.id)}
                                      className="text-[9px] font-mono text-[#f87171] hover:underline cursor-pointer bg-transparent border-0"
                                    >
                                      REVOKE
                                    </button>
                                  </div>
                                ))}
                              </div>

                              <form onSubmit={handleAddSshKey} className="pt-3 border-t border-slate-900 space-y-2.5">
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">Register New Cryptographic SSH Key</span>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  <input
                                    type="text"
                                    placeholder="DEVICE LABEL (E.G. MAIN LAPBOX)"
                                    value={newSshLabel}
                                    onChange={(e) => setNewSshLabel(e.target.value)}
                                    className="bg-slate-950 border border-slate-900 text-[10px] font-mono p-2.5 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                                  />
                                  <input
                                    type="text"
                                    placeholder="SSH PUBLIC KEY BLOCK (ssh-rsa...)"
                                    value={newSshKey}
                                    onChange={(e) => setNewSshKey(e.target.value)}
                                    className="bg-slate-950 border border-slate-900 text-[10px] font-mono p-2.5 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                                  />
                                </div>
                                <CyberButton type="submit" variant="cyan" className="py-2.5 px-3.5 text-[9px] font-mono">
                                  COMMIT SIGNED HASH KEY
                                </CyberButton>
                              </form>
                            </div>
                          </div>
                        </CyberPanel>
                      </div>
                    );

                  case 'AppearanceActivity':
                  case 'ThemesActivity':
                    return (
                      <div className="space-y-5 animate-fade-in">
                        <CyberPanel variant="cyan" title="Visual UI Presets Appearance" badge="Skins Loaded">
                          <div className="space-y-4">
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Appearance Theme Mode</span>
                            
                            <div className="grid grid-cols-3 gap-2.5">
                              {(['light', 'dark', 'system'] as const).map((mode) => (
                                <button
                                  key={mode}
                                  onClick={() => setThemeMode(mode)}
                                  className={`py-3 rounded-lg border text-xs font-mono transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                                    themeMode === mode 
                                      ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.15)] font-extrabold' 
                                      : 'bg-slate-900 border-slate-850 text-slate-500 hover:text-slate-300'
                                  }`}
                                >
                                  <div className={`w-4 h-4 rounded border ${
                                    mode === 'light' ? 'bg-white border-slate-300' : mode === 'dark' ? 'bg-slate-950 border-cyan-400/20' : 'bg-slate-700 border-dashed border-slate-500'
                                  }`} />
                                  <span className="capitalize">{mode}</span>
                                </button>
                              ))}
                            </div>

                            {/* Accent Color Circles */}
                            <div className="space-y-2 pt-2">
                              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-bold">Thematic Color Accents</span>
                              <div className="flex gap-3">
                                {['cyan', 'magenta', 'amber'].map((col) => (
                                  <button
                                    key={col}
                                    onClick={() => setAccentColor(col as any)}
                                    className={`w-7 h-7 rounded-full transition-all cursor-pointer flex items-center justify-center border-2 ${
                                      accentColor === col ? 'border-white scale-110 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                                    } ${col === 'cyan' ? 'bg-cyan-400' : col === 'magenta' ? 'bg-fuchsia-400' : 'bg-amber-400'}`}
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Font Size Slider slider */}
                            <div className="space-y-2 pt-2">
                              <div className="flex justify-between text-[11px] font-mono text-slate-550">
                                <span>FONT SIZING SCALE:</span>
                                <span className="text-cyan-400 font-extrabold">{fontSize}PX</span>
                              </div>
                              <input
                                type="range"
                                min="12"
                                max="22"
                                step="1"
                                value={fontSize}
                                onChange={(e) => setFontSize(parseInt(e.target.value))}
                                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                              />
                            </div>
                          </div>
                        </CyberPanel>
                      </div>
                    );

                  case 'LanguageActivity':
                    return (
                      <CyberPanel variant="cyan" title="Regional Systems Localization" badge="Locale Registry">
                        <div className="space-y-4 animate-fade-in">
                          <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Select Active Transcriptions Keyfile:</span>
                          <div className="space-y-2">
                            {[
                              { code: 'en-stellar', name: 'INTERSTELLAR ENGLISH (US v4.2)', detail: 'Standard Latin node layout formatting config.' },
                              { code: 'bin-synth', name: 'CYBERSPACE BINARY SYSTEM (0101)', detail: 'Direct low-level visual logs binary telemetry.' },
                              { code: 'tok-neo', name: 'NEO-TOKYO SYNTHETIC HIROGLYPHS (JA)', detail: 'Kanji & katakana matrix region encoding.' },
                              { code: 'ber-subnet', name: 'BERLIN COGNITIVE GERMAN (DE-SUBNET)', detail: 'Federal central region telemetry encoding.' }
                            ].map((lang) => {
                              const isSel = language === lang.code;
                              return (
                                <div
                                  key={lang.code}
                                  onClick={() => setLanguage(lang.code)}
                                  className={`p-3.5 border rounded-2xl cursor-pointer transition-all flex items-center justify-between ${
                                    isSel 
                                      ? 'bg-cyan-500/5 border-cyan-400/40 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.05)]' 
                                      : 'bg-slate-950/60 border-slate-900/65 text-slate-450 hover:bg-slate-900'
                                  }`}
                                >
                                  <div className="text-left space-y-0.5">
                                    <h5 className="text-xs font-mono font-bold uppercase">{lang.name}</h5>
                                    <p className="text-[10px] text-slate-500 font-sans">{lang.detail}</p>
                                  </div>
                                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSel ? 'border-cyan-400' : 'border-slate-800'}`}>
                                    {isSel && <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'AccessibilityActivity':
                    return (
                      <CyberPanel variant="cyan" title="Sensory Access Aids Assistance" badge="Helper Toggles">
                        <div className="space-y-4 animate-fade-in">
                          <div className="space-y-3.5">
                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Pure High Contrast Rendering</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Enforces deep high contrast monochrome black canvas background frames.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={highContrast}
                                  onChange={() => setHighContrast(!highContrast)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Reduce Interactive Motion</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Quiesce spatial transitions, parallax hover effects, and matrix blurs.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={reduceMotion}
                                  onChange={() => setReduceMotion(!reduceMotion)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl space-y-2">
                              <div className="flex justify-between text-[11px] font-mono text-slate-550 font-bold">
                                <span>TEXT-TO-SPEECH READING ACCENT RATE:</span>
                                <span className="text-cyan-400 font-bold">{speechRate.toFixed(1)}X SPEED</span>
                              </div>
                              <input
                                type="range"
                                min="0.5"
                                max="2.5"
                                step="0.1"
                                value={speechRate}
                                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                              />
                            </div>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'StorageActivity':
                    return (
                      <CyberPanel variant="cyan" title="Operational Storage Cache Purge" badge="Disk Engine">
                        <div className="space-y-5 animate-fade-in">
                          {/* Linear bar quota progress indicator */}
                          <div className="space-y-1.5 p-4 bg-slate-950 border border-slate-900 rounded-2xl">
                            <div className="flex justify-between text-[10px] font-mono text-slate-505">
                              <span>DISK INDEX CAP SPACE USED:</span>
                              <span className="text-white font-extrabold">{cacheSize === '0 Bytes' ? '61.7 GB / 128 GB' : '72.4 GB / 128 GB'}</span>
                            </div>
                            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                              <div 
                                className="h-full bg-cyan-400 transition-all duration-500" 
                                style={{ width: cacheSize === '0 Bytes' ? '48%' : '56.5%' }} 
                              />
                            </div>
                          </div>

                          <div className="space-y-2.5">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Allocated space breakdown:</span>
                            <div className="space-y-2 font-mono text-[11px]">
                              {[
                                { name: 'DECENTRALIZED CHAT JOURNALS', size: '21.2 GB' },
                                { name: 'AI COGNITIVE WEIGHT CACHE', size: '40.5 GB' },
                                { name: 'SYSTEM TEMPORARY REGISTER LOGS', size: cacheSize }
                              ].map((sect, i) => (
                                <div key={i} className="p-3 bg-slate-950/60 border border-slate-900 rounded-xl flex justify-between items-center">
                                  <span>{sect.name}</span>
                                  <span className="text-cyan-400 font-extrabold">{sect.size}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-3">
                            <CyberButton 
                              variant="danger" 
                              fullWidth 
                              disabled={isPurgingCache || cacheSize === '0 Bytes'}
                              onClick={handlePurgeCache}
                              className="py-3 font-mono text-xs"
                            >
                              {isPurgingCache ? (
                                <span className="flex items-center justify-center gap-2">
                                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> {purgeStep.toUpperCase()}
                                </span>
                              ) : cacheSize === '0 Bytes' ? (
                                'LOGS QUOTA IS PERFECTLY CLEAN'
                              ) : (
                                'PURGE SANBOX TEMP REGISTER LOGS'
                              )}
                            </CyberButton>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'DataUsageActivity':
                    return (
                      <CyberPanel variant="cyan" title="Temporal Bandwidth Interface Graph" badge="Pings Speed">
                        <div className="space-y-5 animate-fade-in">
                          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-900">
                            <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-left">
                              <span className="text-[9px] text-slate-500 block">INCOMING DOWNLOAD RATE</span>
                              <span className="text-sm font-extrabold text-cyan-400 mt-0.5 block">2.18 GBPS</span>
                            </div>
                            <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 font-mono text-left">
                              <span className="text-[9px] text-slate-500 block">OUTGOING HANDSHAKES</span>
                              <span className="text-sm font-extrabold text-fuchsia-400 mt-0.5 block">840.4 MBPS</span>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-slate-550 block uppercase pl-1 font-bold">Visual Telemetry Wave Matrix:</span>
                            {/* Breathtaking simple SVG chart wave loop */}
                            <div className="bg-slate-950 p-2.5 rounded-2xl border border-slate-900 h-36 flex items-end justify-center relative overflow-hidden">
                              <div className="absolute inset-0 z-0 bg-slate-950/20 backdrop-blur-xs flex flex-col justify-between py-2 px-3 text-[8px] font-mono text-slate-600 pointer-events-none">
                                <span className="border-b border-slate-900/40 w-full text-right">3.0 Gbps</span>
                                <span className="border-b border-slate-900/40 w-full text-right">1.5 Gbps</span>
                                <span className="w-full text-right">0 Gbps</span>
                              </div>
                              <svg className="w-full h-full text-cyan-500/30 z-10" viewBox="0 0 100 40" preserveAspectRatio="none">
                                <path 
                                  d="M 0 35 Q 15 5 25 22 T 50 12 T 75 30 T 100 20 L 100 40 L 0 40 Z" 
                                  fill="url(#grad)" 
                                  stroke="currentColor" 
                                  strokeWidth="0.5" 
                                />
                                <path 
                                  d="M 0 32 Q 10 12 30 18 T 60 8 T 85 24 T 100 15" 
                                  fill="none" 
                                  stroke="#f0abfc" 
                                  strokeWidth="0.55" 
                                  opacity="0.8"
                                />
                                <defs>
                                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="rgb(34, 211, 238)" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="rgb(34, 211, 238)" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl mt-2">
                            <div>
                              <h5 className="text-xs font-mono text-white uppercase font-bold">Data saver node throttle limit</h5>
                              <p className="text-[10px] text-slate-500 font-sans mt-0.5">Cap spatial media playback buffering and limit maximum bandwidth spikes.</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" defaultChecked className="sr-only peer" />
                              <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                            </label>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'BackupActivity':
                    return (
                      <CyberPanel variant="cyan" title="System Backup State Snapshots" badge="Storage Sync">
                        <div className="space-y-4 animate-fade-in">
                          <form onSubmit={handleAddBackup} className="p-4 bg-slate-950/80 rounded-2xl border border-slate-900 space-y-3">
                            <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold">Generate Manual Node Database Snapshot</span>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="SNAPSHOT_NAME_E.G._STABLE_LOBBY"
                                value={newBackupName}
                                onChange={(e) => setNewBackupName(e.target.value)}
                                className="flex-1 bg-slate-900 border border-slate-800 text-[10px] font-mono p-2.5 rounded-xl text-white focus:outline-none focus:border-cyan-400"
                              />
                              <CyberButton type="submit" variant="cyan" className="py-2.5 px-4 font-mono text-[10px] flex items-center gap-1 shrink-0">
                                <Plus className="w-3.5 h-3.5" /> TRIGGER
                              </CyberButton>
                            </div>
                          </form>

                          <div className="space-y-2.5">
                            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Verified Snapshots Stored On-Device:</span>
                            <div className="space-y-2">
                              {backups.map((b) => (
                                <div key={b.id} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl flex items-center justify-between gap-4">
                                  <div className="text-left space-y-0.5">
                                    <h5 className="text-[11px] font-mono text-white font-bold">{b.name}</h5>
                                    <p className="text-[9px] font-mono text-slate-500">{b.date} • size: {b.size}</p>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <button 
                                      onClick={() => alert(`Beginning backup snapshot download: ${b.name} to local zip file.`)}
                                      className="p-1 px-2 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 rounded-lg text-[9px] font-mono cursor-pointer transition-colors"
                                    >
                                      EXPORT
                                    </button>
                                    <button 
                                      onClick={() => setBackups(prev => prev.filter(item => item.id !== b.id))}
                                      className="p-1 text-slate-650 hover:text-rose-500 rounded-lg cursor-pointer transition-colors border-0 bg-transparent"
                                      type="button"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'RestoreActivity':
                    return (
                      <CyberPanel variant="cyan" title="Holographic Restore Point Recovery" badge="State Reload">
                        <div className="space-y-4 animate-fade-in">
                          {isRestoring ? (
                            <div className="py-12 text-center space-y-4 bg-slate-950 border border-slate-900 rounded-2xl animate-pulse">
                              <RefreshCw className="w-10 h-10 text-cyan-400 animate-spin mx-auto" />
                              <div className="space-y-1">
                                <h4 className="text-xs font-mono text-white uppercase font-bold">REBUILDING FILES DIAGNOSTICS</h4>
                                <p className="text-[10px] text-cyan-400 font-mono">{restoreMessage}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <div className="p-4 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                                <h4 className="text-xs font-mono text-rose-450 uppercase font-extrabold flex items-center gap-1.5 font-bold">
                                  <AlertTriangle className="w-3.5 h-3.5" /> REBOOT DANGER PROTOCOL
                                </h4>
                                <p className="text-[10px] text-slate-500 font-sans leading-relaxed mt-1">
                                  Restoring will overwrite current temporary settings registries and active chats locks. Ensure custom on-device telemetry logs are backed up first.
                                </p>
                              </div>

                              <div className="space-y-2">
                                <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Select point to overwrite system limits:</span>
                                <div className="space-y-2">
                                  {backups.map((b) => (
                                    <div key={b.id} className="p-3.5 bg-slate-950/80 border border-slate-900 rounded-xl flex items-center justify-between gap-4">
                                      <div className="text-left space-y-0.5">
                                        <h5 className="text-[11px] font-mono text-white font-extrabold">{b.name}</h5>
                                        <p className="text-[9px] text-slate-550 font-sans">Created on: {b.date}</p>
                                      </div>
                                      <CyberButton 
                                        variant="slate" 
                                        className="py-1.5 px-3.5 text-[10px] font-mono shrink-0"
                                        onClick={() => handleRestoreBackup(b.name)}
                                      >
                                        REVERT STATE
                                      </CyberButton>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </CyberPanel>
                    );

                  case 'ActiveSessionsActivity':
                    return (
                      <CyberPanel variant="cyan" title="Operational Signatures Terminals" badge="Connected">
                        <div className="space-y-4 animate-fade-in">
                          <div className="space-y-3">
                            {[
                              { device: 'Term-1 (Aether Lab Deck)', location: 'Helsinki Subnet Grid', ip: '192.168.4.240', date: 'Authorized right now', active: true },
                              { device: 'Passkey Hardware Chip Fob', location: 'Tokyo Sector 7 Base', ip: '92.40.112.59', date: 'Handshake logged 2 hr ago', active: false },
                              { device: 'macOS AI Studio Sandbox', location: 'California Google Cloud VM', ip: '3000 Container Proxy', date: 'Handshake logged 24 hr ago', active: false }
                            ].map((sess, i) => (
                              <div key={i} className="p-3.5 bg-slate-950 border border-slate-900 rounded-2xl flex items-center justify-between gap-4 flex-wrap">
                                <div className="text-left space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xs font-mono font-bold text-white uppercase">{sess.device}</span>
                                    {sess.active && <span className="bg-cyan-500/20 text-[#22d3ee] border border-cyan-400/30 font-mono text-[8px] px-1 py-0.2 rounded font-extrabold">CURRENT ACTIVE</span>}
                                  </div>
                                  <p className="text-[10px] text-slate-500 font-sans">{sess.location} • node IP: {sess.ip}</p>
                                </div>
                                <span className="text-[10px] font-mono text-slate-500 shrink-0">{sess.date}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-3">
                            <CyberButton 
                              variant="danger" 
                              fullWidth 
                              className="py-3 text-[10px] font-mono"
                              onClick={() => {
                                const conf = confirm('SYSTEM WARNING: Terminate all other regional terminal handshakes? Secondary paired fobs will request fully signed MFA reboot keys.');
                                if (conf) alert('Flushed all session signatures across external nodes.');
                              }}
                            >
                              TERMINATE ALL SESSIONS EXCEPT LOCAL
                            </CyberButton>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'DevicesActivity':
                    return (
                      <CyberPanel variant="cyan" title="Operational Companions Peripherals" badge="Hardware List">
                        <div className="space-y-4 animate-fade-in">
                          <div className="space-y-2.5">
                            {[
                              { name: 'Macintosh Neural Chip Helmet UI', status: 'PAIRED & ONLINE', detail: 'Interface render brain sync rate: 100 epoch.' },
                              { name: 'Security Passkey Cryptokey FOB', status: 'VERIFIED DISK', detail: 'Primary 2FA key block signed.' },
                              { name: 'Left/Right Soundwaves Audio Synths', status: 'DISCONNECTED', detail: 'Sound trigger parameters. (Off)' }
                            ].map((dev, i) => (
                              <div key={i} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl flex items-center justify-between gap-4">
                                <div className="text-left space-y-0.5">
                                  <h5 className="text-xs font-mono text-white font-bold">{dev.name}</h5>
                                  <p className="text-[10px] text-slate-500 font-sans">{dev.detail}</p>
                                </div>
                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                                  dev.status.includes('ONLINE') 
                                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400 font-bold' 
                                    : dev.status.includes('VERIFIED') 
                                      ? 'bg-fuchsia-400/20 border-fuchsia-400 text-fuchsia-400 font-bold' 
                                      : 'bg-slate-900 border-slate-800 text-slate-600'
                                }`}>
                                  {dev.status}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-3 border-t border-slate-900">
                            <CyberButton 
                              variant="slate" 
                              fullWidth 
                              className="py-2.5 text-[10px] font-mono"
                              onClick={() => alert('Broadcasting Bluetooth/Neural pairing telemetry... Enter pairing state on your hardware device.')}
                            >
                              REGISTER NEW PERIPHERAL COMPANION
                            </CyberButton>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'PermissionsActivity':
                    return (
                      <CyberPanel variant="cyan" title="Operational Hardware APIs Access" badge="Verified List">
                        <div className="space-y-4 animate-fade-in">
                          <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Manage system-level browser credentials permissions:</span>
                          
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Atmospheric Geolocation Tracker</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Used for scanning registered neighboring operators in proximity.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={gpsPerm}
                                  onChange={() => setGpsPerm(!gpsPerm)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Spatial Sound Microphone</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Used to broadcast audio speech segments to voice chat channels.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={micPerm}
                                  onChange={() => setMicPerm(!micPerm)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Subnet Optical Camera</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Used to transmit live camera feeds during peer sessions.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={camPerm}
                                  onChange={() => setCamPerm(!camPerm)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>

                            <div className="flex items-center justify-between p-3.5 bg-slate-950 border border-slate-900 rounded-xl">
                              <div>
                                <h5 className="text-xs font-mono text-white uppercase font-bold">Sandbox Write Permission</h5>
                                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Enables storing state backup files on local device storage drive directories.</p>
                              </div>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={storagePerm}
                                  onChange={() => setStoragePerm(!storagePerm)}
                                  className="sr-only peer"
                                />
                                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </CyberPanel>
                    );

                  case 'DeveloperOptionsActivity':
                    return (
                      <div className="space-y-4 animate-fade-in">
                        <CyberPanel variant="cyan" title="Node Sandbox Compiler Options" badge="DEV PORT: 3000">
                          <div className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-left font-mono">
                                <span className="text-[10px] text-slate-500 block">CONTAINER PORT BINDING</span>
                                <span className="text-xs font-bold text-white block mt-0.5">3000 (EXPR_VITE_INGRESS)</span>
                              </div>
                              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-left font-mono">
                                <span className="text-[10px] text-slate-500 block">NODE RUNTIME MODE</span>
                                <span className="text-xs font-bold text-white block mt-0.5">development (DISABLE_HMR)</span>
                              </div>
                            </div>

                            <div className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl space-y-2">
                              <div className="flex justify-between items-center flex-wrap gap-2 text-left">
                                <span className="text-[10px] font-mono text-cyan-400 block uppercase font-bold">Live telemetry diagnostics stream:</span>
                                <CyberButton variant="cyan" onClick={triggerDiagnosticRun} className="py-1 px-2.5 text-[8px] font-mono leading-none">
                                  EXECUTE TEST TRIGGER LINE
                                </CyberButton>
                              </div>

                              {/* Terminal display */}
                              <div className="bg-black border border-slate-900 p-2.5 rounded-xl block h-40 overflow-y-auto font-mono text-[9px] text-[#22d3ee] space-y-1 select-text">
                                {logs.map((lg, i) => (
                                  <div key={i} className="flex gap-2">
                                    <span className="text-slate-650">[{lg.time}]</span>
                                    <span className={
                                      lg.type === 'SUCCESS' ? 'text-emerald-400 font-bold' : lg.type === 'WARN' ? 'text-amber-400' : 'text-cyan-400'
                                    }>
                                      {lg.type}
                                    </span>
                                    <span className="text-slate-200">{lg.msg}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CyberPanel>
                      </div>
                    );

                  default:
                    return null;
                }
              })()}
            </div>

          </div>
        </div>
      );
    }

    case 'NotificationSettingsActivity':
    case 'NotificationsActivity':
      return (
        <CyberPanel variant="cyan" title="Transmissions Notifications Console" badge="Alarms Panel" className="max-w-xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <div>
                <h4 className="text-xs font-mono text-white font-bold uppercase flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" /> Messaging Notifications
                </h4>
                <p className="text-[11px] text-slate-500 font-sans mt-0.5">Toggle alert frequencies across various active sectors.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
              </label>
            </div>

            <div className="space-y-3.5 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-mono text-white">NEW MESSAGE SIGNALS</h5>
                  <p className="text-[11px] text-slate-550 font-sans">Triggers notification sound waves for incoming cyber chatter.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 peer-checked:bg-cyan-550 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-mono text-white">MESSAGE SENSORY PREVIEWS</h5>
                  <p className="text-[11px] text-slate-550 font-sans">Display text fragment overlays inside notifications banners.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={msgPreviews}
                    onChange={() => setMsgPreviews(!msgPreviews)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 peer-checked:bg-cyan-555 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-mono text-white">CYBERNETICS TOKENS ALERTS</h5>
                  <p className="text-[11px] text-slate-550 font-sans font-sans">Notify immediately on code updates, security handshakes, or logs triggers.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-slate-900 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 peer-checked:bg-cyan-555 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-slate-950"></div>
                </label>
              </div>
            </div>
          </div>
        </CyberPanel>
      );

    case 'PremiumActivity':
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left font-sans">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold uppercase flex items-center gap-2">
                <Star className="w-4 h-4 text-fuchsia-400 animate-pulse" /> Cognitive Pro Marketplace
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Explore level-2 server allocation advantages and customized cognitive pipelines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-950 border border-slate-900 hover:border-fuchsia-500/20 rounded-2xl space-y-3 transition-colors">
              <span className="text-fuchsia-400 font-mono text-2xl font-bold">120B</span>
              <h4 className="text-xs font-mono font-bold text-white uppercase mt-1">Smarter Models Context</h4>
              <p className="text-[10px] text-slate-500 font-sans leading-relaxed">Direct links to 120-Billion parameter frontier weights with maximum logic depth.</p>
            </div>
            <div className="p-4 bg-slate-950 border border-slate-900 hover:border-fuchsia-500/20 rounded-2xl space-y-3 transition-colors">
              <span className="text-cyan-400 font-mono text-2xl font-bold">0ms</span>
              <h4 className="text-xs font-mono font-bold text-white uppercase mt-1">Zero Latency Buffer</h4>
              <p className="text-[10px] text-slate-500 font-sans leading-relaxed">Dedicated bandwidth queues bypass multi-tenant grid throttles for real-time streams.</p>
            </div>
            <div className="p-4 bg-slate-950 border border-slate-900 hover:border-fuchsia-500/20 rounded-2xl space-y-3 transition-colors">
              <span className="text-amber-400 font-mono text-2xl font-bold">1M</span>
              <h4 className="text-xs font-mono font-bold text-white uppercase mt-1">Tokens Memory Span</h4>
              <p className="text-[10px] text-slate-500 font-sans leading-relaxed font-sans">Retain weeks of system diagnostics, logs databases, and direct chatter memory.</p>
            </div>
          </div>

          <CyberPanel variant="magenta" title="Available Bundles" badge="Active Level-1">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-tr from-fuchsia-500/10 to-transparent border border-fuchsia-500/20 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] bg-fuchsia-400/20 text-fuchsia-400 font-mono font-bold px-2 py-0.5 rounded border border-fuchsia-500/30 uppercase">Enterprise Operator</span>
                  <h4 className="text-sm font-mono text-white font-bold uppercase mt-1">AETHER COGNITIVE PRO</h4>
                  <p className="text-xs text-slate-400 font-sans">Full access to 100k tokens context queue and fully custom training sets.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-lg font-mono font-bold text-white uppercase block">$9.99/mo</span>
                  <CyberButton variant="magenta" className="py-1.5 px-3 text-[10px] font-mono mt-1" onClick={() => onNavigate && onNavigate('SubscriptionActivity')}>
                    VIEW PLAN DETAILS
                  </CyberButton>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] bg-slate-900 text-slate-400 font-mono font-bold px-2 py-0.5 rounded border border-slate-800 uppercase">Beta Developer</span>
                  <h4 className="text-sm font-mono text-white font-bold uppercase mt-1">STANDARD SANDBOX FREE</h4>
                  <p className="text-xs text-slate-400 font-sans">Basic model pipelines, single thread diagnostics logging, community forums.</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-lg font-mono font-bold text-slate-400 uppercase block">$0.00/mo</span>
                  <span className="text-[9px] font-mono text-slate-650 uppercase font-bold block mt-1">ACTIVE STANDARD TIER</span>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    case 'SubscriptionActivity':
      return (
        <CyberPanel variant="magenta" title="Cognitive Pro Subscription Status" badge="Active License" className="max-w-xl mx-auto">
          <div className="space-y-5">
            <div className="p-4 bg-gradient-to-r from-fuchsia-500/15 to-transparent border border-fuchsia-500/20 rounded-2xl space-y-3.5">
              <div className="flex justify-between items-center flex-wrap gap-2 text-left">
                <div>
                  <h4 className="text-xs font-mono text-white font-bold uppercase">Sentinel Premium Registry</h4>
                  <p className="text-[10px] font-mono text-fuchsia-400 mt-1">AETHER_COGNITIVE_PRO_V4.2</p>
                </div>
                <CyberBadge variant="magenta">VERIFIED ACTIVE</CyberBadge>
              </div>

              <div className="h-1 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-fuchsia-400 rounded-full" style={{ width: '82%' }}></div>
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-500">
                <span>VERIFICATION CYCLE CONTINUOUS</span>
                <span>24 DAYS REMAINING</span>
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-[11px] text-slate-350">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold pl-1">Contract Properties</span>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between">
                <span>MONTHLY CREDIT PRICING:</span>
                <span className="text-white font-bold">$9.99 USD</span>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between">
                <span>RENEW EPOCH:</span>
                <span className="text-white font-bold">JULY 14, 2026</span>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between">
                <span>IDENTITY LICENSE SIGNATURE:</span>
                <span className="text-fuchsia-400 font-extrabold font-mono truncate max-w-[140px]">0x99AFA77...EE81</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 flex flex-col sm:flex-row gap-2 w-full">
              <CyberButton 
                variant="danger" 
                fullWidth
                className="py-2 px-3 text-[10px] font-mono sm:flex-1" 
                onClick={() => {
                  const conf = confirm('SYSTEM WARNING: Freeze your level-2 subscription contract? Sandbox models will immediately fallback.');
                  if (conf) alert('Access thread successfully paused.');
                }}
              >
                FREEZE ACCESS THREAD
              </CyberButton>
              <CyberButton 
                variant="slate" 
                fullWidth 
                className="py-2 text-[10px] font-mono sm:flex-1" 
                onClick={() => onNavigate && onNavigate('BillingActivity')}
              >
                CONFIGURE RETRY BILLING
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    case 'UpgradeActivity':
      return (
        <CyberPanel variant="magenta" title="Server Performance Resource Allocation" badge="Resource Sandbox" className="max-w-lg mx-auto">
          <div className="space-y-5 animate-fade-in font-sans">
            <span className="text-[10px] font-mono text-slate-550 block uppercase text-center font-bold">ALLOCATE MAXIMUM SUBNET DENSITY FOR YOUR CLIENT</span>
            
            {/* CPU Priority Option Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-slate-500">CPU PROCESSING PRIORITY:</span>
                <span className="text-fuchsia-400 font-bold uppercase">{
                  upgradeCpu === 1 ? 'ECO THREAD (LEVEL-0)' : upgradeCpu === 2 ? 'STANDARD CLOCK (LEVEL-1)' : 'MAXIMUM TURBO (LEVEL-2)'
                }</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="3" 
                value={upgradeCpu} 
                onChange={(e) => setUpgradeCpu(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-fuchsia-500" 
              />
            </div>

            {/* RAM Quota Option Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-slate-500">SYSTEM CACHE STORAGE ALLOCATION:</span>
                <span className="text-fuchsia-400 font-bold uppercase">{upgradeRam} GB SUBNET BUFFER</span>
              </div>
              <input 
                type="range" 
                min="16" 
                max="64" 
                step="16" 
                value={upgradeRam} 
                onChange={(e) => setUpgradeRam(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-fuchsia-500" 
              />
            </div>

            {/* Context Limit Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-slate-500">AI COGNITIVE WINDOW CAPACITY:</span>
                <span className="text-fuchsia-400 font-bold uppercase">{upgradeContext}K TOKENS</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="500" 
                step="100" 
                value={upgradeContext} 
                onChange={(e) => setUpgradeContext(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-fuchsia-500" 
              />
            </div>

            <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Estimated Credit Surcharge</span>
              <div className="flex justify-between font-mono text-xs">
                <span>ADDITIONAL RESOURCE PACKETS VALUE:</span>
                <span className="text-white font-extrabold">+ ${(upgradeCpu * 1.5 + (upgradeRam/16) * 1.2 + (upgradeContext/100) * 0.9).toFixed(2)} USD / MO</span>
              </div>
            </div>

            <CyberButton 
              variant="magenta" 
              fullWidth 
              className="py-3 text-[11px] font-mono uppercase"
              onClick={() => {
                alert(`Resource parameters committed. Allocation table modified inside kernel registries! CPU priority: Level-${upgradeCpu}, Cache RAM: ${upgradeRam}GB, Context Limits: ${upgradeContext}k.`);
              }}
            >
              COMMIT RESOURCE ALLOCATION UPGRADE
            </CyberButton>
          </div>
        </CyberPanel>
      );

    case 'BillingActivity':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto p-2">
          {/* Card Mockup Visualizer */}
          <CyberPanel variant="magenta" title="Holographic Card Visualization" badge="Card Decrypt">
            <div className="bg-gradient-to-tr from-indigo-950 via-slate-950 to-fuchsia-950 p-6 rounded-3xl border border-fuchsia-500/10 min-h-[12.5rem] flex flex-col justify-between text-left select-none relative overflow-hidden font-mono shadow-2xl">
              {/* Abstract Chip design */}
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="w-10 h-7 bg-amber-400/80 rounded-lg border border-yellow-300 shadow-inner flex items-center justify-center">
                    <div className="w-5 h-4 border border-amber-900/10 rounded-sm"></div>
                  </div>
                  <span className="text-[7px] text-fuchsia-400 uppercase font-extrabold tracking-widest block pt-1">Neural Connection Link</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white block">AETHER CHIP</span>
                  <span className="text-[8px] text-slate-500 block uppercase">SECURE SHELL GATE</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {/* Card Number */}
                <div className="text-base font-bold text-white tracking-widest pl-1 mt-4">
                  {cardNo ? cardNo : '•••• •••• •••• 4242'}
                </div>

                <div className="flex justify-between items-end flex-wrap gap-2 pt-1 font-mono text-[9px]">
                  <div>
                    <span className="text-[7px] text-slate-500 block uppercase tracking-wider pl-0.5">CONTRACT OPERATOR</span>
                    <span className="text-white font-extrabold uppercase mt-0.5 block">{cardHolder ? cardHolder : 'SENTINEL OPERATOR'}</span>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <span className="text-[7px] text-slate-500 block uppercase tracking-wider">EXPIRY</span>
                      <span className="text-white mt-0.5 block">{cardExp ? cardExp : '12/28'}</span>
                    </div>
                    <div>
                      <span className="text-[7px] text-slate-500 block uppercase tracking-wider">CVV</span>
                      <span className="text-white mt-0.5 block">{cardCvv ? cardCvv : '•••'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CyberPanel>

          {/* Real Input Registry Form */}
          <CyberPanel variant="neutral" title="Secure Payment Registry" badge="Encrypted Gateway">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-slate-550 uppercase font-bold">Input Card Details To Overwrite</span>
              <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl space-y-3.5 text-left">
                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Credit Card Number</label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                    <input
                      type="text"
                      placeholder="**** **** **** 4242"
                      value={cardNo}
                      maxLength={19}
                      onChange={(e) => setCardNo(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 text-xs text-white rounded-xl py-2.5 pl-10 pr-4 focus:outline-none focus:border-fuchsia-400 font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Card Holder NAME</label>
                  <input
                    type="text"
                    placeholder="SENTINEL OPERATOR"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                    className="w-full bg-slate-900/60 border border-slate-800 text-xs text-white rounded-xl py-2.5 px-4 focus:outline-none focus:border-fuchsia-400 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardExp}
                      maxLength={5}
                      onChange={(e) => setCardExp(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 text-xs text-white rounded-xl py-2.5 px-4 focus:outline-none focus:border-fuchsia-400 font-mono text-center"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">Security CVV</label>
                    <input
                      type="text"
                      placeholder="***"
                      value={cardCvv}
                      maxLength={3}
                      onChange={(e) => setCardCvv(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 text-xs text-white rounded-xl py-2.5 px-4 focus:outline-none focus:border-fuchsia-400 font-mono text-center"
                    />
                  </div>
                </div>
              </div>

              <CyberButton variant="magenta" fullWidth className="py-3 font-mono text-xs uppercase" onClick={() => {
                alert('Secure card details registered and written into off-grid secure enclave chip.');
              }}>
                SAVE BILLING CONTRACTS
              </CyberButton>
            </div>
          </CyberPanel>
        </div>
      );

    case 'PaymentHistoryActivity':
      return (
        <CyberPanel variant="magenta" title="Secure Payment Contracts Ledger" badge="Hash List" className="max-w-2xl mx-auto">
          <div className="space-y-4 animate-fade-in text-left">
            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Chronological ledger of payments verified:</span>
            
            <div className="space-y-2 font-mono text-[11px]">
              {[
                { date: 'JUN 19, 2026', desc: 'MONTHLY COGNITIVE PRO TIER ACCESS', val: '$9.99', tx: 'TX_82F992AA01', status: 'SUCCESS' },
                { date: 'MAY 19, 2026', desc: 'MONTHLY COGNITIVE PRO TIER ACCESS', val: '$9.99', tx: 'TX_11A721CC92', status: 'SUCCESS' },
                { date: 'APR 19, 2026', desc: 'INITIAL LEVEL-2 TRIAL ELEVATION', val: '$0.00', tx: 'TX_FREE771B82', status: 'VERIFIED' },
              ].map((txs, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-xs flex-wrap gap-2">
                    <span className="text-white font-extrabold">{txs.desc}</span>
                    <span className="text-fuchsia-400 font-extrabold">{txs.val}</span>
                  </div>
                  <div className="flex justify-between text-[9px] text-slate-500 flex-wrap gap-2">
                    <span>DATE: {txs.date} • RECEIPT COMPILATION: {txs.tx}</span>
                    <span className={txs.status === 'SUCCESS' ? 'text-emerald-400 font-bold' : 'text-cyan-400 font-bold'}>
                      {txs.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <CyberButton variant="slate" fullWidth className="py-2.5 text-[10px] font-mono uppercase" onClick={() => alert('Diagnostic query returned: Payment cache completely localized. Out of system reports is unneeded.')}>
                RELOAD DIRECTORIES CONTRACT RECEIPTS
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    case 'RewardsActivity':
      return (
        <CyberPanel variant="magenta" title="Aether Os Cognitive Rewards" badge="Harvest Hub" className="max-w-xl mx-auto">
          <div className="space-y-4 animate-fade-in font-sans text-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-900 text-left">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Accrued Energy Credits (ANC)</span>
                <span className="text-2xl font-mono text-fuchsia-400 block mt-1 font-extrabold">2,450 XP</span>
              </div>
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-900 text-left">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Claimable Subnet Badges</span>
                <span className="text-2xl font-mono text-cyan-400 block mt-1 font-extrabold">3 UNLOCKED</span>
              </div>
            </div>

            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Roster of claimable reward templates:</span>
            
            <div className="space-y-2 font-mono text-[11px]">
              {[
                { label: 'COSMIC PURPLE GLOW COMPILER THEME', desc: 'Personalize active frame overlay with purple gradients.', points: '800 ANC', claimed: false },
                { label: 'ALPHA BETA LEVEL-2 EXPERIMENTAL ACCESS', desc: 'Allows launching custom background server processes.', points: '1,500 ANC', claimed: false },
                { label: 'ZERO RETENTION QUARANTINE SECURITY CERTIFICATE', desc: 'Level-3 security parameters file.', points: 'CLAIMED', claimed: true },
              ].map((rew, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center gap-4">
                  <div className="text-left space-y-0.5 truncate max-w-[70%]">
                    <span className="text-neutral-200 uppercase tracking-wide block font-bold text-[10px] truncate">{rew.label}</span>
                    <p className="text-[9px] text-slate-500 font-sans truncate">{rew.desc}</p>
                  </div>
                  {rew.claimed ? (
                    <span className="text-[8px] font-mono text-slate-650 tracking-wide font-extrabold border border-slate-800 bg-slate-900/40 px-2 py-1 rounded">CLAIMED</span>
                  ) : (
                    <CyberButton variant="cyan" className="py-1 px-2 text-[8px] font-mono shrink-0" onClick={() => alert(`Sufficient energy verified. Reward template "${rew.label}" successfully injected into local asset directory files!`)}>
                      CLAIM {rew.points}
                    </CyberButton>
                  )}
                </div>
              ))}
            </div>
            
            <CyberButton variant="magenta" fullWidth className="py-2.5 text-[10px] text-center font-mono uppercase" onClick={() => alert('Broadcasting neural energy scanner... Harvesting on-device credentials activity.')}>
              HARVEST REWARDS ENERGY
            </CyberButton>
          </div>
        </CyberPanel>
      );

    case 'ReferralRewardsActivity':
      return (
        <CyberPanel variant="magenta" title="Decentralized Peer Referrals Hub" badge="Referrals Logs" className="max-w-xl mx-auto">
          <div className="space-y-4 animate-fade-in text-left">
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-900 flex justify-between items-center">
              <div>
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Referrals Tracked</span>
                <span className="text-2xl font-mono text-white block mt-0.5 font-extrabold">3 Active Loops</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold"> ANC Token Bonus Issued</span>
                <span className="text-xl font-mono text-fuchsia-400 block mt-0.5 font-bold">300 ANC</span>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold pl-1">Your Referral Address Link</span>
              <div className="flex bg-slate-950 border border-slate-900 rounded-xl focus-within:border-fuchsia-400 overflow-hidden">
                <input 
                  type="text" 
                  readOnly
                  value="https://aether.os/join?ref=SENTINEL_OPERATOR_77"
                  className="bg-transparent flex-1 text-xs text-fuchsia-400 p-2.5 pl-3 focus:outline-none font-mono text-[10px]"
                />
                <button 
                  onClick={() => alert('Copied referral link directly to operator workspace clipboard!')}
                  className="bg-slate-900 text-slate-400 px-3.5 hover:text-white border-l border-slate-850 hover:bg-slate-800 transition-colors uppercase font-mono text-[9px] cursor-pointer"
                >
                  COPY
                </button>
              </div>
            </div>

            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Linked Nodes Roster</span>
            <div className="space-y-2 font-mono text-[11px]">
              {[
                { user: 'Operator_Beta_8', status: 'ACTIVE HANDSHAKE', date: 'Jun 19, 2026', bonus: '+100 XP' },
                { user: 'Nebula_Chaser', status: 'VERIFIED CYCLE', date: 'Jun 12, 2026', bonus: '+100 XP' },
                { user: 'Satoshi_99', status: 'SYNCHRONIZING', date: 'May 28, 2026', bonus: '+100 XP' },
              ].map((ref, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center">
                  <div className="text-left leading-tight">
                    <span className="text-white block font-bold">@{ref.user}</span>
                    <span className="text-[9px] text-slate-500 block mt-0.5">{ref.status} • {ref.date}</span>
                  </div>
                  <span className="text-fuchsia-400 font-extrabold">{ref.bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </CyberPanel>
      );

    case 'CouponsActivity': {
      const handleVerifyCoupon = (e: React.FormEvent) => {
        e.preventDefault();
        if (!couponCode.trim()) return;
        setCouponStatus('checking');
        setTimeout(() => {
          if (['COGNITIVE_20', 'BLACKHAT_WINTER', 'FREE_COGNITION', 'AIS_PRO_99'].includes(couponCode.toUpperCase())) {
            setCouponStatus('success');
            const newCou = {
              code: couponCode.toUpperCase(),
              discount: '30% off special',
              status: 'VERIFIED'
            };
            setActiveCoupons([newCou, ...activeCoupons]);
            setCouponCode('');
          } else {
            setCouponStatus('invalid');
          }
        }, 1200);
      };

      return (
        <CyberPanel variant="magenta" title="Discount Tokens Key Coupon Validator" badge="Validator Engine" className="max-w-xl mx-auto">
          <div className="space-y-5 animate-fade-in font-sans text-left">
            <form onSubmit={handleVerifyCoupon} className="p-4 bg-slate-950 rounded-2xl border border-slate-900 space-y-3.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase block font-bold text-center">Resolve Discount Coupon Code Hash:</span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="E.G. AIS_PRO_99 or COGNITIVE_20"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                    if (couponStatus !== 'idle') setCouponStatus('idle');
                  }}
                  className="flex-1 bg-slate-900 border border-slate-800 text-[10px] font-mono p-2.5 rounded-xl text-white focus:outline-none focus:border-fuchsia-400 uppercase"
                />
                <CyberButton type="submit" variant="magenta" className="py-2.5 px-4 font-mono text-[10px] shrink-0">
                  {couponStatus === 'checking' ? 'DECRYPTING...' : 'VALIDATE'}
                </CyberButton>
              </div>

              {couponStatus === 'success' && (
                <p className="text-[10px] font-mono text-emerald-400 text-center animate-pulse mt-1">SUCCESS: Valid premium discount injected into active session registry!</p>
              )}
              {couponStatus === 'invalid' && (
                <p className="text-[10px] font-mono text-rose-500 text-center mt-1">ERROR: Structural coupon decryption failed. Invalid code.</p>
              )}
            </form>

            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Active Promo Coupons In Sandbox</span>
            <div className="space-y-2 font-mono text-[11px]">
              {activeCoupons.map((c, i) => (
                <div key={i} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center">
                  <div className="text-left leading-tight">
                    <span className="text-white block font-bold font-mono tracking-wider">{c.code}</span>
                    <span className="text-[9px] text-[#22d3ee] uppercase block mt-0.5">{c.discount} value injection</span>
                  </div>
                  <span className="text-fuchsia-400 font-extrabold uppercase text-[9px] border border-fuchsia-500/20 bg-fuchsia-500/5 px-2 py-0.5 rounded">
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'TrialActivity':
      return (
        <CyberPanel variant="magenta" title="Complimentary Trial Evaluation Cockpit" badge="Sandbox Clock" className="max-w-xl mx-auto">
          <div className="space-y-4 animate-fade-in font-sans text-left">
            <div className="p-6 bg-slate-1000 border border-slate-900 rounded-3xl text-center space-y-4 bg-slate-950/80">
              <div className="w-16 h-16 rounded-full border-4 border-fuchsia-500/30 border-t-fuchsia-400 animate-spin mx-auto flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">Complimentary Trial Temporal Countdown:</span>
                <p className="text-3xl font-mono font-extrabold text-white">72:14:45</p>
                <p className="text-[9px] text-fuchsia-400 font-mono mt-1">ACTIVE BENCHMARK ASSESSMENT: LEVEL-2 COGNITIONS</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Evaluated Sandbox Capabilities:</span>
              <div className="space-y-2 font-mono text-[11px]">
                {[
                  { name: 'Frontier model weight allocations', status: 'ACTIVE' },
                  { name: 'Custom parameters compilation registers', status: 'ACTIVE' },
                  { name: 'P2P high priority video grids pings', status: 'ACTIVE' },
                ].map((cap, i) => (
                  <div key={i} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center">
                    <span className="text-slate-350">{cap.name}</span>
                    <span className="text-fuchsia-400 font-bold uppercase text-[9px]">
                      {cap.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <CyberButton 
              variant="magenta" 
              fullWidth 
              className="py-3 text-[10px] font-mono uppercase"
              onClick={() => {
                alert('Verification requested. Supplementary trial test epochs granted! +24:00:00 successfully written into evaluation tickers.');
              }}
            >
              Extend Trial with Developer License
            </CyberButton>
          </div>
        </CyberPanel>
      );

    case 'MentionsActivity': {
      const filteredMentions = mentions.filter(m => {
        if (mentionsFilter === 'unread') return !m.read;
        return true;
      });

      const toggleRead = (id: string) => {
        setMentions(prev => prev.map(m => m.id === id ? { ...m, read: !m.read } : m));
      };

      const dismissMention = (id: string) => {
        setMentions(prev => prev.filter(m => m.id !== id));
      };

      const simulateMention = () => {
        const presets = [
          { author: 'Vector_Hacker', avatar: '🪐', message: 'Can @Sentinel_Operator check the routing on port 3000? Packets seem to be dropping.' },
          { author: 'Aether_OS_Companion', avatar: '🤖', message: 'Alert @Sentinel_Operator: Memory threshold exceeded in the quantum grid compiler.' },
          { author: 'Byte_Surfer', avatar: '⚡', message: 'Awesome workspace setup, @Sentinel_Operator! The live stream looks perfect.' }
        ];
        const randomPreset = presets[Math.floor(Math.random() * presets.length)];
        setMentions(prev => [{ id: `m_${Date.now()}`, ...randomPreset, time: 'Just now', read: false }, ...prev]);
      };

      const markAllMentionsRead = () => {
        setMentions(prev => prev.map(m => ({ ...m, read: true })));
      };

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none font-sans">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold uppercase flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" /> System Mentions Inbox
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Filter, inspect, and reply to tags addressing your node signature.</p>
            </div>
            <div className="flex gap-2">
              <CyberButton variant="cyan" onClick={simulateMention} className="px-3 py-1.5 text-[10px] font-mono flex items-center gap-1">
                <Play className="w-2.5 h-2.5" /> SIMULATE TAG
              </CyberButton>
              <CyberButton variant="slate" onClick={markAllMentionsRead} className="px-3 py-1.5 text-[10px] font-mono">
                MARK ALL READ
              </CyberButton>
            </div>
          </div>

          <div className="bg-slate-950/80 p-4 border border-slate-900 rounded-3xl space-y-4">
            {/* Filter bar */}
            <div className="flex gap-2 border-b border-slate-900 pb-3">
              <button
                onClick={() => setMentionsFilter('all')}
                className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                  mentionsFilter === 'all'
                    ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400 font-extrabold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:bg-slate-900'
                }`}
              >
                ALL MENTIONS ({mentions.length})
              </button>
              <button
                onClick={() => setMentionsFilter('unread')}
                className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                  mentionsFilter === 'unread'
                    ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400 font-extrabold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:bg-slate-900'
                }`}
              >
                UNREAD ({mentions.filter(m => !m.read).length})
              </button>
            </div>

            <div className="space-y-3 max-h-[25rem] overflow-y-auto pr-1">
              {filteredMentions.length === 0 ? (
                <div className="py-12 text-center text-slate-500 font-mono text-xs">
                  No mentions detected in this sector index.
                </div>
              ) : (
                filteredMentions.map((m) => (
                  <div
                    key={m.id}
                    className={`p-4 border rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-200 ${
                      m.read
                        ? 'bg-slate-950/40 border-slate-900/40 opacity-70'
                        : 'bg-slate-900/80 border-cyan-500/20'
                    }`}
                  >
                    <div className="flex items-start gap-3 text-left">
                      <span className="text-2xl p-2 bg-slate-950 rounded-xl border border-slate-850 self-start shrink-0">
                        {m.avatar}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-white uppercase">@{m.author}</span>
                          <span className="text-[10px] font-mono text-slate-500">{m.time}</span>
                          {!m.read && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                        </div>
                        <p className="text-xs text-slate-350 font-sans leading-relaxed">{m.message}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <button
                        onClick={() => toggleRead(m.id)}
                        className="p-1 px-3 bg-slate-900 border border-slate-850 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 rounded-xl text-[9px] font-mono cursor-pointer transition-colors"
                      >
                        {m.read ? 'MARK UNREAD' : 'MARK READ'}
                      </button>
                      <button
                        onClick={() => {
                          alert(`Handshake initialized: Sending mock telemetry response stream to @${m.author}...`);
                          toggleRead(m.id);
                        }}
                        className="p-1 px-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-xl text-[9px] font-mono cursor-pointer transition-all"
                      >
                        REPLY
                      </button>
                      <button
                        onClick={() => dismissMention(m.id)}
                        className="p-1.5 bg-slate-900 hover:bg-rose-500/10 border border-slate-850 hover:border-rose-500/20 text-slate-500 hover:text-rose-450 rounded-xl cursor-pointer transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
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

    case 'ReactionsActivity': {
      const filteredReactions = reactions.filter(r => {
        if (reactionsFilter === 'all') return true;
        return r.emoji === reactionsFilter;
      });

      const simulateReaction = () => {
        const users = ['Satoshi_99', 'Hex_Operator', 'Pixel_Princess', 'Cipher_Punk'];
        const emojis = ['⭐', '🔥', '❤️', '🚀'];
        const targets = ['Security key handshake approved', 'Bento Grid system optimization', 'AETHER OS V4.2 STABLE DEPLOYED', 'Chrono Telemetry Timeline'];
        
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        const randomTarget = targets[Math.floor(Math.random() * targets.length)];

        setReactions(prev => [{ id: `r_${Date.now()}`, user: randomUser, emoji: randomEmoji, target: randomTarget, time: 'Just now' }, ...prev]);
      };

      const clearAllReactions = () => {
        setReactions([]);
      };

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none font-sans">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold uppercase flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" /> Energy Reaction Logs
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Chronological record of reactive stamps placed by external indices.</p>
            </div>
            <div className="flex gap-2">
              <CyberButton variant="cyan" onClick={simulateReaction} className="px-3 py-1.5 text-[10px] font-mono flex items-center gap-1">
                <Play className="w-2.5 h-2.5" /> SIMULATE REACTION
              </CyberButton>
              <CyberButton variant="slate" onClick={clearAllReactions} className="px-3 py-1.5 text-[10px] font-mono">
                CLEAR ALL
              </CyberButton>
            </div>
          </div>

          <div className="bg-slate-950/80 p-4 border border-slate-900 rounded-3xl space-y-4">
            {/* Emoji filters */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-900">
              {['all', '⭐', '🔥', '❤️', '🚀'].map((em) => (
                <button
                  key={em}
                  onClick={() => setReactionsFilter(em)}
                  className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                    reactionsFilter === em
                      ? 'bg-amber-500/15 border-amber-400 text-amber-400 font-extrabold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:bg-slate-900'
                  }`}
                >
                  {em === 'all' ? 'ALL REACTION TYPES' : `ONLY ${em}`}
                </button>
              ))}
            </div>

            <div className="space-y-3 max-h-[25rem] overflow-y-auto pr-1">
              {filteredReactions.length === 0 ? (
                <div className="py-12 text-center text-slate-500 font-mono text-xs">
                  No reactions logged matching this filter key.
                </div>
              ) : (
                filteredReactions.map((r) => (
                  <div
                    key={r.id}
                    className="p-3.5 bg-slate-900/60 border border-slate-900/50 hover:border-amber-500/10 rounded-2xl flex items-center justify-between gap-4 transition-all"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className="text-xl p-2.5 bg-slate-950 rounded-xl border border-slate-850 shadow-inner">
                        {r.emoji}
                      </span>
                      <div className="space-y-0.5">
                        <p className="text-xs text-slate-300">
                          <span className="font-mono font-bold text-white uppercase">@{r.user}</span> reacted with {r.emoji} to
                        </p>
                        <code className="text-[10px] font-mono text-amber-400 bg-slate-950/20 px-1.5 py-0.5 rounded border border-slate-850/50">
                          "{r.target}"
                        </code>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0">{r.time}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    }

    case 'AnnouncementsActivity': {
      const filteredAnnounce = announcements.filter(a => {
        if (announcementsFilter === 'all') return true;
        return a.priority === announcementsFilter;
      });

      const simulateAnnouncement = () => {
        setAnnouncements(prev => [
          {
            id: `an_${Date.now()}`,
            title: `SECURE SUBNET SECTOR COMPILATION ${Date.now().toString().slice(-4)}`,
            body: 'A cybernetic gateway firewall upgrade has been scheduled. Operators will benefit from lower round-trip latency streams mapping and encrypted credential caches.',
            date: 'Jun 19, 2026',
            type: 'SECURITY',
            priority: 'NORMAL'
          },
          ...prev
        ]);
      };

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 text-left animate-fade-in select-none font-sans">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold uppercase flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-fuchsia-400" /> Aether Grid Announcements
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Official transmission bulletins and maintenance directives from administrators.</p>
            </div>
            <CyberButton variant="magenta" onClick={simulateAnnouncement} className="px-3.5 py-1.5 text-[10px] font-mono flex items-center gap-1.5">
              <Megaphone className="w-3.5 h-3.5 shrink-0" /> SIMULATE DISPATCH
            </CyberButton>
          </div>

          <div className="bg-slate-950/80 p-4 border border-slate-900 rounded-3xl space-y-4">
            {/* Filter tags */}
            <div className="flex gap-2 border-b border-slate-900 pb-3">
              {['all', 'CRITICAL', 'HIGH', 'NORMAL'].map((pr) => (
                <button
                  key={pr}
                  onClick={() => setAnnouncementsFilter(pr)}
                  className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                    announcementsFilter === pr
                      ? 'bg-fuchsia-500/15 border-fuchsia-400 text-fuchsia-400 font-extrabold'
                      : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:bg-slate-900'
                  }`}
                >
                  {pr === 'all' ? 'ALL ANNOUNCEMENTS' : `${pr} PRIORITY`}
                </button>
              ))}
            </div>

            <div className="space-y-4 max-h-[30rem] overflow-y-auto pr-1">
              {filteredAnnounce.map((a) => {
                const isExpanded = activeAnnounceId === a.id;
                const isCritical = a.priority === 'CRITICAL';
                return (
                  <div
                    key={a.id}
                    onClick={() => setActiveAnnounceId(isExpanded ? null : a.id)}
                    className={`p-4 border rounded-2xl cursor-pointer transition-all hover:bg-slate-900 ${
                      isExpanded
                        ? 'bg-slate-900 border-fuchsia-500/40 shadow-md'
                        : isCritical 
                          ? 'bg-rose-500/5 border-rose-500/20' 
                          : 'bg-slate-950/40 border-slate-900/60'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-3 flex-wrap text-left">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 flex-wrap text-left">
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border font-extrabold ${
                            isCritical 
                              ? 'bg-rose-500/20 border-rose-500/30 text-rose-400' 
                              : a.priority === 'HIGH' 
                                ? 'bg-amber-500/20 border-amber-500/30 text-amber-400' 
                                : 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                          }`}>
                            {a.priority} PRIORITY
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">{a.date}</span>
                        </div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase flex items-center gap-2">
                          {isCritical && <AlertTriangle className="w-3.5 h-3.5 text-rose-450 animate-bounce" />}
                          {a.title}
                        </h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isExpanded ? 'rotate-90 text-fuchsia-400' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-850 text-xs text-slate-300 font-sans leading-relaxed animate-fade-in">
                        {a.body}
                        <div className="mt-3 text-[10px] font-mono text-slate-550 flex items-center gap-1.5">
                          <span>TRANSMISSION_ID: </span>
                          <span className="text-fuchsia-400 select-all font-bold">AETHER-ANNT-{a.id.toUpperCase()}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    default:
      return (
        <div className="text-slate-400 p-8 text-center font-mono">
          <Settings className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p>Settings parameters active. Dynamic registry is online.</p>
        </div>
      );
  }
};
