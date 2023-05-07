"use client";

import { Task } from "@/components/Task";
import { useTasksStore } from "@/store";
import { useRef, useState } from "react";
import { shallow } from "zustand/shallow";

type TaskState = "TO DO" | "IN PROGRESS" | "DONE";

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

  return (
    <div className="card max-w-lg">
      <div className="card-body">
        <div className="card-title">
          <p>{state}</p>
          <NewTaskModal state={state} />
        </div>
        {tasks.map((task) => (
          <Task key={task.id} taskId={task.id} />
        ))}
      </div>
    </div>
  );
}

const NewTaskModal = ({ state }: ModalProps) => {
  const addTask = useTasksStore((store) => store.addTask);
  const numTasks = useTasksStore().tasks.length;

  const [title, setTitle] = useState("");

  const addNewTask = (state: TaskState, title: string) => {
    if (title === "") return;

    addTask({
      id: numTasks + 1,
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
