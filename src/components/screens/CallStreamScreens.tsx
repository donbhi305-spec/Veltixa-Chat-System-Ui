import React, { useState, useEffect } from 'react';
import { 
  Phone, Video, Mic, Volume2, Grid, HelpCircle, PhoneOff, User, Radio, Users, 
  Activity, Play, Plus, Trash2, Clock, Settings, Monitor, PlayCircle, Calendar, 
  MessageSquare, PlusCircle, Download, VolumeX, Tv, Sparkles, Check, X, 
  ArrowUpRight, ArrowDownLeft, Disc, Laptop, Share2, Eye, ShieldAlert, Sliders, Waves
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge, VoiceWave } from '../CyberPanel';

interface ScreenProps {
  activityId: string;
}

export const CallStreamScreens: React.FC<ScreenProps> = ({ activityId }) => {
  // Call simulation states
  const [callActive, setCallActive] = useState(true);
  const [callDuration, setCallDuration] = useState('12:45');
  const [isMuted, setIsMuted] = useState(false);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [isCalling, setIsCalling] = useState(true);

  // Streaming simulation states
  const [streamActive, setStreamActive] = useState(false);
  const [streamTitle, setStreamTitle] = useState('CYBERNETICS COMPRESSION DIAGNOSTICS');
  const [streamTag, setStreamTag] = useState('PROGRAMMING');

  // Mic test diagnostics state
  const [micTesting, setMicTesting] = useState(false);
  const [micVolumeLevel, setMicVolumeLevel] = useState(0);

  // Audio recording player state
  const [activeRecordingId, setActiveRecordingId] = useState<string | null>(null);
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(35);

  // Screen share state
  const [selectedShareScreen, setSelectedShareScreen] = useState('Primary Display 01');

  // Live Stream chat states
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { user: 'sophia_dev', msg: 'System integrity seems stable at 60 FPS.', badge: 'DEV', isSelf: false },
    { user: 'alex_j', msg: 'Indeed, memory allocation has dropped significantly.', badge: 'HOST', isSelf: false },
    { user: 'neon_hacker', msg: 'Can you show the telemetry nodes stack?', badge: 'PEER', isSelf: false },
    { user: 'luna_m', msg: 'This UI aesthetics is beautiful!', badge: 'PEER', isSelf: false }
  ]);

  // -- NEW CREATOR & STREAM STATES --
  const [streamServerLocal, setStreamServerLocal] = useState('Global Relay Alpha (US-East)');
  const [streamResolution, setStreamResolution] = useState('1080p60');
  const [streamBitrate, setStreamBitrate] = useState(6000); // kbps
  const [streamLatencyPreset, setStreamLatencyPreset] = useState('Ultra-Low Latency');
  const [streamKeyVisible, setStreamKeyVisible] = useState(false);
  const [streamScheduledAt, setStreamScheduledAt] = useState('2026-06-25T19:00');
  const [isScheduled, setIsScheduled] = useState(false);
  const [soundboardLogs, setSoundboardLogs] = useState<string[]>([]);
  const [activePoll, setActivePoll] = useState({ question: 'Which framework should we code today?', options: [ { label: 'React / Vite', votes: 42 }, { label: 'Rust Wasm', votes: 19 }, { label: 'Go Server', votes: 11 } ], totalVotes: 72 });
  const [userVoted, setUserVoted] = useState(false);
  const [selectedAnalyticsTab, setSelectedAnalyticsTab] = useState<'realtime' | 'demographics' | 'network'>('realtime');
  const [streamMuteChatAlerts, setStreamMuteChatAlerts] = useState(false);
  const [customAudioGains, setCustomAudioGains] = useState({ mic: 85, stream: 70, music: 40 });


  // Audio test level generator loop
  useEffect(() => {
    let interval: any;
    if (micTesting) {
      interval = setInterval(() => {
        setMicVolumeLevel(Math.floor(Math.random() * 100));
      }, 150);
    } else {
      setMicVolumeLevel(0);
    }
    return () => clearInterval(interval);
  }, [micTesting]);

  // Handle stream chat submission
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setChatMessages(prev => [
      ...prev,
      { user: 'you_pilot', msg: chatInput.trim(), badge: 'USER', isSelf: true }
    ]);
    setChatInput('');
  };

  switch (activityId) {
    // =============================================================
    // 1. CALLS & COMMS - GENERAL & VOICE CALLS
    // =============================================================
    case 'CallsActivity':
    case 'VoiceCallActivity':
      return (
        <CyberPanel variant="cyan" title="Audio Pipeline // Voice Sync" badge="Handshake Active" className="max-w-md mx-auto">
          <div className="space-y-8 text-center py-6">
            <div className="space-y-1.5">
              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 relative animate-pulse">
                  <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden flex items-center justify-center border-2 border-slate-950">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                      alt="Sophia"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-sans text-slate-800 uppercase font-bold tracking-wide">Sophia Carter</h3>
              <CyberBadge variant="cyan">CORE HANDSHAKE STABLE</CyberBadge>
              <p className="text-xs text-slate-500 font-mono mt-0.5">DURATION: {callDuration}</p>
            </div>

            <div className="py-2.5 flex justify-center bg-white/50 p-3 rounded-2xl border border-slate-200 mx-5 shadow-xs">
              <VoiceWave active={callActive && !isMuted} colorClass="bg-indigo-600" />
            </div>

            <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all text-[10px] font-sans font-semibold cursor-pointer ${
                  isMuted 
                    ? 'bg-amber-500/10 border-amber-300 text-amber-600' 
                    : 'bg-white/70 border-slate-200 text-slate-650 hover:bg-white hover:border-slate-350'
                }`}
              >
                <Mic className="w-4 h-4 text-indigo-500" /> {isMuted ? 'UNMUTE' : 'MUTE'}
              </button>

              <button
                onClick={() => setSpeakerEnabled(!speakerEnabled)}
                className={`p-3.5 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all text-[10px] font-sans font-semibold cursor-pointer ${
                  speakerEnabled 
                    ? 'bg-indigo-50 border-indigo-200 text-indigo-600' 
                    : 'bg-white/70 border-slate-200 text-slate-650 hover:bg-white hover:border-slate-350'
                }`}
              >
                <Volume2 className="w-4 h-4 text-fuchsia-500" /> SPEAKER
              </button>

              <button className="p-3.5 rounded-2xl border bg-white/70 border-slate-200 text-slate-650 hover:bg-white hover:border-slate-350 flex flex-col items-center justify-center gap-1.5 text-[10px] font-sans font-semibold cursor-pointer">
                <Grid className="w-4 h-4 text-slate-550" /> KEYPAD
              </button>

              <button className="p-3.5 rounded-2xl border bg-white/70 border-slate-200 text-slate-650 hover:bg-white hover:border-slate-350 flex flex-col items-center justify-center gap-1.5 text-[10px] font-sans font-semibold cursor-pointer">
                <Users className="w-4 h-4 text-slate-550" /> PARLEY
              </button>
            </div>

            <div className="pt-2">
              <CyberButton variant="danger" glow fullWidth className="py-3.5">
                <PhoneOff className="w-4 h-4 shrink-0 animate-pulse" /> TERMINATE SYNCHRONIZATION
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 2. VIDEO CALL
    // =============================================================
    case 'VideoCallActivity':
      return (
        <CyberPanel variant="cyan" title="Video Pipeline // Optical Aura" badge="P2P Video Active" className="max-w-md mx-auto relative overflow-hidden">
          <div className="aspect-[4/3] w-full bg-slate-950 rounded-2xl relative overflow-hidden border border-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
              alt="Sophia View"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-slate-950/80 p-2 border border-cyan-500/20 px-4 rounded-xl backdrop-blur-md">
              <h5 className="text-[11px] font-sans font-bold text-white uppercase">Sophia Carter</h5>
              <p className="text-[9px] font-mono text-cyan-400">RESOLUTION: 1080P • LATENCY: 24ms</p>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-color-dodge opacity-20"></div>

            <div className="absolute bottom-4 right-4 w-28 aspect-[3/4] rounded-2xl border-2 border-indigo-500 bg-slate-950 shadow-lg overflow-hidden flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                alt="My Face"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-1 left-2 text-[8px] font-mono text-indigo-400 bg-slate-950/80 px-1 rounded border border-indigo-400/20">
                You @alex_j
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex justify-center items-center gap-4 max-w-xs mx-auto">
              <button className="w-11 h-11 bg-white hover:bg-slate-50 border border-slate-250 text-slate-650 hover:text-slate-900 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xs">
                <Mic className="w-4 h-4 shrink-0 text-slate-600" />
              </button>
              <button className="w-11 h-11 bg-white hover:bg-slate-50 border border-slate-250 text-slate-650 hover:text-slate-900 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xs">
                <Video className="w-4 h-4 shrink-0 text-slate-600" />
              </button>
              <button className="w-11 h-11 bg-white hover:bg-slate-50 border border-slate-250 text-slate-650 hover:text-slate-900 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xs">
                <Volume2 className="w-4 h-4 shrink-0 text-slate-600" />
              </button>
              <button className="w-12 h-12 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-xs">
                <PhoneOff className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 3. INCOMING CALL
    // =============================================================
    case 'IncomingCallActivity':
      return (
        <CyberPanel variant="amber" title="Incoming Handshake Protocol" badge="Ringing..." className="max-w-md mx-auto relative overflow-hidden">
          <div className="space-y-8 text-center py-6">
            <div className="space-y-3">
              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-r from-amber-500 via-fuchsia-500 to-indigo-500 relative animate-spin-slow">
                  <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden flex items-center justify-center p-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      alt="Liam Johnson"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 w-6 h-6 bg-amber-500 border-2 border-white rounded-full flex items-center justify-center animate-bounce text-white">
                  <Phone className="w-3 h-3" />
                </span>
              </div>
              <div>
                <h3 className="text-lg font-sans text-slate-800 uppercase font-bold tracking-wide">Liam Johnson</h3>
                <p className="text-xs text-amber-600 font-bold font-sans tracking-wide">REQUESTING NEURAL LINK SECURE</p>
                <p className="text-[10px] text-slate-400 font-mono mt-1">PORT // DUAL_COREG_42</p>
              </div>
            </div>

            <div className="py-2.5 flex justify-center bg-amber-50/40 p-3 rounded-2xl border border-amber-100 mx-5">
              <VoiceWave active colorClass="bg-amber-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <CyberButton 
                variant="cyan" 
                glow 
                fullWidth 
                onClick={() => alert('Handshake accepted, entering secure audio core...')}
                className="py-3.5"
              >
                <Check className="w-4 h-4 shrink-0" /> ACCEPT SYNC
              </CyberButton>

              <CyberButton 
                variant="danger" 
                fullWidth 
                onClick={() => alert('Escrowing link signal...')}
                className="py-3.5"
              >
                <X className="w-4 h-4 shrink-0" /> ESCROW DECLINE
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 4. OUTGOING CALL
    // =============================================================
    case 'OutgoingCallActivity':
      return (
        <CyberPanel variant="cyan" title="Outgoing Link Handshake" badge="Broadcasting..." className="max-w-md mx-auto">
          <div className="space-y-8 text-center py-6">
            <div className="space-y-4">
              <div className="relative inline-block">
                <div className="w-28 h-28 rounded-full p-1 bg-indigo-100 relative">
                  <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden flex items-center justify-center p-0.5">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
                      alt="Elena Rostova"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Pulsing signal indicators */}
                  <div className="absolute inset-0 rounded-full border-2 border-indigo-400/45 animate-ping opacity-60 pointer-events-none scale-125"></div>
                  <div className="absolute inset-0 rounded-full border border-fuchsia-400/35 animate-ping opacity-40 pointer-events-none scale-150" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-sans text-slate-800 uppercase font-bold tracking-wide">Elena Rostova</h3>
                <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider">Sending wave signals...</p>
                <p className="text-[10px] text-slate-400 font-sans mt-0.5">ESTIMATED SHUTTLE SPEED: 4.8Gbps</p>
              </div>
            </div>

            {/* List of active routing networks */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-[11px] font-mono">
              <div className="flex justify-between items-center text-slate-500">
                <span>PRIMARY COGNITIVE ROUTER:</span>
                <span className="text-indigo-600 font-bold">CONNECTED</span>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span>PEER DECENTRALIZED HOP:</span>
                <span className="text-emerald-600 font-bold">STABLE</span>
              </div>
              <div className="flex justify-between items-center text-slate-500">
                <span>RESERVE GRID SPECTRUM:</span>
                <span className="text-slate-400">STANDBY</span>
              </div>
            </div>

            <div className="pt-2">
              <CyberButton variant="danger" fullWidth className="py-3.5" onClick={() => alert('Broadcasting cancelled.')}>
                <PhoneOff className="w-4 h-4 shrink-0" /> CANCEL DISPATCH
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 5. CALL HISTORY
    // =============================================================
    case 'CallHistoryActivity':
      return (
        <CyberPanel variant="cyan" title="Symmetrical Comms Ledger" badge="12 total pings" className="max-w-xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-[10px] font-sans font-extrabold tracking-wider text-slate-405 uppercase">COMMUNICATION REPOS</span>
              <button 
                onClick={() => alert('Ledger logs completely wiped.')}
                className="text-[10px] font-sans font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> PURGE ARCHIVES
              </button>
            </div>

            <div className="divide-y divide-slate-150 space-y-1">
              {[
                { name: 'Sophia Carter', icon: ArrowUpRight, desc: 'Secure Voice Link', time: '10:45 AM', duration: '12:45m', color: 'text-indigo-600', isMissed: false },
                { name: 'Elena Rostova', icon: ArrowDownLeft, desc: 'Secure Voice Link', time: 'Yesterday', duration: '1h 04m', color: 'text-emerald-600', isMissed: false },
                { name: 'Liam Johnson', icon: ArrowDownLeft, desc: 'Missed Handshake', time: 'Yesterday', duration: '0:00m', color: 'text-rose-600', isMissed: true },
                { name: 'Noah Miller', icon: ArrowUpRight, desc: 'Standard Voice Link', time: '2 days ago', duration: '4:15m', color: 'text-indigo-550', isMissed: false },
                { name: 'Olivia Smith', icon: ArrowUpRight, desc: 'Peer Grid Hologram', time: '4 days ago', duration: '32:00m', color: 'text-indigo-600', isMissed: false }
              ].map((log, idx) => (
                <div key={idx} className="py-3.5 flex items-center justify-between hover:bg-white/30 px-2 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${log.isMissed ? 'bg-rose-50 border-rose-100' : 'bg-slate-50 border-slate-100'}`}>
                      <log.icon className={`w-4 h-4 ${log.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs font-sans font-bold text-slate-800">{log.name}</h4>
                        <CyberBadge variant={log.isMissed ? 'rose' : 'slate'} className="text-[8px] py-0 px-1.5">{log.duration}</CyberBadge>
                      </div>
                      <p className="text-[10px] text-slate-400 font-sans mt-0.5">{log.desc} • {log.time}</p>
                    </div>
                  </div>
                  <CyberButton 
                    variant="slate" 
                    className="py-1 px-3 text-[10px] font-sans"
                    onClick={() => alert(`Initiating direct redial to ${log.name}`)}
                  >
                    <Phone className="w-3 h-3 text-indigo-600" /> REDIAL
                  </CyberButton>
                </div>
              ))}
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 6. CONFERENCE CALL
    // =============================================================
    case 'ConferenceCallActivity':
      return (
        <CyberPanel variant="cyan" title="Symmetrical Quad-Node Matrix" badge="4 terminals connected" className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {/* Participant 1: Host */}
            <div className="aspect-video bg-slate-950 rounded-2xl relative overflow-hidden ring-2 ring-indigo-500 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                alt="Your camera"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white font-sans text-[10px] px-2 py-1 rounded-xl border border-indigo-400/25">
                • YOU @alex_j (HOST)
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-450">
                <Mic className="w-3 h-3" />
              </div>
            </div>

            {/* Participant 2 */}
            <div className="aspect-video bg-slate-950 rounded-2xl relative overflow-hidden border border-slate-900 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
                alt="Sophia"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white font-sans text-[10px] px-2 py-1 rounded-xl border border-slate-700/50">
                SOPHIA CARTER (PEER)
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-450">
                <Mic className="w-3 h-3" />
              </div>
            </div>

            {/* Participant 3 */}
            <div className="aspect-video bg-slate-950 rounded-2xl relative overflow-hidden border border-slate-800 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
                alt="Elena"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white font-sans text-[10px] px-2 py-1 rounded-xl border border-slate-700/50">
                ELENA ROSTOVA (PEER)
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-450" title="Muted by peer">
                <VolumeX className="w-3 h-3" />
              </div>
            </div>

            {/* Participant 4 */}
            <div className="aspect-video bg-slate-950 rounded-2xl relative overflow-hidden border border-slate-800 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
                alt="Liam"
                className="w-full h-full object-cover opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white font-sans text-[10px] px-2 py-1 rounded-xl border border-slate-700/50">
                LIAM JOHNSON (PEER)
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-450">
                <Mic className="w-3 h-3" />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-6 border-t border-slate-150 mt-4 max-w-sm mx-auto">
            <CyberButton variant="slate" onClick={() => alert('Everyone else has been muted.')} className="py-2.5 px-4 text-[10px]">
              <VolumeX className="w-3.5 h-3.5 text-slate-550" /> MUTE ALL
            </CyberButton>
            <CyberButton variant="slate" onClick={() => alert('Link sharing credentials copied.')} className="py-2.5 px-4 text-[10px]">
              <Share2 className="w-3.5 h-3.5 text-indigo-600" /> INVITE NODE
            </CyberButton>
            <CyberButton variant="danger" onClick={() => alert('Broadcasting terminated.')} className="py-2.5 px-4 text-[10px]">
              <PhoneOff className="w-3.5 h-3.5" /> CLOSE CONFE
            </CyberButton>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 7. SCREEN SHARE
    // =============================================================
    case 'ScreenShareActivity':
      return (
        <CyberPanel variant="cyan" title="Symmetrical Screen Cast Engine" badge="Ready to broadcast" className="max-w-xl mx-auto">
          <div className="space-y-5 pb-2">
            <div>
              <label className="text-[10px] font-sans font-bold text-slate-400 block mb-2 uppercase">SELECT CELL DISPATCH SOURCE</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Primary Display 01', size: '1920x1080 @ 60Hz', icon: Laptop },
                  { name: 'Terminal Shell Console', size: 'Active Prompt / SSH', icon: Grid },
                  { name: 'Hacking Sandbox Viewport', size: 'Debugger Emulator', icon: Activity },
                  { name: 'Factual Knowledge Note', size: 'Markdown Document', icon: Volume2 }
                ].map((sc, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedShareScreen(sc.name)}
                    className={`p-3.5 rounded-2xl text-left border cursor-pointer transition-all ${
                      selectedShareScreen === sc.name 
                        ? 'bg-indigo-50 border-indigo-300 text-indigo-700' 
                        : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-slate-350'
                    }`}
                  >
                    <sc.icon className={`w-4 h-4 mb-2 ${selectedShareScreen === sc.name ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <h5 className="text-xs font-sans font-bold">{sc.name}</h5>
                    <p className="text-[10px] text-slate-450 font-sans mt-0.5">{sc.size}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulating Cast Preview */}
            <div className="bg-slate-950 rounded-2xl p-4 border border-slate-900 aspect-video flex flex-col items-center justify-center text-center relative overflow-hidden group">
              {/* Complex graphic grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(244,63,94,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              
              <div className="relative z-15 space-y-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500 inline-block animate-pulse mb-1"></span>
                <p className="font-mono text-xs text-white uppercase tracking-widest font-bold">PREVIEWING CELL CAST: {selectedShareScreen.toUpperCase()}</p>
                <p className="text-[11px] text-slate-400 font-sans">Wait security parameters check... All credentials has been scrubbed.</p>
              </div>
            </div>

            <div className="pt-2">
              <CyberButton 
                variant="cyan" 
                glow 
                fullWidth 
                onClick={() => alert(`Starting screen transmission for ${selectedShareScreen}`)}
                className="py-3.5"
              >
                <Monitor className="w-4 h-4 shrink-0" /> START LIVE SIGNAL CAST
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 8. CALL RECORDINGS Vault
    // =============================================================
    case 'CallRecordingActivity':
      return (
        <CyberPanel variant="cyan" title="Audio Archives Vault" badge="3 files safe" className="max-w-xl mx-auto">
          <div className="space-y-5">
            <h3 className="text-xs font-sans font-bold text-slate-400 tracking-wider uppercase border-b border-indigo-50 pb-2.5">SECURE AUDIO REGISTERS</h3>

            <div className="space-y-2.5">
              {[
                { id: 'rec-1', name: 'audio_sync_aether_corridor.rec', size: '14.8 MB', date: 'Today, 2 hours ago', duration: '12:45' },
                { id: 'rec-2', name: 'quantum_physics_re_calibration.rec', size: '4.2 MB', date: 'Yesterday, 3:12 PM', duration: '3:10' },
                { id: 'rec-3', name: 'incident_moderation_meeting.rec', size: '25.6 MB', date: '2 days ago', duration: '1h 04:00' }
              ].map((rec, idx) => {
                const isSelected = activeRecordingId === rec.id;
                return (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isSelected 
                        ? 'bg-indigo-50/50 border-indigo-200 shadow-sm' 
                        : 'bg-white/60 border-slate-200/80 hover:bg-white/90 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${isSelected ? 'bg-indigo-100/50 text-indigo-700 border-indigo-200' : 'bg-slate-50 text-slate-500 border-slate-100'}`}>
                          <Disc className={`w-4 h-4 ${isSelected && isPlayingRecording ? 'animate-spin' : ''}`} />
                        </div>
                        <div>
                          <h4 className="text-xs font-mono font-bold text-slate-800 break-all">{rec.name}</h4>
                          <div className="flex gap-2 text-[10px] text-slate-450 font-sans mt-0.5">
                            <span>{rec.size}</span>
                            <span>•</span>
                            <span>{rec.date}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-1.5 shrink-0">
                        <CyberButton 
                          variant={isSelected ? 'cyan' : 'slate'} 
                          className="py-1 px-3 text-[10px]"
                          onClick={() => {
                            if (isSelected) {
                              setIsPlayingRecording(!isPlayingRecording);
                            } else {
                              setActiveRecordingId(rec.id);
                              setIsPlayingRecording(true);
                              setPlaybackProgress(10);
                            }
                          }}
                        >
                          {isSelected && isPlayingRecording ? 'PAUSE' : 'PLAY'}
                        </CyberButton>
                        <button 
                          onClick={() => alert(`Initiating secure local file transfer for ${rec.name}`)}
                          className="p-2 border border-slate-200 hover:border-slate-350 hover:bg-slate-100 rounded-xl transition-all cursor-pointer bg-white"
                          title="Warp download file"
                        >
                          <Download className="w-3.5 h-3.5 text-slate-600" />
                        </button>
                      </div>
                    </div>

                    {/* Show dynamic audio playback spectrum bar if this recording is actively playing */}
                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-indigo-100 space-y-2 animate-fade-in">
                        <div className="flex items-center justify-between text-[9px] font-mono text-indigo-600">
                          <span>04:12</span>
                          <span className="font-bold flex items-center gap-1"><Waves className="w-3 h-3 text-indigo-500" /> PLAYING AUDIT FILE</span>
                          <span>{rec.duration}</span>
                        </div>
                        <div className="w-full bg-indigo-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 h-full transition-all" style={{ width: `${playbackProgress}%` }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 9. CALL SETTINGS
    // =============================================================
    case 'CallSettingsActivity':
      return (
        <CyberPanel variant="cyan" title="Comms Diagnostic Deck" badge="Active audio check" className="max-w-xl mx-auto">
          <div className="space-y-4">
            <div className="p-4 bg-white/45 border border-slate-200/80 rounded-2xl space-y-3.5">
              <h4 className="text-xs font-sans font-bold text-slate-800 tracking-wide uppercase border-b border-slate-100 pb-1.5">HARDWARE LINK PREFERENCES</h4>
              
              <div className="space-y-2">
                <div>
                  <label className="text-[10px] font-sans font-bold text-slate-400 block mb-1 uppercase">MICROPHONE CAPTURE INPUT</label>
                  <select className="w-full bg-white border border-slate-200 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-indigo-400 font-sans">
                    <option>SYSTEM DEFAULTS [DUAL SHUTTLE COREG]</option>
                    <option>RESERVE SHURE SM7B REPLICA</option>
                  </select>
                </div>

                <div className="pt-1.5">
                  <label className="text-[10px] font-sans font-bold text-slate-400 block mb-1 uppercase">SPEAKER MATRIX OUTPUT</label>
                  <select className="w-full bg-white border border-slate-200 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-indigo-400 font-sans">
                    <option>AURA HEADPHONES SYMMETRICAL SOUND</option>
                    <option>INTEGRATED SYSTEM SPEAKERS BUFFER</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Live Mic Diagnosis Level Meter */}
            <div className="p-4 bg-white/45 border border-slate-200/80 rounded-2xl space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-sans font-bold text-slate-800 uppercase">MIC LEVEL REALTIME TEST</h4>
                <CyberButton 
                  variant={micTesting ? 'magenta' : 'slate'} 
                  className="py-1 px-3 text-[10px]"
                  onClick={() => setMicTesting(!micTesting)}
                >
                  {micTesting ? 'HALT TEST' : 'TRIGGER TESTING'}
                </CyberButton>
              </div>

              <div className="space-y-1.5">
                <div className="w-full bg-slate-100 h-3 rounded-xl overflow-hidden border border-slate-200 relative p-0.5">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 h-full rounded-full transition-all duration-100" 
                    style={{ width: `${micVolumeLevel}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                  <span>-INF DB</span>
                  <span>DECIBELS METER</span>
                  <span>0 DB PEAK</span>
                </div>
              </div>
            </div>

            {/* Smart options checkbox toggles */}
            <div className="p-4 bg-white/45 border border-slate-200/80 rounded-2xl space-y-2">
              <h4 className="text-xs font-sans font-bold text-slate-800 mb-1 uppercase">COGNITIVE COMPRESSION FLIGHT</h4>
              
              <label className="flex items-center gap-2.5 text-xs text-slate-600 font-sans cursor-pointer py-1.5 hover:bg-white/10 rounded">
                <input type="checkbox" defaultChecked className="rounded border-slate-250 text-indigo-600 focus:ring-indigo-500" />
                <div>
                  <span className="font-bold block text-slate-850">INTELLIGENT INTEGRITY NOISE CANCEL</span>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">Automatically identify and suppress air-conditioners/static wave chatter.</p>
                </div>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-slate-600 font-sans cursor-pointer py-1.5 hover:bg-white/10 rounded">
                <input type="checkbox" defaultChecked className="rounded border-slate-250 text-indigo-600 focus:ring-indigo-500" />
                <div>
                  <span className="font-bold block text-slate-850">AUTOMATIC GAIN SIGNAL LEADS</span>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">Smooth outgoing communication volume levels dynamically.</p>
                </div>
              </label>
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 10. LIVE STREAMS DIRECTORY
    // =============================================================
    case 'LiveStreamsActivity':
      return (
        <div className="space-y-4 max-w-4xl mx-auto p-2">
          <div className="flex justify-between items-center border-b border-white/20 pb-3">
            <h3 className="text-xs font-mono font-bold tracking-wider text-slate-500 uppercase">ACTIVE PLANETARY BEAMS</h3>
            <span className="text-[10px] font-mono bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded border border-indigo-100">
              ● 3 ONGOING BROADCASTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { 
                title: 'AI Cognitive Models Ingest & Matrix Tuning', 
                streamer: 'Sophia Carter', 
                watchers: '1,425 viewing', 
                tag: 'AI PROGRAMMING', 
                url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop' 
              },
              { 
                title: 'Retro-Futurism Synthwave Loop Synthesizers Live Jam', 
                streamer: 'Liam Johnson', 
                watchers: '820 viewing', 
                tag: 'CYBER SYNTH', 
                url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=300&auto=format&fit=crop' 
              },
              { 
                title: 'Security sandbox logs dryrun with code compiler', 
                streamer: 'Elena Rostova', 
                watchers: '2,941 viewing', 
                tag: 'UNDERGROUND LAB', 
                url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=300&auto=format&fit=crop' 
              }
            ].map((st, idx) => (
              <div key={idx} className="bg-white/45 border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
                <div className="relative aspect-video bg-slate-900 border-b border-slate-100">
                  <img src={st.url} alt={st.title} className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-all" referrerPolicy="no-referrer" />
                  <span className="absolute top-3 left-3 text-[8px] font-sans font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-rose-600 text-white animate-pulse">
                    LIVE
                  </span>
                  <span className="absolute bottom-3 right-3 text-[9px] font-sans font-bold bg-slate-950/80 text-white px-2 py-0.5 rounded-xl border border-white/10">
                    {st.watchers}
                  </span>
                </div>
                <div className="p-4 space-y-2 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[8px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-widest">{st.tag}</span>
                    <h4 className="text-xs font-sans font-bold text-slate-800 uppercase mt-1.5 leading-relaxed truncate-2-lines">{st.title}</h4>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[10px] text-slate-500 font-sans font-semibold">Broadcaster: {st.streamer}</span>
                    <button 
                      onClick={() => alert(`Connecting to ${st.streamer}'s live broadcast stream...`)}
                      className="text-indigo-600 hover:text-indigo-700 text-[10px] font-sans font-bold flex items-center gap-1 cursor-pointer"
                    >
                      WATCH <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    // =============================================================
    // 11. STREAM CHAT
    // =============================================================
    case 'StreamChatActivity':
      return (
        <CyberPanel variant="cyan" title="Live Broadcast Stream Chat" badge="324 online" className="max-w-md mx-auto h-[40rem] flex flex-col">
          <div className="flex flex-col h-full justify-between pb-1">
            
            {/* Thread of comments */}
            <div className="flex-grow space-y-2.5 overflow-y-auto max-h-[30rem] pr-1 pb-4">
              <div className="text-center py-2 border-b border-indigo-50/50">
                <span className="text-[9px] font-mono text-indigo-505 uppercase tracking-widest">ENCRYPTED STREAM FEED LOADED</span>
              </div>

              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`space-y-0.5 ${msg.isSelf ? 'text-right' : ''}`}>
                  <div className={`flex items-center gap-1.5 text-[10px] ${msg.isSelf ? 'justify-end' : ''}`}>
                    <span className={`text-[8px] px-1 py-0 px-1 rounded-sm uppercase tracking-wider ${
                      msg.badge === 'DEV' ? 'bg-indigo-650 text-white border border-indigo-500' :
                      msg.badge === 'HOST' ? 'bg-fuchsia-600 text-white' : 'bg-slate-150 text-slate-600'
                    }`}>
                      {msg.badge}
                    </span>
                    <span className="font-sans font-extrabold text-slate-800 break-all">{msg.user}</span>
                  </div>
                  <p className={`text-xs inline-block max-w-[85%] rounded-2xl p-2.5 px-3.5 font-sans leading-relaxed ${
                    msg.isSelf 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white border border-slate-205/60 text-slate-700 rounded-tl-none shadow-2xs'
                  }`}>
                    {msg.msg}
                  </p>
                </div>
              ))}
            </div>

            {/* Ingress comment form */}
            <form onSubmit={handleSendChatMessage} className="border-t border-slate-150 pt-3 flex gap-2">
              <input
                type="text"
                placeholder="Send secure public message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                className="flex-grow bg-white border border-slate-250 text-xs rounded-xl py-2 px-3.5 focus:outline-none focus:border-indigo-400 font-sans shadow-2xs"
              />
              <CyberButton type="submit" variant="cyan" className="py-2.5 px-3.5">
                SEND
              </CyberButton>
            </form>

          </div>
        </CyberPanel>
      );

    // =============================================================
    // 12. CLIPS REPOSITORY
    // =============================================================
    case 'ClipsActivity':
      return (
        <CyberPanel variant="cyan" title="Symmetrical Beam Clips archives" badge="3 total clips" className="max-w-xl mx-auto">
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-bold text-slate-400 tracking-wider uppercase border-b border-slate-100 pb-2.5">DECENTRALIZED CHRONO CLIPS</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Memory Stack Overflow Crash Apex', author: 'Sophia Carter', views: '1,241 views', len: '15s', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop' },
                { title: 'Retro modular synthesis loops tuning demo', author: 'Liam Johnson', views: '580 views', len: '28s', url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=300&auto=format&fit=crop' },
                { title: 'Interactive chatbot interface responses peak', author: 'Elena Rostova', views: '891 views', len: '12s', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=300&auto=format&fit=crop' }
              ].map((clip, idx) => (
                <div key={idx} className="bg-white/45 border border-slate-200 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group">
                  <div className="relative aspect-video bg-slate-900 border-b border-slate-100">
                    <img src={clip.url} alt={clip.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-all" referrerPolicy="no-referrer" />
                    <span className="absolute bottom-3 right-3 text-[9px] font-sans font-bold bg-slate-950/80 text-white px-2 py-0.5 rounded-xl border border-white/10">
                      {clip.len}
                    </span>
                    <button 
                      onClick={() => alert(`Playing segment clip: ${clip.title}`)}
                      className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-all text-white cursor-pointer"
                    >
                      <PlayCircle className="w-10 h-10 shrink-0 text-white/90 drop-shadow-md group-hover:scale-110 transition-all" />
                    </button>
                  </div>
                  <div className="p-3.5 space-y-1.5 flex-grow flex flex-col justify-between">
                    <h5 className="text-xs font-sans font-bold text-slate-800 uppercase leading-snug">{clip.title}</h5>
                    <div className="flex justify-between items-center text-[10px] text-slate-450 font-sans border-t border-slate-50 pt-2 mt-1">
                      <span>By {clip.author}</span>
                      <span>{clip.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 13. STREAM SCHEDULE
    // =============================================================
    case 'StreamScheduleActivity':
      return (
        <CyberPanel variant="cyan" title="Chronological Stream Agenda" badge="4 scheduled streams" className="max-w-xl mx-auto">
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-bold text-slate-400 tracking-wider uppercase border-b border-indigo-50 pb-2">UPCOMING COGNITIVE EVENTS</h4>

            <div className="space-y-3">
              {[
                { title: 'AI Parameter Ingest Matrix Tuning', date: 'TODAY AT 15:00 UTC', host: 'Sophia Carter', badge: 'AI & MATH', color: 'cyan' },
                { title: 'Retro-Synthesizer Modular Loop Jam Session', date: 'TOMORROW AT 20:50 UTC', host: 'Liam Johnson', badge: 'CYBER RETRO', color: 'orange' },
                { title: 'Group Rules Directive Public Consensus Forum', date: 'MONDAY, JUNE 22, 10:00 UTC', host: 'Elena Rostova', badge: 'LEGAL PROTOCOLS', color: 'purple' },
                { title: 'Deduplicating local storage caching directories tutorial', date: 'TUESDAY, JUNE 23, 14:00 UTC', host: 'Alexander J.', badge: 'NODE TUNING', color: 'cyan' }
              ].map((ev, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200/80 bg-white/60 hover:bg-white/95 hover:border-slate-350 transition-all flex justify-between items-start gap-3">
                  <div className="space-y-1 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-widest">{ev.badge}</span>
                      <span className="text-[9px] font-sans font-bold text-fuchsia-600 uppercase tracking-wider">{ev.date}</span>
                    </div>
                    <h5 className="text-xs font-sans font-extrabold text-slate-800 uppercase leading-snug pt-1">{ev.title}</h5>
                    <p className="text-[10px] text-slate-450 font-sans">Presented by Node Supervisor: <strong className="text-slate-600">{ev.host}</strong></p>
                  </div>
                  <CyberButton 
                    variant="slate" 
                    className="py-1 px-3 text-[10px] shrink-0"
                    onClick={() => alert(`Set recurring beacon warning alert for ${ev.title}!`)}
                  >
                    <Calendar className="w-3.5 h-3.5 text-indigo-600" /> ALERT ME
                  </CyberButton>
                </div>
              ))}
            </div>
          </div>
        </CyberPanel>
      );

    // =============================================================
    // 14. BROADCAST / CREATOR DASHBOARD / ANALYTICS (STREAMING MAIN INTERACTIVE)
    // =============================================================
    case 'StartStreamActivity':
      return (
        <div className="space-y-6 w-full max-w-5xl mx-auto p-2 animate-fade-in pb-12 text-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-50 pb-3">
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">SIGNAL INGEST TUNER</h3>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Configure encoder parameters, stream keys, and network routing configurations before broadcasting.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-mono px-2.5 py-0.5 rounded border ${
                streamActive ? 'bg-emerald-50 text-emerald-600 border-emerald-100 animate-pulse' : 'bg-slate-50 text-slate-500 border-slate-200'
              }`}>
                {streamActive ? '● SIGNAL BROADCAST LIVE' : '○ STANDBY MODE READY'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Col: Params Tweak Form */}
            <div className="md:col-span-2 space-y-4">
              <CyberPanel variant="cyan" title="Broadcast Signal Manifesto" badge="ENCODER SETTINGS">
                <div className="space-y-4 py-1.5 font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Stream Title */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">STREAM TITLE INDEX</label>
                      <input 
                        type="text" 
                        value={streamTitle}
                        onChange={(e) => setStreamTitle(e.target.value)}
                        className="w-full bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-500 shadow-2xs text-slate-800"
                        placeholder="e.g. SYSTEMS CALIBRATION STREAM"
                      />
                    </div>

                    {/* Stream Tag */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">TACTICAL METRICS TAG</label>
                      <select 
                        value={streamTag} 
                        onChange={(e) => setStreamTag(e.target.value)}
                        className="w-full bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-500 text-slate-700 shadow-2xs font-mono"
                      >
                        <option value="PROGRAMMING">PROGRAMMING</option>
                        <option value="AI CALIBRATING">AI CALIBRATING</option>
                        <option value="MODERATION">MODERATION</option>
                        <option value="RETRO SYNTHS">RETRO SYNTHS</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Server Selection */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">INGEST REGION SELECTOR</label>
                      <select 
                        value={streamServerLocal} 
                        onChange={(e) => setStreamServerLocal(e.target.value)}
                        className="w-full bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-500 text-slate-700 shadow-2xs"
                      >
                        <option value="Global Relay Alpha (US-East)">GLOBAL RELAY ALPHA (US-EAST)</option>
                        <option value="Subnet Transit Beta (EU-Central)">SUBNET TRANSIT BETA (EU-CENTRAL)</option>
                        <option value="Aether Axis Gamma (Asia-East)">AETHER AXIS GAMMA (ASIA-EAST)</option>
                        <option value="Concentric Orbit Delta (Oceania)">CONCENTRIC ORBIT DELTA (OCEANIA)</option>
                      </select>
                    </div>

                    {/* Host Resolution */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">RESOLUTION PRESET</label>
                      <select 
                        value={streamResolution} 
                        onChange={(e) => setStreamResolution(e.target.value)}
                        className="w-full bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-500 text-slate-700 shadow-2xs"
                      >
                        <option value="1080p60">1080P60 FPS // HIGH FIDELITY</option>
                        <option value="720p60">720P60 FPS // COMPRESSED SPEED</option>
                        <option value="1440p30">1440P30 FPS // QUAD RESOLUTION</option>
                        <option value="4k30">4K30 FPS // SHADOW ULTRA</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {/* Ingest Key Rate */}
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">BITRATE INGEST MATRIX</label>
                        <span className="text-[10px] font-mono text-cyan-600 font-bold">{streamBitrate} KBPS</span>
                      </div>
                      <input 
                        type="range" 
                        min="2500" 
                        max="12000" 
                        step="500"
                        value={streamBitrate}
                        onChange={(e) => setStreamBitrate(parseInt(e.target.value))}
                        className="w-full accent-cyan-600 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                      />
                    </div>

                    {/* Optimization Type */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">LATENCY PROFILE PRESETS</label>
                      <div className="flex gap-2">
                        {['Ultra-Low Latency', 'Standard Latency', 'Max Quality'].map((preset) => (
                          <button
                            key={preset}
                            onClick={() => setStreamLatencyPreset(preset)}
                            className={`flex-1 py-1.5 rounded-lg border text-[9px] font-mono font-bold uppercase transition-all cursor-pointer ${
                              streamLatencyPreset === preset 
                                ? 'bg-slate-900 border-slate-900 text-white shadow-xs' 
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-white'
                            }`}
                          >
                            {preset.replace(' Latency', '')}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Cryptographic stream credential key */}
                  <div className="space-y-1.5 pt-3.5 border-t border-slate-100">
                    <label className="text-[10px] font-mono text-slate-400 block uppercase font-bold">CRYPTO STREAM INGEST PASS-KEY</label>
                    <div className="flex gap-2">
                      <div className="flex-grow bg-slate-950 text-cyan-400 font-mono text-xs rounded-xl p-2.5 flex items-center justify-between border border-white/5 shadow-inner">
                        <span className="tracking-widest">
                          {streamKeyVisible ? 'live_aet_8892f91aef04cc718d9ef62c4a01' : '••••••••••••••••••••••••••••••••••••'}
                        </span>
                        <button 
                          onClick={() => setStreamKeyVisible(!streamKeyVisible)}
                          className="text-slate-440 hover:text-white font-sans text-[10px] font-bold tracking-normal uppercase cursor-pointer"
                        >
                          {streamKeyVisible ? 'HIDE' : 'REVEAL'}
                        </button>
                      </div>
                      <button 
                        onClick={() => alert('Stream credentials clipboard signature assigned to memory blocks.')}
                        className="bg-slate-50 hover:bg-slate-100 border border-slate-205 rounded-xl px-4 text-slate-700 text-xs font-mono font-bold cursor-pointer transition-all"
                      >
                        COPY KEYS
                      </button>
                    </div>
                  </div>

                  {/* Action row */}
                  <div className="pt-3 flex gap-3">
                    <button 
                      onClick={() => {
                        setStreamActive(true);
                        alert(`Broadcasting interface booted successfully. Signal: ${streamTitle} tuned to ${streamResolution} @ ${streamBitrate}kbps.`);
                      }}
                      className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[11px] py-3 rounded-xl border border-cyan-500/20 font-bold tracking-wide shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" /> INITIATE STREAM BROADCAST
                    </button>
                    {streamActive && (
                      <button 
                        onClick={() => {
                          setStreamActive(false);
                          alert('Broadcast encoder closed and active output link terminated.');
                        }}
                        className="bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 font-sans font-bold text-xs px-4 rounded-xl cursor-pointer transition-all"
                      >
                        SHUTDOWN SIGNAL
                      </button>
                    )}
                  </div>

                </div>
              </CyberPanel>
            </div>

            {/* Right Col: Signal Readiness Checklist & Stream Scheduler */}
            <div className="space-y-4">
              <CyberPanel variant="cyan" title="Node Checklist" badge="TELEMETRY SECURE">
                <div className="space-y-3.5 py-1.5 font-sans">
                  {[
                    { label: 'COSMIC CPU CORE INGESTION', val: '99.2% OK', icon: Laptop, col: 'bg-cyan-50 text-cyan-600' },
                    { label: 'PORT 3000 WEBSOCKET HANDSHAKE', val: 'SECURE_PIN', icon: Radio, col: 'bg-emerald-50 text-emerald-600' },
                    { label: 'AUDIO SOURCE PRESET DYNAMIC GAGE', val: 'VERIFIED', icon: Waves, col: 'bg-indigo-50 text-indigo-600' },
                    { label: 'ENCODER INTERACTIVE OVERLAY MATRIX', val: 'STABLE', icon: Sliders, col: 'bg-fuchsia-50 text-fuchsia-600' }
                  ].map((chk, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg ${chk.col} flex items-center justify-center`}>
                          <chk.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-mono tracking-tight text-slate-750 block">{chk.label}</span>
                      </div>
                      <span className="text-[9px] font-sans font-extrabold text-slate-800 bg-white border border-slate-200 px-1.5 py-0.5 rounded shadow-2xs uppercase tracking-wider">{chk.val}</span>
                    </div>
                  ))}
                </div>
              </CyberPanel>

              <CyberPanel variant="cyan" title="Broadcast Horizon Schedule" badge="EPOCH TIME">
                <div className="space-y-3.5 py-1 font-sans">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-400 block uppercase font-extrabold">FUTURE RECURRENCE EPOCH</label>
                    <input 
                      type="datetime-local" 
                      value={streamScheduledAt}
                      onChange={(e) => setStreamScheduledAt(e.target.value)}
                      className="w-full bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-500 shadow-2xs"
                    />
                  </div>

                  <button 
                    onClick={() => {
                      setIsScheduled(true);
                      alert(`Epoch stream broadcast registered at: ${streamScheduledAt}`);
                    }}
                    className="w-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-250 text-slate-650 font-mono text-[10px] py-2 rounded-xl font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" /> {isScheduled ? 'AMEND STREAM SCHEDULE' : 'LOCK SCHEDULE PROTOCOL'}
                  </button>

                  {isScheduled && (
                    <div className="p-3 bg-cyan-500/10 border border-cyan-500/15 rounded-xl text-center">
                      <span className="text-[10px] font-bold text-cyan-650 tracking-tight block">LOCKED: {streamScheduledAt.replace('T', ' ')}</span>
                      <p className="text-[9px] text-slate-500 block">Node notifications will ping subscribers 15 minutes before the boot sequence.</p>
                    </div>
                  )}
                </div>
              </CyberPanel>
            </div>
          </div>
        </div>
      );

    case 'CreatorDashboardActivity':
      return (
        <div className="space-y-6 w-full max-w-5xl mx-auto p-2 animate-fade-in pb-12 text-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-50 pb-3">
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">ACTIVE CREATOR CONSOLE</h3>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Control live camera metrics, monitor stream chats, deploy polls, and click spatial sound effects in real-time.</p>
            </div>
            
            {/* Control stats */}
            <div className="flex gap-2.5">
              <span className="text-[9px] font-mono bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded border border-indigo-100 uppercase font-black">
                FPS: 60.0
              </span>
              <span className="text-[9px] font-mono bg-fuchsia-50 text-fuchsia-600 px-2 py-0.5 rounded border border-fuchsia-100 uppercase font-black">
                PEERS: {streamActive ? '4,842' : '0'}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left: Broadcast feeds & Gain controls */}
            <div className="md:col-span-2 space-y-4">
              <CyberPanel variant="cyan" title="Console Monitor Matrix" badge={streamActive ? "TRANSMITTING LIVE" : "STANDBY ENGINE"}>
                <div className="space-y-4 py-1.5">
                  <div className="aspect-video w-full bg-slate-950 rounded-2xl relative overflow-hidden border border-slate-900 flex items-center justify-center shadow-inner">
                    {streamActive ? (
                      <>
                        <img
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
                          alt="Stream background"
                          className="w-full h-full object-cover opacity-50 animate-pulse"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <CyberBadge variant="rose">LIVE FEED</CyberBadge>
                          <CyberBadge variant="slate">{streamTag}</CyberBadge>
                        </div>
                        <div className="absolute text-center space-y-3 relative z-10 bg-slate-950/65 p-5 rounded-2xl border border-indigo-500/20 backdrop-blur-md max-w-xs">
                          <Tv className="w-8 h-8 text-cyan-400 animate-pulse mx-auto" />
                          <div>
                            <p className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase font-bold">SIGNAL ENCODING IN PROGRESS</p>
                            <p className="text-[9px] text-slate-200 mt-0.5 line-clamp-1">{streamTitle.toUpperCase()}</p>
                          </div>
                          <button 
                            onClick={() => {
                              setStreamActive(false);
                              alert('Active livestream transmission has been aborted.');
                            }}
                            className="bg-rose-600 hover:bg-rose-500 text-white font-mono text-[9px] py-1.5 px-3 rounded-lg font-black transition-all cursor-pointer shadow-sm mx-auto block uppercase"
                          >
                            SHUTDOWN PIPELINE
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="text-center space-y-3 p-5 max-w-sm">
                        <Radio className="w-9 h-9 text-slate-500 mx-auto animate-pulse" />
                        <div>
                          <h4 className="text-xs font-mono text-white uppercase font-extrabold">Broadcaster Signal Standby</h4>
                          <p className="text-[10px] text-slate-400 font-sans mt-0.5 leading-relaxed">The studio encoder has not been started. Access the Tune page to activate.</p>
                        </div>
                        <button 
                          onClick={() => {
                            setStreamActive(true);
                            alert('Broadcast channel linked directly to encoder parameters.');
                          }}
                          className="bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[9px] py-1.5 px-3 rounded-lg font-black transition-all cursor-pointer shadow-sm uppercase"
                        >
                          ACTIVATE STUDIO ENCODER
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Audio Mixer controls */}
                  <div className="space-y-3 bg-slate-50 p-4 border border-slate-200 rounded-2xl">
                    <span className="text-[9px] font-mono text-slate-400 block uppercase font-extrabold tracking-wider">CREATOR SPACIAL MIXER GAINS</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* mic gain */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono font-bold text-slate-700">
                          <span>MICROPHONE INPUT</span>
                          <span>{customAudioGains.mic}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={customAudioGains.mic}
                          onChange={(e) => setCustomAudioGains({ ...customAudioGains, mic: parseInt(e.target.value) })}
                          className="w-full accent-cyan-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
                        />
                      </div>

                      {/* stream sound gain */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono font-bold text-slate-700">
                          <span>SYSTEM CHANNELS</span>
                          <span>{customAudioGains.stream}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={customAudioGains.stream}
                          onChange={(e) => setCustomAudioGains({ ...customAudioGains, stream: parseInt(e.target.value) })}
                          className="w-full accent-indigo-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
                        />
                      </div>

                      {/* music gain */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono font-bold text-slate-700">
                          <span>SOUNDTRACK TRACKS</span>
                          <span>{customAudioGains.music}%</span>
                        </div>
                        <input 
                          type="range" 
                          min="0" 
                          max="100" 
                          value={customAudioGains.music}
                          onChange={(e) => setCustomAudioGains({ ...customAudioGains, music: parseInt(e.target.value) })}
                          className="w-full accent-fuchsia-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </CyberPanel>

              {/* Spacial Sound Effects triggers */}
              <CyberPanel variant="cyan" title="Digital Soundboard Modules" badge="SYNAPSE AUDIO FX">
                <div className="space-y-3 py-1 font-sans">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { effect: 'Airhorn Synth', tag: 'AIR_HORN', col: 'hover:border-indigo-400 text-indigo-600' },
                      { effect: 'Crowd Cheer', tag: 'CROWD_CHEER', col: 'hover:border-cyan-400 text-cyan-600' },
                      { effect: 'Cyber Chime', tag: 'CYBER_TUNE', col: 'hover:border-fuchsia-400 text-fuchsia-600' },
                      { effect: 'Failure Downer', tag: 'FAIL_DECK', col: 'hover:border-amber-400 text-amber-600' }
                    ].map((fx, idx) => (
                      <button 
                        key={idx}
                        onClick={() => {
                          const logTime = new Date().toLocaleTimeString();
                          setSoundboardLogs([ `[${logTime}] Triggered sound token: ${fx.effect}`, ...soundboardLogs.slice(0, 4) ]);
                          alert(`Sound effect synthesized: [${fx.tag}]`);
                        }}
                        className={`bg-white hover:bg-slate-50 border border-slate-200 hover:shadow-2xs rounded-xl p-2 text-center text-[10px] font-mono font-bold transition-all cursor-pointer ${fx.col}`}
                      >
                        🔊 {fx.effect.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {soundboardLogs.length > 0 && (
                    <div className="p-3 bg-slate-950 font-mono text-[9px] text-cyan-300 rounded-xl space-y-1 border border-white/5">
                      <span className="text-slate-500 uppercase block select-none">SOUNDBOARD TERMINAL LOGS:</span>
                      {soundboardLogs.map((log, lIdx) => (
                        <div key={lIdx} className="line-clamp-1">{log}</div>
                      ))}
                    </div>
                  )}
                </div>
              </CyberPanel>
            </div>

            {/* Right: Broadcast Interaction & Live Chat overlay */}
            <div className="space-y-4">
              
              {/* Poll Module */}
              <CyberPanel variant="cyan" title="Spatial Participant Poll" badge="INTERACTION LINK">
                <div className="space-y-3.5 py-1 font-sans">
                  <h4 className="text-xs font-mono font-bold text-slate-850 uppercase">{activePoll.question}</h4>
                  
                  <div className="space-y-2">
                    {activePoll.options.map((opt, optIdx) => {
                      const ratio = activePoll.totalVotes > 0 ? (opt.votes / activePoll.totalVotes) * 100 : 0;
                      return (
                        <div key={optIdx} className="space-y-1">
                          <button 
                            disabled={userVoted}
                            onClick={() => {
                              const updatedOptions = activePoll.options.map((o, idx) => idx === optIdx ? { ...o, votes: o.votes + 1 } : o);
                              setActivePoll({
                                ...activePoll,
                                options: updatedOptions,
                                totalVotes: activePoll.totalVotes + 1
                              });
                              setUserVoted(true);
                              alert(`Vote successfully registered for: ${opt.label}`);
                            }}
                            className="w-full flex justify-between bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 p-2 rounded-xl text-left text-[11px] font-bold text-slate-800 disabled:opacity-90 disabled:cursor-not-allowed cursor-pointer transition-all"
                          >
                            <span>{opt.label}</span>
                            <span className="font-mono text-cyan-600">{opt.votes} votes</span>
                          </button>
                          
                          <div className="w-full bg-slate-100 h-1.5 rounded-xl overflow-hidden relative">
                            <div 
                              className="bg-indigo-500 h-full transition-all duration-300 rounded-xl"
                              style={{ width: `${ratio}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between items-center text-[8px] font-mono text-slate-400">
                    <span>{activePoll.totalVotes} PEER VOTES TOTAL</span>
                    <span>{userVoted ? '✓ YOUR VOTE ASSIGNED' : '● VOTE DECK OPEN'}</span>
                  </div>
                </div>
              </CyberPanel>

              {/* Chat Overlay monitor */}
              <CyberPanel variant="cyan" title="Stream Dialogue Pipeline" badge="REAL-TIME MONITOR">
                <div className="space-y-3 font-sans py-1">
                  
                  {/* messages box */}
                  <div className="space-y-2.5 bg-slate-50 p-3.5 border border-slate-180 rounded-2xl h-48 overflow-y-auto shadow-inner">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className="text-xs space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[9px] font-mono font-extrabold px-1 py-0.2 rounded ${
                            msg.badge === 'DEV' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                            msg.badge === 'HOST' ? 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100' :
                            msg.badge === 'USER' ? 'bg-cyan-50 text-cyan-600 border border-cyan-100' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {msg.badge}
                          </span>
                          <span className="font-extrabold text-slate-800 font-mono text-[10px]">{msg.user}</span>
                        </div>
                        <p className="text-slate-600 leading-normal pl-1.5 font-sans border-l border-slate-200 text-[11px]">{msg.msg}</p>
                      </div>
                    ))}
                  </div>

                  {/* sender input form */}
                  <form onSubmit={handleSendChatMessage} className="flex gap-2">
                    <input 
                      type="text"
                      placeholder="Send alert message payload..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="flex-grow bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-500 shadow-2xs text-slate-800"
                    />
                    <button 
                      type="submit"
                      className="bg-slate-900 text-white font-mono px-3.5 text-xs rounded-xl font-bold hover:bg-slate-805 cursor-pointer shadow-xs"
                    >
                      SEND
                    </button>
                  </form>
                </div>
              </CyberPanel>

            </div>

          </div>
        </div>
      );

    case 'StreamAnalyticsActivity':
      return (
        <div className="space-y-6 w-full max-w-5xl mx-auto p-2 animate-fade-in pb-12 text-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-50 pb-3">
            <div>
              <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">STREAM TELEYMETRY ANALYTICS</h3>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">Inspect peak concurrent subscriber links, node geographical packet drops, and bandwidth transmission values.</p>
            </div>
            
            {/* Tab Filters */}
            <div className="flex gap-1.5">
              {(['realtime', 'demographics', 'network'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedAnalyticsTab(tab)}
                  className={`px-3 py-1 rounded-lg border font-mono text-[9px] font-bold uppercase transition-all cursor-pointer ${
                    selectedAnalyticsTab === tab 
                      ? 'bg-fuchsia-650 text-white border-fuchsia-600 shadow-2xs' 
                      : 'bg-white text-slate-550 border-slate-200/80 hover:bg-slate-50'
                  }`}
                >
                  {tab === 'realtime' ? 'CO-DIAGNOSTIC CONCURRENCY' : tab === 'demographics' ? 'REGIONAL PEERS' : 'TRANSMISSION SPEED'}
                </button>
              ))}
            </div>
          </div>

          {/* Stat cards grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'PEAK CONCURRENCY NODE COUNT', value: selectedAnalyticsTab === 'realtime' ? '12,842' : '4,210', flag: '+14% target', col: 'text-cyan-600' },
              { label: 'TOTAL DIALOGUE MESSAGE PAYLOAD', value: '45,892', flag: '+8% pulse', col: 'text-indigo-600' },
              { label: 'TRANSMITTED STAGES WIDTH', value: '142.8 GB', flag: 'Flat buffer', col: 'text-fuchsia-600' },
              { label: 'SYNC PACKET DROPPED FREQUENCY', value: '0.00%', flag: 'Optimal stability', col: 'text-emerald-600' }
            ].map((st, sIdx) => (
              <div key={sIdx} className="bg-white/45 border border-slate-205 rounded-2xl p-4 space-y-1.5 hover:shadow-xs hover:border-fuchsia-450/20 transition-all">
                <span className="text-[8px] font-mono tracking-wider font-extrabold text-slate-400 block uppercase">{st.label}</span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-xl font-mono font-bold ${st.col}`}>{st.value}</span>
                  <span className="text-[8px] font-sans font-bold text-emerald-600">{st.flag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Svg dynamic timeline visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <CyberPanel variant="magenta" title="Concurrency Wave Amplitude Over Time Stream" badge="SATELLITE DOWNLINK TELEMETRY">
                <div className="space-y-4 py-2 font-sans">
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-450">
                    <span>TIMELINE INTERVALS ANALYSIS (MINUTES)</span>
                    <span>ACTIVE TARGET: {selectedAnalyticsTab.toUpperCase()}</span>
                  </div>

                  <div className="relative aspect-[21/9] w-full border border-slate-150 rounded-2xl bg-slate-950 p-4 flex items-end justify-between gap-1 overflow-hidden">
                    {/* Grid overlay lines */}
                    <div className="absolute inset-x-0 top-1/4 border-b border-white/5 pointer-events-none"></div>
                    <div className="absolute inset-x-0 top-2/4 border-b border-white/5 pointer-events-none"></div>
                    <div className="absolute inset-x-0 top-3/4 border-b border-white/5 pointer-events-none"></div>

                    {/* Bars simulating telemetry growth depending on tab selected */}
                    {[
                      { time: 'M05', percent: selectedAnalyticsTab === 'realtime' ? 25 : selectedAnalyticsTab === 'demographics' ? 44 : 50 },
                      { time: 'M10', percent: selectedAnalyticsTab === 'realtime' ? 40 : selectedAnalyticsTab === 'demographics' ? 38 : 68 },
                      { time: 'M15', percent: selectedAnalyticsTab === 'realtime' ? 55 : selectedAnalyticsTab === 'demographics' ? 62 : 45 },
                      { time: 'M20', percent: selectedAnalyticsTab === 'realtime' ? 70 : selectedAnalyticsTab === 'demographics' ? 50 : 85 },
                      { time: 'M25', percent: selectedAnalyticsTab === 'realtime' ? 65 : selectedAnalyticsTab === 'demographics' ? 72 : 92 },
                      { time: 'M30', percent: selectedAnalyticsTab === 'realtime' ? 88 : selectedAnalyticsTab === 'demographics' ? 82 : 79 },
                      { time: 'M35', percent: selectedAnalyticsTab === 'realtime' ? 95 : selectedAnalyticsTab === 'demographics' ? 90 : 98 }
                    ].map((step, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 z-10 group relative">
                        {/* Hover values tooltip */}
                        <span className="absolute -top-7 bg-indigo-950 text-cyan-300 font-mono text-[8px] px-1.5 py-0.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-all shadow pointer-events-none">
                          {selectedAnalyticsTab === 'network' ? `${step.percent * 1.5} Mbps` : `${step.percent * 144} Nodes`}
                        </span>

                        <div className="w-full bg-slate-900 h-28 md:h-36 rounded-t-lg overflow-hidden flex items-end border border-white/5">
                          <div 
                            className="bg-gradient-to-t from-indigo-500 to-fuchsia-500 w-full rounded-t-lg transition-all duration-300 scale-y-100 origin-bottom hover:brightness-110"
                            style={{ height: `${step.percent}%` }}
                          ></div>
                        </div>
                        <span className="text-[8px] font-mono text-slate-450">{step.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                    <span>STAGING CHANNELS COMPOSITE</span>
                    <span>Consensus Stability Index: 100% stable</span>
                  </div>
                </div>
              </CyberPanel>
            </div>

            {/* Regional / Geo Breakdown column */}
            <div>
              <CyberPanel variant="magenta" title="Regional Nodes Spectrum" badge="PEER DENSITY">
                <div className="space-y-4 py-1.5 font-sans">
                  {[
                    { country: 'EUROPEAN UNION UNION', count: '4,512 nodes', share: '35%', color: 'w-[35%] bg-cyan-500' },
                    { country: 'NORTH AMERICAN CONTINENT', count: '4,110 nodes', share: '32%', color: 'w-[32%] bg-indigo-500' },
                    { country: 'ASIA AXIS SUB-NET', count: '2,950 nodes', share: '23%', color: 'w-[23%] bg-fuchsia-500' },
                    { country: 'OCEANIA CIRCLE BASES', count: '1,270 nodes', share: '10%', color: 'w-[10%] bg-amber-500' }
                  ].map((geo, gIdx) => (
                    <div key={gIdx} className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono font-bold tracking-tight text-slate-800">
                        <span>{geo.country}</span>
                        <span>{geo.count}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-xl border border-slate-200">
                        <div className={`h-full rounded-xl ${geo.country.startsWith('EU') ? 'bg-cyan-500' : geo.country.startsWith('NORTH') ? 'bg-indigo-500' : geo.country.startsWith('ASIA') ? 'bg-fuchsia-500' : 'bg-amber-500'}`} style={{ width: geo.share }}></div>
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-slate-400">
                        <span>GEO MATRIX BANDWIDTH</span>
                        <span>{geo.share} WEIGHT</span>
                      </div>
                    </div>
                  ))}

                  <button 
                    onClick={() => alert('Encrypted CSV metric spreadsheets generated and downloaded successfully to user storage units.')}
                    className="w-full bg-slate-900 text-white hover:bg-slate-800 font-mono text-[9px] py-2.5 rounded-xl tracking-wide font-black cursor-pointer transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" /> EXPORT SYSTEM ANALYTICS SHEET
                  </button>
                </div>
              </CyberPanel>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="text-slate-500 p-8 text-center font-sans space-y-2">
          <Activity className="w-12 h-12 text-slate-400 mx-auto mb-2 animate-bounce" />
          <h4 className="text-sm font-sans font-extrabold text-slate-850 uppercase">COMMS SYSTEM ERROR OR UNMAPPED SECTION</h4>
          <p className="text-xs">Connecting diagnostics with peer nodes protocols... Symmetrical telemetry checks active.</p>
        </div>
      );
  }
};
