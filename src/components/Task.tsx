"use client";
import { useTasksStore } from "@/store";
import { useEffect, useRef, useState } from "react";

interface TaskProps {
  title: string;
}

export const Task = ({ title }: TaskProps) => {
  const [dropped, setDropped] = useState(false);
  const task = useTasksStore((store) =>
    store.tasks.find((t) => t.title === title)
  );

  const setDraggedTask = useTasksStore((store) => store.setDraggedTask);

  if (!task) {
    return null;
  }

  return (
    <div
      draggable="true"
      onDragStart={() => setDraggedTask(task.title)}
      className="task card hover:bg-slate-100 shadow-md max-w-lg cursor-move border-gray-300 border-2 transition-all duration-500"
    >
      <div className="card-body">
        <div className="card-title line-clamp-2">{task.title}</div>
        <div className="text-gray-500 line-clamp-3">
          {task.description ?? ""}
        </div>
      </div>
    </div>
  );
};
