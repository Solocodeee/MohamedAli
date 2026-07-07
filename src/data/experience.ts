import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'jcc',
    company: 'JCC Training Academy',
    current: true,
    roles: [{ title: 'Branch Manager & Business Developer', period: 'Jan 2026 — Now' }],
    highlights: [
      'Established the branch operational structure from the ground up, building workflows and standards across every department.',
      'Recruited, trained, and managed the sales team, implementing onboarding and continuous performance-development programs.',
      'Designed sales processes that improved lead management, follow-up, and conversion rates.',
      'Built operational systems for Sales, Operations, and Education to improve efficiency and service quality.',
      'Conducted market research and competitor analysis to strengthen the academy\u2019s position.',
      'Established KPIs, performance-monitoring systems, and reporting mechanisms to track departmental performance.',
    ],
  },
  {
    id: 'befluent',
    company: 'Be Fluent Company',
    current: false,
    roles: [
      { title: 'Branch Manager', period: 'Jan 2025 — Now' },
      { title: 'Business Developer', period: 'Oct 2024 — Dec 2024' },
    ],
    highlights: [
      'Oversaw branch performance, ensuring operational excellence and consistent enrollment growth.',
      'Monitored and developed sales team performance through KPI-driven coaching.',
      'Coordinated with marketing and academic teams to enhance student acquisition and satisfaction.',
      'Implemented feedback-based service improvements that increased retention rates.',
    ],
  },
  {
    id: 'rcc',
    company: 'Russian Culture Center',
    current: false,
    roles: [
      { title: 'Business Developer', period: 'May 2025 — Oct 2025' },
      { title: 'Sales Team Leader', period: 'May 2024 — May 2025' },
      { title: 'Head of Quality Control', period: 'Jan 2024 — Apr 2024' },
      { title: 'Team Leader', period: 'Dec 2022 — Dec 2023' },
      { title: 'Senior Sales', period: 'Sep 2022 — Nov 2022' },
    ],
    highlights: [
      'Progressed through five roles in three years, from Senior Sales to Business Developer, on performance.',
      'Led branch operations across sales, marketing, and student services; built and managed a high-performing team that consistently hit monthly and quarterly revenue targets.',
      'Implemented a CRM and structured sales funnels, increasing conversion and retention rates.',
      'Built structured follow-up systems and set quality standards for student experience and service delivery.',
      'Monitored instructors\u2019 performance and academic operations to safeguard learning outcomes.',
      'Designed and delivered internal sales training programs.',
    ],
  },
  {
    id: 'harvest',
    company: 'Harvest British College',
    current: false,
    roles: [{ title: 'Sales Executive → Senior Sales → Team Leader', period: '2020 — 2022' }],
    highlights: [
      'Promoted through three roles based on performance.',
      'Supported management in leading the sales floor, distributing targets, and supervising daily performance.',
      'Took on Sales-Manager-level responsibility during a period of organizational restructuring.',
      'Trained new hires and improved onboarding, boosting team productivity and closing efficiency.',
      'Consistently ranked as a top performer, contributing to maximized enrollment and revenue growth.',
    ],
  },
  {
    id: 'consultant',
    company: 'Independent — Multiple Academies & Training Companies',
    current: true,
    roles: [{ title: 'Sales Trainer & Business Development Consultant', period: '2023 — Present' }],
    highlights: [
      'Delivered sales training programs across multiple academies and training companies, including Planit Software, Eraasoft, Russian Cultural Center, MEC Academy, and Be Fluent.',
      'Designed coaching frameworks covering communication, objection handling, negotiation, and closing.',
      'Supported organizations in building sales funnels, CRM workflows, and lead-nurturing systems.',
      'Developed onboarding processes and KPI structures to accelerate performance and conversion.',
      'Ran 1:1 coaching, mock calls, and performance assessments to build high-performing teams.',
    ],
  },
];
