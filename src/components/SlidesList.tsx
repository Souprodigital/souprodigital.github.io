/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  BookOpen,
  Globe,
  Award,
  Users,
  Lock,
  LineChart,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  LockKeyhole,
  ExternalLink,
  Coins,
  History,
  Terminal,
  Activity,
  Layers,
  FileText,
  Mail,
  Calendar,
  MousePointerClick,
  Monitor,
  Smartphone,
  Maximize2,
  Check,
  Plus,
  Link,
  LogOut,
  Settings,
  HelpCircle,
  FileEdit,
  User,
  AlertCircle
} from 'lucide-react';
import { METHOD_STAGES, COMPETITORS_MATRIX, AUDIENCE_PROFILES, ROADMAP } from '../data';
import { Logo } from './Logo';
import {
  initAuth,
  googleSignIn,
  logout,
  createGoogleDoc,
  appendEmailToDoc,
  createGoogleSheet,
  appendEmailToSheet,
  sendConfirmationEmail,
  saveWorkspaceConfigInCloud,
  loadWorkspaceConfigFromCloud,
  saveLeadInCloud,
  getUnsyncedLeadsFromCloud,
  markLeadAsSyncedInCloud
} from '../lib/googleDocsAuth';
import {
  MarketValidationInput,
  MarketValidationResult,
  BookChapter,
  PublishingMetadata,
  SecurityTokenLog,
  KPIOverview
} from '../types';

