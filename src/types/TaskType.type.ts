export interface TaskType {
  id: string;
  accumulatedTime: number;
  completed: boolean;
  completedDate?: Date;
  description: string;
  isActive: boolean;
  name: string;
  notes: string;
  originalEstimate: number;
  priority: number;
  relatedFeature: string;
  started: boolean;
  startedDate?: Date;
}
