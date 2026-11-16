import type { ReactNode } from "react";

export type SkillCategory = "frontend" | "backend" | "tools" | "core";
export type SkillFilter = "all" | SkillCategory;

export type ProjectKey = "cinetrack" | "bookvibes" | "heroio";

export interface NavLink {
  href: string;
  label: string;
  mobileLabel: string;
}

export interface SkillItem {
  label: string;
  /** Font Awesome class, e.g. "fa-brands fa-react text-cyan-400" */
  icon?: string;
  /** Short text badge used instead of an icon (e.g. "TS") */
  badge?: { text: string; className: string };
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  subtitle: string;
  icon: string;
  iconBox: string;
  items: SkillItem[];
}

export interface TechTag {
  label: string;
  className: string;
}

export interface Project {
  key: ProjectKey;
  title: string;
  icon: string;
  live: string;
  category: string;
  categoryClass: string;
  banner: string;
  iconBox: string;
  description: string;
  tags: TechTag[];
  detail: {
    title: string;
    stack: string[];
    highlights: string[];
  };
}

export interface TimelineEntry {
  dotClass: string;
  badge: string;
  badgeClass: string;
  meta?: string;
  title: string;
  body?: ReactNode;
}

export type ToastItem = { id: number; message: string; leaving: boolean };
