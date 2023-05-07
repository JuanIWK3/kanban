import { useTasksStore } from "@/store";

interface TaskProps {
  taskId: number;
}

export const Task = ({ taskId }: TaskProps) => {
  const task = useTasksStore((store) =>
    store.tasks.find((t) => t.id === taskId)
  );

  if (!task) {
    return null;
  }

  return (
    <div className="card shadow-md max-w-lg">
      <div className="card-body">
        <div className="card-title">
          <div
            className="tooltip text-left tooltip-bottom"
            data-tip={task.title}
          >
            <span className="line-clamp-2">{task.title}</span>
          </div>
        </div>
        <div className="text-gray-500 line-clamp-3">
          {task.description ?? ""}
        </div>
      </div>
    </div>
  );
};
