import type { ComponentType } from "react";
import {
  BookIcon,
  ClipboardIcon,
  GraduationCapIcon,
  HeadsetIcon,
  MegaphoneIcon,
  TrendingUpIcon,
  UsersIcon,
} from "@/components/icons";

export type IconComponent = ComponentType<{ className?: string }>;

export const tabIcons: Record<string, IconComponent> = {
  "customer-education": BookIcon,
  "product-marketing": MegaphoneIcon,
  "sales-enablement": TrendingUpIcon,
  "learning-development": GraduationCapIcon,
  "product-management": ClipboardIcon,
  "employee-training": UsersIcon,
  "customer-support": HeadsetIcon,
};
