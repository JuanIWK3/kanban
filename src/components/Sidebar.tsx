"use client";

import { useTasksStore } from "@/store";
import { NewTask } from "./NewTask";

export default function SideBar() {
  const draggedTask = useTasksStore((state) => state.draggedTask);
  return (
    <div className="card shadow-lg">
      <div className="card-body ">
        <div className="card-title">Sidebar</div>
        <div className="divider" />
        <NewTask />
        <button className="btn btn-ghost">Notifications</button>
        <button className="btn btn-ghost">Calendar</button>
        <button className="btn btn-ghost btn-outline">Kanban</button>
        <button className="btn btn-ghost">All docs</button>
        <button onClick={() => console.log(draggedTask)}>Draggable</button>
      </div>
    </div>
  );
}
