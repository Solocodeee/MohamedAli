import type { SkillGroup } from '@/types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'sales',
    category: 'Sales & Business Development',
    description: 'Turning pipeline into predictable revenue.',
    skills: [
      'Sales Strategy & Target Execution',
      'B2B & B2C Selling',
      'Lead Qualification & Funnel Management',
      'Objection Handling & Closing',
      'Customer Retention & Upselling',
      'Market Expansion & Partnerships',
    ],
  },
  {
    id: 'leadership',
    category: 'Leadership & Team Development',
    description: 'Building teams that hit targets without burning out.',
    skills: [
      'Team Leadership & Coaching',
      'Sales Training & Onboarding',
      'KPI Setting & Performance Tracking',
      'Performance Coaching & Motivation',
      'Quality Assurance & Service Improvement',
    ],
  },
  {
    id: 'operations',
    category: 'Operations & Process Management',
    description: 'The systems that keep growth from breaking.',
    skills: [
      'Sales Pipeline & Forecasting',
      'Customer Journey Optimization',
      'CRM Systems (Zoho, Tamkeen)',
      'Sales Scripts & SOP Development',
      'Cross-Department Collaboration (Sales · Ops · Marketing)',
    ],
  },
  {
    id: 'data',
    category: 'Data & Tools',
    description: 'Deciding with numbers, not instinct.',
    skills: [
      'Microsoft Excel (Advanced)',
      'Power BI — Dashboards & Reporting',
      'SQL (Basic)',
      'Python (Business & Data)',
      'Microsoft Office & Google Workspace',
    ],
  },
  {
    id: 'soft',
    category: 'Soft Skills',
    description: 'What holds the rest together.',
    skills: [
      'Communication & Persuasion',
      'Negotiation',
      'Problem Solving',
      'Time Management',
      'Strategic Thinking',
      'Decision Making',
    ],
  },
];