// Page 1 — Cover
export function CoverPage() {
  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      {/* Structural backgrounds */}
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-40"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <div className="flex justify-between items-center z-10 border-b border-gray-800 pb-6">
        <div className="flex items-center space-x-3">
          <Logo fallbackBgClass="bg-gradient-to-br from-emerald-500 to-teal-400" logoText="S" />
          <div>
            <span className="font-sans font-extrabold tracking-tight text-white text-lg">SouArchitect</span>
            <span className="text-xs text-gray-400 block font-mono -mt-1">by Soupro Digital Services</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 font-mono text-xs text-gray-400">
          <span className="px-2.5 py-1 rounded bg-gray-800 tracking-wider">INVESTOR DECK - V1.4</span>
        </div>
      </div>

      {/* Main Content Info */}
      <div className="my-auto py-8 z-10 max-w-4xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Aesthetic Swiss Modernist Publishing</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-sans font-extrabold tracking-tighter text-white leading-[1.1] mb-6">
          The Validation-First <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
            AI Publishing Platform
          </span>
        </h1>

        <p className="text-base lg:text-lg text-gray-300 font-sans leading-relaxed tracking-wide max-w-2xl mb-8">
          Validate high-value educational ideas first, synthesize book assets into premium custom framework manuscripts, construct conversions-oriented sales channels and secure intellectual rights instantly.
        </p>

        {/* Dynamic Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-lg">
            <span className="font-mono text-xs text-emerald-400 block mb-1">01. RESEARCH</span>
            <span className="font-sans font-semibold text-white">Idea & Market Validation</span>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-lg">
            <span className="font-mono text-xs text-emerald-400 block mb-1">02. SYNTHESIZE</span>
            <span className="font-sans font-semibold text-white">10+ Chapter Blueprints</span>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-lg">
            <span className="font-mono text-xs text-emerald-400 block mb-1">03. PUBLISH</span>
            <span className="font-sans font-semibold text-white">Live WYSIWYG Sales Pages</span>
          </div>
          <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-lg">
            <span className="font-mono text-xs text-emerald-400 block mb-1">04. MONETIZE</span>
            <span className="font-sans font-semibold text-white">Secure Whop Distribution</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 border-t border-gray-800 z-10 gap-4 sm:gap-0">
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-gray-400">
          <div>
            <span className="text-gray-500 block">WEBSITE</span>
            <span className="text-white">www.souarchitect.com</span>
          </div>
          <div>
            <span className="text-gray-500 block">PARENT CORP</span>
            <span className="text-white">Soupro Digital Services</span>
          </div>
          <div>
            <span className="text-gray-500 block">PLATFORM ACCESS</span>
            <span className="text-emerald-400 flex items-center gap-1">
              Active Integration <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="font-mono text-xs text-gray-500 block">PRIMARY ENTRANCE</span>
          <span className="font-sans font-semibold text-white text-sm">Scan / Click To Enter Presentation</span>
        </div>
      </div>
    </div>
  );
}

// Page 2 — Executive Overview
export function ExecutiveOverviewPage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  
  const workflowNodes = [
    { id: 0, label: 'Idea Validation', detail: 'Market feasibility scanner pre-calculates audience pain intensity & potential search interest patterns.', stat: '94% Validation Accuracy', icon: Search },
    { id: 1, label: 'Research & Synthesis', detail: 'The AI Synthesis Chamber scans context, builds cognitive lesson pathways & structured outlines.', stat: '10+ Chapter Depth', icon: Sparkles },
    { id: 2, label: 'Editorial Writing', detail: 'Generate premium textbook-ready educational prose without generic AI filler or listicle structures.', stat: 'Custom Voice Metrics', icon: BookOpen },
    { id: 3, label: 'Content Page Builder', detail: 'Construct seamless publishing pages with direct SEO schema tags and customized file modules.', stat: 'WYSIWYG Live Host', icon: Globe },
    { id: 4, label: 'Whop Monetization', detail: 'Immediate subscription gate, OAuth sign-on system, client payment routing, and user gates.', stat: 'Zero-Code Gates', icon: Award },
    { id: 5, label: 'Encrypted Vault', detail: 'Files are processed with expiring tokens, signed links, and dynamic anti-piracy watchdogs.', stat: '99.9% IP Leak Protection', icon: Lock }
  ];

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>
      
      {/* Slidename */}
      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">02 / EXECUTIVE OVERVIEW</span>
        <span className="font-mono text-xs text-gray-500">SOUARCHITECT SYSTEM WORKFLOW</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Left Explanation Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            What is SouArchitect?
          </h2>
          <p className="text-gray-300 font-sans text-sm leading-relaxed">
            SouArchitect is a unified, elite workspace bridging the massive gap between <strong>content generation</strong> and <strong>secure digital distribution</strong>. Traditional digital creators have to tie together multiple incompatible tools, exposing their books and guides to high billing overhead and massive piracy.
          </p>
          <div className="p-5 bg-gray-900/80 border border-gray-800 rounded-lg">
            <span className="font-mono text-xs text-emerald-400 block mb-1">INTERACTIVE PREVIEW</span>
            <p className="text-xs text-gray-400">
              Click any node in the system diagram on the right to simulate the secure end-to-end user publishing pipeline.
            </p>
          </div>
        </div>

        {/* Right Graph Workflow Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 bg-gray-900/40 border border-gray-800 rounded-xl relative">
            
            {workflowNodes.map((node, idx) => {
              const IconComp = node.icon;
              const isActive = idx === activeStep;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4 rounded-lg border transition-all relative ${
                    isActive
                      ? 'bg-[#1F2937] border-emerald-500 shadow-md shadow-emerald-500/10'
                      : 'bg-[#1F2937]/50 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  {/* Step counter */}
                  <span className="absolute top-2 right-2 font-mono text-[10px] text-gray-500">
                    STEP 0{idx + 1}
                  </span>

                  <div className={`p-2 w-max rounded mb-3 ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400'}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-sans font-bold text-white mb-1 group-hover:text-emerald-300">
                    {node.label}
                  </h3>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {node.stat}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display */}
          <div className="mt-4 p-4 bg-[#1F2937]/90 border border-emerald-500/30 rounded-lg flex items-start gap-4">
            <div className="p-2.5 bg-emerald-500/10 rounded text-emerald-400 shrink-0">
              {React.createElement(workflowNodes[activeStep].icon, { className: 'w-6 h-6' })}
            </div>
            <div>
              <span className="font-mono text-[10px] text-gray-400 block tracking-wider uppercase">Active Phase Spec: {workflowNodes[activeStep].label}</span>
              <p className="text-sm text-gray-200 mt-1">{workflowNodes[activeStep].detail}</p>
              <div className="flex gap-4 mt-2 text-xs font-mono">
                <span className="text-emerald-400">Target Efficiency: {workflowNodes[activeStep].stat}</span>
                <span className="text-gray-500">| Status: Verified Cloud Run Service</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>SWISS GRID ARCHITECTURE</span>
        <span>SOUPRO DIGITAL SERVICES</span>
      </div>
    </div>
  );
}

// Page 3 — The Problem
export function ProblemPage() {
  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-red-400 tracking-widest uppercase">03 / THE CRITICAL MARKET CRACK</span>
        <span className="font-mono text-xs text-gray-500">WHY CREATOR REVENUES DRIFT TO ZERO</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Main pitch block */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-5">
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Why Most Digital Products Fail
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            The modern creator economy is growing rapidly, yet 92% of self-published material leads to zero real validation or security. Creators operate inside a highly fragmented system.
          </p>
          <div className="p-4 bg-red-950/20 border border-red-500/20 rounded-lg text-xs flex gap-3 text-red-300">
            <AlertTriangle className="w-5 h-5 shrink-0 text-red-400" />
            <span>
              Fragmented setup leads to 35% user dropoff and thousands of dollars lost to unlicensed distribution piracy.
            </span>
          </div>
        </div>

        {/* Comparison grid columns */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* FRAGMENTED OLD WORKFLOW */}
          <div className="bg-[#1F2937]/30 border border-gray-800 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-widest">The Traditional Way {"(Disjointed)"}</span>
              <h3 className="text-lg font-sans font-bold text-gray-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span> Fragmented Stack Chaos
              </h3>
              
              <ul className="space-y-3 font-sans text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-mono">❌</span>
                  <span><strong>Zero validation:</strong> Months spent writing without any keyword demand statistics or actual buying signal checks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-mono">❌</span>
                  <span><strong>AI regurgitation:</strong> Blindly copying and pasting generic, repetitive AI chat prose that damages authority.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-mono">❌</span>
                  <span><strong>Infrastructure glue:</strong> Juggling separate tools: Gumroad, Typeform, hosting repositories, and manual emails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-mono">❌</span>
                  <span><strong>Piracy Exposure:</strong> Standard static PDF links that can be instantly copied, shared and re-uploaded globally.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] font-mono text-gray-500">
              <span>ESTIMATED TOOLS OVERHEAD</span>
              <span className="text-red-400 font-bold">$180 - $250/mo</span>
            </div>
          </div>

          {/* SOUARCHITECT WAY */}
          <div className="bg-[#1F2937] border-2 border-emerald-500/80 p-6 rounded-xl flex flex-col justify-between relative shadow-lg shadow-emerald-500/5">
            <span className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 font-mono text-[9px] px-2 py-0.5 rounded">ECOSYSTEM INTEGRATION</span>
            <div>
              <span className="font-mono text-xs text-emerald-400 block mb-2 uppercase tracking-widest">The SouArchitect Way</span>
              <h3 className="text-lg font-sans font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Single Unified Loop
              </h3>
              
              <ul className="space-y-3 font-sans text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-410 font-bold">✓</span>
                  <span><strong>Instant Validation Check:</strong> Verify purchasing probability and market parameters in real-time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-410 font-bold">✓</span>
                  <span><strong>Synthesis Blueprinting:</strong> Formulate premium outlines, and chapter structures automatically.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-410 font-bold">✓</span>
                  <span><strong>Native Whop Access:</strong> Synchronize oauth client groups with direct recurring setups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-410 font-bold">✓</span>
                  <span><strong>IP Security Vault:</strong> Encrypted token streams, unique expiring urls, dynamic customer log defense.</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center text-[11px] font-mono text-emerald-400">
              <span>UNIFIED PLATFORM FEES</span>
              <span className="font-bold">Save 75% on Overhead</span>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>SYSTEM FAILURE VS SOUARCHITECT STREAMLINE</span>
        <span>SOUPRO DIGITAL SERVICES © 2026</span>
      </div>
    </div>
  );
}

// Page 4 — The Solution Method
export function SolutionPage() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [playIntervalActive, setPlayIntervalActive] = useState<boolean>(false);

  useEffect(() => {
    let timer: any;
    if (playIntervalActive) {
      timer = setInterval(() => {
        setActiveStageIdx((prev) => (prev + 1) % METHOD_STAGES.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [playIntervalActive]);

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">04 / THE METHODOLOGY</span>
        <span className="font-mono text-xs text-gray-500">6 STAGES OF SUCCESSFUL KNOWLEDGE ARCHITECTURE</span>
      </div>

      <div className="my-auto flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
              The SouArchitect Method
            </h2>
            <p className="text-sm text-gray-300 max-w-xl">
              Each asset progresses through a high-frequency linear control pipeline designed to optimize student conversion and prevent digital leaks.
            </p>
          </div>
          <button
            onClick={() => setPlayIntervalActive(!playIntervalActive)}
            className={`font-mono text-xs px-3.5 py-1.5 rounded-md border flex items-center gap-2 cursor-pointer transition-all ${
              playIntervalActive 
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${playIntervalActive ? 'bg-emerald-400 animate-ping' : 'bg-gray-500'}`}></span>
            {playIntervalActive ? 'PAUSE AUTOMATED PREVIEW' : 'PLAY PIPELINE DEMO'}
          </button>
        </div>

        {/* Process flow nodes bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-4">
          {METHOD_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIdx;
            return (
              <button
                key={stage.step}
                onClick={() => {
                  setPlayIntervalActive(false);
                  setActiveStageIdx(idx);
                }}
                className={`text-left p-4 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-[#1F2937] border-emerald-500 shadow-md shadow-emerald-500/10'
                    : 'bg-[#1F2937]/35 border-gray-800/80 hover:border-gray-700'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-mono text-xs ${isActive ? 'text-emerald-400' : 'text-gray-500'}`}>
                    STEP {stage.step}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-gray-700'}`}></span>
                </div>
                <h3 className="font-sans font-bold text-white text-sm mb-1">{stage.name}</h3>
                <span className="font-mono text-[9px] text-gray-400 bg-gray-800/80 px-1.5 py-0.5 rounded">
                  {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Detail Display */}
        <div className="bg-[#1F2937]/90 border border-gray-800 p-6 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-mono text-3xl font-extrabold text-emerald-400/50">
                {METHOD_STAGES[activeStageIdx].step}
              </span>
              <h4 className="text-xl font-sans font-bold text-white">
                Stage {activeStageIdx + 1}: {METHOD_STAGES[activeStageIdx].name}
              </h4>
            </div>
            <p className="text-sm text-gray-300">
              {METHOD_STAGES[activeStageIdx].description}
            </p>
          </div>
          <div className="md:col-span-4 bg-gray-900/60 p-4 rounded border border-gray-800">
            <span className="font-mono text-[10px] text-gray-400 block mb-1">KEY ASSURANCE INDICATOR</span>
            <span className="font-sans font-semibold text-white block text-sm">
              ■ {METHOD_STAGES[activeStageIdx].indicator}
            </span>
            <span className="text-[11px] text-emerald-400 font-mono block mt-2">
              Status: Integrated Production Ready
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>6-STEP DESIGN PARADIGM</span>
        <span>SOUARCHITECT METHOD</span>
      </div>
    </div>
  );
}

// Page 5 — Market Validation Engine
export function MarketValidationPage() {
  const [productIdea, setProductIdea] = useState<string>('TypeScript Architecture Playbook');
  const [category, setCategory] = useState<string>('Creator Economy');
  const [compVolume, setCompVolume] = useState<'low' | 'medium' | 'high'>('medium');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<MarketValidationResult | null>({
    probabilityScore: 84,
    saturationScore: 32,
    painPointDensity: 78,
    monetizationGap: 88,
    insights: [
      'High search demand pattern for modern TypeScript modular architectures.',
      'Strong price inelasticity. Audience willing to pay up to $150 per seat.',
      'Major competitor gap: existing tutorials lack security token architecture patterns.'
    ],
    recommendedModel: 'Premium Specialized Playbook Gated on Whop',
    estimatedPricingRange: '$79 - $149'
  });

  const handleSimulateAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Calculate dynamic but pseudo-realistic scores based on values
      const keywordLengthFactor = Math.min(productIdea.length * 1.5, 20);
      let prob = 65 + keywordLengthFactor;
      let sat = compVolume === 'low' ? 18 : compVolume === 'medium' ? 45 : 82;
      let pain = 50 + (category === 'Creator Economy' ? 32 : 18);
      let gap = 100 - sat + 15;

      // Cap at 98 / 12
      prob = Math.round(Math.max(15, Math.min(prob, 98)));
      sat = Math.round(Math.max(10, Math.min(sat, 95)));
      pain = Math.round(Math.max(20, Math.min(pain, 96)));
      gap = Math.round(Math.max(10, Math.min(gap, 98)));

      setResult({
        probabilityScore: prob,
        saturationScore: sat,
        painPointDensity: pain,
        monetizationGap: gap,
        insights: [
          `Search density analysis confirms strong organic signals for "${productIdea || 'Digital Asset'}" in "${category}".`,
          `Competitor volume is rated ${compVolume.toUpperCase()}. Optimal conversion strategic angle detected in pain points.`,
          `Security risk profile indicates typical authors lose 25% to piracy in this category. We recommend Vault token protection.`
        ],
        recommendedModel: `${category} Dedicated Textbook Playbook`,
        estimatedPricingRange: compVolume === 'low' ? '$99 - $199' : '$49 - $99'
      });
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">05 / MARKET VALIDATION ENGINE</span>
        <span className="font-mono text-xs text-gray-500">VALIDATE CONVERSION BEFORE WRITING A SINGLE LINE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        
        {/* Input Parameters panel (left) */}
        <div className="lg:col-span-5 bg-[#1F2937] border border-gray-800 p-5 rounded-xl space-y-4">
          <div className="border-b border-gray-800 pb-2">
            <h3 className="font-sans font-bold text-white text-base">Validate New Idea</h3>
            <span className="font-mono text-[10px] text-gray-400 block">SOUARCHITECT CRITERIA RADAR</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="font-mono text-[10px] text-gray-400 block mb-1">PROPOSED PRODUCT TITLE / IDEA</label>
              <input
                type="text"
                value={productIdea}
                onChange={(e) => setProductIdea(e.target.value)}
                placeholder="e.g. NextJS for SaaS Founders"
                className="w-full bg-gray-900 text-white rounded px-3 py-1.5 text-xs border border-gray-700 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-mono text-[10px] text-gray-400 block mb-1">MARKET CATEGORY</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-gray-900 text-white rounded px-2.5 py-1.5 text-xs border border-gray-700"
                >
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Creator Economy">Creator Economy</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Finance & trading">Finance & Trading</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-400 block mb-1">EXISTING COMPETITORS</label>
                <div className="grid grid-cols-3 gap-1 bg-gray-900 p-0.5 rounded border border-gray-700">
                  {(['low', 'medium', 'high'] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setCompVolume(v)}
                      className={`text-[9px] font-mono py-1 rounded capitalize ${
                        compVolume === v ? 'bg-emerald-500 text-gray-950 font-bold' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleSimulateAnalysis}
              disabled={isAnalyzing}
              className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-sans font-bold text-xs rounded transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              {isAnalyzing ? 'SCROLLING SEARCH PARAMETERS...' : 'RUN PROBABILITY FEASIBILITY CHECK'}
            </button>
          </div>
        </div>

        {/* Dashboard Analytics Outputs (right) */}
        <div className="lg:col-span-7 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between relative min-h-[300px]">
          {isAnalyzing ? (
            <div className="absolute inset-0 bg-gray-950/80 rounded-xl flex flex-col justify-center items-center space-y-3 z-10">
              <span className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></span>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest animate-pulse">
                SCROLLING REDDIT, COGNITIVE METRICS, AND SECTOR GAPS...
              </span>
            </div>
          ) : null}

          {result ? (
            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-gray-900/80 p-3 rounded border border-gray-800 text-center">
                  <span className="font-mono text-[9px] text-gray-400 block mb-1">PROBABILITY SCORE</span>
                  <span className={`text-2xl font-mono font-bold ${result.probabilityScore > 80 ? 'text-emerald-400' : 'text-blue-400'}`}>
                    {result.probabilityScore}%
                  </span>
                </div>
                <div className="bg-gray-900/80 p-3 rounded border border-gray-800 text-center">
                  <span className="font-mono text-[9px] text-gray-400 block mb-1">SATURATION SCORE</span>
                  <span className="text-2xl font-mono font-bold text-amber-400">
                    {result.saturationScore}%
                  </span>
                </div>
                <div className="bg-gray-900/80 p-3 rounded border border-gray-800 text-center">
                  <span className="font-mono text-[9px] text-gray-400 block mb-1">PAIN POINT DENSITY</span>
                  <span className="text-2xl font-mono font-bold text-blue-400">
                    {result.painPointDensity}%
                  </span>
                </div>
                <div className="bg-gray-900/80 p-3 rounded border border-gray-800 text-center">
                  <span className="font-mono text-[9px] text-gray-400 block mb-1">MONETIZATION GAP</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400">
                    {result.monetizationGap}%
                  </span>
                </div>
              </div>

              {/* Graphic metrics bar chart */}
              <div className="space-y-2 bg-gray-900/40 p-4 rounded-lg border border-gray-800">
                <span className="font-mono text-[10px] text-gray-400 block mb-2">METRIC COMPILATION</span>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-gray-300">Sales Viability Gate</span>
                    <span className="text-emerald-400">{result.probabilityScore}% {"(Eligible)"}</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full transition-all" style={{ width: `${result.probabilityScore}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Textual strategy Insights */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-gray-400 block">SOUARCHITECT RECOMMENDATION SUMMARY</span>
                <ul className="space-y-1 text-xs text-gray-300 font-sans">
                  {result.insights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono">■</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Model Suggestion footer */}
              <div className="pt-3 border-t border-gray-800 flex justify-between items-center text-xs font-mono">
                <div>
                  <span className="text-gray-500 block text-[9px]">RECOMMENDED ARTIFACT FORMAT</span>
                  <span className="text-white text-[11px] font-sans font-bold">{result.recommendedModel}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-500 block text-[9px]">SUGGESTED OPTIMAL PRICE</span>
                  <span className="text-emerald-400 text-[11px] font-bold">{result.estimatedPricingRange}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col justify-center items-center text-center p-6 text-gray-500 font-mono text-xs">
              <Search className="w-8 h-8 text-gray-700 mb-2 animate-bounce" />
              <span>Input an idea on the left and run analysis.</span>
            </div>
          )}

        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>PRE-CALCULATION CONFIDENCE GAP</span>
        <span>SOUARCHITECT SYSTEM PROPOSAL</span>
      </div>
    </div>
  );
}

// Page 6 — Book Synthesis Studio
export function BookSynthesisPage() {
  const [topic, setTopic] = useState<string>('Mastering Cloud Architecture');
  const [bookStyle, setBookStyle] = useState<string>('Pedagogical Coursebook');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [chapters, setChapters] = useState<BookChapter[]>([
    { chapterNumber: 1, title: 'Foundations of Cloud Topology Architecture', durationMinutes: 25, subsections: ['Grid frameworks', 'Stateless vs stateful layers', 'Availability ratios'], purpose: 'Align baseline infrastructure' },
    { chapterNumber: 2, title: 'Designing High-Reliability Node Routing Systems', durationMinutes: 40, subsections: ['Micro-gateways', 'Nginx balancing metrics', 'Proxy configurations'], purpose: 'Provide concrete systems' },
    { chapterNumber: 3, title: 'Synthesized Storage Encryption Matrices', durationMinutes: 35, subsections: ['Metadata storage vaults', 'Symmetric key rotation', 'Signed tokens'], purpose: 'Address digital piracy risks' }
  ]);

  const handleSimulateChapters = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setChapters([
        {
          chapterNumber: 1,
          title: `Executive Introduction to ${topic}`,
          durationMinutes: 20,
          subsections: ['Foundations', 'High-level synthesis', 'The structural blueprint roadmap'],
          purpose: 'Establish conceptual authority'
        },
        {
          chapterNumber: 2,
          title: `Foundations of Modern ${bookStyle === 'Deep Interactive Studio Guide' ? 'High-Performance' : 'Pedagogical'} Methodologies`,
          durationMinutes: 35,
          subsections: ['Deep-dive architectures', 'Execution steps', 'Validation rules'],
          purpose: 'Provide rigorous operational parameters'
        },
        {
          chapterNumber: 3,
          title: 'Advanced Threat Modeling & Security Controls',
          durationMinutes: 45,
          subsections: ['Vault encryption', 'Authentication handshakes', 'Anti-piracy mechanisms'],
          purpose: 'Educate on digital intellectual protection'
        },
        {
          chapterNumber: 4,
          title: 'Case Studies: Top-tier Scaling Ecosystems',
          durationMinutes: 50,
          subsections: ['Vercel deployment layers', 'Stripe metadata pipelines', 'Linear workflow integrations'],
          purpose: 'Anchor knowledge in proven developer setups'
        },
        {
          chapterNumber: 5,
          title: 'Practical Workbench: Launch & Growth Checklist',
          durationMinutes: 30,
          subsections: ['Sales channel setup', 'Whop user gating', 'Audience retention tracking'],
          purpose: 'Provide immediate executive action lists'
        }
      ]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">06 / BOOK SYNTHESIS STUDIO</span>
        <span className="font-mono text-xs text-gray-500">CONVERT UNSTRUCTURED THOUGHTS INTO ROBUST BLUEPRINTS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Topic Input Pane */}
        <div className="lg:col-span-4 bg-[#1F2937] border border-gray-800 p-5 rounded-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="font-sans font-bold text-white text-base">Synthesis Chamber</h3>
              <span className="font-mono text-[9px] text-gray-400 block mb-2">STRUCTURE AND LAYOUT ACCORDION</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-mono text-[10px] text-gray-400 block mb-1">PROPOSED BOOK SUBJECT</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full bg-gray-900 text-white rounded px-3 py-1.5 text-xs border border-gray-700 font-sans focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-400 block mb-1">PEDAGOGICAL INTENSITY STYLE</label>
                <select
                  value={bookStyle}
                  onChange={(e) => setBookStyle(e.target.value)}
                  className="w-full bg-gray-900 text-white rounded px-2.5 py-1.5 text-xs border border-gray-700 font-sans"
                >
                  <option value="Pedagogical Coursebook">Pedagogical Coursebook</option>
                  <option value="Deep Interactive Studio Guide">Deep Interactive Studio Guide</option>
                  <option value="Fast Action Strategy Guide">Fast Action Strategy Guide</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleSimulateChapters}
            disabled={isGenerating}
            className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-sans font-bold text-xs rounded transition-all cursor-pointer flex items-center justify-center gap-2 mt-6"
          >
            <Sparkles className="w-4 h-4" />
            {isGenerating ? 'MAPPING LOGICAL BLUEPRINT...' : 'GENERATE CUSTOMIZED MANUSCRIPT OUTLINE'}
          </button>
        </div>

        {/* Real-time preview of outline */}
        <div className="lg:col-span-8 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between relative min-h-[300px]">
          {isGenerating && (
            <div className="absolute inset-0 bg-gray-950/80 rounded-xl flex flex-col justify-center items-center space-y-3 z-10">
              <span className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></span>
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider animate-pulse">
                Blueprinting chapters, calculating lesson retention points, configuring chapters...
              </span>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2.5 mb-4">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Generated Outline Blueprint
              </span>
              <span className="font-mono text-[10px] text-gray-400">
                ACTIVE STATUS: APPROVED FOR SYNTHESIS
              </span>
            </div>

            {/* Chapters list layout */}
            <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2">
              {chapters.map((chapter) => (
                <div key={chapter.chapterNumber} className="bg-gray-900/60 p-3 rounded border border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold">
                        CHP 0{chapter.chapterNumber}
                      </span>
                      <h4 className="font-sans font-bold text-white text-xs">{chapter.title}</h4>
                    </div>
                    <p className="text-gray-400 text-xs italic">
                      Goal: {chapter.purpose}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1 text-[10px] font-mono text-gray-500">
                      {chapter.subsections.map((sub, i) => (
                        <span key={i} className="bg-gray-800/80 px-1.5 py-0.5 rounded">
                          # {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right font-mono text-[10px] text-gray-400">
                    <span>Est: {chapter.durationMinutes} mins lesson font</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>TOTAL MODULE ESTIMATE: {chapters.reduce((acc, c) => acc + c.durationMinutes, 0)} MINUTES READ</span>
            <span className="text-emerald-400">COGNITIVE STRUCTURE APPROVED</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>BOOK SYNTHESIS SCHEMA ACCURACY</span>
        <span>SOUPRO DIGITAL SERVICES</span>
      </div>
    </div>
  );
}

// Page 7 — Live Publishing Studio
export function LivePublishingPage() {
  const [seoTitle, setSeoTitle] = useState<string>('TypeScript Architect Playbook | Elite SaaS Framework');
  const [price, setPrice] = useState<string>('99.00');
  const [seoKeywords, setSeoKeywords] = useState<string>('typescript, software-architecture, saas-design');

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">07 / LIVE PUBLISHING STUDIO</span>
        <span className="font-mono text-xs text-gray-500">Instant SEO-Optimized Public Product Listings</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Editor Inputs Panel (left) */}
        <div className="lg:col-span-5 bg-[#1F2937] border border-gray-800 p-5 rounded-xl space-y-4">
          <div className="border-b border-gray-800 pb-2">
            <h3 className="font-sans font-bold text-white text-base">Publisher Panel</h3>
            <span className="font-mono text-[9px] text-gray-400 block">REAL-TIME META SCHEMAS</span>
          </div>

          <div className="space-y-3">
            <div>
              <label className="font-mono text-[10px] text-gray-400 block mb-1">LISTING SEO HEADLINE</label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className="w-full bg-gray-900 text-white rounded px-3 py-1.5 text-xs border border-gray-700 font-sans focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-mono text-[10px] text-gray-400 block mb-1">DEFAULT PRICE (USD)</label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1.5 text-xs text-gray-500 font-mono">$</span>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-gray-900 text-white rounded pl-6 pr-3 py-1.5 text-xs border border-gray-700 font-mono focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] text-gray-400 block mb-1">ROBOTS INDEX GATING</label>
                <select className="w-full bg-gray-900 text-white rounded px-2.5 py-1.5 text-xs border border-gray-700">
                  <option>Index, Follow</option>
                  <option>NoIndex, NoFollow</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-mono text-[10px] text-gray-400 block mb-1">KEYWORDS (COMMA SEPARATED)</label>
              <input
                type="text"
                value={seoKeywords}
                onChange={(e) => setSeoKeywords(e.target.value)}
                className="w-full bg-gray-900 text-white rounded px-3 py-1.5 text-xs border border-gray-700 font-mono focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="p-3 bg-gray-900/60 rounded border border-gray-800 text-[11px] text-gray-400">
            <span className="text-emerald-400 font-mono font-bold">✓ CDN Hosted Asset Ready</span>
            <p className="mt-0.5 font-sans">Public index.html routes generated automatically for high-speed edge delivery.</p>
          </div>
        </div>

        {/* Live CSS Mockup Output Panel (right) */}
        <div className="lg:col-span-7 bg-gray-950/80 border border-gray-800 p-6 rounded-xl flex flex-col justify-between relative min-h-[300px]">
          <div>
            {/* Header tab buttons block */}
            <div className="flex justify-between items-center bg-gray-900/80 px-3 py-2 rounded-t border border-gray-800 -mx-6 -mt-6 mb-4">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[10px] font-mono text-gray-500 ml-2">PREVIEW SECURE EDGE LISTING</span>
              </div>
              <span className="font-mono text-[9px] text-gray-500">SSL ENCRYPTED PORT 3000</span>
            </div>

            {/* Simulated Live Book Landing Page */}
            <div className="space-y-4">
              {/* Brand Header */}
              <div className="flex justify-between items-center text-[10px] border-b border-gray-800 pb-2">
                <span className="font-mono font-bold text-gray-400 uppercase">SOUARCHITECT STATIONS</span>
                <span className="text-emerald-400 font-mono bg-emerald-500/10 px-1.5 rounded">GATED ARTIFACT</span>
              </div>

              {/* Main Landing content mock */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-8 space-y-2">
                  <h1 className="text-lg font-sans font-extrabold text-white leading-tight">
                    {seoTitle || 'Digital Product Title Placeholder'}
                  </h1>
                  <p className="text-xs text-gray-400 font-sans">
                    Fully verified by SouArchitect Market Engine. Discover deep cognitive principles, structural chapters, and robust assets. Available for immediate secure access.
                  </p>
                </div>
                {/* Simulated Buy Book Card */}
                <div className="md:col-span-4 bg-gray-900 border border-gray-800 p-3 rounded text-center space-y-2">
                  <span className="font-mono text-[9px] text-gray-500 block">SECURE PRICE</span>
                  <span className="text-xl font-mono font-bold text-white">${price}</span>
                  <button className="w-full py-1 bg-emerald-500 text-gray-950 font-bold text-[10px] rounded hover:bg-emerald-400 transition-all cursor-pointer uppercase">
                    Connect Whop Checkout
                  </button>
                </div>
              </div>

              {/* Simulated SEO Tags Indicator */}
              <div className="bg-gray-900/60 border border-gray-800 p-3 rounded mt-4">
                <span className="font-mono text-[9px] text-gray-500 block mb-1">INJECTED SEARCH METADATA</span>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                  <div>
                    <span className="text-gray-400 block text-[8px]">ROBOTS PREVIEW:</span>
                    <span className="text-yellow-400">index, follow, max-image-preview:large</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[8px]">KEYWORDS BLOCK:</span>
                    <span className="text-blue-400 truncate block">{seoKeywords}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[9px] font-mono text-gray-500">
            <span>PAGE COMPILATION SPEED: 0.12 SECONDS {"(EDGE CACHED)"}</span>
            <span className="text-emerald-400">PUBLISHING OUT-OF-THE-BOX APPROVED</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>SEO DYNAMICS PUBLISHER</span>
        <span>SOUPRO DIGITAL SERVICES</span>
      </div>
    </div>
  );
}

// Page 8 — Monetization Infrastructure (Whop)
export function MonetizationPage() {
  const [simulatedSubscribers, setSimulatedSubscribers] = useState<number>(350);
  const [productPrice, setProductPrice] = useState<number>(89);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const totalRevenue = simulatedSubscribers * productPrice;
  const whopFees = Math.round(totalRevenue * 0.03); // Whop baseline standard rate is typical 3%
  const netEarnings = totalRevenue - whopFees;

  const handleSimulateConnection = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnected(true);
      setIsConnecting(false);
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">08 / MONETIZATION INFRASTRUCTURE</span>
        <span className="font-mono text-xs text-gray-500">DIRECT INTEGRATED WHOP SUBSCRIPTION FUTURES</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Whop Auth & Sliders Panel (left) */}
        <div className="lg:col-span-5 bg-[#1F2937] border border-gray-800 p-5 rounded-xl space-y-4">
          <div className="border-b border-gray-800 pb-2">
            <h3 className="font-sans font-bold text-white text-base">Whop Integration Panel</h3>
            <span className="font-mono text-[9px] text-gray-400 block">NATIVE AUTHENTICATION GATING</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="font-mono text-[10px] text-gray-400 block mb-1">OAUTH INTEGRATION ACCESS</span>
              {isConnected ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded text-xs text-emerald-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Whop OAuth Connected
                  </span>
                  <span className="font-mono text-[8px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                    SECRET_KEY_OK
                  </span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSimulateConnection}
                  disabled={isConnecting}
                  className="w-full py-2 bg-[#E3544D] hover:bg-red-400 text-white font-sans font-bold text-xs rounded transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4 text-white" />
                  {isConnecting ? 'REQUESTING AUTH PROTOCOLS...' : 'CONNECT ACCOUNT TO WHOP DEVELOPMENT'}
                </button>
              )}
            </div>

            {/* Interactive sliders for creator pricing potential */}
            <div className="space-y-3 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-gray-400">ACTIVE USERS GATED</span>
                  <span className="text-white font-bold">{simulatedSubscribers} users</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="20"
                  value={simulatedSubscribers}
                  onChange={(e) => setSimulatedSubscribers(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-gray-400">PRODUCT PRICE PER UNIT</span>
                  <span className="text-emerald-400 font-bold">${productPrice}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={productPrice}
                  onChange={(e) => setProductPrice(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic ledger calculation visual (right) */}
        <div className="lg:col-span-7 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div className="border-b border-gray-800 pb-2 mb-4">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">CREATOR EARNINGS SIMULATION LEDGER</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mb-6">
              <div className="bg-gray-900/60 p-3 rounded border border-gray-800">
                <span className="font-mono text-[9px] text-gray-500 block mb-0.5">ESTIMATED REVENUE</span>
                <span className="text-xl font-mono font-bold text-white">${totalRevenue.toLocaleString()}</span>
              </div>
              <div className="bg-gray-900/60 p-3 rounded border border-gray-800">
                <span className="font-mono text-[9px] text-gray-500 block mb-0.5">WHOP FEES {"(3%)"}</span>
                <span className="text-xl font-mono font-bold text-red-400">-${whopFees.toLocaleString()}</span>
              </div>
              <div className="bg-gray-900/60 p-3 rounded border border-gray-800">
                <span className="font-mono text-[10px] text-emerald-400 font-bold block mb-0.5">NET CASH FLOW</span>
                <span className="text-xl font-mono font-bold text-emerald-400">${netEarnings.toLocaleString()}</span>
              </div>
            </div>

            {/* Simulated Whop integration webhook log console */}
            <div className="bg-gray-950 p-4 rounded border border-gray-800 font-mono text-xs text-gray-400 space-y-1">
              <div className="flex items-center space-x-1.5 border-b border-gray-900 pb-1.5 mb-1.5 text-gray-500 font-semibold text-[10px]">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>WHOP METADATA WEBHOOK MONITOR</span>
              </div>
              <p className="text-[11px] text-emerald-400">○ webhook_receiver_on: listening to client subscriptions_stream</p>
              <p className="text-[11px]">○ event: whop_subscription_created {"{ user_email: 'creator@domain.com', rank: 'pro' }"}</p>
              <p className="text-[11px]">○ gate_status: user approved, emitting expiring security tokens...</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>ZERO COMPLEXITY CODE PIPELINE COMPACTED</span>
            <span className="text-emerald-400">REVENUE VERIFIED ONCE ACCESSED_OK</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>WHOP ARTIFACT MONETIZER</span>
        <span>SOUPRO DIGITAL SERVICES</span>
      </div>
    </div>
  );
}

// Page 9 — Security & Delivery Vault
export function SecurityVaultPage() {
  const [tokenGenerated, setTokenGenerated] = useState<boolean>(false);
  const [tokenTimer, setTokenTimer] = useState<number>(15);
  const [tokenHash, setTokenHash] = useState<string>('');
  const [logs, setLogs] = useState<SecurityTokenLog[]>([
    { id: '1', timestamp: '15:33:50', event: 'Token Stream Initiated', status: 'SUCCESS', details: 'OAuth identity handshake validated.' },
    { id: '2', timestamp: '15:33:51', event: 'Referrer Context Checked', status: 'SECURED', details: 'Strict client referrerPolicy validated: iframe access granted.' }
  ]);

  useEffect(() => {
    let interval: any;
    if (tokenGenerated && tokenTimer > 0) {
      interval = setInterval(() => {
        setTokenTimer((prev) => prev - 1);
      }, 1000);
    } else if (tokenTimer === 0) {
      setLogs((prev) => [
        { id: String(prev.length + 1), timestamp: '15:34:05', event: 'Access Token Revoked', status: 'WARNING', details: '15-second expiry limit triggered.' },
        ...prev
      ]);
    }
    return () => clearInterval(interval);
  }, [tokenGenerated, tokenTimer]);

  const handleGenerateToken = () => {
    const randomHash = 'TOKEN_' + Math.random().toString(36).substring(2, 10).toUpperCase() + '_X99';
    setTokenHash(randomHash);
    setTokenTimer(15);
    setTokenGenerated(true);
    setLogs((prev) => [
      { id: String(prev.length + 1), timestamp: '15:33:55', event: 'SignedExpiringURLGenerated', status: 'SUCCESS', details: `Token hash: ${randomHash} granted.` },
      ...prev
    ]);
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">09 / SECURITY & DELIVERY VAULT</span>
        <span className="font-mono text-xs text-gray-500">MILITARY-GRADE ANTI-PIRACY DELIVERY ENGINE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Core Logic Control (left) */}
        <div className="lg:col-span-5 bg-[#1F2937] border border-gray-800 p-5 rounded-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <h3 className="font-sans font-bold text-white text-base">Security Vault Monitor</h3>
              <span className="font-mono text-[9px] text-gray-400 block mb-2">DYNAMIC TOKENS DEMONSTRATION</span>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Unlike traditional platforms that give buyers raw static PDF downloads that can be copied everywhere, SouArchitect delivers secure digital assets inside an encrypted environment. Under the hood, download paths are dynamically generated with cryptographic signatures and expiring tokens.
            </p>

            {tokenGenerated ? (
              <div className="bg-gray-900 border border-gray-800 p-4 rounded space-y-3">
                <span className="font-mono text-[9px] text-gray-500 block">ACTIVE CRYPTOGRAPHIC ACCESS PATH:</span>
                <div className="flex justify-between items-center bg-gray-950 p-2 rounded text-xs font-mono text-emerald-400 truncate">
                  <span className="truncate">{tokenTimer > 0 ? `https://souarchitect.com/vault?ref=${tokenHash}` : 'ACCESS EXPIRED (403)'}</span>
                </div>
                <div className="flex justify-between items-center font-mono text-[10px]">
                  <span className="text-gray-400">Token Lifespan Remaining:</span>
                  <span className={`font-bold px-1.5 py-0.5 rounded ${tokenTimer > 5 ? 'text-emerald-400 bg-emerald-500/10' : 'text-red-400 bg-red-500/10'}`}>
                    {tokenTimer} seconds
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <button
            onClick={handleGenerateToken}
            className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-sans font-bold text-xs rounded transition-all cursor-pointer flex items-center justify-center gap-2 mt-6 uppercase"
          >
            <Lock className="w-4 h-4" />
            Simulate Expiring Vault Delivery
          </button>
        </div>

        {/* Signed logs interface (right) */}
        <div className="lg:col-span-7 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="border-b border-gray-800 pb-2.5 mb-4">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                <LockKeyhole className="w-4 h-4 text-emerald-400" /> SYSTEM TRANSACTION LEDGER AUDIT LOG
              </span>
            </div>

            <div className="space-y-2.5 max-h-[190px] overflow-y-auto pr-2">
              {logs.map((log) => (
                <div key={log.id} className="bg-gray-950 p-3 rounded border border-gray-900 flex justify-between gap-3 text-xs font-mono">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">[{log.timestamp}]</span>
                      <span className="text-white font-bold">{log.event}</span>
                    </div>
                    <p className="text-gray-400 text-[11px]">
                      Detail: {log.details}
                    </p>
                  </div>
                  <div>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      log.status === 'SUCCESS' ? 'text-emerald-400 bg-emerald-500/10' :
                      log.status === 'SECURED' ? 'text-blue-400 bg-blue-500/10' :
                      'text-yellow-400 bg-yellow-500/10'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>VAULT TOKENIZATION METRIC SECURED</span>
            <span className="text-emerald-400">IP PROTECTED GATING</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>ANTI-EXPIRATION SYSTEM VAULT</span>
        <span>SOUPRO DIGITAL SERVICES</span>
      </div>
    </div>
  );
}

// Page 10 — Analytics Command Center
export function AnalyticsCommandPage() {
  const [activeKpi, setActiveKpi] = useState<string>('REVENUE');
  const [revenueCycle, setRevenueCycle] = useState<number>(37250);

  const simulateSale = () => {
    setRevenueCycle((prev) => prev + 99);
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">10 / ANALYTICS COMMAND CENTER</span>
        <span className="font-mono text-xs text-gray-500">EXECUTIVE COCKPIT CONTROL & OPERATIONAL KPI MONITOR</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Core KPI metrics list blocks */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <div className="pb-2 border-b border-gray-800">
            <h3 className="font-sans font-extrabold text-white text-base">Command Center KPIs</h3>
            <span className="font-mono text-[9px] text-emerald-400 block">REAL-TIME TELEMETRY TRACKS</span>
          </div>

          <button
            onClick={() => setActiveKpi('REVENUE')}
            className={`w-full text-left p-3 rounded-lg border transition-all ${
              activeKpi === 'REVENUE' ? 'bg-[#1F2937] border-emerald-500' : 'bg-[#1F2937]/45 border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-mono mb-1 text-gray-500">
              <span>TRACKED INCOME</span>
              <span>USD</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-mono font-bold text-white">${revenueCycle.toLocaleString()}</span>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+18.5% MoM</span>
            </div>
          </button>

          <button
            onClick={() => setActiveKpi('CREATORS')}
            className={`w-full text-left p-3 rounded-lg border transition-all ${
              activeKpi === 'CREATORS' ? 'bg-[#1F2937] border-emerald-500' : 'bg-[#1F2937]/45 border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-mono mb-1 text-gray-500">
              <span>ACTIVE SAAS AUTHORS</span>
              <span>USERS</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-mono font-bold text-white">1,490</span>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Active</span>
            </div>
          </button>

          <button
            onClick={() => setActiveKpi('WALLET')}
            className={`w-full text-left p-3 rounded-lg border transition-all ${
              activeKpi === 'WALLET' ? 'bg-[#1F2937] border-emerald-500' : 'bg-[#1F2937]/45 border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className="flex justify-between items-center text-xs font-mono mb-1 text-gray-500">
              <span>CREDIT COIN SYSTEM</span>
              <span>COMPUTING</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-2xl font-mono font-bold text-white">492,000 credits</span>
              <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">99.8% Efficiency</span>
            </div>
          </button>

          <button
            onClick={simulateSale}
            className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 text-xs font-sans font-bold rounded cursor-pointer transition-all uppercase mt-2"
          >
            + TRIGGER MOCK CONVERSION SALE (+$99)
          </button>
        </div>

        {/* Data graphics layout (right) */}
        <div className="lg:col-span-8 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2.5 mb-4">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                KPI GRAPH: {activeKpi} PERFORMANCE OUTLINE
              </span>
              <span className="font-mono text-[9px] text-gray-500">
                INTERVALS: PREVIOUS 6 MONTHS FEEDS
              </span>
            </div>

            {/* Custom SVG line chart to look totally professional modernist */}
            <div className="relative w-full h-44 bg-gray-950 rounded border border-gray-900 p-4 flex flex-col justify-between">
              
              <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 500 120" preserveAspectRatio="none">
                {/* Horizontal guide grids */}
                <line x1="0" y1="20" x2="500" y2="20" stroke="#1F2937" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="60" x2="500" y2="60" stroke="#1F2937" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#1F2937" strokeWidth="1" strokeDasharray="3,3" />

                {/* Graph line path based on current KPI state */}
                {activeKpi === 'REVENUE' ? (
                  <>
                    <path
                      d="M 0 100 Q 100 80 200 60 T 400 30 T 500 10"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="3"
                    />
                    <circle cx="500" cy="10" r="4" fill="#10B981" />
                  </>
                ) : activeKpi === 'CREATORS' ? (
                  <>
                    <path
                      d="M 0 110 Q 100 90 200 80 T 400 50 T 500 35"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="3"
                    />
                    <circle cx="500" cy="35" r="4" fill="#60A5FA" />
                  </>
                ) : (
                  <>
                    <path
                      d="M 0 40 Q 100 50 200 30 T 400 50 T 500 20"
                      fill="none"
                      stroke="#FBBF24"
                      strokeWidth="3"
                    />
                    <circle cx="500" cy="20" r="4" fill="#FBBF24" />
                  </>
                )}
              </svg>

              <div className="flex justify-between font-mono text-[9px] text-gray-500 z-10">
                <span>DEC 2025</span>
                <span>JAN 2026</span>
                <span>FEB 2026</span>
                <span>MAR 2026</span>
                <span>APR 2026</span>
                <span>MAY 2026</span>
              </div>
            </div>

            {/* Wallet logs simulated list */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-xs font-mono text-gray-400">
              <div className="p-3 bg-gray-900 border border-gray-800 rounded">
                <span className="text-[9px] text-gray-500 block mb-1">COMPUTATION LOG COINS:</span>
                <span className="text-white">● synthesis_engine_chapter_call (-5 creds)</span>
              </div>
              <div className="p-3 bg-gray-900 border border-gray-800 rounded">
                <span className="text-[9px] text-gray-500 block mb-1">ACCESS STATUS GATING:</span>
                <span className="text-emerald-400">● 100% security URL handshake clean</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>SaaS DATA HARVEST COMPLETION CERTIFICATION</span>
            <span className="text-emerald-400">ACTIVE TELEMETRY</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>SOUARCHITECT DASHBOARD</span>
        <span>SOUPRO DIGITAL SERVICES</span>
      </div>
    </div>
  );
}

// Page 11 — Competitive Advantage
export function CompetitiveAdvantagePage() {
  const [highlightedRowIdx, setHighlightedRowIdx] = useState<number | null>(null);

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">11 / COMPETITIVE ADVANTAGE matrix</span>
        <span className="font-mono text-xs text-gray-500">WHY ONLY SOUARCHITECT BRIDGES THE GAP</span>
      </div>

      <div className="my-auto flex flex-col">
        <div className="mb-4">
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Why SouArchitect Is Different
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl font-sans">
            Hover or click on individual rows in this architectural comparison matrix to analyze sector weaknesses and SouArchitect integration benefits.
          </p>
        </div>

        {/* Matrix table representation */}
        <div className="bg-[#1F2937]/50 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-[#1F2937]/85 font-mono text-gray-400 border-b border-gray-800 text-[10px] uppercase">
                <tr>
                  <th className="py-2.5 px-3 lg:py-3 lg:px-4 font-bold">Key Operational Capability</th>
                  <th className="py-2.5 px-3 lg:py-3 lg:px-4 text-center">Traditional AI Writer</th>
                  <th className="py-2.5 px-3 lg:py-3 lg:px-4 text-center">Standard Course Host</th>
                  <th className="py-2.5 px-3 lg:py-3 lg:px-4 text-center">Digital Selling Tool</th>
                  <th className="py-2.5 px-3 lg:py-3 lg:px-4 text-center text-emerald-400 font-bold bg-emerald-500/5">SouArchitect Ecosystem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {COMPETITORS_MATRIX.map((row, idx) => {
                  const isHighlighted = idx === highlightedRowIdx;
                  return (
                    <tr
                      key={row.feature}
                      onMouseEnter={() => setHighlightedRowIdx(idx)}
                      onMouseLeave={() => setHighlightedRowIdx(null)}
                      onClick={() => setHighlightedRowIdx(idx)}
                      className={`transition-all cursor-pointer ${
                        isHighlighted ? 'bg-gray-800/80' : row.highlight ? 'bg-emerald-500/[0.02]' : 'hover:bg-gray-800/10'
                      }`}
                    >
                      <td className="py-2 px-3 lg:py-2.5 lg:px-4">
                        <span className="font-bold text-white block text-xs">{row.feature}</span>
                        <span className="text-[10px] text-gray-400 inline-block font-sans">{row.description}</span>
                      </td>
                      
                      <td className="py-2 px-3 lg:py-2.5 lg:px-4 text-center font-mono text-gray-300">
                        {row.traditionalAiWriter === 'yes' ? <span className="text-emerald-400 font-bold">YES</span> :
                         row.traditionalAiWriter === 'partial' ? <span className="text-yellow-400">PARTIAL</span> :
                         <span className="text-gray-600">NO</span>}
                      </td>

                      <td className="py-2 px-3 lg:py-2.5 lg:px-4 text-center font-mono text-gray-300">
                        {row.coursePlatform === 'yes' ? <span className="text-emerald-400 font-bold">YES</span> :
                         row.coursePlatform === 'partial' ? <span className="text-yellow-400">PARTIAL</span> :
                         <span className="text-gray-650">NO</span>}
                      </td>

                      <td className="py-2 px-3 lg:py-2.5 lg:px-4 text-center font-mono text-gray-300">
                        {row.digitalProductTool === 'yes' ? <span className="text-emerald-400 font-bold">YES</span> :
                         row.digitalProductTool === 'partial' ? <span className="text-yellow-400">PARTIAL</span> :
                         <span className="text-gray-650">NO</span>}
                      </td>

                      <td className="py-2 px-3 lg:py-2.5 lg:px-4 text-center font-mono font-bold bg-emerald-500/[0.04] border-l border-emerald-500/10 text-emerald-400">
                        YES
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>GRID COMPARATIVE PROJECTIONS</span>
        <span>SOUARCHITECT LEAP</span>
      </div>
    </div>
  );
}

// Page 12 — Ideal Users
export function IdealUsersPage() {
  const [activeProfileIdx, setActiveProfileIdx] = useState<number>(0);

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">12 / TARGET AUDIENCE & USERS</span>
        <span className="font-mono text-xs text-gray-500">ENGINEERED FOR HIGH-EXECUTION KNOWLEDGE CREATORS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Profiles Selector Carousel / Grid (left) */}
        <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
          <div>
            <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Ideal Customer Archetypes
            </h2>
            <p className="text-sm text-gray-400 font-sans mt-1">
              Select an educational profile category to inspect performance benchmarks, monetizations and pain point reduction.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            {AUDIENCE_PROFILES.map((profile, idx) => {
              const isActive = idx === activeProfileIdx;
              return (
                <button
                  key={profile.title}
                  onClick={() => setActiveProfileIdx(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all text-xs font-mono relative flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1F2937] border-emerald-500 text-white'
                      : 'bg-[#1F2937]/45 border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  <span className="font-sans font-bold text-sm block text-left">{profile.title}</span>
                  <ChevronRight className={`w-4 h-4 transition-all ${isActive ? 'text-emerald-400 transform translate-x-1' : 'text-gray-500'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Profile Detailed Specs (right) */}
        <div className="lg:col-span-7 bg-[#1F2937] border border-gray-800 p-6 rounded-xl flex flex-col justify-between relative shadow-lg shadow-emerald-500/5 min-h-[300px]">
          <div>
            <div className="border-b border-gray-800 pb-2.5 mb-4 flex justify-between items-center">
              <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                ARCHETYPE MATRIX: {AUDIENCE_PROFILES[activeProfileIdx].title}
              </span>
              <span className="font-mono text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">
                {AUDIENCE_PROFILES[activeProfileIdx].conversionLift}
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-red-400 block uppercase font-bold">CRITICAL FRICTION POINT</span>
                <p className="text-sm text-gray-200">
                  {AUDIENCE_PROFILES[activeProfileIdx].painPoint}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[9px] text-emerald-400 block uppercase font-bold">SOUARCHITECT CONVERSION IMPACT</span>
                <p className="text-sm text-gray-200">
                  {AUDIENCE_PROFILES[activeProfileIdx].solutionImpact}
                </p>
              </div>
            </div>
          </div>

          {/* Metric indicator feet */}
          <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span className="text-[9px] text-gray-500 block">EXPECTED LIFT STATUS:</span>
              <span className="text-emerald-400 font-bold">{AUDIENCE_PROFILES[activeProfileIdx].conversionLift}</span>
            </div>
            <div>
              <span className="text-[9px] text-gray-500 block">TYPICAL TARGET PAYOUTS:</span>
              <span className="text-white font-bold">{AUDIENCE_PROFILES[activeProfileIdx].monetizationGoal}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>CREATOR PROFILE MATRIX</span>
        <span>SOUARCHITECT AUDIENCES</span>
      </div>
    </div>
  );
}

// Page 13 — Company Story
export function CompanyStoryPage() {
  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">13 / COMPANY VISION SUMMARY</span>
        <span className="font-mono text-xs text-gray-500">PARENT: SOUPRO DIGITAL SERVICES REVOLUTIONS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* Text Story Narrative (left) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block font-bold">OUR MISSION MATRIX</span>
          <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            About Soupro Digital Services
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed font-sans">
            At Soupro Digital Services, we have watched how thousands of digital authors, course instructors, and coaches lose their valuable creations to early-phase audience saturation or simple file copy links. 
          </p>
          <p className="text-sm text-gray-300 leading-relaxed font-sans">
            We formulated <strong>SouArchitect</strong> as an architectural sanctuary. Our vision is that the structural design of human knowledge products should be validated prior to creation, generated dynamically to avoid AI plagiarism vibes, and securely delivered to safeguard creator futures.
          </p>
        </div>

        {/* Structured roadmap milestones ledger (right) */}
        <div className="lg:col-span-6 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="border-b border-gray-800 pb-2.5 mb-4">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                SYSTEM RELEASE MILESTONES & ROADMAP RECORD
              </span>
            </div>

            <div className="space-y-4 font-sans text-xs">
              {ROADMAP.map((milestone) => (
                <div key={milestone.title} className="flex gap-4 items-start">
                  <div className="shrink-0 font-mono text-[9px] bg-gray-900 border border-gray-800 text-gray-400 px-2 py-0.5 rounded tracking-wider w-24 text-center">
                    {milestone.period}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-xs flex items-center gap-2">
                      {milestone.title}
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        milestone.status === 'COMPLETED' ? 'bg-emerald-400' :
                        milestone.status === 'IN_PROGRESS' ? 'bg-blue-400 animate-pulse' : 'bg-gray-650'
                      }`}></span>
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>SOUARCHITECT ROADMAP VERSION 1.4 METRIC</span>
            <span className="text-emerald-400">ROADMAP CERTIFIED OK</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>CORPORATE EDITORIAL DIARY</span>
        <span>SOUARCHITECT HISTORY</span>
      </div>
    </div>
  );
}

// Page 14 — Contact & Call to Action
export function ContactPage() {
  const [demoEmail, setDemoEmail] = useState<string>('');
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [isBooking, setIsBooking] = useState<boolean>(false);

  // Google Sheets & Docs live-sync states
  const [workspaceType, setWorkspaceType] = useState<'sheets' | 'docs'>('sheets');
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [googleUser, setGoogleUser] = useState<any | null>(null);
  const [targetId, setTargetId] = useState<string>('');
  const [targetTitle, setTargetTitle] = useState<string>('');
  const [targetUrl, setTargetUrl] = useState<string>('');
  const [connectedEmail, setConnectedEmail] = useState<string>('');
  
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isDocCreating, setIsDocCreating] = useState<boolean>(false);
  const [existingUrlInput, setExistingUrlInput] = useState<string>('');
  
  const [offlineQueue, setOfflineQueue] = useState<Array<{ email: string; timestamp: string }>>([]);
  const [syncedLogs, setSyncedLogs] = useState<Array<{ email: string; timestamp: string; status: string }>>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showAdminDetails, setShowAdminDetails] = useState<boolean>(false);
  const [emailPreviewTab, setEmailPreviewTab] = useState<'directory' | 'email'>('directory');

  // Administrator restriction and authorization states
  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(() => {
    return localStorage.getItem('sou_admin_unlocked') === 'true';
  });
  const [showPasscodeInput, setShowPasscodeInput] = useState<boolean>(false);
  const [adminPasscode, setAdminPasscode] = useState<string>('');
  const [adminPasscodeError, setAdminPasscodeError] = useState<boolean>(false);

  // Detect development mode based on URL or hostname
  const isDevMode = typeof window !== 'undefined' && (
    window.location.hostname.includes('localhost') || 
    window.location.hostname.includes('127.0.0.1') || 
    window.location.hostname.includes('-dev-')
  );

  useEffect(() => {
    // 1. Recover offline queue
    const queue = JSON.parse(localStorage.getItem('sou_offline_queue') || '[]');
    setOfflineQueue(queue);

    // 2. Recover logs
    const logs = JSON.parse(localStorage.getItem('sou_synced_logs') || '[]');
    setSyncedLogs(logs);

    // 3. Recover workspace settings locally as instant fallback
    const storedType = (localStorage.getItem('sou_workspace_type') as 'sheets' | 'docs') || 'sheets';
    const storedTargetId = localStorage.getItem('sou_workspace_target_id') || localStorage.getItem('sou_google_doc_id') || '';
    const storedTargetTitle = localStorage.getItem('sou_workspace_target_title') || localStorage.getItem('sou_google_doc_title') || '';
    const storedTargetUrl = localStorage.getItem('sou_workspace_target_url') || localStorage.getItem('sou_google_doc_url') || '';
    const storedEmail = localStorage.getItem('sou_connected_email') || '';

    setWorkspaceType(storedType);
    if (storedTargetId) setTargetId(storedTargetId);
    if (storedTargetTitle) setTargetTitle(storedTargetTitle);
    if (storedTargetUrl) {
      setTargetUrl(storedTargetUrl);
      setExistingUrlInput(storedTargetUrl);
    }
    if (storedEmail) setConnectedEmail(storedEmail);

    // Dynamic Cloud Sync: Pull current Sheet/Doc configuration from Firestore
    loadWorkspaceConfigFromCloud().then((cloudConfig) => {
      if (cloudConfig) {
        setWorkspaceType(cloudConfig.workspaceType);
        setTargetId(cloudConfig.targetId);
        setTargetTitle(cloudConfig.targetTitle);
        setTargetUrl(cloudConfig.targetUrl);
        setExistingUrlInput(cloudConfig.targetUrl);
        
        localStorage.setItem('sou_workspace_type', cloudConfig.workspaceType);
        localStorage.setItem('sou_workspace_target_id', cloudConfig.targetId);
        localStorage.setItem('sou_workspace_target_title', cloudConfig.targetTitle);
        localStorage.setItem('sou_workspace_target_url', cloudConfig.targetUrl);
      }
    }).catch(err => {
      console.warn("Cloud config load failed (using local cache):", err);
    });

    // 4. Initialize Auth listener
    const unsubscribe = initAuth(
      (user, token) => {
        setGoogleUser(user);
        setAccessToken(token);
        if (user.email) {
          setConnectedEmail(user.email);
          localStorage.setItem('sou_connected_email', user.email);
        }
      },
      () => {
        // Gracefully handle not signed in state
      }
    );

    return () => unsubscribe();
  }, []);

  // Synchronizes any unsynced leads from cloud database to connected Google Sheet or Doc
  const syncUnsyncedLeads = async (currentAccessToken = accessToken, currentTargetId = targetId, currentWorkspaceType = workspaceType, currentTargetTitle = targetTitle) => {
    if (!currentAccessToken || !currentTargetId) return;
    try {
      const unsynced = await getUnsyncedLeadsFromCloud();
      if (!unsynced || unsynced.length === 0) return;
      
      console.log(`[Sync] Found ${unsynced.length} unsynced leads in cloud database. Starting push...`);
      for (const lead of unsynced) {
        try {
          if (currentWorkspaceType === 'sheets') {
            await appendEmailToSheet(currentAccessToken, currentTargetId, lead.email);
          } else {
            await appendEmailToDoc(currentAccessToken, currentTargetId, lead.email);
          }
          
          try {
            await sendConfirmationEmail(currentAccessToken, lead.email, currentTargetTitle, connectedEmail || undefined);
          } catch (emailErr) {
            console.error("Gmail sync email failed:", emailErr);
          }
          
          await markLeadAsSyncedInCloud(lead.id);
          
          // Log success state locally
          setSyncedLogs(prev => {
            const up = [{ email: lead.email, timestamp: lead.timestamp, status: 'success' }, ...prev];
            localStorage.setItem('sou_synced_logs', JSON.stringify(up));
            return up;
          });
        } catch (leadSyncErr) {
          console.error(`Failed to sync lead ${lead.email}:`, leadSyncErr);
        }
      }
    } catch (err) {
      console.error("Failed to run unsynced leads sweep:", err);
    }
  };

  const updateWorkspaceConfig = async (newType: 'sheets' | 'docs', newId: string, newTitle: string, newUrl: string) => {
    setWorkspaceType(newType);
    setTargetId(newId);
    setTargetTitle(newTitle);
    setTargetUrl(newUrl);

    localStorage.setItem('sou_workspace_type', newType);
    if (newId) {
      localStorage.setItem('sou_workspace_target_id', newId);
      localStorage.setItem('sou_workspace_target_title', newTitle);
      localStorage.setItem('sou_workspace_target_url', newUrl);
      try {
        await saveWorkspaceConfigInCloud(newId, newTitle, newUrl, newType);
        // Sync any pending items right away using newly linked targets!
        if (accessToken) {
          await syncUnsyncedLeads(accessToken, newId, newType, newTitle);
        }
      } catch (err) {
        console.error("Cloud config save failed:", err);
      }
    } else {
      localStorage.removeItem('sou_workspace_target_id');
      localStorage.removeItem('sou_workspace_target_title');
      localStorage.removeItem('sou_workspace_target_url');
      localStorage.removeItem('sou_google_doc_id');
      localStorage.removeItem('sou_google_doc_title');
      localStorage.removeItem('sou_google_doc_url');
    }
  };

  useEffect(() => {
    if (accessToken && targetId) {
      syncUnsyncedLeads();
    }
  }, [accessToken, targetId]);

  const handleGoogleLogin = async () => {
    setIsConnecting(true);
    setErrorMsg(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setAccessToken(result.accessToken);
        setGoogleUser(result.user);
        if (result.user.email) {
          setConnectedEmail(result.user.email);
          localStorage.setItem('sou_connected_email', result.user.email);
        }
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Login to Google failed.');
    } finally {
      setIsConnecting(false);
    }
  };

  const handleGoogleLogout = async () => {
    await logout();
    setAccessToken(null);
    setGoogleUser(null);
    setConnectedEmail('');
    localStorage.removeItem('sou_connected_email');
  };

  const handleCreateNewDoc = async () => {
    if (!accessToken) return;
    setIsDocCreating(true);
    setErrorMsg(null);
    try {
      if (workspaceType === 'sheets') {
        const sheet = await createGoogleSheet(accessToken, "SouArchitect Booked Leads");
        await updateWorkspaceConfig('sheets', sheet.spreadsheetId, sheet.title, sheet.spreadsheetUrl);
        setExistingUrlInput(sheet.spreadsheetUrl);
      } else {
        const doc = await createGoogleDoc(accessToken, "SouArchitect Booked Leads Directory");
        const url = `https://docs.google.com/document/d/${doc.documentId}/edit`;
        await updateWorkspaceConfig('docs', doc.documentId, doc.title, url);
        setExistingUrlInput(url);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to create workspace file.');
    } finally {
      setIsDocCreating(false);
    }
  };

  const handleLinkExistingUrl = (val: string) => {
    setExistingUrlInput(val);
    if (!val) return;
    
    const sheetMatch = val.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
    const docMatch = val.match(/\/document\/d\/([a-zA-Z0-9-_]+)/);
    
    if (sheetMatch && sheetMatch[1]) {
      const parsedId = sheetMatch[1];
      const parsedUrl = `https://docs.google.com/spreadsheets/d/${parsedId}/edit`;
      updateWorkspaceConfig('sheets', parsedId, "Linked Google Spreadsheet", parsedUrl);
      setErrorMsg(null);
    } else if (docMatch && docMatch[1]) {
      const parsedId = docMatch[1];
      const parsedUrl = `https://docs.google.com/document/d/${parsedId}/edit`;
      updateWorkspaceConfig('docs', parsedId, "Linked Google Document", parsedUrl);
      setErrorMsg(null);
    } else {
      if (val.length > 20 && !val.includes('/')) {
        const guessedType = workspaceType;
        const parsedUrl = guessedType === 'sheets'
          ? `https://docs.google.com/spreadsheets/d/${val}/edit`
          : `https://docs.google.com/document/d/${val}/edit`;
        updateWorkspaceConfig(guessedType, val, guessedType === 'sheets' ? "Linked Google Spreadsheet" : "Linked Google Document", parsedUrl);
        setErrorMsg(null);
      }
    }
  };

  const handleSyncOfflineQueue = async () => {
    if (!accessToken || !targetId || offlineQueue.length === 0) return;
    setIsBooking(true);
    setErrorMsg(null);
    
    let successCount = 0;
    const tempSyncedLogs = [...syncedLogs];
    
    try {
      for (const item of offlineQueue) {
        if (workspaceType === 'sheets') {
          await appendEmailToSheet(accessToken, targetId, item.email);
        } else {
          await appendEmailToDoc(accessToken, targetId, item.email);
        }
        
        // Dispatches the automated reservation email securely via Gmail API
        try {
          await sendConfirmationEmail(accessToken, item.email, targetTitle);
        } catch (emailErr: any) {
          console.error("Automated email delivery failed for user during bulk sync:", emailErr);
        }

        tempSyncedLogs.push({
          email: item.email,
          timestamp: item.timestamp,
          status: 'success'
        });
        successCount++;
      }
      
      // Clear offline queue
      setOfflineQueue([]);
      localStorage.removeItem('sou_offline_queue');
      
      // Update synced logs
      setSyncedLogs(tempSyncedLogs);
      localStorage.setItem('sou_synced_logs', JSON.stringify(tempSyncedLogs));
    } catch (err: any) {
      console.error(err);
      setErrorMsg(`Successfully synced ${successCount} leads. Transmission error: ${err.message}`);
      
      const remainingQueue = offlineQueue.slice(successCount);
      setOfflineQueue(remainingQueue);
      localStorage.setItem('sou_offline_queue', JSON.stringify(remainingQueue));
    } finally {
      setIsBooking(false);
    }
  };

  const handleSimulateBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoEmail || !demoEmail.includes('@')) {
      alert('Please enter a valid developer email format.');
      return;
    }
    
    setIsBooking(true);
    setErrorMsg(null);
    const leadTimestamp = new Date().toLocaleString();
    
    try {
      if (accessToken && targetId) {
        // Direct integration mode (e.g. running locally as developer or configured owner)
        // Save to Firestore first as synced = true
        try {
          await saveLeadInCloud(demoEmail, leadTimestamp, true);
        } catch (dbErr) {
          console.error("Failed to save lead in cloud database, but proceeding with direct append:", dbErr);
        }

        // Append live to Active Workspace API
        if (workspaceType === 'sheets') {
          await appendEmailToSheet(accessToken, targetId, demoEmail);
        } else {
          await appendEmailToDoc(accessToken, targetId, demoEmail);
        }
        
        // Dispatches the reservation email immediately inside real-time handler
        try {
          await sendConfirmationEmail(accessToken, demoEmail, targetTitle, connectedEmail || undefined);
        } catch (emailErr: any) {
          console.error("Automated email dispatch failed during real-time booking:", emailErr);
          setErrorMsg(`Synced to sheet, but email transmission encountered an issue: ${emailErr.message}`);
        }

        // Save to synced logs
        const newLogs = [{ email: demoEmail, timestamp: leadTimestamp, status: 'success' }, ...syncedLogs];
        setSyncedLogs(newLogs);
        localStorage.setItem('sou_synced_logs', JSON.stringify(newLogs));
      } else {
        // Public Visitor / Offline Mode: store persistently in Cloud Firestore first
        try {
          await saveLeadInCloud(demoEmail, leadTimestamp, false);
        } catch (dbErr: any) {
          console.error("Failed to store lead in Firestore:", dbErr);
        }

        // Secondary Backup locally
        const existingQueue = JSON.parse(localStorage.getItem('sou_offline_queue') || '[]');
        const newQueue = [{ email: demoEmail, timestamp: leadTimestamp }, ...existingQueue];
        localStorage.setItem('sou_offline_queue', JSON.stringify(newQueue));
        setOfflineQueue(newQueue);
      }
      
      setIsBooked(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Direct synchronization offline. Saved securely in cloud/local backup queue.');
      
      // Store lead in Firestore as unsynced
      try {
        await saveLeadInCloud(demoEmail, leadTimestamp, false);
      } catch (dbErr) {
        console.error("Firestore failure during backup:", dbErr);
      }

      // Secondary Backup locally
      const existingQueue = JSON.parse(localStorage.getItem('sou_offline_queue') || '[]');
      const newQueue = [{ email: demoEmail, timestamp: leadTimestamp }, ...existingQueue];
      localStorage.setItem('sou_offline_queue', JSON.stringify(newQueue));
      setOfflineQueue(newQueue);
      
      setIsBooked(true);
    } finally {
      setIsBooking(false);
    }
  };

  const handleDownloadQR = () => {
    // 1. Create a 512x512 canvas for high quality
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 2. Draw a dark slate background matching the application's charcoal palette
    ctx.fillStyle = '#0b0f19';
    ctx.fillRect(0, 0, 512, 512);

    // 3. Draw an emerald subtle card container inside
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, 448, 448);

    // Draw card background
    ctx.fillStyle = '#111827';
    ctx.fillRect(34, 34, 444, 444);

    // 4. Draw Header text
    ctx.fillStyle = '#9CA3AF'; // text-gray-400
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('LAUNCH DEMO CHANNEL', 256, 80);

    // 5. Draw the 5x5 grid in the center (grid is 200x200, centered from 156 to 356)
    const gridLeft = 156;
    const gridTop = 130;
    const gridSize = 200;
    const cellSize = gridSize / 5; // 40px each cell
    const gap = 4;

    // Draw grid background container
    ctx.fillStyle = '#030712'; // very dark slate
    ctx.fillRect(gridLeft - 10, gridTop - 10, gridSize + 20, gridSize + 20);
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(gridLeft - 10, gridTop - 10, gridSize + 20, gridSize + 20);

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const i = row * 5 + col;
        const isSelected = (i % 3 === 0 || i % 7 === 0 || i === 0 || i === 4 || i === 20 || i === 24);
        
        if (isSelected) {
          ctx.fillStyle = '#10B981';
          ctx.fillRect(
            gridLeft + col * cellSize + gap / 2,
            gridTop + row * cellSize + gap / 2,
            cellSize - gap,
            cellSize - gap
          );
        }
      }
    }

    // 6. Draw Footer Text
    ctx.fillStyle = '#10B981'; // emerald-400
    ctx.font = 'bold 14px monospace';
    ctx.fillText('SOUARCHITECT APPROVED', 256, 385);

    ctx.fillStyle = '#6B7280'; // text-gray-500
    ctx.font = '10px sans-serif';
    ctx.fillText('www.souarchitect.com • Soupro Digital Services', 256, 430);

    // 7. Convert to Data URL and anchor trigger download
    try {
      const dataUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = 'souarchitect-demo-qr.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (err) {
      console.error('Error generating QR download', err);
    }
  };

  return (
    <div className="relative w-full min-h-full lg:h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 lg:p-8 overflow-y-auto bg-[#111827]">
      <div className="absolute inset-0 modern-grid pointer-events-none opacity-20"></div>

      <div className="flex justify-between items-center border-b border-gray-800 pb-3">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">14 / CALL TO ACTION DIRECTORY</span>
        <span className="font-mono text-xs text-gray-500">START MONETIZING & SECURING INTELLECTUAL ASSETS TODAY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
        {/* CTA booking form (left) */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block font-bold">SECURE ORIENTATION SESSION</span>
            <h2 className="text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
              Start Architecting Your Knowledge Assets
            </h2>
            <p className="text-sm text-gray-300 font-sans">
              Connect directly with our corporate development team for validation score models and onboarding into the secure Publishing Suite.
            </p>
          </div>

          <div id="booking-form-wrapper" className="bg-[#1F2937] border border-gray-800 p-5 rounded-xl space-y-4">
            {isBooked ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded text-xs text-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-sans font-bold text-sm text-white">Orientation Demonstration Scheduled</h4>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  A verification link of parameters and calendar access has been transmitted to: <strong>{demoEmail}</strong>
                </p>
                {targetId && (
                  <div className="p-2.5 bg-gray-950 border border-emerald-500/30 rounded text-[10px] space-y-1.5 text-left">
                    <div className="flex items-center gap-1 text-emerald-400 font-bold font-mono uppercase">
                      <Check className="w-3 h-3" /> Real-time {workspaceType === 'sheets' ? 'Sheets' : 'Docs'} Sync Complete
                    </div>
                    <p className="text-gray-400 text-[9px] truncate">
                      Appended straight to: <strong className="text-white font-mono">{targetTitle}</strong>
                    </p>
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 hover:underline font-mono text-[9px] font-bold uppercase transition"
                    >
                      Browse live {workspaceType === 'sheets' ? 'Google Sheet' : 'Google Doc'} <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                )}
                {!targetId && (
                  <div className="p-2.5 bg-gray-950 border border-yellow-500/30 rounded text-[10px] text-left space-y-1 text-yellow-500">
                    <span className="font-bold font-mono text-[9px] uppercase block">✓ Local Backup Captured!</span>
                    <p className="text-gray-400 text-[9px] leading-normal">
                      Email captured locally. Connect your Google Sheet or Doc under admin settings to automatically sync all records!
                    </p>
                  </div>
                )}
                <button
                  onClick={() => {
                    setIsBooked(false);
                    setDemoEmail('');
                  }}
                  className="w-full text-center text-gray-400 hover:text-white text-[10px] font-mono mt-1 hover:underline uppercase cursor-pointer"
                >
                  Book another session
                </button>
              </div>
            ) : (
              <form onSubmit={handleSimulateBooking} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[9px] text-gray-400 block font-bold uppercase tracking-wider">
                    SCHEDULE GUIDED SYSTEM WALKTHROUGH
                  </span>
                  {targetId && (
                    <span className="inline-flex items-center gap-1 text-[8.5px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 font-bold uppercase">
                      Live {workspaceType === 'sheets' ? 'Sheet' : 'Doc'} Sync Active
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={demoEmail}
                    onChange={(e) => setDemoEmail(e.target.value)}
                    placeholder="Enter professional creator email..."
                    className="flex-1 bg-gray-900 border border-gray-700 rounded px-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 font-sans"
                  />
                  <button
                    type="submit"
                    disabled={isBooking}
                    className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-sans font-bold text-xs px-4 py-2.5 rounded transition-all cursor-pointer whitespace-nowrap active:scale-95 disabled:opacity-50"
                  >
                    {isBooking ? 'TRANSMITTING...' : 'BOOK LIVE ORIENTATION'}
                  </button>
                </div>
                
                {errorMsg && (
                  <p className="text-[10px] font-mono text-red-400 flex items-center gap-1 bg-red-950/20 px-2 py-1.5 border border-red-500/20 rounded">
                    <AlertCircle className="w-3.5 h-3.5 break-keep shrink-0" /> {errorMsg}
                  </p>
                )}
              </form>
            )}

            {/* Google Workspace Setup Console */}
            {isDevMode && (
              <div className="pt-2 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => {
                    if (isAdminUnlocked) {
                      setShowAdminDetails(!showAdminDetails);
                      setShowPasscodeInput(false);
                    } else {
                      setShowPasscodeInput(!showPasscodeInput);
                    }
                    setAdminPasscodeError(false);
                  }}
                  className={`w-full flex items-center justify-between py-1.5 px-2 hover:bg-gray-900 border text-[10px] font-mono transition-all uppercase tracking-wider font-bold rounded ${
                    isAdminUnlocked 
                      ? 'bg-gray-950 border-gray-800 text-gray-400 hover:text-white' 
                      : showPasscodeInput 
                        ? 'bg-amber-950/20 border-amber-500/30 text-amber-500' 
                        : 'bg-gray-950 border-gray-800 text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isAdminUnlocked ? (
                      <Settings className="w-3 h-3 text-emerald-400 animate-spin-slow" />
                    ) : (
                      <Lock className="w-3 h-3 text-amber-500" />
                    )}
                    Google Workspace Console
                  </span>
                  <span className="text-gray-500 font-mono text-[9px] hover:text-validation-orange">
                    {isAdminUnlocked ? (showAdminDetails ? '[HIDE]' : '[EXPAND]') : (showPasscodeInput ? '[LOCKED]' : '[LOCKED]')}
                  </span>
                </button>

                {showPasscodeInput && !isAdminUnlocked && (
                  <div className="mt-2.5 p-3 bg-gray-950 border border-amber-500/20 rounded-lg space-y-2 text-[10.5px] font-mono leading-relaxed">
                    <div className="flex items-center gap-1.5 text-amber-500 font-bold uppercase tracking-wider text-[9px]">
                      <Lock className="w-3 h-3 animate-pulse" />
                      <span>Administrative Authorization Required</span>
                    </div>
                    <p className="text-gray-400">
                      To protect your Google Sheets and Docs live integration in public/sharing mode, this setup panel is secure. Authenticate below to customize layout settings.
                    </p>
                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        const key = adminPasscode.trim().toLowerCase();
                        if (key === 'admin123' || key === 'banikag1' || key === 'banikag1@gmail.com' || key === 'soupro') {
                          setIsAdminUnlocked(true);
                          localStorage.setItem('sou_admin_unlocked', 'true');
                          setShowAdminDetails(true);
                          setShowPasscodeInput(false);
                          setAdminPasscodeError(false);
                        } else {
                          setAdminPasscodeError(true);
                        }
                      }}
                      className="flex gap-2"
                    >
                      <input
                        type="password"
                        value={adminPasscode}
                        onChange={(e) => {
                          setAdminPasscode(e.target.value);
                          setAdminPasscodeError(false);
                        }}
                        placeholder="Enter Admin Passcode / Email..."
                        className="flex-1 bg-gray-900 border border-gray-800 rounded px-2.5 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 font-mono"
                      />
                      <button
                        type="submit"
                        className="bg-amber-500 hover:bg-amber-400 text-gray-950 font-sans font-extrabold text-[10.5px] px-3.5 py-1.5 rounded transition-all cursor-pointer whitespace-nowrap uppercase tracking-wider active:scale-95"
                      >
                        Unlock
                      </button>
                    </form>
                    {adminPasscodeError && (
                      <p className="text-red-400 font-bold text-[8.5px] uppercase tracking-wider animate-pulse">
                        ❌ Invalid authentication code. Please try again.
                      </p>
                    )}
                    <div className="text-gray-600 text-[8.5px] pt-2 border-t border-gray-900 flex justify-between items-center">
                      <span>Authorized Owner Email:</span>
                      <span className="font-bold text-gray-500">banikag1@gmail.com</span>
                    </div>
                  </div>
                )}

                {showAdminDetails && isAdminUnlocked && (
                  <div className="mt-3 p-3 bg-gray-950 border border-gray-800 rounded-lg space-y-3 text-xs font-sans">
                    {/* Workspace Admin Session Header */}
                    <div className="flex justify-between items-center pb-2 border-b border-gray-900">
                      <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest block flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Secure Console Session Active
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAdminUnlocked(false);
                          setShowAdminDetails(false);
                          localStorage.removeItem('sou_admin_unlocked');
                        }}
                        className="text-[8.5px] font-mono text-amber-500 hover:text-amber-400 font-bold uppercase cursor-pointer flex items-center gap-1 transition"
                        title="Lock panel access immediately"
                      >
                        <Lock className="w-2.5 h-2.5" /> Lock Console
                      </button>
                    </div>

                    {/* Workspace Target Selection */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
                        Lead Capture Destination
                      </span>
                      <div className="flex gap-2 p-1 bg-gray-900 border border-gray-800 rounded-lg text-[9px] font-mono">
                        <button
                          type="button"
                          onClick={() => {
                            setWorkspaceType('sheets');
                            localStorage.setItem('sou_workspace_type', 'sheets');
                            if (targetId) {
                              saveWorkspaceConfigInCloud(targetId, targetTitle, targetUrl, 'sheets').catch(err => console.error(err));
                            }
                          }}
                          className={`flex-1 py-1 px-1.5 rounded transition-all text-center uppercase font-bold cursor-pointer ${
                            workspaceType === 'sheets'
                              ? 'bg-emerald-500 text-gray-950 shadow-sm font-extrabold'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Google Sheets
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setWorkspaceType('docs');
                            localStorage.setItem('sou_workspace_type', 'docs');
                            if (targetId) {
                              saveWorkspaceConfigInCloud(targetId, targetTitle, targetUrl, 'docs').catch(err => console.error(err));
                            }
                          }}
                          className={`flex-1 py-1 px-1.5 rounded transition-all text-center uppercase font-bold cursor-pointer ${
                            workspaceType === 'docs'
                              ? 'bg-emerald-500 text-gray-950 shadow-sm font-extrabold'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          Google Docs
                        </button>
                      </div>
                    </div>

                    {/* Step 1: Authentication */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        <span>Owner Authorization</span>
                        <span className={accessToken ? 'text-emerald-400 font-bold' : 'text-validation-orange font-bold'}>
                          {accessToken ? 'Active Session' : 'Offline Mode'}
                        </span>
                      </div>

                      {!accessToken ? (
                        <div className="space-y-2">
                          <p className="text-[10px] text-gray-400 font-normal leading-normal">
                            Authorize to instantly sync visitors' booked emails straight to your personal Google Sheets or Google Documents.
                          </p>
                          <button
                            type="button"
                            onClick={handleGoogleLogin}
                            disabled={isConnecting}
                            className="w-full flex items-center justify-center gap-2 text-xs py-2 px-3 border border-gray-700 bg-white hover:bg-gray-100 text-gray-900 font-sans font-bold rounded cursor-pointer transition-all disabled:opacity-50"
                          >
                            <svg className="w-4 h-4 mr-1" viewBox="0 0 48 48">
                              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            </svg>
                            <span>{isConnecting ? 'Signing in...' : 'Sign in with Google'}</span>
                          </button>
                        </div>
                      ) : (
                        <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/20 flex justify-between items-center">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="text-[10px] text-gray-300 font-mono truncate">
                              {connectedEmail}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={handleGoogleLogout}
                            className="p-1 text-gray-500 hover:text-white transition cursor-pointer"
                            title="Sign Out"
                          >
                            <LogOut className="w-3 h-3 hover:text-red-400" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Step 2: GDoc/GSheet ID or Creation */}
                    {accessToken && (
                      <div className="space-y-2 pt-2 border-t border-gray-900">
                        <div className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest flex justify-between">
                          <span>Target {workspaceType === 'sheets' ? 'Spreadsheet' : 'Document'}</span>
                          <span className="text-gray-500">Google {workspaceType === 'sheets' ? 'Sheets' : 'Docs'} Workspace</span>
                        </div>

                        {targetId ? (
                          <div className="p-2 rounded bg-gray-900 border border-gray-800 space-y-1.5 text-[10px]">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-gray-300 truncate font-mono">
                                ✓ {targetTitle}
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  updateWorkspaceConfig(workspaceType, '', '', '');
                                  setExistingUrlInput('');
                                }}
                                className="text-[8.5px] font-mono text-red-400 hover:text-red-300 uppercase cursor-pointer font-bold"
                              >
                                Disconnect
                              </button>
                            </div>
                            <p className="text-[9px] text-gray-500 truncate font-mono">ID: {targetId}</p>
                            <a
                              href={targetUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 hover:underline font-mono text-[9px] font-bold uppercase transition"
                            >
                              Open Live {workspaceType === 'sheets' ? 'Google Sheet' : 'Google Doc'} <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <button
                              type="button"
                              onClick={handleCreateNewDoc}
                              disabled={isDocCreating}
                              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded bg-validation-orange hover:bg-validation-orange/95 text-gray-950 font-mono text-[10.5px] font-bold uppercase cursor-pointer disabled:opacity-50"
                            >
                              {isDocCreating ? (
                                <span>Creating {workspaceType === 'sheets' ? 'Spreadsheet' : 'Document'}...</span>
                              ) : (
                                <>
                                  <Plus className="w-3.5 h-3.5 shrink-0" />
                                  <span>Create New Leads {workspaceType === 'sheets' ? 'Sheet' : 'Doc'}</span>
                                </>
                              )}
                            </button>

                            <div className="pt-1.5 space-y-1">
                              <label className="block text-[8px] font-mono text-gray-500 uppercase font-bold">
                                Or connect existing {workspaceType === 'sheets' ? 'Spreadsheet' : 'Document'} (ID or URL)
                              </label>
                              <input
                                type="text"
                                value={existingUrlInput}
                                onChange={(e) => handleLinkExistingUrl(e.target.value)}
                                placeholder={workspaceType === 'sheets' ? "https://docs.google.com/spreadsheets/d/..." : "https://docs.google.com/document/d/..."}
                                className="w-full bg-gray-900 border border-gray-800 rounded px-2 py-1 text-[9.5px] text-white placeholder-gray-600 focus:outline-none focus:border-validation-orange font-mono"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Offline visitor booking Queue */}
                    {offlineQueue.length > 0 && (
                      <div className="pt-2 border-t border-gray-900 space-y-2">
                        <div className="flex justify-between items-center text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                          <span>Offline Buffer Queue ({offlineQueue.length})</span>
                          <span className="text-yellow-500 font-bold">Unsynced Live Logs</span>
                        </div>
                        
                        <div className="max-h-20 overflow-y-auto bg-gray-900 border border-gray-800 rounded p-1.5 text-[8.5px] font-mono text-gray-400 space-y-1">
                          {offlineQueue.map((item, qIdx) => (
                            <div key={qIdx} className="flex justify-between border-b border-gray-950 pb-0.5 last:border-0 truncate">
                              <span className="text-white truncate">{item.email}</span>
                              <span className="text-gray-600 text-[7px] shrink-0">{item.timestamp.split(',')[1] || item.timestamp}</span>
                            </div>
                          ))}
                        </div>

                        {accessToken && targetId ? (
                          <button
                            type="button"
                            onClick={handleSyncOfflineQueue}
                            className="w-full flex items-center justify-center gap-1.5 py-1 px-2 border border-emerald-500/30 hover:bg-emerald-500/10 hover:border-emerald-500 text-emerald-400 font-mono text-[9px] font-bold uppercase rounded cursor-pointer transition-all"
                          >
                            Sync Entire Queue to Google {workspaceType === 'sheets' ? 'Sheet' : 'Doc'}
                          </button>
                        ) : (
                          <p className="text-[8.5px] font-mono text-yellow-500/80 bg-yellow-500/10 p-1.5 rounded border border-yellow-500/20 leading-relaxed font-bold">
                            💡 Connect your Google account & target Leads Sheet above to sync these local logs now!
                          </p>
                        )}
                      </div>
                    )}

                    {/* Sync Logs */}
                    {syncedLogs.length > 0 && (
                      <div className="pt-2 border-t border-gray-900 space-y-1.5">
                        <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-widest block">
                          Recent Sync Activity ({syncedLogs.length})
                        </span>
                        <div className="max-h-20 overflow-y-auto bg-gray-900/50 border border-gray-900 rounded p-1.5 text-[8px] font-mono text-gray-500 space-y-1">
                          {syncedLogs.map((log, lIdx) => (
                            <div key={lIdx} className="flex justify-between border-b border-gray-900 pb-0.5 last:border-0">
                              <span className="text-gray-300 truncate">{log.email}</span>
                              <span className="text-emerald-500 text-[7px] shrink-0 font-bold uppercase">✓ SYNCED</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Contact credentials, Mock QR code placeholder (right) */}
        <div className="lg:col-span-6 bg-[#1F2937]/50 border border-gray-800 p-6 rounded-xl flex flex-col justify-between min-h-[350px]">
          <div>
            <div className="border-b border-gray-800 pb-2.5 mb-4 flex justify-between items-center">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest font-bold">
                {emailPreviewTab === 'directory' ? 'CORPORATE CONTACT DIRECTORY' : 'AUTOMATED EMAIL TEMPLATE PREVIEW'}
              </span>
              <div className="flex gap-1.5 p-0.5 bg-gray-950 border border-gray-800 rounded text-[9px] font-mono">
                <button
                  type="button"
                  onClick={() => setEmailPreviewTab('directory')}
                  className={`px-2 py-1 rounded transition-all font-bold cursor-pointer ${
                    emailPreviewTab === 'directory'
                      ? 'bg-[#10B981] text-gray-950 font-extrabold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  INFO & QR
                </button>
                <button
                  type="button"
                  onClick={() => setEmailPreviewTab('email')}
                  className={`px-2 py-1 rounded transition-all font-bold cursor-pointer ${
                    emailPreviewTab === 'email'
                      ? 'bg-[#10B981] text-gray-950 font-extrabold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  EMAIL PREVIEW
                </button>
              </div>
            </div>

            {emailPreviewTab === 'directory' ? (
              <div className="grid grid-cols-2 gap-4">
                {/* Left Contact Fields */}
                <div className="space-y-3 font-mono text-xs text-gray-300">
                  <div>
                    <span className="text-gray-500 text-[8px] block uppercase">DEVELOPMENT EMAIL</span>
                    <span className="text-white hover:text-emerald-300 transition-colors">partner@soupro.com</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[8px] block uppercase">AFFILIATE NETWORK</span>
                    <span className="text-white hover:text-emerald-300 transition-colors">affiliates.souarchitect.com</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-[8px] block uppercase">OFFICIAL PRESENCE</span>
                    <span className="text-white">Soupro Digital Services, Inc.</span>
                  </div>
                </div>

                {/* Right Abstract QR Code representation */}
                <div className="border border-gray-800 bg-gray-950 p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-2 select-none">
                  <span className="font-mono text-[8px] text-gray-400 uppercase tracking-wider block">LAUNCH DEMO CHANNEL</span>
                  <div className="grid grid-cols-5 gap-0.5 w-16 h-16 bg-gray-950 border border-emerald-500/30 p-1">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full rounded-[1px] ${
                          (i % 3 === 0 || i % 7 === 0 || i === 0 || i === 4 || i === 20 || i === 24)
                            ? 'bg-emerald-400'
                            : 'bg-transparent'
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-[9px] font-mono text-emerald-400">QR-CODE APPROVED</span>
                    <button
                      type="button"
                      onClick={handleDownloadQR}
                      className="mt-1 flex items-center justify-center gap-1.5 px-2.5 py-1 rounded bg-[#1F2937] hover:bg-emerald-500 hover:text-gray-950 border border-gray-700 hover:border-emerald-500 transition-all text-[9.5px] font-mono text-gray-300 cursor-pointer uppercase tracking-wider"
                    >
                      <span>Download QR</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-950 border border-gray-800 rounded-lg p-3 space-y-3">
                {/* Email Envelope Header */}
                <div className="border-b border-gray-800 pb-2 space-y-1 text-[10px] font-mono text-gray-400">
                  <div className="flex justify-between">
                    <span><strong className="text-gray-500">From:</strong> "Soupro Digital Services" &lt;{accessToken ? 'your-authenticated-account' : 'me'}&gt;</span>
                    <span className="text-emerald-500 font-bold uppercase text-[8px] border border-emerald-500/20 px-1.5 py-0.5 bg-emerald-500/10 rounded">GMAIL OUTCOMING</span>
                  </div>
                  <div>
                    <span><strong className="text-gray-500">To:</strong> {demoEmail || 'user@example.com'}</span>
                  </div>
                  <div>
                    <span><strong className="text-gray-500">Subject:</strong> Booking Confirmed: Live Orientation Session</span>
                  </div>
                </div>

                {/* Email Body Preview rendered inside a clean styling container */}
                <div className="bg-white rounded-lg p-4 font-sans text-xs text-gray-800 shadow-inner max-h-[220px] overflow-y-auto leading-relaxed">
                  <div className="text-center mb-4 pb-3 border-b border-gray-100">
                    <h2 className="text-[#059669] font-extrabold text-base m-0">Orientation Slot Confirmed</h2>
                    <p className="text-gray-500 m-1 text-[10px]">Thank you for reserving your seat!</p>
                  </div>
                  
                  <p className="mb-3">Hello,</p>
                  <p className="mb-4">Your live demonstration and orientation session has been scheduled successfully. Here are the booking records registered for your session:</p>
                  
                  <div className="bg-[#f8fafc] p-3 rounded border border-[#f1f5f9] mb-4 text-[11px]">
                    <h4 className="m-0 mb-2 text-gray-600 uppercase font-bold text-[9px] tracking-wide">Reservation Details:</h4>
                    <table className="w-full">
                      <tbody>
                        <tr>
                          <td className="py-0.5 text-gray-500 w-24">Event Type:</td>
                          <td className="py-0.5 text-gray-900 font-semibold text-right">Live Orientation & Onboarding Demo</td>
                        </tr>
                        <tr>
                          <td className="py-0.5 text-gray-500">Your Email:</td>
                          <td className="py-0.5 text-emerald-600 font-semibold text-right truncate max-w-[150px]">{demoEmail || 'user@example.com'}</td>
                        </tr>
                        <tr>
                          <td className="py-0.5 text-gray-500">Lead Tracker:</td>
                          <td className="py-0.5 text-gray-900 font-semibold text-right truncate max-w-[150px]">{targetTitle || 'Leads Sheet (Local)'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="mb-4">The interactive link to join your live demonstration slot, along with reference guides and next steps, will be provided by your organizer shortly.</p>
                  
                  <hr className="border-t border-gray-100 my-3" />
                  <p className="text-[9px] text-gray-400 text-center m-0 leading-normal">
                    This is an automated operational system message sent securely using your connected Workspace service integration.
                  </p>
                </div>
                
                <p className="text-[9px] font-mono text-gray-400 text-center">
                  💡 This template dynamically binds to the user's booking email and your leads directory in real time!
                </p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-[10px] font-mono text-gray-400">
            <span>DIGITAL SYSTEM PRESS ACCESS METRICS</span>
            <span className="text-emerald-400">SECURE ACCESS GRANTED</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-3">
        <span>SOUPRO DIGITAL SERVICES METADATA</span>
        <span>SOUARCHITECT CALL TO ACTION</span>
      </div>
    </div>
  );
}
