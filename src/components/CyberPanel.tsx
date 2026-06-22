import React from 'react';
import { Sparkles, Terminal, Shield, Cpu } from 'lucide-react';

interface CyberPanelProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  variant?: 'cyan' | 'magenta' | 'amber' | 'neutral';
  className?: string;
  badge?: string;
}

export const CyberPanel: React.FC<CyberPanelProps> = ({
  children,
  title,
  subtitle,
  variant = 'cyan',
  className = '',
  badge
}) => {
  const borderStyles = {
    cyan: 'border-white/50 bg-white/45 shadow-[0_8px_30px_rgb(99,102,241,0.06)] focus-within:border-indigo-450 text-slate-800',
    magenta: 'border-white/50 bg-white/45 shadow-[0_8px_30px_rgb(217,70,239,0.06)] focus-within:border-fuchsia-450 text-slate-800',
    amber: 'border-white/50 bg-white/45 shadow-[0_8px_30px_rgb(245,158,11,0.06)] focus-within:border-amber-450 text-slate-800',
    neutral: 'border-white/40 bg-white/40 shadow-[0_8px_24px_rgb(15,23,42,0.04)] text-slate-800'
  };

  const glowStyles = {
    cyan: 'bg-indigo-500',
    magenta: 'bg-fuchsia-500',
    amber: 'bg-amber-500',
    neutral: 'bg-slate-500'
  };

  const textStyles = {
    cyan: 'text-indigo-600 font-sans tracking-wide font-bold',
    magenta: 'text-fuchsia-600 font-sans tracking-wide font-bold',
    amber: 'text-amber-600 font-sans tracking-wide font-bold',
    neutral: 'text-slate-700 font-sans tracking-wide font-bold'
  };

  return (
    <div className={`relative border rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 ${borderStyles[variant]} ${className}`}>
      {/* Subtle modern soft glass glints in corners */}
      <div className={`absolute top-0 left-0 w-4.5 h-4.5 border-t border-l ${variant === 'cyan' ? 'border-white/60' : variant === 'magenta' ? 'border-white/60' : variant === 'amber' ? 'border-white/60' : 'border-white/40'}`}></div>
      <div className={`absolute top-0 right-0 w-4.5 h-4.5 border-t border-r ${variant === 'cyan' ? 'border-white/60' : variant === 'magenta' ? 'border-white/60' : variant === 'amber' ? 'border-white/60' : 'border-white/40'}`}></div>
      
      {title && (
        <div className="flex items-center justify-between border-b border-white/20 px-5 py-4 bg-white/10">
          <div>
            <h3 className={`text-sm uppercase ${textStyles[variant]} flex items-center gap-2 font-semibold`}>
              {variant === 'cyan' && <Terminal className="w-4 h-4 text-indigo-500 shrink-0" />}
              {variant === 'magenta' && <Sparkles className="w-4 h-4 text-fuchsia-500 shrink-0" />}
              {variant === 'amber' && <Cpu className="w-4 h-4 text-amber-500 shrink-0" />}
              {variant === 'neutral' && <Shield className="w-4 h-4 text-slate-500 shrink-0" />}
              {title}
            </h3>
            {subtitle && <p className="text-xs text-slate-500 font-sans mt-0.5">{subtitle}</p>}
          </div>
          {badge && (
            <span className={`text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase ${variant === 'cyan' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : variant === 'magenta' ? 'bg-fuchsia-50 text-fuchsia-600 border border-fuchsia-100' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
              ● {badge}
            </span>
          )}
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 p-5">
        {children}
      </div>
    </div>
  );
};

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'magenta' | 'amber' | 'slate' | 'danger';
  glow?: boolean;
  pulse?: boolean;
  fullWidth?: boolean;
}

export const CyberButton: React.FC<CyberButtonProps> = ({
  children,
  variant = 'cyan',
  glow = false,
  pulse = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'relative inline-flex items-center justify-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider rounded-2xl py-3 px-6 transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer border shrink-0 shadow-sm';
  
  const widthStyle = fullWidth ? 'w-full' : '';

  const buttonThemes = {
    cyan: `bg-indigo-600 hover:bg-indigo-700 text-white border-transparent shadow-md shadow-indigo-100 hover:shadow-lg hover:shadow-indigo-200 ${
      glow ? 'ring-2 ring-indigo-500/20' : ''
    } ${pulse ? 'animate-pulse' : ''}`,
    magenta: `bg-fuchsia-600 hover:bg-fuchsia-700 text-white border-transparent shadow-md shadow-fuchsia-100 hover:shadow-lg hover:shadow-fuchsia-200 ${
      glow ? 'ring-2 ring-fuchsia-500/20' : ''
    } ${pulse ? 'animate-pulse' : ''}`,
    amber: `bg-amber-500 hover:bg-amber-600 text-slate-900 border-transparent shadow-md shadow-amber-100/40 hover:shadow-lg hover:shadow-amber-200`,
    slate: 'bg-white/55 hover:bg-white/80 text-slate-700 hover:text-slate-900 border-white/60 shadow-xs backdrop-blur-md',
    danger: 'bg-rose-600 hover:bg-rose-700 text-white border-transparent shadow-md shadow-rose-100/40 hover:shadow-lg hover:shadow-rose-200'
  };

  return (
    <button
      className={`${baseStyles} ${widthStyle} ${buttonThemes[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export const CyberBadge: React.FC<{
  children: React.ReactNode;
  variant?: 'cyan' | 'magenta' | 'amber' | 'slate' | 'rose';
  className?: string;
}> = ({ children, variant = 'cyan', className = '' }) => {
  const badgeThemes = {
    cyan: 'bg-indigo-50 text-indigo-700 border-indigo-100/70',
    magenta: 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100/70',
    amber: 'bg-amber-50 text-amber-700 border-amber-100/70',
    slate: 'bg-white text-slate-600 border-white/80 shadow-xs',
    rose: 'bg-rose-50 text-rose-700 border-rose-100/70'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badgeThemes[variant]} ${className}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        variant === 'cyan' ? 'bg-indigo-500' :
        variant === 'magenta' ? 'bg-fuchsia-500' :
        variant === 'amber' ? 'bg-amber-500' :
        variant === 'rose' ? 'bg-rose-500' : 'bg-slate-400'
      } shrink-0`}></span>
      {children}
    </span>
  );
};

export const VoiceWave: React.FC<{ active?: boolean; colorClass?: string }> = ({ active = true, colorClass = 'bg-cyan-400' }) => {
  return (
    <div className="flex items-end justify-center gap-0.5 h-6 w-16 px-1">
      {[...Array(8)].map((_, i) => {
        const delays = ['0.1s', '0.4s', '0.2s', '0.6s', '0.3s', '0.5s', '0.1s', '0.3s'];
        const minHeights = ['15%', '30%', '20%', '10%', '40%', '25%', '15%', '30%'];
        return (
          <div
            key={i}
            className={`w-1 rounded-t-sm ${colorClass}`}
            style={{
              height: active ? '100%' : '15%',
              minHeight: minHeights[i],
              animation: active ? `pulseWave 1.2s ease-in-out infinite alternate` : undefined,
              animationDelay: active ? delays[i] : undefined,
            }}
          />
        );
      })}
    </div>
  );
};
