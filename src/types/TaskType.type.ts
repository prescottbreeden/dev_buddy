export interface TaskType {
  id: string;
  description: string;
  name: string;
  relatedFeature: string;
  priority: number;
  started: boolean;
  blocked: boolean;
  completed: boolean;
  startDate?: Date;
  completedDate?: Date;
  notes: string;
  stats: any;
}
