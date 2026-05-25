export type JobType = "Job" | "Internship" | "Student Job";
export type Work = {
  name: string;
  company?: string;
  date: string;
  desc: string[];
  type?: JobType;
};
