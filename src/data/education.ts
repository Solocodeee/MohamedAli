import type { EducationItem, Certification } from '@/types';

export const education: EducationItem[] = [
  {
    id: 'law',
    degree: "Bachelor's Degree in Law",
    institution: 'Helwan University — Faculty of Law',
    status: 'Graduated',
  },
];

export const certifications: Certification[] = [
  { id: 'pmp', name: 'PMP Training — 35 Hours (PMI Eligibility Completed)', year: '2025' },
  { id: 'data', name: 'Data Analysis (Excel, Power BI, SQL, Python)', year: '2025' },
  { id: 'sales-comm', name: 'Sales & Communication Training Programs (various institutions)', year: '' },
];
