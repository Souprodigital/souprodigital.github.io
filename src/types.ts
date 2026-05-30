/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SlidePage {
  id: number;
  title: string;
  subtitle: string;
  category: string;
}

export interface MarketValidationInput {
  productIdea: string;
  category: string;
  competitorVolume: 'low' | 'medium' | 'high';
  targetAudience: string;
}

export interface MarketValidationResult {
  probabilityScore: number; // 0 to 100
  saturationScore: number;   // 0 to 100
  painPointDensity: number;  // 0 to 100
  monetizationGap: number;   // 0 to 100
  insights: string[];
  recommendedModel: string;
  estimatedPricingRange: string;
}

export interface BookChapter {
  chapterNumber: number;
  title: string;
  durationMinutes: number;
  subsections: string[];
  purpose: string;
}

export interface PublishingMetadata {
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  canonicalUrl: string;
}

export interface SecurityTokenLog {
  id: string;
  timestamp: string;
  event: string;
  status: 'SUCCESS' | 'WARNING' | 'SECURED';
  details: string;
}

export interface KPIOverview {
  totalRevenue: number;
  totalCreators: number;
  creditTransactions: number;
  activeSecuredLinks: number;
  systemUptime: string;
}

export interface CompetitorComparisonRow {
  feature: string;
  description: string;
  traditionalAiWriter: 'no' | 'partial' | 'yes';
  coursePlatform: 'no' | 'partial' | 'yes';
  digitalProductTool: 'no' | 'partial' | 'yes';
  souArchitect: 'no' | 'partial' | 'yes';
  highlight: boolean;
}

export interface AudienceProfile {
  title: string;
  iconName: string;
  painPoint: string;
  solutionImpact: string;
  conversionLift: string;
  monetizationGoal: string;
}

export interface RoadmapMilestone {
  period: string;
  title: string;
  description: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED';
}
