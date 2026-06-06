import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Shield, Zap, Target, BarChart3, Globe } from 'lucide-react';

export function HeroSection({ onAction }: { onAction?: () => void }) {
  return (
    <div className="relative w-full min-h-full flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-titanium-midnight overflow-y-auto lg:overflow-hidden font-display">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 modern-grid opacity-20 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-0">
        {/* Left Content Column */}
        <div className="flex-1 text-left space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[9px] md:text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-[0.2em]">
              The Final Word in Publishing
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 md:space-y-4"
          >
            <h2 className="text-gray-400 font-bold text-xs md:text-sm tracking-[0.3em] uppercase">
              The Future Of
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1] lg:leading-[0.95]">
              DIGITAL BOOK <br />
              <span className="text-white">PUBLISHING</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2"
          >
            {['VALIDATE', 'CREATE', 'MONETIZE', 'SECURE'].map((word, i) => (
              <span key={word} className="text-emerald-400 font-bold text-[10px] md:text-sm tracking-[0.15em] flex items-center gap-2">
                {word}
                {i < 3 && <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-emerald-400/30" />}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl font-sans"
          >
            SouArchitect is the all-in-one AI publishing platform that helps creators validate ideas, craft exceptional books, build high-converting pages, and securely deliver digital products—effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4"
          >
            <button 
              onClick={onAction}
              className="px-6 md:px-8 py-3 md:py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs md:text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 group flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onAction}
              className="px-6 md:px-8 py-3 md:py-4 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-bold text-xs md:text-sm uppercase tracking-widest transition-all text-center"
            >
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Right Visual Column - Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl border border-gray-800 bg-gray-900/40 p-4 shadow-2xl overflow-hidden group">
             {/* Scanline effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[200%] animate-scanline pointer-events-none" />
            
            <div className="h-full w-full rounded-lg bg-titanium-midnight/80 border border-gray-800 p-6 space-y-6">
              {/* Fake Dashboard UI */}
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <div className="flex gap-2">
                   {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gray-800" />)}
                </div>
                <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  Live Analytics Active
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-800/20 border border-gray-800 space-y-2">
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Revenue Overview</div>
                  <div className="text-2xl font-bold text-white tracking-tight">$14,580</div>
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 font-mono">
                    <Zap className="w-2 h-2" /> +38.6% MONTHLY
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gray-800/20 border border-gray-800 space-y-2">
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Global Reach</div>
                  <div className="text-2xl font-bold text-white tracking-tight">2,930</div>
                  <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 font-mono">
                    <Globe className="w-3 h-3" /> ACTIVE USERS
                  </div>
                </div>
              </div>

              {/* Progress Line */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold text-gray-500 uppercase">
                  <span>Validation Pipeline</span>
                  <span className="text-emerald-400">92% MATCH</span>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-full bg-emerald-500" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                {[
                  { icon: Target, label: 'Research' },
                  { icon: Shield, label: 'Secure' },
                  { icon: BarChart3, label: 'Analyze' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-900 border border-gray-800 group-hover:border-emerald-500/30 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                    <span className="text-[8px] font-mono text-gray-500 uppercase font-bold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Corporate Badges Rail */}
      <div className="absolute bottom-8 w-full border-t border-gray-900/50 pt-8 flex justify-center gap-12 opacity-40">
         {['SOUARCHITECT PRO', 'DIGITAL SOUPRO', 'V1.4 ENGINE', 'SWISS MODERNIST'].map(text => (
           <span key={text} className="text-[9px] font-mono text-gray-500 font-bold tracking-[0.3em] uppercase">{text}</span>
         ))}
      </div>
    </div>
  );
}
