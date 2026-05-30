/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CompetitorComparisonRow, AudienceProfile, RoadmapMilestone } from './types';

export const METHOD_STAGES = [
  {
    step: '01',
    name: 'Validate',
    description: 'Verify audience search demand, competitor volume, and estimate conversion probability BEFORE spending time writing content.',
    badge: 'Risk Mitigation',
    indicator: 'Selling Probability Score'
  },
  {
    step: '02',
    name: 'Research',
    description: 'Synthesize thousands of discussions, community posts, pain points, and current products to map real user desires.',
    badge: 'Audience Alignment',
    indicator: 'Pain Point Dictionary'
  },
  {
    step: '03',
    name: 'Outline',
    description: 'Generate high-execution, premium chapter outlines, pedagogical guides, and book blueprints based on deep cognitive layout principles.',
    badge: 'Structural Planning',
    indicator: '10+ Chapter Blueprint'
  },
  {
    step: '04',
    name: 'Create',
    description: 'Draft, publish, and structure educational materials with direct, professional, high-vibe prose, avoiding generic regurgitated AI slop.',
    badge: 'Asset Generation',
    indicator: 'Synthesis Engine'
  },
  {
    step: '05',
    name: 'Sell',
    description: 'Construct instant high-converting landing pages, SEO-optimized listings, and native Whop-gated checkout access in minutes.',
    badge: 'Frictionless Conversion',
    indicator: 'WYSIWYG Publishing'
  },
  {
    step: '06',
    name: 'Protect',
    description: 'Deliver generated assets through the Security Vault featuring encrypted token streaming, signed access tokens, and expiring URLs.',
    badge: 'Revenue Assurance',
    indicator: 'Anti-Piracy Security Vault'
  }
];

export const COMPETITORS_MATRIX: CompetitorComparisonRow[] = [
  {
    feature: 'Market Idea Validation',
    description: 'Pre-calculates student demand and competitor gaps before writing',
    traditionalAiWriter: 'no',
    coursePlatform: 'no',
    digitalProductTool: 'no',
    souArchitect: 'yes',
    highlight: true
  },
  {
    feature: 'AI Synthesis & Outline Engine',
    description: 'Generates structured 10+ chapter premium books with deep educational frameworks',
    traditionalAiWriter: 'partial',
    coursePlatform: 'no',
    digitalProductTool: 'no',
    souArchitect: 'yes',
    highlight: false
  },
  {
    feature: 'Native Whop Gate Integration',
    description: 'Automated OAuth gating, token authentication, and membership sync',
    traditionalAiWriter: 'no',
    coursePlatform: 'no',
    digitalProductTool: 'partial',
    souArchitect: 'yes',
    highlight: true
  },
  {
    feature: 'Anti-Piracy Delivery & Vault',
    description: 'Tokenized expiring content links and encrypted storage blocks to limit downloads',
    traditionalAiWriter: 'no',
    coursePlatform: 'partial',
    digitalProductTool: 'partial',
    souArchitect: 'yes',
    highlight: true
  },
  {
    feature: 'Built-in WYSIWYG Landing Builder',
    description: 'Creates fully responsive sales pages, public listings, and SEO assets directly',
    traditionalAiWriter: 'no',
    coursePlatform: 'yes',
    digitalProductTool: 'partial',
    souArchitect: 'yes',
    highlight: false
  },
  {
    feature: 'Credit Wallet Analytics',
    description: 'Granular tracking of server compute, API limits, and user monetization records',
    traditionalAiWriter: 'no',
    coursePlatform: 'no',
    digitalProductTool: 'no',
    souArchitect: 'yes',
    highlight: false
  }
];

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    title: 'Digital Authors',
    iconName: 'BookOpen',
    painPoint: 'Spending months writing niche ebooks that fail to align with dynamic search trends or get shared online free.',
    solutionImpact: 'Pre-validates book titles and locks PDF distribution under personal tokenized expiring streams.',
    conversionLift: '+38% sales efficiency',
    monetizationGoal: '$5k - $15k per release'
  },
  {
    title: 'Modern Educators',
    iconName: 'Award',
    painPoint: 'Tired of generic AI text generators producing repetitive fluff that dilutes pedagogical reputation.',
    solutionImpact: 'Structures chapter lessons with robust learning retention paths, case studies, and interactive glossaries.',
    conversionLift: '+52% course completion rate',
    monetizationGoal: '$10k - $30k recurring'
  },
  {
    title: 'Niche Consultants & Coaches',
    iconName: 'Users',
    painPoint: 'Trading hours for dollars without packaged high-ticket assets to sell on autopilot to prospective clients.',
    solutionImpact: 'Creates deep playbook guides, strategy blueprints, and system architectures that command premium high-ticket entry fees.',
    conversionLift: '3x lead-to-client pipeline speed',
    monetizationGoal: '$150/unit standalone high-ticket sales'
  },
  {
    title: 'Knowledge Entrepreneurs',
    iconName: 'Globe',
    painPoint: 'Managing 7 different platforms for validation, design, hosting, billing, gating, and security.',
    solutionImpact: 'Unifies creation from raw research to Whop payment gating and automated delivery under a single modernist layout.',
    conversionLift: '80% database & overhead reduction',
    monetizationGoal: '$20k - $50k integrated SaaS/Info hybrid'
  }
];

export const ROADMAP: RoadmapMilestone[] = [
  {
    period: 'Q3 - Q4 2025',
    title: 'Core Architecture Deployment',
    description: 'Engineered the deep validation score matrices and secure tokenized file streaming. Released beta Whop OAuth integrations key.',
    status: 'COMPLETED'
  },
  {
    period: 'Q1 - Q2 2026',
    title: 'SouArchitect V1 Global Launch',
    description: 'Publishing of the interactive Synthesis Studio workspace (structured 10+ chapter plans) and automated WYSIWYG listing creation.',
    status: 'IN_PROGRESS'
  },
  {
    period: 'Q3 - Q4 2026',
    title: 'Advanced Anti-Piracy Vault & Multi-Gate',
    description: 'Introducing dynamic invisible PDF watermarking and expansion of localized third-party gateways alongside Whop checkout limits.',
    status: 'PLANNED'
  }
];
