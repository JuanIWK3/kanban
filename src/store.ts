import { StateCreator, create } from "zustand";
import { Tasks } from "./types";

interface TasksState {
  tasks: Tasks[];
  addTask: (task: Tasks) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, task: Tasks) => void;
}

const store: StateCreator<TasksState, [], []> = (set) => ({
  tasks: [
    {
      id: 1,
      title:
        "Learn TypeScript and React together with Zustand and GraphQL and Next.js and TailwindCSS and Vercel and FaunaDB and Auth0",
      state: "TO DO",
    },
    {
      id: 2,
      title: "Learn React",
      state: "IN PROGRESS",
    },
    {
      id: 3,
      title: "Learn Next.js",
      state: "DONE",
    },
    {
      id: 4,
      title: "Learn GraphQL",
      state: "TO DO",
    },
  ],
  addTask: (task: Tasks) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  deleteTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  updateTask: (id: number, task: Tasks) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? task : t)),
    })),
});

export const useTasksStore = create<TasksState>(store);
