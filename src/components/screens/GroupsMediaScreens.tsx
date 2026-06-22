import React, { useState } from 'react';
import { 
  Users, FileText, Image as ImageIcon, Video, Music, Sparkles, Send, Play, Pause, 
  ChevronRight, HelpCircle, HardDrive, Grid, Plus, Check, MessageSquare, Pin, Search,
  Shield, AlertCircle, Settings, Share2, BarChart2, Folder, Download, Star, Eye,
  Sliders, Server, BookOpen, ZoomIn, ZoomOut, Upload, Zap, Lock, Filter, RefreshCw, Trash2
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge, VoiceWave } from '../CyberPanel';

interface ScreenProps {
  activityId: string;
  onNavigate: (activityId: string) => void;
}

export const GroupsMediaScreens: React.FC<ScreenProps> = ({ activityId, onNavigate }) => {
  const navigateTo = (actId: string) => {
    if (onNavigate) onNavigate(actId);
  };

  // ===================================
  // UNIFIED PERSISTENT MOCK STATE
  // ===================================
  
  // -- Groups State --
  const [groups, setGroups] = useState([
    { id: '1', name: 'Galactic Explorers', peers: 8, sector: 'Sector 9', description: 'Exploring anomaly nodes in Andromeda quadrant.', joined: true },
    { id: '2', name: 'AI Innovators Club', peers: 14, sector: 'Sector 14', description: 'Synthesizing neural layers and recursive matrix structures.', joined: true },
    { id: '3', name: 'Developers Syndicate', peers: 42, sector: 'Core Ledger', description: 'Securing structural protocols and compiling backend codes.', joined: true },
    { id: '4', name: 'Solaris Grid Engineers', peers: 29, sector: 'Beta Ring', description: 'Fine-tuning thermonuclear grid conduits.', joined: false }
  ]);
  const [activeGroupId, setActiveGroupId] = useState('1');
  const [newGroupFields, setNewGroupFields] = useState({ name: '', sector: '', desc: '' });
  
  const [chatMessages, setChatMessages] = useState<Record<string, Array<{sender: string, text: string, time: string}>>>({
    '1': [
      { sender: 'Sophia Carter', text: 'Hey everyone! 🌌 Shall we plan the next expedition?', time: '10:30 AM' },
      { sender: 'Liam Johnson', text: 'How about the Andromeda sector? I heard sensors detected anomaly nodes.', time: '10:31 AM' },
      { sender: 'You', text: 'Sounds exciting! My algorithms are compiling diagnostic assets.', time: '10:32 AM' }
    ],
    '2': [
      { sender: 'Alex Rivera', text: 'Recursive self-attention layers aligned.', time: '09:12 AM' },
      { sender: 'You', text: 'Stunning! Let\'s proceed with fine-tuning weights.', time: '09:15 AM' }
    ],
    '3': [
      { sender: 'Elena Rostova', text: 'Warp core diagnostics completed with 0 errors.', time: 'Yesterday' }
    ]
  });
  const [chatInput, setChatInput] = useState('');

  const [members, setMembers] = useState([
    { id: 'm1', name: 'Sophia Carter', role: 'Admin', ping: '12ms', status: 'Online' },
    { id: 'm2', name: 'Liam Johnson', role: 'Moderator', ping: '24ms', status: 'Online' },
    { id: 'm3', name: 'Elena Rostova', role: 'Sentinel', ping: '48ms', status: 'Away' },
    { id: 'm4', name: 'You', role: 'Explorer', ping: '10ms', status: 'Online' }
  ]);

  const [joinRequests, setJoinRequests] = useState([
    { id: 'r1', name: 'Dr. Aris Thorne', sector: 'Research Grid Sigma', pitch: 'Sharing quantum fluctuation ledger codes.' },
    { id: 'r2', name: 'Vesper Lynd', sector: 'Financial Ledger Node', pitch: 'Secure E2E cargo payload architect.' }
  ]);

  const [permissionsMatrix, setPermissionsMatrix] = useState({
    explorer: { write: true, upload: true, invite: false, purge: false },
    sentinel: { write: true, upload: true, invite: true, purge: false }
  });

  // -- Communities State --
  const [communities, setCommunities] = useState([
    { id: 'c1', name: '# aether-programming', members: '14.5K', desc: 'Discuss compiling server.ts backends, bundle size optimization, and frameworks.' },
    { id: 'c2', name: '# ai-creative-studio', members: '8.2K', desc: 'Generative training sets prompts crafting, vector embedding, and finetuning.' }
  ]);
  const [activeCommunityId, setActiveCommunityId] = useState('c1');
  const [newCommunityFields, setNewCommunityFields] = useState({ name: '', theme: 'cyan', desc: '' });
  const [communityPosts, setCommunityPosts] = useState([
    { id: 'p1', author: 'Elena Rostova', title: 'Securing Port 3000 Ingress Layers', content: 'Always bind to host 0.0.0.0 and avoid reading sensitive secrets straight into client bundles.', likes: 142, category: 'c1' },
    { id: 'p2', author: 'Prompt Overlord', title: 'Anti-AI-Slop Styling Techniques', content: 'Use literal human labels and balanced negative space, avoid cluttering status displays.', likes: 210, category: 'c2' }
  ]);
  const [communityEvents, setCommunityEvents] = useState([
    { id: 'e1', title: 'Hackathon Matrix 2.0', date: 'June 25, 2026', enrolled: false },
    { id: 'e2', title: 'Security Audit Symposium', date: 'July 04, 2026', enrolled: true }
  ]);
  const [moderationLogs, setModerationLogs] = useState([
    { id: 'l1', target: 'Anomaly-404', reason: 'Attempting custom port-binding bypass.', priority: 'High', status: 'Open' },
    { id: 'l2', target: 'SpamSentinel', reason: 'Flooding chats with unpolished blocks.', priority: 'Medium', status: 'Resolved' }
  ]);

  // -- Media State --
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState('Nebula Waves - Echo Resonance');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [pdfZoom, setPdfZoom] = useState(100);
  const [pdfPage, setPdfPage] = useState(1);
  const [imageFilters, setImageFilters] = useState({ contrast: 100, hue: 0, glow: 15 });
  const [imageOverlayText, setImageOverlayText] = useState('AETHER COMPILER V4');
  const [downloads, setDownloads] = useState([
    { id: 'd1', name: 'neural_matrix_kernel.bin', progress: 74, speed: '4.2 MB/s', eta: '12s', status: 'Active' },
    { id: 'd2', name: 'spectrogram_synthesizer.hex', progress: 100, speed: '0 B/s', eta: 'Done', status: 'Completed' }
  ]);
  const [favorites, setFavorites] = useState(['1', '3']);
  const [storageQuota, setStorageQuota] = useState({ used: 54.2, total: 128 });

  // -- Roles and Analytics State --
  const [communityRoles, setCommunityRoles] = useState([
    { id: 'role-1', name: 'Planetary Founder', badgeColor: 'magenta', membersCount: 1, permissions: { moderate: true, post: true, manageEvents: true, editSettings: true } },
    { id: 'role-2', name: 'Core Architect', badgeColor: 'cyan', membersCount: 2, permissions: { moderate: true, post: true, manageEvents: true, editSettings: false } },
    { id: 'role-3', name: 'Mod Sentinel', badgeColor: 'amber', membersCount: 3, permissions: { moderate: true, post: true, manageEvents: false, editSettings: false } },
    { id: 'role-4', name: 'Standard Explorer', badgeColor: 'slate', membersCount: 142, permissions: { moderate: false, post: true, manageEvents: false, editSettings: false } }
  ]);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRoleColor, setNewRoleColor] = useState('cyan');
  const [analyticsFilter, setAnalyticsFilter] = useState<'7d' | '30d' | 'all'>('30d');
  const [analyticsMetric, setAnalyticsMetric] = useState<'users' | 'posts' | 'latency'>('users');

  // -- Helper Handlers --
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const currentMessages = chatMessages[activeGroupId] || [];
    setChatMessages({
      ...chatMessages,
      [activeGroupId]: [
        ...currentMessages,
        { sender: 'You', text: chatInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]
    });
    setChatInput('');
  };

  const currentGroup = groups.find(g => g.id === activeGroupId) || groups[0];

  // Determine if active screen belongs to GROUPS, COMMUNITIES, or MEDIA
  const isGroupRelated = activityId.startsWith('Group') || activityId === 'GroupsActivity' || activityId === 'CreateGroupActivity' || activityId === 'JoinRequestsActivity';
  const isCommunityRelated = activityId.startsWith('Community') || activityId === 'CommunitiesActivity' || activityId === 'CreateCommunityActivity';
  const isMediaRelated = !isGroupRelated && !isCommunityRelated;

  // ===================================
  // 1. GROUPS SUITE RENDERER
  // ===================================
  if (isGroupRelated) {
    return (
      <div className="space-y-4 max-w-5xl mx-auto p-1 text-slate-800 animate-fade-in pb-28">
        
        {/* Persistent Cluster Server Header */}
        <div className="bg-white/45 border border-white/50 backdrop-blur-xl rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_8px_30px_rgb(217,70,239,0.06)]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-fuchsia-50 border border-fuchsia-100 rounded-xl">
              <Users className="w-5 h-5 text-fuchsia-600 shrink-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-sans text-slate-800 font-bold uppercase tracking-wide">{currentGroup.name}</h2>
                <CyberBadge variant="magenta">{currentGroup.sector}</CyberBadge>
              </div>
              <p className="text-[11px] text-slate-500 font-sans mt-0.5">{currentGroup.description}</p>
            </div>
          </div>
          
          {/* Quick Hub Navigation Control Strip */}
          <div className="flex flex-wrap gap-1.5 border-t md:border-t-0 border-slate-200 pt-3 md:pt-0">
            <button 
              onClick={() => navigateTo('GroupsActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupsActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              DIRECTORY
            </button>
            <button 
              onClick={() => navigateTo('GroupChatActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupChatActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              CHAT
            </button>
            <button 
              onClick={() => navigateTo('GroupInfoActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupInfoActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              METADATA
            </button>
            <button 
              onClick={() => navigateTo('GroupMembersActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupMembersActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              ROSTER
            </button>
            <button 
              onClick={() => navigateTo('GroupMediaActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupMediaActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              MEDIA
            </button>
            <button 
              onClick={() => navigateTo('GroupFilesActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupFilesActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              FILES
            </button>
            <button 
              onClick={() => navigateTo('GroupAnalyticsActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupAnalyticsActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              TELEMETRY
            </button>
            <button 
              onClick={() => navigateTo('GroupSettingsActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GroupSettingsActivity' ? 'bg-fuchsia-600 text-white border-fuchsia-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-905 border-slate-200/85 hover:bg-white/90'}`}
            >
              SETTINGS
            </button>
          </div>
        </div>

        {/* Dynamic Activity Content Router */}
        {(() => {
          switch (activityId) {
            case 'GroupsActivity':
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <CyberPanel variant="magenta" title="Planetary Wave Clusters" badge="Active Subnets">
                      <div className="space-y-3">
                        {groups.map((g) => (
                          <div 
                            key={g.id} 
                            onClick={() => { setActiveGroupId(g.id); navigateTo('GroupChatActivity'); }}
                            className={`p-3.5 border rounded-xl transition-all cursor-pointer flex justify-between items-center ${activeGroupId === g.id ? 'bg-fuchsia-500/5 border-fuchsia-500/30 shadow-md shadow-fuchsia-500/5' : 'bg-slate-50 border-slate-200 hover:border-slate-350'}`}
                          >
                            <div className="space-y-1">
                              <h4 className="text-xs font-mono font-bold text-slate-800 uppercase flex items-center gap-1.5">
                                {g.name} 
                                {g.id === activeGroupId && <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-ping" />}
                              </h4>
                              <p className="text-[11px] text-slate-500 font-sans mt-0.5">{g.description}</p>
                              <div className="flex gap-2 text-[10px] font-mono text-slate-600 mt-1">
                                <span>SECTOR: {g.sector}</span>
                                <span>•</span>
                                <span className="text-fuchsia-600">{g.peers} ACTIVE NODES</span>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </div>
                        ))}
                      </div>
                    </CyberPanel>
                  </div>
                  
                  <div className="space-y-4">
                    <CyberPanel variant="slate" title="Diagnostic Quickdeck">
                      <div className="space-y-3 text-center py-2">
                        <p className="text-xs font-sans text-slate-650 leading-relaxed">Establish a new private messaging sector on the system core router.</p>
                        <CyberButton variant="magenta" fullWidth onClick={() => navigateTo('CreateGroupActivity')}>
                          Initialize New Cluster
                        </CyberButton>
                      </div>
                    </CyberPanel>
                    
                    <CyberPanel variant="slate" title="Handshake Queue">
                      <div className="space-y-2 py-1 text-center">
                        <p className="text-xs text-slate-650 font-sans">Waitlisted explorer handshake applications seeking membership.</p>
                        <CyberButton variant="slate" fullWidth onClick={() => navigateTo('JoinRequestsActivity')}>
                          View Applications ({joinRequests.length})
                        </CyberButton>
                      </div>
                    </CyberPanel>
                  </div>
                </div>
              );

            case 'CreateGroupActivity':
              return (
                <div className="max-w-xl mx-auto">
                  <CyberPanel variant="magenta" title="Cluster Server Initiator" badge="New Node Setup">
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      if (!newGroupFields.name || !newGroupFields.sector) {
                        alert('Required attributes missing.');
                        return;
                      }
                      const newId = String(groups.length + 1);
                      setGroups([
                        ...groups,
                        { id: newId, name: newGroupFields.name, sector: newGroupFields.sector, description: newGroupFields.desc || 'No descriptive metadata logs.', joined: true }
                      ]);
                      setChatMessages({ ...chatMessages, [newId]: [{ sender: 'System', text: 'Channel secure transport link fully established.', time: '00:00 AM' }] });
                      setActiveGroupId(newId);
                      alert('Secured network cluster spawned.');
                      navigateTo('GroupChatActivity');
                      setNewGroupFields({ name: '', sector: '', desc: '' });
                    }} className="space-y-4 pt-1">
                      <div className="space-y-1">
                        <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Cluster Host Name</label>
                        <input 
                          type="text" 
                          required
                          value={newGroupFields.name}
                          onChange={(e) => setNewGroupFields({ ...newGroupFields, name: e.target.value })}
                          placeholder="e.g. Orion Trading Alliance"
                          className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Routing Sector Identifier</label>
                          <input 
                            type="text" 
                            required
                            value={newGroupFields.sector}
                            onChange={(e) => setNewGroupFields({ ...newGroupFields, sector: e.target.value })}
                            placeholder="e.g. Sector 24-B"
                            className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Access Crypt-Protocol</label>
                          <select className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-2.5 rounded-lg text-slate-700">
                            <option>AES-256 E2E CIPHER</option>
                            <option>DIAGNOSTIC UNSECURE</option>
                            <option>SHA512 SECURE SHELL</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Descriptive Mission Directives</label>
                        <textarea 
                          value={newGroupFields.desc}
                          onChange={(e) => setNewGroupFields({ ...newGroupFields, desc: e.target.value })}
                          rows={3}
                          placeholder="Log specifications, guidelines, or cluster core tasks..."
                          className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-lg text-slate-800"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <CyberButton variant="slate" onClick={() => navigateTo('GroupsActivity')}>Discard</CyberButton>
                        <CyberButton variant="magenta" glow type="submit">Deploy Cluster</CyberButton>
                      </div>
                    </form>
                  </CyberPanel>
                </div>
              );

            case 'GroupChatActivity':
              return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Comm console column */}
                  <div className="lg:col-span-2">
                    <CyberPanel variant="magenta" title={`NODE COMM CHANNEL: ${currentGroup.name}`} badge="E2E ACTIVE">
                      <div className="flex flex-col h-[23rem]">
                        <div className="flex-grow overflow-y-auto space-y-3 pr-1 mb-3">
                          {(chatMessages[activeGroupId] || []).map((msg, idx) => (
                            <div key={idx} className={`flex gap-2.5 max-w-[85%] ${msg.sender === 'You' ? 'ml-auto flex-row-reverse' : ''}`}>
                              <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">
                                {msg.sender[0]}
                              </div>
                              <div className="space-y-0.5">
                                <span className="text-[10px] font-mono text-slate-500 block">{msg.sender}</span>
                                <div className={`p-2.5 rounded-xl text-xs ${msg.sender === 'You' ? 'bg-fuchsia-500/10 text-slate-850 border border-fuchsia-500/15' : 'bg-slate-50 text-slate-700 border border-slate-200'}`}>
                                  {msg.text}
                                </div>
                                <span className={`text-[9px] font-sans text-slate-400 block ${msg.sender === 'You' ? 'text-right' : ''}`}>{msg.time}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-slate-150 pt-2 shrink-0">
                          <input 
                            type="text"
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder={`Broadcast to ${currentGroup.name}...`}
                            className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800"
                          />
                          <CyberButton variant="magenta" type="submit" className="py-1.5 px-3">
                            <Send className="w-3.5 h-3.5" />
                          </CyberButton>
                        </form>
                      </div>
                    </CyberPanel>
                  </div>

                  {/* Quick-links secondary panel */}
                  <div className="space-y-4">
                    <CyberPanel variant="slate" title="Sub-channels Hub">
                      <div className="space-y-2 py-1 text-xs font-mono text-slate-700">
                        <button onClick={() => navigateTo('GroupInfoActivity')} className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-50 cursor-pointer">
                          <span className="flex items-center gap-2"><Pin className="w-3.5 h-3.5 text-fuchsia-500" /> Announcements Pin</span>
                          <span className="text-[10px] bg-slate-100 px-1 py-0.5 rounded text-slate-500">2</span>
                        </button>
                        <button onClick={() => navigateTo('GroupMediaActivity')} className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-50 cursor-pointer">
                          <span className="flex items-center gap-2"><ImageIcon className="w-3.5 h-3.5 text-fuchsia-500" /> Cluster Snapshot Vault</span>
                          <span className="text-[10px] bg-slate-100 px-1 py-0.5 rounded text-slate-500">4</span>
                        </button>
                        <button onClick={() => navigateTo('GroupFilesActivity')} className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-50 cursor-pointer">
                          <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-fuchsia-500" /> Binaries Repository</span>
                          <span className="text-[10px] bg-slate-100 px-1 py-0.5 rounded text-slate-500">3</span>
                        </button>
                      </div>
                    </CyberPanel>
                    <CyberPanel variant="slate" title="Invite Protocol">
                      <div className="py-1 text-center space-y-2">
                        <p className="text-[11px] text-slate-650 font-sans">Grant cluster host keys to external explorer nodes.</p>
                        <CyberButton variant="slate" fullWidth onClick={() => navigateTo('GroupInviteActivity')}>
                          Spawn Invite Key
                        </CyberButton>
                      </div>
                    </CyberPanel>
                  </div>
                </div>
              );

            case 'GroupInfoActivity':
              return (
                <div className="max-w-2xl mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Cluster Host Ledger" badge="SYSTEM INFO">
                    <div className="space-y-3.5">
                      <div className="border-b border-slate-100 pb-2 flex justify-between">
                        <span className="text-xs font-mono text-slate-500">CLUSTER HANDLES</span>
                        <span className="text-xs font-mono text-slate-800 uppercase font-bold">{currentGroup.name}</span>
                      </div>
                      <div className="border-b border-slate-100 pb-2 flex justify-between">
                        <span className="text-xs font-mono text-slate-500">ROUTER PORT STATE</span>
                        <span className="text-xs font-mono text-slate-800 uppercase font-bold text-fuchsia-600">CONNECTED // PORT 3000</span>
                      </div>
                      <div className="border-b border-slate-100 pb-2 flex justify-between">
                        <span className="text-xs font-mono text-slate-500">REPEATER PEER LATENCY</span>
                        <span className="text-xs font-mono text-emerald-600 uppercase font-bold">14MS ACTIVE WAVE</span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">CLUSTERS CHARTER PROTOCOL</span>
                        <p className="text-xs text-slate-650 leading-relaxed font-sans bg-slate-50 p-3 rounded-xl border border-slate-100">
                          This cluster is created inside the decentralized peer framework. All packet payloads are strictly restricted to node transport schedules. Intentionally attempting injection attacks triggers automated quarantine.
                        </p>
                      </div>
                    </div>
                  </CyberPanel>
                  
                  <CyberPanel variant="slate" title="Pinned Announcement Core">
                    <div className="flex gap-3 items-start">
                      <Pin className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold text-slate-800">PINNED BY SOPHIA CARTER // CORE TIME 10:30 AM</span>
                        <p className="text-xs text-slate-600 font-sans leading-relaxed">
                          Synchronizing our local mirror repository with the core network ledger of diagnostic tools before compiling tomorrow.
                        </p>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'GroupMembersActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="magenta" title={`Cluster Nodes: ${currentGroup.name}`} badge={`${members.length} PEERS`}>
                    <div className="divide-y divide-slate-100">
                      {members.map((mbr) => (
                        <div key={mbr.id} className="py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <span className="text-xs font-mono font-bold text-slate-800">{mbr.name}</span>
                            <CyberBadge variant={mbr.role === 'Admin' ? 'magenta' : 'slate'}>{mbr.role}</CyberBadge>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-slate-500">LATENCY: {mbr.ping}</span>
                            <span className={`w-2 h-2 rounded-full ${mbr.status === 'Online' ? 'bg-emerald-500' : mbr.status === 'Away' ? 'bg-amber-400' : 'bg-slate-300'}`} />
                            {mbr.name !== 'You' && (
                              <button 
                                onClick={() => {
                                  setMembers(members.filter(m => m.id !== mbr.id));
                                  alert(`Node ${mbr.name} connection dropped.`);
                                }} 
                                className="text-[10px] text-rose-500 hover:underline font-mono ml-2 cursor-pointer"
                              >
                                PURGE
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <CyberButton variant="slate" fullWidth onClick={() => navigateTo('GroupRolesActivity')}>
                      Matrix Permissions
                    </CyberButton>
                    <CyberButton variant="magenta" glow fullWidth onClick={() => navigateTo('GroupAdminsActivity')}>
                      Administrators
                    </CyberButton>
                  </div>
                </div>
              );

            case 'GroupRolesActivity':
              return (
                <div className="max-w-lg mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Permissions Matrix Adjuster" badge="CLUSTER AUTH">
                    <div className="space-y-4 py-1">
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Configure authorization matrices for low-priority explorer roles in this cluster channel lock.
                      </p>
                      
                      <div className="space-y-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                          <span className="text-xs font-mono font-bold text-slate-800">ROLE: EXPLORER</span>
                          <CyberBadge variant="slate">PEER NODE</CyberBadge>
                        </div>
                        <label className="flex items-center gap-2.5 text-xs text-slate-650 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={permissionsMatrix.explorer.write}
                            onChange={(e) => setPermissionsMatrix({
                              ...permissionsMatrix,
                              explorer: { ...permissionsMatrix.explorer, write: e.target.checked }
                            })}
                            className="rounded border-slate-300 text-fuchsia-600 focus:ring-fuchsia-300" 
                          />
                          Broadcast Text Messages Content
                        </label>
                        <label className="flex items-center gap-2.5 text-xs text-slate-650 cursor-pointer select-none">
                          <input 
                            type="checkbox" 
                            checked={permissionsMatrix.explorer.upload}
                            onChange={(e) => setPermissionsMatrix({
                              ...permissionsMatrix,
                              explorer: { ...permissionsMatrix.explorer, upload: e.target.checked }
                            })}
                            className="rounded border-slate-300 text-fuchsia-600 focus:ring-fuchsia-300" 
                          />
                          Upload Shared Snapshots and Binary files
                        </label>
                        <label className="flex items-center gap-2.5 text-xs text-slate-450 cursor-pointer select-none">
                          <input type="checkbox" disabled checked={false} className="rounded border-slate-300 text-slate-400" />
                          Drop Channel Buffer (Admin Only)
                        </label>
                      </div>

                      <div className="flex gap-2.5">
                        <CyberButton variant="slate" fullWidth onClick={() => navigateTo('GroupMembersActivity')}>Cancel</CyberButton>
                        <CyberButton variant="magenta" glow fullWidth onClick={() => {
                          alert('Matrix authorization tags updated successfully inside ledger.');
                          navigateTo('GroupMembersActivity');
                        }}>
                          Lock Settings
                        </CyberButton>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'GroupAdminsActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Authority Registry Hub" badge="GOVERNING NODES">
                    <div className="space-y-3.5 py-1">
                      <div className="space-y-1 pb-3 border-b border-indigo-50">
                        <h4 className="text-xs font-mono font-bold text-slate-850">ADMIN NODE IDENTIFICATION SHARES</h4>
                        <p className="text-[10px] font-sans text-slate-400">Cryptographic audit keys validating managing coordinators.</p>
                      </div>
                      
                      <div className="space-y-2 font-mono text-[11px]">
                        <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex justify-between">
                          <span className="text-slate-500">SOPHIA CARTER (COORDINATOR)</span>
                          <span className="text-fuchsia-600">ADDR::HASH_923J591FA03</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded border border-slate-200 flex justify-between">
                          <span className="text-slate-500">YOU (PRIMARY SYSTEM HOST)</span>
                          <span className="text-fuchsia-600">ADDR::HASH_CORE3000LOK</span>
                        </div>
                      </div>

                      <div className="pt-2 text-center">
                        <CyberButton variant="slate" fullWidth onClick={() => navigateTo('GroupMembersActivity')}>
                          Return to Roster
                        </CyberButton>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'GroupInviteActivity':
              return (
                <div className="max-w-md mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Invite Signatures Compiler" badge="Access Tokens">
                    <div className="space-y-4 text-center py-2">
                      <div className="w-32 h-32 bg-slate-900 border border-slate-800 rounded-xl mx-auto flex flex-col items-center justify-center p-3">
                        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-800 to-slate-950 flex flex-wrap opacity-60">
                          {/* Mock QR matrix boxes */}
                          <div className="w-6 h-6 border bg-white border-black" />
                          <div className="w-6 h-6 bg-transparent" />
                          <div className="w-6 h-6 border bg-white border-black" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-mono text-slate-700 font-bold">MUTUAL SYSTEM HANDSHAKE LINK</h4>
                        <p className="text-[10px] text-fuchsia-600 font-mono select-all">https://aether.network/handshake?id={activeGroupId}&token=f23</p>
                      </div>
                      <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                        This handshake link restricts entrants using token counters. Key code will expire in exactly 24 hours.
                      </p>
                      <CyberButton variant="magenta" glow fullWidth onClick={() => {
                        alert('Hash link key copied to system clipboard buffer!');
                        navigateTo('GroupChatActivity');
                      }}>
                        Copy Verification Code
                      </CyberButton>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'JoinRequestsActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Admission Queue Router" badge={`${joinRequests.length} REQUESTS`}>
                    {joinRequests.length === 0 ? (
                      <div className="text-center py-6 font-mono text-xs text-slate-400">
                        No pending handshakes on system buffers.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {joinRequests.map((req) => (
                          <div key={req.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                            <div className="flex justify-between items-center border-b border-indigo-50 pb-1.5">
                              <span className="text-xs font-mono font-bold text-slate-800">{req.name}</span>
                              <CyberBadge variant="slate">{req.sector}</CyberBadge>
                            </div>
                            <p className="text-xs text-slate-600 font-sans leading-relaxed">"{req.pitch}"</p>
                            <div className="grid grid-cols-2 gap-2 pt-1">
                              <button 
                                onClick={() => {
                                  setJoinRequests(joinRequests.filter(r => r.id !== req.id));
                                  alert('Handshake discarded.');
                                }}
                                className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-[10px] py-1.5 px-3 rounded-lg font-mono font-bold cursor-pointer"
                              >
                                IMMUNE REJECT
                              </button>
                              <button 
                                onClick={() => {
                                  setJoinRequests(joinRequests.filter(r => r.id !== req.id));
                                  setMembers([...members, { id: req.id, name: req.name, role: 'Explorer', ping: '15ms', status: 'Online' }]);
                                  alert(`Handshake successfully synced! ${req.name} joined.`);
                                }}
                                className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-[10px] py-1.5 px-3 rounded-lg font-mono font-bold cursor-pointer"
                              >
                                APPROVE HARNESS
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CyberPanel>
                  <CyberButton variant="slate" fullWidth onClick={() => navigateTo('GroupsActivity')}>
                    Return to Directory
                  </CyberButton>
                </div>
              );

            case 'GroupAnalyticsActivity':
              return (
                <div className="max-w-2xl mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Telemetry Metrics Viewer" badge="Real-time Load">
                    <div className="space-y-4 py-1">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-150 text-center">
                          <span className="text-[10px] text-slate-450 uppercase block font-mono">PEAK ACTIVE TIMES</span>
                          <span className="text-sm font-mono text-slate-800 font-extrabold uppercase">18:00 UTC</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-150 text-center">
                          <span className="text-[10px] text-slate-450 uppercase block font-mono">BANDWIDTH CONSUMED</span>
                          <span className="text-sm font-mono text-slate-800 font-extrabold uppercase">4.2 GB/HR</span>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-150 text-center">
                          <span className="text-[10px] text-slate-450 uppercase block font-mono">SECURITY INDEX</span>
                          <span className="text-sm font-mono text-emerald-600 font-extrabold uppercase">99.8% OK</span>
                        </div>
                      </div>

                      {/* Pure Interactive Custom SVG Area Chart */}
                      <div className="space-y-1 bg-slate-900 border border-slate-800 p-3 rounded-xl">
                        <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono">
                          <span>OCTETS LOAD FREQUENCY IN RECENT CHANNELS</span>
                          <span className="text-fuchsia-400">PULSING LIVE CYCLE</span>
                        </div>
                        <div className="h-28 w-full flex items-end justify-between pt-4 pb-1 relative">
                          <div className="absolute inset-x-0 top-6 border-t border-slate-800/50" />
                          <div className="absolute inset-x-0 top-14 border-t border-slate-800/50" />
                          
                          {/* Animated SVG area curves */}
                          <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="glowgrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#d946ef" stopOpacity="0.3" />
                                  <stop offset="100%" stopColor="#d946ef" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <path d="M 0 100 Q 15 40, 30 70 T 60 20 T 90 40 T 100 80 L 100 100 Z" fill="url(#glowgrad)" stroke="#d946ef" strokeWidth="1.5" />
                          </svg>

                          <div className="text-[8px] font-mono text-slate-500 absolute left-1 top-2">120 MB</div>
                          <div className="text-[8px] font-mono text-slate-500 absolute left-1 top-10">60 MB</div>
                        </div>
                        <div className="flex justify-between text-[8px] font-mono text-slate-500 pt-1 border-t border-slate-800/40">
                          <span>00:00 UTC</span>
                          <span>06:00 UTC</span>
                          <span>12:00 UTC</span>
                          <span>18:00 UTC</span>
                          <span>NOW</span>
                        </div>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'GroupSettingsActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="magenta" title="Security & Storage Settings" badge="CONFIG DECK">
                    <div className="space-y-4 py-1">
                      <div className="space-y-1.5 pb-2 border-b border-indigo-50">
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block font-extrabold">AUTOMATED PURGE FREQUENCY</span>
                        <div className="flex gap-2">
                          <button className="flex-1 py-1.5 rounded bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-700 text-xs font-mono font-bold">24 HOURS LIMIT</button>
                          <button onClick={() => alert('Updated: Automated retention period changed to 7 Days')} className="flex-1 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-mono font-bold cursor-pointer">7 DAYS RETENTION</button>
                          <button onClick={() => alert('Updated: Automated retention period changed to Infinite')} className="flex-1 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-mono font-bold cursor-pointer">INFINITE RETENTION</button>
                        </div>
                      </div>

                      <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-[9px] text-slate-400 font-mono tracking-wider block font-extrabold">STORAGE CONSUMPTION OVERVIEW</span>
                        <div className="flex justify-between text-xs font-sans text-slate-700 pb-1">
                          <span>Used Allocations: {storageQuota.used} MB</span>
                          <span>Total Limit: {storageQuota.total} MB</span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="bg-fuchsia-500 h-full" style={{ width: `${(storageQuota.used / storageQuota.total) * 100}%` }} />
                        </div>
                      </div>

                      <div className="border hover:border-rose-400/30 bg-rose-500/5 p-3 rounded-xl border-rose-500/10 transition-all flex justify-between items-center">
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-mono font-bold text-rose-700 uppercase">Emergency Channel Purge</h5>
                          <p className="text-[10px] text-slate-500 font-sans">Instantly drop all cached messages, logs, and binaries immediately.</p>
                        </div>
                        <button 
                          onClick={() => {
                            if (confirm('Verify system wipe trigger? All channel logs will be cleared permanently.')) {
                              setChatMessages({ ...chatMessages, [activeGroupId]: [] });
                              alert('Active channel cached payload flushed.');
                            }
                          }}
                          className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-mono text-[10px] font-bold rounded-lg cursor-pointer"
                        >
                          FLUSH BUFFER
                        </button>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'GroupMediaActivity':
              return (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-mono font-bold tracking-wider text-slate-405 uppercase">CLUSTER SNAPSHOT VAULT</h3>
                    <button 
                      onClick={() => alert('Media upload interface triggered.')}
                      className="text-xs font-mono font-bold text-fuchsia-600 hover:text-fuchsia-500 flex items-center gap-1 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" /> UPLOAD NEW ASSET
                    </button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: 'Sector Map Snapshot', type: 'IMAGE', spec: 'Warp coordinates projection', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop' },
                      { title: 'Core Diagnostic Log', type: 'IMAGE', spec: 'Memory register maps', url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=300&auto=format&fit=crop' },
                      { title: 'Drone Alignment Rig', type: 'IMAGE', spec: 'High-altitude drone sweep', url: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?q=80&w=300&auto=format&fit=crop' },
                      { title: 'Quantum Telemetry', type: 'IMAGE', spec: 'Pulsar beam wave analysis', url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=300&auto=format&fit=crop' }
                    ].map((m, idx) => (
                      <div key={idx} className="bg-white/50 border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                        <img src={m.url} alt={m.title} className="w-full h-28 object-cover border-b border-slate-100" referrerPolicy="no-referrer" />
                        <div className="p-3 space-y-1">
                          <span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200 uppercase tracking-widest">{m.type}</span>
                          <h4 className="text-xs font-sans font-bold text-slate-800 uppercase mt-1">{m.title}</h4>
                          <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{m.spec}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );

            case 'GroupFilesActivity':
              return (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xs font-mono font-bold tracking-wider text-slate-405 uppercase">BINARIES REPOSITORY</h3>
                    <button 
                      onClick={() => alert('File upload buffer opened.')}
                      className="text-xs font-mono font-bold text-fuchsia-600 hover:text-fuchsia-500 flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" /> ADD NEW BINARY
                    </button>
                  </div>
                  <CyberPanel variant="magenta" title="Active Nodes Shared Files" badge={`${downloads.length + 2} FILES`}>
                    <div className="divide-y divide-slate-100">
                      {[
                        { name: 'hyperion_navigation_ledger.bin', size: '14.2 MB', author: 'Sophia Carter', date: '3 hours ago' },
                        { name: 'thermonuclear_core_regulator.hex', size: '1.2 MB', author: 'Liam Johnson', date: '1 day ago' },
                        { name: 'compiler_ingress_guidelines.pdf', size: '4.8 MB', author: 'Elena Rostova', date: 'Yesterday' }
                      ].map((file, idx) => (
                        <div key={idx} className="py-3 flex items-center justify-between">
                          <div className="space-y-1">
                            <h4 className="text-xs font-mono font-extrabold text-slate-800 break-all">{file.name}</h4>
                            <div className="flex gap-2 text-[10px] text-slate-400 font-sans">
                              <span>{file.size}</span>
                              <span>•</span>
                              <span>Shared by {file.author}</span>
                              <span>•</span>
                              <span>{file.date}</span>
                            </div>
                          </div>
                          <button 
                            onClick={() => alert(`Initiating secure transfer protocol for ${file.name}`)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-xl border border-slate-200 transition-all cursor-pointer shadow-xs shrink-0"
                            title="Download Binary"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                </div>
              );

            default:
              return (
                <div className="text-slate-400 p-8 text-center font-mono">
                  <HardDrive className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p>This groups / media screen is currently in standby status. Diagnostic vectors verified 100%.</p>
                </div>
              );
          }
        })()}
      </div>
    );
  }

  // ===================================
  // 2. COMMUNITIES SUITE RENDERER
  // ===================================
  if (isCommunityRelated) {
    return (
      <div className="space-y-4 max-w-5xl mx-auto p-1 text-slate-800 animate-fade-in pb-28">
        
        {/* Persistent Forum Plaza Navigation Header */}
        <div className="bg-white/45 border border-white/50 backdrop-blur-xl rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_8px_30px_rgb(99,102,241,0.06)]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl">
              <Sparkles className="w-5 h-5 text-indigo-600 shrink-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-sans text-slate-800 font-bold uppercase tracking-wide">Planetary Forums Hub</h2>
                <CyberBadge variant="cyan">MEMBER</CyberBadge>
              </div>
              <p className="text-[11px] text-slate-505 font-sans mt-0.5">Peer networks bulletin archives, technical libraries, and events.</p>
            </div>
          </div>
          
          {/* Quick Forum Subnavigation strip */}
          <div className="flex flex-wrap gap-1.5 border-t md:border-t-0 border-slate-200 pt-3 md:pt-0">
            <button 
              onClick={() => navigateTo('CommunitiesActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunitiesActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              EXPLORE PLAZA
            </button>
            <button 
              onClick={() => navigateTo('CommunityActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunityActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              DISCUSSIONS REST
            </button>
            <button 
              onClick={() => navigateTo('CommunityMembersActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunityMembersActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              MEMBERS
            </button>
            <button 
              onClick={() => navigateTo('CommunityEventsActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunityEventsActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              EVENTS
            </button>
            <button 
              onClick={() => navigateTo('CommunityModerationActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunityModerationActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              MOD QUEUE
            </button>
            <button 
              onClick={() => navigateTo('CommunityRolesActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunityRolesActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              ROLES
            </button>
            <button 
              onClick={() => navigateTo('CommunityAnalyticsActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunityAnalyticsActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              ANALYTICS
            </button>
            <button 
              onClick={() => navigateTo('CommunitySettingsActivity')} 
              className={`px-2.5 py-1 text-[10px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CommunitySettingsActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
            >
              CUSTOMS
            </button>
          </div>
        </div>

        {/* Dynamic Activity Router for Communities */}
        {(() => {
          switch (activityId) {
            case 'CommunitiesActivity':
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <CyberPanel variant="cyan" title="Sectors Communities" badge={`${communities.length} HOUSES`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {communities.map((c) => (
                          <div 
                            key={c.id} 
                            onClick={() => { setActiveCommunityId(c.id); navigateTo('CommunityActivity'); }}
                            className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-cyan-400/30 cursor-pointer hover:shadow-md transition-all self-start"
                          >
                            <div>
                              <h4 className="text-xs font-mono text-cyan-700 font-extrabold uppercase">{c.name}</h4>
                              <p className="text-[11px] text-slate-500 font-sans mt-0.5 line-clamp-2 leading-relaxed">{c.desc}</p>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-mono text-slate-450 border-t border-slate-150 pt-2 shrink-0">
                              <span>{c.members} EXPLORERS</span>
                              <CyberButton variant="slate" className="py-0.5 px-2">ENTER CORE</CyberButton>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CyberPanel>
                  </div>
                  
                  <div className="space-y-4">
                    <CyberPanel variant="slate" title="Initiate Plaza Hub">
                      <div className="space-y-3.5 text-center py-2">
                        <p className="text-xs font-sans text-slate-650 leading-relaxed">Publish a global, searchable community forum for massive social grids.</p>
                        <CyberButton variant="cyan" fullWidth onClick={() => navigateTo('CreateCommunityActivity')}>
                          Establish Community Hub
                        </CyberButton>
                      </div>
                    </CyberPanel>
                    
                    <CyberPanel variant="slate" title="Planetary Rules Directive">
                      <div className="space-y-2 py-1 text-center">
                        <p className="text-xs text-slate-650 font-sans">Strict guidelines and behavioral protocols inside the forum plazadeck.</p>
                        <CyberButton variant="slate" fullWidth onClick={() => navigateTo('CommunityRulesActivity')}>
                          View Public Charter
                        </CyberButton>
                      </div>
                    </CyberPanel>
                  </div>
                </div>
              );

            case 'CreateCommunityActivity':
              return (
                <div className="max-w-xl mx-auto">
                  <CyberPanel variant="cyan" title="Community Hub Initializer" badge="REGISTRY LOCK">
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      if (!newCommunityFields.name) {
                        alert('Community name cannot be blank.');
                        return;
                      }
                      const newId = `c${communities.length + 1}`;
                      setCommunities([
                        ...communities,
                        { id: newId, name: `# ${newCommunityFields.name.toLowerCase().replace(/\s+/g, '-')}`, members: '1', desc: newCommunityFields.desc || 'System generated.' }
                      ]);
                      setActiveCommunityId(newId);
                      alert('Planetary Hub published to central explorer index.');
                      navigateTo('CommunitiesActivity');
                      setNewCommunityFields({ name: '', theme: 'cyan', desc: '' });
                    }} className="space-y-4 pt-1">
                      <div className="space-y-1">
                        <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Hub Title Handle</label>
                        <input 
                          type="text" 
                          required
                          value={newCommunityFields.name}
                          onChange={(e) => setNewCommunityFields({ ...newCommunityFields, name: e.target.value })}
                          placeholder="e.g. Cybernetic Space Synthesizers"
                          className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Hub Theme Shader</label>
                        <div className="flex gap-2">
                          {['cyan', 'magenta', 'slate'].map((thm) => (
                            <button 
                              key={thm}
                              type="button"
                              onClick={() => setNewCommunityFields({ ...newCommunityFields, theme: thm })}
                              className={`flex-1 py-1.5 rounded-lg text-xs font-mono uppercase font-bold text-slate-700 cursor-pointer hover:bg-slate-100 border ${newCommunityFields.theme === thm ? 'border-cyan-500 bg-cyan-50/20 text-cyan-600' : 'border-slate-200 bg-white'}`}
                            >
                              {thm} shader
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Hub Directive Specifications</label>
                        <textarea 
                          value={newCommunityFields.desc}
                          onChange={(e) => setNewCommunityFields({ ...newCommunityFields, desc: e.target.value })}
                          rows={3}
                          placeholder="Summary visible to exploring nodes browsing the central plaza directories..."
                          className="w-full bg-slate-50 border border-slate-200 text-xs p-3 rounded-lg text-slate-800"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2">
                        <CyberButton variant="slate" onClick={() => navigateTo('CommunitiesActivity')}>Cancel</CyberButton>
                        <CyberButton variant="cyan" glow type="submit">Establish Hub</CyberButton>
                      </div>
                    </form>
                  </CyberPanel>
                </div>
              );

            case 'CommunityActivity':
              const activeComm = communities.find(c => c.id === activeCommunityId) || communities[0];
              const relevantPosts = communityPosts.filter(p => p.category === activeCommunityId);

              return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Channels outline sidebar */}
                  <div className="space-y-4">
                    <CyberPanel variant="cyan" title="Planetary Forums" badge="CHANNELS LIST">
                      <div className="space-y-2 py-1">
                        {communities.map((c) => (
                          <div 
                            key={c.id} 
                            onClick={() => setActiveCommunityId(c.id)}
                            className={`p-2 rounded-lg text-xs font-mono font-bold cursor-pointer transition-all ${activeCommunityId === c.id ? 'bg-cyan-500/10 text-cyan-600' : 'text-slate-600 hover:bg-slate-50'}`}
                          >
                            {c.name}
                          </div>
                        ))}
                      </div>
                    </CyberPanel>

                    <CyberPanel variant="slate" title="Rules Agreement">
                      <div className="py-1 space-y-2 text-center">
                        <p className="text-[11px] text-slate-650 font-sans">Abide by System charter protocol regulatory frameworks.</p>
                        <CyberButton variant="slate" fullWidth onClick={() => navigateTo('CommunityRulesActivity')}>
                          Browse Charter
                        </CyberButton>
                      </div>
                    </CyberPanel>
                  </div>

                  {/* Scrolling Feed layout */}
                  <div className="lg:col-span-2 space-y-4">
                    <CyberPanel variant="cyan" title={`FEED CHRONICLES: ${activeComm.name.toUpperCase()}`} badge="PUBLIC SECTOR">
                      {relevantPosts.length === 0 ? (
                        <div className="text-center py-10 font-mono text-slate-400 text-xs">
                          No broadcast posts registered in this community channel block.
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {relevantPosts.map((post) => (
                            <div key={post.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                                <span>PUBLISHED BY AUTHOR: {post.author.toUpperCase()}</span>
                                <CyberBadge variant="slate">{post.likes} ENDORSES</CyberBadge>
                              </div>
                              <h4 className="text-xs font-mono font-extrabold text-slate-800 leading-snug">{post.title}</h4>
                              <p className="text-xs text-slate-650 font-sans leading-relaxed">{post.content}</p>
                              <div className="flex gap-2.5 pt-1.5 border-t border-slate-150 shrink-0">
                                <button 
                                  onClick={() => {
                                    setCommunityPosts(communityPosts.map(p => p.id === post.id ? { ...p, likes: p.likes + 1 } : p));
                                    alert('Post storage reference endorsed.');
                                  }}
                                  className="text-[10px] font-mono font-bold text-cyan-600 hover:text-cyan-500 flex items-center gap-1 cursor-pointer"
                                >
                                  <Star className="w-3 h-3 text-cyan-500" /> ENDORSE INDEX
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CyberPanel>
                  </div>
                </div>
              );

            case 'CommunityMembersActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="cyan" title="Forums Reputation Rankings Ledger" badge="TOP REPUTABLE">
                    <div className="divide-y divide-slate-100 py-1">
                      {[
                        { name: 'Elena Rostova', badge: 'Protocol Auditor', pts: '2,400 Contribution Points' },
                        { name: 'Alex Rivera', badge: 'Core Architect', pts: '1,920 Contribution Points' },
                        { name: 'Prompt Overlord', badge: 'Prompt Optimist', pts: '1,420 Contribution Points' }
                      ].map((mem, idx) => (
                        <div key={idx} className="py-2.5 flex items-center justify-between">
                          <div className="space-y-0.5">
                            <span className="text-xs font-mono font-bold text-slate-850 flex items-center gap-1.5">
                              {mem.name} <CyberBadge variant="cyan">{mem.badge}</CyberBadge>
                            </span>
                            <span className="text-[10px] text-slate-500 font-sans block">{mem.pts}</span>
                          </div>
                          <span className="text-sm font-mono font-extrabold text-slate-350">RANK #0{idx+1}</span>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                  <CyberButton variant="slate" fullWidth onClick={() => navigateTo('CommunitiesActivity')}>
                    Return to Directory
                  </CyberButton>
                </div>
              );

            case 'CommunityEventsActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="cyan" title="Sectors Events Registries" badge="Symposium Calendars">
                    <div className="space-y-4 py-1">
                      {communityEvents.map((ev) => (
                        <div key={ev.id} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center">
                          <div className="space-y-1">
                            <h4 className="text-xs font-mono font-extrabold text-slate-800 uppercase">{ev.title}</h4>
                            <p className="text-[10px] font-sans text-slate-400">Scheduled: {ev.date}</p>
                          </div>
                          <button 
                            onClick={() => {
                              setCommunityEvents(communityEvents.map(e => e.id === ev.id ? { ...e, enrolled: !e.enrolled } : e));
                              alert(ev.enrolled ? 'Unregistered from event queue.' : 'Enrolled successfully. Neural hash key dispatched.');
                            }}
                            className={`px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold cursor-pointer ${ev.enrolled ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' : 'bg-cyan-600 hover:bg-cyan-500 text-white'}`}
                          >
                            {ev.enrolled ? 'CANCEL REGISTRY' : 'CLAIM ACCESS KEY'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'CommunityRulesActivity':
              return (
                <div className="max-w-2xl mx-auto space-y-4">
                  <CyberPanel variant="cyan" title="Regulatory Directives Charter" badge="TERMS AGREEMENT">
                    <div className="space-y-4 py-1 font-sans text-xs text-slate-650 leading-relaxed">
                      <div className="space-y-1 border-l-2 border-l-cyan-500 pl-3">
                        <span className="text-[10px] font-mono text-cyan-600 font-extrabold block">DIRECTIVE SECTION 01 // PORT DEPLOYMENT</span>
                        <p>
                          Explorer units must strictly abide by standard network ingress routes. Attempting custom port binding hacks on the central staging container will result in temporary node locks on central diagnostic databases.
                        </p>
                      </div>
                      <div className="space-y-1 border-l-2 border-l-cyan-500 pl-3">
                        <span className="text-[10px] font-mono text-cyan-600 font-extrabold block">DIRECTIVE SECTION 02 // COGNITIVE DECORUM</span>
                        <p>
                          Avoid publishing unpolished generative output blocks. Human interactions inside public bulletin categories must represent validated structural inputs rather than automated diagnostic telemetry.
                        </p>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'CommunityModerationActivity':
              return (
                <div className="max-w-2xl mx-auto space-y-4">
                  <CyberPanel variant="cyan" title="Moderators Flagging Queue" badge={`${moderationLogs.filter(l => l.status === 'Open').length} ACTIVE CASES`}>
                    <div className="space-y-3.5 py-1">
                      {moderationLogs.map((log) => (
                        <div key={log.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
                          <div className="flex justify-between items-center border-b border-indigo-50 pb-1.5">
                            <span className="text-xs font-mono font-bold text-slate-800">TARGET SUBNET: {log.target}</span>
                            <CyberBadge variant={log.priority === 'High' ? 'magenta' : 'slate'}>{log.priority} ALERT</CyberBadge>
                          </div>
                          <p className="text-xs text-slate-600 font-sans leading-relaxed">Report: "{log.reason}"</p>
                          <div className="flex justify-end gap-2 text-[10px] font-mono pt-1">
                            <span className="text-slate-450 mr-auto self-center">STATUS HASH: {log.status}</span>
                            {log.status === 'Open' ? (
                              <button 
                                onClick={() => {
                                  setModerationLogs(moderationLogs.map(l => l.id === log.id ? { ...l, status: 'Resolved' } : l));
                                  alert('Anomaly resolved and node reinstated.');
                                }}
                                className="px-2.5 py-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded cursor-pointer"
                              >
                                PARDON NODE
                              </button>
                            ) : (
                              <span className="text-emerald-600 font-bold uppercase py-1">RESOLVED // INACTIVE</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                </div>
              );

            case 'CommunityRolesActivity':
              return (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-50 pb-3">
                    <div>
                      <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">ACCESS PROTOX REGISTRY</h3>
                      <p className="text-[11px] text-slate-500 font-sans mt-0.5">Customize node permission matrices and assign core network badges.</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono bg-fuchsia-50 text-fuchsia-600 px-2 py-0.5 rounded border border-fuchsia-100">
                        ● MATRIX OVERLAY REWRITE ACTIVE
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Panel: Role Permissions Matrix & Creator */}
                    <div className="space-y-4">
                      <CyberPanel variant="cyan" title="Planetary Roles Manifest" badge={`${communityRoles.length} BADGES`}>
                        <div className="space-y-4 py-1">
                          {communityRoles.map((role) => (
                            <div key={role.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-3 hover:border-cyan-400/20 transition-all">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className={`w-2.5 h-2.5 rounded-full ${
                                    role.badgeColor === 'magenta' ? 'bg-fuchsia-500' :
                                    role.badgeColor === 'cyan' ? 'bg-cyan-500' :
                                    role.badgeColor === 'amber' ? 'bg-amber-500' :
                                    role.badgeColor === 'emerald' ? 'bg-emerald-500' : 'bg-slate-400'
                                  }`}></span>
                                  <h4 className="text-xs font-mono font-bold text-slate-800 uppercase">{role.name}</h4>
                                </div>
                                <CyberBadge variant={
                                  role.badgeColor === 'magenta' ? 'rose' :
                                  role.badgeColor === 'cyan' ? 'cyan' :
                                  role.badgeColor === 'amber' ? 'amber' :
                                  role.badgeColor === 'emerald' ? 'emerald' : 'slate'
                                }>
                                  {role.membersCount} Nodes
                                </CyberBadge>
                              </div>

                              {/* Permission toggles */}
                              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                                <label className="flex items-center gap-2 text-[10px] font-mono text-slate-650 cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    checked={role.permissions.post}
                                    onChange={() => {
                                      setCommunityRoles(communityRoles.map(r => r.id === role.id ? { ...r, permissions: { ...r.permissions, post: !r.permissions.post } } : r));
                                    }}
                                    className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                                  />
                                  <span>POST DATA</span>
                                </label>
                                <label className="flex items-center gap-2 text-[10px] font-mono text-slate-650 cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    checked={role.permissions.moderate}
                                    onChange={() => {
                                      setCommunityRoles(communityRoles.map(r => r.id === role.id ? { ...r, permissions: { ...r.permissions, moderate: !r.permissions.moderate } } : r));
                                    }}
                                    className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                                  />
                                  <span>MODERATE QUEUE</span>
                                </label>
                                <label className="flex items-center gap-2 text-[10px] font-mono text-slate-650 cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    checked={role.permissions.manageEvents}
                                    onChange={() => {
                                      setCommunityRoles(communityRoles.map(r => r.id === role.id ? { ...r, permissions: { ...r.permissions, manageEvents: !r.permissions.manageEvents } } : r));
                                    }}
                                    className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                                  />
                                  <span>EVENTS ESCROW</span>
                                </label>
                                <label className="flex items-center gap-2 text-[10px] font-mono text-slate-650 cursor-pointer">
                                  <input 
                                    type="checkbox" 
                                    checked={role.permissions.editSettings}
                                    onChange={() => {
                                      setCommunityRoles(communityRoles.map(r => r.id === role.id ? { ...r, permissions: { ...r.permissions, editSettings: !r.permissions.editSettings } } : r));
                                    }}
                                    className="rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 w-3.5 h-3.5"
                                  />
                                  <span>EDIT CONFIG</span>
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CyberPanel>

                      <CyberPanel variant="cyan" title="Provision Custom Role Buffer" badge="ROUTER WRITE">
                        <div className="space-y-3.5 py-1">
                          <div className="space-y-1">
                            <label className="text-[10px] font-mono text-slate-400 block uppercase">ROLE ALIAS</label>
                            <input 
                              type="text" 
                              placeholder="e.g. Subnet Overseer" 
                              value={newRoleName}
                              onChange={(e) => setNewRoleName(e.target.value)}
                              className="w-full bg-white border border-slate-205 text-xs rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-400 font-sans shadow-2xs"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[10px] font-mono text-slate-400 block uppercase">VISUAL HEX COLOR</label>
                            <div className="flex gap-2">
                              {['cyan', 'magenta', 'amber', 'emerald', 'slate'].map((col) => (
                                <button
                                  key={col}
                                  onClick={() => setNewRoleColor(col)}
                                  className={`flex-1 py-1.5 rounded-lg border text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                                    newRoleColor === col 
                                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm' 
                                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                                  }`}
                                >
                                  {col}
                                </button>
                              ))}
                            </div>
                          </div>

                          <button 
                            onClick={() => {
                              if (!newRoleName.trim()) {
                                alert('Please provide role name buffer.');
                                return;
                              }
                              const roleId = `role-${Date.now()}`;
                              setCommunityRoles([
                                ...communityRoles,
                                { id: roleId, name: newRoleName.trim(), badgeColor: newRoleColor, membersCount: 0, permissions: { moderate: false, post: true, manageEvents: false, editSettings: false } }
                              ]);
                              setNewRoleName('');
                              alert('New role signature provisioned into the permission matrix.');
                            }}
                            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[10px] py-2.5 rounded-xl border border-cyan-500/20 font-bold tracking-wide shadow-sm hover:shadow transition-all cursor-pointer"
                          >
                            PROVISION NEW NETWORK BADGE
                          </button>
                        </div>
                      </CyberPanel>
                    </div>

                    {/* Right Panel: Role Assignment to Active Nodes Info */}
                    <div>
                      <CyberPanel variant="cyan" title="Node Badge Assignments" badge={`${members.length} SYSTEM TERMINALS`}>
                        <div className="space-y-3.5 py-1">
                          {members.map((member) => (
                            <div key={member.id} className="p-3 bg-white/50 border border-slate-200 rounded-xl flex items-center justify-between gap-3">
                              <div className="space-y-0.5">
                                <h4 className="text-xs font-sans font-extrabold text-slate-800">{member.name}</h4>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-mono text-slate-400">ROLE ID:</span>
                                  <span className="text-[10px] font-sans font-bold text-slate-600">{member.role}</span>
                                </div>
                              </div>

                              <div className="space-y-1">
                                <label className="text-[9px] font-mono text-slate-400 block text-right">BADGE SELECTOR</label>
                                <select 
                                  value={member.role}
                                  onChange={(e) => {
                                    setMembers(members.map(m => m.id === member.id ? { ...m, role: e.target.value } : m));
                                    alert(`Assigned badge: ${e.target.value} to terminal ${member.name}`);
                                  }}
                                  className="bg-white border border-slate-200 text-[10px] rounded-lg py-1 px-2 focus:outline-none focus:border-cyan-400 font-mono"
                                >
                                  {/* Auto-generate options from community roles */}
                                  {communityRoles.map(cr => (
                                    <option key={cr.id} value={cr.name}>{cr.name.toUpperCase()}</option>
                                  ))}
                                  <option value="Admin">ADMIN</option>
                                  <option value="Moderator">MODERATOR</option>
                                  <option value="Sentinel">SENTINEL</option>
                                  <option value="Explorer">EXPLORER</option>
                                </select>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CyberPanel>
                    </div>
                  </div>
                </div>
              );

            case 'CommunityAnalyticsActivity':
              return (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-50 pb-3">
                    <div>
                      <h3 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">COGNITIVE ENGAGEMENT METRICS</h3>
                      <p className="text-[11px] text-slate-500 font-sans mt-0.5">Statistical projections on bandwidth, public interactions, and consensus trends.</p>
                    </div>
                    {/* Time frame filter toggles */}
                    <div className="flex gap-1.5">
                      {(['7d', '30d', 'all'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setAnalyticsFilter(filter)}
                          className={`px-3 py-1 rounded-lg border font-mono text-[9px] font-bold uppercase transition-all cursor-pointer ${
                            analyticsFilter === filter 
                              ? 'bg-cyan-650 text-white border-cyan-600 shadow-2xs' 
                              : 'bg-white text-slate-550 border-slate-200/80 hover:bg-slate-50'
                          }`}
                        >
                          {filter === '7d' ? '7 DAYS' : filter === '30d' ? '30 DAYS' : 'HISTORICAL RECORDS'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Stat Cards Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { 
                        title: 'ACTIVE PEERS INDEX', 
                        value: analyticsFilter === '7d' ? '1,842' : analyticsFilter === '30d' ? '14,510' : '48,194', 
                        change: '+14% target', 
                        color: 'text-cyan-600',
                        desc: 'Uniquely verified active keys'
                      },
                      { 
                        title: 'CONSENSUS DATA REPOS', 
                        value: analyticsFilter === '7d' ? '104' : analyticsFilter === '30d' ? '412' : '1,980', 
                        change: '+8.2% pulse', 
                        color: 'text-fuchsia-600',
                        desc: 'Public discussion entries'
                      },
                      { 
                        title: 'COMPRESSED LINK LATENCY', 
                        value: '9.4ms', 
                        change: '0.00% anomaly', 
                        color: 'text-emerald-600',
                        desc: 'Global sync transmission speed'
                      },
                      { 
                        title: 'SIGNAL WAVE INTEGRITY', 
                        value: '99.98%', 
                        change: 'Optimal band', 
                        color: 'text-amber-500',
                        desc: 'Packet success diagnostics'
                      }
                    ].map((stat, idx) => (
                      <div key={idx} className="bg-white/45 border border-slate-205 rounded-2xl p-4 space-y-2 hover:shadow-md transition-all">
                        <span className="text-[8px] font-mono tracking-wider text-slate-400 block uppercase font-extrabold">{stat.title}</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-xl font-mono font-bold ${stat.color}`}>{stat.value}</span>
                          <span className="text-[9px] font-sans font-semibold text-emerald-600">{stat.change}</span>
                        </div>
                        <p className="text-[10px] text-slate-500 font-sans leading-relaxed">{stat.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Graphical Analysis & Active Sectors Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left: Dynamic SVG Graph Columns representing active member growth */}
                    <div className="md:col-span-2">
                      <CyberPanel variant="cyan" title="Chronology Growth Chart (Live Stream Ingress)" badge="QUANTUM VISUALIZER">
                        <div className="space-y-4 py-2">
                          <div className="flex justify-between items-center text-[10px] font-mono text-slate-405">
                            <span>MEMBER PEAKS PROTOCOL</span>
                            <span>FILTER PRESET: {analyticsFilter.toUpperCase()}</span>
                          </div>

                          {/* SVG Bar Chart Visualization */}
                          <div className="relative aspect-[21/9] w-full border border-slate-150 rounded-2xl bg-slate-950 p-4 flex items-end justify-between gap-2 overflow-hidden">
                            {/* Grid Layout lines */}
                            <div className="absolute inset-x-0 top-1/4 border-b border-white/5 pointer-events-none"></div>
                            <div className="absolute inset-x-0 top-2/4 border-b border-white/5 pointer-events-none"></div>
                            <div className="absolute inset-x-0 top-3/4 border-b border-white/5 pointer-events-none"></div>

                            {/* Dynamically simulated height elements based on selection */}
                            {[
                              { label: 'W01', percent: analyticsFilter === '7d' ? 30 : analyticsFilter === '30d' ? 45 : 20 },
                              { label: 'W02', percent: analyticsFilter === '7d' ? 45 : analyticsFilter === '30d' ? 38 : 34 },
                              { label: 'W03', percent: analyticsFilter === '7d' ? 62 : analyticsFilter === '30d' ? 52 : 48 },
                              { label: 'W04', percent: analyticsFilter === '7d' ? 50 : analyticsFilter === '30d' ? 70 : 61 },
                              { label: 'W05', percent: analyticsFilter === '7d' ? 75 : analyticsFilter === '30d' ? 62 : 79 },
                              { label: 'W06', percent: analyticsFilter === '7d' ? 92 : analyticsFilter === '30d' ? 88 : 83 },
                              { label: 'W07', percent: analyticsFilter === '7d' ? 100 : analyticsFilter === '30d' ? 95 : 98 }
                            ].map((bar, barIdx) => (
                              <div key={barIdx} className="flex-1 flex flex-col items-center gap-1.5 z-10 group relative">
                                {/* Value bubble on hover */}
                                <span className="absolute -top-7 bg-cyan-600 text-white font-mono text-[8px] px-1.5 py-0.5 rounded border border-cyan-500 shadow opacity-0 group-hover:opacity-100 transition-all">
                                  {bar.percent * 14}
                                </span>
                                <div className="w-full bg-cyan-950/40 rounded-t-lg overflow-hidden flex items-end h-32 md:h-44 border border-cyan-500/10">
                                  <div 
                                    className="bg-gradient-to-t from-cyan-600 to-indigo-500 w-full rounded-t-lg transition-all duration-500 scale-y-100 origin-bottom hover:brightness-110"
                                    style={{ height: `${bar.percent}%` }}
                                  ></div>
                                </div>
                                <span className="text-[9px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">{bar.label}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between items-center text-[9px] font-mono text-slate-400 pt-1">
                            <span>SATELLITE DOWNLINK: STANDBY</span>
                            <span>SCALED RELATIVE: 0 - 1,400 ACTIVE</span>
                          </div>
                        </div>
                      </CyberPanel>
                    </div>

                    {/* Right: Sector Breakdown List */}
                    <div>
                      <CyberPanel variant="cyan" title="Forums Subnets Weight" badge="LOAD MATRIX">
                        <div className="space-y-4 py-1.5">
                          {[
                            { name: '# aether-programming', weight: '54.2%', color: 'from-cyan-500 to-indigo-500', value: '14.5K nodes' },
                            { name: '# ai-creative-studio', weight: '30.8%', color: 'from-indigo-500 to-fuchsia-500', value: '8.2K nodes' },
                            { name: '# security-audits', weight: '10.5%', color: 'from-fuchsia-500 to-rose-500', value: '2.8K nodes' },
                            { name: '# system-sandbox', weight: '4.5%', color: 'from-rose-500 to-amber-500', value: '1.2K nodes' }
                          ].map((sec, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[11px] font-sans">
                                <span className="font-bold text-slate-700">{sec.name}</span>
                                <span className="font-mono text-slate-500 font-bold">{sec.value}</span>
                              </div>
                              <div className="w-full bg-slate-100 h-2 rounded-xl relative overflow-hidden border border-slate-200">
                                <div 
                                  className={`bg-gradient-to-r ${sec.color} h-full rounded-xl transition-all duration-300`}
                                  style={{ width: sec.weight }}
                                ></div>
                              </div>
                              <div className="flex justify-between text-[8px] font-mono text-slate-400">
                                <span>COMMUNITY RATIO</span>
                                <span>{sec.weight} SHARE</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CyberPanel>
                    </div>
                  </div>
                </div>
              );

            case 'CommunitySettingsActivity':
              return (
                <div className="max-w-xl mx-auto space-y-4">
                  <CyberPanel variant="cyan" title="Forums Custom Settings" badge="CONFIG SUITE">
                    <div className="space-y-4 py-1">
                      <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <span className="text-[9px] text-slate-400 font-mono block uppercase font-extrabold">ACCENT COLOR PROTOCOL</span>
                        <div className="flex gap-2.5 pt-1">
                          <button className="flex-1 py-1.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-xs font-mono font-bold">Electric Cyan (Active)</button>
                          <button onClick={() => alert('Changed global theme accent to Solar Magenta')} className="flex-1 py-1.5 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs font-mono font-bold cursor-pointer">Solar Magenta</button>
                        </div>
                      </div>

                      <div className="border border-slate-200 hover:border-cyan-400/30 bg-white p-3.5 rounded-xl transition-all flex justify-between items-center text-xs font-sans">
                        <div className="space-y-0.5">
                          <h5 className="font-mono font-bold text-slate-800 uppercase">Indexing Settings</h5>
                          <p className="text-[10px] text-slate-450">Toggles visibility of this hub in global public explorer search trees.</p>
                        </div>
                        <button onClick={() => alert('Toggled public index listings')} className="px-3 py-1.5 hover:bg-slate-100 font-mono text-[10px] font-bold rounded-lg border border-slate-200 cursor-pointer">
                          HIDE HUB
                        </button>
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              );

            default:
              return (
                <div className="text-slate-400 p-8 text-center font-mono">
                  <HardDrive className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <p>This groups / media screen is currently in standby status. Diagnostic vectors verified 100%.</p>
                </div>
              );
          }
        })()}
      </div>
    );
  }

  // ===================================
  // 3. MEDIA SUITE RENDERER
  // ===================================
  return (
    <div className="space-y-4 max-w-5xl mx-auto p-1 text-slate-800 animate-fade-in pb-28">
      
      {/* Persistent Media Vault Header */}
      <div className="bg-white/45 border border-white/50 backdrop-blur-xl rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_8px_30px_rgb(99,102,241,0.06)]">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl">
            <HardDrive className="w-5 h-5 text-indigo-600 shrink-0" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-sans text-slate-800 font-bold uppercase tracking-wide">Decentralized Media Vault</h2>
              <CyberBadge variant="cyan">STORAGE OK</CyberBadge>
            </div>
            <p className="text-[11px] text-slate-500 font-sans mt-0.5">Defragment files, manage photos, videos, synth loops, and document manual books.</p>
          </div>
        </div>
        
        {/* Strip navigation for media toolsets */}
        <div className="flex flex-wrap gap-1.5 border-t md:border-t-0 border-slate-200 pt-3 md:pt-0">
          <button 
            onClick={() => navigateTo('GalleryActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'GalleryActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            COMBINED VAULT
          </button>
          <button 
            onClick={() => navigateTo('PhotosActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'PhotosActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            PHOTOS
          </button>
          <button 
            onClick={() => navigateTo('VideosActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'VideosActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            CINEMATICS
          </button>
          <button 
            onClick={() => navigateTo('AudioActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'AudioActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            SYNTH DIRECTORY
          </button>
          <button 
            onClick={() => navigateTo('FilesActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'FilesActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            DISKS TREE
          </button>
          <button 
            onClick={() => navigateTo('DownloadsActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'DownloadsActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            DOWNLOADS ({downloads.filter(d=>d.status==='Active').length})
          </button>
          <button 
            onClick={() => navigateTo('FavoritesActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'FavoritesActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            FAVORITES
          </button>
          <button 
            onClick={() => navigateTo('CloudStorageActivity')} 
            className={`px-2 py-1 text-[9px] font-mono rounded-lg transition-all border cursor-pointer ${activityId === 'CloudStorageActivity' ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs' : 'bg-white/60 text-slate-650 hover:text-slate-900 border-slate-200/80 hover:bg-white/90'}`}
          >
            QUOTA
          </button>
        </div>
      </div>

      {/* Dynamic Activity Router for Media Vault */}
      {(() => {
        switch (activityId) {
          case 'GalleryActivity':
            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <CyberPanel variant="cyan" title="Chronological Sub-vault Items" badge="All Snapshots">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { title: 'Warp Drive Diagnostics', type: 'JPG SCAN', id: '1', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=200&auto=format&fit=crop', actSpec: 'PhotosActivity' },
                        { title: 'Project Hyperion Drone', type: 'JPG SCAN', id: '2', img: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?q=80&w=200&auto=format&fit=crop', actSpec: 'PhotosActivity' },
                        { title: 'Thermonuclear Core Flare', type: 'MP4 STREAM', id: '3', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=200&auto=format&fit=crop', actSpec: 'VideosActivity' },
                        { title: 'Aether Protocol Guidelines', type: 'PDF MANUAL', id: '4', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&auto=format&fit=crop', actSpec: 'PDFViewerActivity' }
                      ].map((md) => (
                        <div 
                          key={md.id}
                          onClick={() => navigateTo(md.actSpec)}
                          className="border border-slate-200 hover:border-cyan-500/20 rounded-xl p-2.5 bg-slate-50 relative group cursor-pointer hover:shadow-md transition-all self-start"
                        >
                          <div className="aspect-video bg-slate-250 rounded-lg overflow-hidden relative">
                            <img src={md.img} alt={md.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                            <span className="absolute bottom-1.5 right-1.5 bg-slate-900/80 border border-slate-800 px-1 py-0.5 rounded text-[8px] font-mono text-slate-350">{md.type}</span>
                          </div>
                          <div className="mt-2 text-xs">
                            <span className="text-[9px] font-mono text-slate-450 uppercase block">NODE ATTACHMENT</span>
                            <h5 className="font-mono text-slate-800 font-extrabold truncate">{md.title}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                </div>

                <div className="space-y-4">
                  <CyberPanel variant="slate" title="Optimize Disk Space">
                    <div className="space-y-3.5 text-center py-2">
                      <p className="text-xs font-sans text-slate-650 leading-relaxed">Compress temporary index files or sweep double backup items with immediate operations.</p>
                      <CyberButton variant="cyan" fullWidth onClick={() => navigateTo('MediaManagerActivity')}>
                        Disk Optimizer Desk
                      </CyberButton>
                    </div>
                  </CyberPanel>
                  <CyberPanel variant="slate" title="File Directories">
                    <div className="space-y-2 py-1 text-center">
                      <p className="text-xs text-slate-650 font-sans">Aether secure local folder lists organizing raw telemetry streams.</p>
                      <CyberButton variant="slate" fullWidth onClick={() => navigateTo('CollectionsActivity')}>
                        Browse Folder Directories
                      </CyberButton>
                    </div>
                  </CyberPanel>
                </div>
              </div>
            );

          case 'PhotosActivity':
            return (
              <div className="space-y-4">
                <CyberPanel variant="cyan" title="Static Photos Ledger Grid" badge="SNAPSHOT FILES">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-1">
                    {[
                      { id: '1', title: 'Hologenesis Mesh', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=250&auto=format&fit=crop' },
                      { id: '2', title: 'Solar Core Projections', img: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?q=80&w=250&auto=format&fit=crop' },
                      { id: '3', title: 'Decentralized Mirrors', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=250&auto=format&fit=crop' },
                      { id: '4', title: 'Warp Reactor Core', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=250&auto=format&fit=crop' }
                    ].map((ph) => (
                      <div 
                        key={ph.id}
                        onClick={() => setSelectedPhoto(ph.img)}
                        className="p-1 px-1 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-cyan-500/20 group hover:shadow transition-all relative"
                      >
                        <div className="aspect-square bg-slate-200 rounded-lg overflow-hidden relative">
                          <img src={ph.img} alt={ph.title} className="w-full h-full object-cover shrink-0" referrerPolicy="no-referrer" />
                        </div>
                        <div className="p-2 text-[10px] font-mono">
                          <span className="text-slate-400">RESOLUTION: 1440P</span>
                          <h5 className="font-extrabold text-slate-700 truncate">{ph.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </CyberPanel>

                {selectedPhoto && (
                  <div className="max-w-md mx-auto relative animate-fade-in">
                    <CyberPanel variant="cyan" title="Detailed Image Inspector" badge="LIVE SNAPSHOT">
                      <div className="space-y-3.5 text-center">
                        <img src={selectedPhoto} alt="Inspector" className="w-full h-52 object-cover rounded-xl border border-slate-200" referrerPolicy="no-referrer" />
                        <div className="flex gap-2">
                          <CyberButton variant="slate" fullWidth onClick={() => navigateTo('ImageEditorActivity')}>
                            Load Into Editor
                          </CyberButton>
                          <CyberButton variant="cyan" glow fullWidth onClick={() => setSelectedPhoto(null)}>
                            Close Inspector
                          </CyberButton>
                        </div>
                      </div>
                    </CyberPanel>
                  </div>
                )}
              </div>
            );

          case 'VideosActivity':
            return (
              <div className="max-w-3xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Decentralized Film Deck Clips" badge="CINEMATICS">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-1">
                    {[
                      { title: 'Andromeda Nebula Fluctuations loop', id: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop', duration: '0:14' },
                      { title: 'Cyberpunk Skyline Spatial Scanning', id: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?q=80&w=600&auto=format&fit=crop', duration: '0:08' }
                    ].map((vd) => (
                      <div 
                        key={vd.id}
                        onClick={() => { setSelectedVideo(vd.id); navigateTo('VideoPlayerActivity'); }}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 cursor-pointer hover:border-cyan-400/30 transition-all text-left"
                      >
                        <div className="aspect-video bg-slate-200 rounded-lg overflow-hidden relative">
                          <img src={vd.id} alt="Thumbnail" className="w-full h-full object-cover" />
                          <span className="absolute bottom-1.5 right-1.5 bg-slate-900/80 border border-slate-800 text-[8px] font-mono text-slate-350 px-1 py-0.5 rounded">{vd.duration}</span>
                        </div>
                        <h4 className="text-xs font-mono font-extrabold text-slate-800 line-clamp-1">{vd.title}</h4>
                      </div>
                    ))}
                  </div>
                </CyberPanel>
              </div>
            );

          case 'AudioActivity':
            return (
              <div className="max-w-2xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Sectors Synth Resonance Library" badge="LOOPS DIRECTORY">
                  <div className="divide-y divide-slate-100 py-1 text-xs">
                    {[
                      { title: 'Nebula Waves - Echo Resonance', dur: '3:05', size: '4.2 MB' },
                      { title: 'Solar Flare Beats - Orbital Loop', dur: '4:12', size: '5.8 MB' },
                      { title: 'Midnight Drive - Retro Cyber', dur: '2:54', size: '3.9 MB' }
                    ].map((trk, idx) => (
                      <div key={idx} className="py-2.5 flex justify-between items-center bg-slate-50/20 px-2 rounded-lg hover:bg-slate-50 my-1">
                        <div className="space-y-0.5">
                          <span className="font-mono font-bold text-slate-800 block">{trk.title}</span>
                          <span className="text-[9px] font-mono text-slate-450 uppercase block">STREAM SPEED: 320KBPS AAC • FILE SIZE: {trk.size}</span>
                        </div>
                        <button 
                          onClick={() => { setSelectedTrack(trk.title); setIsAudioPlaying(true); navigateTo('AudioPlayerActivity'); }}
                          className="px-2.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-[9px] font-bold rounded-lg cursor-pointer"
                        >
                          PLAY TRACK
                        </button>
                      </div>
                    ))}
                  </div>
                </CyberPanel>
              </div>
            );

          case 'FilesActivity':
            return (
              <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <CyberPanel variant="cyan" title="Diagnostic Disks File Navigator" badge="LOCAL FILES">
                    <div className="space-y-1 py-1 font-mono text-xs">
                      {[
                        { name: 'warp_core_diagnostics.hex', type: 'SYSTEM BINARY', size: '1.2 MB' },
                        { name: 'spectrogram_synthesizer.hex', type: 'COMPILE ASSET', size: '420 KB' },
                        { name: 'index_vector_matrix.bin', type: 'VEC DAT', size: '2.5 MB' }
                      ].map((fi, idx) => (
                        <div key={idx} className="flex justify-between p-2 rounded hover:bg-slate-50 cursor-pointer text-slate-700">
                          <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-cyan-500" /> {fi.name}</span>
                          <span className="text-[10px] text-slate-450 self-center">{fi.size}</span>
                        </div>
                      ))}
                    </div>
                  </CyberPanel>
                </div>
                
                <div className="space-y-4">
                  <CyberPanel variant="slate" title="Storage Status">
                    <div className="space-y-1.5 py-1 text-xs">
                      <span className="font-mono text-[10px] text-slate-450 block font-extrabold uppercase">DECENTRAL STORAGE SECTOR</span>
                      <div className="flex justify-between text-slate-750 font-bold">
                        <span>Used: {storageQuota.used} MB</span>
                        <span>Quota: {storageQuota.total} MB</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: `${(storageQuota.used / storageQuota.total)*100}%` }} />
                      </div>
                    </div>
                  </CyberPanel>
                </div>
              </div>
            );

          case 'DownloadsActivity':
            return (
              <div className="max-w-xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Active Transfer Pipeline Queues" badge="DOWNLOAD MANAGER">
                  <div className="space-y-3.5 py-1 text-xs">
                    {downloads.map((dw) => (
                      <div key={dw.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-left">
                        <div className="flex justify-between items-center font-mono">
                          <span className="font-bold text-slate-800">{dw.name}</span>
                          <CyberBadge variant={dw.status === 'Completed' ? 'cyan' : 'slate'}>{dw.status}</CyberBadge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] text-slate-500 font-sans">
                            <span>Speed: {dw.speed}</span>
                            <span>ETA: {dw.eta}</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500" style={{ width: `${dw.progress}%` }} />
                          </div>
                        </div>
                        {dw.status === 'Active' && (
                          <button 
                            onClick={() => {
                              setDownloads(downloads.map(d => d.id === dw.id ? { ...d, status: 'Paused', speed: '0 B/s' } : d));
                              alert('Download stream paused.');
                            }}
                            className="bg-slate-200 text-slate-700 text-[9px] font-mono px-2 py-1 rounded cursor-pointer"
                          >
                            PAUSE STREAM
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </CyberPanel>
              </div>
            );

          case 'FavoritesActivity':
            return (
              <div className="max-w-xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Bookmarked Shared Snapshot Pins" badge="FAVORITES BOARD">
                  <div className="space-y-2 py-1">
                    {[
                      { title: 'Warp Drive Diagnostics', size: '1.2 MB' },
                      { title: 'Thermonuclear Core Flare', size: '2.5 MB' }
                    ].map((fav, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 border border-slate-150 rounded-lg flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-cyan-500" />
                          <span className="text-xs font-mono font-bold text-slate-800">{fav.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-450">{fav.size}</span>
                      </div>
                    ))}
                  </div>
                </CyberPanel>
              </div>
            );

          case 'CollectionsActivity':
            return (
              <div className="max-w-2xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Virtual Repositories Folders" badge="COLLECTIONS">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-1">
                    {[
                      { name: 'System Overlays', count: 12, size: '25 MB' },
                      { name: 'Project Blueprints', count: 4, size: '4.2 MB' },
                      { name: 'Synth Loop Tracks', count: 8, size: '18 MB' }
                    ].map((col, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                        <div className="flex items-center gap-2">
                          <Folder className="w-5 h-5 text-cyan-600" />
                          <h4 className="text-xs font-mono font-extrabold text-slate-850 uppercase">{col.name}</h4>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-500 border-t border-slate-150 pt-2 shrink-0">
                          <span>{col.count} FILES</span>
                          <span>{col.size} USED</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CyberPanel>
              </div>
            );

          case 'PDFViewerActivity':
            return (
              <div className="max-w-2xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Technical Specifications Handbook" badge={`PDF DOCUMENT // PAGE ${pdfPage} OF 8`}>
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 relative overflow-hidden text-left cursor-default select-none">
                    <div className="absolute top-1.5 right-1.5 opacity-10"><BookOpen className="w-24 h-24 text-cyan-500" /></div>
                    <div className="space-y-2 border-b border-slate-800 pb-3">
                      <h4 className="text-xs font-mono font-extrabold text-cyan-400">AETHER DECENTRALIZED PROTOCOL SPECIFICATION</h4>
                      <p className="text-[9px] font-mono text-slate-500">REVISION VECTOR: V4.2.1-SECURE // COMPILE EPOCH 842.1</p>
                    </div>

                    <div className="space-y-3 text-slate-300 font-sans text-xs leading-relaxed" style={{ transform: `scale(${pdfZoom/100})`, transformOrigin: 'top left' }}>
                      <p>
                        This manual details regulatory compliance schemas regarding diagnostic server deployment configurations. Staging containers operating on virtual environments must maintain absolute E2E security envelopes.
                      </p>
                      <p>
                        Always define custom environment files inside the root workspace using standard labels. Intentionally exposing secret authorization credentials inside public static client modules triggers immediate gateway isolation.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-150">
                    <div className="flex justify-center items-center gap-2">
                      <button 
                        onClick={() => { setPdfZoom(Math.max(80, pdfZoom - 10)); }} 
                        className="p-1 px-2.5 rounded hover:bg-slate-200 cursor-pointer text-slate-600"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] font-mono text-slate-700 min-w-14 text-center">{pdfZoom}% Zoom</span>
                      <button 
                        onClick={() => { setPdfZoom(Math.min(150, pdfZoom + 10)); }} 
                        className="p-1 px-2.5 rounded hover:bg-slate-200 cursor-pointer text-slate-600"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex justify-center gap-2">
                      <CyberButton 
                        disabled={pdfPage === 1}
                        variant="slate" 
                        onClick={() => setPdfPage(Math.max(1, pdfPage - 1))}
                        className="py-1 px-3"
                      >
                        PREV PAGE
                      </CyberButton>
                      <CyberButton 
                        disabled={pdfPage === 8}
                        variant="cyan" 
                        onClick={() => setPdfPage(Math.min(8, pdfPage + 1))}
                        className="py-1 px-3 text-[10px]"
                      >
                        NEXT PAGE
                      </CyberButton>
                    </div>
                  </div>
                </CyberPanel>
              </div>
            );

          case 'VideoPlayerActivity':
            return (
              <div className="max-w-2xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Video Cyber Terminal Staging" badge="Holographic Screen">
                  <div className="bg-slate-950 border border-slate-900 rounded-xl overflow-hidden shadow-2xl relative">
                    <div className="aspect-video w-full relative">
                      <img src={selectedVideo} alt="Playing movie" className="w-full h-full object-cover opacity-60 pointer-events-none" />
                      {isVideoPlaying && (
                        <div className="absolute inset-0 bg-cyan-500/5 animate-pulse flex items-center justify-center">
                          <span className="text-[10px] font-mono text-cyan-400 animate-bounce">DIAG_STREAM_OK // 1080P SOURCE</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3.5 bg-slate-900 flex justify-between items-center text-xs">
                      <div className="flex justify-center items-center gap-3">
                        <button 
                          onClick={() => { setIsVideoPlaying(!isVideoPlaying); }} 
                          className="p-1.5 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 cursor-pointer"
                        >
                          {isVideoPlaying ? <Pause className="w-4 h-4 shrink-0" /> : <Play className="w-4 h-4 shrink-0 ml-0.5" />}
                        </button>
                        <span className="font-mono text-[10px] text-slate-400">0:00 / 0:14</span>
                      </div>
                      
                      <div className="flex justify-center gap-2">
                        <button className="px-2 py-0.5 bg-slate-800 rounded font-mono text-[9px] text-slate-400">AUTO 4K</button>
                        <button className="px-2 py-0.5 bg-slate-800 rounded font-mono text-[9px] text-slate-400">60FPS</button>
                      </div>
                    </div>
                  </div>
                </CyberPanel>
              </div>
            );

          case 'AudioPlayerActivity':
            return (
              <CyberPanel variant="cyan" title="Audio Wave Symmetrical Deck" badge="Active Synth Stream" className="max-w-md mx-auto">
                <div className="space-y-5 text-center py-2">
                  <div className="w-36 h-36 rounded-full border border-cyan-500/20 bg-slate-950 flex items-center justify-center relative mx-auto shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    <div className="absolute inset-3 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '8s' }}></div>
                    <Music className={`w-10 h-10 text-cyan-400 ${isAudioPlaying ? 'animate-bounce' : ''}`} />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-mono text-slate-800 font-extrabold tracking-wider">{selectedTrack}</h4>
                    <p className="text-[9px] font-mono text-slate-550 uppercase">STREAM SPEED: 320 KBPS CD QUALITY</p>
                  </div>

                  <div className="flex justify-center py-1">
                    <VoiceWave active={isAudioPlaying} />
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <button className="text-slate-500 hover:text-slate-800 font-mono text-[10px] uppercase cursor-pointer">PREV</button>
                    <button
                      onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                      className="w-11 h-11 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition-all cursor-pointer shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                    >
                      {isAudioPlaying ? <Pause className="w-4 h-4 shrink-0" /> : <Play className="w-4 h-4 ml-0.5 shrink-0" />}
                    </button>
                    <button className="text-slate-500 hover:text-slate-800 font-mono text-[10px] uppercase cursor-pointer">NEXT</button>
                  </div>

                  <div className="space-y-1 text-left bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <div className="text-[9px] font-mono text-slate-400 uppercase px-1">CHANNELS PLAYLIST PREFERENCES</div>
                    {[
                      'Nebula Waves - Echo Resonance',
                      'Solar Flare Beats - Orbital Loop',
                      'Midnight Drive - Retro Cyber'
                    ].map((trkOpt) => (
                      <div 
                        key={trkOpt}
                        onClick={() => { setSelectedTrack(trkOpt); setIsAudioPlaying(true); }}
                        className={`text-[11px] font-mono p-1 rounded-md transition-all cursor-pointer ${selectedTrack === trkOpt ? 'text-cyan-600 bg-cyan-500/5 font-bold' : 'text-slate-600 hover:bg-slate-100'}`}
                      >
                        {selectedTrack === trkOpt ? '● ' : '○ '} {trkOpt}
                      </div>
                    ))}
                  </div>
                </div>
              </CyberPanel>
            );

          case 'ImageEditorActivity':
            return (
              <div className="max-w-xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Image Shaders Compiler Editor" badge="PIXEL CONTROL">
                  <div className="space-y-4 py-1">
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl relative overflow-hidden flex items-center justify-center min-h-[14rem]">
                      <div 
                        className="w-full h-full max-h-52 object-cover rounded-lg border border-slate-800 opacity-80" 
                        style={{ 
                          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: `contrast(${imageFilters.contrast}%) hue-rotate(${imageFilters.hue}deg) saturate(${100 + imageFilters.glow}%)` 
                        }} 
                      />
                      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
                        <span className="text-sm font-mono tracking-widest text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] font-extrabold">{imageOverlayText || 'PREVIEW'}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">Contrast Filter ({imageFilters.contrast}%)</span>
                        <input 
                          type="range" 
                          min={50} 
                          max={150}
                          value={imageFilters.contrast}
                          onChange={(e) => setImageFilters({ ...imageFilters, contrast: Number(e.target.value) })}
                          className="w-full accent-cyan-500" 
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">Hue Matrix ({imageFilters.hue}°)</span>
                        <input 
                          type="range" 
                          min={0} 
                          max={360}
                          value={imageFilters.hue}
                          onChange={(e) => setImageFilters({ ...imageFilters, hue: Number(e.target.value) })}
                          className="w-full accent-cyan-500" 
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">Neon Brightness Aura</span>
                        <input 
                          type="range" 
                          min={0} 
                          max={100}
                          value={imageFilters.glow}
                          onChange={(e) => setImageFilters({ ...imageFilters, glow: Number(e.target.value) })}
                          className="w-full accent-cyan-500" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1.5 border-t border-slate-150 shrink-0">
                      <label className="text-[9px] font-sans font-extrabold text-slate-500 uppercase">Text Overlay Label</label>
                      <input 
                        type="text" 
                        value={imageOverlayText}
                        onChange={(e) => setImageOverlayText(e.target.value)}
                        placeholder="e.g. SYSTEM PROTOCOL ALPHA"
                        className="w-full bg-slate-50 border border-slate-200 text-xs py-2 px-3 rounded-lg text-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 pt-1">
                      <CyberButton variant="slate" fullWidth onClick={() => navigateTo('PhotosActivity')}>Cancel</CyberButton>
                      <CyberButton variant="cyan" glow fullWidth onClick={() => {
                        alert('Picture coordinates optimized and saved to memory snapshots.');
                        navigateTo('PhotosActivity');
                      }}>
                        Compile Layer
                      </CyberButton>
                    </div>
                  </div>
                </CyberPanel>
              </div>
            );

          case 'CloudStorageActivity':
            return (
              <div className="max-w-xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Decentralized Storage Mirror Core" badge="STORAGE CAP">
                  <div className="space-y-4.5 py-1 text-xs text-slate-650">
                    <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex justify-between items-center font-mono">
                        <span className="font-bold text-slate-800">CENTRAL ALLOCATIONS SLOTS</span>
                        <CyberBadge variant="cyan">42% COMMITTED</CyberBadge>
                      </div>
                      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500" style={{ width: '42.3%' }} />
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                        Currently running 3 decentralized secure backup mirrors across remote system gateways to prevent diagnostic logs degradation.
                      </p>
                    </div>

                    <div className="border border-slate-200 p-3 rounded-xl flex justify-between items-center font-sans">
                      <div className="space-y-0.5">
                        <h5 className="font-mono font-bold text-slate-800 uppercase">Upgrade Storage Module</h5>
                        <p className="text-[10px] text-slate-450">Unlock 1 TB secure storage allocations on the primary cloud ledger.</p>
                      </div>
                      <button onClick={() => alert('Dispatched credit escrow proposal for disk upgrades.')} className="px-3.5 py-1.5 bg-cyan-600 hover:bg-cyan-500 font-mono text-[10px] font-bold text-white rounded-lg cursor-pointer">
                        UPGRADE (9.99/mo)
                      </button>
                    </div>
                  </div>
                </CyberPanel>
              </div>
            );

          case 'MediaManagerActivity':
            return (
              <div className="max-w-xl mx-auto space-y-4">
                <CyberPanel variant="cyan" title="Disk Space Defragment Optimizer" badge="COMPRESSION CONTROLLER">
                  <div className="space-y-4 py-1">
                    <p className="text-xs text-slate-650 leading-relaxed font-sans">
                      Automatically defragment local temporary buffers, empty redundant backup indices, and optimize heavy imagery snapshots.
                    </p>

                    <div className="divide-y divide-slate-100 font-mono text-[11px] text-slate-700 bg-slate-50 rounded-xl p-3 border border-slate-200">
                      <div className="py-2 flex justify-between">
                        <span>UNORDERED TEMP MEMORY</span>
                        <span className="text-cyan-600">842 KB DETECTED</span>
                      </div>
                      <div className="py-2 flex justify-between">
                        <span>DUPLICATED HOLOGENESIS SNAPSHOTS</span>
                        <span className="text-cyan-603">1.2 MB DUPLICATED</span>
                      </div>
                    </div>

                    <CyberButton variant="cyan" glow fullWidth onClick={() => {
                      alert('Buffer swept successfully. Defragment complete. Retrenched 2.1 MB raw disk cells space!');
                      navigateTo('GalleryActivity');
                    }}>
                      Initiate Optimize Matrix Sweep
                    </CyberButton>
                  </div>
                </CyberPanel>
              </div>
            );

          default:
            return (
              <div className="text-slate-400 p-8 text-center font-mono">
                <HardDrive className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p>This groups / media screen is currently in standby status. Diagnostic vectors verified 100%.</p>
              </div>
            );
        }
      })()}
    </div>
  );
};
