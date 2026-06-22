import React, { useState } from 'react';
import { 
  Kanban, Key, Shield, HelpCircle, FileText, Check, Plus, Code, Trash, AlertTriangle, 
  Play, RefreshCw, ShoppingCart, Info, HardDrive, Activity, Network, Globe, Search,
  Bell, Trash2, Eye, CheckCircle2, Layers, User, Star, ArrowLeft, Minus, Heart, Percent,
  Undo2, ExternalLink, ShoppingBag, Sliders, PlusCircle, BookOpen
} from 'lucide-react';
import { CyberPanel, CyberButton, CyberBadge } from '../CyberPanel';

interface ScreenProps {
  activityId: string;
  onNavigate?: (actId: string) => void;
}

// ==========================================
// SEPARATE VIEW COMPONENTS TO COMPLY WITH
// THE RULES OF HOOKS (PREVENT CONDITIONAL HOOKS)
// ==========================================

interface TasksActivityViewProps {
  tasks: any[];
  setTasks: React.Dispatch<React.SetStateAction<any[]>>;
}
const TasksActivityView: React.FC<TasksActivityViewProps> = ({ tasks, setTasks }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const nTask = {
      id: 'task_' + Date.now(),
      title: newTaskTitle,
      status: 'Backlog',
      priority: newTaskPriority,
      due: 'Unscheduled'
    };
    setTasks([...tasks, nTask]);
    setNewTaskTitle('');
    alert('Task submitted into backplane queue.');
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-2 text-left animate-fade-in">
      {/* Add Form */}
      <div className="md:col-span-1">
        <CyberPanel variant="cyan" title="Sow Core Task Node" badge="Queue Injector">
          <form onSubmit={handleAddTask} className="space-y-4 font-mono text-[11px] p-1">
            <div className="space-y-1">
              <label className="text-[9px] text-slate-500 font-extrabold uppercase block font-semibold">Task Title Designation</label>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="E.g. Clear database caches"
                className="w-full bg-slate-950 border border-slate-900 rounded-xl py-2.5 px-3 text-xs text-slate-202 focus:outline-none focus:border-cyan-455 font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] text-slate-500 font-extrabold uppercase block font-semibold">Task Urgency Tier</label>
              <select
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
                className="w-full bg-slate-950 border border-slate-900 rounded-xl py-2.5 px-3 text-xs text-slate-202 cursor-pointer focus:outline-none focus:border-cyan-455"
              >
                <option value="High">🚨 High Priority</option>
                <option value="Medium">⚡ Medium Priority</option>
                <option value="Low">☕ Low Priority</option>
              </select>
            </div>

            <CyberButton variant="cyan" type="submit" fullWidth className="py-2.5 text-[9.5px]">
              ADD QUEUED TASK
            </CyberButton>
          </form>
        </CyberPanel>
      </div>

      {/* List panel */}
      <div className="md:col-span-2">
        <CyberPanel variant="cyan" title="Node Pipeline Actions Registry" badge={`${tasks.length} total`}>
          <div className="space-y-3 p-1 text-left">
            {tasks.map(t => (
              <div key={t.id} className="p-3 bg-slate-950 border border-slate-900 hover:border-cyan-500/20 rounded-xl flex items-center justify-between gap-4 transition-all">
                <div className="space-y-1 truncate max-w-[70%] font-mono text-left">
                  <div className="flex items-center gap-2">
                    <span className={`text-[8px] font-black tracking-widest border px-1.5 py-0.2 rounded uppercase ${
                      t.priority === 'High' ? 'bg-rose-500/10 text-rose-450 border-rose-500/15' : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}>{t.priority}</span>
                    <span className="text-[8px] bg-cyan-500/10 text-cyan-400 border border-cyan-405 px-1.5 rounded uppercase font-bold">{t.status}</span>
                  </div>
                  <h4 className="text-white text-xs font-bold truncate mt-1">{t.title}</h4>
                </div>

                <button
                  onClick={() => removeTask(t.id)}
                  className="p-1 px-2 border border-slate-800 hover:border-rose-455 text-slate-500 hover:text-rose-450 rounded-lg cursor-pointer bg-transparent"
                >
                  <Trash className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            {tasks.length === 0 && (
              <p className="text-xs text-slate-500 text-center font-mono py-8 select-none">No active tasks inside queue registry.</p>
            )}
          </div>
        </CyberPanel>
      </div>
    </div>
  );
};

const DeveloperDashboardActivityView: React.FC = () => {
  const [sandboxEnabled, setSandboxEnabled] = useState(true);
  const [verboseLogs, setVerboseLogs] = useState(false);
  const [emulatingRequest, setEmulatingRequest] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto p-2 text-left animate-fade-in font-mono text-xs">
      {/* Left panel metrics config */}
      <div className="lg:col-span-1 space-y-4">
        <CyberPanel variant="cyan" title="Node Cockpit Controls" badge="Dev Mode API">
          <div className="space-y-4 p-1">
            <span className="text-[9px] text-slate-500 block uppercase font-bold">Variable Engine Toggles:</span>
            
            <div className="space-y-2.5">
              <div className="flex justify-between items-center p-2.5 bg-slate-950 border border-slate-900 rounded-xl">
                <div className="space-y-0.5">
                  <span className="text-white text-[10px] font-bold block">SANDBOX ENCLAVE</span>
                  <span className="text-[8px] text-slate-500 block leading-tight">Restrict scripts execution limits.</span>
                </div>
                <button
                  onClick={() => setSandboxEnabled(!sandboxEnabled)}
                  className={`w-10 h-5.5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${sandboxEnabled ? 'bg-cyan-400' : 'bg-slate-900 border border-slate-800'}`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all bg-slate-950 ${sandboxEnabled ? 'translate-x-4.5' : 'translate-x-0.5'}`}></div>
                </button>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-slate-950 border border-slate-900 rounded-xl">
                <div className="space-y-0.5">
                  <span className="text-white text-[10px] font-bold block">EXCEPTION LOG TRACING</span>
                  <span className="text-[8px] text-slate-500 block leading-tight">Verbose backplane compile paths.</span>
                </div>
                <button
                  onClick={() => setVerboseLogs(!verboseLogs)}
                  className={`w-10 h-5.5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${verboseLogs ? 'bg-cyan-400' : 'bg-slate-900 border border-slate-800'}`}
                >
                  <div className={`w-4 h-4 rounded-full transition-all bg-slate-950 ${verboseLogs ? 'translate-x-4.5' : 'translate-x-0.5'}`}></div>
                </button>
              </div>
            </div>

            <CyberButton variant="slate" fullWidth onClick={() => {
              setEmulatingRequest(true);
              setTimeout(() => setEmulatingRequest(false), 800);
            }} disabled={emulatingRequest} className="py-2.5 text-[9.5px]">
              {emulatingRequest ? 'EMULATING COMPRESSION...' : 'TRIGGER RE-PING BACKPLANE'}
            </CyberButton>
          </div>
        </CyberPanel>
      </div>

      {/* Right Console panel */}
      <div className="lg:col-span-2 space-y-4">
        <CyberPanel variant="cyan" title="Core Ingress Payload Spectrometer" badge="LOG_STREAM">
          <div className="space-y-3 p-1">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 border-b border-slate-950 pb-3">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] text-slate-500 block">TOTAL API PORT PACKETS</span>
                <span className="text-xs text-white font-black block mt-0.5">142,401</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] text-slate-500 block">AVG ENGINE ROUND-TRIP</span>
                <span className="text-xs text-cyan-400 font-black block mt-0.5">19.2 ms</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] text-slate-500 block">BANDWIDTH UTILS</span>
                <span className="text-xs text-white font-black block mt-0.5">212 MB/s</span>
              </div>
            </div>

            {/* Console */}
            <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-left font-mono text-[10px] space-y-1 overflow-x-auto select-all leading-normal text-slate-300">
              <p className="text-cyan-405">{"// Active websocket link verified. Listening to 0.0.0.0:3000..."}</p>
              <p className="text-slate-505">{"[10:39:15] [POST] /api/model - status: 200 OK - origin: localhost"}</p>
              <p className="text-slate-350">{"{"}</p>
              <p className="text-slate-350">{"  \"status\": \"optimal\","}</p>
              <p className="text-cyan-405">{"  \"consensus\": \"0x3FFB29A\","}</p>
              <p className="text-slate-350">{"  \"sandbox_enclave\": " + sandboxEnabled + ","}</p>
              <p className="text-slate-350">{"  \"logs_verbose\": " + verboseLogs}</p>
              <p className="text-slate-350">{"}"}</p>
            </div>
          </div>
        </CyberPanel>
      </div>
    </div>
  );
};

const AdminDashboardActivityView: React.FC = () => {
  const [flaggedId, setFlaggedId] = useState('');
  const [banCategory, setBanCategory] = useState('SPAM');
  const [flagsList, setFlagsList] = useState([
    { id: 'F1', node: 'Node_0x7FAC', category: 'MALICIOUS_FLOOD', date: 'Jun 19, 2026' },
    { id: 'F2', node: 'Proxy_0x00FF', category: 'SPAM_SYNCHRONY', date: 'Jun 18, 2026' }
  ]);

  const submitFlagNode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!flaggedId.trim()) return;
    const newFlag = {
      id: 'F' + (flagsList.length + 1),
      node: flaggedId,
      category: banCategory === 'SPAM' ? 'SPAM_SYNCHRONY' : 'MALICIOUS_FLOOD',
      date: 'Jun 19, 2026'
    };
    setFlagsList([newFlag, ...flagsList]);
    setFlaggedId('');
    alert('Node address flagged! Quarantine filter matrix established.');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-2 text-left animate-fade-in font-mono text-xs">
      {/* Node Quarantine form */}
      <div className="md:col-span-1">
        <CyberPanel variant="amber" title="Node Quarantine protocol" badge="Admin Controller">
          <form onSubmit={submitFlagNode} className="space-y-4 font-mono text-[11px] p-1 text-left">
            <div className="space-y-1">
              <label className="text-[9px] text-slate-500 font-extrabold uppercase block font-semibold">Node Address Reference</label>
              <input
                type="text"
                value={flaggedId}
                onChange={(e) => setFlaggedId(e.target.value)}
                placeholder="E.g. Node_0x39BF"
                className="w-full bg-slate-950 border border-slate-900 rounded-xl py-2.5 px-3 text-xs text-slate-205 focus:outline-none focus:border-amber-500 font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] text-slate-500 font-extrabold uppercase block font-semibold">Violation Category Typology</label>
              <select
                value={banCategory}
                onChange={(e) => setBanCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-900 rounded-xl py-2.5 px-3 text-xs text-slate-202 cursor-pointer focus:outline-none focus:border-amber-500"
              >
                <option value="SPAM">SPAM_SYNCHRONY (Excess Pings)</option>
                <option value="FLOOD">MALICIOUS_FLOOD (Forced Compile)</option>
              </select>
            </div>

            <CyberButton variant="danger" type="submit" fullWidth className="py-2.5 text-[9.5px]">
              DECLARE SYSTEM ISOLATION
            </CyberButton>
          </form>
        </CyberPanel>
      </div>

      {/* Table list of users flagged */}
      <div className="md:col-span-2">
        <CyberPanel variant="amber" title="隔離 Enclave Isolated Node Index" badge="Security Firewall Ledger">
          <div className="space-y-3 p-1 text-left animate-fade-in">
            <span className="text-[9px] text-slate-500 block uppercase font-bold">Quarantined system nodes awaiting peer review:</span>
            
            {flagsList.map(flag => (
              <div key={flag.id} className="p-3 bg-slate-950 border border-slate-900 hover:border-amber-500/20 rounded-xl flex justify-between items-center gap-4 transition-all text-left">
                <div className="space-y-1">
                  <span className="text-[8px] bg-rose-500/10 text-rose-450 border border-rose-500/15 py-0.5 px-2 rounded uppercase font-bold tracking-widest">{flag.category}</span>
                  <h4 className="text-white text-xs font-bold font-mono uppercase mt-1">{flag.node}</h4>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[8px] bg-amber-500/10 text-amber-505 py-0.5 px-2 rounded uppercase font-bold">{flag.id}</span>
                  <span className="text-[8px] text-slate-500 block mt-1">{flag.date}</span>
                </div>
              </div>
            ))}
          </div>
        </CyberPanel>
      </div>
    </div>
  );
};

