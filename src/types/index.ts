export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  phones: string[];
  linkedin: string;
  cvFile: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  roles: {
    title: string;
    period: string;
  }[];
  location?: string;
  current: boolean;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  status: string;
}

export interface Certification {
  id: string;
  name: string;
  year: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number; // 0-100 for visual bar
}

export interface Initiative {
  id: string;
  title: string;
  organization: string;
  summary: string;
  outcomes: string[];
  tags: string[];
}
