export interface TaskType {
  id: string;
  name: string;
  relatedFeature: string;
  priority: number;
  started: boolean;
  blocked: boolean;
  completed: boolean;
  startDate?: Date;
  completedDate?: Date;
  notes: string;
}
