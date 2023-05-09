export type TaskState = "TO DO" | "IN PROGRESS" | "DONE";

export interface Task {
  title: string;
  state: TaskState;
  description?: string;
}
