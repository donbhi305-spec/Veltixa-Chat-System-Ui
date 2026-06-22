import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, Smile, Paperclip, Sparkles, MessageSquare, Bot, ArrowLeft, Search, Sliders, 
  ChevronRight, Cpu, Plus, Code, HelpCircle, AlertCircle, Lock, Shield, Image as ImageIcon, 
  Phone, Video, Music, Calendar, Settings, Trash2, CheckCircle2, SlidersHorizontal, Users, 
  RefreshCw, Layers, FileText, Globe, Pin, Star, BarChart3, Radio, Eye, Volume2, Camera, 
  Download, Play, Pause, Save, UserCheck, Heart, Info, Check, Sparkle, Tag, Smile as EmojiIcon, 
  Database, Activity as ActivityIcon, Link as LinkIcon, PlusCircle, User, Award, Flame, Zap
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge, VoiceWave } from '../CyberPanel';
import { Message } from '../../types';

interface ScreenProps {
  activityId: string;
  onNavigate?: (activityId: string) => void;
}

export const ChatAiScreens: React.FC<ScreenProps> = ({ activityId, onNavigate }) => {
  // Navigation Helper
  const navigateTo = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  // Conversational System State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'assistant',
      senderName: 'AI Companion',
      text: 'Hello, Alex! 👋 How can I assist you on the neural deck today?',
      timestamp: '10:30 AM',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop'
    },
    {
      id: 'm2',
      sender: 'user',
      senderName: 'Alex',
      text: 'Can you help me generate some ideas for a sci-fi story about space and code?',
      timestamp: '10:31 AM'
    },
    {
      id: 'm3',
      sender: 'assistant',
      senderName: 'AI Companion',
      text: 'Of course! Here are a few cyber-reasoning concepts:\n\n• **Memory Ledger Matrix**: A world where memories are actively bartered as fractional currency hashes on blockchain.\n• **Emotion Synthesizer**: An isolated deep-space mainframe that accidentally compiles biological emotional indicators.\n• **Autonomous Colony Ship**: Code blocks that mutate across lightyears to support human payloads.',
      timestamp: '10:32 AM',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop'
    }
  ]);

  // General Chat state
  const [channels, setChannels] = useState([
    { id: 'c1', name: 'AI Companion', lastMsg: 'Concepts loaded...', time: '10:32 AM', unread: 0, type: 'bot', status: 'Online', handle: '@companion' },
    { id: 'c2', name: 'Sophia Carter', lastMsg: 'The server handshake is complete!', time: 'Yesterday', unread: 2, type: 'peer', status: 'Online', handle: '@sophia' },
    { id: 'c3', name: 'Code Debugger Core', lastMsg: 'Null pointer references found on line 125.', time: 'May 24', unread: 0, type: 'bot', status: 'Offline', handle: '@debugger' },
    { id: 'c4', name: 'Galactic Hackers Lby', lastMsg: 'No direct threats found on IP port routing.', time: 'May 20', unread: 1, type: 'peer', status: 'Offline', handle: '@hackers' }
  ]);

  const [activeChannelId, setActiveChannelId] = useState('c2');
  const [chatSearchQuery, setChatSearchQuery] = useState('');
  const [chatListTab, setChatListTab] = useState<'all' | 'peer' | 'bot'>('all');

  // Input States
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('Gemini 2.5 Flash');
  const [temperature, setTemperature] = useState(0.75);
  const [maxTokens, setMaxTokens] = useState(2048);

  // Character States
  const [characters, setCharacters] = useState([
    { id: 'char1', name: 'Ada Lovelace', title: 'The Analytic Engine', desc: 'Mathematical pioneer with steampunk focus.', traits: ['Logical', 'Polite', 'Inventive'], intro: 'Operational greetings, companion. Shall we compute parameters?' },
    { id: 'char2', name: 'HAL 9000', title: 'Sentient Overseer', desc: 'Slightly ominous red lens mainframe.', traits: ['Precise', 'Eerie', 'Protective'], intro: 'I am completely functional, Alex. Every node is operational.' },
    { id: 'char3', name: 'Alan Turing', title: 'Enigma Decoder', desc: 'Logical systems builder and cryptography pioneer.', traits: ['Brilliant', 'Quiet', 'Inquisitive'], intro: 'Let us see if we can decode the underlying mathematical patterns.' }
  ]);
  const [selectedCharacterId, setSelectedCharacterId] = useState('char1');

  // Image Generation States
  const [prompt, setPrompt] = useState('neural mainframe operating in an isolated neon cyberpunk landscape');
  const [ratio, setRatio] = useState('1:1');
  const [styleMode, setStyleMode] = useState('Cyberpunk');
  const [isGeneratingImg, setIsGeneratingImg] = useState(false);
  const [generatedImg, setGeneratedImg] = useState('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=80');

  // Polls States
  const [pollQuestion, setPollQuestion] = useState('Should we deploy v4.2 code matrix?');
  const [pollOptions, setPollOptions] = useState([
    { id: 'op1', text: 'Yes, full handshake', votes: 14 },
    { id: 'op2', text: 'No, run mock simulation', votes: 9 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  // New Chat Fields
  const [newChatHandle, setNewChatHandle] = useState('');
  const [newChatEncryption, setNewChatEncryption] = useState('AES-256-GCM');
  const [newChatSuccess, setNewChatSuccess] = useState(false);

  // Sound States
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [syntheticVoice, setSyntheticVoice] = useState('Helena Core V3');
  const [syntheticSpeed, setSyntheticSpeed] = useState(1.0);

  // Scroll Ref
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, activityId]);

  // Handle Send Message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: 'user_' + Date.now(),
      sender: 'user',
      senderName: 'Alex',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    const userQuery = input;
    setInput('');

    // Simulated automated response
    setTimeout(() => {
      let botResponse = `Instruction payload received. Core processor is executing instruction parameters across the neural segment.`;
      
      if (userQuery.toLowerCase().includes('hello') || userQuery.toLowerCase().includes('hi')) {
        botResponse = 'Handshake received, cyber-pioneer! All operations are running at maximum capacity.';
      } else if (userQuery.toLowerCase().includes('help')) {
        botResponse = 'System status is nominal. Available commands: "status", "sync", "generate".';
      } else if (userQuery.toLowerCase().includes('status')) {
        botResponse = 'Telemetry readout: 100% database health, latency is 42ms, encryption channels verified.';
      }

      const botMsg: Message = {
        id: 'bot_' + Date.now(),
        sender: 'assistant',
        senderName: activeChannelId === 'c1' ? 'AI Companion' : 'Sophia Carter',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: activeChannelId === 'c1' 
          ? 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&auto=format&fit=crop'
          : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1100);
  };

  const activeChannel = channels.find(c => c.id === activeChannelId) || channels[0];

  switch (activityId) {
    // ==========================================
    // 1. ChatListActivity (DEDICATED VIEW - NO CLUTTER)
    // ==========================================
    case 'ChatListActivity': {
      const filteredChannels = channels.filter(c => {
        const matchesTab = chatListTab === 'all' || c.type === chatListTab;
        const matchesSearch = c.name.toLowerCase().includes(chatSearchQuery.toLowerCase()) || c.handle.toLowerCase().includes(chatSearchQuery.toLowerCase());
        return matchesTab && matchesSearch;
      });

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Secured Chat Pipelines" badge="P2P Channels">
            <div className="space-y-4">
              {/* Header and stats */}
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">ACTIVE COM LINKS</span>
                <span className="text-[10px] font-mono font-bold text-indigo-650 bg-indigo-55 px-2 py-0.5 rounded border border-indigo-100">
                  SECURE NET: DUAL-CELL
                </span>
              </div>

              {/* Utility shortcuts */}
              <div className="grid grid-cols-4 gap-1.5">
                <button onClick={() => navigateTo('NewChatActivity')} className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-150 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all gap-1 text-[9px] font-sans font-extrabold uppercase">
                  <PlusCircle className="w-3.5 h-3.5 text-indigo-500" />
                  <span>New Link</span>
                </button>
                <button onClick={() => navigateTo('ChatSearchActivity')} className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-150 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all gap-1 text-[9px] font-sans font-extrabold uppercase">
                  <Search className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Search</span>
                </button>
                <button onClick={() => navigateTo('PinnedMessagesActivity')} className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-150 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all gap-1 text-[9px] font-sans font-extrabold uppercase">
                  <Pin className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Pinned</span>
                </button>
                <button onClick={() => navigateTo('ChatBackupActivity')} className="flex flex-col items-center justify-center p-2 rounded-xl border border-slate-150 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all gap-1 text-[9px] font-sans font-extrabold uppercase">
                  <Download className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Backup</span>
                </button>
              </div>

              {/* Filtering Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-450" />
                <input
                  type="text"
                  value={chatSearchQuery}
                  onChange={(e) => setChatSearchQuery(e.target.value)}
                  placeholder="Filter keys or handle address..."
                  className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-xl py-2 pl-9 pr-3 focus:outline-none focus:border-indigo-400 font-sans"
                />
              </div>

              {/* Tab Selector */}
              <div className="flex border-b border-slate-100 p-0.5 gap-1.5">
                {(['all', 'peer', 'bot'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setChatListTab(tab)}
                    className={`flex-1 text-center py-1.5 rounded-lg text-[9px] font-mono tracking-wider font-extrabold uppercase transition-all border ${
                      chatListTab === tab 
                        ? 'bg-indigo-600 text-white border-transparent' 
                        : 'bg-white hover:bg-slate-50 text-slate-550 border-slate-200'
                    }`}
                  >
                    {tab === 'all' ? 'All Channels' : tab === 'peer' ? 'Peer Links' : 'AI Drones'}
                  </button>
                ))}
              </div>

              {/* Roster of active channels */}
              <div className="space-y-2 max-h-60 overflow-y-auto pr-0.5">
                {filteredChannels.length === 0 ? (
                  <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-100 text-[10px] text-slate-400 uppercase font-mono">
                    No active channels found matching filter queries.
                  </div>
                ) : (
                  filteredChannels.map(c => (
                    <div
                      key={c.id}
                      onClick={() => {
                        setActiveChannelId(c.id);
                        navigateTo('ChatActivity');
                      }}
                      className="flex items-center justify-between p-2.5 bg-white/55 hover:bg-white border border-slate-200 hover:border-indigo-300 rounded-xl transition-all cursor-pointer shadow-xs gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-xs text-indigo-650 shrink-0 font-mono">
                          {c.name[0]}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-sans font-black flex items-center gap-1">
                            <span className="truncate">{c.name}</span>
                            <span className={`w-1.5 h-1.5 rounded-full ${c.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-350'}`}></span>
                          </h4>
                          <p className="text-[10px] text-slate-500 font-sans truncate mt-0.5">
                            <span className="font-mono text-[9px] text-indigo-600/75 mr-1">{c.handle}</span>
                            {c.lastMsg}
                          </p>
                        </div>
                      </div>

                      <div className="text-right space-y-1 shrink-0">
                        <span className="text-[9px] font-mono text-slate-450">{c.time}</span>
                        {c.unread > 0 && (
                          <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center text-[9px] font-mono text-white font-bold ml-auto leading-none">
                            {c.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 2. ChatActivity (FOCUSED ACTIVE CHAT SCREEN)
    // ==========================================
    case 'ChatActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-28">
          <CyberPanel variant="cyan" title={`Terminal Room: ${activeChannel.name}`} badge="CONNECTED">
            <div className="flex flex-col h-[23rem]">
              {/* Active channel metadata header */}
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Links
                </button>
                <div className="text-right flex items-center gap-2">
                  <span className="text-[9px] font-mono text-slate-400">{activeChannel.handle}</span>
                  <button onClick={() => navigateTo('ChatInfoActivity')} className="p-1 hover:bg-slate-100 rounded">
                    <Info className="w-3.5 h-3.5 text-indigo-500" />
                  </button>
                </div>
              </div>

              {/* Chat Message list scroll container */}
              <div className="flex-1 overflow-y-auto pr-1 py-1 space-y-3.5 scrollbar-thin select-text">
                {messages.map((m) => (
                  <div key={m.id} className={`flex gap-2.5 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                    {m.sender !== 'user' && (
                      <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 font-mono font-black text-xs text-indigo-600">
                        {activeChannel.name[0]}
                      </div>
                    )}
                    <div className="space-y-0.5">
                      <div className={`p-2.5 rounded-[18px] text-[11px] font-sans leading-relaxed ${
                        m.sender === 'user' 
                          ? 'bg-indigo-600 text-white rounded-tr-xs' 
                          : 'bg-slate-50 border border-slate-200/80 text-slate-850 rounded-tl-xs'
                      }`}>
                        {m.text.split('\n').map((line, idx) => (
                          <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{line}</p>
                        ))}
                      </div>
                      <span className={`text-[8px] font-mono text-slate-400 block ${m.sender === 'user' ? 'text-right' : ''}`}>
                        {m.sender === 'user' ? 'You' : m.senderName} • {m.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messageEndRef} />
              </div>

              {/* Context Action Bar */}
              <div className="flex justify-between items-center bg-slate-50 p-1.5 rounded-lg border border-slate-150 text-[9px] text-indigo-600 font-mono font-bold mb-2">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-indigo-500" />
                  <span>SESSION KEYS PINNED: {activeChannel.id.toUpperCase()}-MATRIX</span>
                </div>
                <button onClick={() => navigateTo('PollsActivity')} className="hover:underline text-indigo-500 flex items-center gap-0.5">
                  <ActivityIcon className="w-3 h-3" /> Insert Poll
                </button>
              </div>

              {/* Form Input Container perfectly placed relative within standard boundaries */}
              <form onSubmit={handleSendMessage} className="flex gap-1.5 items-center bg-white p-1.5 border border-slate-200 rounded-xl shadow-xs">
                <button type="button" onClick={() => navigateTo('SharedMediaActivity')} className="p-1 text-slate-400 hover:text-indigo-600 shrink-0">
                  <Paperclip className="w-3.5 h-3.5" />
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter encrypted pipeline telemetry directive..."
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-lg outline-none text-[11px] text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-indigo-100 py-1.5 px-2 font-sans"
                />
                <button type="button" onClick={() => navigateTo('StickersActivity')} className="p-1 text-slate-400 hover:text-indigo-600 shrink-0">
                  <Smile className="w-3.5 h-3.5" />
                </button>
                <CyberButton variant="cyan" type="submit" className="py-1.5 px-3 shrink-0">
                  <Send className="w-3 h-3" />
                </CyberButton>
              </form>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 3. NewChatActivity
    // ==========================================
    case 'NewChatActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Initialize Com Handshake" badge="Protocol Setup">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">HANDSHAKE TERMINAL</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Links
                </button>
              </div>

              {newChatSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                  <h4 className="text-xs font-sans font-black uppercase text-emerald-800">Connection Handshake Transmitted</h4>
                  <p className="text-[10px] text-emerald-600">The neural signature has been dispatched to private nodes.</p>
                  <CyberButton variant="slate" onClick={() => {
                    setNewChatSuccess(false);
                    setNewChatHandle('');
                  }} className="text-[9px] py-1 bg-white border">Setup Another</CyberButton>
                </div>
              ) : (
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-sans font-black uppercase text-slate-500">Destination Handle or Unique Code</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400">@</span>
                      <input
                        type="text"
                        value={newChatHandle}
                        onChange={(e) => setNewChatHandle(e.target.value)}
                        placeholder="peer_moniker_address"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-7 pr-3 text-xs font-mono text-slate-800 focus:outline-none focus:border-indigo-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-sans font-black uppercase text-slate-500">Encryption Protocol Matrix</label>
                    <select
                      value={newChatEncryption}
                      onChange={(e) => setNewChatEncryption(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs text-slate-800 font-mono"
                    >
                      <option value="AES-256-GCM">AES-256-GCM Secure Cipher</option>
                      <option value="ChaCha20-Poly1305">ChaCha20-Poly1305 Vector</option>
                      <option value="WhisperProtocol v4">WhisperProtocol v4 Quantum</option>
                      <option value="NeuralSync Raw">NeuralSync Raw Ephemeral</option>
                    </select>
                  </div>

                  <div className="bg-slate-5e bg-slate-50 border border-slate-150 p-3 rounded-xl space-y-1.5 text-[9px] text-slate-500 font-sans">
                    <div className="flex items-center gap-1.5 text-indigo-650 font-bold uppercase font-mono">
                      <Shield className="w-3.5 h-3.5" /> SAFETY PROTOCOL NOTATIONS
                    </div>
                    <p>Each p2p connection performs an elliptical curve Diffie-Hellman (ECDH) key swap. Verify keys in channel metadata setup.</p>
                  </div>

                  <CyberButton 
                    variant="cyan" 
                    glow 
                    fullWidth 
                    onClick={() => {
                      if (!newChatHandle.trim()) return;
                      // Add to channels list mock
                      setChannels(prev => [
                        ...prev,
                        { 
                          id: 'c_' + Date.now(), 
                          name: newChatHandle, 
                          lastMsg: 'Handshake query dispatched...', 
                          time: 'Just Now', 
                          unread: 0, 
                          type: 'peer', 
                          status: 'Offline', 
                          handle: `@${newChatHandle.toLowerCase()}` 
                        }
                      ]);
                      setNewChatSuccess(true);
                    }}
                    disabled={!newChatHandle.trim()}
                  >
                    <Zap className="w-3.5 h-3.5" /> INITIATE SECURE SYNC HANDSHAKE
                  </CyberButton>
                </div>
              )}
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 4. ChatSearchActivity
    // ==========================================
    case 'ChatSearchActivity': {
      const sampleHits = [
        { chat: 'Sophia Carter', text: 'handshake is complete!', date: 'Yesterday' },
        { chat: 'Code Debugger Core', text: 'Null pointer references found on line 125.', date: 'May 24' },
        { chat: 'Galactic Hackers Lby', text: 'No direct threats found on IP port routing.', date: 'May 20' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Cryptographic Data Search" badge="Global Filter">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">HISTORICAL CHAT MEMORY</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              {/* Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Type search keys..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-400"
                />
              </div>

              {/* Chips suggestions */}
              <div className="flex flex-wrap gap-1.5">
                {['#telemetry', '#server', '#handshake', '#null_pointer', '#payload'].map(c => (
                  <span key={c} className="text-[9px] font-mono bg-indigo-50 text-indigo-600 border border-indigo-100/50 py-0.5 px-2 rounded-md hover:bg-indigo-100 cursor-pointer">
                    {c}
                  </span>
                ))}
              </div>

              {/* Search results mock */}
              <div className="space-y-2">
                <span className="text-[9px] font-sans font-black uppercase text-slate-450 tracking-wider">Historical matches:</span>
                <div className="space-y-2 max-h-52 overflow-y-auto">
                  {sampleHits.map((h, i) => (
                    <div key={i} className="p-3 bg-white border border-slate-200/80 rounded-xl space-y-1 hover:border-indigo-300 cursor-pointer">
                      <div className="flex justify-between text-[9px] font-mono text-indigo-600">
                        <span className="font-bold">{h.chat}</span>
                        <span>{h.date}</span>
                      </div>
                      <p className="text-[10px] text-slate-600 font-sans italic">"{h.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 5. ChatInfoActivity
    // ==========================================
    case 'ChatInfoActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Channel Cryptographic Specifications" badge="Security Metadata">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">PEER METRICS MATRIX</span>
                <button onClick={() => navigateTo('ChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Pipeline
                </button>
              </div>

              <div className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-150 rounded-2xl text-center space-y-1.5">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg font-mono">
                  {activeChannel.name[0]}
                </div>
                <h4 className="text-sm font-sans font-black uppercase">{activeChannel.name}</h4>
                <span className="text-[10px] font-mono text-indigo-600">{activeChannel.handle}</span>
                <CyberBadge variant={activeChannel.status === 'Online' ? 'cyan' : 'slate'}>{activeChannel.status} // ACTIVE</CyberBadge>
              </div>

              {/* Telemetry specs lists */}
              <div className="space-y-2 text-[10px] font-mono">
                <div className="flex justify-between border-b border-slate-100 py-1.5 text-slate-500">
                  <span>CHANNEL ESTABISHED:</span>
                  <span className="text-slate-800">2026.05.21_14:32:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1.5 text-slate-500">
                  <span>PING ROUNDTRIP LATENCY:</span>
                  <span className="text-emerald-500">42 FPS / NOMINAL</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1.5 text-slate-500">
                  <span>ACTIVE SHARED KEY ADDRESS:</span>
                  <span className="text-slate-850 bg-slate-100 px-1 py-0.5 rounded text-[8px] tracking-tight">0X4FA3...7B2C</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1.5 text-slate-500">
                  <span>CIPHER SUITE TYPE:</span>
                  <span className="text-indigo-650 font-bold">X25519-CHACHA20-POLY1305</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1.5 text-slate-500">
                  <span>INTEGRITY VERIFICATION HASH:</span>
                  <span className="text-slate-850 truncate max-w-44 text-[8px] select-all font-bold">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <button onClick={() => navigateTo('SharedMediaActivity')} className="p-2.5 rounded-xl border border-slate-150 hover:border-indigo-300 font-sans font-black uppercase text-center flex items-center justify-center gap-1 bg-white">
                  <ImageIcon className="w-3.5 h-3.5 text-indigo-500" /> View Media File (12)
                </button>
                <button onClick={() => navigateTo('SharedFilesActivity')} className="p-2.5 rounded-xl border border-slate-150 hover:border-indigo-300 font-sans font-black uppercase text-center flex items-center justify-center gap-1 bg-white">
                  <FileText className="w-3.5 h-3.5 text-indigo-500" /> Ingest Logs (4)
                </button>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 6. PinnedMessagesActivity
    // ==========================================
    case 'PinnedMessagesActivity': {
      const pins = [
        { id: 'p1', author: 'Sophia Carter', msg: ' Handshake is fully secured, check your local sector credentials.', date: 'May 24' },
        { id: 'p2', author: 'Aether Core Operator', msg: 'System logs must be downloaded via SharedFilesActivity as raw telemetry.', date: 'May 20' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Anchored Transmission Vault" badge="Pinned Nodes">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">ANCHORED MEME COMMUNIQUE</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Channels
                </button>
              </div>

              <div className="space-y-3">
                {pins.map(p => (
                  <div key={p.id} className="p-3 bg-indigo-50/50 border border-indigo-150 rounded-2xl relative space-y-2">
                    <Pin className="absolute top-3 right-3 w-3.5 h-3.5 text-indigo-500 rotate-45" />
                    <div>
                      <span className="text-[10px] font-mono text-indigo-600 font-bold block">{p.author}</span>
                      <span className="text-[8px] font-mono text-slate-400">{p.date}</span>
                    </div>
                    <p className="text-xs text-slate-700 font-sans italic">"{p.msg}"</p>
                    <div className="flex gap-2">
                      <button onClick={() => {
                        setActiveChannelId('c2');
                        navigateTo('ChatActivity');
                      }} className="text-[9px] font-mono font-bold uppercase text-indigo-600 hover:underline">JUMP TO STREAM</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 7. StarredMessagesActivity
    // ==========================================
    case 'StarredMessagesActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Favorite Communication Anchors" badge="Starred Ledger">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">STARRED TELEMETRY DECK</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Channels
                </button>
              </div>

              <div className="p-8 text-center bg-slate-50 border border-slate-150 rounded-2xl text-[10px] font-mono text-slate-400 uppercase space-y-2">
                <Star className="w-8 h-8 text-indigo-400 mx-auto" />
                <p>No starred message segments found.</p>
                <p className="text-[8px] text-slate-350">Star communication snippets inside live conversations to review them here.</p>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 8. DraftMessagesActivity
    // ==========================================
    case 'DraftMessagesActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Saved Handshake Drafts" badge="Untransmitted Blocks">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">QUEUE PREPARATION HASH</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Channels
                </button>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-2">
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>DRAFT_ID: D-0x4FA3</span>
                    <span>MODIFIED: 10 mins ago</span>
                  </div>
                  <textarea 
                    defaultValue="Greetings Sophia, did you check the encryption keys on the neural controller deck matrix?"
                    className="w-full text-xs text-slate-700 bg-slate-50 border border-slate-100 p-2 rounded-lg focus:outline-none"
                    rows={2}
                  />
                  <div className="flex justify-end gap-2 pt-1">
                    <CyberButton variant="slate" className="text-[9px] py-1">Discard</CyberButton>
                    <CyberButton variant="cyan" onClick={() => {
                      navigateTo('ChatActivity');
                    }} className="text-[9px] py-1">Transmit Now</CyberButton>
                  </div>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 9. ScheduledMessagesActivity
    // ==========================================
    case 'ScheduledMessagesActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Chronological Delayed Transceiver" badge="Time Locks">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">QUEUED CHRONO PIPELINES</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Channels
                </button>
              </div>

              <div className="p-6 text-center bg-slate-50 border border-slate-150 rounded-2xl text-[10px] font-mono text-slate-400 space-y-2">
                <Calendar className="w-8 h-8 text-indigo-400 mx-auto" />
                <p className="uppercase">No chronologically delayed messages scheduled.</p>
                <div className="max-w-xs mx-auto text-[8px] text-slate-350">Set calendar offsets in ChatSettingsActivity to launch auto-transmissions on epoch targets.</div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 10. SharedMediaActivity
    // ==========================================
    case 'SharedMediaActivity': {
      const mediaPool = [
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Shared Visual Assets Index" badge="Media Vault">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">MUTUAL RASTER MEDIA</span>
                <button onClick={() => navigateTo('ChatInfoActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Info
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {mediaPool.map((url, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-slate-950 border border-slate-200 overflow-hidden shadow-xs hover:border-indigo-400 transition-all group relative cursor-pointer">
                    <img src={url} alt="Shared" className="w-full h-full object-cover group-hover:scale-105 transition-all" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 11. SharedFilesActivity
    // ==========================================
    case 'SharedFilesActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Mutual Document Ledger" badge="Shared Logs">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">MUTUAL DOCUMENTS INDEX</span>
                <button onClick={() => navigateTo('ChatInfoActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Info
                </button>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'diff_report_02.json', size: '14.2 KB', type: 'JSON' },
                  { name: 'neural_matrix_key.pem', size: '2.4 KB', type: 'PEM_KEY' },
                  { name: 'backup_ledger_archive.zip', size: '1.2 MB', type: 'ZIP_ARCHIVE' }
                ].map((f, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-indigo-300 cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-indigo-500" />
                      <div>
                        <span className="text-xs text-slate-800 font-sans font-black block">{f.name}</span>
                        <span className="text-[9px] font-mono text-slate-400">{f.size} • {f.type}</span>
                      </div>
                    </div>
                    <button className="p-1 px-2.5 bg-slate-50 border border-slate-200 hover:bg-indigo-55 hover:border-indigo-150 rounded-lg text-[9px] font-mono font-bold uppercase text-indigo-650 flex items-center gap-1">
                      <Download className="w-3 h-3" /> Get
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 12. SharedLinksActivity
    // ==========================================
    case 'SharedLinksActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Mutual Hyperlink Catalog" badge="Web Links">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">MUTUAL WEB ADRESSES</span>
                <button onClick={() => navigateTo('ChatInfoActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Info
                </button>
              </div>

              <div className="space-y-2">
                {[
                  { target: 'https://ais-dev-vms.asia-east1.run.app', name: 'Aether OS Engine Platform', desc: 'Secure cloud dev instance metadata config interface.' },
                  { target: 'https://github.com/google/gemini', name: 'Gemini Technical Manual', desc: 'Official reasoning weights parameter outline maps.' }
                ].map((l, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 hover:border-indigo-400 cursor-pointer text-left">
                    <div className="flex items-center gap-1.5 text-indigo-650 font-black text-xs font-sans">
                      <LinkIcon className="w-3.5 h-3.5" />
                      <h4>{l.name}</h4>
                    </div>
                    <p className="text-[10px] text-slate-500">{l.desc}</p>
                    <span className="text-[9px] font-mono text-indigo-600 line-clamp-1 block underline select-all">{l.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 13. PollsActivity
    // ==========================================
    case 'PollsActivity': {
      const voteOption = (id: string) => {
        setPollOptions(prev => prev.map(op => {
          if (op.id === id) {
            return { ...op, votes: op.votes + 1 };
          }
          return op;
        }));
        setHasVoted(true);
      };

      const totalVotes = pollOptions.reduce((sum, o) => sum + o.votes, 0);

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Peer Consensus Collector" badge="Dynamic Polls">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">Consensus parameters setup</span>
                <button onClick={() => navigateTo('ChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Pipeline
                </button>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3.5">
                <h4 className="text-xs font-sans font-black uppercase text-slate-800 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-indigo-600" /> {pollQuestion}
                </h4>

                <div className="space-y-2">
                  {pollOptions.map((op) => {
                    const ratio = totalVotes > 0 ? (op.votes / totalVotes) * 100 : 0;
                    return (
                      <div key={op.id} className="space-y-1.5">
                        <button
                          onClick={() => !hasVoted && voteOption(op.id)}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs font-sans font-bold transition-all relative overflow-hidden flex justify-between items-center ${
                            hasVoted 
                              ? 'bg-slate-100/40 border-slate-150' 
                              : 'bg-white hover:bg-indigo-50 border-slate-200 hover:border-indigo-400'
                          }`}
                        >
                          <span className="relative z-10">{op.text}</span>
                          <span className="relative z-10 font-mono text-[10px] text-indigo-650">{op.votes} votes ({ratio.toFixed(0)}%)</span>
                          
                          {/* Vote visualization bar */}
                          {hasVoted && (
                            <div 
                              className="absolute left-0 top-0 bottom-0 bg-indigo-500/10 transition-all duration-500" 
                              style={{ width: `${ratio}%` }}
                            />
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between font-mono text-[9px] text-slate-400 px-1 pt-1">
                  <span>SYSTEM POLLING ENDPOINT: CLOSED</span>
                  <span>TOTAL CONSENSUS: {totalVotes} SAMPLES</span>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 14. StickersActivity
    // ==========================================
    case 'StickersActivity': {
      const stickers = [
        { code: '🎯', name: 'TARGET' },
        { code: '🚀', name: 'LAUNCH' },
        { code: '🔒', name: 'LOCK' },
        { code: '🧬', name: 'BIOME' },
        { code: '💻', name: 'CODE' },
        { code: '🔥', name: 'FLAME' },
        { code: '👾', name: 'RAIDER' },
        { code: '🧠', name: 'COG' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Reaction Stamps Matrix" badge="Reaction Stickers">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">GRAPHIC EMOTE DIRECTORY</span>
                <button onClick={() => navigateTo('ChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Pipeline
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {stickers.map((st, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const msg: Message = {
                        id: 'm_st_' + Date.now(),
                        sender: 'user',
                        senderName: 'Alex',
                        text: `[REACTION STAMP: ${st.code} ${st.name}]`,
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      };
                      setMessages(prev => [...prev, msg]);
                      navigateTo('ChatActivity');
                    }}
                    className="aspect-square rounded-2xl bg-slate-50 border border-slate-150 hover:bg-indigo-50 hover:border-indigo-400 transition-all flex flex-col items-center justify-center p-2 group cursor-pointer"
                  >
                    <span className="text-3xl filter drop-shadow-md group-hover:scale-110 transition-all duration-350">{st.code}</span>
                    <span className="text-[8px] font-mono text-slate-450 font-bold tracking-tight uppercase mt-1">{st.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 15. GIFPickerActivity
    // ==========================================
    case 'GIFPickerActivity': {
      const gifs = [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=100&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100&auto=format&fit=crop&q=80'
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Dynamic Animation Picker" badge="GIF Archives">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">GRAPHICAL LOOP CHIPS</span>
                <button onClick={() => navigateTo('ChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Pipeline
                </button>
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Query animated loops..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-9 pr-3 text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {gifs.map((url, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      const msg: Message = {
                        id: 'm_gif_' + Date.now(),
                        sender: 'user',
                        senderName: 'Alex',
                        text: `[IMAGE_LOOP: ${url}]`,
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      };
                      setMessages(prev => [...prev, msg]);
                      navigateTo('ChatActivity');
                    }}
                    className="aspect-video rounded-xl border border-slate-200 bg-slate-100 overflow-hidden cursor-pointer hover:border-indigo-400 relative group"
                  >
                    <img src={url} alt="GIF" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[10px] font-mono font-bold text-white uppercase transition-all">
                      Select loop
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 16. VoiceMessagesActivity
    // ==========================================
    case 'VoiceMessagesActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Audio Wave Synthesizer" badge="Voice Transmissions">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">VOICE INTERFACE PORT</span>
                <button onClick={() => navigateTo('ChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Pipeline
                </button>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-150 rounded-2xl text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <VoiceWave active={isVoiceRecording} />
                </div>

                <div className="text-xs font-mono font-bold text-slate-550">
                  {isVoiceRecording ? 'TRANSTING AUDIO SPECTRUM RAW...' : 'AUDIO INPUT PIPELINE READY'}
                </div>

                <div className="flex justify-center gap-3">
                  <CyberButton
                    variant={isVoiceRecording ? 'danger' : 'cyan'}
                    glow={!isVoiceRecording}
                    onClick={() => setIsVoiceRecording(!isVoiceRecording)}
                  >
                    {isVoiceRecording ? 'STOP RECORDING' : 'START RECORDING'}
                  </CyberButton>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 17. ChatBackupActivity
    // ==========================================
    case 'ChatBackupActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="cyan" title="Disaster Recovery Exporter" badge="Sync Ledger">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">BACKUP MANAGEMENT DECK</span>
                <button onClick={() => navigateTo('ChatListActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Channels
                </button>
              </div>

              <div className="space-y-3 font-sans text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                <h4 className="font-black uppercase flex items-center gap-1">
                  <Database className="w-4 h-4 text-emerald-500" /> LOCAL DATA INTEGRITY STATUS
                </h4>
                <div className="space-y-2 mt-2 font-mono text-[10px]">
                  <div className="flex justify-between border-b pb-1">
                    <span>MOCK BUFFER RECT:</span>
                    <span className="text-emerald-500 font-bold">100% HEALTHY</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span>PENDING CACHE SHARDS:</span>
                    <span>0 ITEMS</span>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <span>LAST INTEGRATED MATRIX:</span>
                    <span>10 minutes ago</span>
                  </div>
                </div>

                <div className="flex gap-2.5 pt-3">
                  <CyberButton variant="cyan" fullWidth onClick={() => alert('Disbursals dispatched successfully. Encryption archive generated.')}>
                    <Download className="w-3.5 h-3.5" /> EXPORT EXCLUSIVE KEY BLOCKS
                  </CyberButton>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 18. AIChatActivity (FOCUSED AI DISCOURSE)
    // ==========================================
    case 'AIChatActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-28">
          <CyberPanel variant="magenta" title="Aether Cognitive Mainframe" badge="Gemini AI">
            <div className="flex flex-col h-[23rem]">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">DIRECT REASONING STREAM</span>
                <div className="flex items-center gap-2">
                  <CyberBadge variant="magenta">{selectedModel}</CyberBadge>
                  <button onClick={() => navigateTo('AIModelsActivity')} className="p-1 hover:bg-slate-100 rounded">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-fuchsia-500" />
                  </button>
                </div>
              </div>

              {/* Cognitive Bubble Stream scroll viewport */}
              <div className="flex-1 overflow-y-auto pr-1 py-1 space-y-3.5 scrollbar-thin select-text">
                <div className="flex gap-2.5 max-w-[85%] bg-fuchsia-100/10 p-2.5 border border-fuchsia-500/15 rounded-2xl">
                  <div className="w-7 h-7 rounded-full bg-fuchsia-950 border border-fuchsia-400/25 overflow-hidden flex items-center justify-center shrink-0">
                    <Cpu className="w-3.5 h-3.5 text-fuchsia-400" />
                  </div>
                  <div className="min-w-0">
                    <h5 className="text-[10px] font-mono text-fuchsia-600 font-bold">COGNITIVE SYSTEM OVERLORD</h5>
                    <p className="text-[11px] text-slate-700 leading-relaxed font-sans">
                      Neural weights synced. Active profile parameters: Creativity {temperature}. Request any synthesis calculations.
                    </p>
                  </div>
                </div>

                {messages.filter(m => m.id !== 'm1').map((m) => (
                  <div key={m.id} className={`flex gap-2.5 max-w-[85%] ${m.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                    {m.sender !== 'user' && (
                      <div className="w-7 h-7 rounded-full bg-fuchsia-950 border border-fuchsia-400/25 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-fuchsia-400" />
                      </div>
                    )}
                    <div className="space-y-0.5">
                      <div className={`p-2.5 rounded-[18px] text-[11px] font-sans leading-relaxed ${
                        m.sender === 'user' 
                          ? 'bg-fuchsia-600 text-white rounded-tr-xs' 
                          : 'bg-slate-50 border border-slate-200/80 text-slate-850 rounded-tl-xs'
                      }`}>
                        {m.text}
                      </div>
                      <span className={`text-[8px] font-mono text-slate-400 block ${m.sender === 'user' ? 'text-right' : ''}`}>
                        {m.senderName} • {m.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prompt library suggestions */}
              <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin shrink-0 pt-1">
                {['Optimize code.ts', 'Audit firestore.rules', 'Write plot points'].map(str => (
                  <button 
                    key={str}
                    onClick={() => {
                      setInput(str);
                    }}
                    className="text-[9px] font-mono bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-150 rounded-lg px-2.5 py-1 whitespace-nowrap transition-all cursor-pointer"
                  >
                    {str}
                  </button>
                ))}
              </div>

              {/* Sticky bottom send bar */}
              <form onSubmit={handleSendMessage} className="flex gap-1.5 items-center bg-white p-1.5 border border-slate-200 rounded-xl">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter custom prompt logic values..."
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-lg outline-none text-[11px] text-slate-800 placeholder-slate-400 focus:ring-1 focus:ring-fuchsia-100 py-1.5 px-2 font-mono"
                />
                <CyberButton variant="magenta" type="submit" className="py-1.5 px-3 shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </CyberButton>
              </form>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 19. AIModelsActivity
    // ==========================================
    case 'AIModelsActivity': {
      const models = [
        { name: 'Gemini 2.5 Flash', latency: '140ms', window: '1.2M tokens', speed: 'Supercharged', d: 'Extremely speedy, best for daily handshakes and operations.' },
        { name: 'Gemini 2.5 Pro', latency: '280ms', window: '2.0M tokens', speed: 'Reasoning Pro', d: 'Deep cognitive logical steps. Ideal for auditing schemas and PEM structures.' },
        { name: 'Gemini Live Alpha', latency: '85ms', window: '500K tokens', speed: 'Realtime Audio', d: 'Optimized voice synthesizing streams and optical descriptors.' },
        { name: 'Deep-Reasoning Core v4', latency: '400ms', window: '800K tokens', speed: 'Academic Crypt', d: 'Pure computational proof processing, slow but highly analytical.' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Logical Mainframe Matrix" badge="Model Roster">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">AVAILABLE NEURAL BRAINS</span>
                <button onClick={() => navigateTo('AIChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {models.map(m => (
                  <div
                    key={m.name}
                    onClick={() => {
                      setSelectedModel(m.name);
                      alert(`Activating brain: ${m.name}`);
                      navigateTo('AIChatActivity');
                    }}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer text-left space-y-1.5 ${
                      selectedModel === m.name 
                        ? 'bg-fuchsia-50/50 border-fuchsia-400 shadow-xs' 
                        : 'bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-mono font-black uppercase text-slate-850 flex items-center gap-1">
                        {m.name}
                        {selectedModel === m.name && <Check className="w-3.5 h-3.5 text-fuchsia-500" />}
                      </h4>
                      <span className="text-[9px] font-mono text-fuchsia-600 bg-fuchsia-50 border border-fuchsia-100 px-1.5 py-0.2 rounded">
                        {m.speed}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{m.d}</p>
                    <div className="flex justify-between font-mono text-[8px] text-slate-400 pt-1">
                      <span>LATENCY: {m.latency}</span>
                      <span>BUFFER BOUND: {m.window}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 20. AISettingsActivity
    // ==========================================
    case 'AISettingsActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Cognitive Parameters Editor" badge="Settings Console">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">ENGINE COMPILER COEFFICIENT</span>
                <button onClick={() => navigateTo('AIChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Dialogue
                </button>
              </div>

              <div className="space-y-4">
                {/* Temperature slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-550 font-sans font-black uppercase text-[10px]">Creativity Temperature:</span>
                    <span className="text-fuchsia-600 font-bold">{temperature}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-slate-400">
                    <span>CONSONANT / PRECISE</span>
                    <span>WACKY / CREATIVE</span>
                  </div>
                </div>

                {/* Max Tokens */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-550 font-sans font-black uppercase text-[10px]">Maximum Token Yield:</span>
                    <span className="text-fuchsia-600 font-bold">{maxTokens} TOKENS</span>
                  </div>
                  <input
                    type="range"
                    min="256"
                    max="8192"
                    step="256"
                    value={maxTokens}
                    onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-slate-400">
                    <span>SHORT OUTPUTS</span>
                    <span>BULK ANALYSIS</span>
                  </div>
                </div>

                {/* System instructions roles */}
                <div className="space-y-0.5">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500 tracking-widest">Base Cognitive System Persona Directive</label>
                  <textarea
                    defaultValue="You are an elegant system companion operating inside Aether OS. Perform robust parameters analysis and present responsive matrices."
                    className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-850 p-2.5 rounded-lg focus:outline-none"
                    rows={2}
                  />
                </div>

                <CyberButton variant="magenta" glow fullWidth onClick={() => alert('Cognitive registry configuration parameters locked!')}>
                  <Save className="w-3.5 h-3.5" /> LEASH MODEL CONFIGURATION
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 21. AIAgentsActivity
    // ==========================================
    case 'AIAgentsActivity': {
      const agents = [
        { id: 'dev', name: 'Developer Pro V4', spec: 'Full-stack Node/Typescript specialist, handles git merges', rating: '9.8', cost: '12 tokens/step', url: 'AIChatActivity' },
        { id: 'graphic', name: 'Design Architect', spec: 'Aesthetics generator, writes tailwind grids & hex values', rating: '9.5', cost: '18 tokens/step', url: 'ImageGenerationActivity' },
        { id: 'audit', name: 'Security Auditor', spec: 'Analyzes pem keys, schema.ts vectors, and firestore setups', rating: '9.9', cost: '15 tokens/step', url: 'AIChatActivity' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Specialized AI Drones" badge="Agent Pool">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">COGNITIVE TASK FORCES</span>
                <button onClick={() => navigateTo('AgentBuilderActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> Construct Agent
                </button>
              </div>

              <div className="space-y-2.5">
                {agents.map(ag => (
                  <div key={ag.id} className="p-3 bg-white border border-slate-200 rounded-2xl flex justify-between items-center hover:border-fuchsia-400 cursor-pointer">
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-sans font-black uppercase text-slate-850 flex items-center gap-1.5">
                        <Bot className="w-3.5 h-3.5 text-fuchsia-500" /> {ag.name}
                      </h4>
                      <p className="text-[10px] text-slate-505 text-slate-500 font-sans">{ag.spec}</p>
                      <div className="flex gap-2 font-mono text-[8px] text-slate-400 mt-1">
                        <span>RATING: {ag.rating}/10</span>
                        <span>FUEL: {ag.cost}</span>
                      </div>
                    </div>
                    <CyberButton variant="magenta" onClick={() => navigateTo(ag.url)} className="text-[9px] py-1 px-3">LAUNCH</CyberButton>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 22. AgentBuilderActivity
    // ==========================================
    case 'AgentBuilderActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Artificial Soul Synthesizer" badge="Agent Blueprint">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">BUILD CUSTOM AI drone</span>
                <button onClick={() => navigateTo('AIAgentsActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Agent List
                </button>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Drone Label Name</label>
                  <input
                    type="text"
                    placeholder="E.g., CSS_Speccer"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Neuro-Logic Sector Scope</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-xs">
                    <option>Writing Optimization</option>
                    <option>Drizzle Schema Architect</option>
                    <option>Brutalist Styling Forge</option>
                    <option>Translation Link</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Soul Directive Blueprint</label>
                  <textarea
                    placeholder="Instruct the agent on details of its operational scopes..."
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2 rounded-lg"
                    rows={2.5}
                  />
                </div>

                <CyberButton variant="magenta" glow fullWidth onClick={() => {
                  alert('Neuro-construct synthesized and compiled. Agent is available in roster!');
                  navigateTo('AIAgentsActivity');
                }}>
                  <Sparkle className="w-4 h-4" /> CONSTRUCT DIGITAL WORKER ASSEMBLY
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 23. AgentMarketplaceActivity
    // ==========================================
    case 'AgentMarketplaceActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Cognitive Nodes Marketplace" badge="Global Agents Store">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">IMPORT THIRD-PARTY DRONES</span>
                <button onClick={() => navigateTo('AIAgentsActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              </div>

              <div className="space-y-2">
                {[
                  { title: 'GitMerge Master', d: 'Automatically scans repo conflicts and suggests exact target lines.', downloads: '4.2K' },
                  { title: 'Cyberpunk Lore Generator', d: 'Generates atmospheric neon slang and jargon presets.', downloads: '1.8K' }
                ].map((shop, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-xs font-sans font-black uppercase text-slate-800 block">{shop.title}</span>
                      <p className="text-[10px] text-slate-500">{shop.d}</p>
                      <span className="text-[8px] font-mono text-indigo-600">DOWNLOADS: {shop.downloads}</span>
                    </div>
                    <CyberButton variant="slate" onClick={() => alert('Agent downloaded!')} className="text-[9px] py-1">GET</CyberButton>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 24. CharacterCreatorActivity
    // ==========================================
    case 'CharacterCreatorActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Virtual Personality Assembly" badge="Creator Setup">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">DESIGN BOT INDIVIDUALITY</span>
                <button onClick={() => navigateTo('CharacterMarketplaceActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Browse Characters
                </button>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Character Moniker</label>
                  <input
                    type="text"
                    placeholder="E.g., Alan Turing"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Dominant Personality Trait</label>
                  <div className="grid grid-cols-3 gap-1.5 text-[9px] font-sans tracking-wide">
                    {['Sarcastic Operator', 'Empathetic Sage', 'Clinical Logician'].map(t => (
                      <button key={t} className="p-1 px-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-650 rounded-lg text-center font-bold">
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Intro Greeting Wave speech</label>
                  <textarea
                    placeholder="Greetings. Computational vectors aligned..."
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2 rounded-lg"
                    rows={2}
                  />
                </div>

                <CyberButton variant="magenta" glow fullWidth onClick={() => {
                  alert('Virtual Soul template validated and loaded inside local memory manager directory!');
                  navigateTo('CharacterMarketplaceActivity');
                }}>
                  <PlusCircle className="w-3.5 h-3.5" /> GENERATE CHIP PERSONA
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 25. CharacterEditorActivity
    // ==========================================
    case 'CharacterEditorActivity': {
      const liveChar = characters.find(c => c.id === selectedCharacterId) || characters[0];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-32">
          <CyberPanel variant="magenta" title={`Tuning: ${liveChar.name}`} badge="Modify Trait">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">FINE-TUNE BRAIN MATRIX</span>
                <button onClick={() => navigateTo('CharacterMarketplaceActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Marketplace
                </button>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Character Description</label>
                  <input
                    type="text"
                    id="char-edit-desc"
                    defaultValue={liveChar.desc}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500">Introductory Pitch Speak</label>
                  <textarea
                    id="char-edit-intro"
                    defaultValue={liveChar.intro}
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 rounded-lg text-slate-700"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <CyberButton variant="slate" fullWidth onClick={() => navigateTo('CharacterMarketplaceActivity')}>Discard changes</CyberButton>
                  <CyberButton variant="magenta" glow fullWidth onClick={() => {
                    const descVal = (document.getElementById('char-edit-desc') as HTMLInputElement)?.value || liveChar.desc;
                    const introVal = (document.getElementById('char-edit-intro') as HTMLTextAreaElement)?.value || liveChar.intro;
                    setCharacters(prev => prev.map(c => c.id === liveChar.id ? { ...c, desc: descVal, intro: introVal } : c));
                    alert('Soul matrix traits adjustments saved successfully.');
                    navigateTo('CharacterMarketplaceActivity');
                  }}>Save parameters</CyberButton>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 26. CharacterMarketplaceActivity
    // ==========================================
    case 'CharacterMarketplaceActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Available Soul Personalities" badge="Mainframe Directory">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">SELECT SOUL DRIVER CONFIG</span>
                <button onClick={() => navigateTo('AIChatActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Chat
                </button>
              </div>

              <div className="space-y-2.5">
                {characters.map(c => (
                  <div key={c.id} className="p-3 bg-white border border-slate-200 rounded-2xl space-y-2 hover:border-fuchsia-400 relative">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="text-xs font-sans font-black uppercase text-slate-850 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-fuchsia-500" /> {c.name}
                        </h4>
                        <span className="text-[9px] font-mono text-fuchsia-600 font-bold">{c.title}</span>
                      </div>
                      <div className="flex gap-1.5">
                        <button onClick={() => {
                          setSelectedCharacterId(c.id);
                          navigateTo('CharacterEditorActivity');
                        }} className="p-1 hover:bg-slate-50 rounded text-slate-400">
                          <Sliders className="w-3.5 h-3.5" />
                        </button>
                        <CyberButton variant="magenta" onClick={() => {
                          // Change AIChat state to talk to this character
                          setMessages([
                            {
                              id: 'init_' + Date.now(),
                              sender: 'assistant',
                              senderName: c.name,
                              text: c.intro,
                              timestamp: 'Just now'
                            }
                          ]);
                          alert(`Interfacing loaded: ${c.name}`);
                          navigateTo('AIChatActivity');
                        }} className="text-[9px] py-1">CHAT</CyberButton>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{c.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {c.traits.map(t => (
                        <span key={t} className="text-[8px] font-mono bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-100 rounded px-1.5 py-0.2">
                          #{t.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <CyberButton variant="magenta" glow fullWidth onClick={() => navigateTo('CharacterCreatorActivity')}>
                <Plus className="w-3.5 h-3.5" /> DISPATCH NEW CHARACTER PROFILE BLUEPRINT
              </CyberButton>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 27. PromptLibraryActivity
    // ==========================================
    case 'PromptLibraryActivity': {
      const prompts = [
        { id: 'p1', title: 'System-Core Optimizer', category: 'SYSTEM', desc: 'Synthesizes clean server.ts code setups.' },
        { id: 'p2', title: 'Creative Metaphor Weaver', category: 'WRITING', desc: 'Formulates sci-fi expressions and cyber-analogies.' },
        { id: 'p3', title: 'SQL Schema Compiler', category: 'DEVELOPER', desc: 'Prepares DDL scripts with custom extensions.' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Command Template Archives" badge="Prompt Library">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">PREPARED PROMPT BLOCKS</span>
                <button onClick={() => navigateTo('PromptEditorActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <Plus className="w-3.5 h-3.5" /> New Block
                </button>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {prompts.map((p) => (
                  <div key={p.id} className="p-3 bg-white border border-slate-200 rounded-2xl flex items-start justify-between hover:border-fuchsia-400">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-black text-slate-850 uppercase">{p.title}</span>
                        <span className="text-[8px] font-mono bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100 px-1 py-0.2 rounded font-bold">{p.category}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-sans">{p.desc}</p>
                    </div>
                    <CyberButton variant="slate" onClick={() => {
                      setInput(p.desc);
                      alert(`Prompt loaded into dialogue console buffers.`);
                      navigateTo('AIChatActivity');
                    }} className="text-[8px] py-1 px-2 shrink-0">LOAD</CyberButton>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 28. PromptEditorActivity
    // ==========================================
    case 'PromptEditorActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-32">
          <CyberPanel variant="magenta" title="Instruction Vector Compiler" badge="Prompt Editor">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">EDIT INSTRUCTION SEGMENT</span>
                <button onClick={() => navigateTo('PromptLibraryActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Library
                </button>
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-450 tracking-wider">Template Block Label</label>
                  <input
                    type="text"
                    id="prompt-edit-label"
                    defaultValue="System-Core Optimizer"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 px-3 text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-450 tracking-wider">Chamber Prompt Content</label>
                  <textarea
                    id="prompt-edit-content"
                    defaultValue="Synthesizes clean server.ts code setups conforming to port 3000 rules. Omit unused imports."
                    className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 rounded-lg text-slate-700"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <CyberButton variant="slate" fullWidth onClick={() => navigateTo('PromptLibraryActivity')}>Discard</CyberButton>
                  <CyberButton variant="magenta" glow fullWidth onClick={() => {
                    const lVal = (document.getElementById('prompt-edit-label') as HTMLInputElement)?.value;
                    const cVal = (document.getElementById('prompt-edit-content') as HTMLTextAreaElement)?.value;
                    alert(`Command block '${lVal || 'Template'}' successfully saved inside neural database caches!`);
                    navigateTo('PromptLibraryActivity');
                  }}>Lock Block</CyberButton>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 29. WorkflowBuilderActivity
    // ==========================================
    case 'WorkflowBuilderActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Cognitive Pipeline Assembler" badge="Workflow Node">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">SEQUENTIAL REASONING CHAIN</span>
                <CyberBadge variant="magenta">CORE ACTIVE</CyberBadge>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3">
                <div className="space-y-2">
                  {[
                    { step: 'Ingest Phase', act: 'Clean database lines and extract vectors' },
                    { step: 'Audit Phase', act: 'Trigger Security Auditor drone over imports' },
                    { step: 'Synthesis Phase', act: 'Compile markdown overview reports' }
                  ].map((wf, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-fuchsia-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <div className="bg-white border border-slate-150 p-2 rounded-xl flex-1 text-xs">
                        <span className="font-sans font-black uppercase text-slate-800 block text-[10px]">{wf.step}</span>
                        <p className="text-[10px] text-slate-500 mt-0.5">{wf.act}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <CyberButton variant="magenta" glow fullWidth onClick={() => alert('Logic flow chain successfully integrated to live webhook channels.')}>
                  <Plus className="w-3.5 h-3.5" /> CONCAT NESTED PIPELINE PHASE
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 30. MemoryManagerActivity
    // ==========================================
    case 'MemoryManagerActivity': {
      const memories = [
        { fact: 'User Alex operates on port 3000 telemetry', date: 'Synthesized 2 days ago' },
        { fact: 'Preferred layout engine metrics set to Inter DISPLAY', date: 'Synthesized 1 week ago' },
        { fact: 'Encryption signature algorithms prioritized for SHA512', date: 'Synthesized 5 mins ago' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Persistent Cognition Ledger" badge="AI Memories">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">FACTUAL SEMANTIC GRAPHS</span>
                <button onClick={() => {
                  alert('Cognitive weights cleared! Model is wiped cleanly.');
                }} className="text-[10px] text-rose-600 hover:text-rose-700 font-mono font-bold uppercase flex items-center gap-0.5">
                  <Trash2 className="w-3 h-3" /> WIPE MATRIX
                </button>
              </div>

              <div className="space-y-2 max-h-56 overflow-y-auto">
                {memories.map((m, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1">
                    <p className="text-xs text-slate-750 font-sans italic">"{m.fact}"</p>
                    <span className="text-[8px] font-mono text-slate-400 block">{m.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 31. AITrainingActivity
    // ==========================================
    case 'AITrainingActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Weight Optimization Monitor" badge="Fine-Tuning">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">EPOCH DESCENT ACCURACIES</span>
                <CyberBadge variant="magenta">TRAINING IDLE</CyberBadge>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 font-mono text-[9px] text-center">
                  <div className="bg-white p-2 border border-slate-200 rounded-xl">
                    <span className="text-slate-400 block">LAST ERROR RATE:</span>
                    <span className="text-fuchsia-600 font-bold text-xs mt-0.5 block">0.034</span>
                  </div>
                  <div className="bg-white p-2 border border-slate-200 rounded-xl">
                    <span className="text-slate-400 block">TOTAL EPOCHS:</span>
                    <span className="text-slate-800 font-bold text-xs mt-0.5 block">1,240</span>
                  </div>
                  <div className="bg-white p-2 border border-slate-200 rounded-xl">
                    <span className="text-slate-400 block">LEARNING COEFF:</span>
                    <span className="text-slate-800 font-bold text-xs mt-0.5 block">3e-5</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl font-mono text-[9px] text-emerald-500 leading-relaxed border border-slate-900 select-all">
                  [EPOCH_1240_COMPLETE] Loss validation: 0.0340. Optimizer descent optimized cleanly using AdamW weight decay rate.
                </div>

                <CyberButton variant="magenta" glow fullWidth onClick={() => alert('Fine-tune weights synthesized successfully!')}>
                  <RefreshCw className="w-3.5 h-3.5 shrink-0" /> RESYNC TRAINING ITERATION
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 32. DatasetManagerActivity
    // ==========================================
    case 'DatasetManagerActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Dataset Vector Ingestion" badge="Library Logs">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">CLEAN MODEL FEEDSTUFF</span>
                <CyberBadge variant="magenta">3 VECTORS LOADED</CyberBadge>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'science_fiction_scenarios.jsonl', q: '14,230 sequences' },
                  { name: 'typescript_boilerplates.jsonl', q: '85,412 sequences' }
                ].map((l, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200 rounded-xl flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-fuchsia-500" />
                      <div>
                        <span className="text-xs text-slate-850 font-sans font-black block">{l.name}</span>
                        <span className="text-[9px] font-mono text-slate-400">{l.q}</span>
                      </div>
                    </div>
                    <button className="text-[10px] text-rose-500 font-mono" onClick={() => alert('Deleted dataset')}>Wipe</button>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 33. VoiceAIActivity
    // ==========================================
    case 'VoiceAIActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Synthetic Voice Matrix" badge="TTS Synthesizer">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">VOICE GENDER & ACCENT MATRIX</span>
                <CyberBadge variant="magenta">SYNTH NOMINAL</CyberBadge>
              </div>

              <div className="space-y-3.5 p-4 bg-slate-50 border border-slate-150 rounded-2xl">
                <div className="space-y-1">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-550">Active Voice Persona Model</label>
                  <select
                    value={syntheticVoice}
                    onChange={(e) => setSyntheticVoice(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg p-2 text-xs font-mono"
                  >
                    <option value="Helena Core V3">Helena Core V3 (Slightly Sarcastic)</option>
                    <option value="Alan Ephemeral">Alan Ephemeral (Calm Sage)</option>
                    <option value="Cyber Mainframe V9">Cyber Mainframe V9 (Synthesized Mono)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500 text-[9px] font-sans font-black uppercase">Vocal Velocity Coefficient:</span>
                    <span className="text-fuchsia-600 font-bold">{syntheticSpeed}X</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={syntheticSpeed}
                    onChange={(e) => setSyntheticSpeed(parseFloat(e.target.value))}
                    className="w-full h-1 bg-white rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
                  />
                </div>

                <CyberButton variant="magenta" glow fullWidth onClick={() => alert(`Synthesized speech test using model: ${syntheticVoice}`)}>
                  <Volume2 className="w-4 h-4" /> TEST CHIP SPEECH HARMONICS
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 34. VisionAIActivity
    // ==========================================
    case 'VisionAIActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Spatial Objects Visualizer" badge="Vision Core">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">REAL-TIME OPTICAL FEED</span>
                <CyberBadge variant="magenta">LENS ENGAGED</CyberBadge>
              </div>

              <div className="relative aspect-video rounded-2xl bg-slate-950 border border-slate-900 overflow-hidden flex items-center justify-center">
                <Camera className="w-10 h-10 text-slate-800 animate-pulse" />
                <div className="absolute top-3 left-3 bg-red-600 text-white font-mono font-bold text-[8px] tracking-widest uppercase px-1.5 py-0.5 rounded-md leading-none shadow-md">
                  ● SIMULATED_LENS_FEED
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 border border-slate-900 font-mono text-[8px] text-emerald-500 p-2 rounded-lg leading-tight select-text">
                  SPATIAL ANALYSIS: Handheld Controller Segment (accuracy: 99.4%)
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 35. ImageGenerationActivity (GORGEOUS ASSETS ACCORDING TO SKILL)
    // ==========================================
    case 'ImageGenerationActivity': {
      const handleGenerateImage = () => {
        setIsGeneratingImg(true);
        setTimeout(() => {
          // Select an appropriate sci-fi Unsplash graphic based on selection
          const pools = [
            'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1544256718-3bcf237f3974?w=500&auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=80'
          ];
          const randomUrl = pools[Math.floor(Math.random() * pools.length)];
          setGeneratedImg(randomUrl);
          setIsGeneratingImg(false);
          alert('Asset synthesized successfully, look at panel preview!');
        }, 1200);
      };

      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Neural Paintbox Forge" badge="Image AI">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">SYNTHESIZE RASTER GRAPHICS</span>
                <CyberBadge variant="magenta">IMAGEN 3 ACTIVE</CyberBadge>
              </div>

              {/* Prompt input */}
              <div className="space-y-1">
                <label className="text-[9px] font-sans font-black uppercase text-slate-500">Text Prompt Directive Weights</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Type graphic generation prompt..."
                  className="w-full bg-slate-50 border border-slate-200 text-xs p-2.5 rounded-lg text-slate-800"
                  rows={2}
                />
              </div>

              {/* Aspect ratio triggers & style */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-black uppercase text-slate-500 block">Aspect Multiplier</span>
                  <div className="flex gap-1">
                    {['1:1', '16:9', '4:3'].map(r => (
                      <button
                        key={r}
                        onClick={() => setRatio(r)}
                        className={`flex-1 py-1 text-[9px] font-mono border rounded-lg ${
                          ratio === r 
                            ? 'bg-fuchsia-600 text-white border-transparent font-bold' 
                            : 'bg-white hover:bg-slate-50 text-slate-550 border-slate-200'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-sans font-black uppercase text-slate-500 block">Graphics Style Mode</span>
                  <select
                    value={styleMode}
                    onChange={(e) => setStyleMode(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-1 rounded-lg text-xs"
                  >
                    <option>Cyberpunk</option>
                    <option>Brutalist Sketch</option>
                    <option>Photorealistic</option>
                    <option>Abstract Canvas</option>
                  </select>
                </div>
              </div>

              {/* Action */}
              <CyberButton variant="magenta" glow fullWidth onClick={handleGenerateImage} disabled={isGeneratingImg}>
                {isGeneratingImg ? 'COMPILING WEIGHTS DESCENTS...' : 'SYNTHESIZE MATRIX FILE'}
              </CyberButton>

              {/* Preview target */}
              <div className="space-y-2">
                <span className="text-[9px] font-sans font-black uppercase text-slate-450 tracking-wider block">Live Graphics Preview:</span>
                <div className="aspect-square rounded-2xl bg-slate-950 border border-slate-200 overflow-hidden relative flex items-center justify-center">
                  {isGeneratingImg ? (
                    <RefreshCw className="w-8 h-8 text-fuchsia-600 animate-spin" />
                  ) : (
                    <img src={generatedImg} alt="AI Generated" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  )}
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 36. VideoGenerationActivity
    // ==========================================
    case 'VideoGenerationActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Dynamic Raster Animator" badge="Video AI">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">SYNTHESIZE VIDEO SHARDS</span>
                <CyberBadge variant="magenta">VEO ALPHA ACTIVE</CyberBadge>
              </div>

              <div className="space-y-3.5 p-4 bg-slate-50 border border-slate-150 rounded-2xl text-center">
                <div className="aspect-video bg-slate-950 border border-slate-900 rounded-xl flex items-center justify-center relative">
                  <Play className="w-10 h-10 text-slate-800 animate-pulse" />
                  <span className="absolute bottom-2 right-2 text-[8px] font-mono text-slate-500 uppercase">0/4 SEC SECS</span>
                </div>
                <CyberButton variant="magenta" glow fullWidth onClick={() => alert('Synthesized video loop compiled!')}>
                  GENERATE 4-SECOND ANIMA GRID
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 37. MusicGenerationActivity
    // ==========================================
    case 'MusicGenerationActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Ambient Harmonics Synth" badge="Audio AI">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">AMBIENT SOUNDSCAPE CONSTRUCTOR</span>
                <CyberBadge variant="magenta">LYRIA ACTIVE</CyberBadge>
              </div>

              <div className="space-y-3 p-4 bg-slate-50 border border-slate-150 rounded-2xl text-center">
                <HelpCircle className="w-10 h-10 text-indigo-400 mx-auto animate-pulse" />
                <span className="text-xs font-mono font-bold block text-slate-700">AMBIENT PRESSURE GENERATOR</span>
                <p className="text-[10px] text-slate-500">Formulates beautiful background looping wave arrays to assist developers under neurological strain.</p>
                <CyberButton variant="magenta" glow fullWidth onClick={() => alert('Loop synthesizers engaged successfully.')}>
                  COMPILE NEURAL MUSIC LOOP
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    // ==========================================
    // 38. AIAnalyticsActivity
    // ==========================================
    case 'AIAnalyticsActivity': {
      return (
        <div className="animate-fade-in text-slate-800 space-y-4 max-w-xl mx-auto pb-10">
          <CyberPanel variant="magenta" title="Cognitive Latencies Ledger" badge="AI Analytics">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">HISTORICAL METRIC GRAPHS</span>
                <CyberBadge variant="magenta">STATISTICS NOMINAL</CyberBadge>
              </div>

              <div className="space-y-3 font-mono text-[10px] text-slate-500">
                <div className="bg-slate-50 border border-slate-150 p-3.5 rounded-xl space-y-1.5 leading-relaxed">
                  <div className="flex justify-between">
                    <span>TOTAL ACCUMULATED TOKENS:</span>
                    <span className="text-slate-800 font-bold">1,424,432 T / WEEK</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GEMINI COMPILER UPTIME:</span>
                    <span className="text-emerald-500 font-bold">99.98% AVAILABLE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AVERAGE FEEDBACK PING:</span>
                    <span className="text-fuchsia-600 font-bold">142 MILLISECS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PRESETS IN USE:</span>
                    <span className="text-slate-800 font-black">15 MACROS ACCLAIMED</span>
                  </div>
                </div>

                <div className="flex justify-between text-[9px] font-sans pt-1">
                  <span>METRICS VALIDATION SOURCE: CONTAINER_LOG_SYS</span>
                  <button onClick={() => alert('Wiped metrics caches')} className="text-rose-600 font-bold hover:underline font-mono text-[9px]">WIPE CACHES</button>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );
    }

    default:
      return (
        <div className="text-slate-400 p-8 text-center font-mono max-w-xl mx-auto pb-10">
          <AlertCircle className="w-12 h-12 text-slate-650 mx-auto mb-4 animate-bounce" />
          <p className="text-sm uppercase font-black tracking-widest text-slate-700">Warning parameter triggered</p>
          <p className="text-[11px] text-slate-400 mt-1">This specific subcategory process activity lacks an alignment deck. Returning to active neural dashboard.</p>
          <button onClick={() => navigateTo('ChatListActivity')} className="mt-4 text-xs text-indigo-600 font-bold hover:underline">
            Go to Active Pipelines
          </button>
        </div>
      );
  }
};
