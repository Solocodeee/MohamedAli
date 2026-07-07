import type { Initiative } from '@/types';

export const initiatives: Initiative[] = [
  {
    id: 'jcc-branch-build',
    title: 'Building a Branch From Zero',
    organization: 'JCC Training Academy',
    summary:
      'Set up an entire branch\u2019s operating model from scratch — workflows, hiring, training, and reporting — before a single KPI existed to measure it against.',
    outcomes: [
      'Operational structure and SOPs stood up across Sales, Operations, and Education',
      'New onboarding and continuous-training program for the sales team',
      'KPI and reporting framework built for department-level visibility',
    ],
    tags: ['Operations', 'Team Building', 'KPI Design'],
  },
  {
    id: 'rcc-crm',
    title: 'Funnel & CRM Overhaul',
    organization: 'Russian Culture Center',
    summary:
      'Replaced ad-hoc follow-up with a structured CRM and sales funnel, then coached the team on the new process until it stuck.',
    outcomes: [
      'CRM and structured funnel implemented across the branch',
      'Measurable lift in conversion and retention rates',
      'Follow-up system standardized across the sales team',
    ],
    tags: ['CRM', 'Sales Funnel', 'Retention'],
  },
  {
    id: 'consulting',
    title: 'Sales Training, Portable Across Academies',
    organization: 'Independent Consulting — 5+ organizations',
    summary:
      'Took one coaching framework — communication, objection handling, negotiation, closing — and adapted it across five different training academies.',
    outcomes: [
      'Delivered to Planit Software, Eraasoft, Russian Cultural Center, MEC Academy, and Be Fluent',
      '1:1 coaching, mock calls, and performance assessments built into each engagement',
      'Reusable onboarding and KPI templates left behind for each team',
    ],
    tags: ['Sales Training', 'Coaching', 'Consulting'],
  },
];
