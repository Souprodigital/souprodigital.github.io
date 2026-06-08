/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {
  Monitor,
  FileText,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Printer,
  Compass,
  ArrowRight,
  Smartphone,
  Eye,
  Settings,
  HelpCircle,
  Download,
  Check,
  RefreshCw,
  Languages
} from 'lucide-react';
import {
  CoverPage,
  ExecutiveOverviewPage,
  ProblemPage,
  SolutionPage,
  MarketValidationPage,
  BookSynthesisPage,
  LivePublishingPage,
  MonetizationPage,
  SecurityVaultPage,
  AnalyticsCommandPage,
  CompetitiveAdvantagePage,
  IdealUsersPage,
  CompanyStoryPage,
  ContactPage,
  VisionPage,
  GrowthChartsPage
} from './SlidesList';
import { Logo } from './Logo';

interface PresentationShellProps {
  // Config parameters if required
}

// Helper utility to safely sanitize cloned document stylesheets/elements from oklch, oklab, or color-mix functions
// which the html2canvas internal CSS parser is unable to support, and override iframe's getComputedStyle.
const setupSafeCloneForHtml2Canvas = (clonedDoc: Document) => {
  const stripUnsupportedColors = (cssText: string): string => {
    if (!cssText) return '';
    const targets = ['oklch(', 'oklab(', 'color-mix('];
    let processed = cssText;
    
    for (const target of targets) {
      let index: number;
      while ((index = processed.toLowerCase().indexOf(target)) !== -1) {
        let depth = 1;
        let i = index + target.length;
        while (i < processed.length && depth > 0) {
          if (processed[i] === '(') depth++;
          else if (processed[i] === ')') depth--;
          i++;
        }
        if (depth === 0) {
          const fullMatch = processed.substring(index, i);
          let fallback = 'transparent';
          
          if (fullMatch.includes('color-mix')) {
            fallback = 'currentColor';
          } else {
            const match = fullMatch.match(/(?:oklch|oklab)\(([\d.]+)(%?)/i);
            if (match) {
              let lightness = parseFloat(match[1]);
              if (!isNaN(lightness)) {
                if (match[2] === '%' || lightness > 1) {
                  lightness = lightness / 100;
                }
                if (lightness > 0.6) {
                  fallback = '#f8fafc';
                } else if (lightness > 0.3) {
                  fallback = '#64748b';
                } else {
                  fallback = '#020617';
                }
              }
            } else {
              fallback = '#94a3b8';
            }
          }
          
          processed = processed.substring(0, index) + fallback + processed.substring(i);
        } else {
          break;
        }
      }
    }
    return processed;
  };

  try {
    // 1. Clean style elements in the cloned document
    const styleTags = clonedDoc.querySelectorAll('style');
    styleTags.forEach(tag => {
      const cssText = tag.innerHTML;
      if (cssText && (cssText.includes('oklch') || cssText.includes('oklab') || cssText.includes('color-mix'))) {
        tag.innerHTML = stripUnsupportedColors(cssText);
      }
    });

    // 2. Clean inline style attributes
    const allElements = clonedDoc.querySelectorAll('[style]');
    allElements.forEach(el => {
      const styleAttr = el.getAttribute('style');
      if (styleAttr && (styleAttr.includes('oklch') || styleAttr.includes('oklab') || styleAttr.includes('color-mix'))) {
        el.setAttribute('style', stripUnsupportedColors(styleAttr));
      }
    });

    // 3. Override getComputedStyle on the cloned window to proxy style reads
    if (clonedDoc.defaultView) {
      const originalGetComputedStyle = clonedDoc.defaultView.getComputedStyle;
      clonedDoc.defaultView.getComputedStyle = function(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration {
        const style = originalGetComputedStyle.call(clonedDoc.defaultView, elt, pseudoElt);
        return new Proxy(style, {
          get(target: any, prop: string | symbol) {
            const val = target[prop];
            if (typeof val === 'function') {
              if (prop === 'getPropertyValue') {
                return function(propertyName: string) {
                  const value = target.getPropertyValue(propertyName);
                  if (typeof value === 'string' && (value.includes('oklab') || value.includes('oklch') || value.includes('color-mix'))) {
                    return stripUnsupportedColors(value);
                  }
                  return value;
                };
              }
              return val.bind(target);
            }
            if (typeof val === 'string' && (val.includes('oklab') || val.includes('oklch') || val.includes('color-mix'))) {
              return stripUnsupportedColors(val);
            }
            return val;
          }
        }) as any;
      };
    }
  } catch (err) {
    console.warn('Error setting up safe html2canvas clone:', err);
  }
};

export function PresentationShell({}: PresentationShellProps) {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'presentation' | 'document'>('presentation');
  const [scaleMode, setScaleMode] = useState<'fit' | 'normal'>('fit');
  const [themeMode, setThemeMode] = useState<'charcoal' | 'high-contrast-light'>('charcoal');
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playSpeed, setPlaySpeed] = useState<number>(5000); // ms
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<{
    status: 'idle' | 'rendering' | 'completed' | 'error';
    current: number;
    total: number;
    filename: string;
    type: 'png' | 'pdf' | 'all-pdf';
  }>({
    status: 'idle',
    current: 0,
    total: 0,
    filename: '',
    type: 'png'
  });

  const totalSlides = 16;

  const handleStartJourney = () => {
    if (viewMode === 'presentation') {
      setActiveSlideIdx(15); // Index of ContactPage (shifted)
    } else {
      const element = document.getElementById('booking-form-wrapper');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const slidesMetadata = {
    en: [
      { num: '01', title: 'Cover Title Spec', category: 'BRAND' },
      { num: '02', title: 'The Platform Vision', category: 'STRATEGY' },
      { num: '03', title: 'Scaling Intelligence', category: 'ANALYTICS' },
      { num: '04', title: 'Executive Overview', category: 'PRODUCT SUMMARY' },
      { num: '05', title: 'The Problem Matrix', category: 'MARKET CRACK' },
      { num: '06', title: 'The Solution Loop', category: 'METHODOLOGY' },
      { num: '07', title: 'Market Validation Engine', category: 'PRODUCT SUITE' },
      { num: '08', title: 'Book Synthesis Studio', category: 'PRODUCT SUITE' },
      { num: '09', title: 'Live Publishing Studio', category: 'PRODUCT SUITE' },
      { num: '10', title: 'Monetization Gate', category: 'INTEGRATIONS' },
      { num: '11', title: 'Security & Delivery Vault', category: 'INTEGRATIONS' },
      { num: '12', title: 'Analytics Command Center', category: 'KPI DASHBOARDS' },
      { num: '13', title: 'Competitive Advantage', category: 'COMPARATIVES' },
      { num: '14', title: 'Ideal Customer Archetypes', category: 'AUDIENCES' },
      { num: '15', title: 'About Soupro Services', category: 'BUSINESS ROADMAP' },
      { num: '16', title: 'Interactive Call Dynamic', category: 'ACTION DIRECTORY' },
    ],
    es: [
      { num: '01', title: 'Portada y Título', category: 'MARCA' },
      { num: '02', title: 'Visión de Plataforma', category: 'ESTRATEGIA' },
      { num: '03', title: 'Escalando Inteligencia', category: 'ANÁLISIS' },
      { num: '04', title: 'Resumen Ejecutivo', category: 'RESUMEN' },
      { num: '05', title: 'Matriz de Problemas', category: 'MERCADO' },
      { num: '06', title: 'Bucle de Soluciones', category: 'METODOLOGÍA' },
      { num: '07', title: 'Escalador de Validación', category: 'PRODUCTOS' },
      { num: '08', title: 'Estudio de Síntesis', category: 'PRODUCTOS' },
      { num: '09', title: 'Publicación en Vivo', category: 'PRODUCTOS' },
      { num: '10', title: 'Puerta de Monetización', category: 'INTEGRACIÓN' },
      { num: '11', title: 'Bóveda de Seguridad', category: 'INTEGRACIÓN' },
      { num: '12', title: 'Centro de Analíticas', category: 'MANDOS' },
      { num: '13', title: 'Ventaja Competitiva', category: 'COMPARATIVAS' },
      { num: '14', title: 'Arquetipos de Usuario', category: 'AUDIENCIAS' },
      { num: '15', title: 'Sobre Servicios Soupro', category: 'HOJA DE RUTA' },
      { num: '16', title: 'Llamada Interactiva', category: 'ACCIÓN' },
    ]
  };

  const currentMetadata = slidesMetadata[language];

  // Helper renderer matching slide indices to Slide Components
  const renderSlideComponent = (idx: number) => {
    switch (idx) {
      case 0: return <CoverPage onStartJourney={handleStartJourney} language={language} />;
      case 1: return <VisionPage language={language} />;
      case 2: return <GrowthChartsPage language={language} />;
      case 3: return <ExecutiveOverviewPage language={language} />;
      case 4: return <ProblemPage language={language} />;
      case 5: return <SolutionPage language={language} />;
      case 6: return <MarketValidationPage language={language} />;
      case 7: return <BookSynthesisPage language={language} />;
      case 8: return <LivePublishingPage language={language} />;
      case 9: return <MonetizationPage language={language} />;
      case 10: return <SecurityVaultPage language={language} />;
      case 11: return <AnalyticsCommandPage language={language} />;
      case 12: return <CompetitiveAdvantagePage language={language} />;
      case 13: return <IdealUsersPage language={language} />;
      case 14: return <CompanyStoryPage language={language} />;
      case 15: return <ContactPage language={language} />;
      default: return <CoverPage onStartJourney={handleStartJourney} language={language} />;
    }
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setActiveSlideIdx((prev) => (prev + 1) % totalSlides);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveSlideIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
      } else if (e.key === 'p' || e.key === 'P') {
        setViewMode((m) => m === 'presentation' ? 'document' : 'presentation');
      } else if (e.key === 'h' || e.key === 'H') {
        setShowHelp((h) => !h);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Autoplay handler
  useEffect(() => {
    let timer: any;
    if (isPlaying && viewMode === 'presentation') {
      timer = setInterval(() => {
        setActiveSlideIdx((prev) => (prev + 1) % totalSlides);
      }, playSpeed);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playSpeed, viewMode]);

  // Export active slide layout as high-quality PNG
  const handleExportCurrentPNG = async () => {
    const element = document.getElementById('active-slide-frame');
    if (!element) return;

    setExportProgress({
      status: 'rendering',
      current: 1,
      total: 1,
      filename: `souarchitect-slide-${activeSlideIdx + 1}.png`,
      type: 'png'
    });

    try {
      const canvas = await html2canvas(element, {
        scale: 2.5, // Ultra-high resolution 2.5x of 1920x1080 -> 4800x2700
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#020617',
        scrollX: 0,
        scrollY: 0,
        width: element.offsetWidth,
        height: element.offsetHeight,
        onclone: (clonedDoc) => {
          setupSafeCloneForHtml2Canvas(clonedDoc);
        }
      });

      const dataUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = `souarchitect-slide-${activeSlideIdx + 1}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      setExportProgress(p => ({ ...p, status: 'completed' }));
      setTimeout(() => {
        setExportProgress(p => ({ ...p, status: 'idle' }));
      }, 3000);
    } catch (err) {
      console.error('Error rendering PNG:', err);
      setExportProgress(p => ({ ...p, status: 'error' }));
      setTimeout(() => setExportProgress(p => ({ ...p, status: 'idle' })), 4000);
    }
  };

  // Export active slide layout as high-quality PDF
  const handleExportCurrentPDF = async () => {
    const element = document.getElementById('active-slide-frame');
    if (!element) return;

    setExportProgress({
      status: 'rendering',
      current: 1,
      total: 1,
      filename: `souarchitect-slide-${activeSlideIdx + 1}.pdf`,
      type: 'pdf'
    });

    try {
      const canvas = await html2canvas(element, {
        scale: 2, // 2x high crisp resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#020617',
        scrollX: 0,
        scrollY: 0,
        width: element.offsetWidth,
        height: element.offsetHeight,
        onclone: (clonedDoc) => {
          setupSafeCloneForHtml2Canvas(clonedDoc);
        }
      });

      const imgData = canvas.toDataURL('image/png');
      const width = canvas.width;
      const height = canvas.height;
      
      const pdf = new jsPDF('l', 'px', [width, height]);
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save(`souarchitect-slide-${activeSlideIdx + 1}.pdf`);

      setExportProgress(p => ({ ...p, status: 'completed' }));
      setTimeout(() => {
        setExportProgress(p => ({ ...p, status: 'idle' }));
      }, 3000);
    } catch (err) {
      console.error('Error rendering PDF:', err);
      setExportProgress(p => ({ ...p, status: 'error' }));
      setTimeout(() => setExportProgress(p => ({ ...p, status: 'idle' })), 4000);
    }
  };

  // Export complete deck as high-quality multi-page PDF
  const handleExportFullPDF = async () => {
    setExportProgress({
      status: 'rendering',
      current: 0,
      total: totalSlides,
      filename: 'souarchitect-complete-pitch-deck.pdf',
      type: 'all-pdf'
    });

    try {
      const slideWidth = 1024;
      const slideHeight = 576;
      const pdf = new jsPDF('l', 'px', [slideWidth, slideHeight]);

      for (let i = 0; i < totalSlides; i++) {
        setExportProgress(p => ({ ...p, current: i + 1 }));
        await new Promise(r => setTimeout(r, 150));
        
        const slideEl = document.getElementById(`export-slide-${i}`);
        if (!slideEl) continue;

        const canvas = await html2canvas(slideEl, {
          scale: 1.8,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#020617',
          width: slideWidth,
          height: slideHeight,
          onclone: (clonedDoc) => {
            setupSafeCloneForHtml2Canvas(clonedDoc);
          }
        });

        const imgData = canvas.toDataURL('image/png');

        if (i > 0) {
          pdf.addPage([slideWidth, slideHeight], 'l');
        }
        pdf.addImage(imgData, 'PNG', 0, 0, slideWidth, slideHeight);
      }

      pdf.save('souarchitect-complete-pitch-deck.pdf');

      setExportProgress(p => ({ ...p, status: 'completed' }));
      setTimeout(() => {
        setExportProgress(p => ({ ...p, status: 'idle' }));
      }, 3000);
    } catch (err) {
      console.error('Error rendering full pitch deck:', err);
      setExportProgress(p => ({ ...p, status: 'error' }));
      setTimeout(() => setExportProgress(p => ({ ...p, status: 'idle' })), 4000);
    }
  };

  const triggerClassicPrint = () => {
    setThemeMode('high-contrast-light');
    setViewMode('document');
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className={`w-full min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      themeMode === 'charcoal' ? 'bg-titanium-midnight text-slate-text' : 'bg-[#F3F4F6] text-[#111827]'
    }`}>
      
      {/* Control Navigation Header */}
      <header className="bg-slate-blue border-b border-slate-border text-slate-text px-6 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4 z-20 shrink-0">
        <div className="flex items-center space-x-3.5">
          <Logo fallbackBgClass="bg-validation-orange" logoText="S" />
          <div>
            <h1 className="font-display font-bold text-sm tracking-[-0.02em] uppercase">SouArchitect Design System Workspace</h1>
            <span className="text-[10px] text-gray-400 block font-mono">SOUPRO DIGITAL SERVICES • PREVIEW SYSTEM v1.4</span>
          </div>
        </div>

        {/* Dynamic State Controllers */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* View mode toggle chips */}
          <div className="inline-flex bg-slate-blue/60 p-1 rounded-md border border-slate-border">
            <button
              onClick={() => setViewMode('presentation')}
              className={`px-3 py-1 text-[11px] uppercase tracking-wider font-mono rounded flex items-center gap-1.5 cursor-pointer transition-all ${
                viewMode === 'presentation' ? 'bg-slate-border text-validation-orange font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              Widescreen 16:9
            </button>
            <button
              onClick={() => setViewMode('document')}
              className={`px-3 py-1 text-[11px] uppercase tracking-wider font-mono rounded flex items-center gap-1.5 cursor-pointer transition-all ${
                viewMode === 'document' ? 'bg-slate-border text-validation-orange font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Linear Read Feed
            </button>
          </div>

          {/* Print & Export Hub dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsExportOpen(!isExportOpen)}
              type="button"
              className={`p-1.5 bg-slate-blue hover:bg-[#1e293b] border border-slate-border text-gray-300 rounded cursor-pointer transition-all flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider ${isExportOpen ? 'ring-1 ring-validation-orange border-validation-orange' : ''}`}
            >
              <Download className="w-3.5 h-3.5 text-validation-orange" />
              <span>Export Deck</span>
            </button>

            {isExportOpen && (
              <div
                id="export-dropdown-menu"
                className="absolute right-0 mt-2.5 w-72 bg-slate-blue border border-slate-border rounded-lg shadow-2xl p-4 z-50 text-xs font-sans space-y-4 text-left"
              >
                <div className="border-b border-slate-border pb-2">
                  <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block font-bold">PRINT & EXPORT ENGINE</span>
                  <p className="text-[10px] text-gray-400 font-mono mt-0.5">SOUPRO EXPORT SUBSYSTEM v1.4</p>
                </div>

                {/* Sub-group: Current Slide */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase block font-mono">Current Slide (Slide {activeSlideIdx + 1})</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        handleExportCurrentPNG();
                        setIsExportOpen(false);
                      }}
                      disabled={exportProgress.status === 'rendering'}
                      className="flex items-center justify-center gap-1.5 py-2 px-2 rounded bg-titanium-midnight hover:bg-[#1e293b] border border-slate-border text-white font-mono text-[10px] uppercase cursor-pointer hover:border-validation-orange/40 active:scale-95 transition-all text-center font-bold"
                    >
                      <span>High-res PNG</span>
                    </button>
                    <button
                      onClick={() => {
                        handleExportCurrentPDF();
                        setIsExportOpen(false);
                      }}
                      disabled={exportProgress.status === 'rendering'}
                      className="flex items-center justify-center gap-1.5 py-2 px-2 rounded bg-titanium-midnight hover:bg-[#1e293b] border border-slate-border text-white font-mono text-[10px] uppercase cursor-pointer hover:border-validation-orange/40 active:scale-95 transition-all text-center font-bold"
                    >
                      <span>Slick PDF</span>
                    </button>
                  </div>
                </div>

                {/* Sub-group: All Slides */}
                <div className="space-y-1.5 pt-2 border-t border-slate-border">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase font-mono">Full Presentation Deck</span>
                    <span className="px-1 py-0.5 text-[8px] font-mono text-validation-orange bg-validation-orange/10 rounded border border-validation-orange/20 font-bold">16 SLIDES</span>
                  </div>
                  <button
                    onClick={() => {
                      handleExportFullPDF();
                      setIsExportOpen(false);
                    }}
                    disabled={exportProgress.status === 'rendering'}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-validation-orange hover:bg-validation-orange/90 text-gray-950 font-mono text-xs font-bold uppercase cursor-pointer active:scale-[0.98] transition-all"
                  >
                    <Download className="w-3.5 h-3.5 shrink-0" />
                    <span>Compile Multi-page PDF</span>
                  </button>
                </div>

                {/* Sub-group: Interactive Print & Layout */}
                <div className="space-y-1.5 pt-2 border-t border-slate-border">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase block font-mono">Classic Hardcopy / Print</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setThemeMode((t) => t === 'charcoal' ? 'high-contrast-light' : 'charcoal');
                      }}
                      type="button"
                      title="Toggle high-contrast print simulation"
                      className="flex-1 py-1.5 px-2 bg-titanium-midnight hover:bg-[#1e293b] text-gray-300 border border-slate-border rounded text-[10px] font-mono text-center flex items-center justify-center gap-1 cursor-pointer transition-all"
                    >
                      <Printer className="w-3 h-3 text-validation-orange" />
                      {themeMode === 'charcoal' ? 'Print Design' : 'Digital Deep'}
                    </button>
                    <button
                      onClick={() => {
                        triggerClassicPrint();
                        setIsExportOpen(false);
                      }}
                      type="button"
                      className="flex-1 py-1.5 px-2 bg-titanium-midnight hover:bg-[#1e293b] text-validation-orange border border-slate-border hover:border-validation-orange/40 rounded text-[10px] font-mono text-center flex items-center justify-center gap-1 cursor-pointer transition-all"
                    >
                      <span>Print Pages</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <div className="inline-flex bg-slate-blue/60 p-1 rounded-md border border-slate-border">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded flex items-center gap-1 transition-all cursor-pointer ${
                language === 'en' ? 'bg-validation-orange text-gray-950 font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('es')}
              className={`px-2.5 py-1 text-[10px] font-mono rounded flex items-center gap-1 transition-all cursor-pointer ${
                language === 'es' ? 'bg-validation-orange text-gray-950 font-bold' : 'text-gray-400 hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          {/* Help Toggle */}
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="p-1.5 bg-slate-blue hover:bg-[#1e293b] border border-slate-border text-gray-400 rounded cursor-pointer transition-all"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main workspace layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Table of Contents left rail sidebar (only visible or relevant for fast scrolling) */}
        <aside className="w-64 bg-slate-blue border-r border-slate-border p-4 overflow-y-auto hidden lg:flex flex-col justify-between shrink-0">
          <div className="space-y-4">
            <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest block font-bold">TABLE OF CONTENTS</span>
            <div className="space-y-1">
              {currentMetadata.map((meta, idx) => {
                const isActive = idx === activeSlideIdx && viewMode === 'presentation';
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveSlideIdx(idx);
                      setViewMode('presentation');
                    }}
                    className={`w-full text-left p-2 rounded text-xs transition-all font-sans flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-slate-border text-white border-l-2 border-validation-orange font-bold pl-2.5 font-mono text-[11px]'
                        : 'text-gray-400 hover:text-white pl-2 hover:bg-slate-border/50 font-mono text-[11px]'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-gray-500 shrink-0">
                      [{meta.num}]
                    </span>
                    <span className="truncate block flex-1">{meta.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Foot */}
          <div className="pt-4 border-t border-slate-border text-[10px] font-mono text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>CANVAS TYPE:</span>
              <span className="text-white">16:9 1920x1080</span>
            </div>
            <div className="flex justify-between">
              <span>FRAME RATIONAL:</span>
              <span className="text-validation-orange uppercase font-bold">Swiss Modernist</span>
            </div>
          </div>
        </aside>

        {/* Content viewer body */}
        <main className="flex-1 flex flex-col overflow-y-auto p-4 md:p-8 justify-center relative bg-titanium-midnight">
          
          {/* Help modal bubble overlays */}
          {showHelp && (
            <div className="absolute top-4 left-4 bg-slate-blue border border-validation-orange p-5 rounded-lg max-w-sm shadow-xl z-30 font-mono text-xs text-gray-300 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-border pb-1.5">
                <span className="font-bold text-validation-orange font-mono uppercase text-[11px]">KEYBOARD SHORTCUTS</span>
                <button onClick={() => setShowHelp(false)} className="text-gray-500 hover:text-white cursor-pointer font-mono text-[11px]">[CLOSE]</button>
              </div>
              <p>• <kbd className="bg-titanium-midnight px-1 rounded text-white">[Space]</kbd> or <kbd className="bg-titanium-midnight px-1 rounded text-white">[Right Arrow]</kbd> : Next Slide Page</p>
              <p>• <kbd className="bg-titanium-midnight px-1 rounded text-white">[Left Arrow]</kbd> : Previous Slide Page</p>
              <p>• <kbd className="bg-titanium-midnight px-1 rounded text-white">[P]</kbd> : Alternate preview mode</p>
              <p>• Gated using secure Whop Tokens of high conversion layout structures.</p>
            </div>
          )}

          {viewMode === 'presentation' ? (
            /* WIDESCREEN 16:9 RATIO BOX PREVIEW MODE */
            <div className="mx-auto w-full max-w-5xl flex flex-col space-y-4">
              
              {/* Scalable Aspect-Ratio Frame Container */}
              <div
                id="active-slide-frame"
                className="presentation-ratio-box w-full bg-titanium-midnight border-[1.5px] border-slate-border rounded-xl overflow-hidden shadow-2xl relative"
              >
                {/* Print High Contrast Overlay filter */}
                <div className={`w-full h-full ${themeMode === 'high-contrast-light' ? 'filter invert brightness-110 contrast-125' : ''}`}>
                  {renderSlideComponent(activeSlideIdx)}
                </div>
              </div>

              {/* Slider playback controls underneath the presentation ratio box */}
              <div className="bg-slate-blue border-[1.5px] border-slate-border px-6 py-3.5 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4">
                        {/* Back / Next Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveSlideIdx((prev) => (prev - 1 + totalSlides) % totalSlides)}
                    title="Previous Slide"
                    className="p-1.5 bg-titanium-midnight hover:bg-[#1e293b] border border-slate-border text-gray-300 rounded cursor-pointer transition-all"
                  >
                    <ChevronLeft className="w-4 h-4 text-validation-orange" />
                  </button>
                  <span className="font-mono text-[11px] text-gray-400 uppercase font-bold tracking-wider">
                    SLIDE {activeSlideIdx + 1} OF 16
                  </span>
                  <button
                    onClick={() => setActiveSlideIdx((prev) => (prev + 1) % totalSlides)}
                    title="Next Slide"
                    className="p-1.5 bg-titanium-midnight hover:bg-[#1e293b] border border-slate-border text-gray-300 rounded cursor-pointer transition-all"
                  >
                    <ChevronRight className="w-4 h-4 text-validation-orange" />
                  </button>
                </div>

                {/* Animated Loop parameters */}
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <div className="inline-flex bg-titanium-midnight p-0.5 rounded border border-slate-border">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className={`px-3 py-1 rounded flex items-center gap-1 cursor-pointer font-mono text-[11.5px] uppercase font-bold transition-all ${isPlaying ? 'bg-validation-orange text-gray-950' : 'text-gray-400 hover:text-white'}`}
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                      {isPlaying ? 'LOOPING' : 'LOOP AUTOPLAY'}
                    </button>
                  </div>

                  <select
                    value={playSpeed}
                    onChange={(e) => setPlaySpeed(Number(e.target.value))}
                    className="bg-titanium-midnight border border-slate-border text-gray-300 text-[11px] font-mono rounded px-2.5 py-1 uppercase"
                  >
                    <option value={3000}>3s Rate</option>
                    <option value={5000}>5s Rate</option>
                    <option value={10000}>10s Rate</option>
                  </select>
                </div>

                <div className="text-right text-[10px] font-mono text-gray-500">
                  <span>TIP: CLICK SIDEBAR TO JUMP SLIDES</span>
                </div>
              </div>
            </div>
          ) : (
            /* LINEAR EXCECUTIVE DOCUMENT READ FEED VIEW MODE */
            <div className="w-full max-w-4xl mx-auto space-y-12 py-6">
              <div className="text-center pb-6 border-b border-slate-border">
                <span className="font-mono text-xs text-validation-orange uppercase tracking-widest font-bold">EXECUTIVE DOCUMENT READ-THROUGH</span>
                <h2 className="text-3xl font-display font-bold tracking-[-0.02em] text-white mt-1 uppercase">SouArchitect Complete Strategic Presentation</h2>
                <p className="text-xs text-gray-450 mt-2 max-w-xl mx-auto">
                  Scroll downwards to evaluate the full collection. Interactive calculators, simulation generators, and sandbox tools are live for evaluation inside each section.
                </p>
              </div>

              {[...Array(totalSlides)].map((_, idx) => (
                <div key={idx} className="space-y-3 relative group">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-500 border-b border-slate-border pb-1.5">
                    <span>SECTION GATED 0{idx + 1} / 16</span>
                    <span className="text-validation-orange font-bold uppercase">{currentMetadata[idx].category}</span>
                  </div>

                  {/* Scalable Aspect-Ratio Frame Container */}
                  <div className="presentation-ratio-box w-full bg-titanium-midnight border-[1.5px] border-slate-border rounded-xl sandbox-frame overflow-hidden shadow-xl">
                    <div className={`w-full h-full ${themeMode === 'high-contrast-light' ? 'filter invert brightness-110 contrast-125' : ''}`}>
                      {renderSlideComponent(idx)}
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-center pt-8 border-t border-slate-border">
                <p className="font-mono text-xs text-gray-500 uppercase">END OF CRITERIA REPORT SECTORS.</p>
                <button
                  onClick={() => {
                    setViewMode('presentation');
                    setActiveSlideIdx(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-3 inline-flex items-center gap-1.5 text-validation-orange font-mono text-xs hover:underline cursor-pointer uppercase font-bold"
                >
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Return to Cover Presentation
                </button>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Hidden batch export element containing all 14 slide pages for multi-page PDF generation */}
      <div id="hidden-presentation-export-target" className="absolute pointer-events-none opacity-0 -left-[9999px] top-0 overflow-hidden shrink-0">
        {[...Array(totalSlides)].map((_, idx) => (
          <div
            key={idx}
            id={`export-slide-${idx}`}
            className="bg-titanium-midnight overflow-hidden relative shrink-0"
            style={{ width: '1024px', height: '576px', aspectRatio: '16/9' }}
          >
            <div className={`w-full h-full ${themeMode === 'high-contrast-light' ? 'filter invert brightness-110 contrast-125' : ''}`}>
              {renderSlideComponent(idx)}
            </div>
          </div>
        ))}
      </div>

      {/* Export Compilation & Spinner Progress Overlay Dialog */}
      {exportProgress.status !== 'idle' && (
        <div className="fixed inset-0 bg-[#070a13]/85 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <div className="w-full max-w-sm bg-slate-blue border border-slate-border p-6 rounded-lg shadow-2xl relative overflow-hidden flex flex-col space-y-4 text-left">
            {/* Ambient cyber mesh background lines */}
            <div className="absolute inset-0 modern-grid opacity-10 pointer-events-none"></div>

            <div className="flex items-center justify-between border-b border-slate-border pb-3 z-10">
              <div className="flex items-center space-x-2">
                {exportProgress.status === 'rendering' ? (
                  <RefreshCw className="w-4 h-4 text-validation-orange animate-spin" />
                ) : exportProgress.status === 'completed' ? (
                  <Check className="w-4 h-4 text-validation-orange" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                )}
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  {exportProgress.status === 'rendering' && 'COMPILING SLIDES'}
                  {exportProgress.status === 'completed' && 'EXPORT COMPLETE'}
                  {exportProgress.status === 'error' && 'COMPILATION ERROR'}
                </span>
              </div>
              <span className="font-mono text-[9px] text-gray-500 font-bold">SOUPRO LOGISTICS</span>
            </div>

            <div className="z-10 space-y-1">
              <span className="text-[10px] text-gray-400 block font-mono">FILE DESIGNATION:</span>
              <span className="text-sm font-extrabold text-white font-sans block truncate max-w-xs font-mono uppercase tracking-tight">
                {exportProgress.filename}
              </span>
            </div>

            {exportProgress.type === 'all-pdf' && exportProgress.status === 'rendering' && (
              <div className="space-y-2 z-10">
                <div className="flex justify-between font-mono text-[10px] text-gray-400">
                  <span>SNAPSHOTING PROGRESS:</span>
                  <span className="text-validation-orange font-bold">{exportProgress.current} OF {exportProgress.total}</span>
                </div>
                {/* Glowing fluid linear progress bar */}
                <div className="w-full h-1.5 bg-titanium-midnight rounded-full overflow-hidden border border-slate-border">
                  <div
                    className="h-full bg-gradient-to-r from-validation-orange via-purple-500 to-amethyst-purple transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.5)]"
                    style={{ width: `${(exportProgress.current / exportProgress.total) * 100}%` }}
                  ></div>
                </div>
                <div className="text-[9px] font-mono text-gray flex justify-between">
                  <span className="text-gray-500">Rasterizing CSS layout nodes...</span>
                  <span className="text-validation-orange font-bold font-mono">{Math.round((exportProgress.current / exportProgress.total) * 100)}%</span>
                </div>
              </div>
            )}

            {exportProgress.status === 'completed' && (
              <div className="z-10 bg-validation-orange/10 border border-validation-orange/25 p-3 rounded text-xs text-validation-orange font-mono leading-relaxed uppercase text-[10px]">
                Presentation file compile was completed and is saving right now. You can close this overlay and resume working.
              </div>
            )}

            {exportProgress.status === 'error' && (
              <div className="z-10 bg-rose-500/10 border border-rose-500/25 p-3 rounded text-xs text-rose-400 font-sans leading-relaxed">
                The export operation encountered a render security exception or canvas sizing failure. Please try another download format.
              </div>
            )}

            <div className="flex justify-end pt-2 z-10">
              <button
                disabled={exportProgress.status === 'rendering'}
                onClick={() => setExportProgress(p => ({ ...p, status: 'idle' }))}
                className={`px-3 py-1.5 bg-titanium-midnight hover:bg-[#1e293b] border border-slate-border rounded text-[10px] font-mono uppercase cursor-pointer font-bold ${exportProgress.status === 'rendering' ? 'opacity-30 cursor-not-allowed' : 'text-validation-orange border-validation-orange/30 hover:border-validation-orange/100'}`}
              >
                {exportProgress.status === 'rendering' ? 'RENDERING...' : 'CLOSE OVERLAY'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
