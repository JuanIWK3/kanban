import { StateCreator, create } from "zustand";
import { Task, TaskState } from "./types";
import { devtools, persist } from "zustand/middleware";

interface TasksState {
  tasks: Task[];
  draggedTask: string | null;
  addTask: (task: Task) => void;
  deleteTask: (title: string) => void;
  updateTask: (title: string, task: Task) => void;
  setDraggedTask: (title: string | null) => void;
  moveTask: (title: string, state: TaskState) => void;
}

const initialTasks: Task[] = [
  {
    title:
      "Learn TypeScript and React together with Zustand and GraphQL and Next.js and TailwindCSS and Vercel and FaunaDB and Auth0",
    state: "TO DO",
  },
  {
    title: "Learn React",
    state: "IN PROGRESS",
  },
  {
    title: "Learn Next.js",
    state: "DONE",
  },
  {
    title: "Learn GraphQL",
    state: "TO DO",
  },
];

export const useTasksStore = create<TasksState>()(
  persist(
    devtools((set) => ({
      tasks: initialTasks,
      draggedTask: null,
      addTask: (task: Task) =>
        set((state) => ({ tasks: [...state.tasks, task] }), false, "addTask"),
      deleteTask: (title: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.title !== title),
        })),
      updateTask: (title: string, task: Task) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.title === title ? task : t)),
        })),
      setDraggedTask: (title: string | null) =>
        set({
          draggedTask: title,
        }),
      moveTask: (title: string, status: TaskState) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.title === title ? { ...t, state: status } : t
          ),
        })),
    })),
    {
      name: "tasks-storage",
    }
  )
);
