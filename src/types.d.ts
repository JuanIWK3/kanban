export interface Tasks {
  id: number;
  title: string;
  state: "TO DO" | "IN PROGRESS" | "DONE";
  description?: string;
}
