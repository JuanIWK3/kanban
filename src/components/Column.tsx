"use client";

import { Task } from "@/components/Task";
import { useTasksStore } from "@/store";
import { TaskState } from "@/types";
import { useRef, useState } from "react";
import { shallow } from "zustand/shallow";

interface ColumnProps {
  state: TaskState;
}

interface ModalProps {
  state: TaskState;
}

export default function Column({ state }: ColumnProps) {
  const tasks = useTasksStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const setDraggedTask = useTasksStore((store) => store.setDraggedTask);
  const draggedTaskTitle = useTasksStore((store) => store.draggedTask);
  const moveTask = useTasksStore((store) => store.moveTask);
  const [canDrop, setCanDrop] = useState(false);

  return (
    <div
      className={`column card max-w-lg ${canDrop ? "dragging" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setCanDrop(true);
      }}
      onDrop={(e) => {
        if (!draggedTaskTitle) return;
        if (tasks.find((task) => task.title === draggedTaskTitle)) return;
        moveTask(draggedTaskTitle, state);
        setDraggedTask(null);
        setCanDrop(false);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        console.log("leave");
        setCanDrop(false);
      }}
    >
      <div className="card-body">
        <div className="card-title">
          <p>{state}</p>
          <NewTaskModal state={state} />
        </div>
        {tasks.map((task) => (
          <Task key={task.title} title={task.title} />
        ))}
      </div>
    </div>
  );
}

const NewTaskModal = ({ state }: ModalProps) => {
  const addTask = useTasksStore((store) => store.addTask);
  const [title, setTitle] = useState("");
  const addNewTask = (state: TaskState, title: string) => {
    if (title === "") return;

    addTask({
      state,
      title,
    });

    setTitle("");
  };

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <button
        onClick={() => openModal()}
        className="btn btn-ghost rounded-full text-2xl"
      >
        +
      </button>
      <dialog className="dialog" ref={dialogRef}>
        <div className="card-body gap-4">
          <div className="card-title">New Task</div>
          <form
            method="dialog"
            onSubmit={(e) => console.log(e)}
            className="form-control gap-4"
          >
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Task Title"
              className="input input-bordered"
            />
            <button
              value="submit"
              formMethod="dialog"
              className="btn btn-primary"
              onClick={() => addNewTask(state, title)}
            >
              Add Task
            </button>
            <button value="cancel" formMethod="dialog" className="btn">
              Cancel
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
