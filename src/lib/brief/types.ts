export interface BriefItem {
  id: string;
  source: string; // e.g. "gmail"
  sourceAccount: string; // e.g. "user@gmail.com"
  title: string;
  summary: string;
  category: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  actionable: boolean;
  timestamp: Date;
  deadline?: Date | null;
  referenceId?: string;
}
