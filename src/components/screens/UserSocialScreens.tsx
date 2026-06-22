import React, { useState } from 'react';
import { 
  User, Mail, MapPin, Globe, Award, Heart, MessageSquare, Twitter, Github, Linkedin, 
  Sparkles, Image, Check, Star, Edit3, Camera, ThumbsUp, Plus, ArrowLeft, ArrowRight,
  UserCheck, ShieldAlert, BadgeInfo, Compass, Power, Share2, Eye, Link, Trash2, Sliders, RefreshCw, Layers,
  Fingerprint, HelpCircle, Shield, EyeOff, Search, Smartphone, ShieldCheck, Zap, Info, Calendar, Bell, Copy, Award as Medal
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge } from '../CyberPanel';

interface ScreenProps {
  activityId: string;
  onNavigate?: (activityId: string) => void;
}

export const UserSocialScreens: React.FC<ScreenProps> = ({ activityId, onNavigate }) => {
  // Shared persistent-like mock states
  const [profile, setProfile] = useState({
    fullName: 'Alex Johnson',
    username: '@alex_j',
    bio: 'Exploring the future, one line of code at a time using neural architectures.',
    email: 'alex.johnson@example.com',
    location: 'Silicon Valley, CA',
    website: 'alexj.dev',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    coverUrl: 'linear-gradient(to right, rgba(99,102,241,0.1), rgba(217,70,239,0.1))',
    glowColor: 'cyan',
    hueOffset: 120
  });

  // Avatar & Cover customization selections
  const [selectedCoverPattern, setSelectedCoverPattern] = useState('Cyber Grid');
  const [avatarGlow, setAvatarGlow] = useState('cyan');
  const [avatarHue, setAvatarHue] = useState(120);

  // Stats / Social Lists
  const [followers, setFollowers] = useState([
    { id: '1', name: 'Marcus Aurelius', handle: '@marcus.dev', mutual: true, muted: false },
    { id: '2', name: 'Sarah Connor', handle: '@cyber_dyne', mutual: false, muted: false },
    { id: '3', name: 'Ada Lovelace', handle: '@analytical_engine', mutual: true, muted: true },
    { id: '4', name: 'Linus Torvalds', handle: '@penguin_lord', mutual: false, muted: false }
  ]);

  const [following, setFollowing] = useState([
    { id: 'f1', name: 'Andrew Ng', handle: '@andrew_deep', verified: true },
    { id: 'f2', name: 'Yann LeCun', handle: '@yann_gradient', verified: true },
    { id: 'f3', name: 'Demis Hassabis', handle: '@demis_deepmind', verified: true }
  ]);

  const [blockedUsers, setBlockedUsers] = useState([
    { id: 'b1', name: 'Scraping-Bot-20', handle: '@spambot20', reason: 'High-frequency telemetry scraping' },
    { id: 'b2', name: 'Cyber Bully Node', handle: '@trollnode', reason: 'Abuses protocol feedback loops' }
  ]);

  const [mutedUsers, setMutedUsers] = useState([
    { id: 'm1', name: 'Broadcaster Alpha', handle: '@broad_alpha', reason: 'Excessive status signals' }
  ]);

  const [friendRequests, setFriendRequests] = useState([
    { id: 'r1', name: 'Guido van Rossum', handle: '@gvanrossum', mutuals: '5 Mutuals', time: '14m ago' },
    { id: 'r2', name: 'Grace Hopper', handle: '@grace_h', mutuals: '12 Mutuals', time: '2h ago' }
  ]);

  const [friends, setFriends] = useState([
    { id: 'fr1', name: 'Alan Turing', handle: '@enigma_solver', status: 'Online', trusted: true },
    { id: 'fr2', name: 'Margaret Hamilton', handle: '@apollo_code', status: 'Off-grid', trusted: false },
    { id: 'fr3', name: 'Dennis Ritchie', handle: '@c_origin', status: 'Online', trusted: true }
  ]);

  // Social Feed Data
  const [feedLiked, setFeedLiked] = useState<Record<string, boolean>>({});
  const [posts, setPosts] = useState([
    {
      id: 'post-1',
      author: 'Sophia Carter',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
      handle: '@sophiac',
      time: '12 min ago',
      content: 'Just deployed a custom cognitive synthesizer in Aether Node 4! The speech response rates is phenomenal. Using low contexts rate 14.2B params models.',
      likes: 42,
      comments: [
        { author: 'Marcus Aurelius', text: 'Stunning response rate!' },
        { author: 'Alex Johnson', text: 'Incredible work on the latency optimization.' }
      ],
      showComments: false
    },
    {
      id: 'post-2',
      author: 'Liam Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      handle: '@liam_j',
      time: '1 hour ago',
      content: 'Anybody looking to explore sub-zones under Sector 10 proximity? Scanning for peer nodes using nearby sensors. Bring extra decryption contracts.',
      likes: 19,
      comments: [],
      showComments: false
    }
  ]);
  const [newPost, setNewPost] = useState('');
  const [tempComment, setTempComment] = useState<Record<string, string>>({});

  // Achievements & Badges state
  const [ownedBadges, setOwnedBadges] = useState([
    { id: 'b-gen', label: 'Genesis Handshake', desc: 'Node established in epoch 01', icon: Sparkles, color: 'text-amber-500', pinned: true },
    { id: 'b-pro', label: 'Supercharged Pro', desc: 'Active high-octane bandwidth link', icon: Zap, color: 'text-indigo-600', pinned: true },
    { id: 'b-aud', label: 'Certified Auditor', desc: 'Conducted 5 independent trust audits', icon: ShieldCheck, color: 'text-emerald-500', pinned: false },
    { id: 'b-con', label: 'Deep Pioneer', desc: 'Integrated custom neural model cores', icon: Power, color: 'text-cyan-500', pinned: false }
  ]);

  // Reputation & Audits state
  const [auditing, setAuditing] = useState(false);
  const [auditScore, setAuditScore] = useState(98.4);

  // Radar Dynamic Positions (Nearby nodes)
  const [radarScanning, setRadarScanning] = useState(false);
  const [nearbyNodes, setNearbyNodes] = useState([
    { id: 'nb1', name: 'Zane Vindicator', distance: '12m', bearing: 'NE', active: true, rel: 84 },
    { id: 'nb2', name: 'Nova Express', distance: '45m', bearing: 'S', active: false, rel: 92 },
    { id: 'nb3', name: 'Giga Byte', distance: '118m', bearing: 'W', active: true, rel: 70 }
  ]);

  // User gallery static media lists
  const [galleryImages, setGalleryImages] = useState([
    { id: 'g1', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop', title: 'Silicon Substrate Array' },
    { id: 'g2', url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=300&auto=format&fit=crop', title: 'Kernel Node Output' },
    { id: 'g3', url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=300&auto=format&fit=crop', title: 'Air-gapped Decryptor' },
    { id: 'g4', url: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=300&auto=format&fit=crop', title: 'Atmospheric Interface' }
  ]);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Search filter options
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTier, setSearchTier] = useState('ALL');

  // invitations
  const [invitations, setInvitations] = useState([
    { id: 'inv-1', title: 'Sector 4 Hackers Assembly', organizer: 'Aether Core', date: 'June 24, 2026', status: 'PENDING' },
    { id: 'inv-2', title: 'Cryptographic Protocol Audit', organizer: 'CertiK Node', date: 'July 01, 2026', status: 'ACCEPTED' },
    { id: 'inv-3', title: 'Decentralized Pizza Party', organizer: 'Satoshi Guild', date: 'July 15, 2026', status: 'DECLINED' }
  ]);

  const [copiedLink, setCopiedLink] = useState(false);

  // Navigation Helper
  const goBackToProfile = () => onNavigate?.('ProfileActivity');

  // Triggering visual radar simulation sweep
  const runRadarScan = () => {
    setRadarScanning(true);
    setTimeout(() => {
      setRadarScanning(false);
      // Randomize coordinates
      setNearbyNodes(prev => prev.map(n => ({
        ...n,
        distance: `${Math.floor(Math.random() * 200) + 5}m`,
        active: Math.random() > 0.3
      })));
    }, 1500);
  };

  // Toggle Pinned Badges
  const toggleBadgePin = (id: string) => {
    setOwnedBadges(prev => prev.map(badge => {
      if (badge.id === id) {
        return { ...badge, pinned: !badge.pinned };
      }
      return badge;
    }));
  };

  // Create post logic
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;
    const addedPost = {
      id: `custom-${Date.now()}`,
      author: profile.fullName,
      avatar: profile.avatarUrl,
      handle: profile.username,
      time: 'Just now',
      content: newPost,
      likes: 0,
      comments: [],
      showComments: false
    };
    setPosts([addedPost, ...posts]);
    setNewPost('');
  };

  // Comment logic
  const submitComment = (postId: string) => {
    const text = tempComment[postId];
    if (!text || !text.trim()) return;
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { author: 'Alex Johnson', text }]
        };
      }
      return post;
    }));
    setTempComment(prev => ({ ...prev, [postId]: '' }));
  };

  // -------------------------------------------------------------
  // DUAL VIEW DETERMINATOR (EACH OF THE 25 SCREEN PATHS)
  // -------------------------------------------------------------
  switch (activityId) {

    // ==========================================
    // 1. ProfileActivity (Personal Node Dashboard)
    // ==========================================
    case 'ProfileActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5 pb-2">
          <CyberPanel variant="cyan" title="Personal Cyber Identity" badge="Owner Core">
            <div className="space-y-4">
              {/* Cover view */}
              <div 
                className="h-28 w-full border border-slate-200/50 rounded-2xl relative overflow-hidden flex flex-col justify-end p-3 text-white"
                style={{ background: profile.coverUrl }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-0"></div>
                <div className="z-10 flex justify-between items-end">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-indigo-200 uppercase bg-black/40 px-2 py-0.5 rounded-md border border-indigo-500/30">
                      Z-NODE 4048
                    </span>
                  </div>
                  <button 
                    onClick={() => onNavigate?.('CoverEditorActivity')}
                    className="p-1 px-2.5 bg-black/50 border border-white/20 text-[10px] uppercase font-mono tracking-tight hover:bg-black/85 rounded-lg text-indigo-300 transition-all cursor-pointer"
                  >
                    Change Banner
                  </button>
                </div>
              </div>

              {/* Avatar overlay grid with statistics */}
              <div className="flex gap-4 items-start pt-1">
                <div className="relative">
                  <div className={`p-0.5 rounded-full border-2 border-indigo-500 shadow-md`}>
                    <img 
                      src={profile.avatarUrl} 
                      alt="Avatar" 
                      className="w-16 h-16 rounded-full object-cover filter brightness-100"
                      style={{ filter: `hue-rotate(${profile.hueOffset}deg)` }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <button
                    onClick={() => onNavigate?.('AvatarEditorActivity')}
                    className="absolute -bottom-1 -right-1 bg-indigo-600 hover:bg-indigo-700 text-white p-1 rounded-full border border-white transition-all cursor-pointer"
                    title="Synthesize Avatar"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-1.5 justify-between">
                    <h2 className="text-base font-sans font-black tracking-tight uppercase text-slate-900">{profile.fullName}</h2>
                    <CyberBadge variant="cyan">PRO OWNER</CyberBadge>
                  </div>
                  <p className="text-xs text-indigo-600 font-mono font-bold">{profile.username}</p>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed italic">"{profile.bio}"</p>
                </div>
              </div>

              {/* Core numbers */}
              <div className="grid grid-cols-3 gap-2 py-1.5 border-y border-indigo-100">
                <button 
                  onClick={() => onNavigate?.('FollowersActivity')}
                  className="bg-slate-50 hover:bg-slate-100 p-2 rounded-xl text-center transition-all border border-slate-100"
                >
                  <div className="text-[9px] font-sans font-extrabold text-slate-400 uppercase">Followers</div>
                  <div className="text-sm font-sans font-black text-slate-800 mt-0.5">{followers.length}</div>
                </button>
                <button 
                  onClick={() => onNavigate?.('FollowingActivity')}
                  className="bg-slate-50 hover:bg-slate-100 p-2 rounded-xl text-center transition-all border border-slate-100"
                >
                  <div className="text-[9px] font-sans font-extrabold text-slate-400 uppercase">Following</div>
                  <div className="text-sm font-sans font-black text-slate-800 mt-0.5">{following.length}</div>
                </button>
                <button 
                  onClick={() => onNavigate?.('MutualFriendsActivity')}
                  className="bg-slate-50 hover:bg-slate-100 p-2 rounded-xl text-center transition-all border border-slate-100"
                >
                  <div className="text-[9px] font-sans font-extrabold text-slate-400 uppercase">Mutuals</div>
                  <div className="text-sm font-sans font-black text-slate-800 mt-0.5">2</div>
                </button>
              </div>

              {/* Pinned illuminated badges */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-slate-400">Illuminated Badges</span>
                  <button onClick={() => onNavigate?.('BadgesActivity')} className="text-[10px] text-indigo-600 hover:underline font-bold">Edit Badges</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ownedBadges.filter(b => b.pinned).map(badge => (
                    <div key={badge.id} className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-150 shadow-xs">
                      {React.createElement(badge.icon, { className: `w-3.5 h-3.5 ${badge.color}` })}
                      <span className="text-[10px] font-sans font-bold text-slate-700 uppercase">{badge.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic details */}
              <div className="space-y-1.5 text-xs bg-slate-50/70 p-3 rounded-2xl border border-slate-150/60">
                <div className="flex justify-between items-center">
                  <span className="text-slate-450 uppercase text-[9px] font-mono">Location Domain</span>
                  <span className="font-bold text-slate-700 flex items-center gap-1"><MapPin className="w-3 h-3 text-indigo-500" /> {profile.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-450 uppercase text-[9px] font-mono">Ledger Transmit Interface</span>
                  <span className="font-bold text-indigo-650 hover:underline flex items-center gap-1 cursor-pointer"><Globe className="w-3 h-3 text-indigo-500" /> {profile.website}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-450 uppercase text-[9px] font-mono">Biometric Register Key</span>
                  <span className="font-bold text-slate-700 flex items-center gap-1"><Mail className="w-3 h-3 text-indigo-500" /> {profile.email}</span>
                </div>
              </div>

              {/* Action grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <CyberButton variant="slate" fullWidth onClick={() => onNavigate?.('EditProfileActivity')}>
                  <Edit3 className="w-3.5 h-3.5" /> Modify Identity
                </CyberButton>
                <CyberButton variant="cyan" fullWidth glow onClick={() => onNavigate?.('SocialFeedActivity')}>
                  Open Social Feed
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 2. EditProfileActivity (Modifier form)
    // ==========================================
    case 'EditProfileActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5 pb-24">
          <CyberPanel variant="magenta" title="Identity Registry Editor" badge="SECURE SYSTEM">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">MOD METADATA REGISTRIES</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              <div className="space-y-2.5">
                <div className="space-y-0.5">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500 tracking-wider">Bio-Identifier Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-indigo-500" />
                    <input 
                      type="text" 
                      value={profile.fullName} 
                      onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500 tracking-wider">Unique Handle Code</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-mono font-bold">@</span>
                    <input 
                      type="text" 
                      value={profile.username.replace('@', '')} 
                      onChange={(e) => setProfile({ ...profile, username: `@${e.target.value}` })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-indigo-650 focus:outline-none focus:border-indigo-400"
                    />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500 tracking-wider">Physical Domain Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-indigo-500" />
                    <input 
                      type="text" 
                      value={profile.location} 
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label className="text-[9px] font-sans font-black uppercase text-slate-500 tracking-wider">Transmission Web Node</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-indigo-500" />
                    <input 
                      type="text" 
                      value={profile.website} 
                      onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-1.5 pl-9 pr-3 text-xs text-slate-800 focus:outline-none focus:border-indigo-400 font-sans"
                    />
                  </div>
                </div>
              </div>

              {/* Sub-form editor link suggestions */}
              <div className="grid grid-cols-2 gap-2 text-[10px] bg-slate-50 p-2.5 rounded-2xl border border-slate-100">
                <button onClick={() => onNavigate?.('BioEditorActivity')} className="hover:text-fuchsia-600 font-bold transition-all text-left flex items-center gap-1.5 p-1">
                  <Sliders className="w-3.5 h-3.5 text-fuchsia-500" /> Adjust Status Bio
                </button>
                <button onClick={() => onNavigate?.('UsernameHistoryActivity')} className="hover:text-indigo-650 font-bold transition-all text-left flex items-center gap-1.5 p-1">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" /> Check Prior Handles
                </button>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <CyberButton variant="slate" onClick={goBackToProfile} className="py-2.5 px-4">Cancel</CyberButton>
                <CyberButton variant="magenta" glow onClick={goBackToProfile} className="py-2.5 px-4">
                  <Check className="w-3.5 h-3.5" /> Save Ledger Keys
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 3. PublicProfileActivity (Public view model)
    // ==========================================
    case 'PublicProfileActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="amber" title="Explorer Node Profile" badge="Remote IP Probe">
            <div className="space-y-4">
              {/* Cover view */}
              <div className="h-28 w-full bg-gradient-to-r from-teal-500/10 via-amber-500/10 to-indigo-500/10 border border-slate-20/50 rounded-2xl relative overflow-hidden flex flex-col justify-end p-3 text-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-0"></div>
                <div className="z-10">
                  <CyberBadge variant="magenta">HOST: AETHER-6</CyberBadge>
                </div>
              </div>

              {/* Avatar structure */}
              <div className="flex gap-4 items-start pt-1">
                <div className="relative">
                  <div className="p-0.5 rounded-full border-2 border-amber-500 bg-white shadow-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                      alt="Sophia" 
                      className="w-16 h-16 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-1.5 justify-between">
                    <h2 className="text-base font-sans font-black tracking-tight uppercase text-slate-900">Sophia Carter</h2>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Active Probe Status"></div>
                  </div>
                  <p className="text-xs text-amber-600 font-mono font-bold">@sophiac</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed italic">"Developing next-generation zero-knowledge cognitive synthesizers."</p>
                </div>
              </div>

              {/* Credentials & metrics */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50/70 p-3 rounded-2xl border border-slate-150 text-[11px]">
                <div className="space-y-1">
                  <div className="text-slate-400 uppercase text-[9px]">Uptime Index</div>
                  <div className="font-bold text-slate-800">99.98% CONTINUUM</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-400 uppercase text-[9px]">Signature Trust Rating</div>
                  <div className="font-bold text-slate-800">97.5% CREDIBLE</div>
                </div>
                <div className="space-y-1 col-span-2">
                  <div className="text-slate-400 uppercase text-[9px]">Node Access Protocol</div>
                  <div className="font-extrabold text-indigo-650 font-mono">SECURE_TUNNEL/X7_V1</div>
                </div>
              </div>

              {/* Public interactions */}
              <div className="grid grid-cols-2 gap-2.5 pt-1.5">
                <CyberButton variant="slate" fullWidth onClick={() => alert('Sending handshake signal to Sophia Carter...')}>
                  <RefreshCw className="w-3.5 h-3.5 text-slate-500" /> Ping Node Handshake
                </CyberButton>
                <CyberButton variant="amber" glow fullWidth onClick={() => alert('Established live telemetry bridge!')}>
                  Subscribe Connection
                </CyberButton>
              </div>

              {/* Back out navigation layout */}
              <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline flex items-center justify-center gap-1 pt-1.5 mx-auto">
                <ArrowLeft className="w-3 h-3" /> Back to My Node Registry
              </button>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 4. AvatarEditorActivity (Synthesizer UI)
    // ==========================================
    case 'AvatarEditorActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Visual Portrait Synthesizer" badge="Render Matrix">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">PORTRAIT CORE VARIABLES</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Avatar render stage */}
              <div className="flex justify-center py-4 bg-slate-950/5 rounded-2xl border border-slate-100 relative overflow-hidden bg-[radial-gradient(inset_at_center,rgba(99,102,241,0.04),transparent_80%)]">
                <div className="text-center relative z-10 space-y-3">
                  <div className="inline-block relative">
                    {/* Live Accent Glow Ring representation */}
                    <div 
                      className={`p-1.5 rounded-full`}
                      style={{ 
                        boxShadow: `0 0 25px rgba(${
                          avatarGlow === 'cyan' ? '6,182,212' : 
                          avatarGlow === 'magenta' ? '217,70,239' : 
                          avatarGlow === 'amber' ? '245,158,11' : 
                          avatarGlow === 'emerald' ? '16,185,129' : '99,102,241'
                        }, 0.5)` 
                      }}
                    >
                      <img 
                        src={profile.avatarUrl} 
                        alt="My profile preview" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-white transition-all"
                        style={{ filter: `hue-rotate(${avatarHue}deg)` }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="absolute top-1 right-1 bg-indigo-600 text-[9px] font-mono text-white p-1 rounded-md uppercase font-bold tracking-widest leading-none shadow-md">
                      Live
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-slate-450 uppercase">Current hue offset: {avatarHue}° • Glow: {avatarGlow.toUpperCase()}</p>
                </div>
              </div>

              {/* Accent matrix controls */}
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-sans font-extrabold uppercase text-slate-500 tracking-wide flex justify-between">
                    <span>Accent Aura Matrix</span>
                    <span className="text-cyan-600 font-mono font-bold">1/5 Colors</span>
                  </label>
                  <div className="flex justify-between gap-1">
                    {['indigo', 'cyan', 'magenta', 'amber', 'emerald'].map(col => (
                      <button
                        key={col}
                        onClick={() => setAvatarGlow(col)}
                        className={`flex-1 py-1.5 rounded-xl text-[10px] text-center capitalize font-sans font-bold border ${
                          avatarGlow === col 
                            ? 'bg-white border-slate-800 shadow-sm text-slate-900 ring-2 ring-slate-850/5' 
                            : 'bg-slate-50 border-slate-200 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                        } transition-all cursor-pointer`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hue shift slider */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[10px] font-sans font-extrabold uppercase text-slate-500 tracking-wide">
                    <span>Hue Shift Multiplier</span>
                    <span className="text-indigo-600 font-mono font-bold">{avatarHue}° Rotation</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="360"
                    value={avatarHue}
                    onChange={(e) => setAvatarHue(Number(e.target.value))}
                    className="w-full accent-indigo-600 h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Upload Section - Drag & Drop / click Manual Selector */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-sans font-extrabold uppercase text-slate-500 tracking-wide">Biometric Picture Uplink</span>
                  <div 
                    onClick={() => {
                      const mockUrls = [
                        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop'
                      ];
                      const randUrl = mockUrls[Math.floor(Math.random() * mockUrls.length)];
                      setProfile(prev => ({ ...prev, avatarUrl: randUrl }));
                    }}
                    className="border-2 border-dashed border-slate-200 hover:border-indigo-400 bg-slate-50/50 p-4 rounded-2xl text-center cursor-pointer transition-all space-y-1"
                  >
                    <Camera className="w-5 h-5 text-indigo-400 mx-auto" strokeWidth={2} />
                    <p className="text-[11px] font-sans font-bold text-slate-600">Drag file here or select photograph file</p>
                    <p className="text-[9px] font-mono text-slate-400 uppercase">JPEG, PNG, WEBP (MAX 2MB • AUTO RE-SAMPLE)</p>
                  </div>
                </div>
              </div>

              {/* SAVE / APPLY */}
              <div className="flex gap-2.5 justify-end pt-1">
                <CyberButton variant="slate" onClick={goBackToProfile}>Discard</CyberButton>
                <CyberButton 
                  variant="cyan" 
                  glow 
                  onClick={() => {
                    setProfile(prev => ({ 
                      ...prev, 
                      glowColor: avatarGlow,
                      hueOffset: avatarHue 
                    }));
                    goBackToProfile();
                  }}
                >
                  Apply Synths
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 5. CoverEditorActivity (Grid background layout)
    // ==========================================
    case 'CoverEditorActivity':
      const coverTemplates = [
        { name: 'Cyber Grid', css: 'linear-gradient(to right, rgba(99,102,241,0.1), rgba(217,70,239,0.1))', color: 'bg-indigo-500/10 border-indigo-200' },
        { name: 'Matrix Rain', css: 'linear-gradient(to right, rgba(16,185,129,0.1), rgba(6,182,212,0.1))', color: 'bg-emerald-500/10 border-emerald-200' },
        { name: 'Sunset Synth', css: 'linear-gradient(to right, rgba(239,68,68,0.1), rgba(245,158,11,0.1))', color: 'bg-rose-500/10 border-rose-200' },
        { name: 'Deep Space', css: 'linear-gradient(to right, rgba(30,41,59,0.9), rgba(15,23,42,0.95))', color: 'bg-slate-900 border-slate-700 text-slate-200' },
        { name: 'Aurora Glow', css: 'linear-gradient(to right, rgba(168,85,247,0.1), rgba(236,72,153,0.1))', color: 'bg-purple-500/10 border-purple-200' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Background Grid Customizer" badge="Graphics Engine">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">DECORATIVE GRID TEMPLATES</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Cover preview live */}
              <div className="space-y-2">
                <span className="text-[10px] font-sans font-extrabold uppercase text-slate-500 tracking-wide">Live Panel Preview</span>
                <div 
                  className="h-28 w-full border border-slate-200 shadow-inner rounded-2xl relative overflow-hidden flex items-end justify-between p-3.5"
                  style={{ background: selectedCoverPattern }}
                >
                  <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none opacity-40">
                    <div className="text-[11px] font-mono tracking-widest text-slate-800 select-none uppercase font-black">GRAPHICS_GRID_ENABLED</div>
                  </div>
                  <span className="z-10 text-[10px] bg-white border border-slate-100 rounded px-2 py-0.5 text-slate-800 font-mono font-bold uppercase">{selectedCoverPattern === coverTemplates[3].css ? 'DEEP SPACE' : 'ACTIVE_HOLOGRAPH'}</span>
                </div>
              </div>

              {/* Presets List */}
              <div className="space-y-2 pt-1.5">
                <span className="text-[10px] font-sans font-extrabold uppercase text-slate-500 tracking-wide">Grid Layout Templates</span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-0.5">
                  {coverTemplates.map((tpl, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedCoverPattern(tpl.css)}
                      className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer hover:bg-slate-100/30 transition-all ${tpl.color} ${selectedCoverPattern === tpl.css ? 'ring-2 ring-indigo-500' : ''}`}
                    >
                      <div>
                        <span className="text-xs font-sans font-bold text-slate-800 uppercase block">{tpl.name}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase">Preset vector index 0{i + 1}</span>
                      </div>
                      <div className="w-4 h-4 rounded-full border border-slate-350 flex items-center justify-center">
                        {selectedCoverPattern === tpl.css && <div className="w-2.5 h-2.5 rounded-full bg-indigo-650"></div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2.5 justify-end pt-1">
                <CyberButton variant="slate" onClick={goBackToProfile}>Cancel</CyberButton>
                <CyberButton 
                  variant="cyan" 
                  glow 
                  onClick={() => {
                    setProfile(prev => ({ ...prev, coverUrl: selectedCoverPattern }));
                    goBackToProfile();
                  }}
                >
                  <Check className="w-3.5 h-3.5" /> Save Banner
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 6. BioEditorActivity (Status lines edit)
    // ==========================================
    case 'BioEditorActivity':
      const tagPool = ['#developer', '#cypherpunk', '#ai_explorer', '#security_node', '#designer', '#decentralized', '#web3', '#rust_coder'];

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5 pb-24">
          <CyberPanel variant="cyan" title="Status Narrative Editor" badge="Metadata">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">CRAFT PERSONAL BIO BIAS</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Status form textarea */}
              <div className="space-y-1">
                <label className="text-[9px] font-sans font-black uppercase text-slate-550 tracking-wide flex justify-between">
                  <span>Continuous Bio stream text</span>
                  <span className="text-indigo-600 font-mono font-bold">{profile.bio.length}/140</span>
                </label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  maxLength={140}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="Tell peers what sector parameters you are working on right now..."
                  className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-2xl p-3 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-100"
                />
              </div>

              {/* Quick tags injector click options */}
              <div className="space-y-1.55">
                <span className="text-[9px] font-sans font-black uppercase text-slate-450 tracking-wider">Inject Protocol Keywords</span>
                <div className="flex flex-wrap gap-1.5">
                  {tagPool.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const newBio = profile.bio + (profile.bio.endsWith(' ') || profile.bio.length === 0 ? '' : ' ') + tag;
                        if (newBio.length <= 140) {
                           setProfile(prev => ({ ...prev, bio: newBio }));
                        }
                      }}
                      className="text-[9px] font-mono text-indigo-650 bg-indigo-50 hover:bg-indigo-100 border border-indigo-150/40 rounded-lg px-2 py-0.5 transition-all cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <CyberButton variant="slate" onClick={goBackToProfile} className="py-2.5 px-4">Discard</CyberButton>
                <CyberButton variant="cyan" glow onClick={goBackToProfile} className="py-2.5 px-4">
                  <Check className="w-3.5 h-3.5" /> Save Narrative
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 7. UsernameHistoryActivity (Timeline of old usernames)
    // ==========================================
    case 'UsernameHistoryActivity':
      const hostHistory = [
        { handle: '@alex_alpha', epoch: '01 (Genesis Anchor)', hash: 'f8ea2-be43-cc0d2', date: 'March 14, 2025' },
        { handle: '@alex_j_dev', epoch: '45 (Network Split)', hash: '339ab-f245-092dc', date: 'September 22, 2025' },
        { handle: '@alex_j', epoch: '89 (Current Active)', hash: 'e1b19-94ae-ba49a', date: 'Present Cycle' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Username Registry Ledger" badge="Hash Timeline">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">HISTORICAL PROTOCOL HANDLES</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                Biometric handles linked to your public public key on Aether Virtual Registry Chain are tracked here.
              </p>

              {/* Timeline list representing prior hashes */}
              <div className="relative border-l-2 border-slate-200 pl-4.5 py-1.5 space-y-4.5 ml-1">
                {hostHistory.map((item, id) => (
                  <div key={id} className="relative leading-relaxed">
                    {/* circle marker */}
                    <div className="absolute -left-7 top-1 w-3 h-3 rounded-full border border-indigo-505 bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                    </div>
                    <div>
                      <span className="text-xs text-slate-900 font-mono font-bold uppercase">{item.handle}</span>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5 text-[10px] text-slate-450 font-mono font-bold">
                        <span>Epoch {item.epoch}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <code className="text-[9px] font-mono text-indigo-650 bg-indigo-50/40 p-1.5 rounded-lg border border-indigo-100 block mt-1.5 select-all">
                        Registry Hash: {item.hash}
                      </code>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <CyberBadge variant="slate">SYSTEM INTEGRITY LOG SHIELDED</CyberBadge>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 8. ReputationActivity (Trust Index dial)
    // ==========================================
    case 'ReputationActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Symmetric Reputation Index" badge="Security Clearance">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">DECENTRALIZED COMPLIANCE MONITOR</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Dial preview container */}
              <div className="p-4 bg-slate-50 border border-slate-100/80 rounded-2xl text-center flex flex-col items-center justify-center space-y-2">
                <div className="relative w-24 h-24 rounded-full border-4 border-dashed border-indigo-200 hover:border-indigo-500 transition-all flex items-center justify-center">
                  <span className={`text-xl font-sans font-black text-slate-800 tracking-tighter ${auditing ? 'animate-pulse' : ''}`}>
                    {auditing ? 'RE-AUDITING...' : `${auditScore}%`}
                  </span>
                </div>
                <div className="text-[10px] font-mono uppercase text-indigo-600 font-bold tracking-widest">{auditing ? 'Scanning Protocol Crypts' : 'Rank: High-Trust Peer'}</div>
              </div>

              {/* Sub parameters metrics list */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-450 font-sans tracking-wide uppercase text-[9px]">Spam Mitigation Index</span>
                  <span className="font-extrabold text-slate-800">100% ACCRUAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-450 font-sans tracking-wide uppercase text-[9px]">Protocol Relay Uptime</span>
                  <span className="font-extrabold text-slate-800">99.98% CONTINUOUS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-450 font-sans tracking-wide uppercase text-[9px]">Validation Vote Consensus</span>
                  <span className="font-extrabold text-slate-800">97.8% RECIPROCAL</span>
                </div>
              </div>

              {/* Self audit trigger scan */}
              <div className="pt-1.5">
                <CyberButton
                  variant="cyan"
                  fullWidth
                  glow
                  disabled={auditing}
                  onClick={() => {
                    setAuditing(true);
                    setTimeout(() => {
                      setAuditing(false);
                      setAuditScore(99.1);
                    }, 1800);
                  }}
                >
                  {auditing ? 'RUNNING INTEGRITY COMPLIANCE DISPATCH...' : 'TRIGGER SELF-AUDIT MATRIX SCAN'}
                </CyberButton>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 9. AchievementsActivity (Milestone progression)
    // ==========================================
    case 'AchievementsActivity':
      const milestoneList = [
        { title: 'Protocol Handshaker', desc: 'Synthesized 50 peer-to-peer connection strings.', progress: 100, xp: 250 },
        { title: 'Neural Architect', desc: 'Tethered cognitive compiler model with zero failure.', progress: 65, xp: 500 },
        { title: 'Absolute air-gapper', desc: 'Securely written offline recovery codes onto ledger block.', progress: 100, xp: 150 },
        { title: 'Continuum Guardian', desc: 'Host server active for 30 consecutive epochs.', progress: 41, xp: 1000 }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Peer Achievements Protocol" badge="Ledger XP">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">PEER RECOGNITION REGISTRIES</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Milestone list rows */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {milestoneList.map((m, id) => (
                  <div key={id} className="p-3 bg-white/45 border border-slate-150/70 rounded-2xl shadow-xs space-y-1.5">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-sans font-black uppercase text-slate-850 block">{m.title}</span>
                        <p className="text-[10px] text-slate-500 font-sans mt-0.5">{m.desc}</p>
                      </div>
                      <span className="text-[9px] font-mono text-indigo-600 font-black bg-indigo-55 px-1.5 py-0.5 rounded border border-indigo-100">+{m.xp} XP</span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-slate-400 font-extrabold uppercase header-rail">
                        <span>METRIC COVERAGE</span>
                        <span>{m.progress}% COMPLETED</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${m.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'} rounded-full`} style={{ width: `${m.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 10. BadgesActivity (Manage profile badges)
    // ==========================================
    case 'BadgesActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Glow Badge Configuration" badge="Display Rail">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">ACCENT ILLUMINATIONS</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                Configure which synthesized achievement badges are displayed at the forefront of your public identity card.
              </p>

              {/* Grid selectors */}
              <div className="grid grid-cols-2 gap-2.5">
                {ownedBadges.map(b => (
                  <div 
                    key={b.id}
                    onClick={() => toggleBadgePin(b.id)}
                    className={`p-3 rounded-2xl border cursor-pointer hover:bg-slate-50/60 transition-all text-center flex flex-col items-center justify-center space-y-2 ${
                      b.pinned ? 'bg-indigo-50/10 border-indigo-200 shadow-sm ring-1 ring-indigo-100' : 'bg-white/45 border-slate-200'
                    }`}
                  >
                    <div className="w-9 h-9 bg-slate-50 border border-slate-150 rounded-full flex items-center justify-center shadow-xs">
                      {React.createElement(b.icon, { className: `w-5 h-5 ${b.color}` })}
                    </div>
                    <div>
                      <span className="text-xs font-sans font-black text-slate-850 uppercase block tracking-tighter">{b.label}</span>
                      <p className="text-[9px] text-slate-400 font-sans mt-0.5 leading-none">{b.desc}</p>
                    </div>

                    <div className="flex items-center gap-1 text-[9px] font-mono font-bold">
                      <Star className={`w-3 h-3 ${b.pinned ? 'text-amber-500 fill-amber-500' : 'text-slate-350'}`} />
                      <span className={b.pinned ? 'text-indigo-600' : 'text-slate-400'}>{b.pinned ? 'ILLUMINATED' : 'OFFLINE'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 11. ActivityHistoryActivity (Simulated actions telemetry log)
    // ==========================================
    case 'ActivityHistoryActivity':
      const simulatedActions = [
        { code: 'SECURE_AUTH', info: 'Biometric passkey verified at Node 4048', timestamp: '10:42 PM MST', type: 'AUTH' },
        { code: 'REVENUE_LINK', info: 'Upgraded subscription spectrum to AETHER_PRO', timestamp: 'Yesterday', type: 'BILLING' },
        { code: 'PEER_PULSE', info: 'Registered handshakes with 4 peer hosts in Sector 10', timestamp: '2 days ago', type: 'SOCIAL' },
        { code: 'COMPILER_INIT', info: 'Synthesized customized avatar Hue Offset config', timestamp: '3 days ago', type: 'SYSTEM' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Node Compliance Log" badge="Audit Log">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">HISTORICAL ACTIVITY TELEMETRIES</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Telemetry output box console style */}
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-slate-200 font-mono text-[10px] space-y-3 max-h-[22rem] overflow-y-auto">
                <div className="text-slate-400 border-b border-slate-800 pb-1.5 mb-1 bg-transparent"># SYSTEM LOG ENTRY SECURE_DECK</div>
                {simulatedActions.map((act, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-yellow-500 uppercase font-black tracking-tight bg-transparent text-[9px]">
                      <span>[{act.type}] CODE: {act.code}</span>
                      <span className="text-slate-450">{act.timestamp}</span>
                    </div>
                    <p className="text-slate-300 pl-2 border-l border-indigo-500/50 leading-relaxed bg-transparent">{act.info}</p>
                  </div>
                ))}
              </div>

              <div className="text-center font-sans">
                <CyberBadge variant="slate">AIR-GAPPED TELEMETRY ARCHIVE MODE</CyberBadge>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 12. FollowersActivity (Remove/Mute followers)
    // ==========================================
    case 'FollowersActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Symmetric Subscribers" badge="Incoming Streams">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">ENTITIES COMPLYING WITH YOUR TELEMETRY</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-0.5">
                {followers.map(f => (
                  <div key={f.id} className="flex justify-between items-center p-3 bg-white/45 border border-slate-150/75 rounded-2xl shadow-xs leading-none">
                    <div>
                      <span className="text-xs text-slate-850 font-sans font-black flex items-center gap-1.5">
                        {f.name}
                        {f.mutual && <CyberBadge variant="magenta">MUTUAL</CyberBadge>}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-500 block mt-1">{f.handle}</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          setFollowers(prev => prev.map(item => item.id === f.id ? { ...item, muted: !item.muted } : item));
                        }}
                        className={`text-[10px] font-sans font-bold rounded-lg px-2.5 py-1.5 transition-all cursor-pointer ${
                          f.muted ? 'bg-rose-50 border border-rose-100 text-rose-600' : 'bg-slate-50 border border-slate-200 text-slate-500 hover:bg-slate-100'
                        }`}
                      >
                        {f.muted ? 'Muted' : 'Mute'}
                      </button>
                      <button 
                        onClick={() => setFollowers(prev => prev.filter(item => item.id !== f.id))}
                        className="text-[10px] font-sans font-bold bg-slate-50 hover:bg-red-50 hover:text-red-650 hover:border-red-100 border border-slate-200 rounded-lg px-2.5 py-1.5 transition-all cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 13. FollowingActivity (Subscribed feeds list)
    // ==========================================
    case 'FollowingActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Outgoing Channels" badge="Subscribed Peer Loops">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">PEERS YOU SUBBED TELEMETRIES FROM</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              <div className="space-y-2 max-h-72 overflow-y-auto pr-0.5">
                {following.map(f => (
                  <div key={f.id} className="flex justify-between items-center p-3 bg-white/45 border border-slate-150/75 rounded-2xl shadow-xs leading-none">
                    <div>
                      <span className="text-xs text-slate-850 font-sans font-black flex items-center gap-1">
                        {f.name}
                        {f.verified && <span className="text-emerald-500" title="Identified Core Operator">●</span>}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block mt-1">{f.handle}</span>
                    </div>
                    <button 
                      onClick={() => setFollowing(prev => prev.filter(item => item.id !== f.id))}
                      className="text-[10px] font-sans font-bold text-slate-505 hover:text-red-600 bg-slate-50 hover:bg-red-55 border border-slate-200 hover:border-red-150 rounded-lg px-2.5 py-1.5 transition-all text-center cursor-pointer"
                    >
                      Unsubscribe
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 14. MutualFriendsActivity (Symmetrical reciprocal trust)
    // ==========================================
    case 'MutualFriendsActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Symmetrical Handshakes" badge="Double Core Approved">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">MUTUAL CRYPTO GRAPH ENLISTS</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              <p className="text-[11px] text-slate-500 leading-normal font-sans">
                These peers share a reciprocal high-security cryptographic tunnel link back and forth with this console.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-white/45 border border-indigo-100 rounded-2xl shadow-xs">
                  <div>
                    <span className="text-xs text-slate-850 font-sans font-black">Marcus Aurelius</span>
                    <span className="text-[10px] font-mono text-indigo-650 block mt-0.5">@marcus.dev</span>
                  </div>
                  <CyberBadge variant="magenta">STABLE TRUST</CyberBadge>
                </div>

                <div className="flex justify-between items-center p-3 bg-white/45 border border-indigo-100 rounded-2xl shadow-xs">
                  <div>
                    <span className="text-xs text-slate-850 font-sans font-black">Ada Lovelace</span>
                    <span className="text-[10px] font-mono text-indigo-650 block mt-0.5">@analytical_engine</span>
                  </div>
                  <CyberBadge variant="cyan">ROOT OPERATOR</CyberBadge>
                </div>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 15. UserGalleryActivity (Collections panel)
    // ==========================================
    case 'UserGalleryActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Planetary Collections Vault" badge="Snap Media">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">SECURED VISUAL SNAPSHOT DATA</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Dynamic Grid */}
              <div className="grid grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-0.5">
                {galleryImages.map(img => (
                  <div 
                    key={img.id}
                    onClick={() => setLightboxImg(img.url)}
                    className="group relative h-24 rounded-2xl overflow-hidden border border-slate-200 cursor-pointer shadow-xs hover:border-indigo-400 transition-all"
                  >
                    <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-x-0 bottom-0 bg-black/65 p-1 px-2 text-white">
                      <span className="text-[9px] font-sans font-black uppercase text-indigo-200 line-clamp-1 truncate">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* simulated click upload file */}
              <div className="pt-1 select-none flex justify-center">
                <CyberButton 
                  variant="slate" 
                  onClick={() => {
                    const extraImages = [
                      { id: 'g5', url: 'https://images.unsplash.com/photo-1544256718-3bcf237f394e?q=80&w=300&auto=format&fit=crop', title: 'Decoupled Terminal' },
                      { id: 'g6', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=300&auto=format&fit=crop', title: 'Laser Interface Matrix' }
                    ];
                    // Pick random
                    const r = extraImages[Math.floor(Math.random() * extraImages.length)];
                    if (!galleryImages.find(x => x.id === r.id)) {
                      setGalleryImages([...galleryImages, r]);
                    }
                  }}
                >
                  <Plus className="w-3.5 h-3.5" /> Upload Snapshot Mock
                </CyberButton>
              </div>

              {/* Lightbox Modal */}
              {lightboxImg && (
                <div 
                  className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 cursor-pointer"
                  onClick={() => setLightboxImg(null)}
                >
                  <div className="max-w-md w-full relative">
                    <img src={lightboxImg} alt="Enlarged SNAP" className="rounded-3xl border-4 border-white/95 max-h-[28rem] object-contain mx-auto" />
                    <p className="text-center text-xs text-white/70 font-sans mt-3">Click anywhere to return to vault</p>
                  </div>
                </div>
              )}
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 16. FriendsActivity (Priority Contacts)
    // ==========================================
    case 'FriendsActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5 pb-12">
          <CyberPanel variant="cyan" title="Handshake Peering Node Catalog" badge="Active Connections">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">TRUST ROSTER CATEGORY ({friends.length})</span>
                <button onClick={() => onNavigate?.('AddFriendActivity')} className="text-xs text-indigo-650 hover:underline font-bold flex items-center gap-1">
                  Add custom peer +
                </button>
              </div>

              {/* Lists of contacts */}
              <div className="space-y-2 max-h-76 overflow-y-auto pr-0.5">
                {friends.map(fr => (
                  <div key={fr.id} className="flex justify-between items-center p-2 px-2.5 bg-white/45 border border-slate-150/80 rounded-[18px] shadow-xs gap-2 leading-none">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 border border-slate-200 flex items-center justify-center font-mono font-bold text-xs text-indigo-650 select-none shrink-0">
                        {fr.name[0]}
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs text-slate-850 font-sans font-black flex items-center gap-1 flex-wrap">
                          <span className="truncate">{fr.name}</span>
                          {fr.trusted && (
                            <span className="inline-flex items-center text-[8px] font-sans font-extrabold uppercase tracking-wide bg-indigo-50 text-indigo-700 border border-indigo-100/70 px-1 py-0 rounded-md shrink-0 scale-95 origin-left">
                              TRUSTED
                            </span>
                          )}
                        </span>
                        <div className="flex items-center gap-1 mt-0.5 text-[9px] font-mono text-slate-450 uppercase">
                          <span className={`w-1 h-1 rounded-full ${fr.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                          <span>{fr.status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1 shrink-0">
                      <button 
                        onClick={() => alert(`Opening secure text connection with ${fr.name}...`)}
                        className="p-1 px-2.5 bg-indigo-50 text-indigo-650 border border-indigo-100 hover:bg-indigo-100 rounded-lg text-[10px] font-sans font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        <MessageSquare className="w-3 h-3 text-indigo-500" />
                        <span>Message</span>
                      </button>
                      <button 
                        onClick={() => {
                          setFriends(prev => prev.map(item => item.id === fr.id ? { ...item, trusted: !item.trusted } : item));
                        }}
                        className={`p-1 px-1.5 rounded-lg border text-[10px] cursor-pointer shrink-0 ${
                          fr.trusted ? 'bg-amber-50 border-amber-200 text-amber-600' : 'bg-slate-50 border-slate-200 text-slate-400'
                        }`}
                      >
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Link shortcuts */}
              <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-2xl border border-slate-150 text-center font-semibold text-indigo-650">
                <button onClick={() => onNavigate?.('FriendRequestsActivity')} className="hover:underline">Pending Handshakes</button>
                <button onClick={() => onNavigate?.('BlockedUsersActivity')} className="hover:underline">Quarantine Registry</button>
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 17. AddFriendActivity (QR Mock / Enter Hash)
    // ==========================================
    case 'AddFriendActivity':
      const [newPeerName, setNewPeerName] = useState('');
      const [newPeerHandle, setNewPeerHandle] = useState('');

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Establish Connection Token" badge="Handshake Core">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">TETHER NEW ADJACENT OPERATOR</span>
                <button onClick={() => onNavigate?.('FriendsActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Friends
                </button>
              </div>

              {/* QR Mock Visualized */}
              <div className="bg-slate-50 border border-slate-150 p-4.5 rounded-2xl flex flex-col items-center justify-center space-y-2">
                <div className="w-24 h-24 bg-indigo-900 border border-indigo-950 p-1.5 rounded-xl shadow-xs flex items-center justify-center relative select-none">
                  {/* Mock QR codes patterns lines */}
                  <div className="text-white text-[9px] font-mono leading-none tracking-tighter uppercase font-extrabold text-center select-all">
                    AETHER-<br/>PORTAL-<br/>REGISTRY-<br/>X992A7
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Interactive Terminal Handshake QR</span>
              </div>

              {/* Add form manually */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newPeerName.trim()) return;
                  const newFd = {
                    id: `new-${Date.now()}`,
                    name: newPeerName,
                    handle: newPeerHandle || '@operator',
                    status: 'Online',
                    trusted: false
                  };
                  setFriends([...friends, newFd]);
                  setNewPeerName('');
                  setNewPeerHandle('');
                  onNavigate?.('FriendsActivity');
                }}
                className="space-y-3 bg-white/45 p-3.5 border border-slate-150 rounded-2xl shadow-xs"
              >
                <span className="text-[10px] font-sans font-black uppercase text-slate-500 tracking-wider">Integrate Manually</span>
                <div className="space-y-2">
                  <input 
                    type="text" 
                    placeholder="Enter peer operator name..." 
                    value={newPeerName}
                    onChange={(e) => setNewPeerName(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-805" 
                  />
                  <input 
                    type="text" 
                    placeholder="Enter unique @handle..." 
                    value={newPeerHandle}
                    onChange={(e) => setNewPeerHandle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-mono text-slate-805" 
                  />
                </div>
                <CyberButton type="submit" variant="cyan" fullWidth glow>
                  Verify Handshake Link
                </CyberButton>
              </form>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 18. FriendRequestsActivity (Pending requests)
    // ==========================================
    case 'FriendRequestsActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Pending Connection Signals" badge="Awaiting Handshake">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">OUTSIDE PROTOCOL DIRECTIVE SIGNALS</span>
                <button onClick={() => onNavigate?.('FriendsActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              {/* Requests list */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {friendRequests.length === 0 ? (
                  <p className="text-xs text-slate-400 font-sans text-center py-6 block leading-none select-none">All inbound connection requests verified.</p>
                ) : (
                  friendRequests.map(req => (
                    <div key={req.id} className="p-3 bg-white/45 border border-slate-150/80 rounded-2xl shadow-xs flex justify-between items-center leading-none">
                      <div>
                        <span className="text-xs text-slate-850 font-sans font-black">{req.name}</span>
                        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 uppercase mt-1">
                          <span>{req.handle}</span>
                          <span>•</span>
                          <span>{req.mutuals}</span>
                        </div>
                      </div>

                      <div className="flex gap-1.5">
                        <button 
                          onClick={() => {
                            const newFriend = {
                              id: req.id,
                              name: req.name,
                              handle: req.handle,
                              status: 'Online',
                              trusted: false
                            };
                            setFriends([...friends, newFriend]);
                            setFriendRequests(friendRequests.filter(item => item.id !== req.id));
                          }}
                          className="px-2.5 py-1.5 bg-indigo-600 text-white rounded-lg text-[10px] font-sans font-bold hover:bg-indigo-700 cursor-pointer"
                        >
                          Accept
                        </button>
                        <button 
                          onClick={() => {
                            setFriendRequests(friendRequests.filter(item => item.id !== req.id));
                          }}
                          className="px-2.5 py-1.5 bg-slate-100 border border-slate-205 text-slate-500 hover:bg-slate-200 rounded-lg text-[10px] font-sans font-bold cursor-pointer"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 19. BlockedUsersActivity (Quarantined Nodes)
    // ==========================================
    case 'BlockedUsersActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="magenta" title="Quarantine Registry Shield" badge="Access Quaranteen">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">RESTRICTED IDENTITY BLOCKS</span>
                <button onClick={() => onNavigate?.('FriendsActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Contacts
                </button>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {blockedUsers.map(u => (
                  <div key={u.id} className="p-3 bg-red-50/20 border border-red-100 rounded-2xl shadow-xs leading-none flex justify-between items-center">
                    <div>
                      <span className="text-xs text-rose-800 font-sans font-extrabold">{u.name}</span>
                      <span className="text-[10px] font-mono text-slate-450 block mt-1">{u.handle}</span>
                      <p className="text-[9px] text-slate-400 font-sans italic mt-1.5">Reason: "{u.reason}"</p>
                    </div>

                    <button 
                      onClick={() => {
                        setBlockedUsers(blockedUsers.filter(item => item.id !== u.id));
                      }}
                      className="px-2.5 py-1.5 bg-white hover:bg-slate-50 text-indigo-650 border border-slate-200 rounded-lg text-[10px] font-sans font-bold transition-all cursor-pointer"
                    >
                      Permit Link
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 20. MutedUsersActivity (Suppressed notifications)
    // ==========================================
    case 'MutedUsersActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="magenta" title="Muffled Streams Ledger" badge="Mute Registry">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">MUTED CONVERSATION PLATES</span>
                <button onClick={() => onNavigate?.('FriendsActivity')} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Back
                </button>
              </div>

              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {mutedUsers.length === 0 ? (
                  <p className="text-xs text-slate-400 font-sans text-center py-6 select-none leading-none">No muffled operators in system registry.</p>
                ) : (
                  mutedUsers.map(u => (
                    <div key={u.id} className="p-3 bg-white/45 border border-slate-150 rounded-2xl shadow-xs flex justify-between items-center leading-none">
                      <div>
                        <span className="text-xs text-slate-850 font-sans font-black flex items-center gap-1.5">{u.name}</span>
                        <p className="text-[9px] text-slate-400 font-sans mt-1">Reason: "{u.reason}"</p>
                      </div>

                      <button 
                        onClick={() => {
                          setMutedUsers(mutedUsers.filter(item => item.id !== u.id));
                        }}
                        className="px-2.5 py-1.5 bg-indigo-50 text-indigo-650 border border-indigo-100 hover:bg-indigo-100 transition-all rounded-lg text-[10px] font-sans font-bold cursor-pointer"
                      >
                        Unmute Client
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 21. UserSearchActivity (Ledger queries)
    // ==========================================
    case 'UserSearchActivity':
      const simulatedOperators = [
        { name: 'Bruce Banner', handle: '@gamma_code', div: 'ENGINEERING', rank: 'ACC-8', loc: 'Denver, CO' },
        { name: 'Diana Prince', handle: '@wonder_node', div: 'SECURITY', rank: 'ACC-10', loc: 'DC Command' },
        { name: 'Peter Parker', handle: '@spider_net', div: 'DESIGN', rank: 'ACC-3', loc: 'Queens, NY' }
      ];

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Global Registry Query" badge="Database search">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">QUERY LEDGER DIRECTORY</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Input filters */}
              <div className="space-y-2 font-semibold">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-550" />
                  <input
                    type="text"
                    placeholder="Search name, division or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-205 rounded-xl py-2 pl-9.5 pr-4 text-xs text-slate-800 focus:outline-none"
                  />
                </div>

                {/* Categories filtering tabs */}
                <div className="flex justify-between gap-1">
                  {['ALL', 'ENGINEERING', 'SECURITY', 'DESIGN'].map(tier => (
                    <button
                      key={tier}
                      onClick={() => setSearchTier(tier)}
                      className={`flex-1 py-1 rounded-lg text-[9px] hover:text-slate-800 text-center uppercase border transition-all cursor-pointer ${
                        searchTier === tier ? 'bg-indigo-600 border-indigo-600 font-sans font-bold text-white hover:text-white' : 'bg-white border-slate-200 text-slate-400'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output operator listings */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-0.5">
                {simulatedOperators
                  .filter(op => {
                    const matchesSearch = op.name.toLowerCase().includes(searchQuery.toLowerCase()) || op.loc.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesTier = searchTier === 'ALL' || op.div === searchTier;
                    return matchesSearch && matchesTier;
                  })
                  .map((op, i) => (
                    <div key={i} className="p-3 bg-white/45 border border-slate-150/75 rounded-2xl shadow-xs leading-none flex justify-between items-center">
                      <div>
                        <span className="text-xs text-slate-850 font-sans font-black block">{op.name}</span>
                        <div className="flex items-center gap-2 text-[9px] font-mono font-bold text-slate-450 uppercase mt-1">
                          <span>{op.handle}</span>
                          <span>•</span>
                          <span>{op.div}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[9px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-100 rounded px-1 py-0.5 font-bold leading-none">{op.rank}</span>
                        <span className="text-[9px] text-slate-400 font-sans uppercase block mt-1">{op.loc}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 22. NearbyUsersActivity (Circular RADAR UI)
    // ==========================================
    case 'NearbyUsersActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Planetary Proximity Telemetry" badge="Radar Scan">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">P2P TRANSMISSION SENSING</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Dynamic radar ring visually mapped */}
              <div className="py-2.5 bg-slate-950 rounded-3xl border border-slate-800 text-slate-200 text-center flex flex-col items-center justify-center relative overflow-hidden">
                <div className={`w-32 h-32 rounded-full border border-indigo-500/30 flex items-center justify-center relative ${radarScanning ? 'animate-pulse' : ''}`}>
                  <div className="absolute inset-2 rounded-full border border-indigo-500/20"></div>
                  <div className="absolute inset-10 rounded-full border border-indigo-550/10"></div>
                  <span className="text-[10px] text-indigo-400 font-mono select-none">{radarScanning ? 'SWEEPING...' : 'GRID OK'}</span>
                  
                  {/* Blinking operator nodes dots */}
                  {!radarScanning && (
                    <>
                      <div className="absolute top-4 left-6 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                      <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-cyan-400"></div>

                      <div className="absolute bottom-6 right-12 w-2 h-2 rounded-full bg-magenta-450 animate-bounce"></div>
                    </>
                  )}
                </div>
                <div className="text-[10px] font-mono tracking-widest mt-2 uppercase text-indigo-400 bg-transparent">{radarScanning ? 'Locating secure hosts' : '3 entities in radius range'}</div>
              </div>

              {/* Detected entries */}
              <div className="space-y-2">
                {nearbyNodes.map(node => (
                  <div key={node.id} className="p-3 bg-white/45 border border-slate-150/75 rounded-2xl flex justify-between items-center leading-none">
                    <div>
                      <span className="text-xs text-slate-850 font-sans font-black flex items-center gap-1.5">
                        {node.name}
                        {node.active ? (
                          <span className="text-emerald-500 text-[9px] font-bold" title="In range">● ALIVE</span>
                        ) : (
                          <span className="text-slate-400 text-[9px] font-bold">● STANDBY</span>
                        )}
                      </span>
                      <span className="text-[9px] font-mono text-indigo-500 block mt-1">Bearing Profile: {node.bearing} • Reliability Index: {node.rel}%</span>
                    </div>

                    <button 
                      onClick={() => alert(`Broadcasting activation wave handshake link to ${node.name}...`)}
                      className="px-2.5 py-1.5 bg-indigo-50 text-indigo-150-code border border-indigo-205 hover:bg-indigo-100/50 rounded-lg text-[10px] font-sans font-bold transition-all cursor-pointer"
                    >
                      Link
                    </button>
                  </div>
                ))}
              </div>

              {/* Sweep Scan Button */}
              <CyberButton variant="cyan" fullWidth glow disabled={radarScanning} onClick={runRadarScan}>
                {radarScanning ? 'POLLING HARDWARE RECEIVERS...' : 'REFRESH RADAR SPECTRUMS'}
              </CyberButton>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 23. InvitationsActivity (Event invitations)
    // ==========================================
    case 'InvitationsActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Symmetric Space Invitations" badge="Holographic Keys">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">INBOUND PROTOCOL EVENT TICKETS</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Lists of holographic invites */}
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-0.5">
                {invitations.map(inv => (
                  <div key={inv.id} className="p-3 bg-white/45 border border-slate-150 rounded-2xl flex justify-between items-center leading-none">
                    <div>
                      <span className="text-xs text-slate-850 font-sans font-black block">{inv.title}</span>
                      <span className="text-[9px] font-mono text-slate-400 mt-1 block">By {inv.organizer} • Slot: {inv.date}</span>
                    </div>

                    <div className="text-right">
                      {inv.status === 'PENDING' ? (
                        <div className="flex gap-1">
                          <button 
                            onClick={() => {
                              setInvitations(prev => prev.map(x => x.id === inv.id ? { ...x, status: 'ACCEPTED' } : x));
                            }}
                            className="px-2 py-1 bg-indigo-650 hover:bg-indigo-755 text-white rounded text-[9px] font-sans font-black cursor-pointer uppercase"
                          >
                            Accept
                          </button>
                          <button 
                            onClick={() => {
                              setInvitations(prev => prev.map(x => x.id === inv.id ? { ...x, status: 'DECLINED' } : x));
                            }}
                            className="px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-205 rounded text-[9px] font-sans font-black text-slate-500 cursor-pointer uppercase"
                          >
                            Skip
                          </button>
                        </div>
                      ) : (
                        <span className={`text-[10px] font-mono font-black ${inv.status === 'ACCEPTED' ? 'text-emerald-500' : 'text-red-500'}`}>{inv.status}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 24. ReferralsActivity (Points share code)
    // ==========================================
    case 'ReferralsActivity':
      const refLink = 'https://aether.network/handshake?ref=alex_node_4048';

      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5">
          <CyberPanel variant="cyan" title="Planetary Referral Pipeline" badge="Invite Commission">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-indigo-50 pb-2.5">
                <span className="text-[10px] font-sans font-bold text-slate-400 tracking-wider uppercase">SECURED MULTIPLIER COMMISSION</span>
                <button onClick={goBackToProfile} className="text-xs text-indigo-600 hover:underline font-bold flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Profile
                </button>
              </div>

              {/* Referral metric parameters */}
              <div className="bg-indigo-50/25 border border-indigo-100 p-3.5 rounded-2xl space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-505 font-sans font-bold">Successfully Verified Links</span>
                  <span className="text-indigo-600 font-extrabold font-mono text-[13px] leading-none">4 Peers</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-505 font-sans font-bold">Aura multiplier credit bonus</span>
                  <span className="text-indigo-650 font-extrabold font-mono text-[13px] leading-none">+25% Bandwidth</span>
                </div>
              </div>

              {/* Sharing link box */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-sans font-extrabold uppercase text-slate-500 tracking-wide">Dynamic Activation Code Address</span>
                <div className="flex gap-2">
                  <code className="text-[11px] font-mono text-indigo-700 bg-slate-50/70 p-2.5 border border-slate-200 rounded-xl flex-grow overflow-x-auto truncate select-all">{refLink}</code>
                  <button 
                    onClick={() => {
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 2000);
                    }}
                    className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-sans text-xs font-bold shrink-0 cursor-pointer flex items-center justify-center"
                    title="Copy Anchor Link"
                  >
                    {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="text-[10.5px] text-slate-500 font-sans leading-relaxed text-center italic">
                Get up to 10% mutual reputation coverage for every peer operator that verifies a hardware key using this link string.
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // 25. SocialFeedActivity (Chronological stream)
    // ==========================================
    case 'SocialFeedActivity':
      return (
        <div className="animate-fade-in text-slate-800 space-y-3.5 pb-2">
          <CyberPanel variant="cyan" title="Symmetrical Feeds Chronology" badge="Decibels Channel">
            <div className="space-y-4">
              
              {/* composer box */}
              <form onSubmit={handlePostSubmit} className="bg-white/45 p-3.5 border border-white/60 shadow-xs rounded-2xl space-y-3">
                <div className="flex gap-2.5">
                  <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-indigo-200 bg-white shrink-0">
                    <img src={profile.avatarUrl} alt="Me" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <input
                    type="text"
                    placeholder="Broadcast telemetry status or signal specs..."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between items-center border-t border-indigo-50 pt-2.5">
                  <span className="text-[9px] font-mono text-slate-450 uppercase tracking-widest leading-none">AURA_CHANNELS SECURE_DEEP</span>
                  <CyberButton type="submit" variant="cyan" className="py-1 px-3.5 text-[10px]">TRANSMIT</CyberButton>
                </div>
              </form>

              {/* Posts listing */}
              <div className="space-y-3 max-h-[22rem] overflow-y-auto pr-0.5">
                {posts.map((post) => {
                  const isLiked = !!feedLiked[post.id];
                  const countLikes = post.likes + (isLiked ? 1 : 0);

                  return (
                    <div key={post.id} className="bg-white/45 p-3.5 border border-slate-200/50 rounded-2xl shadow-xs space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-indigo-150 bg-white shrink-0">
                            <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <span className="text-xs text-slate-850 font-sans font-black block">{post.author}</span>
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-400 uppercase mt-0.5">
                              <span>{post.handle}</span>
                              <span>•</span>
                              <span>{post.time}</span>
                            </div>
                          </div>
                        </div>

                        <CyberBadge variant="slate">PEER</CyberBadge>
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed font-sans">{post.content}</p>

                      {/* likes count + click actions toggler */}
                      <div className="flex items-center gap-4.5 border-t border-indigo-50/50 pt-2 text-[10px] font-sans font-black text-slate-450 uppercase">
                        <button 
                          onClick={() => setFeedLiked(prev => ({ ...prev, [post.id]: !prev[post.id] }))}
                          className={`flex items-center gap-1 hover:text-indigo-600 transition-all cursor-pointer ${isLiked ? 'text-indigo-650' : ''}`}
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{countLikes} Likes</span>
                        </button>
                        
                        <button 
                          onClick={() => {
                            setPosts(prev => prev.map(p => p.id === post.id ? { ...p, showComments: !p.showComments } : p));
                          }}
                          className="flex items-center gap-1 hover:text-indigo-600 transition-all cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>{post.comments.length} Comments</span>
                        </button>
                      </div>

                      {/* Expendable inline comments lists */}
                      {post.showComments && (
                        <div className="space-y-2 bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                          <div className="space-y-1.5 max-h-24 overflow-y-auto pr-0.5">
                            {post.comments.map((comment, index) => (
                              <div key={index} className="text-[10px] font-sans bg-white p-1.5 rounded-lg border border-slate-100">
                                <span className="font-extrabold text-slate-800 uppercase">{comment.author}: </span>
                                <span className="text-slate-600 font-medium">{comment.text}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-2.5 pt-1.5 items-center">
                            <input 
                              type="text" 
                              placeholder="Write a peer response..." 
                              value={tempComment[post.id] || ''}
                              onChange={(e) => setTempComment({ ...tempComment, [post.id]: e.target.value })}
                              className="w-full bg-white border border-slate-200 text-[10px] rounded px-2.5 py-1 text-slate-800" 
                            />
                            <button
                              onClick={() => submitComment(post.id)}
                              className="px-2 py-1 bg-indigo-600 text-white rounded text-[9px] font-sans font-bold hover:bg-indigo-700 cursor-pointer uppercase"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CyberPanel>
        </div>
      );

    // ==========================================
    // DEFAULT ROUTE TEMPLATE FALLBACK
    // ==========================================
    default:
      return (
        <div className="text-slate-500 p-8 text-center font-mono bg-white/45 border border-white/45 backdrop-blur-md rounded-3xl max-w-sm mx-auto shadow-sm">
          <HelpCircle className="w-10 h-10 text-indigo-400 mx-auto mb-3.5" />
          <p className="text-sm font-sans font-extrabold uppercase text-slate-805">Active Node Template</p>
          <p className="text-xs text-slate-450 mt-1">Interactive state simulated for activity block.</p>
          <div className="pt-4 flex justify-center">
            <CyberButton variant="cyan" onClick={goBackToProfile}>
              GO TO MY PROFILE
            </CyberButton>
          </div>
        </div>
      );
  }
};