interface RefundsActivityViewProps {
  orders: any[];
  setOrders: React.Dispatch<React.SetStateAction<any[]>>;
  refundRequests: any[];
  setRefundRequests: React.Dispatch<React.SetStateAction<any[]>>;
}
const RefundsActivityView: React.FC<RefundsActivityViewProps> = ({ orders, setOrders, refundRequests, setRefundRequests }) => {
  const [refundItemId, setRefundItemId] = useState(orders[0]?.id || '');
  const [refundReasonText, setRefundReasonText] = useState('');

  const handleRequestRefundAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!refundItemId) {
      alert('Select or compile an order hash record prior to refund request submissions.');
      return;
    }
    if (!refundReasonText.trim()) return;

    const selectedOrderObj = orders.find(o => o.id === refundItemId);
    if (!selectedOrderObj) return;

    const newRequest = {
      id: 'REF_' + Math.floor(100000 + Math.random() * 900000),
      itemId: refundItemId,
      name: selectedOrderObj.title,
      reason: refundReasonText,
      status: 'PENDING CONSENSUS VOTE'
    };

    setRefundRequests([newRequest, ...refundRequests]);
    
    // Remove from list or flag as Refunded/compromised
    setOrders(orders.map(o => o.id === refundItemId ? { ...o, status: 'LICENSE COMPROMISED / REFUND PENDING' } : o));

    setRefundReasonText('');
    alert('Licensing refund application committed successfully. Aether peer validator consensus block is active of this request!');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto p-2 animate-fade-in text-left font-sans text-xs">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Action Form */}
        <div className="md:col-span-1 space-y-4">
          <CyberPanel variant="cyan" title="Initiate Licensing Return" badge="Revoke protocol">
            <form onSubmit={handleRequestRefundAction} className="space-y-4 font-mono text-[11px] p-1 text-left">
              <div className="space-y-1">
                <label className="text-[9px] font-mono text-slate-500 uppercase font-black">Select Licenced Product</label>
                {orders.length === 0 ? (
                  <p className="text-[10px] text-slate-650 bg-slate-1000/30 p-2.5 rounded border border-slate-900 border-dashed uppercase text-center">No active licenses found</p>
                ) : (
                  <select
                    value={refundItemId}
                    onChange={(e) => setRefundItemId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-900 rounded-xl py-2.5 px-3 text-xs text-slate-202 cursor-pointer focus:outline-none focus:border-cyan-455 font-mono"
                  >
                    <option value="">-- Choose Licence Hash --</option>
                    {orders.map(o => (
                      <option key={o.id} value={o.id}>{o.title} ({o.id})</option>
                    ))}
                  </select>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-mono text-slate-500 uppercase font-black">Refund Reasoning Specification</label>
                <textarea
                  placeholder="Explain standard faults or compiler discrepancies with software..."
                  value={refundReasonText}
                  onChange={(e) => setRefundReasonText(e.target.value)}
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-900 text-xs text-slate-202 rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-455 font-sans resize-none leading-relaxed"
                />
              </div>

              <CyberButton variant="cyan" type="submit" fullWidth className="py-2.5 text-[9.5px]">
                SUBMIT REFUND CLAIM ➔
              </CyberButton>
            </form>
          </CyberPanel>
        </div>

        {/* Right ledger lists */}
        <div className="md:col-span-2">
          <CyberPanel variant="cyan" title="Return processing pipelines" badge="Validator desk">
            <div className="space-y-3.5 p-1 text-left">
              <span className="text-[9px] font-mono text-slate-500 block uppercase font-extrabold pb-1.5 border-b border-slate-900">Your return transactions logs:</span>
              
              {refundRequests.map((reqRef) => (
                <div key={reqRef.id} className="p-4 bg-slate-950 border border-slate-900 rounded-2xl space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2 text-left font-mono">
                    <div className="space-y-0.5">
                      <h4 className="text-white font-bold text-xs uppercase">{reqRef.name}</h4>
                      <p className="text-[9px] text-slate-500">ORDER REFERENCE HASH: {reqRef.itemId}</p>
                    </div>
                    <span className="text-[8px] bg-cyan-500/10 text-cyan-405 border border-cyan-400 px-2 py-0.5 rounded uppercase font-mono font-bold tracking-wider">{reqRef.status}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans italic bg-slate-905 p-2.5 rounded border border-slate-900">Reason specified: "{reqRef.reason}"</p>
                  <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 pt-1.5">
                    <span>TRANSACTION HASH: {reqRef.id}</span>
                    <span>COGNITIVE PEERS: ACTIVE POOL VOTE</span>
                  </div>
                </div>
              ))}
              {refundRequests.length === 0 && (
                <p className="text-xs text-slate-500 text-center font-mono py-12 select-none">No active licensing return logs inside node registry.</p>
              )}
            </div>
          </CyberPanel>
        </div>
      </div>
    </div>
  );
};

interface PublishBotActivityViewProps {
  creatorAssets: any[];
  setCreatorAssets: React.Dispatch<React.SetStateAction<any[]>>;
  onNavigate?: (actId: string) => void;
}
const PublishBotActivityView: React.FC<PublishBotActivityViewProps> = ({ creatorAssets, setCreatorAssets, onNavigate }) => {
  const [botName, setBotName] = useState('');
  const [botPrice, setBotPrice] = useState('4.99');
  const [botDesc, setBotDesc] = useState('');

  const handlePublishBot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!botName.trim()) return;
    const newAsset = {
      id: 'c_' + Date.now(),
      name: botName,
      type: 'BOT' as const,
      price: botPrice === '0' || botPrice === '' ? 'FREE' : `$${parseFloat(botPrice).toFixed(2)}`,
      date: new Date().toISOString().split('T')[0],
      downloads: 0
    };
    setCreatorAssets([newAsset, ...creatorAssets]);
    setBotName('');
    setBotDesc('');
    alert('AI Personality uploaded! Core model weights registered into peer marketplace catalog.');
    onNavigate && onNavigate('CreatorStudioActivity');
  };

  return (
    <CyberPanel variant="cyan" title="Publish Bot Matrix Configurator" badge="Compile Agent" className="max-w-xl mx-auto">
      <form onSubmit={handlePublishBot} className="space-y-4 text-left font-mono text-[11px] p-1">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
          className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return to Creator Studio Workspace
        </button>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">Character Identity Name</label>
          <input
            type="text"
            placeholder="E.g. Poetic Cyber-Net Weaver"
            value={botName}
            onChange={(e) => setBotName(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-slate-202 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-455 font-mono"
          />
        </div>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">Access Licensing Fee (USD)</label>
          <input
            type="number"
            step="0.01"
            placeholder="E.g. 4.99"
            value={botPrice}
            onChange={(e) => setBotPrice(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-slate-202 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-455 font-mono"
          />
        </div>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">Individuality description parameters</label>
          <textarea
            placeholder="Trained memory cache instructions to inject into LLMs metadata..."
            rows={4}
            value={botDesc}
            onChange={(e) => setBotDesc(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-slate-202 rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-455 font-sans resize-none leading-relaxed"
          />
        </div>

        <CyberButton variant="cyan" type="submit" fullWidth className="py-2.5">
          COMPILE & EXPORT TO PEER MARKETPLACE ➔
        </CyberButton>
      </form>
    </CyberPanel>
  );
};

interface PublishPromptActivityViewProps {
  creatorAssets: any[];
  setCreatorAssets: React.Dispatch<React.SetStateAction<any[]>>;
  onNavigate?: (actId: string) => void;
}
const PublishPromptActivityView: React.FC<PublishPromptActivityViewProps> = ({ creatorAssets, setCreatorAssets, onNavigate }) => {
  const [promptName, setPromptName] = useState('');
  const [promptContent, setPromptContent] = useState('');

  const handlePublishPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptName.trim()) return;
    const newAsset = {
      id: 'c_' + Date.now(),
      name: promptName,
      type: 'PROMPT' as const,
      price: 'FREE',
      date: new Date().toISOString().split('T')[0],
      downloads: 0
    };
    setCreatorAssets([newAsset, ...creatorAssets]);
    setPromptName('');
    setPromptContent('');
    alert('Instruction prompt template uploaded successfully.');
    onNavigate && onNavigate('CreatorStudioActivity');
  };

  return (
    <CyberPanel variant="cyan" title="Publish Custom Prompt Template" badge="Instruction Blocks" className="max-w-xl mx-auto text-left">
      <form onSubmit={handlePublishPrompt} className="space-y-4 text-left font-mono text-[11px] p-1">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
          className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return workspace
        </button>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">Template Designation Name</label>
          <input
            type="text"
            placeholder="E.g. SQL schema normalizer chain"
            value={promptName}
            onChange={(e) => setPromptName(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-slate-202 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-455 font-mono"
          />
        </div>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">System Prompt Instructions Block</label>
          <textarea
            placeholder="Enter complete markdown prompt instructions..."
            rows={5}
            value={promptContent}
            onChange={(e) => setPromptContent(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-slate-202 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-455 font-mono"
          />
        </div>

        <CyberButton variant="cyan" type="submit" fullWidth className="py-2.5">
          REGISTER INSTRUCTION CHAIN
        </CyberButton>
      </form>
    </CyberPanel>
  );
};

interface PublishThemeActivityViewProps {
  creatorAssets: any[];
  setCreatorAssets: React.Dispatch<React.SetStateAction<any[]>>;
  onNavigate?: (actId: string) => void;
}
const PublishThemeActivityView: React.FC<PublishThemeActivityViewProps> = ({ creatorAssets, setCreatorAssets, onNavigate }) => {
  const [customThemeName, setCustomThemeName] = useState('');
  const [customGlow, setCustomGlow] = useState(true);

  const handlePublishTheme = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customThemeName.trim()) return;
    const newAsset = {
      id: 'c_' + Date.now(),
      name: customThemeName,
      type: 'THEME' as const,
      price: '$1.50',
      date: new Date().toISOString().split('T')[0],
      downloads: 0
    };
    setCreatorAssets([newAsset, ...creatorAssets]);
    setCustomThemeName('');
    alert('Visual slate layout template published for downloads.');
    onNavigate && onNavigate('CreatorStudioActivity');
  };

  return (
    <CyberPanel variant="cyan" title="Visual Theme Layout Builder" badge="Thematic publish" className="max-w-xl mx-auto text-left">
      <form onSubmit={handlePublishTheme} className="space-y-4 text-left font-mono text-[11px] p-1">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
          className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return workspace
        </button>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">Visual Theme Name</label>
          <input
            type="text"
            placeholder="E.g. Cyber fuchsia twilight layout"
            value={customThemeName}
            onChange={(e) => setCustomThemeName(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-xs text-slate-202 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-455 font-mono"
          />
        </div>

        <div className="flex justify-between items-center p-3 bg-slate-950 border border-slate-900 rounded-xl">
          <div className="space-y-0.5 text-left">
            <span className="text-white text-[10px] font-bold block">ACTIVE CHIP GLOW MATRICES</span>
            <span className="text-[8px] text-slate-550 block leading-tight">Render neon border drops shadow.</span>
          </div>
          <button
            type="button"
            onClick={() => setCustomGlow(!customGlow)}
            className={`w-10 h-5.5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${customGlow ? 'bg-cyan-400' : 'bg-slate-900 border border-slate-805'}`}
          >
            <div className={`w-4 h-4 rounded-full transition-all bg-slate-950 ${customGlow ? 'translate-x-4.5' : 'translate-x-0.5'}`}></div>
          </button>
        </div>

        <CyberButton variant="cyan" type="submit" fullWidth className="py-2.5">
          COMPILE VISUAL SCHEME ➔
        </CyberButton>
      </form>
    </CyberPanel>
  );
};

interface CreatorSettingsActivityViewProps {
  onNavigate?: (actId: string) => void;
}
const CreatorSettingsActivityView: React.FC<CreatorSettingsActivityViewProps> = ({ onNavigate }) => {
  const [emailVal, setEmailVal] = useState('sentinel_creator@aether.org');
  const [mitLic, setMitLic] = useState(true);

  return (
    <CyberPanel variant="cyan" title="Configure Creator Studio Policies" badge="Vault setups" className="max-w-xl mx-auto text-left">
      <div className="space-y-4 text-left font-mono text-[11px] p-1">
        <button
          onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
          className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Return workspace
        </button>

        <div className="space-y-1 bg-slate-950 p-3 rounded-xl border border-slate-900">
          <label className="text-[9px] text-slate-500 font-extrabold uppercase block mb-1 font-semibold">Contact Support Email Alias Address</label>
          <input
            type="text"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)}
            className="w-full bg-slate-905 border border-slate-800 py-2 px-3 text-white focus:outline-none focus:border-cyan-455 font-mono text-xs rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center p-3 bg-slate-950 border border-slate-900 rounded-xl mt-2 select-none">
          <div className="space-y-0.5 text-left">
            <span className="text-white text-[10px] font-bold block">OPEN SOURCE LICENSE MIT PROTOCOLS</span>
            <span className="text-[8px] text-slate-550 block leading-tight">Default to completely permissive reuse licenses.</span>
          </div>
          <button
            type="button"
            onClick={() => setMitLic(!mitLic)}
            className={`w-10 h-5.5 rounded-full p-0.5 transition-colors cursor-pointer flex items-center ${mitLic ? 'bg-cyan-400' : 'bg-slate-900 border border-slate-805'}`}
          >
            <div className={`w-4 h-4 rounded-full transition-all bg-slate-950 ${mitLic ? 'translate-x-4.5' : 'translate-x-0.5'}`}></div>
          </button>
        </div>

        <CyberButton variant="cyan" className="py-2.5" fullWidth onClick={() => alert('Creator configurations committed!')}>
          COMMIT CREATOR OPTIONS
        </CyberButton>
      </div>
    </CyberPanel>
  );
};

export const SystemsScreens: React.FC<ScreenProps> = ({ activityId, onNavigate }) => {
  // Creator states
  const [creatorAssets, setCreatorAssets] = useState<{ id: string; name: string; type: 'BOT' | 'PROMPT' | 'THEME'; price: string; date: string; downloads: number }[]>([
    { id: 'c1', name: 'Cyberpunk Sentinel v2', type: 'BOT', price: '$2.99', date: '2026-06-18', downloads: 142 },
    { id: 'c2', name: 'Tailwind Glassmorphic Gradients', type: 'THEME', price: 'FREE', date: '2026-06-19', downloads: 89 }
  ]);
  const [monetizationTiers, setMonetizationTiers] = useState([
    { name: 'BRONZE SUBSCRIBER', price: '$2.00/Mo', perks: 'Access to standard cognitive builds & themes.' },
    { name: 'SILVER COGNITIVE LINK', price: '$5.00/Mo', perks: 'Priority queue processing & beta layout updates.' },
    { name: 'GOLD MASTER CORE', price: '$12.00/Mo', perks: 'Full source access to customized LLM instruction routes & tipping pools.' }
  ]);

  // Kanban items state
  const [tasks, setTasks] = useState([
    { id: 't1', title: 'Refactor Express index', status: 'In Progress', priority: 'High', due: '20 hours' },
    { id: 't2', title: 'Upgrade React 19 nodes', status: 'Backlog', priority: 'Medium', due: '2 days' },
    { id: 't3', title: 'Audit firewall port configs', status: 'Review', priority: 'High', due: 'Expired' },
    { id: 't4', title: 'Compile metadata json values', status: 'Completed', priority: 'Low', due: 'Completed' }
  ]);

  // API Key Generator state
  const [apiKeys, setApiKeys] = useState<{ name: string; key: string; date: string }[]>([
    { name: 'Primary Core Node', key: 'aether_sk_live_6c8aef91c8cf72dbebc7b93a62', date: '2026-06-19' }
  ]);
  const [keyName, setKeyName] = useState('');

  // Cart / Marketplace state
  const [cartItems, setCartItems] = useState<string[]>([]);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>('1');
  const [marketFilter, setMarketFilter] = useState('ALL');
  const [marketSearch, setMarketSearch] = useState('');
  const [orders, setOrders] = useState([
    { id: 'ORD_99182', date: 'Jun 18, 2026', title: 'Quantum Encryption Node', type: 'SECURITY PLGN', price: '$0.00', status: 'VERIFIED ON NODE', licenseHash: '0x3FB22AC...881C' }
  ]);
  const [refundRequests, setRefundRequests] = useState<{ id: string; itemId: string; name: string; reason: string; status: string }[]>([]);
  const [reviewsList, setReviewsList] = useState([
    { id: 'r1', productId: '1', author: 'Aether_Op_82', rating: 5, date: 'Jun 18, 2026', text: 'This model matrix dramatically increased metaphors. Highly recommend!' },
    { id: 'r2', productId: '1', author: 'Zero_Bit', rating: 4, date: 'Jun 15, 2026', text: 'Stunning logic depth, slightly large build, but amazing outputs.' },
    { id: 'r3', productId: '2', author: 'Neon_Rider', rating: 5, date: 'Jun 19, 2026', text: 'Perfect eye-safe UI. Replaced my default frame overlay immediately!' },
  ]);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponStatus, setCouponStatus] = useState<'idle' | 'success' | 'invalid'>('idle');
  const [appliedDiscount, setAppliedDiscount] = useState(0); // e.g. 0.20 for 20%

  const [marketProducts] = useState([
    { id: '1', title: 'Creative Metaphor Core', rating: 4.8, type: 'MODEL ARCHIVE', price: 4.99, downloads: '1,240', version: 'v3.2', size: '2.4 GB', author: 'Aether Lab Labs', desc: 'Pre-trained high-context creativity tuning matrix. Injects metaphorical expansion vectors into standard LLM instruction pathways for poetic or highly creative prose generation.' },
    { id: '2', title: 'Dark Cyber Slate Theme', rating: 4.5, type: 'THEMATIC MOD', price: 1.99, downloads: '5,022', version: 'v1.1', size: '14.2 MB', author: 'Zenith Design Corp', desc: 'Highly eye-safe, ultra-low contrast dark slate theme template with customized terminal styling matrices, responsive layout overrides, and glow effects.' },
    { id: '3', title: 'Quantum Encryption Node', rating: 5.0, type: 'SECURITY PLGN', price: 0.00, downloads: '921', version: 'v4.0', size: '4.8 MB', author: 'Sentinel Security Team', desc: 'A custom WebAuthn compliance module allowing end-to-end payload signing with on-device hardware chips, securing local network channels.' },
    { id: '4', title: 'Cognitive Cache Expander', rating: 4.6, type: 'MODEL ARCHIVE', price: 12.50, downloads: '410', version: 'v2.0-beta', size: '12.1 GB', author: 'Brainwave Tech', desc: 'Expanded recurrent neural cache designed to capture multi-turn chat sessions with no regression. Preserves absolute logic state coherence over 500k tokens.' },
    { id: '5', title: 'Aether Chat Bot Wrapper', rating: 4.2, type: 'THEMATIC MOD', price: 3.50, downloads: '1,892', version: 'v1.0', size: '3.1 MB', author: 'Aether Devs', desc: 'Clean React components representing a customizable chat module. Styles beautifully with CSS classes and lucide icons.' }
  ]);

  // States moved to top-level to satisfy React Rules of Hooks
  const [messages, setMessages] = useState([
    { id: '1', title: 'Security handshake with main node active.', type: 'SYSTEM', time: '12 min ago' },
    { id: '2', title: 'AI companion suggests updating memory cache size parameters.', type: 'COGNITIVE', time: '1 hr ago' },
    { id: '3', title: 'New chat invitation inside Decentralized Plaza.', type: 'SOCIAL', time: '3 hr ago' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // Notifications & Telemetry Feed States
  const [notificationsList, setNotificationsList] = useState([
    { id: 'n1', title: 'New passkey successfully authorized.', detail: 'Authorized from MACINTOSH NEURAL CHIP v2.', time: '5 minutes ago', read: false, category: 'SECURITY' },
    { id: 'n2', title: 'AI Character creator compilation success.', detail: 'Model training metrics at 98.4% validation.', time: '20 minutes ago', read: false, category: 'AI' },
    { id: 'n3', title: 'Call stream handshake protocol synchronized.', detail: 'Server relay successfully mapped to Global Relay Alpha.', time: '1 hour ago', read: true, category: 'STREAM' },
    { id: 'n4', title: 'Developer option token generated.', detail: 'Operator API key created with admin credentials.', time: '3 hours ago', read: true, category: 'DEVELOPER' },
    { id: 'n5', title: 'New marketplace transaction approved.', detail: 'Purchase of premium subscription completed.', time: '1 day ago', read: true, category: 'BILLING' }
  ]);
  const [notificationFilter, setNotificationFilter] = useState('ALL');

  const [activityFeedList, setActivityFeedList] = useState([
    { id: 'a1', action: 'NODE_AUTH_PASSKEY_SUCCESS', user: 'Sentinel_Operator', desc: 'Secure fingerprint check initialized & passed.', server: 'Node 0x77', time: '1 min ago' },
    { id: 'a2', action: 'AI_AGENT_GENERATION', user: 'Sentient_V4', desc: 'Prompt template parsed successfully.', server: 'Aether Brain Grid', time: '12 mins ago' },
    { id: 'a3', action: 'DISCOVER_SUBNET_PING', user: 'Sentinel_Operator', desc: 'Muted node groups queried in ExploreActivity.', server: 'Planet Router-01', time: '40 mins ago' },
    { id: 'a4', action: 'MARKETPLACE_CHECKOUT', user: 'Sentinel_Operator', desc: 'Cart cleared for Billing transaction.', server: 'Secure Ledger C7', time: '2 hours ago' },
    { id: 'a5', action: 'LIVE_STREAM_HANDSHAKE', user: 'Host_Streamer', desc: 'Active video packet broadcast synchronized.', server: 'Relay Alpha', time: '5 hours ago' }
  ]);
  const [activityFilter, setActivityFilter] = useState('ALL');

  const generateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyName.trim()) return;
    const bytes = [...Array(16)].map(() => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
    const newKey = {
      name: keyName,
      key: `aether_sk_live_${bytes}`,
      date: new Date().toISOString().split('T')[0]
    };
    setApiKeys([...apiKeys, newKey]);
    setKeyName('');
  };

  const deleteKey = (idx: number) => {
    setApiKeys(apiKeys.filter((_, i) => i !== idx));
  };

  switch (activityId) {
    case 'HomeActivity': {
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in select-none">
          {/* Main OS Cockpit Dashboard */}
          <CyberPanel variant="cyan" title="AETHER_OS // MASTER DASHBOARD" badge="STABLE WAVE">
            <div className="p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-xl md:text-2xl font-display font-black tracking-tight text-white uppercase">
                    Aether Core Dashboard
                  </span>
                  <CyberBadge variant="magenta">SENTINEL-NODE</CyberBadge>
                </div>
                <p className="text-xs text-slate-400 font-sans max-w-xl leading-relaxed">
                  Welcome back, Operator. System modules are calibrated. Core bandwidth is running at 144 Gb/s with secure handshakes active. Optimize parameters or browse active subnets.
                </p>
              </div>

              {/* Status Dial */}
              <div className="flex items-center gap-3 bg-slate-950/80 border border-slate-900 p-3.5 rounded-2xl shadow-lg backdrop-blur-md">
                <div className="w-10 h-10 rounded-full border-4 border-dashed border-cyan-500/40 flex items-center justify-center animate-spin duration-3000">
                  <Activity className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-[8px] font-mono text-slate-500 block uppercase font-extrabold">CONSENSUS RATIO</span>
                  <span className="text-xs font-bold text-white font-mono">0x99_CONCENTRIC</span>
                </div>
              </div>
            </div>
          </CyberPanel>

          {/* Core Telemetry widgets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Widget 1: System Integrations Status */}
            <div className="md:col-span-1">
              <CyberPanel variant="cyan" title="Host Performance Nodes" badge="METRIC_BUS">
                <div className="space-y-4 py-1">
                  
                  <div className="space-y-1.5 font-mono text-left">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-slate-300">Memory Cluster</span>
                      <span className="text-cyan-400 font-bold">45.2%</span>
                    </div>
                    <div className="w-full bg-slate-100/10 h-2 rounded overflow-hidden border border-slate-900">
                      <div className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded w-[45.2%]"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-left">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-slate-300">Ingress Bandwidth</span>
                      <span className="text-fuchsia-400 font-bold">62.8%</span>
                    </div>
                    <div className="w-full bg-slate-100/10 h-2 rounded overflow-hidden border border-slate-900">
                      <div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-full rounded w-[62.8%]"></div>
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-left">
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-slate-300">Consensus Rate</span>
                      <span className="text-emerald-400 font-bold">99.98%</span>
                    </div>
                    <div className="w-full bg-slate-100/10 h-2 rounded overflow-hidden border border-slate-900">
                      <div className="bg-gradient-to-r from-cyan-450 to-emerald-450 h-full rounded w-[99.98%]"></div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>SECURITY CHANNEL:</span>
                    <span className="text-emerald-400 font-bold uppercase">● ENCRYPTED AES255</span>
                  </div>
                </div>
              </CyberPanel>
            </div>

            {/* Widget 2: Messaging Alert stream notifications list */}
            <div className="md:col-span-2">
              <CyberPanel variant="amber" title="Live System Transmissions stream" badge="ALERT LOGS">
                <div className="space-y-3.5 py-1 text-left font-sans">
                  {messages.map((m) => (
                    <div key={m.id} className="p-2.5 bg-slate-950/80 border border-slate-900 rounded-xl flex items-start justify-between gap-3 group hover:border-amber-500/20 transition-all">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${
                            m.type === 'SYSTEM' 
                              ? 'bg-rose-500/10 border-rose-500/15 text-rose-450' 
                              : m.type === 'COGNITIVE'
                              ? 'bg-indigo-500/10 border-indigo-500/15 text-indigo-400'
                              : 'bg-cyan-500/10 border-cyan-500/15 text-cyan-400'
                          }`}>{m.type}</span>
                          <span className="text-[10px] font-mono text-slate-500">{m.time}</span>
                        </div>
                        <p className="text-xs text-slate-200 mt-1 font-mono tracking-wide">{m.title}</p>
                      </div>
                      <CyberBadge variant="amber" className="text-[7px]">OK</CyberBadge>
                    </div>
                  ))}
                </div>
              </CyberPanel>
            </div>

          </div>

          {/* Quick Shortcuts Launcher Grid */}
          <div className="space-y-3 pt-2 text-left">
            <h4 className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest pl-1">SUBNET SYSTEM COMMANDS</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl hover:border-cyan-500/20 transition-all text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto text-xs font-mono">01</div>
                <h5 className="text-[11px] font-mono font-bold text-white uppercase mb-0.5">CPU COMPILER</h5>
                <p className="text-[9px] text-slate-500 leading-normal font-sans">Audit kernels and active CPU spectrograms.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl hover:border-fuchsia-500/20 transition-all text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mx-auto text-xs font-mono">02</div>
                <h5 className="text-[11px] font-mono font-bold text-white uppercase mb-0.5">PEER HANDSHAKE</h5>
                <p className="text-[9px] text-slate-500 leading-normal font-sans">Inspect registered node groups and devices.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl hover:border-amber-500/20 transition-all text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-xs font-mono">03</div>
                <h5 className="text-[11px] font-mono font-bold text-white uppercase mb-0.5">JOURNALS LOG</h5>
                <p className="text-[9px] text-slate-500 leading-normal font-sans">Open persistent databases and backup snapshots.</p>
              </div>

              <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl hover:border-indigo-500/20 transition-all text-center space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-xs font-mono">04</div>
                <h5 className="text-[11px] font-mono font-bold text-white uppercase mb-0.5">FAQ COMPENDIUM</h5>
                <p className="text-[9px] text-slate-500 leading-normal font-sans">Review network charters and licensing records.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    case 'ExploreActivity': {
      const trendingTopics = [
        { topic: '#aether_core', pings: '12.4K queries', trend: '+45%' },
        { topic: '#neural_synapses', pings: '9.1K queries', trend: '+22%' },
        { topic: '#decentral_ledger', pings: '8.4K queries', trend: 'STABLE' },
        { topic: '#p2p_chatter', pings: '5.2K queries', trend: '+14%' },
      ];
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold">SUBNET DISCOVERY ENGINE</h3>
              <p className="text-xs text-slate-500 mt-0.5 font-sans">Browse trending parameters across planetary channels.</p>
            </div>
            <CyberBadge variant="fuchsia">EXPLORE ACTIVE</CyberBadge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Col: Directories Explorer */}
            <div className="md:col-span-2 space-y-4">
              <CyberPanel variant="fuchsia" title="Featured planetary subnets" badge="ROUTER BUS">
                <div className="space-y-3 font-sans">
                  {[
                    { name: 'Quantum AI Synapses', desc: 'Active playground for testing Gemini cognitive vector chains.', nodes: '1,452 nodes online', active: true },
                    { name: 'Aether OS Developers', desc: 'Central repository space for code updates, patches, and feature tickets.', nodes: '840 nodes online', active: true },
                    { name: 'Aura Retro-Music Studio', desc: 'Decentralized ambient music player loops and soundwave creators.', nodes: '312 nodes online', active: false },
                  ].map((sub, i) => (
                    <div key={i} className="p-4 bg-slate-950 border border-slate-900 hover:border-fuchsia-500/20 rounded-xl flex items-center justify-between gap-4 transition-all">
                      <div className="space-y-1">
                        <h5 className="text-xs font-mono font-bold text-white uppercase">{sub.name}</h5>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{sub.desc}</p>
                        <span className="text-[10px] font-mono text-slate-500 block">{sub.nodes}</span>
                      </div>
                      <CyberButton variant={sub.active ? 'magenta' : 'slate'} className="text-[10px] py-1 px-3">
                        {sub.active ? 'LINK' : 'QUEUE'}
                      </CyberButton>
                    </div>
                  ))}
                </div>
              </CyberPanel>
            </div>

            {/* Right Col: trending index */}
            <div className="md:col-span-1 space-y-4">
              <CyberPanel variant="slate" title="Trending Registry Tags" badge="TREND LOG">
                <div className="space-y-3 py-1 font-mono text-xs text-left">
                  {trendingTopics.map((item, i) => (
                    <div key={i} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="text-cyan-400 font-bold block">{item.topic}</span>
                        <span className="text-[9px] text-slate-550">{item.pings}</span>
                      </div>
                      <span className={`text-[10px] font-mono ${item.trend.startsWith('+') ? 'text-emerald-400' : 'text-slate-400'}`}>
                        {item.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </CyberPanel>
            </div>

          </div>
        </div>
      );
    }

    case 'SearchActivity': {
      const searchResults = [
        { source: 'CHAT LOGS', match: 'MainActivity referenced to boot security channel #decentral-plaza.', hash: '0x8F9B_INDEX', matchTime: '10m ago' },
        { source: 'KERNEL ACTIONS', match: 'MainActivity approved handshake for MACINTOSH CHIP v2.', hash: '0x7E1C_STATE', matchTime: '1h ago' },
        { source: 'SECURITY KEYINGS', match: 'Primary Core Node API Key generated successfully in system.', hash: '0x2D4F_REGS', matchTime: '2h ago' },
      ];
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none">
          <CyberPanel variant="cyan" title="Planetary search console" badge="INDEX SEARCHER">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">MASTER REGISTRY QUERY</span>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type words, parameters, or transaction hashes... (e.g. MainActivity, Security...)"
                    className="w-full bg-slate-150/10 border border-cyan-500/20 text-xs text-white rounded-xl py-3.5 pl-4 pr-10 focus:outline-none focus:border-cyan-450 font-sans"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-cyan-400 font-mono text-xs font-bold">🔍</span>
                </div>
              </div>

              {/* Instant suggestions */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px]">
                <span className="text-slate-500 mr-1.5 self-center">RECOMMENDED:</span>
                {['MainActivity', 'HomeActivity', 'Keys', 'Integrations'].map((rec) => (
                  <button key={rec} onClick={() => setSearchQuery(rec)} className="px-2.5 py-1 bg-slate-950 border border-slate-900 hover:border-cyan-500/15 text-slate-400 hover:text-cyan-400 rounded-lg cursor-pointer">
                    {rec}
                  </button>
                ))}
              </div>
            </div>
          </CyberPanel>

          {/* Results Block */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-mono font-black text-slate-500 pl-1 tracking-widest">QUERY HASH MATCHES</h4>
            <div className="space-y-2.5">
              {searchResults
                .filter(res => searchQuery === '' || res.match.toLowerCase().includes(searchQuery.toLowerCase()) || res.source.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((res, i) => (
                  <div key={i} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-3 hover:border-cyan-500/20 transition-all font-mono text-xs">
                    <div className="space-y-1 select-text">
                      <div className="flex items-center gap-2 flex-wrap text-left">
                        <span className="text-[8px] font-mono px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-450 uppercase rounded">{res.source}</span>
                        <code className="text-[10px] text-slate-500">{res.hash}</code>
                        <span className="text-[9px] text-slate-500">({res.matchTime})</span>
                      </div>
                      <p className="text-slate-200 mt-1 font-mono tracking-wide text-left">{res.match}</p>
                    </div>
                    <CyberButton variant="cyan" className="py-1 px-3 text-[10px] self-start md:self-center">DEEP COPY</CyberButton>
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    }

    case 'BookmarkActivity': {
      const savedItems = [
        { title: 'MainActivity App Root Config Parameters', cat: 'TEMPLATES', value: '0x9E_NAV_DECK_H', date: '2026-06-19' },
        { title: 'Two-Factor Passkey Security Auths Specs', cat: 'SECURITY', value: 'SHA-256 (Primary Vault)', date: '2026-06-18' },
        { title: 'Cognitive Chat Companion Memory Context Fact-Graph', cat: 'AI_AGENT', value: '55.4K vector cells', date: '2026-06-15' },
      ];
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold">SUBNET FAVORITES DIRECTORY</h3>
              <p className="text-xs text-slate-500 mt-0.5 font-sans">Access quick pinned journals logs and identity signatures.</p>
            </div>
            <CyberBadge variant="magenta">BOOKMARKS LOCKED</CyberBadge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3 space-y-3">
              {savedItems.map((item, i) => (
                <div key={i} className="p-4 bg-slate-950 border border-slate-900 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 hover:border-fuchsia-500/20 transition-all">
                  <div className="space-y-1.5 select-text text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] font-mono p-1 rounded bg-slate-900 border border-fuchsia-500/15 text-fuchsia-400 uppercase font-extrabold">{item.cat}</span>
                      <span className="text-[10px] font-mono text-slate-550">PINNED ON: {item.date}</span>
                    </div>
                    <h5 className="text-xs font-mono font-bold text-white uppercase">{item.title}</h5>
                    <code className="text-[10px] px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded text-cyan-400 inline-block">{item.value}</code>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <CyberButton variant="magenta" className="py-1.5 px-3 text-[10px] font-mono uppercase">LAUNCH</CyberButton>
                    <button className="p-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-450 hover:bg-rose-500 hover:text-white rounded-xl cursor-pointer">
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case 'NotificationsActivity': {
      const filteredNotifications = notificationsList.filter(n => {
        if (notificationFilter === 'ALL') return true;
        if (notificationFilter === 'UNREAD') return !n.read;
        if (notificationFilter === 'READ') return n.read;
        return n.category === notificationFilter;
      });

      const toggleRead = (id: string) => {
        setNotificationsList(prev => prev.map(n => n.id === id ? { ...n, read: !n.read } : n));
      };

      const markAllRead = () => {
        setNotificationsList(prev => prev.map(n => ({ ...n, read: true })));
      };

      const deleteNotification = (id: string) => {
        setNotificationsList(prev => prev.filter(n => n.id !== id));
      };

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold uppercase flex items-center gap-2">
                <Bell className="w-4 h-4 text-cyan-400 animate-pulse" /> Security Notification Hub
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 font-sans">Toggle, investigate, and triage system alarm registers.</p>
            </div>
            <div className="flex gap-2">
              <CyberButton variant="cyan" onClick={markAllRead} className="px-3 py-1 text-[10px] font-mono">
                MARK ALL READ
              </CyberButton>
            </div>
          </div>

          <div className="bg-slate-950/80 p-4 border border-slate-900 rounded-3xl space-y-4 font-sans">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {['ALL', 'UNREAD', 'READ', 'SECURITY', 'AI', 'STREAM'].map((f) => (
                <button
                  key={f}
                  onClick={() => setNotificationFilter(f)}
                  className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                    notificationFilter === f 
                      ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400 font-extrabold shadow-sm' 
                      : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:bg-slate-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="space-y-3 max-h-[25rem] overflow-y-auto pr-1">
              {filteredNotifications.length === 0 ? (
                <div className="py-12 text-center text-slate-500 font-mono text-xs">
                  No notifications match criteria. All systems optimal.
                </div>
              ) : (
                filteredNotifications.map((n) => (
                  <div 
                    key={n.id} 
                    className={`p-4 border rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-200 ${
                      n.read 
                        ? 'bg-slate-950/40 border-slate-900/40 opacity-70' 
                        : 'bg-slate-900/80 border-cyan-500/20 shadow-xs'
                    }`}
                  >
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-2">
                        <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${
                          n.read ? 'bg-slate-905 border-slate-850 text-slate-500' : 'bg-cyan-500/15 border-cyan-500/20 text-cyan-400 font-bold'
                        }`}>
                          {n.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{n.time}</span>
                        {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                      </div>
                      <h4 className="text-xs font-mono font-bold text-white uppercase">{n.title}</h4>
                      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">{n.detail}</p>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <button 
                        onClick={() => toggleRead(n.id)}
                        className="p-1 px-3 bg-slate-900 border border-slate-850 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-400 rounded-xl text-[9px] font-mono cursor-pointer transition-colors"
                      >
                        {n.read ? 'MARK UNREAD' : 'MARK READ'}
                      </button>
                      <button 
                        onClick={() => deleteNotification(n.id)}
                        className="p-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-450 hover:bg-rose-500 hover:text-white rounded-xl cursor-pointer transition-colors"
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

    case 'ActivityFeedActivity': {
      const filteredFeeds = activityFeedList.filter(f => {
        if (activityFilter === 'ALL') return true;
        return f.action.includes(activityFilter);
      });

      const triggerHandshakeProbe = () => {
        const types = [
          { act: 'NODE_REGISTRY_SYNC', desc: 'Sector indices catalog updated.', server: 'Planet Router-01' },
          { act: 'COGNITIVE_SYNAPSE_UPDATE', desc: 'Interactive chat message buffered.', server: 'Aether Brain Grid' },
          { act: 'PASSKEY_RE_AUTH_PROBE', desc: 'Secure security tokens keys verification request.', server: 'Node 0x77' },
          { act: 'BILLING_REFRACT_CALIBRATE', desc: 'Telemetry subscription tier sync done.', server: 'Secure Ledger C7' }
        ];
        const pick = types[Math.floor(Math.random() * types.length)];
        const newFeed = {
          id: `a${Date.now()}`,
          action: pick.act,
          user: 'Sentinel_Operator',
          desc: pick.desc,
          server: pick.server,
          time: 'Just now'
        };
        setActivityFeedList(prev => [newFeed, ...prev]);
      };

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none font-sans">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold uppercase flex items-center gap-2">
                <Activity className="w-4 h-4 text-fuchsia-400" /> Chrono Telemetry Timeline
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Chronological ledger timeline of system actions and network handshakes.</p>
            </div>
            <CyberButton variant="magenta" onClick={triggerHandshakeProbe} className="px-3.5 py-1.5 text-[10px] font-mono flex items-center gap-1.5">
              <RefreshCw className="w-3 h-3 shrink-0" /> PROBE HANDSHAKE
            </CyberButton>
          </div>

          <div className="bg-slate-950/80 p-4 border border-slate-900 rounded-3xl space-y-4">
            {/* Filter tags header */}
            <div className="flex flex-wrap gap-2">
              {['ALL', 'NODE', 'COGNITIVE', 'PASSKEY', 'BILLING'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActivityFilter(f)}
                  className={`px-3 py-1.5 rounded-xl border font-mono text-[9px] font-bold cursor-pointer transition-all ${
                    activityFilter === f 
                      ? 'bg-fuchsia-500/15 border-fuchsia-400 text-fuchsia-400 font-extrabold shadow-sm' 
                      : 'bg-slate-900/60 border-slate-800 text-slate-500 hover:bg-slate-900'
                  }`}
                >
                  {f === 'ALL' ? 'ALL ACTIONS' : `${f} FILTER`}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="relative border-l border-slate-900 pl-5 ml-2.5 space-y-5 py-2 max-h-[30rem] overflow-y-auto pr-1">
              {filteredFeeds.map((feed) => (
                <div key={feed.id} className="relative group text-left">
                  {/* Bullet */}
                  <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-fuchsia-500 group-hover:bg-fuchsia-400 transition-colors flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent" />
                  </span>

                  <div className="p-4 bg-slate-900/60 border border-slate-905 hover:border-fuchsia-500/20 hover:bg-slate-900 rounded-2xl space-y-1.5 transition-all">
                    <div className="flex items-center justify-between gap-2 flex-wrap text-left">
                      <div className="flex items-center gap-2">
                        <code className="text-[11px] font-mono font-extrabold text-fuchsia-400 select-all uppercase">
                          {feed.action}
                        </code>
                        <span className="text-[10px] text-slate-550 font-mono">({feed.time})</span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 select-text bg-slate-950/40 border border-slate-850 px-2 py-0.5 rounded">
                        HOST: {feed.server}
                      </span>
                    </div>
                    <p className="text-xs text-slate-450 leading-relaxed">{feed.desc}</p>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-slate-500 pt-1 border-t border-slate-850/30">
                      <User className="w-2.5 h-2.5" /> <span className="font-bold text-slate-400">{feed.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case 'HistoryActivity': {
      const chronologicalEvents = [
        { time: '01:11:05', event: 'MainActivity router successfully mounted App Root.', category: 'BOOT', level: 'SUCCESS' },
        { time: '00:54:12', event: 'Security verify passkey query approved (biometric fallback).', category: 'SECURITY', level: 'SUCCESS' },
        { time: '00:43:18', event: 'Ingress node setup failed to stream local media packets.', category: 'NETWORK', level: 'CRITICAL' },
        { time: '00:15:30', event: 'Cognitive agent backup synchronized with cloud storage indexing.', category: 'AI', level: 'INFO' },
      ];
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left select-none">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold">MUTABLE TIME MATRIX LOG</h3>
              <p className="text-xs text-slate-500 mt-0.5 font-sans">Inspect chronological ledger updates this cycle.</p>
            </div>
            <CyberBadge variant="slate">HISTORY CHRONO</CyberBadge>
          </div>

          <CyberPanel variant="slate" title="Aether Ledger Chronography" badge="State Snaps Active">
            <div className="space-y-3 font-mono text-xs text-left">
              {chronologicalEvents.map((evt, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-slate-500 font-bold">[{evt.time}]</span>
                      <span className="text-[8px] border border-slate-800 bg-slate-900 text-slate-400 px-1 py-0.5 rounded tracking-wide font-extrabold uppercase">{evt.category}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded border ${
                        evt.level === 'SUCCESS' ? 'bg-emerald-500/5 border-emerald-500/15 text-emerald-400' :
                        evt.level === 'CRITICAL' ? 'bg-rose-500/5 border-rose-500/15 text-rose-450' :
                        'bg-cyan-500/5 border-cyan-500/15 text-cyan-400'
                      }`}>{evt.level}</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs mt-1">{evt.event}</p>
                  </div>
                  <CyberBadge variant="slate" className="text-[8px] py-1 self-end md:self-center shrink-0 uppercase">CHRONO_STAMP</CyberBadge>
                </div>
              ))}
            </div>
          </CyberPanel>
        </div>
      );
    }

    case 'KanbanActivity': {
      const columns = ['Backlog', 'In Progress', 'Review', 'Completed'];
      const moveTaskStatus = (taskId: string, nextStatus: string) => {
        setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: nextStatus } : t));
      };

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in select-none">
          <div className="flex justify-between items-center border-b border-slate-900 pb-3 flex-wrap gap-2 text-left">
            <div>
              <h3 className="text-sm font-mono text-white tracking-wider font-bold">OPERATIONS KANBAN FLOW</h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">Click column nodes to shift task status inside decentralized ledger.</p>
            </div>
            <CyberBadge variant="cyan">COMPILING ACTIVE</CyberBadge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {columns.map((col, cIdx) => (
              <div key={col} className="bg-slate-950/80 p-3 rounded-xl border border-slate-900 flex flex-col min-h-[18rem] space-y-3">
                <div className="flex justify-between items-center border-b border-slate-900 pb-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{col}</span>
                  <span className="text-[10px] font-mono text-slate-550">({tasks.filter(t => t.status === col).length})</span>
                </div>

                <div className="space-y-2.5 flex-grow overflow-y-auto max-h-80 scrollbar-none">
                  {tasks.filter(t => t.status === col).map((task) => (
                    <div key={task.id} className="p-3 bg-slate-900/40 border border-slate-850 hover:border-cyan-400/20 rounded-lg group transition-all text-left">
                      <div className="flex justify-between items-start mb-1.5 flex-wrap">
                        <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border uppercase ${
                          task.priority === 'High' ? 'bg-rose-500/10 text-rose-455 border-rose-500/15' : 'bg-slate-950 text-slate-500 border-slate-850'
                        }`}>{task.priority}</span>
                      </div>
                      <h5 className="text-xs font-mono text-white tracking-wide truncate">{task.title}</h5>
                      <p className="text-[9px] text-slate-500 font-sans mt-1.5">DUE: {task.due}</p>

                      <div className="flex gap-1 mt-2.5 pt-2 border-t border-slate-850/60 justify-end">
                        {cIdx > 0 && (
                          <button
                            onClick={() => moveTaskStatus(task.id, columns[cIdx - 1])}
                            className="text-[8px] font-mono p-1 px-2 border border-slate-800 hover:border-cyan-400 text-slate-500 hover:text-cyan-400 rounded cursor-pointer bg-transparent"
                          >
                            ◀ BACK
                          </button>
                        )}
                        {cIdx < columns.length - 1 && (
                          <button
                            onClick={() => moveTaskStatus(task.id, columns[cIdx + 1])}
                            className="text-[8px] font-mono p-1 px-2 border border-slate-800 hover:border-cyan-400 text-slate-450 hover:text-cyan-400 rounded cursor-pointer bg-transparent"
                          >
                            NEXT ▶
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  {tasks.filter(t => t.status === col).length === 0 && (
                    <span className="text-[10px] text-slate-655 text-center block pt-4 select-none">No active items</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    case 'TasksActivity': {
      return (
        <TasksActivityView tasks={tasks} setTasks={setTasks} />
      );
    }

    case 'ProjectsActivity': {
      const mockProjects = [
        { name: 'Core Engine Compiler Upgrade', progress: 85, lead: 'Aether Lab Labs', health: 'NOMINAL', due: 'Jul 04, 2026' },
        { name: 'Google Cloud Node Ingress Integration', progress: 41, lead: 'Sentinel Admin', health: 'STRESSED', due: 'Aug 12, 2026' },
        { name: 'Cryptographic Ledger Handshake Client', progress: 100, lead: 'Zenith Corp', health: 'COMPLETED', due: 'Jun 15, 2026' }
      ];

      return (
        <CyberPanel variant="cyan" title="Operational Projects Portfolios" badge="Multi-module directories" className="max-w-2xl mx-auto">
          <div className="space-y-5 animate-fade-in text-left p-1">
            <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold pl-1 border-b border-slate-900 pb-2">Registry of high-entropy submodules:</span>
            
            <div className="space-y-3.5">
              {mockProjects.map((p, idx) => (
                <div key={idx} className="p-4 bg-slate-950 border border-slate-900 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start flex-wrap gap-2 font-mono text-left">
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-xs uppercase">{p.name}</h4>
                      <p className="text-[9px] text-slate-500">PROJECT LEAD CONTAINER: {p.lead}</p>
                    </div>
                    <span className={`text-[8px] border px-1.5 py-0.5 rounded uppercase font-bold ${
                      p.health === 'NOMINAL' ? 'bg-emerald-500/10 border-emerald-500/15 text-emerald-400' :
                      p.health === 'STRESSED' ? 'bg-amber-500/15 border-amber-500/15 text-amber-450' :
                      'bg-cyan-500/10 border-cyan-500/15 text-cyan-400'
                    }`}>{p.health}</span>
                  </div>

                  <div className="space-y-1.5 font-mono text-[10px] text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-400">COMPILATION STAGE VALUE:</span>
                      <span className="text-cyan-400 font-bold">{p.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-2 rounded border border-slate-850 overflow-hidden bg-slate-950">
                      <div className="bg-cyan-400 h-full rounded transition-all duration-1000" style={{ width: `${p.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-slate-550 pt-2 border-t border-slate-905">
                    <span>TARGET DEADLINE DETECTED: {p.due}</span>
                    <span>UUID: PROJ_0x{idx}FF84B</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'APIKeysActivity': {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto p-2">
          {/* Key Generator controller */}
          <div className="lg:col-span-1">
            <CyberPanel variant="cyan" title="Formulate API Key" badge="Key Synthesizer">
              <form onSubmit={generateKey} className="space-y-4 text-left">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Signature Designation</label>
                  <input
                    type="text"
                    value={keyName}
                    onChange={(e) => setKeyName(e.target.value)}
                    placeholder="E.g. Local developer server"
                    className="w-full bg-slate-950 border border-cyan-500/20 text-xs text-white rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-455 font-sans"
                  />
                </div>
                <CyberButton variant="cyan" glow fullWidth type="submit">
                  SYNTHESIZE SECRET KEY →
                </CyberButton>
              </form>
            </CyberPanel>
          </div>

          {/* Stored cryptographic keys registry */}
          <div className="lg:col-span-2">
            <CyberPanel variant="cyan" title="Registered Cryptographic Tokens" badge="Read/Write active">
              <div className="space-y-4">
                {apiKeys.length === 0 ? (
                  <p className="text-xs text-slate-500 text-center py-4 font-mono">No keys registered inside ledger.</p>
                ) : (
                  <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1 select-text">
                    {apiKeys.map((k, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-950/80 border border-slate-900 rounded-xl flex items-center justify-between">
                        <div className="space-y-1.5 flex-1 min-w-0 mr-4 text-left">
                          <h5 className="text-xs font-mono text-white font-bold truncate uppercase">{k.name}</h5>
                          <code className="text-[10px] bg-slate-900 p-1 px-2.5 rounded border border-slate-800 text-cyan-400 block font-mono overflow-x-auto whitespace-nowrap scrollbar-none select-all">{k.key}</code>
                          <span className="text-[9px] font-mono text-slate-550 block">CREATED ON: {k.date}</span>
                        </div>
                        <button
                          onClick={() => deleteKey(idx)}
                          className="p-2 bg-rose-500/10 border border-rose-500/20 text-rose-450 rounded-xl hover:bg-rose-500 hover:text-white cursor-pointer"
                        >
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CyberPanel>
          </div>
        </div>
      );
    }

    case 'DeveloperDashboardActivity': {
      return (
        <DeveloperDashboardActivityView />
      );
    }

    case 'SystemHealthActivity': {
      return (
        <CyberPanel variant="amber" title="Node System Health Analyzer" badge="METRICS OVERWATCH" className="max-w-2xl mx-auto">
          <div className="space-y-6 text-left">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-950 border border-slate-900 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-505 uppercase">SERVER STIMULUS:</span>
                <p className="text-sm font-mono text-white">ONLINE ●</p>
              </div>
              <div className="bg-slate-950 border border-slate-900 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-505 uppercase">PORT ROUTE INDEX:</span>
                <p className="text-sm font-mono text-white">PORT 3000</p>
              </div>
              <div className="bg-slate-950 border border-slate-900 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-505 uppercase">CONTAINER DISK UTIL:</span>
                <p className="text-sm font-mono text-white">2.4% / 10GB</p>
              </div>
              <div className="bg-slate-950 border border-slate-900 p-3 rounded-xl space-y-1">
                <span className="text-[9px] font-mono text-slate-505 uppercase">Pings latency:</span>
                <p className="text-sm font-mono text-amber-450">12ms</p>
              </div>
            </div>

            {/* Simulated Server CPU tracker charting */}
            <div className="bg-slate-950 rounded-xl p-4 border border-fuchsia-500/15">
              <span className="text-[10px] font-mono text-slate-500 uppercase block mb-3">Processor Load Spectrograms</span>
              <div className="h-28 flex items-end justify-between gap-1.5 px-2">
                {[12, 18, 15, 45, 12, 52, 98, 14, 42, 65, 23, 11, 88, 34, 12, 56, 43, 22].map((val, i) => (
                  <div key={i} className="flex-1 bg-amber-500/10 border-t border-amber-440 hover:bg-amber-400 rounded-t transition-all flex flex-col justify-end" style={{ height: `${val}%` }}>
                    <span className="text-[5px] text-center font-mono select-none block pb-1"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'AdminDashboardActivity': {
      return (
        <AdminDashboardActivityView />
      );
    }

    case 'MarketplaceActivity': {
      const filteredProducts = marketProducts.filter(p => {
        const matchesCategory = marketFilter === 'ALL' || p.type === marketFilter;
        const matchesSearch = p.title.toLowerCase().includes(marketSearch.toLowerCase()) || 
                              p.desc.toLowerCase().includes(marketSearch.toLowerCase());
        return matchesCategory && matchesSearch;
      });

      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 animate-fade-in text-left font-sans">
          {/* Marketplace Hero & Mini-stats banner */}
          <CyberPanel variant="cyan" title="Aether Ledger Marketplace" badge="Secured Peer Node v4.2">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] bg-cyan-400/20 text-cyan-400 font-mono font-bold px-2 py-0.5 rounded border border-cyan-500/30 uppercase">Enterprise Store</span>
                <h4 className="text-sm font-mono text-white font-bold uppercase mt-1">AETHER COGNITIVE ASSETS EXCHANGE</h4>
                <p className="text-xs text-slate-400">Deploy validated peer models, custom interface wrappers, and cipher plugins into your node thread.</p>
              </div>
              <div className="flex gap-2 font-mono shrink-0">
                <CyberButton variant="cyan" className="py-2 px-3 text-[10px]" onClick={() => onNavigate && onNavigate('CartActivity')}>
                  <ShoppingCart className="w-3.5 h-3.5 mr-1" /> CART ({cartItems.length})
                </CyberButton>
                <CyberButton variant="slate" className="py-2 px-3 text-[10px]" onClick={() => onNavigate && onNavigate('OrdersActivity')}>
                  <ShoppingBag className="w-3.5 h-3.5 mr-1" /> MY LICENSES ({orders.length})
                </CyberButton>
              </div>
            </div>
            
            {/* Bento-style Quick stats */}
            <div className="border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 text-center divide-x divide-y md:divide-y-0 divide-slate-900">
              <div className="p-3">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Total Available Catalog</span>
                <span className="text-sm font-mono font-extrabold text-white">{marketProducts.length} Assemblies</span>
              </div>
              <div className="p-3">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Pre-authorized Handshakes</span>
                <span className="text-sm font-mono font-extrabold text-cyan-400">Continuous Sync</span>
              </div>
              <div className="p-3">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Saved Items Registry</span>
                <span className="text-sm font-mono font-extrabold text-white hover:text-rose-450 cursor-pointer" onClick={() => onNavigate && onNavigate('WishlistActivity')}>
                  {wishlistItems.length} Products
                </span>
              </div>
              <div className="p-3">
                <span className="text-[9px] font-mono text-slate-500 block uppercase font-bold">Completed Handshakes</span>
                <span className="text-sm font-mono font-extrabold text-fuchsia-400">{orders.length} Handed</span>
              </div>
            </div>
          </CyberPanel>

          {/* Filtering Controls and Search */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center bg-slate-950 p-3.5 rounded-2xl border border-slate-900">
            {/* Filters */}
            <div className="flex flex-wrap gap-1.5">
              {['ALL', 'MODEL ARCHIVE', 'THEMATIC MOD', 'SECURITY PLGN'].map(filterVal => (
                <button
                  key={filterVal}
                  onClick={() => setMarketFilter(filterVal)}
                  className={`text-[9px] font-mono font-bold tracking-wider px-2.5 py-1.5 rounded-lg border transition-all uppercase cursor-pointer ${
                    marketFilter === filterVal
                      ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {filterVal}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-grow max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search catalog models..."
                value={marketSearch}
                onChange={(e) => setMarketSearch(e.target.value)}
                className="w-full bg-slate-900/60 border border-slate-800 text-[10px] font-mono text-white rounded-xl py-2 pl-9 pr-3 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Catalog products grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length === 0 ? (
              <div className="col-span-1 md:col-span-3 p-12 bg-slate-950/40 rounded-3xl border border-slate-900 text-center font-mono text-xs text-slate-500 space-y-2">
                <Search className="w-8 h-8 mx-auto text-slate-700 animate-pulse" />
                <p>No compiled packages matching parameters found inside ledger directory.</p>
              </div>
            ) : (
              filteredProducts.map(prod => {
                const isInCart = cartItems.includes(prod.id);
                const isWishlisted = wishlistItems.includes(prod.id);

                return (
                  <div key={prod.id} className="border border-slate-900 bg-slate-950/95 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/20 hover:shadow-2xl transition-all duration-300 relative group">
                    <div className="space-y-2 text-left">
                      {/* Tags & Price Tag */}
                      <div className="flex justify-between items-start">
                        <span className="text-[8px] font-mono py-0.5 px-2 rounded bg-slate-900 text-cyan-400 border border-cyan-400/10 uppercase tracking-widest font-extrabold">
                          {prod.type}
                        </span>
                        <span className="text-xs font-mono font-black text-slate-100 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                          {prod.price === 0 ? 'FREE' : `$${prod.price.toFixed(2)}`}
                        </span>
                      </div>

                      {/* Title */}
                      <h5 className="text-xs font-mono text-white font-black uppercase mt-1.5 hover:text-cyan-400 transition-colors cursor-pointer" onClick={() => {
                        setSelectedProductId(prod.id);
                        if (onNavigate) onNavigate('ProductActivity');
                      }}>
                        {prod.title}
                      </h5>

                      <p className="text-[10px] text-slate-500 font-sans line-clamp-3 leading-relaxed">
                        {prod.desc}
                      </p>

                      {/* Metadata row */}
                      <div className="flex gap-2 pt-1 select-none text-[8px] font-mono text-slate-550">
                        <span>DL: {prod.downloads}</span>
                        <span>•</span>
                        <span>SIZE: {prod.size}</span>
                        <span>•</span>
                        <span>VER: {prod.version}</span>
                      </div>
                    </div>

                    {/* Operational Row Buttons */}
                    <div className="flex justify-between items-center border-t border-slate-900/60 pt-3 mt-4 gap-2">
                      <div className="flex gap-1.5">
                        <CyberButton
                          variant="slate"
                          className="py-1 px-2.5 text-[9px] font-mono whitespace-nowrap"
                          onClick={() => {
                            setSelectedProductId(prod.id);
                            if (onNavigate) onNavigate('ProductActivity');
                          }}
                        >
                          SPEC DETAILS
                        </CyberButton>

                        <button
                          onClick={() => {
                            if (isWishlisted) {
                              setWishlistItems(wishlistItems.filter(id => id !== prod.id));
                            } else {
                              setWishlistItems([...wishlistItems, prod.id]);
                            }
                          }}
                          className={`p-1 px-2 rounded-xl border transition-all cursor-pointer flex items-center justify-center ${
                            isWishlisted 
                              ? 'bg-rose-500/15 border-rose-500/20 text-rose-450' 
                              : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-350'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <CyberButton
                        variant={isInCart ? 'slate' : 'cyan'}
                        className="py-1.5 px-3 text-[9px] font-mono shrink-0 uppercase"
                        onClick={() => {
                          if (isInCart) {
                            if (onNavigate) onNavigate('CartActivity');
                          } else {
                            setCartItems([...cartItems, prod.id]);
                          }
                        }}
                      >
                        {isInCart ? 'IN CART ➔' : 'BUY'}
                      </CyberButton>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      );
    }

    case 'ProductActivity': {
      const activeProd = marketProducts.find(p => p.id === selectedProductId) || marketProducts[0];
      const isInCart = cartItems.includes(activeProd.id);
      const isWishlisted = wishlistItems.includes(activeProd.id);
      const productReviews = reviewsList.filter(r => r.productId === activeProd.id);

      return (
        <CyberPanel variant="cyan" title="Component Specs & Matrix Details" badge="Debugger Focus" className="max-w-3xl mx-auto">
          <div className="space-y-5 animate-fade-in font-sans text-left p-1">
            {/* Specs Header Card */}
            <div className="flex justify-between items-start flex-wrap gap-4 border-b border-slate-900 pb-4">
              <div className="space-y-2">
                <button
                  onClick={() => onNavigate && onNavigate('MarketplaceActivity')}
                  className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog Directory
                </button>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-[9px] font-mono tracking-widest bg-cyan-400/10 text-cyan-400 px-2.5 py-0.5 border border-cyan-400/20 rounded uppercase font-bold">
                    {activeProd.type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-bold">STABILITY GUARANTEED 100%</span>
                </div>
                <h4 className="text-sm font-mono text-white font-black uppercase tracking-wide mt-1">
                  {activeProd.title}
                </h4>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-amber-400 font-bold font-mono">{activeProd.rating}</span>
                  <div className="flex items-center text-amber-500">
                    {[1, 2, 3, 4, 5].map(st => (
                      <Star key={st} className={`w-3.5 h-3.5 ${st <= Math.floor(activeProd.rating) ? 'fill-current text-amber-400' : 'text-slate-800'}`} />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono pl-1 hover:underline cursor-pointer" onClick={() => onNavigate && onNavigate('ReviewsActivity')}>
                    ({productReviews.length} verified operator feedbacks)
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right space-y-1">
                <span className="text-sm font-mono text-slate-500 block">LICENSE VALUATION:</span>
                <span className="text-2xl font-mono text-white font-black uppercase">
                  {activeProd.price === 0 ? 'FREE' : `$${activeProd.price.toFixed(2)}`}
                </span>
                <span className="text-[8px] font-mono text-slate-550 block">ENVELOPE HASH: 0xFD8E_P272</span>
              </div>
            </div>

            {/* Description Card block */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-900 space-y-3">
              <span className="text-[9px] font-mono text-slate-550 block uppercase font-bold">Architecture Abstract Payload</span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {activeProd.desc}
              </p>
            </div>

            {/* Deep Specs specs details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] font-mono text-slate-500 uppercase block">Active Downloads</span>
                <span className="text-xs font-mono font-bold text-white block mt-0.5">{activeProd.downloads} Units</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] font-mono text-slate-500 uppercase block">Compiled Weight</span>
                <span className="text-xs font-mono font-bold text-white block mt-0.5">{activeProd.size}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] font-mono text-slate-500 uppercase block">Software Release</span>
                <span className="text-xs font-mono font-bold text-cyan-400 block mt-0.5">{activeProd.version}</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                <span className="text-[8px] font-mono text-slate-500 uppercase block">Core Developer</span>
                <span className="text-xs font-mono font-bold text-white block mt-0.5 hover:underline cursor-pointer hover:text-cyan-400" onClick={() => onNavigate && onNavigate('SellerActivity')}>
                  {activeProd.author} ➔
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-900 flex flex-col sm:flex-row gap-3">
              <div className="flex gap-2 flex-grow">
                <CyberButton
                  variant={isWishlisted ? 'slate' : 'cyan'}
                  className="py-3.5 px-4 text-[10px] font-mono flex items-center justify-center gap-1 cursor-pointer"
                  onClick={() => {
                    if (isWishlisted) {
                      setWishlistItems(wishlistItems.filter(id => id !== activeProd.id));
                    } else {
                      setWishlistItems([...wishlistItems, activeProd.id]);
                    }
                  }}
                >
                  <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-rose-500' : ''}`} />
                  {isWishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}
                </CyberButton>

                <CyberButton variant="slate" className="py-3.5 px-4 text-[10px] font-mono flex-grow" onClick={() => onNavigate && onNavigate('SellerActivity')}>
                  DEV PROFILE ➔
                </CyberButton>
              </div>

              <CyberButton
                variant={isInCart ? 'magenta' : 'cyan'}
                glow={!isInCart}
                className="py-3.5 px-6 font-mono text-[10px] uppercase flex-grow sm:flex-grow-0 shrink-0"
                onClick={() => {
                  if (isInCart) {
                    onNavigate && onNavigate('CartActivity');
                  } else {
                    setCartItems([...cartItems, activeProd.id]);
                  }
                }}
              >
                {isInCart ? 'MANAGE AND CONFIGURE IN CART ➔' : 'BUY AND SEED CONTAINER'}
              </CyberButton>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'SellerActivity': {
      const activeProd = marketProducts.find(p => p.id === selectedProductId) || marketProducts[0];
      const otherAuthorSeller = activeProd.author;
      const otherSellerProducts = marketProducts.filter(p => p.author === otherAuthorSeller);

      return (
        <CyberPanel variant="cyan" title="Developer Portfolio & Registry Info" badge="Verified Contractor" className="max-w-xl mx-auto">
          <div className="space-y-5 animate-fade-in font-sans text-left p-1">
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-slate-900 pb-4 flex-wrap gap-4">
              <div className="space-y-1.5 truncate max-w-[70%]">
                <button
                  onClick={() => onNavigate && onNavigate('ProductActivity')}
                  className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Specs Focus
                </button>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-mono text-white font-extrabold uppercase truncate">
                    {otherAuthorSeller}
                  </h4>
                  <CyberBadge variant="cyan">VERIFIED PRO</CyberBadge>
                </div>
                <p className="text-[10px] text-slate-500 font-mono uppercase">PARTNER REFERENCE MATRIX ID: SEC_DEV_0x77AF2</p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] font-mono text-slate-550 block">COGNITIVE TRUST VALUE</span>
                <span className="text-sm font-mono font-extrabold text-emerald-400 block mt-1">4.93 / 5.0 (EXCELLENT)</span>
              </div>
            </div>

            {/* Paragraph Bio */}
            <div className="p-4 bg-slate-950 border border-slate-900 rounded-2xl space-y-3.5">
              <span className="text-[9px] font-mono text-slate-550 block uppercase font-bold">Profile Summary</span>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                Dedicated decentralized logic architect. Focusing on high-entropy Metaphor models, customized CSS-in-JS design themes, and cryptographic peer security links under the Aether Network.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-4 text-[10px] font-mono text-slate-400 border-t border-slate-900/60">
                <div>TOTAL PUBLISHED COMPILER LAYOUTS: <span className="text-cyan-400 font-extrabold">{otherSellerProducts.length} Items</span></div>
                <div>SERVER OVERWATCH UPTIME: <span className="text-cyan-400 font-extrabold">99.998% ACTIVE</span></div>
              </div>
            </div>

            {/* List of published models */}
            <span className="text-[10px] font-mono text-slate-500 block uppercase pl-1 font-bold">Validated assemblies published by seller:</span>
            <div className="space-y-2 font-mono text-[11px]">
              {otherSellerProducts.map((p, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center gap-4 hover:border-cyan-400/20 transition-all cursor-pointer" onClick={() => {
                  setSelectedProductId(p.id);
                  onNavigate && onNavigate('ProductActivity');
                }}>
                  <div className="text-left truncate max-w-[70%]">
                    <span className="text-white font-bold uppercase block truncate">{p.title}</span>
                    <span className="text-[9px] text-slate-500 block mt-0.5">{p.type} • Version {p.version}</span>
                  </div>
                  <span className="text-cyan-400 font-extrabold shrink-0 text-xs">
                    {p.price === 0 ? 'FREE' : `$${p.price.toFixed(2)}`}
                  </span>
                </div>
              ))}
            </div>

            <CyberButton variant="slate" fullWidth className="py-2.5 font-mono text-[10px] uppercase" onClick={() => onNavigate && onNavigate('MarketplaceActivity')}>
              CLOSE PROFILE VIEW & RETURN STORE
            </CyberButton>
          </div>
        </CyberPanel>
      );
    }

    case 'CartActivity': {
      // Find full info for all products represented in the cart
      const userCartProducts = marketProducts.filter(p => cartItems.includes(p.id));

      const subtotal = userCartProducts.reduce((sum, item) => sum + item.price, 0);
      const discountVal = subtotal * appliedDiscount;
      const serviceCharge = userCartProducts.length > 0 ? 0.20 : 0.00;
      const totalPricing = subtotal - discountVal + serviceCharge;

      const handleValidatePromo = (e: React.FormEvent) => {
        e.preventDefault();
        if (!couponCode.trim()) return;
        if (['COGNITIVE_20', 'BLACKHAT_WINTER'].includes(couponCode.toUpperCase())) {
          setAppliedDiscount(0.20); // 20%
          setCouponStatus('success');
        } else if (['FREE_COGNITION', 'AIS_PRO_99'].includes(couponCode.toUpperCase())) {
          setAppliedDiscount(1.00); // 100% off!!
          setCouponStatus('success');
        } else {
          setCouponStatus('invalid');
          setAppliedDiscount(0.00);
        }
      };

      return (
        <div className="space-y-6 max-w-4xl mx-auto p-2 animate-fade-in text-left font-sans">
          <button
            onClick={() => onNavigate && onNavigate('MarketplaceActivity')}
            className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Continue Browsing Catalog
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Items Column (2 cols) */}
            <div className="md:col-span-2 space-y-4">
              <CyberPanel variant="cyan" title="Secure Cart Checklist" badge="Handshakes Pending">
                {userCartProducts.length === 0 ? (
                  <div className="p-10 text-center font-mono space-y-4 text-xs text-slate-500">
                    <ShoppingCart className="w-10 h-10 mx-auto text-slate-700 animate-pulse" />
                    <p>Your secure shopping cart index contains no files registries.</p>
                    <CyberButton variant="cyan" className="py-2 px-4 inline-block font-mono text-[10px]" onClick={() => onNavigate && onNavigate('MarketplaceActivity')}>
                      GO BROWSE CATALOG STORE
                    </CyberButton>
                  </div>
                ) : (
                  <div className="space-y-3 p-1">
                    {userCartProducts.map(item => (
                      <div key={item.id} className="p-3.5 bg-slate-950 border border-slate-900 hover:border-cyan-500/20 rounded-xl flex justify-between items-center gap-4 transition-all">
                        <div className="text-left space-y-1.5 truncate max-w-[70%]">
                          <span className="text-[8px] font-mono py-0.5 px-2 bg-slate-900 rounded border border-cyan-400/10 text-cyan-400 uppercase select-none inline-block">
                            {item.type}
                          </span>
                          <h5 className="text-xs font-mono font-bold text-white uppercase truncate">{item.title}</h5>
                          <span className="text-[9px] font-mono text-slate-550 block">SIZE DETECTED: {item.size} • DEV: {item.author}</span>
                        </div>
                        <div className="flex items-center gap-4 shrink-0 font-mono">
                          <span className="text-xs font-bold text-white uppercase">
                            {item.price === 0 ? 'FREE' : `$${item.price.toFixed(2)}`}
                          </span>
                          <button
                            onClick={() => setCartItems(cartItems.filter(id => id !== item.id))}
                            className="p-1 px-2.5 bg-rose-500/10 border border-rose-500/15 text-rose-450 hover:bg-rose-500 hover:text-white rounded-lg transition-all text-[9px] font-mono cursor-pointer uppercase font-bold"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CyberPanel>

              {/* Promo Coupon Card */}
              {userCartProducts.length > 0 && (
                <CyberPanel variant="neutral" title="Enter Premium Discount Voucher" badge="Coupon decoders">
                  <form onSubmit={handleValidatePromo} className="flex gap-2 p-1 text-left items-stretch">
                    <input
                      type="text"
                      placeholder="E.G. COGNITIVE_20"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                        if (couponStatus !== 'idle') setCouponStatus('idle');
                      }}
                      className="bg-slate-950 border border-slate-900 rounded-xl flex-1 text-xs text-white p-2.5 px-4 focus:outline-none focus:border-cyan-450 font-mono uppercase"
                    />
                    <CyberButton
                      type="submit"
                      variant="slate"
                      className="py-2.5 px-4 font-mono text-[10px] shrink-0"
                    >
                      APPLY KEY
                    </CyberButton>
                  </form>
                  {couponStatus === 'success' && (
                    <p className="text-[9px] font-mono text-emerald-400 pl-2 pt-1 uppercase">✓ Promo active: {(appliedDiscount * 100).toFixed(0)}% discount value successfully written.</p>
                  )}
                  {couponStatus === 'invalid' && (
                    <p className="text-[9px] font-mono text-rose-500 pl-2 pt-1 uppercase">❌ Decryption of discount coupon failed. Code is invalid.</p>
                  )}
                </CyberPanel>
              )}
            </div>

            {/* Right Summary Column (1 col) */}
            <div className="md:col-span-1">
              <CyberPanel variant="cyan" title="Pricing Allocator" badge="Pricing Review">
                <div className="space-y-4 font-mono text-[11px] text-slate-350 p-1">
                  <div className="space-y-2 border-b border-slate-900 pb-3">
                    <div className="flex justify-between">
                      <span>CATALOGUE SUB-SUMS:</span>
                      <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-emerald-400">
                      <span>COMPROMISED COUPON DISCOUNTS:</span>
                      <span>-${discountVal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SECURE HANDSHAKE SURCHARGE:</span>
                      <span className="text-white">${serviceCharge.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-xs font-bold border-b border-slate-900 pb-3">
                    <span className="text-white">TOTAL VERIFIED SURCHARGE:</span>
                    <span className="text-cyan-400 font-extrabold text-sm">${totalPricing.toFixed(2)} USD</span>
                  </div>

                  <CyberButton
                    variant="cyan"
                    fullWidth
                    glow={userCartProducts.length > 0}
                    className="py-3 text-[10px] uppercase font-bold"
                    onClick={() => {
                      if (userCartProducts.length === 0) return alert('Your shopping cart is completely empty.');
                      onNavigate && onNavigate('CheckoutActivity');
                    }}
                  >
                    PROCEED TO LEDGER DISPATCH ➔
                  </CyberButton>
                </div>
              </CyberPanel>
            </div>
          </div>
        </div>
      );
    }

    case 'CheckoutActivity': {
      const userCartProducts = marketProducts.filter(p => cartItems.includes(p.id));
      const subtotal = userCartProducts.reduce((sum, item) => sum + item.price, 0);
      const discountVal = subtotal * appliedDiscount;
      const serviceCharge = userCartProducts.length > 0 ? 0.20 : 0.00;
      const totalPricing = subtotal - discountVal + serviceCharge;

      const handleConfirmDeploys = () => {
        if (userCartProducts.length === 0) {
          alert('Cart contains no licenses.');
          return;
        }

        // Add to orders
        const newOrders = userCartProducts.map(p => {
          const randHex = '0x' + [...Array(12)].map(() => Math.floor(Math.random()*16).toString(16).toUpperCase()).join('');
          return {
            id: 'ORD_' + Math.floor(10000 + Math.random() * 90000),
            date: 'Jun 19, 2026',
            title: p.title,
            type: p.type,
            price: p.price === 0 ? '$0.00' : `$${p.price.toFixed(2)}`,
            status: 'COMPILED ON NODE',
            licenseHash: randHex
          };
        });

        setOrders([...newOrders, ...orders]);
        setCartItems([]); // Clear cart
        alert('Double-ledger handshake approved! Core licensing registry written into active virtual device directory files successfully.');
        onNavigate && onNavigate('OrdersActivity');
      };

      return (
        <CyberPanel variant="cyan" title="Conclude Licensing Handshake" badge="Double Ledger Checkout" className="max-w-xl mx-auto">
          <div className="space-y-4 animate-fade-in text-left font-sans p-1">
            <button
              onClick={() => onNavigate && onNavigate('CartActivity')}
              className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return and Modify Cart
            </button>

            <span className="text-[10px] font-mono text-slate-550 block uppercase font-bold pl-1 pt-1">Select Billing Channel Matrix:</span>
            
            <div className="space-y-2 select-none">
              {[
                { name: 'SECURE ON-DEVICE CHIP DESCRIPTIONS (CREDIT CARD)', desc: 'Encrypt parameters into the validated enclave secure vault.' },
                { name: 'AETHER COMPANION COGNITIVE CREDITS BUFFER', desc: 'Settle via standard peer point allocations.' },
              ].map((matrix, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-900 rounded-xl hover:border-cyan-400/20 transition-all cursor-pointer flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>}
                  </div>
                  <div className="text-left font-mono">
                    <span className="text-[10px] text-white font-bold uppercase block">{matrix.name}</span>
                    <span className="text-[9px] text-slate-500 block leading-normal mt-0.5">{matrix.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-slate-900 pt-3.5 space-y-3 font-mono text-[11px] text-slate-450">
              <span className="text-[10px] font-mono text-slate-500 block uppercase font-bold">Checkout Items Registry</span>
              
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-2 text-left">
                {userCartProducts.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <span className="truncate max-w-[70%]">{item.title}</span>
                    <span className="text-white font-bold">{item.price === 0 ? 'FREE' : `$${item.price.toFixed(2)}`}</span>
                  </div>
                ))}
                {userCartProducts.length === 0 && <span className="text-slate-500 text-center block py-1">No pending item checkouts</span>}
              </div>

              <div className="flex justify-between border-t border-slate-900/60 pt-2 text-xs font-bold text-white">
                <span>TOTAL ASSIGNED FEE:</span>
                <span className="text-cyan-400 font-extrabold">${totalPricing.toFixed(2)} USD</span>
              </div>
            </div>

            <CyberButton
              variant="cyan"
              fullWidth
              glow={userCartProducts.length > 0}
              className="py-3.5 text-[10.5px] font-mono uppercase font-bold"
              onClick={handleConfirmDeploys}
            >
              COMPLY & SECURE LICENSE RECORD
            </CyberButton>
          </div>
        </CyberPanel>
      );
    }

    case 'OrdersActivity': {
      return (
        <CyberPanel variant="cyan" title="Aether Operating Licenses Registry" badge="My Software" className="max-w-2xl mx-auto">
          <div className="space-y-4 animate-fade-in text-left font-mono text-[11px] p-1">
            <div className="flex justify-between items-center border-b border-slate-900 pb-3.5">
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">ACQUIRED PLATFORM PRODUCTS:</span>
                <p className="text-[9px] text-slate-500 leading-normal font-sans mt-0.5">These licenses are fully seeded and bound to on-device kernel directories.</p>
              </div>
              <CyberButton variant="slate" className="py-2 px-3 text-[9px] font-bold" onClick={() => onNavigate && onNavigate('MarketplaceActivity')}>
                CATALOG ➔
              </CyberButton>
            </div>

            {orders.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-6 font-mono">You have acquired zero software modules from the ledger marketplace.</p>
            ) : (
              <div className="space-y-3">
                {orders.map((or, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl space-y-2.5">
                    <div className="flex justify-between items-center text-xs flex-wrap gap-2 text-left">
                      <div>
                        <span className="text-[9px] font-mono py-0.5 px-2 bg-slate-900 border border-cyan-400/10 text-cyan-400 rounded uppercase font-bold">{or.type}</span>
                        <h4 className="text-white font-extrabold uppercase mt-1.5">{or.title}</h4>
                      </div>
                      <span className="text-cyan-400 font-bold">{or.price}</span>
                    </div>

                    <div className="space-y-1 font-mono text-[9px] text-slate-550 border-t border-slate-900/60 pt-2 select-text text-left">
                      <div>HANDSHAKE TRANSACTION RECORD: {or.id}</div>
                      <div className="truncate">LICENSE KEY EMBED: {or.licenseHash}</div>
                      <div>DATE RESOLVED: {or.date} • STATUS: <span className="text-emerald-400 font-bold">{or.status}</span></div>
                    </div>

                    <div className="flex justify-between gap-2 pt-1">
                      <CyberButton variant="slate" className="py-1 px-3 text-[8.5px]" onClick={() => {
                        setSelectedProductId('1'); // fallback index selection
                        onNavigate && onNavigate('RefundsActivity');
                      }}>
                        <Undo2 className="w-3 h-3 text-rose-500 mr-1 inline" /> REQUEST REFUND LICENSING
                      </CyberButton>
                      <button 
                        onClick={() => alert(`Kernel handshake confirmed. Pipeline binaries for "${or.title}" allocated onto active device.`)}
                        className="bg-cyan-500/10 hover:bg-cyan-500 hover:text-white border border-cyan-400/20 text-cyan-400 py-1 px-3 rounded-lg text-[8.5px] uppercase transition-colors font-bold cursor-pointer"
                      >
                        RE-INSTALL PIPELINE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CyberPanel>
      );
    }

    case 'WishlistActivity': {
      const wishlistProducts = marketProducts.filter(p => wishlistItems.includes(p.id));

      return (
        <CyberPanel variant="cyan" title="Stored Elements Saved List" badge="Saved Items" className="max-w-2xl mx-auto">
          <div className="space-y-4 animate-fade-in text-left p-1">
            <div className="flex justify-between items-center border-b border-slate-900 pb-3 font-mono">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold">SAVED ASSEMBLIES awaiting credits:</span>
                <p className="text-[9px] font-sans text-slate-500 mt-0.5">Keep track of assemblies prior to ledger billing.</p>
              </div>
              <CyberButton variant="slate" className="py-2 px-3 text-[9px]" onClick={() => onNavigate && onNavigate('MarketplaceActivity')}>
                CATALOGUE ➔
              </CyberButton>
            </div>

            {wishlistProducts.length === 0 ? (
              <div className="p-8 text-center font-mono space-y-3.5 text-xs text-slate-500">
                <Heart className="w-8 h-8 text-slate-800 mx-auto animate-pulse" />
                <p>Saved wish list registry is empty. Zero products recorded here.</p>
                <CyberButton variant="cyan" className="py-2 px-4 inline-block font-mono text-[9px]" onClick={() => onNavigate && onNavigate('MarketplaceActivity')}>
                  BROWSE ALL PRODUCTS
                </CyberButton>
              </div>
            ) : (
              <div className="space-y-3 font-mono text-[11px]">
                {wishlistProducts.map(p => (
                  <div key={p.id} className="p-3.5 bg-slate-950 border border-slate-900 rounded-xl flex justify-between items-center gap-4 hover:border-cyan-400/20 transition-all">
                    <div className="text-left font-sans truncate max-w-[70%] text-slate-350">
                      <span className="text-[8px] font-mono py-0.5 px-2 bg-slate-900 border border-cyan-400/10 text-cyan-400 rounded uppercase font-bold">{p.type}</span>
                      <h4 className="text-white font-mono font-bold uppercase mt-1 truncate">{p.title}</h4>
                      <p className="text-[9px] text-slate-500 truncate mt-0.5">SIZE OVERALL: {p.size} • DL: {p.downloads}</p>
                    </div>
                    <div className="flex gap-2.5 shrink-0 items-center">
                      <span className="text-xs font-mono font-extrabold text-white pr-2">
                        {p.price === 0 ? 'FREE' : `$${p.price.toFixed(2)}`}
                      </span>
                      <CyberButton variant="cyan" className="py-1 px-3.5 text-[9px]" onClick={() => {
                        // Move to Carts
                        if (!cartItems.includes(p.id)) {
                          setCartItems([...cartItems, p.id]);
                        }
                        setWishlistItems(wishlistItems.filter(id => id !== p.id));
                        alert('Element successfully transferred to shopping cart indexes.');
                      }} >
                        BUY element
                      </CyberButton>
                      <button 
                        onClick={() => setWishlistItems(wishlistItems.filter(id => id !== p.id))}
                        className="p-1 px-2 border border-slate-800 hover:border-rose-450 hover:bg-rose-500/10 text-slate-500 hover:text-rose-450 transition-colors rounded-lg flex items-center justify-center cursor-pointer"
                      >
                        <Trash className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CyberPanel>
      );
    }

    case 'ReviewsActivity': {
      const activeProd = marketProducts.find(p => p.id === selectedProductId) || marketProducts[0];
      const prodReviews = reviewsList.filter(r => r.productId === activeProd.id);

      const handleAddReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReviewAuthor.trim() || !newReviewText.trim()) return;

        const newRev = {
          id: 'r_user_' + Math.floor(Math.random() * 100000),
          productId: activeProd.id,
          author: newReviewAuthor,
          rating: newReviewRating,
          date: 'Jun 19, 2026',
          text: newReviewText
        };

        setReviewsList([newRev, ...reviewsList]);
        setNewReviewAuthor('');
        setNewReviewText('');
        setNewReviewRating(5);
        alert('Your cryptographic feedback record on this assembly model was saved successfully.');
      };

      return (
        <div className="space-y-6 max-w-4xl mx-auto p-2 animate-fade-in text-left font-sans">
          <button
            onClick={() => onNavigate && onNavigate('ProductActivity')}
            className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 hover:text-cyan-400 separator-t uppercase font-bold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Model Specifications
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Feed Column */}
            <div className="md:col-span-2 space-y-4">
              <CyberPanel variant="cyan" title="Verification Feedbacks List" badge={`${prodReviews.length} records`}>
                <div className="space-y-3.5 text-left p-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">Operator Reviews Feed: {activeProd.title}</span>

                  {prodReviews.length === 0 ? (
                    <p className="text-xs text-slate-500 text-center font-mono py-8 uppercase border border-slate-900 border-dashed rounded-xl">No cryptographic reviews submitted for this model assembly.</p>
                  ) : (
                    prodReviews.map(rev => (
                      <div key={rev.id} className="p-3.5 bg-slate-950 border border-slate-900 hover:border-cyan-500/10 rounded-xl space-y-2">
                        <div className="flex justify-between items-center text-xs flex-wrap gap-2 font-mono">
                          <span className="text-cyan-400 font-extrabold uppercase text-[10px]">@{rev.author}</span>
                          <span className="text-slate-500 font-bold text-[9px]">{rev.date}</span>
                        </div>
                        <div className="flex items-center text-amber-500 py-0.5 select-none">
                          {[1, 2, 3, 4, 5].map(st => (
                            <Star key={st} className={`w-3 h-3 ${st <= rev.rating ? 'fill-current text-amber-400' : 'text-slate-900'}`} />
                          ))}
                        </div>
                        <p className="text-xs text-slate-350 leading-relaxed font-sans">{rev.text}</p>
                      </div>
                    ))
                  )}
                </div>
              </CyberPanel>
            </div>

            {/* Right Form Column */}
            <div className="md:col-span-1">
              <CyberPanel variant="cyan" title="Formulate Product Feedback" badge="Post hash">
                <form onSubmit={handleAddReview} className="space-y-4 font-mono text-left text-[11px] p-1">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-500 uppercase font-black">Operator Username</label>
                    <input
                      type="text"
                      placeholder="E.g. Sentinel_82"
                      value={newReviewAuthor}
                      onChange={(e) => setNewReviewAuthor(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-900 text-xs text-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-450 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-500 uppercase font-black">Handshake Trust Level (Stars)</label>
                    <select
                      value={newReviewRating}
                      onChange={(e) => setNewReviewRating(parseInt(e.target.value))}
                      className="w-full bg-slate-950 border border-slate-900 text-xs text-slate-200 rounded-xl py-2.5 px-3 cursor-pointer focus:outline-none focus:border-cyan-450"
                    >
                      <option value="5">★★★★★ Excellent (5/5)</option>
                      <option value="4">★★★★☆ Good (4/5)</option>
                      <option value="3">★★★☆☆ Average (3/5)</option>
                      <option value="2">★★☆☆☆ Poor (2/5)</option>
                      <option value="1">★☆☆☆☆ Failed Logic (1/5)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono text-slate-500 uppercase font-black">Operational Comments</label>
                    <textarea
                      placeholder="Comment on logical consistency, deployment speeds or specifications..."
                      value={newReviewText}
                      onChange={(e) => setNewReviewText(e.target.value)}
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-900 text-xs text-slate-200 rounded-xl py-2 px-3 focus:outline-none focus:border-cyan-450 font-sans resize-none leading-relaxed"
                    />
                  </div>

                  <CyberButton variant="cyan" type="submit" fullWidth className="py-2.5 text-[9.5px]">
                    POST FEEDBACK TO LEDGER
                  </CyberButton>
                </form>
              </CyberPanel>
            </div>
          </div>
        </div>
      );
    }

    case 'RefundsActivity': {
      return (
        <RefundsActivityView 
          orders={orders} 
          setOrders={setOrders} 
          refundRequests={refundRequests} 
          setRefundRequests={setRefundRequests} 
        />
      );
    }

    case 'FAQActivity': {
      return (
        <CyberPanel variant="cyan" title="Node Manuals & FAQ System" badge="FAQ Desk" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 font-mono text-[11px] p-1 text-left">
            <span className="text-[10px] text-slate-500 block uppercase font-bold border-b border-slate-900 pb-2">PEER NODE FREQUENT ANSWERS:</span>

            <div className="space-y-3">
              <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                <h5 className="text-xs font-mono text-white uppercase font-bold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> How do I link secondary hardware terminal files?
                </h5>
                <p className="text-[10px] text-slate-500 font-sans leading-relaxed">Open Authentication -&gt; DeviceVerificationActivity to scan QR codes and approve remote links inside the core ledger.</p>
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                <h5 className="text-xs font-mono text-white uppercase font-bold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-cyan-400" /> Why is AI companion context size running low?
                </h5>
                <p className="text-[10px] text-slate-500 font-sans leading-relaxed">Basic nodes are capped at 50,000 token hashes. Switch to AI Companion -&gt; PremiumActivity to elevate processing channels threshold.</p>
              </div>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'HelpCenterActivity': {
      return (
        <CyberPanel variant="cyan" title="Decentralized Core Help Matrix" badge="Support Index" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 font-mono text-[11px] p-1 text-left">
            <span className="text-[10px] text-slate-500 block uppercase font-bold border-b border-slate-900 pb-2">Active Diagnostic Channels:</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                <h5 className="text-[11px] text-white uppercase font-bold">API Integration Desk</h5>
                <p className="text-[9px] text-slate-500 font-sans leading-relaxed">Link your dynamic endpoint configurations to port 3000 mapping parameters safely.</p>
              </div>
              <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl space-y-1">
                <h5 className="text-[11px] text-white uppercase font-bold">Billing Resolution</h5>
                <p className="text-[9px] text-slate-500 font-sans leading-relaxed">Submit double-ledger refund requests directly inside active checkout directories.</p>
              </div>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-905 rounded-xl text-slate-400 font-sans text-xs">
              <p>Need custom routing advice? Contact operator console help admins inside decentral subnet chats.</p>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'TermsOfServiceActivity': {
      return (
        <CyberPanel variant="neutral" title="Decentralized Network Charter" badge="ToS Agreement" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 select-text p-1 text-left">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <h4 className="text-xs font-mono text-white uppercase font-bold">TERMS OF SERVICE LEDGER AGREEMENT</h4>
              <CyberBadge variant="slate">VERSION 4.2</CyberBadge>
            </div>

            <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl max-h-60 overflow-y-auto font-mono text-[10px] text-slate-400 leading-relaxed scrollbar-none space-y-2 text-left">
              <p className="font-bold text-white uppercase">1. ESTABLISHING COGNITIVE CONTRACTS</p>
              <p>Entering this cyber platform establishes a binding agreement between your network alias and the AetherOS central routing indexes. We do not store biological file traces or plain password values unless heavily hashed across the decentralized registry nodes.</p>
              <p className="font-bold text-white uppercase mt-2">2. HARDWARE ROUTINGS DISCLOSURE</p>
              <p>Your hardware device IP signatures are only actively referenced during direct device p2p handshakes and are automatically scrubbed from local registers.</p>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'PrivacyPolicyActivity': {
      return (
        <CyberPanel variant="neutral" title="Enclave Privacy Protections Charter" badge="System Protection" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 select-text p-1 text-left">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <h4 className="text-xs font-mono text-white uppercase font-bold flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-slate-400" /> PRIVACY & DATA PERSISTENCE SCHEMES
              </h4>
              <CyberBadge variant="slate">ENCRYPTED</CyberBadge>
            </div>

            <div className="bg-slate-950 p-4 border border-slate-900 rounded-xl max-h-60 overflow-y-auto font-mono text-[10px] text-slate-400 leading-relaxed scrollbar-none space-y-2 text-left">
              <p className="font-bold text-white uppercase">1. SECURE HARDWARE ENCLAVES</p>
              <p>All private keys synthesized via our generator framework remain locked entirely on-device inside standard biometric hardware enclaves. They are never transmitted over network protocols.</p>
              <p className="font-bold text-white uppercase mt-2">2. BROWSER CACHE SCRUBBING</p>
              <p>Temporary session indicators are held exclusively inside client-side RAM context. Clearing your browser storage securely wipes all active state indices instantaneously.</p>
            </div>
          </div>
        </CyberPanel>
      );
    }

    // ==========================================
    // CREATOR HUB ACTIVITIES
    // ==========================================
    case 'CreatorStudioActivity': {
      return (
        <div className="space-y-6 max-w-5xl mx-auto p-2 text-left animate-fade-in font-mono text-xs">
          {/* Creator Header */}
          <CyberPanel variant="cyan" title="Aether Operating Creator Hub" badge="Creative Sandbox Active">
            <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 text-left">
              <div className="space-y-1 max-w-xl">
                <span className="text-[9px] bg-fuchsia-500/10 text-fuchsia-400 font-mono font-bold px-2 py-0.5 rounded border border-fuchsia-500/20 uppercase">Core Creator Console</span>
                <h4 className="text-sm text-white font-extrabold uppercase mt-1.5">CREATOR STUDIO & REGISTRY MATRIX</h4>
                <p className="text-slate-400 text-xs font-sans mt-1 leading-relaxed">Publish fully tailored AI agent models, prompt collections, and visually immersive slate styles to earn points allocations.</p>
              </div>
              <div className="flex gap-2 shrink-0 self-center">
                <CyberButton variant="cyan" className="py-2.5 px-3.5 text-[9.5px]" onClick={() => onNavigate && onNavigate('PublishBotActivity')}>
                  PUBLISH BOT
                </CyberButton>
                <CyberButton variant="slate" className="py-2.5 px-3.5 text-[9.5px]" onClick={() => onNavigate && onNavigate('RevenueActivity')}>
                  EARNING MATRIX
                </CyberButton>
              </div>
            </div>
            
            {/* Bento Quick-analytics */}
            <div className="border-t border-slate-900 grid grid-cols-2 lg:grid-cols-4 text-center divide-x divide-y lg:divide-y-0 divide-slate-900">
              <div className="p-3">
                <span className="text-[8px] text-slate-500 block uppercase font-bold">Self Published Assets</span>
                <span className="text-sm font-bold text-white">{creatorAssets.length} Modules</span>
              </div>
              <div className="p-3">
                <span className="text-[8px] text-slate-500 block uppercase font-bold">Total Client Installs</span>
                <span className="text-sm font-bold text-cyan-400">231 Nodes</span>
              </div>
              <div className="p-3">
                <span className="text-[8px] text-slate-500 block uppercase font-bold">Accrued Royalties Score</span>
                <span className="text-sm font-bold text-emerald-400">$64.20 USD</span>
              </div>
              <div className="p-3">
                <span className="text-[8px] text-slate-500 block uppercase font-bold">Licensing Rate Split</span>
                <span className="text-sm font-bold text-fuchsia-400">95% Creator</span>
              </div>
            </div>
          </CyberPanel>

          {/* Active creations cards */}
          <div className="space-y-4">
            <span className="text-[10px] text-slate-500 block uppercase font-bold font-mono pl-1">List of your compiled digital assets inside server node:</span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {creatorAssets.map(asset => (
                <div key={asset.id} className="p-4 bg-slate-950 border border-slate-900 hover:border-cyan-400/20 rounded-2xl flex justify-between items-center gap-4 transition-all">
                  <div className="text-left space-y-1">
                    <span className="text-[8px] border bg-slate-900 text-cyan-400 border-cyan-400/10 px-2 rounded font-mono font-extrabold">{asset.type}</span>
                    <h5 className="text-white text-xs font-bold font-mono uppercase mt-1">{asset.name}</h5>
                    <p className="text-[9px] text-slate-500">PUBLISHED: {asset.date} • INSTALLED BY {asset.downloads} NODES</p>
                  </div>
                  <span className="text-xs font-black text-cyan-400">{asset.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    case 'PublishBotActivity': {
      return (
        <PublishBotActivityView 
          creatorAssets={creatorAssets} 
          setCreatorAssets={setCreatorAssets} 
          onNavigate={onNavigate} 
        />
      );
    }

    case 'PublishPromptActivity': {
      return (
        <PublishPromptActivityView 
          creatorAssets={creatorAssets} 
          setCreatorAssets={setCreatorAssets} 
          onNavigate={onNavigate} 
        />
      );
    }

    case 'PublishThemeActivity': {
      return (
        <PublishThemeActivityView 
          creatorAssets={creatorAssets} 
          setCreatorAssets={setCreatorAssets} 
          onNavigate={onNavigate} 
        />
      );
    }

    case 'MonetizationActivity': {
      return (
        <CyberPanel variant="cyan" title="Accrued Licensing Monetization Matrix" badge="Royalties Split" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 text-left font-mono text-[11px] p-1">
            <button
              onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
              className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return workspace
            </button>

            <span className="text-[10px] text-slate-500 block uppercase font-bold">Configured tip tiers for active subscribers:</span>

            <div className="space-y-2.5">
              {monetizationTiers.map((tier, idx) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-900 rounded-xl space-y-1 text-left">
                  <div className="flex justify-between items-center bg-slate-100/5 p-1.5 px-2.5 rounded border border-slate-800">
                    <span className="text-white font-extrabold uppercase">{tier.name}</span>
                    <span className="text-cyan-400 font-extrabold">{tier.price}</span>
                  </div>
                  <p className="text-[9px] text-slate-505 pl-1 pt-1 font-sans leading-relaxed">{tier.perks}</p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-left font-mono">
              <span className="text-[9px] text-slate-505 block uppercase">CREATOR ROYALTY SPLIT MATRIX</span>
              <span className="text-xs text-white font-black block mt-0.5">95% DIRECT TO CRYPTOGRAPHIC VAULT (5% ROUTE CHARGE)</span>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'RevenueActivity': {
      return (
        <CyberPanel variant="cyan" title="Accrued Cognitive Revenue Stream" badge="Earnings Index" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 text-left font-mono text-[11px] p-1">
            <button
              onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
              className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return workspace
            </button>

            <span className="text-[9px] text-slate-500 block uppercase font-bold">Total revenue track chart:</span>

            {/* Custom bar chart of gains */}
            <div className="p-4 bg-slate-950 border border-slate-900 rounded-xl space-y-4">
              <div className="flex justify-between items-end h-28 gap-3 font-mono px-2 select-none border-b border-slate-900 pb-2">
                {[
                  { m: 'FEB', Val: 10 },
                  { m: 'MAR', Val: 30 },
                  { m: 'APR', Val: 25 },
                  { m: 'MAY', Val: 85 },
                  { m: 'JUN', Val: 100 }
                ].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col justify-end items-center h-full bg-transparent">
                    <div className="w-full bg-cyan-500 hover:bg-cyan-400 rounded-t border-t border-cyan-300" style={{ height: `${val.Val}%` }}></div>
                    <span className="text-[8px] text-slate-500 block mt-2 text-center font-bold">{val.m}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] font-bold text-white uppercase">
                <span>Total Accumulated Profit:</span>
                <span className="text-emerald-400 font-extrabold">$142.99 USD</span>
              </div>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'CreatorAnalyticsActivity': {
      return (
        <CyberPanel variant="cyan" title="Digital Package Installation Analytics" badge="Visits curve" className="max-w-xl mx-auto text-left">
          <div className="space-y-4 text-left font-mono text-[11px] p-1">
            <button
              onClick={() => onNavigate && onNavigate('CreatorStudioActivity')}
              className="flex items-center gap-1.5 text-[10px] text-slate-500 hover:text-cyan-400 uppercase font-bold cursor-pointer bg-transparent"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return workspace
            </button>

            <span className="text-[9px] text-slate-505 block uppercase font-bold">Model Installation counts over time:</span>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-center">
                <span className="text-[8px] text-slate-550 block">TOTAL DOWNLOADS</span>
                <span className="text-xs font-black text-white block mt-1">231 Nodes</span>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-center">
                <span className="text-[8px] text-slate-550 block">AVG MODEL STAR RATE</span>
                <span className="text-xs font-black text-cyan-400 block mt-1">4.89 / 5.0</span>
              </div>
              <div className="p-3 bg-slate-950 border border-slate-900 rounded-xl text-center">
                <span className="text-[8px] text-slate-550 block">RETENTION CURVE</span>
                <span className="text-xs font-black text-fuchsia-400 block mt-1">94.2%</span>
              </div>
            </div>
          </div>
        </CyberPanel>
      );
    }

    case 'CreatorSettingsActivity': {
      return (
        <CreatorSettingsActivityView 
          onNavigate={onNavigate} 
        />
      );
    }

    default:
      return (
        <div className="text-slate-400 p-8 text-center font-mono select-none animate-fade-in">
          <Code className="w-12 h-12 text-slate-650 mx-auto mb-4" />
          <p className="text-xs uppercase font-extrabold">System screen template initialized.</p>
          <span className="text-[10px] text-slate-550 block mt-1">ACTIVITY UNIQUE ENDPOINT MAP: {activityId}</span>
        </div>
      );
  }
};
